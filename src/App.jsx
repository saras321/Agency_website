import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { WhatsAppButton, BackToTop } from "./components/FloatingElements";
import FreeAuditPopup from "./components/FreeAuditPopup";
import { Loader2 } from "lucide-react";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Work = lazy(() => import("./pages/Work"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Fallback Loader
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <Loader2 className="w-12 h-12 text-primary animate-spin" />
  </div>
);

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-background text-textPrimary font-poppins selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* Route Transitions */}
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>

      <Footer />
      
      {/* Global Overlays */}
      <WhatsAppButton />
      <BackToTop />
      <FreeAuditPopup />
    </div>
  );
}

export default App;
