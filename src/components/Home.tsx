import { motion } from "motion/react";
import { 
  Languages, 
  BrainCircuit, 
  GraduationCap, 
  Handshake, 
  ArrowRight, 
  Check, 
  Users, 
  Clock, 
  Bookmark, 
  Sparkles,
  ChevronRight,
  Globe
} from "lucide-react";
import { SERVICES, PEACE_VALUES } from "../data";

interface HomeProps {
  setCurrentPage: (page: string) => void;
  setSelectedServiceId: (id: string) => void;
  currentLang: "EN" | "JP" | "ID";
}

export default function Home({ setCurrentPage, setSelectedServiceId, currentLang }: HomeProps) {
  
  // Translation dictionary for Home Component keys
  const dict = {
    EN: {
      badge: "Agile Pioneers on Call · PT. Hashiwa Global Strategy",
      headline_1: "Bridging",
      headline_lang: "Languages.",
      headline_2: "Bridging",
      headline_cult: "Cultures.",
      description: "We empower global businesses entering Southeast Asian and East-Asian ecosystems. Delivering elite Japanese localization, secure crowd annotations for machine learning, and JLPT-aligned professional education.",
      btn_explore: "Explore Services",
      btn_contact: "Contact Us",
      blueprint_title: "Indonesia-Japan Hub",
      blueprint_status: "ACTIVE BRIDGE",
      blueprint_sub1: "INDONESIA (Talent HUB)",
      blueprint_sub2: "JAPAN (Enterprise Connection)",
      blueprint_caption1: "Youth & Active Energy",
      blueprint_caption2: "Enterprise Precision & Trust",
      blueprint_metric: "99.8% Client Retention Metric",
      stats_title_1: "Managed Crowdworkers",
      stats_subtitle_1: "Bilingual project specialists",
      stats_title_2: "Annotated Languages",
      stats_subtitle_2: "Across major global languages",
      stats_title_3: "Active Business Divisions",
      stats_subtitle_3: "In Bekasi and overseas offices",
      stats_title_4: "Established",
      stats_subtitle_4: "Providing high fidelity support",
      advisory_badge: "CORE SERVICES",
      advisory_head: "Refined Solutions Tailored For Professional High Standards",
      advisory_btn: "All Departments",
      advisory_more: "Learn More",
      philosophy_badge: "COMPANY PHILOSOPHY",
      philosophy_head: "Our Standard Matrix: Driven by Shared 'PEACE' Values",
      philosophy_desc: "PT. Hashiwa Global Strategy functions on five pivotal pillars. These guiding rules govern how we protect training files in AI annotations, optimize N1 translation accuracy, and ensure strict compliance.",
      p1: "99.8% Accuracy and QA validation checkpoints",
      p2: "Binding NDAs & GDPR compliant local crowd workspaces",
      p3: "Experienced native trainers and customized syllabus packages",
      philosophy_btn: "Learn More About Us",
      lang_matrix_badge: "LANGUAGES MATRIX",
      lang_matrix_head: "Enterprise Multilingual Support Built For Scaling Global AI & NLP",
      lang_matrix_desc: "We coordinate high-quality specialized crowds to support native localized projects and extreme quality control validation.",
      cta_badge: "CHOOSE EXCELLENCE",
      cta_head: "Ready to Bridge Your Operational Goals?",
      cta_desc: "Contact us for custom translation quotes, scalable data annotation test runs, or Japanese Learning Center admission schedules. We respond in detail within 1 business day.",
      cta_primary: "Get Started Now",
      cta_secondary: "Explore Japanese Center",
      details_location: "Ruko Sinpasa Summarecon, Jawa Barat"
    },
    JP: {
      badge: "敏捷な開拓者 · PT. Hashiwa Global Strategy",
      headline_1: "言語を",
      headline_lang: "架け橋に。",
      headline_2: "文化を",
      headline_cult: "次のステージへ。",
      description: "私たちは、東南アジアおよび東アジアのビジネス展開を支援します。最高峰の日本語ローカライズ、機械学習向けの安全なアノテーション、そしてJLPT基準に準拠したプロフェッショナルな教育環境を提供します。",
      btn_explore: "主要サービスを探索",
      btn_contact: "相談窓口",
      blueprint_title: "インドネシア・日本架け橋",
      blueprint_status: "アクティブな連携",
      blueprint_sub1: "インドネシア (若き才能の拠点)",
      blueprint_sub2: "日本 (高度企業体との架け橋)",
      blueprint_caption1: "若さと意欲的な熱量",
      blueprint_caption2: "企業レベルの品質と絶対的信頼",
      blueprint_metric: "クライアント満足率 99.8%",
      stats_title_1: "管理対象クラウドアノテータ",
      stats_subtitle_1: "優秀な多言語専門メンバー",
      stats_title_2: "対応データアノテーション言語",
      stats_subtitle_2: "主要言語に完全適合",
      stats_title_3: "コア事業部門",
      stats_subtitle_3: "ブカシ・日本オフィスの連携体制",
      stats_title_4: "設立年度",
      stats_subtitle_4: "変わらぬ信頼のサポート実績",
      advisory_badge: "主要事業",
      advisory_head: "プロフェッショナルの高い基準に合わせた洗練されたソリューション",
      advisory_btn: "全サービス一覧",
      advisory_more: "詳細を見る",
      philosophy_badge: "企業理念",
      philosophy_head: "私たちの行動基準：共有のPEACEバリューに基づく取り組み",
      philosophy_desc: "PT. Hashiwa Global Strategyは5つの重要な柱に基づいて運営されています。アノテーションの機密保護、日本語翻訳精度、及び厳格な倫理と法令遵守に努めます。",
      p1: "99.8%の最高レベルの正確度と厳しいチェック体制",
      p2: "機密保持契約(NDA)及びGDPR完全準拠アノテーション業務",
      p3: "現地の実力講師陣によるカスタマイズ研修",
      philosophy_btn: "会社理念と体制を見る",
      lang_matrix_badge: "対応言語マトリクス",
      lang_matrix_head: "AIと言語処理モデルの拡張をサポートする高度な多言語検証",
      lang_matrix_desc: "日本語、インドネシア語、英語を中心に、専門のネイティブ人材による厳しい検証プロセスを提供します。",
      cta_badge: "最高品質への追求",
      cta_head: "架け橋となるプロジェクトを今すぐ開始しましょう。",
      cta_desc: "見積もり料金のご相談、アノテーションのテスト運用、または日本語ラーニングセンターの募集概要など、お気軽にお問い合わせください。1営業日以内にご返信いたします。",
      cta_primary: "今すぐ開始する",
      cta_secondary: "日本語センターを見る",
      details_location: "インドネシア ジャワ州 ブカシ"
    },
    ID: {
      badge: "Pionir Tangkas Di Sisi Anda · PT. Hashiwa Global Strategy",
      headline_1: "Menjembatani",
      headline_lang: "Bahasa.",
      headline_2: "Menyatukan",
      headline_cult: "Budaya.",
      description: "Kami memberdayakan bisnis global memasuki ekosistem Asia Tenggara & Asia Timur. Menyediakan lokalisasi bahasa Jepang premium, anotasi data aman untuk machine learning, serta pelatihan bahasa Jepang profesional berstandar JLPT.",
      btn_explore: "Telusuri Layanan",
      btn_contact: "Hubungi Kami",
      blueprint_title: "Jembatan Indonesia-Jepang",
      blueprint_status: "KONEKSI AKTIF",
      blueprint_sub1: "INDONESIA (Pusat Talenta)",
      blueprint_sub2: "JEPANG (Kemitraan Enterprise)",
      blueprint_caption1: "Energi Dinamis & Semangat Karir",
      blueprint_caption2: "Presisi Mutu & Kepatuhan Tinggi",
      blueprint_metric: "Tingkat Retensi Klien 99.8%",
      stats_title_1: "Anggota Tim Crowds",
      stats_subtitle_1: "Spesialis proyek bilingual terverifikasi",
      stats_title_2: "Bahasa Anotasi AI",
      stats_subtitle_2: "Tersertifikasi dalam berbagai diksi",
      stats_title_3: "Divisi Operasional Utama",
      stats_subtitle_3: "Sinergi kantor Bekasi & Jepang",
      stats_title_4: "Tahun Berdiri",
      stats_subtitle_4: "Kepercayaan bertahun-tahun",
      advisory_badge: "LAYANAN UTAMA",
      advisory_head: "Solusi Profesional yang Dirancang dengan Standar Kualitas Tinggi",
      advisory_btn: "Semua Departemen",
      advisory_more: "Selengkapnya",
      philosophy_badge: "FILOSOFI PERUSAHAAN",
      philosophy_head: "Prinsip Utama Kami: Didorong oleh Nilai Bersama 'PEACE'",
      philosophy_desc: "PT. Hashiwa Global Strategy beroperasi di atas lima pilar utama. Aturan panduan ini mengatur kepatuhan anotasi data, akurasi lokalisasi level N1/N2, serta integritas moral.",
      p1: "Metrik kelulusan QA mencapai akurasi 99.8%",
      p2: "Perjanjian kerahasiaan NDA & kepatuhan standar GDPR eropa",
      p3: "Silibus khusus oleh penutur asli bersertifikasi akademik",
      philosophy_btn: "Profil & Struktur Kami",
      lang_matrix_badge: "MATRIKS BAHASA UTAMA",
      lang_matrix_head: "Layanan Bahasa Skala Enterprise Mendukung Pengembangan AI & NLP",
      lang_matrix_desc: "Kami mengoordinasikan tim penutur asli untuk mendukung lokalisasi software, dokumen hukum, dan pelabelan data AI secara akurat.",
      cta_badge: "KOMITMEN KUALITAS",
      cta_head: "Siap Menjembatani Kebutuhan Operasional Bisnis Anda?",
      cta_desc: "Hubungi kami untuk penawaran harga, uji coba anotasi data gratis, maupun jadwal bimbingan belajar bahasa Jepang. Kami akan merespons dalam waktu 1 hari kerja.",
      cta_primary: "Mulai Sekarang",
      cta_secondary: "Kunjungi Pusat Belajar JLC",
      details_location: "Ruko Sinpasa Summarecon Bekasi, Jawa Barat"
    }
  };

  const activeDict = dict[currentLang] || dict.EN;

  const handleServiceClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentPage("services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Helper mapping string to Lucide icon
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Languages": return <Languages className="w-8 h-8 text-vermillion" />;
      case "BrainCircuit": return <BrainCircuit className="w-8 h-8 text-vermillion" />;
      case "GraduationCap": return <GraduationCap className="w-8 h-8 text-vermillion" />;
      case "Handshake": return <Handshake className="w-8 h-8 text-vermillion" />;
      default: return <Languages className="w-8 h-8 text-vermillion" />;
    }
  };

  // B1: Per-value JP descriptions for PEACE grid
  const getPeaceDescJP = (word: string): string => {
    const map: Record<string, string> = {
      "Professional": "最高水準の正確性とQA検知フローを遵守し、迅速かつ徹底的なクライアント第一主義を貫く。",
      "Energetic": "情熱と若いエネルギーを原動力とし、大規模案件でもムラのない管理体制を維持する。",
      "Agile": "刻々と変わるAI要件や法令変更に即対応し、柔軟かつ速やかにマイルストーンを完了する。",
      "Care": "クラウドワーカーから企業顧客まで、あらゆる要求に耳を傾け相互発展の関係を築く。",
      "Ethic": "データ処理における厳正な倫理規定と公正な取引を徹底しています。"
    };
    return map[word] || "データ処理における厳正な倫理規定と公正な取引を徹底しています。";
  };

  // B1: Per-value ID descriptions for PEACE grid
  const getPeaceDescID = (word: string): string => {
    const map: Record<string, string> = {
      "Professional": "Mengutamakan kualitas pengerjaan tanpa cela dan kedisiplinan kerja di setiap data yang diproses.",
      "Energetic": "Didorong oleh ambisi berkembang, kami membina instruktur dan tim dengan sinergi aktif.",
      "Agile": "Tangkas menyesuaikan diri dengan perubahan regulasi dan timeline ketat tanpa menurunkan kualitas.",
      "Care": "Menghadirkan lingkungan kerja suportif demi menjaga kestabilan loyalitas seluruh tim.",
      "Ethic": "Menjaga transparansi penuh dan perlindungan data mitra secara bertanggung jawab."
    };
    return map[word] || "Menjaga transparansi penuh dan perlindungan data mitra secara bertanggung jawab.";
  };

  const getLocalServiceTitle = (sId: string, defaultTitle: string, defaultTitleJp: string) => {
    if (currentLang === "JP") return defaultTitleJp;
    if (currentLang === "ID") {
      if (sId === "translation-localization") return "Penerjemahan & Lokalisasi";
      if (sId === "annotation") return "Anotasi & Pelabelan Data AI";
      if (sId === "japanese-learning-center") return "Pusat Bahasa Jepang (JLC)";
      if (sId === "japanese-locale-services") return "Layanan Integrasi Bisnis Jepang";
    }
    return defaultTitle;
  };

  const getLocalServiceDesc = (sId: string, defaultDesc: string) => {
    if (currentLang === "JP") {
      if (sId === "translation-localization") return "インドネシア語・日本語圏に向けた正確な文化ローカライゼーションを提供します。";
      if (sId === "annotation") return "AI開発を支援する機械学習・自然言語処理用の高精度人間アノテーションデータ作成を行います。";
      if (sId === "japanese-learning-center") return "日本語能力試験JLPT N5からN1までに完全準拠した、即戦力キャリア向けビジネス日本語研修コース。";
      if (sId === "japanese-locale-services") return "インドネシアで展開される日本企業のための包括的な現地組織構築、協調コンサルティング。";
    }
    if (currentLang === "ID") {
      if (sId === "translation-localization") return "Menjembatani perbedaan makna dengan lokalisasi konten berkualitas tinggi untuk pasar Indonesia & Jepang.";
      if (sId === "annotation") return "Menyuplai data set latih berakurasi tinggi untuk kecerdasan buatan, termasuk teks, suara, dan citra gambar.";
      if (sId === "japanese-learning-center") return "Program pembinaan bahasa Jepang terlengkap dari level JLPT N5 hingga N1 yang dirancang khusus untuk karir.";
      if (sId === "japanese-locale-services") return "Dukungan integrasi budaya, manajemen tata kelola kerja, serta fasilitator ekspatriat perusahaan Jepang di Indonesia.";
    }
    return defaultDesc;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 }
    }
  };

  return (
    <div id="home-view" className="relative overflow-hidden">
      
      {/* 01. HERO SECTION WITH RICH GRAPHICS */}
      <section id="hero-section" className="relative bg-ink text-paper py-24 md:py-32 overflow-hidden">
        
        {/* Subtle Japanese Background Elements (Authentic Non-Slop Decor) */}
        <div className="absolute right-[8%] top-[12%] font-japanese text-[140px] md:text-[200px] text-paper/[0.015] font-extrabold select-none pointer-events-none tracking-widest leading-none">
          戦略架橋
        </div>
        <div className="absolute left-[3%] bottom-[6%] font-japanese text-[90px] text-paper/[0.01] font-extrabold select-none pointer-events-none tracking-widest leading-none">
          協創理念
        </div>

        {/* Abstract background subtle glow lights */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-paper/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-[-10%] w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

        {/* Classic Grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Container */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper/5 border border-gold/25 rounded-full text-gold text-[10px] tracking-wider uppercase font-japanese w-fit">
              {activeDict.badge}
            </div>

            <h1 className="text-3xl md:text-5xl font-serif-display font-medium tracking-tight leading-tight">
              {activeDict.headline_1} <span className="text-vermillion italic">{activeDict.headline_lang}</span><br />
              {activeDict.headline_2} <span className="text-gold font-sans font-bold">{activeDict.headline_cult}</span>
            </h1>

            <p className="text-sm md:text-base text-mist/90 leading-relaxed max-w-xl font-sans font-light">
              {activeDict.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                id="hero-cta-primary"
                onClick={() => {
                  setCurrentPage("services");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-6 py-3.5 bg-vermillion hover:bg-vermillion/90 text-paper text-xs font-semibold uppercase tracking-wider rounded-xs border border-vermillion hover:border-gold/35 transition-all duration-300 shadow-xl hover:shadow-vermillion/20 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                {activeDict.btn_explore}
              </button>
              <button
                id="hero-cta-secondary"
                onClick={() => {
                  setCurrentPage("contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-6 py-3.5 bg-transparent hover:bg-paper/5 text-paper hover:text-gold text-xs font-semibold uppercase tracking-wider rounded-xs border-1.5 border-paper hover:border-gold/50 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                {activeDict.btn_contact}
              </button>
            </div>
          </motion.div>

          {/* Graphical Bridge / Seed Connection Representation (High-Class Aesthetic, No Slop) */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="relative w-full aspect-square max-w-[420px] mx-auto bg-paper/5 border border-gold/20 p-8 rounded-xs overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 p-3 text-gold/30 font-mono text-[8px] tracking-wider uppercase select-none">
                BILINGUAL BLUEPRINT
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-tr from-vermillion/10 via-transparent to-gold/10 pointer-events-none opacity-50" />
              
              <div className="h-full flex flex-col justify-between relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-gold tracking-widest font-japanese block">ハシワ・橋</span>
                    <span className="text-base font-serif-display text-white">{activeDict.blueprint_title}</span>
                  </div>
                  <div className="px-2 py-0.5 border border-vermillion/40 bg-vermillion/15 text-gold text-[8px] uppercase tracking-wider font-mono rounded-xs">
                    {activeDict.blueprint_status}
                  </div>
                </div>

                {/* Animated Bridge Conduit (Aesthetic Visualizing Connection) */}
                <div className="my-6 relative flex flex-col items-center justify-center p-5 bg-ink/70 border border-gold/15 rounded-xs">
                  <div className="w-full flex justify-between text-[10px] text-mist/80 font-mono mb-2">
                    <span>{activeDict.blueprint_sub1}</span>
                    <span>{activeDict.blueprint_sub2}</span>
                  </div>
                  <div className="w-full h-1 bg-paper/10 rounded-full overflow-hidden relative">
                    <motion.div 
                      className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-vermillion via-gold to-vermillion"
                      animate={{ 
                        left: ["-100%", "100%"],
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3.5, 
                        ease: "linear"
                      }}
                      style={{ width: "50%" }}
                    />
                  </div>
                  <div className="flex justify-between w-full mt-2.5 text-[10px] text-gold font-japanese font-light">
                    <span>{activeDict.blueprint_caption1}</span>
                    <span>{activeDict.blueprint_caption2}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 border-t border-gold/10 pt-4 mt-auto">
                  <div className="w-7 h-7 rounded-sm bg-vermillion/30 flex items-center justify-center text-vermillion font-bold text-[10px]">
                    ID
                  </div>
                  <span className="text-[10px] text-gold">↔</span>
                  <div className="w-7 h-7 rounded-sm bg-gold/30 flex items-center justify-center text-gold font-bold text-[10px]">
                    JP
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-[9px] text-mist/50 uppercase tracking-widest">Active Verification</p>
                    <p className="text-xs text-paper font-sans font-medium">{activeDict.blueprint_metric}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02. STATS OVERVIEW DECK */}
      <section id="stats-section" className="bg-ink border-y border-gold/15 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gold/15">
            
            <div className="text-center flex flex-col items-center justify-center px-3">
              <div className="w-9 h-9 rounded-full bg-paper/5 border border-gold/15 flex items-center justify-center text-gold mb-2.5">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif-display font-medium text-paper">100+</h3>
              <p className="text-[10px] text-gold uppercase tracking-wider font-semibold font-japanese mt-0.5">
                {activeDict.stats_title_1}
              </p>
              <p className="text-[11px] text-mist/60 font-sans mt-0.5">
                {activeDict.stats_subtitle_1}
              </p>
            </div>

            <div className="text-center flex flex-col items-center justify-center px-3 pt-4 md:pt-0">
              <div className="w-9 h-9 rounded-full bg-paper/5 border border-gold/15 flex items-center justify-center text-gold mb-2.5">
                <Globe className="w-4 h-4" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif-display font-medium text-paper">6+</h3>
              <p className="text-[10px] text-gold uppercase tracking-wider font-semibold font-japanese mt-0.5">
                {activeDict.stats_title_2}
              </p>
              <p className="text-[11px] text-mist/60 font-sans mt-0.5">
                {activeDict.stats_subtitle_2}
              </p>
            </div>

            <div className="text-center flex flex-col items-center justify-center px-3 pt-4 md:pt-0">
              <div className="w-9 h-9 rounded-full bg-paper/5 border border-gold/15 flex items-center justify-center text-gold mb-2.5">
                <Bookmark className="w-4 h-4" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif-display font-medium text-paper">4 Divisions</h3>
              <p className="text-[10px] text-gold uppercase tracking-wider font-semibold font-japanese mt-0.5">
                {activeDict.stats_title_3}
              </p>
              <p className="text-[11px] text-mist/60 font-sans mt-0.5">
                {activeDict.stats_subtitle_3}
              </p>
            </div>

            <div className="text-center flex flex-col items-center justify-center px-3 pt-4 md:pt-0">
              <div className="w-9 h-9 rounded-full bg-paper/5 border border-gold/15 flex items-center justify-center text-gold mb-2.5">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif-display font-medium text-paper">Est. 2018</h3>
              <p className="text-[10px] text-gold uppercase tracking-wider font-semibold font-japanese mt-0.5">
                {activeDict.stats_title_4}
              </p>
              <p className="text-[11px] text-mist/60 font-sans mt-0.5">
                {activeDict.stats_subtitle_4}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 03. SERVICES SECTOR (DYNAMIC TRANSLATIONS) */}
      <section id="services-overview-section" className="py-24 bg-paper relative">
        <div className="absolute left-[3%] top-[30%] font-japanese text-[90px] text-ink/[0.012] font-black pointer-events-none select-none leading-none">
          協創品質
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-widest text-vermillion font-japanese font-semibold block mb-2">
                {activeDict.advisory_badge}
              </span>
              <h2 className="text-2xl md:text-4xl font-serif-display text-ink font-medium tracking-tight">
                {activeDict.advisory_head}
              </h2>
            </div>
            <div>
              <button
                onClick={() => {
                  setSelectedServiceId("translation-localization");
                  setCurrentPage("services");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 px-5 py-3 border border-ink text-ink hover:bg-ink hover:text-paper rounded-xs font-semibold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
              >
                {activeDict.advisory_btn}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {SERVICES.map((serv) => (
              <motion.div
                key={serv.id}
                variants={itemVariants}
                onClick={() => handleServiceClick(serv.id)}
                className="bg-cream border border-mist hover:border-gold hover:shadow-xl rounded-xs p-8 cursor-pointer relative group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-white to-slate-50/20 border-l-4 border-l-vermillion"
              >
                <div>
                  <div className="w-11 h-11 rounded-sm bg-vermillion/10 border border-vermillion/20 flex items-center justify-center mb-6 group-hover:bg-vermillion transition-colors duration-300">
                    <span className="group-hover:text-paper text-vermillion">
                      {getServiceIcon(serv.icon)}
                    </span>
                  </div>
                  
                  <span className="text-[9px] font-mono tracking-widest text-gold uppercase block mb-1">
                    {serv.id === "japanese-learning-center" ? "SUMMARECON BEKASI CAMPUS" : "B2B ADVISORY"}
                  </span>
                  
                  <h3 className="text-base font-serif-display text-ink font-bold tracking-tight mb-3">
                    {getLocalServiceTitle(serv.id, serv.title, serv.titleJp)}
                  </h3>
                  
                  <p className="text-xs text-slate leading-relaxed">
                    {getLocalServiceDesc(serv.id, serv.shortDesc)}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-vermillion font-semibold mt-8 group-hover:text-gold transition-colors">
                  {activeDict.advisory_more}
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 04. PHILOSOPHY & VALUES SECTION */}
      <section id="peace-intro-section" className="py-24 bg-cream border-t border-mist relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Context details on left */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <span className="text-xs uppercase tracking-widest text-vermillion font-semibold font-japanese block">
                {activeDict.philosophy_badge}
              </span>
              <h2 className="text-2xl md:text-4xl font-serif-display text-ink font-medium tracking-tight">
                {activeDict.philosophy_head}
              </h2>
              <p className="text-xs md:text-sm text-slate leading-relaxed">
                {activeDict.philosophy_desc}
              </p>

              <div className="flex flex-col gap-3 py-1">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center text-sage shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-semibold text-ink leading-tight">{activeDict.p1}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center text-sage shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-semibold text-ink leading-tight">{activeDict.p2}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center text-sage shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-semibold text-ink leading-tight">{activeDict.p3}</span>
                </div>
              </div>

              <button
                id="peace-learn-more"
                onClick={() => {
                  setCurrentPage("about");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="mt-4 px-6 py-3 bg-ink text-paper text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-gold hover:text-ink transition-colors duration-300 w-fit cursor-pointer outline-none"
              >
                {activeDict.philosophy_btn}
              </button>
            </div>

            {/* PEACE Grid Visual on standard grid */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {PEACE_VALUES.map((val, i) => (
                <div 
                  key={i} 
                  className="bg-paper p-6 rounded-xs border border-mist hover:border-gold/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-vermillion/10 flex items-center justify-center text-vermillion font-bold text-sm">
                      {val.letter}
                    </div>
                    <div>
                      <h4 className="font-serif-display font-medium text-sm text-ink">{val.word}</h4>
                      <p className="text-[9px] text-gold font-japanese">{val.meaning}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate leading-relaxed">
                    {currentLang === "JP"
                      ? getPeaceDescJP(val.word)
                      : currentLang === "ID"
                      ? getPeaceDescID(val.word)
                      : val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05. LANGUAGES MATRIX PLATFORM */}
      <section id="languages-section" className="py-24 bg-ink text-paper relative">
        <div className="absolute right-0 top-0 opacity-5 pointer-events-none w-96 h-96 bg-[radial-gradient(#C94B2A_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs text-gold uppercase tracking-widest font-japanese block mb-2">
              {activeDict.lang_matrix_badge}
            </span>
            <h2 className="text-2xl md:text-4xl font-serif-display text-paper font-medium tracking-tight">
              {activeDict.lang_matrix_head}
            </h2>
            <p className="text-xs md:text-sm text-mist/75 max-w-lg mx-auto leading-relaxed mt-4">
              {activeDict.lang_matrix_desc}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { code: "jp", name: "Japanese", jpName: "日本語", flag: "🇯🇵", localLevel: "N1 Native Localization Vetting" },
              { code: "en", name: "English", jpName: "英語", flag: "🇬🇧", localLevel: "Global Target Business Adaptation" },
              { code: "id", name: "Indonesian", jpName: "インドネシア語", flag: "🇮🇩", localLevel: "Accented Audio Labeling & Dialects" },
              { code: "vn", name: "Vietnamese", jpName: "ベトナム語", flag: "🇻🇳", localLevel: "Text Sentiment Classification" },
              { code: "nl", name: "Dutch", jpName: "オランダ語", flag: "🇳🇱", localLevel: "Historic Orthography Annotations" },
              { code: "ar", name: "Arabic", jpName: "アラビア語", flag: "🇸🇦", localLevel: "Semitic High Precision Tagging" }
            ].map((lang) => (
              <div 
                key={lang.code}
                className="bg-paper/5 border border-gold/15 p-6 rounded-xs text-center flex flex-col justify-between items-center hover:border-vermillion hover:bg-paper/10 transition-all duration-300 group"
              >
                <div>
                  <span 
                    className="text-4xl block mb-3 group-hover:scale-110 transition-transform duration-300"
                    role="img"
                    aria-label={`${lang.name} flag`}
                  >
                    {lang.flag}
                  </span>
                  <p className="font-serif-display font-bold text-sm text-paper tracking-wider mb-0.5">
                    {lang.name}
                  </p>
                  <p className="text-[10px] text-gold font-japanese block">
                    {lang.jpName}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-paper/10 w-full">
                  <p className="text-[9px] text-mist/60 leading-normal uppercase">
                    {lang.localLevel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. CONSTRUCTIVE CTA ACCENTS */}
      <section id="banner-cta-section" className="bg-gradient-to-br from-vermillion to-gold py-24 text-paper relative overflow-hidden">
        
        {/* Decorative background characters */}
        <div className="absolute left-[5%] bottom-[-20px] font-japanese text-[120px] text-paper/[0.04] font-black pointer-events-none select-none">
          未来へ
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col gap-5">
          <span className="text-xs uppercase tracking-widest text-paper/85 font-semibold font-japanese block">
            {activeDict.cta_badge}
          </span>
          
          <h2 className="text-2xl md:text-4xl font-serif-display font-medium tracking-tight leading-tight">
            {activeDict.cta_head}
          </h2>
          
          <p className="text-xs md:text-sm text-paper/90 max-w-xl mx-auto leading-relaxed font-sans font-light">
            {activeDict.cta_desc}
          </p>
          
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              id="cta-band-primary"
              onClick={() => {
                setCurrentPage("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-6 py-3.5 bg-ink hover:bg-ink/90 text-paper font-semibold uppercase tracking-wider text-xs rounded-xs border border-ink shadow-2xl transition-all hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-gold"
            >
              {activeDict.cta_primary}
            </button>
            <button
              id="cta-band-secondary"
              onClick={() => handleServiceClick("japanese-learning-center")}
              className="px-6 py-3.5 bg-transparent hover:bg-paper/10 text-paper font-semibold uppercase tracking-wider text-xs rounded-xs border border-paper transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-gold"
            >
              {activeDict.cta_secondary}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
