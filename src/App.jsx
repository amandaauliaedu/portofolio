import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  MapPin,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Users,
  Award,
  Database,
  LineChart,
  BarChart3,
  PieChart,
  Workflow,
  Brain,
  Lightbulb,
  Puzzle,
  MessageSquare,
  Search,
  User,
  TrendingUp,
  UtensilsCrossed,
  Fish,
  AlertTriangle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Copy,
  Check,
  Send,
  Menu,
  X,
  Download,
} from "lucide-react";

/* ---------------------------------------------------------------
   Content — bilingual pairs: { id: "...", en: "..." }
--------------------------------------------------------------- */

const NAV = [
  { id: "Tentang", en: "About", href: "about" },
  { id: "Pengalaman", en: "Experience", href: "experience" },
  { id: "Proyek", en: "Projects", href: "projects" },
  { id: "Keahlian", en: "Skills", href: "skills" },
  { id: "Organisasi", en: "Activities", href: "activities" },
  { id: "Kontak", en: "Contact", href: "contact" },
];

const ROLES = [
  { id: "Data Analyst", en: "Data Analyst" },
  { id: "Data Scientist", en: "Data Scientist" },
  { id: "ML Enthusiast", en: "ML Enthusiast" },
];

const SOCIALS = [
  { key: "linkedin", icon: Linkedin, href: "https://linkedin.com/in/amandaauliaedu", label: "LinkedIn" },
  { key: "github", icon: Github, href: "https://github.com/amandaauliaedu", label: "GitHub" },
  { key: "email", icon: Mail, href: "mailto:amandaauliacareer@gmail.com", label: "Email" },
  { key: "whatsapp", icon: MessageCircle, href: "https://wa.me/6289503251212", label: "WhatsApp" },
];

const ABOUT = {
  id: "Lulusan terbaik Program Studi Sains Data, Universitas Pembangunan Nasional Veteran Jawa Timur, dengan IPK 3.89 dan predikat Cumlaude, serta Distinction Graduate Bangkit Academy 2023. Saya senang mengubah data mentah menjadi wawasan lewat analisis data, statistika, dan machine learning — didukung Excel, Python, SQL, Tableau, dan SPSS. Di luar akademik, saya aktif berorganisasi dan menjadi panitia berbagai kegiatan, mengasah komunikasi, kerja sama tim, dan problem-solving. Saat ini saya sedang mencari kesempatan untuk bertumbuh lebih jauh di dunia data.",
  en: "Top graduate of the Data Science program at Universitas Pembangunan Nasional Veteran Jawa Timur, with a 3.89 GPA (Cumlaude) and a Distinction Graduate title from Bangkit Academy 2023. I enjoy turning raw data into insight through data analysis, statistics, and machine learning — working with Excel, Python, SQL, Tableau, and SPSS. Beyond academics, I've stayed active in student organizations and event committees, sharpening communication, teamwork, and problem-solving. I'm currently looking for the next opportunity to grow further in data.",
};

const EDUCATION = [
  {
    school: "Universitas Pembangunan Nasional Veteran Jawa Timur",
    period: "Sep 2021 – Des 2025",
    degree: { id: "S1 Sains Data · IPK 3.89/4.00 · Cumlaude", en: "B.Sc. Data Science · GPA 3.89/4.00 · Cumlaude" },
    note: { id: "Lulusan Terbaik Prodi Sains Data, Wisuda ke-97.", en: "Top graduate of the Data Science program, 97th Commencement." },
  },
  {
    school: "Bangkit Academy 2023 Batch 2",
    period: "Agu 2023 – Jan 2024",
    degree: { id: "Machine Learning Path · Distinction Graduate · 93.98/100", en: "Machine Learning Path · Distinction Graduate · 93.98/100" },
    note: {
      id: "Top 10% dari 1973 peserta. Menyelesaikan 11 kursus intensif Python, Data Analysis, ML, dan TensorFlow.",
      en: "Top 10% out of 1973 participants. Completed 11 intensive courses in Python, Data Analysis, ML, and TensorFlow.",
    },
  },
];

const EXPERIENCE = [
  {
    org: "Dinas Sosial Provinsi Jawa Timur — Surabaya",
    role: { id: "Data Analyst, Bidang Penanganan Bencana Alam (Magang)", en: "Data Analyst, Disaster Management Division (Internship)" },
    period: "Feb 2024 – Jun 2024",
    points: [
      { id: "Mengembangkan Sistem Informasi Monitoring Kejadian Bencana Alam Jawa Timur berbasis dashboard & peta spasial menggunakan Flask dan MySQL.", en: "Built a Disaster Event Monitoring Information System for East Java with a dashboard and spatial map, using Flask and MySQL." },
      { id: "Mengolah dan menganalisis data harian kejadian bencana untuk mendukung laporan, rekomendasi, dan pemantauan.", en: "Processed and analyzed daily disaster event data to support reporting, recommendations, and monitoring." },
    ],
  },
];

