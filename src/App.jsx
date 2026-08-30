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
      'Real-time card identification from a webcam feed. OpenCV perspective correction isolates the card; four perceptual hashing algorithms match it against a SQLite database regardless of orientation, then the Scrydex TCG API returns live market pricing.',
    detail:
      'The interesting problem: Identical artwork appears across sets, so a pure hash match is ambiguous.',
    links: [{ href: 'https://github.com/JackBelleville/Pokemon-Card-Scanner', text: 'View source' }],
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
      'Built a system which handles identity, subscriptions, and secure access control for real users.',
    links: [],
    hasDemo: false,
  },
  {
    id: 'tonetta-website',
    name: 'Tonetta Website',
    label: 'detected: product_site · conf 0.96',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Stripe'],
    summary:
      'The product site for Tonetta: marketing pages, user pages, documentation, plus account management with Supabase auth and Stripe subscriptions (team plans, trials, invites) in the original production build.',
    detail:
      'Preserved as a live archive after the company dispersed, with auth and payment functionality removed.',
    links: [{ href: 'https://tonetta-website.vercel.app/', text: 'Visit site' }],
    hasDemo: false,
  },
  {
    id: 'space-ball',
    name: 'Space Ball',
    label: 'detected: vr_game · conf 0.95',
    stack: ['C#', 'Unity', 'VR'],
    summary:
      'An immersive VR game built with a three-person team: guide a ball through rhythmic obstacle courses. Core gameplay systems in C#, with the 3D environment optimized to hold stable framerates on heavily hardware-constrained standalone headsets.',
    detail: null,
    links: [
      { href: 'https://github.com/JackBelleville/Tigerhacks2025', text: 'View source' },
      { href: 'https://devpost.com/software/space-ball-vbnlo5', text: 'View on Devpost' },
    ],
    hasDemo: false,
  },
]

const EXPERIENCE = [
  {
    org: 'Tonetta.ai',
    role: 'Founding Engineer',
    period: 'Dec 2025 — May 2026',
    note: 'Audio modification engine from concept to MVP. Auth and subscription infrastructure. Helped close a $27.5K pre-seed round.',
  },
  {
    org: 'MAVI Computer Vision Lab, University of Missouri',
    role: 'Research Fellow',
    period: 'Aug 2025 — Present',
    note: 'CV and Image processing methods for pediatric bone underdevelopment and osteoarthritis diagnosis from radiographs. Point cloud benchmarking on 3D point clouds for soybean leaf area index.',
    detail:
      'Currently researching: segmenting and tracing individual carbon nanotube layers, benchmarking methods for both images and point clouds against my lab’s CNT-NeRF model.',
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
        Full-stack software engineer building AI-integrated applications. Founding engineer at
        Tonetta.ai and computer vision research fellow at Mizzou’s MAVI lab.
      </p>
      <p className="hero-status">
        <span className="status-dot" aria-hidden="true" /> Open to off-season and Summer 2027 software engineering
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
          {project.links.map((link) => (
            <a
              key={link.href}
              className="project-link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.text} →
            </a>
          ))}
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
            {e.detail && <p className="exp-detail">{e.detail}</p>}
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
        Get in touch <a href={LINKS.email}>bellevillej8127@gmail.com</a>
      </p>
      <p className="footer-fine">
        Built with React, deployed on Vercel.{' '}
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
