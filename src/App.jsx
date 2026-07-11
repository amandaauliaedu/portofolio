import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  ArrowUpRight,
  ExternalLink,
  Sun,
  Moon,
  Download,
  UploadCloud,
  FileText,
} from 'lucide-react'

/* ---------------------------------------------------------
   Data — sourced from Amanda Aulia's CV
   Replace the `link` / `image` values below with your real links & images.
--------------------------------------------------------- */

const NAV = ['Education', 'Experience', 'Project', 'Skills', 'CV', 'Contact']

const ROLES = ['Data Analyst', 'Data Science', 'Marketing Research']

const EDUCATION = [
  {
    period: '2021 — 2025',
    title: 'B.Sc. in Data Science',
    org: 'Universitas Pembangunan Nasional "Veteran" Jawa Timur',
    points: [
      'Graduated Cumlaude with a GPA of 3.89/4.00.',
      'Best Graduate of the Data Science Study Program at the 97th UPN Veteran Jawa Timur Graduation.',
      'Core coursework: Programming Algorithms, Databases, Mathematics for Data Science, Statistics, Machine Learning, Data Mining, Big Data.',
    ],
  },
  {
    period: 'Aug 2023 — Jan 2024',
    title: 'Machine Learning Path — Distinction Graduate',
    org: 'Bangkit Academy 2023 Batch 2 (Top 10% of 1,973 participants, score 93.98/100)',
    points: [
      'Completed 11 intensive courses covering Python, Data Analysis, Machine Learning, and TensorFlow.',
      'Developed a Machine Learning model to detect food ingredients from images and recommend matching recipes.',
      'Achieved a score of 98% in the Business English Communication training program.',
    ],
  },
]

const EXPERIENCE = [
  {
    period: 'Feb 2024 — Jun 2024',
    title: 'Data Analyst — Natural Disaster Response Division',
    org: 'Social Affairs Office of East Java Province, Surabaya',
    points: [
      'Built a Natural Disaster Monitoring Information System with a dashboard and spatial map using Flask and MySQL.',
      'Processed and analyzed daily disaster data to support report writing and policy recommendations.',
    ],
  },
]

const PROJECTS = [
  {
    tag: 'Time Series · Risk Analysis',
    title: 'FORRISX',
    subtitle: 'Forecasting Financial Sector Stock Price & Loss Risk',
    metric: 'MAPE 2.19%',
    metricLabel: 'prediction accuracy',
    desc:
      'A predictive analytics website for BBCA stock price (2019–2024) using ARIMAX integrated with macroeconomic variables (USD/IDR, SGD/IDR), combined with Value-at-Risk (95% confidence) to estimate a daily investment loss potential of 1.71%.',
    tags: ['Python', 'ARIMAX', 'Value-at-Risk', 'Flask'],
    note: 'Published in BIT-TECH Journal & registered under Indonesia\'s DJKI copyright office',
    link: 'https://github.com/amandaauliaedu/forrisx',
  },
  {
    tag: 'Computer Vision · Capstone',
    title: 'Laper.in',
    subtitle: 'Make Food with Several Recipe',
    metric: '15 classes',
    metricLabel: 'food ingredients',
    desc:
      'An image classification model for food ingredients using MobileNetV2 (transfer learning), exported to TFLite, paired with recipe recommendations and how-to video links based on detected ingredients.',
    tags: ['TensorFlow', 'MobileNetV2', 'TFLite'],
    note: 'Capstone Project — Bangkit Academy 2023 Batch 2',
    link: 'https://github.com/amandaauliaedu/laperin',
  },
  {
    tag: 'IoT · Computer Vision',
    title: 'FishGrom',
    subtitle: 'Non-Contact Milkfish Monitoring via Binocular Stereo Vision',
    metric: 'Error 0.21%',
    metricLabel: 'detection error rate',
    desc:
      'A non-contact system for detecting the count and size of milkfish using binocular stereo vision and OpenCV. The proposal received Rp9,000,000 in funding through PKM-Karsa Cipta 2023.',
    tags: ['OpenCV', 'Stereo Vision', 'Python'],
    note: 'Registered under Indonesia\'s DJKI copyright office',
    link: 'https://github.com/amandaauliaedu/fishgrom',
  },
]

