import { Mail, MapPin, ChevronUp, ExternalLink } from "lucide-react";
import { BrandLogoIcon } from "./Navbar";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer-main" className="bg-ink border-t border-gold/15 text-paper relative overflow-hidden">
      {/* Dynamic Japanese subtle sign in the footer background */}
      <div className="absolute right-[-4%] bottom-[-40px] font-japanese text-[120px] md:text-[200px] text-paper/[0.02] font-black select-none pointer-events-none tracking-widest leading-none">
        信頼架橋
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-gold/10">
          {/* Brand & Tagline */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <BrandLogoIcon className="w-9 h-9 rounded-xs border border-vermillion/40 shrink-0" />
              <div>
                <p className="font-serif-display text-lg font-bold tracking-tight text-paper">
                  HASHIWA
                </p>
                <p className="text-[9px] tracking-widest uppercase text-gold -mt-1 font-mono">
                  Global Strategy
                </p>
              </div>
            </div>
            <p className="text-sm text-mist/80 font-sans leading-relaxed">
              Bridging corporate ecosystems with premium localization, enterprise-grade AI annotation, and N1-level language expertise.
            </p>
            <div className="flex items-center gap-2 mt-2 text-xs text-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
              <span>Agile Explorer on Your Call</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest font-japanese text-gold">
              コンテンツ · Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick("home")}
                  className="text-mist hover:text-vermillion transition-colors focus:outline-none cursor-pointer"
                >
                  Homepage Gateway
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("services")}
                  className="text-mist hover:text-vermillion transition-colors focus:outline-none cursor-pointer"
                >
                  Our Core Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("about")}
                  className="text-mist hover:text-vermillion transition-colors focus:outline-none cursor-pointer"
                >
                  Company Dossier & PEACE Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("contact")}
                  className="text-mist hover:text-vermillion transition-colors focus:outline-none cursor-pointer"
                >
                  Schedule Consultation Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Service Directory */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest font-japanese text-gold">
              事業分野 · Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-mist/80">
              <li>Translation & Localization</li>
              <li>Multilingual Crowd Annotation</li>
              <li>Japanese Learning Center (Summarecon)</li>
              <li>Cross-Border Japanese Locale Support</li>
            </ul>
          </div>

          {/* Office Landmarks */}
          <div className="flex flex-col gap-5 text-sm">
            <h4 className="text-xs uppercase tracking-widest font-japanese text-gold">
              コンタクト · Locations
            </h4>
            <div className="flex flex-col gap-4 text-mist/90">
              <div className="flex gap-2.5">
                <MapPin className="w-5 h-5 text-vermillion shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-paper text-xs uppercase tracking-wider">
                    Headquarters Office
                  </p>
                  <p className="text-xs leading-relaxed mt-1 text-mist">
                    Jl. H. Mansyur III No. 150 Rt. 03 Rw. 17, Perwira, Bekasi Utara, West Java, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex gap-2.5">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-paper text-xs uppercase tracking-wider">
                    Japanese Learning Center
                  </p>
                  <p className="text-xs leading-relaxed mt-1 text-mist">
                    Ruko Sinpasa Summarecon Bekasi, Unit A-20, West Java
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
          <div className="flex flex-col md:flex-row items-center gap-6 text-xs text-mist/60">
            <p>© {new Date().getFullYear()} PT. Hashiwa Global Strategy. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gold" />
              <a href="mailto:admin@hashiwa.net" className="hover:text-vermillion transition-colors">
                admin@hashiwa.net
              </a>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-paper/5 hover:bg-vermillion border border-gold/15 hover:border-vermillion text-mist hover:text-paper rounded-xs transition-all duration-300 flex items-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
            >
              Back to Top <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
