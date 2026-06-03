import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Languages } from "lucide-react";

export function BrandLogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="4" fill="#000000" />
      <g opacity="0.95">
        {/* Layer 1: Bottom subtle glow / base triangles */}
        <polygon points="5,5 95,5 50,50" fill="#0E7490" fillOpacity="0.2" />
        <polygon points="5,95 95,95 50,50" fill="#0E7490" fillOpacity="0.2" />
        <polygon points="5,5 5,95 50,50" fill="#0F766E" fillOpacity="0.15" />
        <polygon points="95,5 95,95 50,50" fill="#0F766E" fillOpacity="0.15" />

        {/* Layer 2: Main translucent origami panels shaping double diamonds/bridge */}
        {/* Left main diamond */}
        <polygon points="5,5 50,15 32,50" fill="#14B8A6" fillOpacity="0.55" />
        <polygon points="5,95 50,85 32,50" fill="#0891B2" fillOpacity="0.5" />
        <polygon points="5,5 32,50 5,95" fill="#0F766E" fillOpacity="0.6" />
        {/* Center connection left */}
        <polygon points="50,15 32,50 50,50" fill="#2DD4BF" fillOpacity="0.65" />
        <polygon points="50,85 32,50 50,50" fill="#06B6D4" fillOpacity="0.6" />

        {/* Right main diamond */}
        <polygon points="95,5 50,15 68,50" fill="#14B8A6" fillOpacity="0.55" />
        <polygon points="95,95 50,85 68,50" fill="#0891B2" fillOpacity="0.5" />
        <polygon points="95,5 68,50 95,95" fill="#0F766E" fillOpacity="0.6" />
        {/* Center connection right */}
        <polygon points="50,15 68,50 50,50" fill="#2DD4BF" fillOpacity="0.65" />
        <polygon points="50,85 68,50 50,50" fill="#06B6D4" fillOpacity="0.6" />

        {/* Central standing diamonds shaping the main twin peak geometry */}
        <polygon points="50,15 32,50 50,85" fill="#0D9488" fillOpacity="0.3" />
        <polygon points="50,15 68,50 50,85" fill="#0D9488" fillOpacity="0.3" />

        {/* Layer 3: Dynamic high-precision crystalline lines matching the "Agile Connect" theme */}
        <line x1="5" y1="5" x2="50" y2="15" stroke="#34D399" strokeWidth="0.5" strokeOpacity="0.6" />
        <line x1="5" y1="95" x2="50" y2="85" stroke="#34D399" strokeWidth="0.5" strokeOpacity="0.6" />
        <line x1="95" y1="5" x2="50" y2="15" stroke="#34D399" strokeWidth="0.5" strokeOpacity="0.6" />
        <line x1="95" y1="95" x2="50" y2="85" stroke="#34D399" strokeWidth="0.5" strokeOpacity="0.6" />

        <line x1="50" y1="15" x2="32" y2="50" stroke="#E0F2FE" strokeWidth="0.75" strokeOpacity="0.8" />
        <line x1="50" y1="85" x2="32" y2="50" stroke="#E0F2FE" strokeWidth="0.75" strokeOpacity="0.8" />
        <line x1="50" y1="15" x2="68" y2="50" stroke="#E0F2FE" strokeWidth="0.75" strokeOpacity="0.8" />
        <line x1="50" y1="85" x2="68" y2="50" stroke="#E0F2FE" strokeWidth="0.75" strokeOpacity="0.8" />

        <line x1="32" y1="50" x2="50" y2="50" stroke="#2DD4BF" strokeWidth="0.5" strokeOpacity="0.7" />
        <line x1="68" y1="50" x2="50" y2="50" stroke="#2DD4BF" strokeWidth="0.5" strokeOpacity="0.7" />
        <line x1="50" y1="15" x2="50" y2="85" stroke="#E0F2FE" strokeWidth="0.5" strokeOpacity="0.4" />

        <line x1="5" y1="5" x2="32" y2="50" stroke="#2DD4BF" strokeWidth="0.5" strokeOpacity="0.5" />
        <line x1="5" y1="95" x2="32" y2="50" stroke="#2DD4BF" strokeWidth="0.5" strokeOpacity="0.5" />
        <line x1="95" y1="5" x2="68" y2="50" stroke="#2DD4BF" strokeWidth="0.5" strokeOpacity="0.5" />
        <line x1="95" y1="95" x2="68" y2="50" stroke="#2DD4BF" strokeWidth="0.5" strokeOpacity="0.5" />
      </g>
    </svg>
  );
}

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  currentLang: "EN" | "JP" | "ID";
  setCurrentLang: (lang: "EN" | "JP" | "ID") => void;
}