const SKILLS = [
  { group: 'Data Analytics', items: ['Data Analysis', 'Data Mining', 'Data Visualization', 'Data Wrangling', 'Machine Learning'] },
  { group: 'Programming Languages', items: ['Python', 'R', 'SQL'] },
  { group: 'Tools', items: ['Excel', 'SPSS', 'Tableau', 'MySQL', 'Google Colab', 'VS Code'] },
  { group: 'Core Competencies', items: ['Problem-Solving', 'Effective Communication', 'Collaborative Teamwork'] },
]

const CERTS = [
  { title: 'Become an Excel Expert in 2 Weeks', org: 'KarirNex · 2026', image: '/certs/excel-expert.jpg', link: 'https://example.com/certificate/excel-expert' },
  { title: 'TensorFlow: Data and Deployment Specialization', org: 'Coursera', image: '/certs/tensorflow-data-deployment.jpg', link: 'https://coursera.org/verify/specialization/example1' },
  { title: 'DeepLearning.AI TensorFlow Developer Specialization', org: 'Coursera', image: '/certs/tensorflow-developer.jpg', link: 'https://coursera.org/verify/specialization/example2' },
  { title: 'Machine Learning Specialization', org: 'Coursera', image: '/certs/machine-learning-specialization.jpg', link: 'https://coursera.org/verify/specialization/example3' },
  { title: 'Mathematics for Machine Learning and Data Science', org: 'Coursera', image: '/certs/math-for-ml.jpg', link: 'https://coursera.org/verify/specialization/example4' },
  { title: 'Junior Web Programmer', org: 'BNSP', image: '/certs/bnsp-junior-web-programmer.jpg', link: 'https://example.com/certificate/bnsp' },
  { title: 'Data Storytelling with Tableau', org: 'Data Science UPN Veteran Jawa Timur', image: '/certs/tableau-data-bercerita.jpg', link: 'https://example.com/certificate/tableau' },
  { title: 'Data Processing and Analysis with SPSS', org: 'Data Science UPN Veteran Jawa Timur', image: '/certs/spss-pengolahan-data.jpg', link: 'https://example.com/certificate/spss' },
]

const ORGS = [
  { role: 'Treasurer', org: 'Badminton Student Club, UPN Veteran Jawa Timur', period: '2024–2025', image: '/orgs/ukm-badminton-bendahara.jpg', link: 'https://example.com/documentation/badminton-1' },
  { role: 'Public Relations Department', org: 'Badminton Student Club, UPN Veteran Jawa Timur', period: '2023–2024', image: '/orgs/ukm-badminton-humas.jpg', link: 'https://example.com/documentation/badminton-2' },
  { role: 'Staff, Commission 2, Department Legislative Board', org: 'HIMASADA', period: '2023–2024', image: '/orgs/himasada-blj.jpg', link: 'https://example.com/documentation/himasada-1' },
  { role: 'Student Advocacy & Welfare Department', org: 'HIMASADA', period: '2022–2023', image: '/orgs/himasada-advokesma.jpg', link: 'https://example.com/documentation/himasada-2' },
]

/* ---------------------------------------------------------
   Small building blocks
--------------------------------------------------------- */

function Reveal({ children, delay = 0, y = 24, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function RotatingText({ items, interval = 2200 }) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), interval)
    return () => clearInterval(id)
  }, [items.length, interval])

  return (
    <span className="rotating-text-wrap">
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          className="rotating-text"
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -18, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function useTheme() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const preferred = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    setTheme(preferred)
    document.documentElement.setAttribute('data-theme', preferred)
  }, [])

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      localStorage.setItem('theme', next)
      return next
    })
  }

  return { theme, toggle }
}

