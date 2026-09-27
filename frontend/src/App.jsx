import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import ScrollToTop from "./components/layout/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import IndustriesPage from "./pages/IndustriesPage";
import IndustryDetailPage from "./pages/IndustryDetailPage";
import ServicesPage from "./pages/ServicesPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/industries/pharmaceutical" element={<IndustryDetailPage slug="pharmaceutical" />} />
          <Route path="/industries/oil-gas" element={<IndustryDetailPage slug="oil-gas" />} />
          <Route path="/industries/lng" element={<IndustryDetailPage slug="lng" />} />
          <Route path="/industries/power" element={<IndustryDetailPage slug="power" />} />
        </Route>
      </Routes>
    </>
  );
}

