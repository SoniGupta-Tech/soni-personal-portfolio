import React from "react";
import {
  ArrowDownRight, ArrowUpRight, Mail, Code2,
  Database, BriefcaseBusiness, GraduationCap, Sparkles, ExternalLink,
  Menu, Terminal, Layers3, MonitorSmartphone
} from "lucide-react";

const skills = [
  { name: "HTML5", group: "Frontend" },
  { name: "CSS3", group: "Frontend" },
  { name: "JavaScript", group: "Frontend" },
  { name: "React.js", group: "Frontend" },
  { name: "Bootstrap", group: "Frontend" },
  { name: "Node.js", group: "Backend" },
  { name: "REST APIs", group: "Backend" },
  { name: "Python", group: "Programming" },
  { name: "SQL", group: "Database" },
  { name: "Git & GitHub", group: "Tools" },
  { name: "Google Sheets", group: "Work tools" },
  { name: "CRM & Lead Management", group: "Work tools" },
];

const experience = [
  {
    role: "HR Recruiter",
    company: "Maa Bhawani Decor Pvt. Ltd. (Kajaria)",
    period: "Jun 2025 – 2025",
    description: "Supported recruitment activities and HR coordination after an internal promotion.",
    tags: ["Recruitment", "Coordination", "People skills"],
  },
  {
    role: "Digital Sales Consultant",
    company: "Maa Bhawani Decor Pvt. Ltd. (Kajaria)",
    period: "May 2023 – 2025",
    description: "Managed IndiaMART and Justdial profiles, customer calls, follow-ups, data updates, and final bill updates.",
    tags: ["IndiaMART", "Justdial", "CRM", "Google Sheets"],
  },
  {
    role: "Senior Sales Consultant",
    company: "Abhishek Automobiles (Yamaha Blue Square)",
    period: "4-month role",
    description: "Worked with customers, supported sales conversations, and helped customers through the purchase process.",
    tags: ["Customer service", "Sales", "Communication"],
  },
];

