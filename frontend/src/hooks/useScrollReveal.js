import { useEffect, useRef, useState } from "react";

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  const once = options.once ?? false;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Lower threshold on mobile screens (<768px) to prevent elements from staying hidden
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const effectiveThreshold = isMobile ? Math.min(options.threshold || 0.1, 0.05) : (options.threshold || 0.12);
    const effectiveRootMargin = isMobile ? "0px 0px 50px 0px" : (options.rootMargin || "0px 0px -40px 0px");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else {
          if (!once) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold: effectiveThreshold,
        rootMargin: effectiveRootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.rootMargin, once]);

  return [ref, isVisible, scrollDirection];
}