const PROJECTS = [
  {
    year: "2026",
    title: "FORRISX",
    tagline: { id: "Peramalan Harga Saham & Risiko Kerugian dengan ARIMAX dan Value-at-Risk", en: "Forecasting Stock Price & Loss Risk with ARIMAX and Value-at-Risk" },
    desc: { id: "Website analisis prediktif untuk peramalan harga saham berbasis time series, dipublikasikan di Journal BIT-TECH dan terdaftar hak cipta di DJKI Kemenkumham RI.", en: "Predictive-analytics website for time-series stock price forecasting, published in the BIT-TECH Journal and copyright-registered with Indonesia's DJKI." },
    metrics: [{ label: "MAPE", value: "2.19%" }, { label: "VaR 95%", value: "1.71%" }],
    tags: ["ARIMAX", "Time Series", "Value-at-Risk", "Flask"],
    categories: ["Data Analytics", "Time Series"],
    featured: true,
    icon: TrendingUp,
  },
  {
    year: "2023",
    title: "Laper.in",
    tagline: { id: "Make Food with Several Recipe — Capstone Bangkit 2023", en: "Make Food with Several Recipe — Bangkit 2023 Capstone" },
    desc: { id: "Model klasifikasi citra bahan makanan (15 kelas, 450 gambar latih) dengan MobileNetV2, lengkap dengan rekomendasi resep dan tautan video.", en: "Image classification model for food ingredients (15 classes, 450 training images) using MobileNetV2, paired with recipe and video recommendations." },
    metrics: [{ label: "Classes", value: "15" }, { label: "Model", value: "MobileNetV2" }],
    tags: ["TensorFlow", "TFLite", "Computer Vision"],
    categories: ["Computer Vision", "Machine Learning"],
    featured: false,
    icon: UtensilsCrossed,
  },
  {
    year: "2023",
    title: "FishGrom",
    tagline: { id: "Alat Monitoring Ikan Non-Kontak Berbasis Binocular Stereo Vision (PKM-KC)", en: "Non-Contact Fish Monitoring via Binocular Stereo Vision (PKM-KC)" },
    desc: { id: "Sistem deteksi jumlah dan ukuran ikan bandeng menggunakan OpenCV, didanai Rp 9.000.000 dan memperoleh sertifikat hak cipta DJKI.", en: "System for detecting the count and size of milkfish using OpenCV, funded with Rp 9,000,000 and awarded a DJKI copyright certificate." },
    metrics: [{ label: "Error rate", value: "0.21%" }, { label: "Funding", value: "Rp 9jt" }],
    tags: ["OpenCV", "Stereo Vision", "PKM-KC"],
    categories: ["Computer Vision", "Hardware & IoT"],
    featured: false,
    icon: Fish,
  },
  {
    year: "2024",
    title: "SIMBA Jatim",
    tagline: { id: "Sistem Informasi Monitoring Bencana Alam Berbasis Dashboard & Peta Spasial", en: "Disaster Monitoring Information System with Dashboard & Spatial Map" },
    desc: { id: "Dibangun selama magang di Dinas Sosial Provinsi Jawa Timur untuk memantau kejadian bencana alam harian se-Jawa Timur secara real-time.", en: "Built during an internship at the East Java Social Affairs Office to track daily disaster events across the province in real time." },
    metrics: [{ label: "Cakupan", value: "38 Kab/Kota" }, { label: "Stack", value: "Flask" }],
    tags: ["Flask", "MySQL", "GIS Mapping"],
    categories: ["Web Dev", "Data Analytics"],
    featured: false,
    icon: AlertTriangle,
  },
  {
    year: "2023",
    title: "PCA Impact Analysis",
    tagline: { id: "Analisis Dampak Reduksi Dimensi PCA pada Model Klasifikasi", en: "PCA Dimensionality Reduction Impact Analysis" },
    desc: {
      id: "Mengevaluasi dampak Principal Component Analysis (PCA) pada kinerja model klasifikasi menggunakan dataset pasien hepatitis (155 baris, 20 fitur). Decision Tree unggul sebelum reduksi (akurasi 90.3%, F1 95.8%), sementara Logistic Regression meningkat setelah PCA (akurasi 90.3%, F1 93.3%).",
      en: "Evaluated the impact of Principal Component Analysis (PCA) on classification model performance using a hepatitis patient dataset (155 rows, 20 features). Decision Tree performed best before reduction (90.3% accuracy, 95.8% F1), while Logistic Regression improved after PCA (90.3% accuracy, 93.3% F1).",
    },
    metrics: [{ label: "Rows", value: "155" }, { label: "Features", value: "20" }],
    tags: ["PCA", "Scikit-learn", "Python"],
    categories: ["Machine Learning", "Data Analytics"],
    featured: false,
    icon: LineChart,
  },
  {
    year: "2022",
    title: "Study Program News Retrieval",
    tagline: { id: "Temu Kembali Informasi Berita Kegiatan Program Studi (TF-IDF & Cosine Similarity)", en: "Study Program News Information Retrieval (TF-IDF & Cosine Similarity)" },
    desc: {
      id: "Mengembangkan prototipe sistem penelusuran informasi untuk mencari konten berita program studi menggunakan algoritma TF-IDF dan Cosine Similarity, diuji pada 22 konten berita Sains Data UPN Veteran Jawa Timur.",
      en: "Developed an information retrieval prototype for searching study-program news content using TF-IDF and Cosine Similarity, tested on 22 Data Science UPN Veteran Jawa Timur news items.",
    },
    metrics: [{ label: "Accuracy", value: "100%" }, { label: "News tested", value: "22" }],
    tags: ["TF-IDF", "Cosine Similarity", "NLP"],
    categories: ["NLP", "Data Analytics"],
    featured: false,
    icon: Search,
  },
  {
    year: "2023",
    title: "Classification Model Comparison",
    tagline: { id: "Analisis Perbandingan Performa Model Klasifikasi", en: "Classification Model Performance Comparison" },
    desc: {
      id: "Membandingkan kinerja K-Nearest Neighbor, Logistic Regression, Naïve Bayes, dan Decision Tree pada dataset Iris dan Patient Treatment — mencakup praproses data, EDA, feature engineering, hingga evaluasi model.",
      en: "Compared the performance of K-Nearest Neighbor, Logistic Regression, Naïve Bayes, and Decision Tree on the Iris and Patient Treatment datasets — covering data preprocessing, EDA, feature engineering, and model evaluation.",
    },
    metrics: [{ label: "Models", value: "4" }, { label: "Datasets", value: "2" }],
    tags: ["KNN", "Naive Bayes", "Decision Tree"],
    categories: ["Machine Learning", "Data Analytics"],
    featured: false,
    icon: BarChart3,
  },
];