const projects = [
  {
    number: "01",
    title: "School Management SaaS",
    type: "Full Stack · Planned project",
    description: "A school management platform concept for organizing student records, classes, attendance, and everyday administration.",
    stack: ["React.js", "Node.js", "SQL"],
    status: "Coming soon",
    icon: MonitorSmartphone,
  },
  {
    number: "02",
    title: "AI Recommendation System",
    type: "Python · Planned project",
    description: "A recommendation-system concept designed to explore how user preferences and data can power relevant suggestions.",
    stack: ["Python", "SQL", "Machine Learning"],
    status: "Coming soon",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Personal Portfolio",
    type: "Frontend · Current project",
    description: "A responsive portfolio to present my skills, professional journey, and projects in one place.",
    stack: ["React.js", "CSS", "Lucide"],
    status: "Building now",
    icon: Layers3,
  },
];

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function App() {
  const year = new Date().getFullYear();
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Soni Arya home">
          <span className="brand-mark">S</span>
          <span>soni<span className="brand-dot">.</span>arya</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </nav>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> Open to opportunities</div>
            <p className="hero-kicker">HELLO, I'M SONI ARYA</p>
            <h1>I build digital<br />experiences with <span className="gradient-text">purpose.</span></h1>
            <p className="hero-description">
              BCA graduate focused on <strong>Full Stack Development</strong> and <strong>SQL</strong>.
              I bring together a growing technical skill set and real-world experience in sales,
              customer relationships, and data management.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Get in touch <ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/SoniGupta-Tech" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/soniarya-tech/" target="_blank" rel="noreferrer"><Code2 size={17} /> LinkedIn</a>
              <span className="social-separator" />
              <span className="hero-note">Curious mind. Consistent learner.</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="profile-card">
              <div className="profile-card-top"><span>PROFILE / 001</span><span className="live-label">● LIVE</span></div>
              <div className="profile-placeholder" aria-label="Profile photo placeholder">
                <div className="photo-ring"><span>SA</span></div>
                <span className="photo-hint">ADD public/profile-photo.jpg</span>
                <img
                  src="/profile-photo.jpg"
                  alt="Soni Arya"
                  className="profile-photo"
                  onError={(event) => { event.currentTarget.style.display = "none"; }}
                />
              </div>
              <div className="profile-info">
                <div><h2>Soni Arya</h2><p>Developer in progress ✦</p></div>
                <div className="profile-badge"><Code2 size={19} /></div>
              </div>
              <div className="profile-divider" />
              <div className="profile-stats">
                <div><strong>Full Stack</strong><span>Primary focus</span></div>
                <div><strong>SQL</strong><span>Data foundations</span></div>
              </div>
            </div>
            <div className="floating-chip chip-code"><Terminal size={15} /> &lt;code /&gt;</div>
            <div className="floating-chip chip-db"><Database size={15} /> SQL learner</div>
            <div className="visual-caption">DESIGN · BUILD · IMPROVE</div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" /> Scroll to explore</a>
        </section>

        <section className="about section-wrap" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Tech-minded. <span className="gradient-text">People-focused.</span></>} />
          <div className="about-grid">
            <div className="about-main glass-card">
              <div className="about-icon"><GraduationCap size={22} /></div>
              <h3>My journey so far</h3>
              <p>
                I’m a BCA graduate building my career in web development. Alongside learning to create
                useful web applications, I’ve gained practical experience in digital sales, CRM,
                customer follow-ups, data management, and HR recruitment.
              </p>
              <p>
                My current priority is to become job-ready in <strong>Full Stack Web Development</strong>
                while strengthening my <strong>SQL and database</strong> skills through consistent practice
                and hands-on projects.
              </p>
              <a className="text-link" href="#contact">Let's connect <ArrowUpRight size={16} /></a>
            </div>
            <div className="about-side">
              <div className="mini-card">
                <span className="mini-number">01</span><Code2 size={21} />
                <h3>Build with code</h3><p>Responsive interfaces and practical web apps.</p>
              </div>
              <div className="mini-card mini-card-pink">
                <span className="mini-number">02</span><Database size={21} />
                <h3>Think with data</h3><p>SQL fundamentals, clean data, and structured problem-solving.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title={<>Skills I'm <span className="gradient-text">growing with.</span></>} copy="A practical mix of development technologies and tools from my professional experience." />
          <div className="skills-layout">
            <div className="skill-focus glass-card">
              <span className="focus-label"><Sparkles size={15} /> CURRENT FOCUS</span>
              <h3>Full Stack Development<br /><span className="gradient-text">+ SQL</span></h3>
              <p>Learning by building, practicing fundamentals, and turning concepts into projects.</p>
              <div className="focus-bars">
                <div><span>Frontend development</span><span className="bar-track"><i style={{ width: "78%" }} /></span></div>
                <div><span>Backend development</span><span className="bar-track"><i style={{ width: "48%" }} /></span></div>
                <div><span>SQL & databases</span><span className="bar-track"><i style={{ width: "62%" }} /></span></div>
              </div>
              <p className="level-note">Learning indicators only — not formal proficiency scores.</p>
            </div>
            <div className="skill-cloud">
              {skills.map((skill, index) => (
                <div className="skill-pill" key={skill.name} style={{ "--delay": `${index * 45}ms` }}>
                  <span className="skill-dot" />{skill.name}<small>{skill.group}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <SectionHeading eyebrow="THE PROFESSIONAL CHAPTER" title={<>Experience beyond <span className="gradient-text">the screen.</span></>} copy="The people, customer, and operations experience I bring into my tech career." />
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.role + item.company}>
                <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
                <div className="timeline-card glass-card">
                  <div className="timeline-top"><span className="timeline-period">{item.period}</span><BriefcaseBusiness size={18} /></div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.description}</p>
                  <div className="tag-row">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <SectionHeading eyebrow="SELECTED WORK" title={<>Ideas into <span className="gradient-text">real projects.</span></>} copy="A snapshot of what I'm building and planning next. Project status is shown honestly." />
          <div className="project-grid">
            {projects.map(project => {
              const Icon = project.icon;
              return (
                <article className="project-card" key={project.number}>
                  <div className="project-art">
                    <div className="project-art-grid" />
                    <span className="project-number">{project.number}</span>
                    <div className="project-art-icon"><Icon size={31} strokeWidth={1.5} /></div>
                    <span className="project-status">{project.status}</span>
                  </div>
                  <div className="project-content">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                    <span className="project-footer">Case study coming as I build <ArrowUpRight size={16} /></span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-glow" />
            <span className="eyebrow">HAVE A ROLE OR PROJECT IN MIND?</span>
            <h2>Let's create something<br /><span className="gradient-text">meaningful.</span></h2>
            <p>I'm interested in entry-level developer opportunities, internships, and projects where I can learn, contribute, and grow.</p>
            <div className="contact-actions">
              {/* Add your email address here when ready. */}
              <a className="button button-primary" href="mailto:your.email@example.com"><Mail size={17} /> Email me</a>
              <a className="button button-ghost" href="https://www.linkedin.com/in/soniarya-tech/" target="_blank" rel="noreferrer"><Code2 size={17} /> Connect on LinkedIn <ExternalLink size={14} /></a>
            </div>
            <div className="contact-socials">
              <a href="https://github.com/SoniGupta-Tech" target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/in/soniarya-tech/" target="_blank" rel="noreferrer"><Code2 size={18} /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">S</span><span>soni<span className="brand-dot">.</span>arya</span></a>
        <p>Designed with intention. Built while learning. © {year} Soni Arya</p>
        <a className="back-top" href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;