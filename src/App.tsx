import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("");
  const [currentLang, setCurrentLang] = useState<"EN" | "JP" | "ID">("EN");

  const renderActiveView = () => {
    switch (currentPage) {
      case "home":
        return (
          <Home 
            setCurrentPage={setCurrentPage} 
            setSelectedServiceId={setSelectedServiceId} 
            currentLang={currentLang}
          />
        );
      case "services":
        return (
          <Services 
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
            setCurrentPage={setCurrentPage}
            currentLang={currentLang}
          />
        );
      case "about":
        return <About currentLang={currentLang} />;
      case "contact":
        return <Contact currentLang={currentLang} />;
      default:
        return (
          <Home 
            setCurrentPage={setCurrentPage} 
            setSelectedServiceId={setSelectedServiceId} 
            currentLang={currentLang}
          />
        );
    }
  };

  return (
    <div id="hashiwa-app-wrapper" className="min-h-screen flex flex-col justify-between bg-paper text-ink overflow-x-hidden selection:bg-vermillion selection:text-paper">
      
      {/* Structural Navigation Bar */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        currentLang={currentLang} 
        setCurrentLang={setCurrentLang} 
      />

      {/* Main View Area with transition logic */}
      <main id="main-view-container" className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentPage}-${currentLang}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Footer landmarks */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