const SKILLS = [
  {
    group: { id: "Analitik Data", en: "Data Analytics" },
    items: [
      { label: "Data Analysis", type: "icon", Icon: BarChart3 },
      { label: "Data Mining", type: "icon", Icon: Search },
      { label: "Data Visualization", type: "icon", Icon: PieChart },
      { label: "Data Wrangling", type: "icon", Icon: Workflow },
      { label: "Machine Learning", type: "icon", Icon: Brain },
    ],
  },
  {
    group: { id: "Bahasa Pemrograman", en: "Programming Languages" },
    items: [
      { label: "Python", type: "img", slug: "python" },
      { label: "R", type: "img", slug: "r" },
      { label: "SQL", type: "icon", Icon: Database },
    ],
  },
  {
    group: { id: "Tools", en: "Tools" },
    items: [
      { label: "Excel", type: "img", slug: "microsoftexcel" },
      { label: "Word", type: "img", slug: "microsoftword" },
      { label: "PowerPoint", type: "img", slug: "microsoftpowerpoint" },
      { label: "SPSS", type: "img", slug: "ibm" },
      { label: "Tableau", type: "img", slug: "tableau" },
      { label: "MySQL", type: "img", slug: "mysql" },
      { label: "Google Colab", type: "img", slug: "googlecolab" },
      { label: "VS Code", type: "img", slug: "visualstudiocode" },
    ],
  },
  {
    group: { id: "Kompetensi Pendukung", en: "Supporting Skills" },
    items: [
      { label: { id: "Analisis", en: "Analysis" }, type: "icon", Icon: Lightbulb },
      { label: { id: "Problem-Solving", en: "Problem-Solving" }, type: "icon", Icon: Puzzle },
      { label: { id: "Komunikasi Efektif", en: "Effective Communication" }, type: "icon", Icon: MessageSquare },
      { label: { id: "Kerja Tim", en: "Teamwork" }, type: "icon", Icon: Users },
    ],
  },
  {
    group: { id: "Bahasa", en: "Languages" },
    items: [
      { label: { id: "Bahasa Indonesia — Penutur Asli", en: "Indonesian — Native" }, type: "emoji", emoji: "🇮🇩" },
      { label: { id: "Bahasa Inggris — Profesional", en: "English — Professional Working" }, type: "emoji", emoji: "EN" },
    ],
  },
];

const CERTS = [
  { name: "Junior Web Programmer", issuer: "BNSP", date: "2023" },
  { name: "Data Bercerita Menggunakan Tableau", issuer: "Sains Data UPN", date: "2022" },
  { name: "Pengolahan dan Analisis Data dengan SPSS", issuer: "Sains Data UPN", date: "2022" },
  { name: "Mathematics for ML and Data Science", issuer: "Coursera", date: "2023" },
  { name: "Machine Learning Specialization", issuer: "Coursera", date: "2023" },
  { name: "DeepLearning.AI TensorFlow Developer", issuer: "Coursera", date: "2023" },
  { name: "TensorFlow: Data and Deployment", issuer: "Coursera", date: "2023" },
  { name: "Bangkit Academy 2023 - Machine Learning", issuer: "Kampus Merdeka - MSIB", date: "2023" },
  { name: "Become an Excel Expert in 2 Weeks", issuer: "KarirNex", date: "2026" },
];

const ORGS = [
  { org: "UKM Badminton UPN Veteran Jawa Timur", role: { id: "Bendahara", en: "Treasurer" }, period: "2024 – 2025" },
  { org: "UKM Badminton UPN Veteran Jawa Timur", role: { id: "Departemen Hubungan Masyarakat", en: "Public Relations Department" }, period: "2023 – 2024" },
  { org: "HIMASADA — Himpunan Mahasiswa Sains Data", role: { id: "Staf Komisi 2, Badan Legislatif Jurusan", en: "Staff, Commission 2 — Departmental Legislative Body" }, period: "2023 – 2024" },
  { org: "HIMASADA — Himpunan Mahasiswa Sains Data", role: { id: "Departemen Advokasi dan Kesejahteraan Mahasiswa", en: "Student Advocacy & Welfare Department" }, period: "2022 – 2023" },
];

const COMMITTEES = [
  { name: "Veteran Badminton Competition 2024", role: { id: "Steering Committee", en: "Steering Committee" }, year: "2024" },
  { name: "Malam Keakraban 2024", role: { id: "Steering Committee", en: "Steering Committee" }, year: "2024" },
  { name: "Sambang Desa 2023", role: { id: "Volunteer & Best Mentor", en: "Volunteer & Best Mentor" }, year: "2023" },
  { name: "Malam Keakraban 2023", role: { id: "Bendahara", en: "Treasurer" }, year: "2023" },
  { name: "OSADA 2023", role: { id: "Sekretaris", en: "Secretary" }, year: "2023" },
  { name: "Akshaya 2022", role: { id: "Divisi Keamanan", en: "Security Division" }, year: "2022" },
  { name: "SESCOP 2022", role: { id: "Divisi Acara", en: "Event Division" }, year: "2022" },
  { name: "Malam Keakraban 2022", role: { id: "Divisi Perlengkapan", en: "Logistics Division" }, year: "2022" },
  { name: "NGOSA KATA 2022", role: { id: "Sekretaris", en: "Secretary" }, year: "2022" },
  { name: "KKCTBN 2022 — Puspresnas", role: { id: "Liaison Officer", en: "Liaison Officer" }, year: "2022" },
  { name: "OSADA 2022", role: { id: "Divisi Komisi Disiplin", en: "Discipline Committee" }, year: "2022" },
  { name: "LOGISTA 2022", role: { id: "Divisi Perlengkapan", en: "Logistics Division" }, year: "2022" },
];

