const LINKS = {
  github: 'https://github.com/JackBelleville',
  linkedin: 'https://linkedin.com/in/JackBelleville',
  email: 'mailto:bellevillej8127@gmail.com',
  resume: '/Jack_Belleville_Resume.pdf',
}

const PROJECTS = [
  {
    id: 'pokemon-card-scanner',
    name: 'Pokémon Card Scanner',
    label: 'detected: card_scanner · conf 0.98',
    stack: ['Python', 'OpenCV', 'SQLite', 'Scrydex API'],
    summary:
      'Real-time card identification from a webcam feed. OpenCV perspective correction isolates the card; four perceptual hashing algorithms match it against a SQLite database regardless of orientation, then the Scrydex TCG API returns live market pricing — cached locally to conserve metered credits.',
    detail:
      'The interesting problem: reprints. Identical artwork appears across sets, so a pure hash match is ambiguous — solving that means ranking by hash distance and disambiguating with set metadata.',
    href: 'https://github.com/JackBelleville/Pokemon-Card-Scanner',
    linkText: 'View source',
    // Drop a short demo clip at public/demo-scanner.mp4 and set this true.
    hasDemo: false,
  },
  {
    id: 'tonetta-backend',
    name: 'Tonetta Backend',
    label: 'detected: realtime_audio_api · conf 0.97',
    stack: ['FastAPI', 'WebSockets', 'OAuth 2.0', 'Supabase'],
    summary:
      'Production backend for a real-time speech enhancement product. RESTful endpoints with authentication middleware and input validation, plus bidirectional WebSocket pipelines carrying live audio under concurrent load at <10ms processing latency.',
    detail:
      'Built as founding engineer — the same system handles identity, subscriptions, and secure access control for real users.',
    href: 'https://tonetta.ai',
    linkText: 'Visit tonetta.ai',
    hasDemo: false,
  },
  {
    id: 'space-ball',
    name: 'Space Ball',
    label: 'detected: vr_game · conf 0.95',
    stack: ['C#', 'Unity', 'VR'],
    summary:
      'An immersive VR game built with a three-person team: guide a ball through rhythmic obstacle courses. Core gameplay systems in C#, with the 3D environment optimized to hold stable framerates on hardware-constrained standalone headsets.',
    detail: null,
    href: null,
    linkText: null,
    hasDemo: false,
  },
]

const EXPERIENCE = [
  {
    org: 'Tonetta.ai',
    role: 'Founding Engineer',
    period: 'Dec 2025 — Present',
    note: 'Audio modification engine from concept to MVP. Auth and subscription infrastructure. Helped close a $27.5K pre-seed round.',
  },
  {
    org: 'MAVI Computer Vision Lab, University of Missouri',
    role: 'Research Fellow',
    period: 'Aug 2025 — Present',
    note: 'CV methods for pediatric bone underdevelopment and osteoarthritis diagnosis from radiographs. PointNet++ benchmarking on 3D point clouds.',
  },
  {
    org: 'AfterQuery Experts',
    role: 'AI Training Data Specialist',
    period: 'Mar 2026 — Present',
    note: 'High-quality training datasets supporting model development at leading AI labs.',
  },
]

function Reticle({ label, children }) {
  return (
    <span className="reticle">
      <span className="reticle-corner tl" aria-hidden="true" />
      <span className="reticle-corner tr" aria-hidden="true" />
      <span className="reticle-corner bl" aria-hidden="true" />
      <span className="reticle-corner br" aria-hidden="true" />
      {label && (
        <span className="reticle-label" aria-hidden="true">
          {label}
        </span>
      )}
      {children}
    </span>
  )
}

function TopBar() {
  return (
    <header className="topbar">
      <span className="topbar-token">jackbelleville.com</span>
      <nav className="topbar-nav" aria-label="Primary">
        <a href={LINKS.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={LINKS.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
        <a href={LINKS.email}>Email</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <p className="eyebrow">Columbia, Missouri · University of Missouri, CS ’28</p>
      <h1 className="hero-name">
        <Reticle label="person · belleville_jack · conf 1.00">Jack Belleville</Reticle>
      </h1>
      <p className="hero-line">
        Full-stack software engineer building AI-integrated applications — founding engineer at{' '}
        <a href="https://tonetta.ai" target="_blank" rel="noreferrer">
          Tonetta.ai
        </a>
        , computer vision researcher at Mizzou’s MAVI lab.
      </p>
      <p className="hero-status">
        <span className="status-dot" aria-hidden="true" /> Open to Summer 2027 software engineering
        internships
      </p>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project">
      <Reticle label={project.label}>
        <div className="project-body">
          <div className="project-head">
            <h3 className="project-name">{project.name}</h3>
            <ul className="project-stack" aria-label="Technology">
              {project.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <p className="project-summary">{project.summary}</p>
          {project.detail && <p className="project-detail">{project.detail}</p>}
          {project.hasDemo && (
            <video
              className="project-demo"
              src={`/demo-${project.id}.mp4`}
              controls
              muted
              playsInline
              preload="metadata"
            />
          )}
          {project.href && (
            <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
              {project.linkText} →
            </a>
          )}
        </div>
      </Reticle>
    </article>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      <ul className="exp-list">
        {EXPERIENCE.map((e) => (
          <li className="exp" key={e.org}>
            <div className="exp-head">
              <span className="exp-org">{e.org}</span>
              <span className="exp-period">{e.period}</span>
            </div>
            <p className="exp-role">{e.role}</p>
            <p className="exp-note">{e.note}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Get in touch — <a href={LINKS.email}>bellevillej8127@gmail.com</a>
      </p>
      <p className="footer-fine">
        Built with React, deployed on GitHub Pages.{' '}
        <a href="https://github.com/JackBelleville/jackbelleville_website" target="_blank" rel="noreferrer">
          View this site’s source
        </a>
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <div className="page">
      <TopBar />
      <main>
        <Hero />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}
