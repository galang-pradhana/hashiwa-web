import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  Sparkles, 
  Zap, 
  Heart, 
  Bookmark, 
  ShieldAlert, 
  Users, 
  Target, 
  Briefcase 
} from "lucide-react";
import { PEACE_VALUES } from "../data";

interface AboutProps {
  currentLang: "EN" | "JP" | "ID";
}

export default function About({ currentLang }: AboutProps) {
  const [activeLetter, setActiveLetter] = useState<string>("P");

  const activePeace = PEACE_VALUES.find(v => v.letter === activeLetter) || PEACE_VALUES[0];

  const getPeaceIcon = (letter: string) => {
    switch (letter) {
      case "P": return <ShieldAlert className="w-12 h-12 text-vermillion" />;
      case "E": return <Zap className="w-12 h-12 text-vermillion" />;
      case "A": return <Compass className="w-12 h-12 text-vermillion" />;
      case "C": return <Heart className="w-12 h-12 text-vermillion" />;
      case "Ethic": return <Bookmark className="w-12 h-12 text-vermillion" />;
      default: return <ShieldAlert className="w-12 h-12 text-vermillion" />;
    }
  };

  const dict = {
    EN: {
      badge: "ABOUT STORY · THE TRUST ECOSYSTEM",
      head: "Forging Shared Cultural and Enterprise Bridges",
      subDesc: "PT. Hashiwa Global Strategy was founded with a singular focus: to elevate standard communication into professional cultural and tactical alignment, offering impeccable ground-truth data and training.",
      storyBadge: "Founding Story & Transition",
      storyTitle: "From Humble Origins to High-Precision Business Operations",
      storyDesc1: "Hashiwa initially coordinated local training out of Bekasi, but quickly realized standard models failed to represent the true structural complexity our corporate clients demanded. The transition to high-caliber localization and structured multi-accent AI dataset annotations solidified our mission.",
      storyDesc2: "By utilizing a curated, highly trained crew of over 100 on-demand crowdworkers, we bypass typical large-agency overhead and focus deeply on precision deliverables. We represent professional integrity—fostering respect, strict compliance, and agile execution.",
      visionHead: "Corporate Vision",
      visionSub: "To Be The Premier Standard for Asia-Pacific Cross Border Operations",
      visionDesc: "Empowering businesses with native linguistic adaptiveness and secure machine training structures that spark authentic regional progress.",
      missionHead: "Corporate Mission",
      missionSub: "Rigorous QC & Professional Human-In-The-Loop Data Tagging",
      missionDesc: "Combining native linguistic expertise with high-security, peer-reviewed crowd models to satisfy rigorous enterprise quality criteria.",
      philosophyBadge: "BRAND ESSENCE",
      philosophyHead: "Driven Nationally & Internationally by PEACE",
      philosophySub: "PT. Hashiwa Global Strategy enforces five foundational rules of business ethics. Click each core letter to inspect our commitment and JP mandate:",
      leaderBadge: "LEADERSHIP & STRATEGISTS",
      leaderHead: "Our Professional Core Advisors",
      footerDesc: "Our direct operation also relies on a network of Japanese native-speaker translators and Indonesian JLPT instructors coordinating daily to verify annotation guidelines and localized standards."
    },
    JP: {
      badge: "会社案内 · 信頼のエコシステム",
      head: "架け橋となる新たなビジネスの協創",
      subDesc: "PT. Hashiwa Global Strategy は、単なる言語翻訳を超えた、プロフェッショナルな異文化間の意思疎通と機械学習向けの精密なデータ作成、そして真のグローバル教育を提供するために設立されました。",
      storyBadge: "創立のあゆみと沿革",
      storyTitle: "Bekasi の一拠点からアジア全域へ品質の限界を越える",
      storyDesc1: "ハシワは当初、ジャカルタ近郊ブカシ(Bekasi)での小規模な現地研修からスタートしましたが、日本の提携メーカーやアノテーションを求めるAI開発企業からの高度な要望に応えるため、厳しい2段階評価フローとネイティブ査定スキームを導入しました。",
      storyDesc2: "現在では100名を超える厳選された登録アノテータと連携し、機密保護基準に基づき、大手の高額仲介コストを削減しながらお客様のニーズに柔軟に対応します。私たちは常に高潔性と敏捷な実行をお約束します。",
      visionHead: "コーポレートビジョン",
      visionSub: "アジア太平洋における越境事業運営のトップスタンダードへ",
      visionDesc: "安全な言語ローカライゼーションと機械学習用アノテーション基盤により、企業の安全な相互進出と持続可能な成長を構築します。",
      missionHead: "コーポレートミッション",
      missionSub: "厳格な品質管理（QC）とプロフェッショナルな多重検証アノテーション",
      missionDesc: "専門のネイティブ言語スペシャリストとの綿密な連携及び多階層評価ループにより、各企業の厳しい精度指標を満たします。",
      philosophyBadge: "ハシワの価値規範",
      philosophyHead: "PEACE基準に基づく国際オペレーションの徹底",
      philosophySub: "PT. Hashiwa Global Strategyは5つの重要な柱に基づいて運営されています。アノテーションの機密保護、日本語翻訳精度、及び厳格な倫理規定を順守します。",
      leaderBadge: "経営陣紹介",
      leaderHead: "当社の主要な取締役・コアアドバイザー",
      footerDesc: "当社の直接業務は、日本のネイティブ翻訳者とインドネシアの日本語能力試験（JLPT）指導者から成る緊密なネットワークの上に成り立っています。"
    },
    ID: {
      badge: "PROFIL PERUSAHAAN · EKOSISTEM KEPERCAYAAN",
      head: "Membentuk Sinergi Budaya dan Kemitraan Enterprise",
      subDesc: "PT. Hashiwa Global Strategy didirikan dengan tujuan fokus: meningkatkan komunikasi esensial menjadi penyelarasan operasional bisnis, menghasilkan akurasi anotasi data AI berstandar internasional dan bimbingan belajar terbaik.",
      storyBadge: "Sejarah Berdiri & Transformasi",
      storyTitle: "Dari Permulaan Sederhana Menuju Standar Operasi Berpresisi Tinggi",
      storyDesc1: "Hashiwa pada mulanya mengoordinasikan pelatihan lokal berskala kecil di Bekasi, tetapi segera menyadari bahwa standar konvensional belum memenuhi ketatnya kompleksitas industri global. Transformasi kami menuju lokalisasi berkaliber tinggi dan anotasi data pembelajaran mesin memperkuat arah komitmen kami.",
      storyDesc2: "Dengan mengandalkan tim terverifikasi yang terdiri dari 100+ talenta on-demand, kami memangkas biaya perantara umum dan fokus penuh pada akurasi mutlak. Kami membawa integritas profesional—fleksibilitas eksekusi, kerahasiaan ketat, serta efisiensi terbaik.",
      visionHead: "Visi Perusahaan",
      visionSub: "Menjadi Standar Terdepan untuk Operasi Lintas Batas di Asia-Pasifik",
      visionDesc: "Memberdayakan bisnis dengan adaptabilitas linguistik asli dan infrastruktur pelatihan data AI aman yang mendorong pertumbuhan regional.",
      missionHead: "Misi Perusahaan",
      missionSub: "Quality Control Ketat & Dukungan Verifikasi Berlapis",
      missionDesc: "Mengintegrasikan kecakapan bahasa asli dengan tingkat perlindungan kerahasiaan data berlapis demi memenuhi kriteria enterprise.",
      philosophyBadge: "ESENSI PRINSIP",
      philosophyHead: "Bergerak Secara Nasional & Internasional Melalui PEACE",
      philosophySub: "PT. Hashiwa Global Strategy menjalankan lima pilar fundamental etika bisnis. Klik setiap huruf utama untuk melihat komitmen serta kepatuhan kerja kami:",
      leaderBadge: "STRATEGIST & MANAGER",
      leaderHead: "Penasihat Utama Profesional Kami",
      footerDesc: "Operasional kami turut didukung oleh aliansi penutur bahasa Jepang asli (native) serta instruktur akademik untuk evaluasi harian standar mutu."
    }
  };

  const activeDict = dict[currentLang] || dict.EN;

  const getLocalPeaceText = (letter: string, defaultDesc: string) => {
    if (currentLang === "JP") {
      if (letter === "P") return "最高水準の正確、ミス検知フローの順守、迅速かつ徹底的なクライアント第一主義の翻訳とデータアノテーションサイクルを遂行します。";
      if (letter === "E") return "情熱と若きエネルギッシュな熱量を原動力とし、大人数案件でもムラのない登録管理体制と対面授業指導を行います。";
      if (letter === "A") return "刻々と変わる技術革新（AIアノテーション要件、法令基準の変更）に遅滞なく適合し、柔軟かつ速やかにマイルストーンを完了します。";
      if (letter === "C") return "登録クラウドアノテータから企業顧客まで、お預かりするすべての要求に耳を傾け、相互発展の関係を築きます。";
      return "データ処理における不正監視、厳正なGDPR順守、公正な取引。すべてを倫理に則って運営します。";
    }
    if (currentLang === "ID") {
      if (letter === "P") return "Mengutamakan kualitas pengerjaan tanpa cela, menjaga kedisiplinan kerja, serta mendukung akurasi di setiap data yang diproses.";
      if (letter === "E") return "Didorong oleh ambisi perkembangan karir, kami membina instruktur serta tim pengerjaan dengan sinergi aktif.";
      if (letter === "A") return "Tangkas menyesuaikan diri dengan perubahan regulasi baru serta timeline ketat dari klien korporat tanpa menurunkan kualitas.";
      if (letter === "C") return "Menghadirkan lingkungan kerja suportif. Kami mengayomi tim pengerja lokal demi menjaga kestabilan loyalitas.";
      return "Menjaga transparansi penuh dalam proses komersial perusahaan serta perlindungan data mitra kerja secara jujur.";
    }
    return defaultDesc;
  };

  const team = [
    { 
      name: "Satoshi Tanaka", 
      role: currentLang === "JP" ? "共同創業者 兼 代表取締役" : currentLang === "ID" ? "Co-Founder & Direktur Eksekutif" : "Co-Founder & Executive Director", 
      bio: currentLang === "JP" ? "東南アジアでの企業運営に15年以上従事。日・印間の事業コンプライアンス戦略の専門家。" : "Over 15 years directing enterprise operations in Southeast Asia. Expert in Japan-Indonesia compliance strategy.", 
      seed: "satosh" 
    },
    { 
      name: "Pratiwi Kartika, M.Hum", 
      role: currentLang === "JP" ? "ハシワ日本語ラーニングセンター 所長" : currentLang === "ID" ? "Kepala Kampus Pusat Belajar (JLC)" : "Head of Japanese Learning Center", 
      bio: currentLang === "JP" ? "日本語能力試験（JLPT）N1を保有する言語学研究者。教育カリキュラム構築と高度な発音矯正に精通。" : "Fluent N1 certified scholar. Specializes in advanced corporate curriculum design and native accent training.", 
      seed: "pratiw" 
    },
    { 
      name: "Irwan Sastrawan", 
      role: currentLang === "JP" ? "アノテーション運用管理責任者" : currentLang === "ID" ? "Kepala Divisi Operasional Anotasi" : "Crowd Ops Lead & Annotation Lead", 
      bio: currentLang === "JP" ? "100名を超える安全なアノテーションチームの指揮。何重もの相互検証プロセスを徹底。" : "Coordinates our 100+ secure crowds. Ensures high accuracy peer verification rules are followed firmly.", 
      seed: "irwan" 
    },
  ];

  return (
    <div id="about-view" className="py-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        
        {/* Header Block inline localization */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs text-vermillion font-semibold uppercase tracking-widest font-japanese inline-block mb-3">
            {activeDict.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif-display font-medium text-ink tracking-tight mb-4">
            {activeDict.head}
          </h1>
          <p className="text-sm md:text-base text-slate font-light leading-relaxed">
            {activeDict.subDesc}
          </p>
        </div>

        {/* Founding Story & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink text-paper text-xs uppercase tracking-wider rounded-xs w-fit">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              {activeDict.storyBadge}
            </div>
            
            <h2 className="text-2xl md:text-3xl font-serif-display font-bold text-ink leading-snug">
              {activeDict.storyTitle}
            </h2>

            <p className="text-sm text-slate leading-relaxed font-light">
              {activeDict.storyDesc1}
            </p>

            <p className="text-sm text-slate leading-relaxed font-light">
              {activeDict.storyDesc2}
            </p>
          </div>

          {/* Vision/Mission Visual Cards (Fully Human design aesthetic) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <div className="bg-cream border border-mist p-6 rounded-xs relative overflow-hidden">
              <div className="absolute right-3 top-3 text-ink/5">
                <Target className="w-12 h-12" />
              </div>
              <h3 className="text-xs text-gold font-japanese uppercase tracking-widest mb-2">{activeDict.visionHead}</h3>
              <h4 className="text-sm font-serif-display font-bold text-ink mb-2">{activeDict.visionSub}</h4>
              <p className="text-xs text-slate leading-relaxed">
                {activeDict.visionDesc}
              </p>
            </div>

            <div className="bg-cream border border-mist p-6 rounded-xs relative overflow-hidden">
              <div className="absolute right-3 top-3 text-ink/5">
                <Briefcase className="w-12 h-12" />
              </div>
              <h3 className="text-xs text-gold font-japanese uppercase tracking-widest mb-2">{activeDict.missionHead}</h3>
              <h4 className="text-sm font-serif-display font-bold text-ink mb-2">{activeDict.missionSub}</h4>
              <p className="text-xs text-slate leading-relaxed">
                {activeDict.missionDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic & High-Class PEACE Values Presenter Suite with real triggers */}
        <div id="peace-values-suite" className="bg-ink text-paper p-8 md:p-12 rounded-sm border border-gold/15 mb-24 relative overflow-hidden">
          <div className="absolute left-[3%] top-[5%] opacity-[0.03] select-none pointer-events-none font-japanese text-[140px] text-paper font-black uppercase">
            ピース
          </div>

          <div className="text-center max-w-xl mx-auto mb-10 relative z-10">
            <span className="text-xs tracking-widest text-gold font-japanese uppercase inline-block mb-2">
              {activeDict.philosophyBadge}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif-display text-paper font-medium tracking-tight">
              {activeDict.philosophyHead}
            </h3>
            <p className="text-xs text-mist/80 mt-2 font-light">
              {activeDict.philosophySub}
            </p>
          </div>

          {/* Letter Switches Line */}
          <div id="peace-letters-row" className="flex justify-center items-center gap-2 sm:gap-4 mb-10 relative z-10">
            {["P", "E", "A", "C", "Ethic"].map((indicator) => {
              const displayLetter = indicator === "Ethic" ? "E" : indicator;
              const isSelected = activeLetter === (indicator === "Ethic" ? "Ethic" : indicator) || 
                                 (activeLetter === "P" && indicator === "P") ||
                                 (activeLetter === "E" && indicator === "E") ||
                                 (activeLetter === "A" && indicator === "A") ||
                                 (activeLetter === "C" && indicator === "C");

              return (
                <button
                  id={`peace-switch-${indicator}`}
                  key={indicator}
                  onClick={() => {
                    if (indicator === "Ethic") {
                      setActiveLetter("Ethic");
                    } else {
                      setActiveLetter(indicator);
                    }
                  }}
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-xs font-serif-display text-lg md:text-2xl font-bold flex items-center justify-center border transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                    isSelected 
                      ? "bg-vermillion text-paper border-vermillion shadow-xl scale-110" 
                      : "bg-paper/5 text-mist border-paper/10 hover:border-gold hover:text-gold"
                  }`}
                >
                  {displayLetter}
                </button>
              );
            })}
          </div>

          {/* Description actual box */}
          <div className="bg-paper/5 border border-gold/15 p-6 md:p-8 rounded-xs relative z-10 max-w-2xl mx-auto flex flex-col md:flex-row gap-6 items-center">
            <div className="w-16 h-16 rounded-full bg-vermillion/10 flex items-center justify-center shrink-0">
              {getPeaceIcon(activeLetter === "Ethic" ? "Ethic" : activeLetter[0])}
            </div>
            <div className="text-center md:text-left flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-widest text-gold font-japanese block">
                {activePeace.meaning}
              </span>
              <h4 className="text-base font-serif-display font-medium text-paper">
                {activeLetter === "Ethic" ? "Ethic" : activePeace.word} Commitment
              </h4>
              <p className="text-xs md:text-sm text-mist/90 leading-relaxed font-light">
                {getLocalPeaceText(activeLetter, activePeace.description)}
              </p>
            </div>
          </div>
        </div>

        {/* Representative Leadership Panels */}
        <div id="team-panels-suite" className="max-w-5xl mx-auto pb-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-vermillion font-japanese block mb-2">
              {activeDict.leaderBadge}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif-display font-medium text-ink">
              {activeDict.leaderHead}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((t, idx) => (
              <div 
                key={idx}
                className="bg-cream border border-mist p-6 rounded-xs text-center flex flex-col items-center hover:border-gold hover:shadow-lg transition-all duration-300"
              >
                {/* Visual Avatar Placeholder representing professional advisors */}
                <div className="w-16 h-16 rounded-full bg-ink/5 border border-gold flex items-center justify-center mb-4 text-ink font-serif-display font-bold text-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gold/10" />
                  <Users className="w-5 h-5 text-vermillion" />
                </div>
                <h4 className="font-serif-display text-sm font-bold text-ink">{t.name}</h4>
                <p className="text-[9px] text-gold uppercase tracking-wider font-semibold font-mono mt-0.5 mb-2">
                  {t.role}
                </p>
                <p className="text-xs text-slate leading-relaxed font-light">
                  {t.bio}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-paper border border-mist p-6 rounded-xs text-center">
            <p className="text-xs text-slate leading-relaxed max-w-xl mx-auto">
              {activeDict.footerDesc}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