const T = {
  heroGreeting: { id: "Halo, saya", en: "Hi, I'm" },
  heroName: "Amanda Aulia",
  heroTagline: { id: "Mengubah data mentah menjadi keputusan yang tepat.", en: "Turning raw data into decisions that hold up." },
  ctaProjects: { id: "Lihat Proyek", en: "View Projects" },
  ctaContact: { id: "Hubungi Saya", en: "Get in Touch" },
  ctaCV: { id: "Unduh CV", en: "Download CV" },
  sectionAbout: { id: "Tentang Saya", en: "About Me" },
  sectionExperience: { id: "Pengalaman", en: "Experience" },
  sectionProjects: { id: "Proyek & Publikasi", en: "Projects & Publications" },
  sectionSkills: { id: "Keahlian", en: "Skills" },
  sectionCerts: { id: "Sertifikasi & Pelatihan", en: "Certifications & Training" },
  certsSub: { id: "Kredensial yang mendukung pekerjaan saya di bidang data.", en: "Credentials backing up my work in data and analytics." },
  sectionActivities: { id: "Organisasi & Kepanitiaan", en: "Organizations & Committees" },
  committeesLabel: { id: "KEPANITIAAN", en: "COMMITTEES" },
  sectionContactEyebrow: { id: "Kontak", en: "Contact" },
  contactHeading1: { id: "Mari terhubung, ", en: "Let's talk, " },
  contactHeading2: { id: "yuk?", en: "shall we?" },
  contactSub: { id: "Terbuka untuk peluang kerja, kolaborasi proyek data, atau sekadar ngobrol soal data & AI. Klik email untuk menyalin, atau isi form di samping.", en: "Open to job opportunities, data project collaborations, or just geeking out about data & AI. Click the email to copy it, or fill out the form." },
  emailLabel: { id: "Email — klik untuk salin", en: "Email — click to copy" },
  copied: { id: "Tersalin!", en: "Copied!" },
  whatsappLabel: { id: "WhatsApp", en: "WhatsApp" },
  locationLabel: { id: "Lokasi", en: "Location" },
  formName: { id: "Nama kamu", en: "Your name" },
  formEmail: { id: "email@kamu.com", en: "you@example.com" },
  formMessage: { id: "Hai, aku ingin berkolaborasi soal...", en: "Hey, I'd love to collaborate on..." },
  formSend: { id: "Kirim Pesan", en: "Send Message" },
  filterAll: { id: "Semua", en: "All" },
  featuredTag: { id: "UNGGULAN", en: "FEATURED" },
  footerNote: { id: "Dibuat dengan React & Framer Motion.", en: "Built with React & Framer Motion." },
  scroll: { id: "Gulir", en: "Scroll" },
  certificateWord: { id: "SERTIFIKAT", en: "CERTIFICATE" },
};

const L = (pair, lang) => (typeof pair === "string" ? pair : pair[lang]);

/* ---------------------------------------------------------------
   Small reusable bits
--------------------------------------------------------------- */

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function GlassCard({ children, className = "", theme, style = {}, hover = true, ...rest }) {
  return (
    <motion.div className={`rounded-2xl border backdrop-blur-xl ${className}`} style={{ background: theme.cardBg, borderColor: theme.cardBorder, boxShadow: theme.cardShadow, ...style }} whileHover={hover ? { y: -4, boxShadow: theme.cardShadowHover } : {}} transition={{ duration: 0.25 }} {...rest}>
      {children}
    </motion.div>
  );
}

