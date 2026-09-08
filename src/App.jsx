import { useEffect, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Network,
  Mail,
  Menu,
  Moon,
  Phone,
  Send,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'MediSync',
    description: 'A MERN-based healthcare record platform for secure, centralized medical records and structured care workflows.',
    tags: ['MERN', 'RBAC', 'MongoDB GridFS'],
    color: 'coral',
    link: 'https://github.com/',
    live: '#contact',
  },
  {
    number: '02',
    title: 'Equipment Rental API',
    description: 'A secure REST API for equipment listings, real-time booking, availability tracking, and role-specific access.',
    tags: ['Node.js', 'Express.js', 'JWT', 'MongoDB'],
    color: 'sage',
    link: 'https://github.com/',
    live: '#contact',
  },
  {
    number: '03',
    title: 'AgriMitra',
    description: 'An AI farming assistant that recommends crops and fertilizer using cleaned soil and environmental datasets.',
    tags: ['Python', 'XGBoost', 'ML', 'Data preprocessing'],
    color: 'lavender',
    link: 'https://github.com/',
    live: '#contact',
  },
]

const skills = ['C', 'Java', 'Python', 'JavaScript', 'Node.js', 'Express.js', 'React.js', 'MongoDB', 'MySQL', 'REST APIs', 'JWT', 'Git', 'Postman', 'XGBoost']