export default function Navbar({ 
  currentPage, 
  setCurrentPage, 
  currentLang, 
  setCurrentLang 
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkUnderNavbar, setIsDarkUnderNavbar] = useState(false);

  useEffect(() => {
    const checkBackground = () => {
      const sections = document.querySelectorAll(
        "section, #services-view, #about-view, #contact-view, #service-estimator-tool, #peace-values-suite"
      );
      
      let foundDark = false;
      const yToCheck = 45; // Center of the navbar vertical space
      
      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= yToCheck && rect.bottom >= yToCheck) {
          const className = sections[i].className || "";
          const id = sections[i].id || "";
          
          if (
            className.includes("bg-ink") || 
            className.includes("bg-gradient-to-br") ||
            id === "hero-section" ||
            id === "stats-section" ||
            id === "languages-section" ||
            id === "banner-cta-section" ||
            id === "service-estimator-tool" ||
            id === "peace-values-suite"
          ) {
            foundDark = true;
          }
          break;
        }
      }
      setIsDarkUnderNavbar(foundDark);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      checkBackground();
    };

    // Run the checker initially to frame correct color profiles
    checkBackground();
    
    window.addEventListener("scroll", handleScroll);
    const intervalId = setInterval(checkBackground, 250); // Periodic polling for responsive transitions

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(intervalId);
    };
  }, [currentPage]);

  // Multi-lingual labels for navigation items
  const menuLabels: Record<"EN" | "JP" | "ID", Record<string, { main: string; subtitle: string }>> = {
    EN: {
      home: { main: "Home Gates", subtitle: "Gateway" },
      services: { main: "Services Portfolio", subtitle: "Expertise" },
      about: { main: "About Story", subtitle: "Credentials" },
      contact: { main: "Inquiry Desk", subtitle: "Connect" },
    },
    JP: {
      home: { main: "ホーム", subtitle: "ゲートウェイ" },
      services: { main: "主要サービス", subtitle: "当社の専門知識" },
      about: { main: "会社沿革 and 理念", subtitle: "当社の資格" },
      contact: { main: "相談窓口", subtitle: "お問い合わせ" },
    },
    ID: {
      home: { main: "Halaman Utama", subtitle: "Beranda Gates" },
      services: { main: "Layanan Unggulan", subtitle: "Portofolio" },
      about: { main: "Tentang Kami", subtitle: "Kredibilitas" },
      contact: { main: "Hubungi Kami", subtitle: "Inquiry Desk" },
    }
  };

  const navItems = [
    { id: "home" },
    { id: "services" },
    { id: "about" },
    { id: "contact" },
  ];

  const handleLinkClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getButtonText = () => {
    if (currentLang === "JP") return "今すぐ相談";
    if (currentLang === "ID") return "Konsultasi";
    return "Let's Talk";
  };

  const isLight = scrolled ? isDarkUnderNavbar : !isDarkUnderNavbar;

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
          scrolled
            ? isLight
              ? "bg-paper/95 backdrop-blur-xl border-mist py-3.5 shadow-md"
              : "bg-ink/95 backdrop-blur-xl border-gold/15 py-3.5 shadow-md"
            : "bg-transparent border-transparent py-5 shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo Header Block */}
          <button
            id="nav-logo-btn"
            onClick={() => handleLinkClick("home")}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <BrandLogoIcon className="w-10 h-10 rounded-xs border border-vermillion/40 shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className={`font-serif-display text-lg md:text-xl font-bold tracking-tight select-none transition-colors duration-500 ease-in-out ${isLight ? "text-ink" : "text-paper"}`}>
                  HASHIWA
                </span>
                <span className="font-japanese text-[9px] text-gold tracking-widest font-normal">
                  ハシワ
                </span>
              </div>
              <p className={`text-[9px] tracking-wider uppercase font-sans -mt-0.5 transition-colors duration-500 ease-in-out ${isLight ? "text-slate" : "text-mist/80"}`}>
                Global Strategy
              </p>
            </div>
          </button>

          {/* Desktop Layout Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                const labels = menuLabels[currentLang][item.id] || menuLabels["EN"][item.id];
                return (
                  <li key={item.id} className="relative">
                    <button
                      id={`nav-item-${item.id}`}
                      onClick={() => handleLinkClick(item.id)}
                      className="group flex flex-col items-center py-1 text-sm tracking-wide focus:outline-none cursor-pointer"
                    >
                      <span className={`font-japanese text-[9px] font-light transition-colors duration-500 ease-in-out ${isLight ? "text-gold" : "text-gold/80 opacity-80 group-hover:opacity-100"}`}>
                        {labels.subtitle}
                      </span>
                      <span
                        className={`text-sm font-medium transition-colors duration-500 ease-in-out ${
                          isActive
                            ? "text-vermillion"
                            : isLight ? "text-ink group-hover:text-vermillion" : "text-paper group-hover:text-gold"
                        }`}
                      >
                        {labels.main}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeUnderline"
                          className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-vermillion rounded-full"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* HIGH CRAFT: 3-Way Inline Language Selector Pill Group */}
            <div className={`flex items-center p-1 rounded-sm gap-1 ml-4 shadow-inner transition-all duration-500 ease-in-out ${isLight ? "bg-slate/5 border border-slate/20" : "bg-paper/5 border border-gold/20"}`}>
              {(["EN", "JP", "ID"] as const).map((lang) => {
                const isSelected = currentLang === lang;
                return (
                  <button
                    key={lang}
                    onClick={() => setCurrentLang(lang)}
                    className={`px-3 py-1 text-[10px] font-semibold tracking-wider rounded-xs uppercase cursor-pointer focus:outline-none transition-all duration-500 ease-in-out ${
                      isSelected
                        ? "bg-vermillion text-paper shadow-md"
                        : isLight ? "text-slate hover:text-vermillion" : "text-paper/60 hover:text-gold"
                    }`}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Localized action CTA */}
            <button
              id="desktop-cta-btn"
              onClick={() => handleLinkClick("contact")}
              className="ml-2 px-5 py-2.5 bg-vermillion hover:bg-vermillion/90 text-paper font-semibold text-xs tracking-wider uppercase rounded-xs border border-vermillion hover:border-gold/30 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-vermillion/25 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-1 focus:ring-vermillion"
            >
              {getButtonText()}
              <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
            </button>
          </nav>

          {/* Mobile Hamburguer & Language Select Inline Indicator */}
          <div className="lg:hidden flex items-center gap-4">
            <div className={`flex items-center p-0.5 rounded-sm gap-0.5 transition-all duration-500 ease-in-out ${isLight ? "bg-slate/5 border border-slate/20" : "bg-paper/5 border border-gold/25"}`}>
              {(["EN", "JP", "ID"] as const).map((lang) => {
                const isSelected = currentLang === lang;
                return (
                  <button
                    key={lang}
                    onClick={() => setCurrentLang(lang)}
                    className={`px-2 py-0.5 text-[9px] font-bold rounded-xs uppercase transition-all duration-500 ease-in-out ${
                      isSelected ? "bg-vermillion text-paper" : isLight ? "text-slate" : "text-paper/50"
                    }`}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
            
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 focus:outline-none cursor-pointer transition-colors duration-500 ease-in-out ${isLight ? "text-ink hover:text-vermillion" : "text-paper hover:text-gold"}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay Suite */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink flex flex-col justify-between pt-28 pb-12 px-8 lg:hidden"
          >
            {/* Background design accents */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none bg-[radial-gradient(#C94B2A_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="flex flex-col gap-10 relative z-10 mt-2">
              <div className="border-b border-gold/10 pb-4">
                <p className="text-[10px] tracking-widest uppercase text-gold font-japanese">
                  ナビゲーション · SYSTEM DIRECTORY
                </p>
              </div>

              <ul className="flex flex-col gap-5">
                {navItems.map((item, i) => {
                  const isActive = currentPage === item.id;
                  const labels = menuLabels[currentLang][item.id] || menuLabels["EN"][item.id];
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <button
                        id={`mobile-nav-item-${item.id}`}
                        onClick={() => handleLinkClick(item.id)}
                        className="w-full text-left flex items-center justify-between group focus:outline-none cursor-pointer"
                      >
                        <div>
                          <p className="text-[9px] text-gold tracking-widest uppercase font-japanese -mb-0.5">
                            {labels.subtitle}
                          </p>
                          <span
                            className={`text-xl font-serif-display font-medium transition-colors ${
                              isActive
                                ? "text-vermillion"
                                : "text-paper group-hover:text-gold"
                            }`}
                          >
                            {labels.main}
                          </span>
                        </div>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isActive
                              ? "text-vermillion translate-x-1"
                              : "text-mist opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <div className="border-t border-gold/10 pt-8 relative z-10 flex flex-col gap-4 mt-auto">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[10px] text-mist/60 uppercase tracking-widest font-light">
                    PT. Hashiwa Global Strategy
                  </p>
                  <p className="text-xs text-gold">admin@hashiwa.net</p>
                </div>
                <button
                  id="mobile-drawer-cta"
                  onClick={() => handleLinkClick("contact")}
                  className="w-full py-3.5 bg-vermillion text-paper font-medium text-xs tracking-wider uppercase text-center rounded-xs border border-vermillion active:scale-95 transition-transform cursor-pointer"
                >
                  {currentLang === "JP" ? "カンファレンスを予約する" : currentLang === "ID" ? "Mulai Konsultasi" : "Schedule Inquiry"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
