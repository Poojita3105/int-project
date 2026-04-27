import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <GlobalStyle />
      {!ready && <Splash onDone={() => setReady(true)} />}
      {ready && (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      )}
    </>
  );
}