function App() {
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('idle')

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
  }, [isDark])

  const closeMenu = () => setMenuOpen(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
    const name = (formData.get('name') ?? '').toString().trim()
    const email = (formData.get('email') ?? '').toString().trim()
    const message = (formData.get('message') ?? '').toString().trim()

    if (!endpoint) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'New contact'}`)
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )

      window.location.href = `mailto:shrivatsavbhat0@gmail.com?subject=${subject}&body=${body}`
      setFormStatus('success')
      form.reset()
      return
    }

    setFormStatus('sending')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Unable to send')
      setFormStatus('success')
      form.reset()
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Shrivatsa Bhat home">
          <span className="brand-mark">SB</span>
          <span>Shrivatsa Bhat</span>
        </a>
        <button className="menu-toggle icon-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="header-actions">
          <a className="availability" href="#contact"><span /> Available for work</a>
          <button className="icon-button" type="button" onClick={() => setIsDark(!isDark)} aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> Hello, I&apos;m Shrivatsa</p>
            <h1 id="hero-title">I build backend systems that are <em>secure.</em></h1>
            <p className="hero-intro">Software developer from Mangaluru, Karnataka, building scalable Node.js applications, RESTful APIs, and authentication systems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="/resume.txt" download>Download resume <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="hero-art reveal reveal-delay" aria-label="Abstract portrait illustration" role="img">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="portrait-shape"><span className="portrait-eye" /><span className="portrait-smile" /></div>
            <span className="art-note note-top">curious<br />by default</span>
            <span className="art-note note-bottom">scroll to<br />explore <ArrowDownRight size={16} /></span>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track"><span>Design with intention</span><i>✳</i><span>Build with care</span><i>✳</i><span>Make it last</span><i>✳</i><span>Design with intention</span><i>✳</i><span>Build with care</span><i>✳</i></div>
        </div>

        <section className="about section-wrap" id="about" aria-labelledby="about-title">
          <div className="section-label"><span>01</span><span>About me</span></div>
          <div className="about-grid">
            <h2 id="about-title">Ambitious software development with a focus on <em>real-world impact.</em></h2>
            <div className="about-body"><p>I&apos;m a software developer with strong backend development skills and experience building scalable, secure applications using Node.js, Express.js, and MongoDB.</p><p>I enjoy designing RESTful APIs, authentication systems, and practical machine learning solutions while collaborating across teams to solve meaningful problems.</p><a className="text-link" href="#contact">Let&apos;s connect <ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section className="skills section-wrap" aria-labelledby="skills-title">
          <div className="skills-intro"><div className="section-label"><span>02</span><span>Technical skills</span></div><h2 id="skills-title">A toolkit for building <em>reliable software.</em></h2></div>
          <div className="skills-list">{skills.map((skill, index) => <span key={skill} className="skill-pill"><small>0{index + 1}</small>{skill}</span>)}</div>
        </section>

        <section className="work section-wrap" id="work" aria-labelledby="work-title">
          <div className="work-heading"><div><div className="section-label"><span>03</span><span>Selected projects</span></div><h2 id="work-title">Projects built for<br /><em>useful outcomes.</em></h2></div><p>Backend systems, full-stack applications, and machine learning work focused on solving practical problems.</p></div>
          <div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className={`project-visual ${project.color}`}><span className="project-number">{project.number}</span><span className="project-stamp">{project.title.split(' ')[0]}</span><div className="project-window"><div className="window-top"><span /><span /><span /></div><div className="window-lines"><b /><b /><i /><i /><i /></div></div></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="project-links"><a href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><Code2 size={18} /></a><a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live site`}><ArrowUpRight size={19} /></a></div></div></article>)}</div>
        </section>

        <section className="experience section-wrap" id="experience" aria-labelledby="experience-title">
          <div className="section-label"><span>04</span><span>Experience & education</span></div>
          <div className="experience-grid"><h2 id="experience-title">The path so far.</h2><div className="timeline"><div className="timeline-item"><span className="timeline-date">June — July 2025</span><div><h3>Project Intern <small>99Games Online Pvt. Ltd.</small></h3><p>Developed a backend system for an equipment rental platform using Node.js and Express.js. Designed RESTful APIs, JWT authentication, and scalable MongoDB data storage.</p></div></div><div className="timeline-item"><span className="timeline-date">2023 — 2026</span><div><h3>BCA, CGPA 9.68 <small>Dr. NSAM FGC, Nitte</small></h3><p>Built a foundation in software development, databases, data structures, and applied problem solving.</p></div></div><div className="timeline-item"><span className="timeline-date">2021 — 2023</span><div><h3>Pre-University, 96.5% <small>Jain PU College, Moodabidri</small></h3><p>Completed pre-university education with a strong academic record.</p></div></div></div></div>
        </section>

        <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
          <div className="contact-heading"><div className="section-label"><span>05</span><span>Get in touch</span></div><h2 id="contact-title">Have a good idea?<br /><em>Let&apos;s build it.</em></h2><p>I&apos;m based in Mangaluru, Karnataka and open to software development opportunities, collaborations, and interesting technical problems.</p><div className="social-links"><a href="mailto:shrivatsavbhat0@gmail.com"><Mail size={17} /> Email me</a><a href="tel:+918310903547"><Phone size={17} /> Call me</a><a href="https://www.linkedin.com/in/shrivatsa-v-bhat-922805248/" target="_blank" rel="noreferrer"><Network size={17} /> LinkedIn</a></div></div>
          <form className="contact-form" onSubmit={handleSubmit}><label>Your name<input required name="name" type="text" placeholder="Jane Smith" /></label><label>Email address<input required name="email" type="email" placeholder="jane@company.com" /></label><label>Tell me a little about it<textarea required name="message" rows="4" placeholder="I have a project in mind..."></textarea></label><button className="button button-primary" type="submit" disabled={formStatus === 'sending'}>{formStatus === 'sending' ? 'Sending...' : 'Send message'} <Send size={16} /></button>{formStatus === 'success' && <p className="form-message"><Check size={16} /> Thanks, I&apos;ll be in touch soon.</p>}{formStatus === 'error' && <p className="form-message error">Something went wrong. Please email me directly.</p>}</form>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a className="brand" href="#top"><span className="brand-mark">SB</span><span>Shrivatsa Bhat</span></a><p>Built with code and curiosity <Sparkles size={14} /></p><span>© {new Date().getFullYear()} Shrivatsa Bhat</span></footer>
    </div>
  )
}

export default App
