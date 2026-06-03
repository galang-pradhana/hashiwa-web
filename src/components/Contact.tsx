import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertTriangle,
  Building, 
  Compass,
  ArrowRight
} from "lucide-react";

interface ContactProps {
  currentLang: "EN" | "JP" | "ID";
}

export default function Contact({ currentLang }: ContactProps) {
  const [activeLocation, setActiveLocation] = useState<"head" | "jlc">("head");
  
  // Contact state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [division, setDivision] = useState("translation");
  const [message, setMessage] = useState("");
  
  // Form submission tracking
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");

  const dict = {
    EN: {
      badge: "CONNECTED IN REAL-TIME",
      head: "Initiate Your Global Strategy Synergy",
      sub: "Submit a request for comprehensive translation quotes, N1 language program curriculum schedules, or database trial annotations. We commit to complete response coordinate within 24 hours.",
      form_badge: "SUBMISSION FORM",
      form_head: "Global Inquiry Desk",
      lbl_name: "Full Name",
      lbl_email: "Email Address",
      lbl_company: "Company Name (Optional)",
      lbl_division: "Target Partnership Area",
      lbl_msg: "Your Specific Resource Requirements",
      ph_msg: "Please list target languages, timelines, or specific curriculum levels...",
      err_empty: "Kindly fill out the Name, Email and Message parameters.",
      err_invalid: "Provide a mathematically correct and valid email address.",
      btn_transmit: "Transmit Request",
      btn_transmitting: "Transmitting...",
      success_head: "Inquiry Successfully Transmitted",
      success_sub: "Thank you. Your corporate brief is safely cataloged. One of our bilingual coordinators will analyze the guidelines and trigger a reply within 24 hours.",
      btn_another: "Submit another inquiry",
      matrix_head: "Response Target",
      matrix_desc: "Average response frame is less than 1 business day. Direct screening managed by executive staff.",
      hq_title: "Corporate Headquarters Office",
      jlc_title: "Japanese Learning Center Campus",
      map_loaded: "Active Location",
      map_badge: "AUTHENTIC GEOGRAPHIC VIEWPORT",
      direct_map: "Direct Google Map Target"
    },
    JP: {
      badge: "万全の対応体制 · REAL-TIME",
      head: "グローバル戦略の連携を開始する",
      sub: "正確な翻訳見積かりのご相談、JLPT N1/N2研修日程の照会、アノテーションの試験運用要請など。専門コーディネーターが24時間以内に折り返し詳細をご案内いたします。",
      form_badge: "申請フォーム",
      form_head: "総合お問い合わせデスク",
      lbl_name: "お名前 (漢字/ローマ字)",
      lbl_email: "メールアドレス",
      lbl_company: "貴社名・組織名 (任意)",
      lbl_division: "ご希望の相談部署・分野",
      lbl_msg: "具体的なご相談内容・要件仕様",
      ph_msg: "納期のご希望、対象言語、または日本語能力目標レベルなどを詳しくご記入ください...",
      err_empty: "名前、メールアドレス、およびお問い合わせ内容テキストを全てご入力ください。",
      err_invalid: "有効な形式の電子メールアドレスを入力してください。",
      btn_transmit: "この内容で送信する",
      btn_transmitting: "送信ファイルを転送中...",
      success_head: "お問い合わせを確定しました",
      success_sub: "ご送信いただき感謝いたします。詳細データを確認の上、24時間以内にブカシ・東京オフィスの担当コーディネーターよりご連絡差し上げます。",
      btn_another: "別のお問い合わせを送信する",
      matrix_head: "回答までの所要日数指標",
      matrix_desc: "平均1営業日以内にご回答。田中およびプラティウィ所長が直接案件スクリーニングを実施します。",
      hq_title: "ブカシ本社コーポレートオフィス",
      jlc_title: "ハシワ日本語ラーニングセンター校舎",
      map_loaded: "読み込み済",
      map_badge: "リアルタイム地理マーカー",
      direct_map: "Google マップで直接表示"
    },
    ID: {
      badge: "RESPONS DALAM 24 JAM · TERHUBUNG",
      head: "Mulai Sinergi Strategi Global Anda",
      sub: "Kirimkan permohonan penawaran penerjemahan bahasa, konfirmasi kurikulum level JLC N1/N2, atau uji coba data anotasi. Kami berkomitmen memberikan respons tertulis dalam waktu kurang dari 24 jam.",
      form_badge: "FORMULIR PERMINTAAN",
      form_head: "Layanan Penerimaan Terpusat",
      lbl_name: "Nama Lengkap Pemohon",
      lbl_email: "Alamat Email Korporat",
      lbl_company: "Nama Perusahaan (Opsional)",
      lbl_division: "Kategori Bidang Kerjasama",
      lbl_msg: "Rincian Kebutuhan atau Spesifikasi",
      ph_msg: "Sebutkan bahasa target, deadline pengerjaan, atau tingkat kemampuan bahasa Jepang yang ditargetkan...",
      err_empty: "Harap isi nama, email, dan pesan rincian secara lengkap.",
      err_invalid: "Berikan alamat email yang valid dengan karakter '@'.",
      btn_transmit: "Kirim Permintaan Sekarang",
      btn_transmitting: "Mengirimkan Permintaan...",
      success_head: "Permintaan Berhasil Terkirim",
      success_sub: "Terima kasih. Rincian kebutuhan Anda telah tersimpan dengan aman. Koordinator bilingual kami akan mempelajari pedoman Anda dan memberikan balasan dalam waktu 24 jam.",
      btn_another: "Kirim permintaan lainnya",
      matrix_head: "Target Waktu Respons",
      matrix_desc: "Rata-rata respons dikirim kembali dalam 1 hari kerja. Evaluasi kelayakan dipantau langsung oleh manajemen.",
      hq_title: "Kantor Pusat Korporat (HQ)",
      jlc_title: "Kampus Pusat Pembelajaran JLC",
      map_loaded: "Lokasi Aktif",
      map_badge: "VISUALISASI GEOGRAFIS ASLI",
      direct_map: "Buka Langsung dengan Google Maps"
    }
  };

  const activeDict = dict[currentLang] || dict.EN;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorText("");

    if (!name || !email || !message) {
      setErrorText(activeDict.err_empty);
      return;
    }

    if (!email.includes("@")) {
      setErrorText(activeDict.err_invalid);
      return;
    }

    setLoading(true);

    // Simulate real delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset variables
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    }, 1100);
  };

  const getDivisionOptions = () => {
    if (currentLang === "JP") {
      return [
        { value: "translation", label: "翻訳・ローカライズ事業" },
        { value: "annotation", label: "アノテーション・AIデータ作成" },
        { value: "jlc", label: "日本語ラーニングセンター（JLC）入学" },
        { value: "locale-services", label: "現地日本企業支援オペレーション" }
      ];
    }
    if (currentLang === "ID") {
      return [
        { value: "translation", label: "Jasa Penerjemahan & Lokalisasi" },
        { value: "annotation", label: "Anotasi & Pelabelan Data AI" },
        { value: "jlc", label: "Penerimaan Siswa Belajar JLC" },
        { value: "locale-services", label: "Dukungan Operasi Korporat Jepang" }
      ];
    }
    return [
      { value: "translation", label: "Translation & Localization" },
      { value: "annotation", label: "Data Annotation & Labeling" },
      { value: "jlc", label: "Japanese Learning Center Admission" },
      { value: "locale-services", label: "Company Locale Operational Support" }
    ];
  };

  return (
    <div id="contact-view" className="py-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        
        {/* Header Block with dynamic localization */}
        <div className="max-w-3xl mx-auto text-center mb-16">
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

        {/* Contact Block split layout */}
        <div id="contact-split-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Client Submission Desk */}
          <div className="lg:col-span-7 bg-cream border border-mist p-8 rounded-xs shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-vermillion/10 flex items-center justify-center text-vermillion">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-gold uppercase tracking-widest font-japanese -mb-1">{activeDict.form_badge}</p>
                <h3 className="text-xl font-serif-display font-medium text-ink">{activeDict.form_head}</h3>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  id="inquiry-form" 
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-ink uppercase tracking-wider font-semibold">
                        {activeDict.lbl_name} <span className="text-vermillion">*</span>
                      </label>
                      <input 
                        id="form-name"
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="p-3 bg-paper border border-mist text-xs rounded-xs text-ink focus:outline-none focus:border-vermillion transition-colors placeholder:text-slate/40"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-ink uppercase tracking-wider font-semibold">
                        {activeDict.lbl_email} <span className="text-vermillion">*</span>
                      </label>
                      <input 
                        id="form-email"
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@organization.com"
                        className="p-3 bg-paper border border-mist text-xs rounded-xs text-ink focus:outline-none focus:border-vermillion transition-colors placeholder:text-slate/40"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-ink uppercase tracking-wider font-semibold">
                        {activeDict.lbl_company}
                      </label>
                      <input 
                        id="form-company"
                        type="text" 
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Organization or Univ."
                        className="p-3 bg-paper border border-mist text-xs rounded-xs text-ink focus:outline-none focus:border-vermillion transition-colors placeholder:text-slate/40"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-ink uppercase tracking-wider font-semibold">
                        {activeDict.lbl_division}
                      </label>
                      <select 
                        id="form-division"
                        value={division}
                        onChange={(e) => setDivision(e.target.value)}
                        className="p-3 bg-paper border border-mist text-xs rounded-xs text-ink focus:outline-none focus:border-vermillion transition-colors cursor-pointer"
                      >
                        {getDivisionOptions().map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-ink uppercase tracking-wider font-semibold">
                      {activeDict.lbl_msg} <span className="text-vermillion">*</span>
                    </label>
                    <textarea 
                      id="form-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={activeDict.ph_msg}
                      rows={5}
                      className="p-3 bg-paper border border-mist text-xs rounded-xs text-ink focus:outline-none focus:border-vermillion transition-colors placeholder:text-slate/40 resize-none"
                      required
                    />
                  </div>

                  {/* Display Errors */}
                  {errorText && (
                    <div className="p-3 bg-vermillion/10 border-l-4 border-vermillion text-vermillion text-xs flex items-center gap-2.5">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>{errorText}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      id="form-submit-btn"
                      type="submit"
                      disabled={loading}
                      className="px-6 py-3.5 bg-vermillion hover:bg-vermillion/90 disabled:bg-slate text-paper font-semibold text-xs tracking-wider uppercase rounded-xs border border-vermillion hover:border-gold/35 transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                    >
                      {loading ? activeDict.btn_transmitting : activeDict.btn_transmit}
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  id="form-success-box" 
                  className="p-8 text-center bg-paper border border-sage/30 rounded-xs flex flex-col items-center gap-4 py-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-sage/10 text-sage flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif-display font-medium text-lg text-ink">{activeDict.success_head}</h4>
                  <p className="text-xs text-slate max-w-sm mx-auto leading-relaxed font-light">
                    {activeDict.success_sub}
                  </p>
                  <button
                    id="form-reset-btn"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-ink text-paper text-xs uppercase tracking-wider font-semibold hover:bg-gold hover:text-ink transition-colors rounded-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
                  >
                    {activeDict.btn_another}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Contact info & Address Indicators */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Expectation Desk */}
            <div className="bg-ink text-paper p-6 rounded-xs border border-gold/15">
              <div className="flex gap-4 items-start">
                <Clock className="w-8 h-8 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-serif-display uppercase text-gold font-bold">{activeDict.matrix_head}</h4>
                  <p className="text-sm font-semibold text-paper mt-1">{activeDict.matrix_desc}</p>
                </div>
              </div>
            </div>

            {/* Address cards */}
            <div className="flex flex-col gap-4">
              <div 
                className={`p-5 rounded-xs border cursor-pointer transition-all ${
                  activeLocation === "head" ? "bg-cream border-vermillion shadow-md" : "bg-cream/40 border-mist hover:bg-cream"
                }`}
                onClick={() => setActiveLocation("head")}
              >
                <div className="flex gap-3.5">
                  <Building className="w-5 h-5 text-vermillion shrink-0" />
                  <div>
                    <div className="flex justify-between items-center w-full">
                      <span className="font-serif-display text-xs font-bold text-ink uppercase tracking-wider">
                        {activeDict.hq_title}
                      </span>
                      {activeLocation === "head" && (
                        <span className="px-1.5 py-0.5 bg-vermillion text-paper text-[8px] rounded-xs uppercase">{activeDict.map_loaded}</span>
                      )}
                    </div>
                    <p className="text-xs text-slate leading-relaxed mt-1">
                      Jl. H. Mansyur III No. 150 Rt. 03 Rw. 17, Perwira, Bekasi Utara, West Java, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className={`p-5 rounded-xs border cursor-pointer transition-all ${
                  activeLocation === "jlc" ? "bg-cream border-vermillion shadow-md" : "bg-cream/40 border-mist hover:bg-cream"
                }`}
                onClick={() => setActiveLocation("jlc")}
              >
                <div className="flex gap-3.5">
                  <Compass className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <div className="flex justify-between items-center w-full">
                      <span className="font-serif-display text-xs font-bold text-ink uppercase tracking-wider">
                        {activeDict.jlc_title}
                      </span>
                      {activeLocation === "jlc" && (
                        <span className="px-1.5 py-0.5 bg-vermillion text-paper text-[8px] rounded-xs uppercase">{activeDict.map_loaded}</span>
                      )}
                    </div>
                    <p className="text-xs text-slate leading-relaxed mt-1">
                      Ruko Sinpasa Summarecon Bekasi, Unit A-20, West Java
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Email Link Box */}
            <div className="bg-cream border border-mist p-5 rounded-xs flex items-center justify-between">
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-gold mt-1 shrink-0" />
                <div>
                  <h5 className="text-[10px] uppercase font-bold text-ink">Administrative Desktop Inbox</h5>
                  <p className="text-xs md:text-sm font-semibold text-vermillion">admin@hashiwa.net</p>
                </div>
              </div>
              <a 
                href="mailto:admin@hashiwa.net" 
                className="w-8 h-8 rounded-full bg-vermillion/10 flex items-center justify-center text-vermillion hover:bg-vermillion hover:text-paper transition-colors"
                title="Send direct email"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Geographic Simulated Viewport */}
        <div id="office-visual-map" className="bg-cream border border-mist p-6 rounded-xs relative overflow-hidden mb-12">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-[9px] uppercase tracking-widest text-gold font-japanese block">{activeDict.map_badge}</span>
              <h4 className="text-xs font-bold text-ink font-serif-display uppercase">
                {activeLocation === "head" ? "PERWIRA HEADQUARTERS NORTH BEKASI" : "RUKO SINPASA SUMMARECON BEKASI"}
              </h4>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-slate">
              <span className="w-2 h-2 rounded-full bg-sage animate-ping" />
              <span>Real-time coordinates active</span>
            </div>
          </div>

          <div className="aspect-[21/9] w-full bg-ink rounded-xs border border-gold/15 flex flex-col justify-center items-center p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:24px_24px]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-vermillion/10 to-gold/15 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-4 max-w-md">
              <div className="w-10 h-10 rounded-full bg-vermillion/20 text-vermillion flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 animate-bounce" />
              </div>

              {activeLocation === "head" ? (
                <div>
                  <p className="text-xs font-semibold text-paper">Bekasi Utara HQ, Perwira</p>
                  <p className="text-[11px] text-mist/75 mt-1 leading-relaxed">
                    Latitude: -6.2155 | Longitude: 106.9934. In proximity to regional transport nodes, ensuring secure administrative alignment.
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-xs font-semibold text-paper">Ruko Sinpasa, Bekasi Summarecon Campus</p>
                  <p className="text-[11px] text-mist/75 mt-1 leading-relaxed">
                    Latitude: -6.2238 | Longitude: 107.0003. Located right in Summarecon commercial area, easily accessible from the toll gates.
                  </p>
                </div>
              )}

              <div className="flex gap-2">
                <a 
                  id="direct-google-maps-link"
                  href={
                    activeLocation === "head" 
                      ? "https://maps.google.com/?q=Bekasi+Perwira" 
                      : "https://maps.google.com/?q=Ruko+Sinpasa+Summarecon+Bekasi"
                  } 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-paper/5 border border-gold/15 text-mist hover:text-paper hover:bg-vermillion transition-all duration-300 rounded-sm text-[10px] uppercase font-bold tracking-wider"
                >
                  {activeDict.direct_map}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
