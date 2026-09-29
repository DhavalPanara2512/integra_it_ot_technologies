import { useEffect, useRef, useState } from "react";

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  // Allow once override, but default to false for bidirectional scroll up/down support
  const once = options.once ?? false;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

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
        threshold: options.threshold || 0.12,
        rootMargin: options.rootMargin || "0px 0px -40px 0px",
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