/* ---------------------------------------------------------
   Sections
--------------------------------------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}
      >
        <a href="#top" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16 }}>
          Amanda Aulia
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <nav style={{ display: 'flex', gap: 28 }} className="nav-links">
            {NAV.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  letterSpacing: '0.06em',
                  color: 'var(--ink-soft)',
                }}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </nav>
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label="Toggle color theme"
            title="Toggle color theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </motion.header>
  )
}

/* Hero + About combined: photo, name, rotating role, and profile summary */
function HeroAbout() {
  return (
    <section id="top" style={{ paddingTop: 160, paddingBottom: 80, overflow: 'hidden' }}>
      <div className="container hero-grid">
        <div>
          <Reveal>
            <h1 style={{ fontSize: 'clamp(38px, 6vw, 60px)', lineHeight: 1.05, fontWeight: 600 }}>
              Amanda Aulia
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <div style={{ marginTop: 14 }}>
              <RotatingText items={ROLES} />
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p style={{ marginTop: 20, fontSize: 17, color: 'var(--ink-soft)', maxWidth: 480, lineHeight: 1.7 }}>
              Best graduate of the Data Science program at UPN Veteran Jawa Timur (GPA 3.89, Cumlaude)
              and a Distinction Graduate of Bangkit Academy 2023. Experienced in data analysis,
              statistics, and machine learning using Excel, Python, SQL, Tableau, and SPSS — with a
              strong enthusiasm for continuous learning and contributing to a collaborative work
              environment.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
              <a href="#project" className="btn-primary">
                View Projects <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={16}>
          <div className="hero-photo-wrap">
            {/* Replace /profile.jpeg (in the public folder) with Amanda's real photo */}
            <img src="/profile.jpeg" alt="Amanda Aulia profile photo" />
            <div className="hero-photo-frame" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Education</div>
        </Reveal>
        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {EDUCATION.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <div className="timeline-row">
                <div className="timeline-period mono-num">{e.period}</div>
                <div style={{ borderLeft: '2px solid var(--line)', paddingLeft: 24, paddingBottom: 36 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 600 }}>{e.title}</h3>
                  <div style={{ color: 'var(--accent)', fontSize: 14, marginTop: 4 }}>{e.org}</div>
                  <ul style={{ marginTop: 12, paddingLeft: 18, color: 'var(--ink-soft)', lineHeight: 1.7, fontSize: 15 }}>
                    {e.points.map((p) => (
                      <li key={p} style={{ marginBottom: 6 }}>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Experience</div>
        </Reveal>
        <div style={{ marginTop: 32 }}>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <div className="timeline-row">
                <div className="timeline-period mono-num">{e.period}</div>
                <div style={{ borderLeft: '2px solid var(--line)', paddingLeft: 24 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 600 }}>{e.title}</h3>
                  <div style={{ color: 'var(--accent)', fontSize: 14, marginTop: 4 }}>{e.org}</div>
                  <ul style={{ marginTop: 12, paddingLeft: 18, color: 'var(--ink-soft)', lineHeight: 1.7, fontSize: 15 }}>
                    {e.points.map((p) => (
                      <li key={p} style={{ marginBottom: 6 }}>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="project">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Project</div>
        </Reveal>
        <div className="project-grid" style={{ marginTop: 40 }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.1}>
              <motion.article
                className="project-card"
                whileHover={{ y: -6, borderColor: 'var(--accent)' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div className="eyebrow" style={{ fontSize: 11 }}>
                  {p.tag}
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 600, marginTop: 14 }}>{p.title}</h3>
                <div style={{ fontSize: 14, color: 'var(--ink-soft)', marginTop: 2 }}>{p.subtitle}</div>

                <div className="metric-chip">
                  <span className="mono-num" style={{ fontWeight: 600 }}>
                    {p.metric}
                  </span>
                  <span style={{ color: 'var(--ink-faint)' }}> — {p.metricLabel}</span>
                </div>

                <p style={{ marginTop: 14, fontSize: 14.5, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
                  {p.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                  {p.tags.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: 16, fontSize: 12.5, color: 'var(--highlight)', fontFamily: 'var(--font-mono)' }}>
                  {p.note}
                </div>

                <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                  View project <ExternalLink size={13} />
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Skills</div>
        </Reveal>
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.08}>
              <div>
                <h3 style={{ fontSize: 14, fontFamily: 'var(--font-mono)', color: 'var(--ink-soft)', marginBottom: 14 }}>
                  {s.group}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {s.items.map((item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div style={{ marginTop: 56 }}>
            <h3 style={{ fontSize: 14, fontFamily: 'var(--font-mono)', color: 'var(--ink-soft)', marginBottom: 16 }}>
              Certifications &amp; Training
            </h3>
            <div className="media-grid">
              {CERTS.map((c) => (
                <div key={c.title} className="media-card">
                  <div className="media-card-img">
                    {/* Replace the image at public{c.image} with the real certificate */}
                    <img src={c.image} alt={c.title} />
                  </div>
                  <div className="media-card-body">
                    <div className="media-card-title">{c.title}</div>
                    <div className="media-card-sub">{c.org}</div>
                    <a href={c.link} target="_blank" rel="noreferrer" className="media-card-link">
                      View original certificate <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <div style={{ marginTop: 56 }}>
            <h3 style={{ fontSize: 14, fontFamily: 'var(--font-mono)', color: 'var(--ink-soft)', marginBottom: 16 }}>
              Organizations
            </h3>
            <div className="media-grid">
              {ORGS.map((o) => (
                <div key={o.role + o.org} className="media-card">
                  <div className="media-card-img">
                    {/* Replace the image at public{o.image} with real documentation */}
                    <img src={o.image} alt={`${o.role} — ${o.org}`} />
                  </div>
                  <div className="media-card-body">
                    <div className="media-card-title">{o.role}</div>
                    <div className="media-card-sub">
                      {o.org} <span className="mono-num">· {o.period}</span>
                    </div>
                    <a href={o.link} target="_blank" rel="noreferrer" className="media-card-link">
                      View documentation <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* CV / Resume section: download the current CV, and (client-side) upload a replacement.
   Note: this is a static site — the upload preview works in the browser, but actually
   persisting an uploaded file requires wiring it up to a backend or storage service. */
function CV() {
  const [file, setFile] = useState(null)
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef(null)

  const handleFiles = (files) => {
    if (files && files[0]) setFile(files[0])
  }

  return (
    <section id="cv">
      <div className="container">
        <Reveal>
          <div className="eyebrow">CV</div>
        </Reveal>
        <div className="cv-grid">
          <Reveal delay={0.06}>
            <div className="cv-card">
              <h3>Download my CV</h3>
              <p>Get a full PDF copy of my resume, including education, experience, projects, and certifications.</p>
              <a
                href="/Amanda_Aulia_CV.pdf"
                download
                className="btn-primary"
                style={{ marginTop: 18, width: 'fit-content' }}
              >
                <Download size={16} /> Download CV (PDF)
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="cv-card">
              <h3>Upload a document</h3>
              <p>Recruiters can attach a job description or reference document here before reaching out.</p>
              <div
                className={`upload-dropzone${dragging ? ' dragging' : ''}`}
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => {
                  e.preventDefault()
                  setDragging(true)
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault()
                  setDragging(false)
                  handleFiles(e.dataTransfer.files)
                }}
              >
                <UploadCloud size={22} style={{ color: 'var(--accent)' }} />
                <div style={{ marginTop: 10, fontSize: 13.5, color: 'var(--ink-soft)' }}>
                  Click to browse or drag a file here
                </div>
                <input
                  ref={inputRef}
                  type="file"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFiles(e.target.files)}
                />
              </div>
              {file && (
                <div className="upload-filename">
                  <FileText size={13} style={{ verticalAlign: '-2px', marginRight: 6 }} />
                  {file.name}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" style={{ borderBottom: 'none' }}>
      <div className="container">
        <Reveal>
          <div className="eyebrow">Contact</div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="contact-grid" style={{ marginTop: 32 }}>
            <a href="mailto:amandaauliacareer@gmail.com" className="contact-link">
              <Mail size={17} /> amandaauliacareer@gmail.com
            </a>
            <a href="tel:+6289503251212" className="contact-link">
              <Phone size={17} /> +62 895 0325 1212
            </a>
            <a href="https://linkedin.com/in/amandaauliaedu" target="_blank" rel="noreferrer" className="contact-link">
              <Linkedin size={17} /> linkedin.com/in/amandaauliaedu
            </a>
            <a href="https://github.com/amandaauliaedu" target="_blank" rel="noreferrer" className="contact-link">
              <Github size={17} /> github.com/amandaauliaedu
            </a>
            <div className="contact-link" style={{ cursor: 'default' }}>
              <MapPin size={17} /> Surabaya, East Java
            </div>
          </div>
        </Reveal>
      </div>
      <div className="container" style={{ marginTop: 64, borderTop: '1px solid var(--line)', paddingTop: 24 }}>
        <p style={{ fontSize: 12.5, color: 'var(--ink-faint)', fontFamily: 'var(--font-mono)' }}>
          © {new Date().getFullYear()} Amanda Aulia. Built with React &amp; Framer Motion.
        </p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <HeroAbout />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <CV />
      <Contact />
    </>
  )
}
