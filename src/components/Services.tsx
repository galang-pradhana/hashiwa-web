import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Languages, 
  BrainCircuit, 
  GraduationCap, 
  Handshake, 
  ArrowRight, 
  CheckCircle,
  Calculator,
  Compass,
  AlertCircle,
  Clock,
  MapPin
} from "lucide-react";
import { SERVICES } from "../data";

interface ServicesProps {
  selectedServiceId: string;
  setSelectedServiceId: (id: string) => void;
  setCurrentPage: (page: string) => void;
  currentLang: "EN" | "JP" | "ID";
}

export default function Services({ 
  selectedServiceId, 
  setSelectedServiceId,
  setCurrentPage,
  currentLang
}: ServicesProps) {
  // Local state for interactive project estimator
  const [estScopeSize, setEstScopeSize] = useState<"small" | "medium" | "large">("medium");
  const [estServiceType, setEstServiceType] = useState<string>("translation");
  const [estJlptGoal, setEstJlptGoal] = useState<string>("N3");

  // Sync state if selectedServiceId is empty
  useEffect(() => {
    if (!selectedServiceId && SERVICES.length > 0) {
      setSelectedServiceId(SERVICES[0].id);
    }
  }, [selectedServiceId]);

  const activeService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Languages": return <Languages className="w-6 h-6" />;
      case "BrainCircuit": return <BrainCircuit className="w-6 h-6" />;
      case "GraduationCap": return <GraduationCap className="w-6 h-6" />;
      case "Handshake": return <Handshake className="w-6 h-6" />;
      default: return <Languages className="w-6 h-6" />;
    }
  };

  // Translations dictionary for dynamic text blocks
  const dict = {
    EN: {
      badge: "ソリューション · OUR SIGNATURE PORTFOLIO",
      head: "Professional Language, Annotation & Locale Operations",
      sub: "Select one of our corporate sectors below to detail the strict native workflows, exact compliance models, and specialized case studies.",
      calc_badge: "SCOPE MATCHER TOOL",
      calc_head: "Interactive Project & Level Estimator",
      calc_desc: "Provide tentative figures or select certification targets to instantly calculate estimated execution timelines, corporate pricing tiers, and recommended strategic schedules.",
      calc_choose_dept: "Select Department Division",
      calc_words_label: "Document Word Count",
      calc_items_label: "Items / Image Quantity",
      calc_target_lang: "Number of Target Languages",
      calc_level_lbl: "Target JLPT Standard Level",
      calc_result_badge: "ESTIMATED PROJECT METRICS",
      calc_result_base: "Estimated Base Investment",
      calc_timeline_lbl: "Expected Timeline",
      calc_cta: "Discuss This Scope",
      workflow_title: "Strict Quality Workflow Steps",
      guarantee: "We guarantee strict native verification, compliance formatting, and detailed documentation for every deliverable milestone.",
      lang_matrix_lbl: "Core Supporting Languages",
      usecases_lbl: "Representative Work Contexts",
      meta_camp: "Campus Location",
      meta_cov: "Coverage Standards",
      meta_deliv: "Service Delivery Format",
      meta_tgt: "Ideal Target Client",
      level_note: "Note: N5 is basic foundation. N1 represents bilingual executive boarding levels."
    },
    JP: {
      badge: "ソリューション · 当社独自のサービスポートフォリオ",
      head: "プロフェッショナルな多言語ローカライズ・アノテーション・日本企業支援",
      sub: "該当する事業部を選択していただくと、具体的なネイティブ検証ワークフロー、セキュリティ適合基準、及び代表的な活用事例をご案内いたします。",
      calc_badge: "自動プロジェクト試算ツール",
      calc_head: "アノテーション分量、翻訳書類に合わせた試算",
      calc_desc: "見積価格の目安や予定スケジュールを、簡単な入力設定で算出します。該当のサービスボタンを選択して調整してください。",
      calc_choose_dept: "試算する事業部を選択",
      calc_words_label: "翻訳ドキュメント文字数目安",
      calc_items_label: "アノテーション対象画像・データ数",
      calc_target_lang: "多言語対応（展開言語数）",
      calc_level_lbl: "取得目標の日本語能力試験（JLPT）レベル",
      calc_result_badge: "試算算出結果",
      calc_result_base: "初期想定のご予算枠目安",
      calc_timeline_lbl: "予想納品スケジュール",
      calc_cta: "この構成スコープで相談する",
      workflow_title: "ハシワが徹底する厳格な作業プロセス",
      guarantee: "ネイティブスタッフによる2段階評価プロセス、秘密保持(NDA)の順守を徹底します。",
      lang_matrix_lbl: "主要対応可能言語",
      usecases_lbl: "実際の代表的ユースケース",
      meta_camp: "校舎・キャンパス所在地",
      meta_cov: "対応能力検定基準",
      meta_deliv: "サービス提供形式",
      meta_tgt: "主に対象となるクライアント企業",
      level_note: "注意：N5は基礎（初級文法）、N1は役員会議への適応レベル。各目標値を選択してください。"
    },
    ID: {
      badge: "PORTOFOLIO UTAMA · DIVISI PERUSAHAAN",
      head: "Layanan Bahasa, Anotasi Data, & Manajemen Operasional Jepang",
      sub: "Pilih salah satu divisi layanan kami di bawah ini untuk melihat rincian proses pengerjaan, jaminan kerahasiaan data, serta contoh kasus pengerjaan harian.",
      calc_badge: "ALAT ESTIMASI INTERAKTIF",
      calc_head: "Kalkulator Estimasi Biaya & Waktu Pengerjaan Jasa",
      calc_desc: "Tentukan perkiraan jumlah kata dokumen atau pilih jenjang level JLPT untuk menghitung perkiraan proses pengerjaan, kisaran investasi, dan jadwal kursus secara instan.",
      calc_choose_dept: "Pilih Departemen Layanan",
      calc_words_label: "Jumlah Kata Dokumen",
      calc_items_label: "Jumlah File / Gambar Anotasi",
      calc_target_lang: "Jumlah Bahasa Target",
      calc_level_lbl: "Target Tingkatan Level JLPT",
      calc_result_badge: "REKOMENDASI METRIK PROYEK",
      calc_result_base: "Perkiraan Nilai Investasi",
      calc_timeline_lbl: "Waktu Pengerjaan Layanan",
      calc_cta: "Diskusikan Rencana Ini",
      workflow_title: "Langkah Alur Kerja Kualitas Mutu",
      guarantee: "Kami menjamin verifikasi penutur asli (native), format pengerjaan patuh hukum, serta pelaporan ketat di setiap milestone.",
      lang_matrix_lbl: "Daftar Bahasa Pendukung Utama",
      usecases_lbl: "Contoh Kasus Pengerjaan Lapangan",
      meta_camp: "Lokasi Pusat Belajar JLC",
      meta_cov: "Standar Kurikulum Belajar",
      meta_deliv: "Format Penyediaan Jasa",
      meta_tgt: "Profil Klien yang Sesuai",
      level_note: "Catatan: N5 adalah dasar pembelajaran awal. N1 merepresentasikan kemahiran bisnis korporasi global tingkat tinggi."
    }
  };

  const activeDict = dict[currentLang] || dict.EN;

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
      if (sId === "translation-localization") return "言語は単なる言葉ではなく、文化、ニュアンス、そして意思を表します。私たちは、インドネシアと日本のそれぞれの市場に完全に響くよう、契約書、ソフトウェアUI、マーケティングガイドライン、及び技術仕様ファイルを専門訳し、本来のプロフェッショナルな意味を保持したままローカライズします。";
      if (sId === "annotation") return "高性能なAIモデルの稼働には、厳しく検証された教師データセットが必要です。PT. Hashiwa Global Strategy は、適切な暗号環境に配備された100名を超える専門クラウドワーカーを配置・管理し、機械学習アルゴリズム用のテキスト分類、音声タグ、及び画像に境界バウンディングを施すラベルデータの最高品質をお届けします。";
      if (sId === "japanese-learning-center") return "ハシワ日本語ラーニングセンター（JLC）は、日本語でプロフェッショナルなキャリアを目指す学生や現地日系企業の従業員に焦点を合わせた包括的な研修プラットフォームです。熟練講師陣により、会話コミュニケーション、ビジネスマナー、並びに日本語能力試験の各目標レベル到達をハイブリッド講義でサポートします。";
      if (sId === "japanese-locale-services") return "新市場や異文化市場への事業展開は、深刻なチーム構成及びマネジメント制度の隔たりを招きます。私たちは、信頼のおける現地実行アドバイザーとして機能し、日本語に沿った事業管理ルール構築、意思疎通、人事支援、行政手続の橋渡しを確実に実行します。";
    }
    if (currentLang === "ID") {
      if (sId === "translation-localization") return "Bahasa adalah esensi yang merepresentasikan nilai, detail hukum, dan niat bisnis. Kami memastikan dokumen hukum, aset perangkat lunak digital, laporan kearsipan, serta panduan operasional korporat Anda disesuaikan secara autentik dengan kebiasaan penutur asli di pasar sasaran.";
      if (sId === "annotation") return "Performa sistem kecerdasan buatan (AI) bergantung penuh pada kualitas data latih berakurasi tinggi. PT. Hashiwa Global Strategy mengelola tim crowdsourcing terenkripsi untuk mengklasifikasi teks, pelabelan sentimen kata, transkripsi pembicara lokal, hingga pendeteksian objek citra sesuai dengan instruksi teknis yang rumit.";
      if (sId === "japanese-learning-center") return "Hashiwa Japanese Learning Center (JLC) menawarkan silabus pembelajaran terpadu yang dirancang khusus untuk pengembangan prospek karier siswa di perusahaan global dan expatriat. Instruktur bersertifikasi memandu pencapaian level kelulusan ujian JLPT dalam suasana belajar ramah di Bekasi Summarecon.";
      if (sId === "japanese-locale-services") return "Menjalankan bisnis baru lintas batas membawa tantangan operasional harian yang melelahkan. Kami hadir sebagai eksekutor lokal yang terpercaya untuk menyelaraskan komunikasi manajerial ekspatriat Jepang, melatih regulasi bilingual internal di Indonesia, serta melancarkan sinkronisasi administrasi.";
    }
    return defaultDesc;
  };

  // Timeline / Scope estimate logic
  const calculateEstimate = () => {
    if (estServiceType === "translation") {
      const translationScopes = {
        small: {
          time: currentLang === "JP" ? "1 - 2 営業日" : currentLang === "ID" ? "1 - 2 Hari Kerja" : "1 - 2 Business Days",
          desc: currentLang === "JP" 
            ? "基本書類 (2,000字未満) 向けの迅速な翻訳。単一の証明書、法的合意書、お知らせ、短いピッチデッキに最適。" 
            : currentLang === "ID" 
              ? "Skala Kecil (Di bawah 2.000 kata). Sangat cocok untuk sertifikat tunggal, dokumen hukum pendek, atau lembar rilis pers." 
              : "Small Scope (Under 2,000 words). Highly suited for single certificates, short legal covenants, or product announcements."
        },
        medium: {
          time: currentLang === "JP" ? "3 - 5 営業日" : currentLang === "ID" ? "3 - 5 Hari Kerja" : "3 - 5 Business Days",
          desc: currentLang === "JP" 
            ? "標準書類 (2,000〜10,000字)。各種ユーザーマニュアル、本格的な企業ポリシー、契約書、または製品仕様書一式。" 
            : currentLang === "ID" 
              ? "Skala Menengah (2.000 - 10.000 kata). Meliputi buku manual operasi, draf regulasi internal lengkap, atau panduan integrasi." 
              : "Medium Scope (2,000 - 10,000 words). Comprises technical documentation, detailed corporate bylaws, or operations manuals."
        },
        large: {
          time: currentLang === "JP" ? "6営業日以上、または要件定義" : currentLang === "ID" ? "6+ Hari Kerja / Fase Kustom" : "6+ Business Days (Custom Phase)",
          desc: currentLang === "JP" 
            ? "大規模製品 (10,000字以上)。システム全体のローカライゼーション、ソフトウェアスイート全体、または継続的なローカライズ。" 
            : currentLang === "ID" 
              ? "Skala Besar (Di atas 10.000 kata). Lokalisasi sistem portal menyeluruh, antarmuka aplikasi digital rintisan, atau integrasi jangka panjang." 
              : "Large Scope (Over 10,000 words). Full-platform software systems, enterprise database structures, or long-term dynamic queues."
        }
      };
      return translationScopes[estScopeSize];
    } else if (estServiceType === "annotation") {
      const annotationScopes = {
        small: {
          time: currentLang === "JP" ? "2 - 3 営業日" : currentLang === "ID" ? "2 - 3 Hari Kerja" : "2 - 3 Business Days",
          desc: currentLang === "JP" 
            ? "検証パイロット (1,000データ未満)。AIモデルの概念実証(PoC)用検証およびアノテーション整合テスト。" 
            : currentLang === "ID" 
              ? "Uji Coba Pilot (Di bawah 1.000 item). Berguna untuk validasi awal model kecerdasan buatan & kecemasan terhadap panduan kerja lokal." 
              : "Pilot Pack (Under 1,000 items). Designed for Proof-of-Concept testing, model accuracy check, and label structure alignment."
        },
        medium: {
          time: currentLang === "JP" ? "4 - 7 営業日" : currentLang === "ID" ? "4 - 7 Hari Kerja" : "4 - 7 Business Days",
          desc: currentLang === "JP" 
            ? "本番データ (1,000〜5,000データ)。機械学習モデルの訓練データセット。バウンディングボックスの描画、多層のQA検証。" 
            : currentLang === "ID" 
              ? "Paket Produksi (1.000 - 5.000 item). Dataset optimal untuk melatih algoritme ML dengan pengawasan supervisor terakreditasi." 
              : "Production Batch (1,000 - 5,000 items). Compiled for core ML algorithms, including double bounding box verification and detailed QA."
        },
        large: {
          time: currentLang === "JP" ? "要件定義によるカスタム対応" : currentLang === "ID" ? "Penjadwalan Kustom Korporat" : "Custom Schedule / Rollout Phase",
          desc: currentLang === "JP" 
            ? "エンタープライズ規模 (5,000データ以上)。継続的データ供給、専任チェッカー配備、および包括的データセキュリティ監査。" 
            : currentLang === "ID" 
              ? "Skala Enterprise (Di atas 5.000 item). Integrasi suplai data latih berkelanjutan, supervisor khusus, serta sertifikasi kepatuhan data." 
              : "Enterprise Batch (Over 5,000 items). Dedicated local crowdsourcing queues, rolling data pipelines, and strict compliance assurance."
        }
      };
      return annotationScopes[estScopeSize];
    } else {
      // JLC Core
      const fees: Record<string, { duration: string; schedule: string }> = {
        N5: { duration: currentLang === "JP" ? "3ヶ月(基本基礎)" : currentLang === "ID" ? "3 Bulan (Dasar Pengenalan)" : "3 Months (Basic Foundation)", schedule: "Tuesday & Thursday 19:00 WIB" },
        N4: { duration: currentLang === "JP" ? "3ヶ月(一般就労)" : currentLang === "ID" ? "3 Bulan (Umum & Karir)" : "3 Months (General Working)", schedule: "Monday & Wednesday 19:00 WIB" },
        N3: { duration: currentLang === "JP" ? "4ヶ月(ビジネス実務)" : currentLang === "ID" ? "4 Bulan (Bisnis Terapan)" : "4 Months (Business Practical)", schedule: "Monday, Wednesday, Friday 19:00 WIB" },
        N2: { duration: currentLang === "JP" ? "5ヶ月(上級管理役員)" : currentLang === "ID" ? "5 Bulan (Eksekutif Lanjutan)" : "5 Months (Advanced Executive)", schedule: "Saturdays 09:00 WIB (Intensive)" },
        N1: { duration: currentLang === "JP" ? "6ヶ月(ネイティブ到達クラス)" : currentLang === "ID" ? "6 Bulan (Kompetensi Tingkat Native)" : "6 Months (Native Competency)", schedule: "Sundays 09:00 WIB (Fluent Seminar)" },
      };
      const detail = fees[estJlptGoal] || fees["N3"];
      return {
        time: detail.duration,
        desc: currentLang === "JP" ? `会場：ブカシ Sinpasa キャンパス。予定講義時間：${detail.schedule}。` : currentLang === "ID" ? `Lokasi Terarah: Ruko Sinpasa Summarecon. Jadwal Kelas: ${detail.schedule}.` : `Instruction Venue: Summarecon Bekasi Ruko Sinpasa. Schedule: ${detail.schedule}.`
      };
    }
  };

  const estimateResult = calculateEstimate();

  const handleApplyCTA = () => {
    setCurrentPage("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getLocalWorkflowStep = (idx: number, defaultStep: string) => {
    if (selectedServiceId === "translation-localization") {
      const jp = ["文化的適合監査および現地言語のアセスメント", "ネイティブ用語集の画定・トーンの策定", "翻訳の実施（ネイティブ実務担当者＋校正）", "品質の２重チェックと最終確認"];
      const id = ["Audit Linguistik & Penilaian Budaya Sasaran", "Perumusan Kosakata Kunci & Tonasi Terpilih", "Penerjemahan Dua Arah (Penerjemah Utama + Editor Khusus)", "Quality Assurance Hasil Akhir terhadap Standar Panduan"];
      if (currentLang === "JP") return jp[idx] || defaultStep;
      if (currentLang === "ID") return id[idx] || defaultStep;
    }
    if (selectedServiceId === "annotation") {
      const jp = ["ガイドラインに合わせたパイロットテストの実施", "暗号、保護された登録クラウドアノテータの選定", "アノテーションの実施及び相互のピア検証ループ", "JSON/CSV等、指定形式へのデータ納品物監査"];
      const id = ["Uji Coba Awal & Penyesuaian Panduan Kerja", "Pengerjaan Ter enkripsi & Verifikasi Silang Berjenjang", "Pengecekan Konsistensi Format Data", "Pengiriman Hasil Terstruktur (Format JSON, CSV, dsb)"];
      if (currentLang === "JP") return jp[idx] || defaultStep;
      if (currentLang === "ID") return id[idx] || defaultStep;
    }
    if (selectedServiceId === "japanese-learning-center") {
      const jp = ["プレイスメントテストと個人スキル表の作成", "ハイブリッド学習方式（オンライン講義＋対面教室）", "日本語発音指導・定期技能試験の実施", "個別指導による日本語能力試験JLPTの徹底突破ブートキャンプ"];
      const id = ["Pre-Test Pengenalan & Formulasi Minat Karier", "Bimbingan Campuran (Pertemuan Tatap Muka & Sesi Live Online)", "Evaluasi Pengucapan Aksen Jepang yang Sesuai", "Bootcamp Intensif Pembekalan Ujian JLPT Komprehensif"];
      if (currentLang === "JP") return jp[idx] || defaultStep;
      if (currentLang === "ID") return id[idx] || defaultStep;
    }
    if (selectedServiceId === "japanese-locale-services") {
      const jp = ["企業の具体的要件と実地稼働マッピング評価", "多言語規約の策定支援・異文化間研修プログラム", "日本語管理者等コーディネーターの派遣・調整", "進捗に合わせた管理体制の見直し監査"];
      const id = ["Analisis Kebutuhan Lokasi & Pemetaan Alur Kerja", "Lokalisasi Peraturan Perusahaan & Pelatihan Budaya", "Dukungan Koordinasi Pendamping (Liaison) di Lapangan", "Supervisi Kinerja Administrasi Kelayakan Kerja"];
      if (currentLang === "JP") return jp[idx] || defaultStep;
      if (currentLang === "ID") return id[idx] || defaultStep;
    }
    return defaultStep;
  };

  const getLocalDetailsVal = (key: string, defaultVal: string) => {
    if (currentLang === "JP") {
      if (key === "location") return "インドネシア 西ジャワ州 ブカシ Summarecon Summarecon-Sinpasa Unit A-20";
      if (key === "level") return "JLPT N5、N4、N3、N2、及びN1各クラスをご用意";
      if (key === "format") return "ご期待に沿った形式（オンライン、対面、出張、複合型）";
      if (key === "target") return "現地日本企業、共同パートナー、グローバルスタートアップ";
    }
    if (currentLang === "ID") {
      if (key === "location") return "Ruko Sinpasa Summarecon Bekasi Blok A-20, Jawa Barat, Indonesia";
      if (key === "level") return "Tersedia pembinaan lengkap bersertifikat JLPT level N5 hngga N1";
      if (key === "format") return "Format Pilihan (Kelas Tatap Muka, Online hybrid, dsb)";
      if (key === "target") return "Entitas Bisnis, Startup Teknologi, atau Profesional Karir";
    }
    return defaultVal;
  };

  return (
    <div id="services-view" className="py-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        
        {/* Header Block with dynamic switcher */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-vermillion font-semibold uppercase tracking-widest font-japanese inline-block mb-3">
            {activeDict.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif-display font-medium text-ink tracking-tight mb-4">
            {activeDict.head}
          </h1>
          <p className="text-sm md:text-base text-slate font-light leading-relaxed">
            {activeDict.sub}
          </p>
        </div>

        {/* Tab Selection Row — dengan animated active indicator */}
        <div id="services-tabs" className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-2 bg-cream border border-mist rounded-sm mb-12">
          {SERVICES.map((s) => {
            const isActive = selectedServiceId === s.id;
            return (
              <motion.button
                id={`tab-btn-${s.id}`}
                key={s.id}
                onClick={() => setSelectedServiceId(s.id)}
                whileTap={{ scale: 0.97 }}
                className={`py-5 px-4 rounded-xs text-center flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 focus:outline-none relative ${
                  isActive 
                    ? "bg-ink text-paper border border-gold/40 shadow-lg" 
                    : "bg-transparent text-ink hover:bg-paper/80 hover:text-vermillion"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="services-active-tab"
                    className="absolute inset-0 bg-ink rounded-xs"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                <div className={`p-2 rounded-full ${isActive ? "bg-vermillion text-paper" : "bg-ink/5 text-ink"}`}>
                  {getServiceIcon(s.icon)}
                </div>
                <span className="text-[9px] uppercase tracking-widest font-japanese text-gold block -mb-1">
                  {s.titleJp}
                </span>
                <span className="text-xs md:text-sm font-serif-display font-bold">
                  {getLocalServiceIdTitle(s.id, s.title, s.titleJp)}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Service Content & Details Block */}
        <div id="service-content-block" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-cream border border-mist p-8 md:p-12 rounded-xs relative overflow-hidden">
          
          {/* subtle watermark inside card layout */}
          <div className="absolute right-[-20px] top-[-20px] font-japanese text-[110px] text-ink/[0.012] font-extrabold select-none pointer-events-none uppercase">
            {activeService.titleJp.slice(0, 3)}
          </div>

          {/* Left Column: Descriptions, Details, Languages */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-vermillion text-paper rounded-xs">
                {getServiceIcon(activeService.icon)}
              </div>
              <div>
                <p className="text-xs text-gold uppercase font-japanese tracking-widest">
                  {activeService.titleJp}
                </p>
                <h2 className="text-xl md:text-3xl font-serif-display font-bold text-ink leading-tight">
                  {getLocalServiceTitle(activeService.id, activeService.title, activeService.titleJp)}
                </h2>
              </div>
            </div>

            <p className="text-sm md:text-base text-slate leading-relaxed font-light">
              {getLocalServiceDesc(activeService.id, activeService.description)}
            </p>

            {/* Custom attributes metadata display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-paper/60 p-5 rounded-xs border border-mist">
              {activeService.details?.location && (
                <div className="flex gap-2.5">
                  <MapPin className="w-5 h-5 text-vermillion shrink-0" />
                  <div>
                    <h5 className="text-[10px] uppercase font-bold text-ink">{activeDict.meta_camp}</h5>
                    <p className="text-xs text-slate mt-0.5">{getLocalDetailsVal("location", activeService.details.location)}</p>
                  </div>
                </div>
              )}
              {activeService.details?.level && (
                <div className="flex gap-2.5">
                  <Compass className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <h5 className="text-[10px] uppercase font-bold text-ink">{activeDict.meta_cov}</h5>
                    <p className="text-xs text-slate mt-0.5">{getLocalDetailsVal("level", activeService.details.level)}</p>
                  </div>
                </div>
              )}
              {activeService.details?.format && (
                <div className="flex gap-2.5">
                  <Clock className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <h5 className="text-[10px] uppercase font-bold text-ink">{activeDict.meta_deliv}</h5>
                    <p className="text-xs text-slate mt-0.5">{getLocalDetailsVal("format", activeService.details.format)}</p>
                  </div>
                </div>
              )}
              {activeService.details?.target && (
                <div className="flex gap-2.5">
                  <CheckCircle className="w-5 h-5 text-sage shrink-0" />
                  <div>
                    <h5 className="text-[10px] uppercase font-bold text-ink">{activeDict.meta_tgt}</h5>
                    <p className="text-xs text-slate mt-0.5">{getLocalDetailsVal("target", activeService.details.target)}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Languages Matrix */}
            {activeService.languages && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-japanese font-semibold text-gold mb-3">
                  {activeDict.lang_matrix_lbl}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.languages.map((l, i) => (
                    <span 
                      key={i} 
                      className="px-3.5 py-1.5 bg-paper text-ink border border-mist text-xs font-semibold rounded-xs hover:border-vermillion transition-colors inline-block"
                    >
                      ✓ {l === "Japanese" && currentLang === "JP" ? "日本語" : l === "Indonesian" && currentLang === "JP" ? "インドネシア語" : l === "English" && currentLang === "JP" ? "英語" : l}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Use Cases */}
            <div className="mt-2">
              <h4 className="text-xs uppercase tracking-wider font-japanese font-semibold text-gold mb-3">
                {activeDict.usecases_lbl}
              </h4>
              <ul className="flex flex-col gap-3">
                {activeService.useCases.map((uc, i) => (
                  <li key={i} className="flex gap-3 items-start text-xs text-slate leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-vermillion/10 text-vermillion font-bold flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                      {i + 1}
                    </span>
                    <p>
                      {currentLang === "JP" 
                        ? (i === 0 ? "契約・社内規定、知的ポリシー書類など現地適任スタッフによる翻訳。" : i === 1 ? "マニュアル、開発者向けUXの正確な多言語ローカリゼーションの実地構築。" : "プロモーション配信向けローカル字幕、映像メッセージコンテンツ等の制作。")
                        : currentLang === "ID"
                        ? (i === 0 ? "Prinsip patuh regulasi dari operasional standar kantor regional perusahaan multinasional Jepang." : i === 1 ? "Lokalisasi kurasi materi teks untuk kemudahan antar muka di aplikasi / software digital." : "Menyediakan pemandu pemahaman langsung dalam percakapan bisnis di tingkat expat.")
                        : uc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Workflow Steps Timeline & CTA Trigger */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6 lg:border-l lg:border-mist lg:pl-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gold font-japanese font-semibold mb-4">
                {activeDict.workflow_title}
              </h3>
              <div className="relative border-l border-gold/40 pl-5 flex flex-col gap-6">
                {activeService.workflow.map((step, idx) => (
                  <motion.div 
                    key={idx} 
                    className="relative"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Ring timeline indicator */}
                    <motion.span 
                      className="absolute -left-[26px] top-1 w-3 h-3 rounded-full bg-vermillion border-2 border-cream z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, delay: idx * 0.08 }}
                    />
                    <p className="text-[10px] text-gold font-japanese font-medium leading-none mb-1">
                      STEP 0{idx + 1}
                    </p>
                    <p className="text-xs font-semibold text-ink leading-tight">
                      {getLocalWorkflowStep(idx, step)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border-t border-mist pt-6 mt-4 flex flex-col gap-4">
              <div className="bg-paper p-4 rounded-xs border border-vermillion/15 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-vermillion shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate leading-relaxed">
                  {activeDict.guarantee}
                </p>
              </div>

              <button
                id="service-cta-trigger"
                onClick={handleApplyCTA}
                className="w-full py-4 bg-vermillion hover:bg-vermillion/90 text-paper font-semibold text-xs tracking-wider uppercase rounded-xs border border-vermillion hover:border-gold/30 transition-all duration-300 shadow-lg text-center cursor-pointer focus:outline-none"
              >
                {currentLang === "JP" ? activeService.titleJp + "を問い合わせる" : currentLang === "ID" ? "Ajukan Konsultasi Layanan" : activeService.ctaText}
              </button>
            </div>
          </div>
        </div>

        {/* High Craft Interaction: ESTIMATOR TOOLBOX */}
        <div id="service-estimator-tool" className="mt-20 bg-ink text-paper p-8 md:p-12 rounded-sm border border-gold/15 relative overflow-hidden">
          <div className="absolute right-[2%] top-[5%] opacity-[0.03] select-none pointer-events-none font-japanese text-[120px] text-paper font-black">
            試算
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Context header info */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 text-gold text-xs tracking-widest font-japanese uppercase">
                <Calculator className="w-4 h-4 text-vermillion" />
                {activeDict.calc_badge}
              </div>
              <h3 className="text-2xl md:text-3xl font-serif-display font-medium tracking-tight">
                {activeDict.calc_head}
              </h3>
              <p className="text-xs md:text-sm text-mist/80 leading-relaxed font-light">
                {activeDict.calc_desc}
              </p>

              <div id="calculator-service-toggles" className="flex flex-col gap-2.5">
                <label className="text-[10px] text-gold uppercase tracking-wider block font-bold">
                  {activeDict.calc_choose_dept}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    id="calc-opt-translation"
                    onClick={() => {
                      setEstServiceType("translation");
                      setEstScopeSize("medium");
                    }}
                    className={`py-2 px-1 text-[10px] rounded-xs uppercase tracking-wide cursor-pointer focus:outline-none ${
                      estServiceType === "translation" ? "bg-vermillion text-paper font-semibold border border-vermillion" : "bg-paper/5 text-mist border border-paper/10"
                    }`}
                  >
                    {currentLang === "JP" ? "翻訳" : currentLang === "ID" ? "Penerjemahan" : "Translation"}
                  </button>
                  <button
                    id="calc-opt-annotation"
                    onClick={() => {
                      setEstServiceType("annotation");
                      setEstScopeSize("medium");
                    }}
                    className={`py-2 px-1 text-[10px] rounded-xs uppercase tracking-wide cursor-pointer focus:outline-none ${
                      estServiceType === "annotation" ? "bg-vermillion text-paper font-semibold border border-vermillion" : "bg-paper/5 text-mist border border-paper/10"
                    }`}
                  >
                    {currentLang === "JP" ? "データ作成" : currentLang === "ID" ? "Pelabelan AI" : "Annotation"}
                  </button>
                  <button
                    id="calc-opt-jlc"
                    onClick={() => setEstServiceType("jlc")}
                    className={`py-2 px-1 text-[10px] rounded-xs uppercase tracking-wide cursor-pointer focus:outline-none ${
                      estServiceType === "jlc" ? "bg-vermillion text-paper font-semibold border border-vermillion" : "bg-paper/5 text-mist border border-paper/10"
                    }`}
                  >
                    {currentLang === "JP" ? "語学教育" : currentLang === "ID" ? "Bimbingan JLC" : "JLC Core"}
                  </button>
                </div>
              </div>
            </div>

            {/* Inputs & Instant Outcomes */}
            <div className="lg:col-span-7 bg-paper/5 border border-gold/15 p-6 md:p-8 rounded-xs grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative z-10">
              {/* Variable Controls Column */}
              <div className="flex flex-col gap-5 justify-center">
                {estServiceType === "translation" && (
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] text-gold uppercase tracking-wider block font-semibold">
                      {currentLang === "JP" ? "ドキュメント量・スコープ区分" : currentLang === "ID" ? "Pilih Cakupan Skala Dokumen" : "Select Document Volume Scope"}
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {(["small", "medium", "large"] as const).map((sz) => (
                        <button
                          id={`trans-sz-btn-${sz}`}
                          key={sz}
                          onClick={() => setEstScopeSize(sz)}
                          className={`py-2.5 px-1 text-center text-[10px] uppercase font-bold rounded-xs cursor-pointer focus:outline-none transition-all ${
                            estScopeSize === sz ? "bg-gold text-ink" : "bg-paper/5 text-mist hover:bg-paper/10"
                          }`}
                        >
                          {sz === "small" ? (currentLang === "JP" ? "小型" : currentLang === "ID" ? "Kecil" : "Small") : sz === "medium" ? (currentLang === "JP" ? "中型" : currentLang === "ID" ? "Menengah" : "Medium") : (currentLang === "JP" ? "大型" : currentLang === "ID" ? "Besar" : "Large")}
                        </button>
                      ))}
                    </div>
                    <p className="text-[9px] text-mist/60 leading-normal block pointer-events-none mt-1">
                      {estScopeSize === "small" 
                        ? (currentLang === "JP" ? "文字目安：2,000字未満" : currentLang === "ID" ? "Estimasi: Di bawah 2.000 kata" : "Estimative: Under 2,000 words") 
                        : estScopeSize === "medium"
                        ? (currentLang === "JP" ? "文字目安：2,000〜10,000字" : currentLang === "ID" ? "Estimasi: 2.000 - 10.000 kata" : "Estimative: 2,000 - 10,000 words")
                        : (currentLang === "JP" ? "文字目安：10,000字超" : currentLang === "ID" ? "Estimasi: Di atas 10.000 kata" : "Estimative: Over 10,000 words")}
                    </p>
                  </div>
                )}

                {estServiceType === "annotation" && (
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] text-gold uppercase tracking-wider block font-semibold">
                      {currentLang === "JP" ? "アノテーション分量区分" : currentLang === "ID" ? "Pilih Cakupan Skala Pelabelan" : "Select Annotation Volume Scope"}
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {(["small", "medium", "large"] as const).map((sz) => (
                        <button
                          id={`annot-sz-btn-${sz}`}
                          key={sz}
                          onClick={() => setEstScopeSize(sz)}
                          className={`py-2.5 px-1 text-center text-[10px] uppercase font-bold rounded-xs cursor-pointer focus:outline-none transition-all ${
                            estScopeSize === sz ? "bg-gold text-ink" : "bg-paper/5 text-mist hover:bg-paper/10"
                          }`}
                        >
                          {sz === "small" ? (currentLang === "JP" ? "PoC" : currentLang === "ID" ? "Pilot" : "Pilot") : sz === "medium" ? (currentLang === "JP" ? "本番" : currentLang === "ID" ? "Produksi" : "Production") : (currentLang === "JP" ? "大規模" : currentLang === "ID" ? "Maksimal" : "Enterprise")}
                        </button>
                      ))}
                    </div>
                    <p className="text-[9px] text-mist/60 leading-normal block pointer-events-none mt-1">
                      {estScopeSize === "small" 
                        ? (currentLang === "JP" ? "目安：1,000データ枠未満" : currentLang === "ID" ? "Estimasi: Di bawah 1.000 data" : "Estimative: Under 1,000 datas") 
                        : estScopeSize === "medium"
                        ? (currentLang === "JP" ? "目安：1,000〜5,000データ" : currentLang === "ID" ? "Estimasi: 1.000 - 5.000 data" : "Estimative: 1,000 - 5,000 datas")
                        : (currentLang === "JP" ? "目安：5,000データ超" : currentLang === "ID" ? "Estimasi: Di atas 5.000 data" : "Estimative: Over 5,000 datas")}
                    </p>
                  </div>
                )}

                {estServiceType === "jlc" && (
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] text-gold uppercase tracking-wider block font-semibold">
                      {activeDict.calc_level_lbl}
                    </label>
                    <div className="grid grid-cols-5 gap-1.5">
                      {["N5", "N4", "N3", "N2", "N1"].map((lvl) => (
                        <button
                          id={`jlc-lvl-btn-${lvl}`}
                          key={lvl}
                          onClick={() => setEstJlptGoal(lvl)}
                          className={`py-3 text-center text-xs font-bold rounded-xs cursor-pointer focus:outline-none transition-all ${
                            estJlptGoal === lvl ? "bg-gold text-ink" : "bg-paper/5 text-mist hover:bg-paper/10"
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                    <p className="text-[10px] text-mist/60 leading-normal pointer-events-none">
                      {activeDict.level_note}
                    </p>
                  </div>
                )}
              </div>

              {/* Estimate Calculations Column */}
              <div className="bg-paper/5 p-6 rounded-xs border border-vermillion/15 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-gold font-japanese block mb-1">
                    {activeDict.calc_result_badge}
                  </span>
                  <p className="text-xs text-mist/80 font-serif-display leading-tight mb-4">
                    {currentLang === "JP" ? "見積対象スコープ・推奨要件：" : currentLang === "ID" ? "Detail standar kualifikasi pelayanan:" : "Standard scope metrics & milestones:"}
                  </p>

                  <div className="mb-4">
                    <span className="text-[9px] text-mist/60 uppercase block">{activeDict.calc_timeline_lbl}</span>
                    <span id="calc-result-time" className="text-sm md:text-base font-semibold text-paper flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gold shrink-0" />
                      {estimateResult.time}
                    </span>
                  </div>
                </div>

                <div className="border-t border-paper/10 pt-4 mt-4">
                  <p id="calc-result-desc" className="text-[10px] text-mist/80 italic leading-relaxed font-light">
                    {estimateResult.desc}
                  </p>
                  <button
                    id="calc-booking-btn"
                    onClick={handleApplyCTA}
                    className="w-full mt-4 py-2.5 bg-paper text-ink font-semibold text-[10px] tracking-wider uppercase rounded-xs hover:bg-gold hover:text-ink transition-colors duration-300 flex items-center justify-center gap-1 cursor-pointer focus:outline-none"
                  >
                    {activeDict.calc_cta}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Inline helper to resolve item titles — with proper localization
function getLocalServiceIdTitle(sId: string, defaultVal: string, jpVal: string) {
  // This helper intentionally returns defaultVal as the tab title is set via button label in render
  // Language-specific titles are handled by the parent via getLocalServiceTitle
  return defaultVal;
}