function Pill({ children, theme, accent, active, onClick }) {
  const clickable = typeof onClick === "function";
  return (
    <span onClick={onClick} className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide ${clickable ? "cursor-pointer select-none" : ""}`} style={{ background: active ? accent || theme.text : theme.pillBg, color: active ? "#0A0E1A" : accent || theme.text, border: `1px solid ${active ? "transparent" : theme.cardBorder}`, transition: "all .2s ease" }}>
      {children}
    </span>
  );
}

function SocialIcon({ s, theme, size = 38 }) {
  const IconEl = s.icon;
  return (
    <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="flex items-center justify-center rounded-full border transition-transform hover:-translate-y-0.5" style={{ width: size, height: size, borderColor: theme.cardBorder, background: theme.cardBg, color: theme.text }}>
      <IconEl size={size * 0.42} />
    </a>
  );
}

/* Certificate "paper" mock visual — used in the certifications carousel and org cards */
function CertPaper({ height = 128, accent, compact = false }) {
  return (
    <div className="w-full flex flex-col justify-between p-3 md:p-4" style={{ height, background: "#F3F0E8" }}>
      <div className="flex items-center justify-between">
        <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: accent }}>
          <Award size={13} color="#fff" />
        </span>
        {!compact && <span className="text-[9px] font-semibold tracking-widest" style={{ color: "#9B9585" }}>CERTIFICATE</span>}
      </div>
      <div className="space-y-1.5">
        <div className="h-1.5 rounded-full" style={{ width: "78%", background: "#D8D2C2" }} />
        <div className="h-1.5 rounded-full" style={{ width: "52%", background: "#D8D2C2" }} />
        {!compact && <div className="h-1.5 rounded-full" style={{ width: "34%", background: "#D8D2C2" }} />}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   Main component
--------------------------------------------------------------- */

export default function AmandaAuliaPortfolio() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState("id");
  const [roleIdx, setRoleIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCat, setActiveCat] = useState("All");
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [certIdx, setCertIdx] = useState(0);
  const [skillIdx, setSkillIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setCertIdx((i) => (i + 1) % CERTS.length), 8000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setSkillIdx((i) => (i + 1) % SKILLS.length), 8000);
    return () => clearInterval(t);
  }, []);

  const accents = { teal: "#2DD4BF", coral: "#FB7185", violet: "#8B92F6" };
  const accentCycle = [accents.teal, accents.violet, accents.coral];

  const theme = dark
    ? {
        bg: "#0A0E1A",
        bgGradient: "radial-gradient(60% 50% at 12% 8%, rgba(139,146,246,0.20) 0%, transparent 60%), radial-gradient(55% 45% at 90% 15%, rgba(45,212,191,0.16) 0%, transparent 60%), radial-gradient(60% 50% at 50% 100%, rgba(251,113,133,0.10) 0%, transparent 60%)",
        text: "#EAEEFB",
        subtext: "#8D95B3",
        faint: "#5B6280",
        cardBg: "rgba(255,255,255,0.045)",
        cardBorder: "rgba(255,255,255,0.10)",
        cardShadow: "0 8px 32px rgba(0,0,0,0.35)",
        cardShadowHover: "0 16px 48px rgba(0,0,0,0.45)",
        navBg: "rgba(10,14,26,0.55)",
        pillBg: "rgba(255,255,255,0.06)",
        gridLine: "rgba(255,255,255,0.045)",
        inputBg: "rgba(255,255,255,0.05)",
        tileBg: "rgba(255,255,255,0.05)",
      }
    : {
        bg: "#F2F4FA",
        bgGradient: "radial-gradient(60% 50% at 12% 8%, rgba(139,146,246,0.22) 0%, transparent 60%), radial-gradient(55% 45% at 90% 15%, rgba(45,212,191,0.20) 0%, transparent 60%), radial-gradient(60% 50% at 50% 100%, rgba(251,113,133,0.14) 0%, transparent 60%)",
        text: "#161A2A",
        subtext: "#565F7E",
        faint: "#8990AC",
        cardBg: "rgba(255,255,255,0.55)",
        cardBorder: "rgba(255,255,255,0.85)",
        cardShadow: "0 8px 32px rgba(80,90,140,0.12)",
        cardShadowHover: "0 16px 48px rgba(80,90,140,0.18)",
        navBg: "rgba(242,244,250,0.6)",
        pillBg: "rgba(255,255,255,0.65)",
        gridLine: "rgba(20,25,45,0.05)",
        inputBg: "rgba(255,255,255,0.6)",
        tileBg: "rgba(255,255,255,0.55)",
      };

  const fontDisplay = { fontFamily: "'Space Grotesk', 'Sora', sans-serif" };
  const fontBody = { fontFamily: "'Inter', sans-serif" };
  const fontMono = { fontFamily: "'JetBrains Mono', 'IBM Plex Mono', monospace" };

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const CATS = ["All", ...Array.from(new Set(PROJECTS.flatMap((p) => p.categories)))];
  const filteredProjects = activeCat === "All" ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(activeCat));

  const copyEmail = () => {
    navigator.clipboard?.writeText("amandaauliacareer@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Halo Amanda — dari ${form.name || "website portfolio"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:amandaauliacareer@gmail.com?subject=${subject}&body=${body}`;
  };

  const certAt = (offset) => CERTS[(certIdx + offset + CERTS.length) % CERTS.length];

  const renderSkillTile = (item, i) => (
    <div key={i} className="rounded-xl border p-3.5 flex flex-col items-center gap-2 text-center" style={{ background: theme.tileBg, borderColor: theme.cardBorder }}>
      {item.type === "img" && <img src={`https://cdn.simpleicons.org/${item.slug}`} alt={typeof item.label === "string" ? item.label : ""} className="w-7 h-7" loading="lazy" />}
      {item.type === "icon" && <item.Icon size={26} style={{ color: accentCycle[i % 3] }} />}
      {item.type === "emoji" && <span className="text-2xl leading-none">{item.emoji}</span>}
      <span className="text-[11px] leading-tight" style={{ color: theme.subtext }}>{L(item.label, lang)}</span>
    </div>
  );

  return (
    <div className="min-h-screen w-full transition-colors duration-500" style={{ background: theme.bg, color: theme.text, ...fontBody }}>
      <div className="fixed inset-0 pointer-events-none" style={{ background: theme.bgGradient }} />
      <div
        className="fixed inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: `linear-gradient(${theme.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridLine} 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b" style={{ background: theme.navBg, borderColor: theme.cardBorder }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="text-lg font-semibold tracking-tight" style={fontDisplay}>
            Amanda<span style={{ color: accents.teal }}>.</span>Aulia
          </button>

          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <button key={n.href} onClick={() => scrollTo(n.href)} className="text-sm font-medium transition-colors" style={{ color: theme.subtext }}>
                {L(n, lang)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === "id" ? "en" : "id")} className="flex items-center rounded-full p-0.5 border text-xs font-semibold" style={{ borderColor: theme.cardBorder, background: theme.pillBg }} aria-label="Toggle language">
              <span className="px-2.5 py-1 rounded-full transition-all" style={{ background: lang === "id" ? accents.violet : "transparent", color: lang === "id" ? "#0A0E1A" : theme.subtext }}>ID</span>
              <span className="px-2.5 py-1 rounded-full transition-all" style={{ background: lang === "en" ? accents.violet : "transparent", color: lang === "en" ? "#0A0E1A" : theme.subtext }}>EN</span>
            </button>

            <button onClick={() => setDark(!dark)} className="w-9 h-9 rounded-full border flex items-center justify-center" style={{ borderColor: theme.cardBorder, background: theme.pillBg }} aria-label="Toggle theme">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={dark ? "moon" : "sun"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} className="flex">
                  {dark ? <Moon size={16} /> : <Sun size={16} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button className="md:hidden w-9 h-9 rounded-full border flex items-center justify-center" style={{ borderColor: theme.cardBorder, background: theme.pillBg }} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-hidden border-t" style={{ borderColor: theme.cardBorder }}>
              <div className="flex flex-col px-5 py-3 gap-3">
                {NAV.map((n) => (
                  <button key={n.href} onClick={() => scrollTo(n.href)} className="text-sm text-left font-medium" style={{ color: theme.subtext }}>
                    {L(n, lang)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section id="hero" className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div className="order-2 md:order-1">
            <Reveal>
              <p className="text-sm font-medium mb-4" style={{ ...fontMono, color: accents.teal }}>{L(T.heroGreeting, lang)}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] mb-5" style={fontDisplay}>{T.heroName}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-9 md:h-11 mb-5 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p key={roleIdx} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -24, opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="text-2xl md:text-3xl font-medium" style={{ ...fontDisplay, color: accents.violet }}>
                    {L(ROLES[roleIdx], lang)}
                  </motion.p>
                </AnimatePresence>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base md:text-lg max-w-md mb-8" style={{ color: theme.subtext }}>{L(T.heroTagline, lang)}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3 mb-6">
                <button onClick={() => scrollTo("projects")} className="px-5 py-2.5 rounded-full text-sm font-semibold" style={{ background: accents.teal, color: "#0A0E1A" }}>{L(T.ctaProjects, lang)}</button>
                <button onClick={() => scrollTo("contact")} className="px-5 py-2.5 rounded-full text-sm font-semibold border" style={{ borderColor: theme.cardBorder, background: theme.pillBg }}>{L(T.ctaContact, lang)}</button>
                <a href="/Amanda_Aulia_CV.pdf" download className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border" style={{ borderColor: theme.cardBorder, background: theme.pillBg, color: theme.text }}>
                  <Download size={15} />
                  {L(T.ctaCV, lang)}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-2.5">
                {SOCIALS.map((s) => (
                  <SocialIcon key={s.key} s={s} theme={theme} />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Photo panel — right side, aligned beside the name */}
          <Reveal delay={0.15} className="order-1 md:order-2">
            <div className="relative mx-auto md:mx-0 w-full max-w-[320px] md:mt-10">
              <div
                className="rounded-2xl border-2 overflow-hidden relative"
                style={{
                  aspectRatio: "4 / 4.7",
                  borderColor: `${accents.violet}55`,
                  background: `linear-gradient(160deg, ${accents.violet}22, ${accents.teal}14)`,
                  boxShadow: theme.cardShadow,
                }}
              >
                {/* Replace /profile.png (in the public folder) with Amanda's real photo */}
                <img src="/profile.png" alt="Amanda Aulia" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-3 rounded-xl border pointer-events-none" style={{ borderColor: `${accents.teal}33` }} />
              </div>
              <p className="text-center text-[11px] mt-3" style={{ ...fontMono, color: theme.faint }}>Amanda Aulia · Data Analyst</p>
            </div>
          </Reveal>
        </div>

        <motion.div className="flex md:hidden flex-col items-center mt-16 gap-1" animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }} style={{ color: theme.faint }}>
          <span className="text-xs" style={fontMono}>{L(T.scroll, lang)}</span>
          <ChevronDown size={16} />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-20">
        <Reveal>
          <SectionHeading icon={<GraduationCap size={16} />} title={L(T.sectionAbout, lang)} theme={theme} accent={accents.teal} />
        </Reveal>
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 mt-8">
          <Reveal>
            <GlassCard theme={theme} className="p-6 md:p-8" hover={false}>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: theme.subtext }}>{L(ABOUT, lang)}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                <Pill theme={theme} accent={accents.teal}>Surabaya, Jawa Timur</Pill>
              </div>
            </GlassCard>
          </Reveal>

          <div className="flex flex-col gap-4">
            {EDUCATION.map((e, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <GlassCard theme={theme} className="p-5">
                  <p className="text-[11px]" style={{ ...fontMono, color: theme.faint }}>{e.period}</p>
                  <p className="font-semibold mt-1" style={fontDisplay}>{e.school}</p>
                  <p className="text-sm mt-1" style={{ color: accents.violet }}>{L(e.degree, lang)}</p>
                  <p className="text-sm mt-2" style={{ color: theme.subtext }}>{L(e.note, lang)}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-20">
        <Reveal>
          <SectionHeading icon={<Briefcase size={16} />} title={L(T.sectionExperience, lang)} theme={theme} accent={accents.violet} />
        </Reveal>
        <div className="mt-8 flex flex-col gap-5">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <GlassCard theme={theme} className="p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <div>
                    <p className="font-semibold text-lg" style={fontDisplay}>{e.org}</p>
                    <p className="text-sm" style={{ color: accents.violet }}>{L(e.role, lang)}</p>
                  </div>
                  <span className="text-xs" style={{ ...fontMono, color: theme.faint }}>{e.period}</span>
                </div>
                <ul className="flex flex-col gap-2">
                  {e.points.map((p, j) => (
                    <li key={j} className="text-sm flex gap-2" style={{ color: theme.subtext }}>
                      <span style={{ color: accents.teal }}>—</span>
                      <span>{L(p, lang)}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-20">
        <Reveal>
          <SectionHeading icon={<FolderGit2 size={16} />} title={L(T.sectionProjects, lang)} theme={theme} accent={accents.coral} />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flex flex-wrap gap-2 mt-6">
            {CATS.map((c) => (
              <Pill key={c} theme={theme} accent={accents.coral} active={activeCat === c} onClick={() => setActiveCat(c)}>
                {c === "All" ? L(T.filterAll, lang) : c}
              </Pill>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6" style={{ gridAutoFlow: "dense" }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => {
              const ProjIcon = p.icon;
              return (
                <motion.div key={p.title} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35, delay: i * 0.05 }} className={p.featured ? "md:col-span-2 md:row-span-2" : ""}>
                  <GlassCard theme={theme} className="overflow-hidden h-full flex flex-col" style={{ padding: 0 }}>
                    <div className={`relative flex items-center justify-center ${p.featured ? "h-40 md:h-56" : "h-28"}`} style={{ background: `linear-gradient(135deg, ${accents.teal}26, ${accents.violet}26)` }}>
                      <ProjIcon size={p.featured ? 64 : 40} style={{ color: accents.violet, opacity: 0.85 }} />
                      {p.featured && <span className="absolute top-3 left-3 text-[10px] px-2 py-1 rounded-full font-semibold" style={{ background: theme.bg, color: accents.teal }}>{L(T.featuredTag, lang)}</span>}
                      <span className="absolute top-3 right-3 text-xs" style={{ ...fontMono, color: theme.faint }}>{p.year}</span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className={`font-semibold ${p.featured ? "text-2xl" : "text-xl"}`} style={fontDisplay}>{p.title}</p>
                        <ArrowUpRight size={15} style={{ color: theme.faint }} />
                      </div>
                      <p className="text-sm mb-3" style={{ color: accents.violet }}>{L(p.tagline, lang)}</p>
                      <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: theme.subtext }}>{L(p.desc, lang)}</p>
                      <div className="flex gap-4 mb-4">
                        {p.metrics.map((m, j) => (
                          <div key={j}>
                            <p className="text-base font-semibold" style={fontMono}>{m.value}</p>
                            <p className="text-[10px]" style={{ color: theme.faint }}>{m.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((tg, j) => (
                          <Pill key={j} theme={theme}>{tg}</Pill>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* SKILLS — auto-advancing every 8s */}
      <section id="skills" className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-20">
        <Reveal>
          <SectionHeading icon={<Award size={16} />} title={L(T.sectionSkills, lang)} theme={theme} accent={accents.teal} />
        </Reveal>

        <Reveal delay={0.05}>
          <GlassCard theme={theme} className="p-6 md:p-8 mt-8" hover={false}>
            <AnimatePresence mode="wait">
              <motion.div key={skillIdx} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.4 }}>
                <p className="text-sm font-semibold mb-4" style={{ ...fontMono, color: theme.faint }}>{L(SKILLS[skillIdx].group, lang).toUpperCase()}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {SKILLS[skillIdx].items.map((item, i) => renderSkillTile(item, i))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-2 mt-6">
              {SKILLS.map((g, i) => (
                <button key={i} onClick={() => setSkillIdx(i)} aria-label={L(g.group, lang)} className="rounded-full transition-all" style={{ width: i === skillIdx ? 22 : 8, height: 8, background: i === skillIdx ? accents.teal : theme.cardBorder }} />
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </section>

      {/* CERTIFICATIONS — coverflow carousel, auto every 8s */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-20">
        <Reveal>
          <SectionHeading icon={<GraduationCap size={16} />} title={L(T.sectionCerts, lang)} theme={theme} accent={accents.violet} />
          <p className="mt-2 text-sm" style={{ color: theme.subtext }}>{L(T.certsSub, lang)}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flex items-center justify-center gap-3 md:gap-5 mt-10">
            <button onClick={() => setCertIdx((i) => (i - 1 + CERTS.length) % CERTS.length)} className="hidden sm:flex w-10 h-10 rounded-full border items-center justify-center shrink-0" style={{ borderColor: theme.cardBorder, background: theme.pillBg }}>
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center justify-center gap-3 md:gap-4 overflow-hidden">
              {[-1, 0, 1].map((offset) => {
                const c = certAt(offset);
                const isCenter = offset === 0;
                return (
                  <motion.div
                    key={`${certIdx}-${offset}`}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: isCenter ? 1 : 0.45, scale: isCenter ? 1 : 0.82 }}
                    transition={{ duration: 0.45 }}
                    className={`rounded-2xl border overflow-hidden shrink-0 ${isCenter ? "w-56 md:w-72" : "hidden sm:block w-40 md:w-56"}`}
                    style={{ borderColor: theme.cardBorder, background: theme.cardBg }}
                  >
                    <CertPaper height={isCenter ? 140 : 110} accent={accentCycle[(certIdx + offset + CERTS.length) % 3]} compact={!isCenter} />
                    <div className="p-4">
                      <p className={`font-semibold leading-snug ${isCenter ? "text-sm md:text-base" : "text-xs"}`} style={{ color: theme.text }}>{c.name}</p>
                      <p className="text-xs mt-1" style={{ color: accents.violet }}>{c.issuer}</p>
                      <p className="text-[11px] mt-1" style={{ ...fontMono, color: theme.faint }}>{c.date}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button onClick={() => setCertIdx((i) => (i + 1) % CERTS.length)} className="hidden sm:flex w-10 h-10 rounded-full border items-center justify-center shrink-0" style={{ borderColor: theme.cardBorder, background: theme.pillBg }}>
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {CERTS.map((_, i) => (
              <button key={i} onClick={() => setCertIdx(i)} aria-label={`cert-${i}`} className="rounded-full transition-all" style={{ width: i === certIdx ? 22 : 8, height: 8, background: i === certIdx ? accents.violet : theme.cardBorder }} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ACTIVITIES */}
      <section id="activities" className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-20">
        <Reveal>
          <SectionHeading icon={<Users size={16} />} title={L(T.sectionActivities, lang)} theme={theme} accent={accents.violet} />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5 mt-8">
          {ORGS.map((o, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <GlassCard theme={theme} className="overflow-hidden" style={{ padding: 0 }}>
                <CertPaper height={72} accent={accentCycle[i % 3]} compact />
                <div className="p-5">
                  <p className="font-semibold" style={fontDisplay}>{o.org}</p>
                  <p className="text-sm mt-1" style={{ color: accents.violet }}>{L(o.role, lang)}</p>
                  <p className="text-xs mt-2" style={{ ...fontMono, color: theme.faint }}>{o.period}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="text-sm font-semibold mt-10 mb-3" style={{ ...fontMono, color: theme.faint }}>{L(T.committeesLabel, lang)}</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "thin" }}>
            {COMMITTEES.map((c, i) => (
              <div key={i} className="snap-start shrink-0 w-56 rounded-2xl border p-5" style={{ borderColor: theme.cardBorder, background: theme.cardBg }}>
                <span className="inline-flex w-8 h-8 rounded-full items-center justify-center mb-3" style={{ background: `${accentCycle[i % 3]}22`, color: accentCycle[i % 3] }}>
                  <Users size={14} />
                </span>
                <p className="text-sm font-medium leading-snug" style={{ color: theme.text }}>{c.name}</p>
                <p className="text-xs mt-2" style={{ color: accents.coral }}>{L(c.role, lang)}</p>
                <p className="text-[11px] mt-1" style={{ ...fontMono, color: theme.faint }}>{c.year}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-24">
        <Reveal>
          <p className="text-sm font-semibold mb-2" style={{ ...fontMono, color: theme.faint }}>{L(T.sectionContactEyebrow, lang).toUpperCase()}</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4" style={fontDisplay}>
            {L(T.contactHeading1, lang)}<span style={{ color: accents.violet }}>{L(T.contactHeading2, lang)}</span>
          </h2>
          <p className="max-w-lg mb-10" style={{ color: theme.subtext }}>{L(T.contactSub, lang)}</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0.05} className="flex flex-col gap-4">
            <GlassCard theme={theme} className="p-5 flex items-center justify-between cursor-pointer" onClick={copyEmail} hover={true}>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${accents.violet}22`, color: accents.violet }}><Mail size={17} /></span>
                <div>
                  <p className="text-xs" style={{ color: theme.faint }}>{L(T.emailLabel, lang)}</p>
                  <p className="text-sm font-medium">amandaauliacareer@gmail.com</p>
                </div>
              </div>
              {copied ? <Check size={16} style={{ color: accents.teal }} /> : <Copy size={16} style={{ color: theme.faint }} />}
            </GlassCard>

            <GlassCard theme={theme} className="p-5" hover={false}>
              <a href="https://wa.me/6289503251212" target="_blank" rel="noreferrer" className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${accents.teal}22`, color: accents.teal }}><MessageCircle size={17} /></span>
                <div>
                  <p className="text-xs" style={{ color: theme.faint }}>{L(T.whatsappLabel, lang)}</p>
                  <p className="text-sm font-medium">+62 895 0325 1212</p>
                </div>
              </a>
            </GlassCard>

            <GlassCard theme={theme} className="p-5" hover={false}>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${accents.coral}22`, color: accents.coral }}><MapPin size={17} /></span>
                <div>
                  <p className="text-xs" style={{ color: theme.faint }}>{L(T.locationLabel, lang)}</p>
                  <p className="text-sm font-medium">Surabaya, Jawa Timur, Indonesia</p>
                </div>
              </div>
            </GlassCard>

            <div className="flex gap-3 mt-1">
              {SOCIALS.map((s) => (
                <SocialIcon key={s.key} s={s} theme={theme} size={42} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard theme={theme} className="p-6 md:p-8" hover={false}>
              <form onSubmit={handleSend} className="flex flex-col gap-4">
                <input type="text" required placeholder={L(T.formName, lang)} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ background: theme.inputBg, borderColor: theme.cardBorder, color: theme.text }} />
                <input type="email" required placeholder={L(T.formEmail, lang)} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ background: theme.inputBg, borderColor: theme.cardBorder, color: theme.text }} />
                <textarea required rows={4} placeholder={L(T.formMessage, lang)} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none" style={{ background: theme.inputBg, borderColor: theme.cardBorder, color: theme.text }} />
                <button type="submit" className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold" style={{ background: accents.violet, color: "#0A0E1A" }}>
                  <Send size={15} />
                  {L(T.formSend, lang)}
                </button>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      <footer className="relative z-10 text-center pb-10 text-xs" style={{ color: theme.faint, ...fontMono }}>
        © 2026 Amanda Aulia — {L(T.footerNote, lang)}
      </footer>
    </div>
  );
}

function SectionHeading({ icon, title, theme, accent }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `${accent}22`, color: accent }}>{icon}</span>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h2>
    </div>
  );
}
