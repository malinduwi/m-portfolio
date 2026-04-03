import Script from "next/script";
import {
  aboutBlocks,
  certificates,
  contactCards,
  educationItems,
  experienceItems,
  footerLinks,
  navItems,
  projects,
  skillGroups,
  socialLinks,
} from "./portfolio-data";

function BackgroundDecor() {
  return (
    <>
      <div className="cyber-decor">
        <svg className="poly poly-left" viewBox="0 0 300 300" aria-hidden="true">
          <polygon points="60,20 140,30 180,90 150,170 70,190 20,120" />
          <polygon points="90,50 140,70 135,120 85,140 50,100" />
          <polygon points="150,170 210,150 250,210 200,260 130,230" />
          <line x1="60" y1="20" x2="140" y2="30" />
          <line x1="140" y1="30" x2="180" y2="90" />
          <line x1="180" y1="90" x2="150" y2="170" />
          <line x1="150" y1="170" x2="70" y2="190" />
          <line x1="70" y1="190" x2="20" y2="120" />
          <line x1="20" y1="120" x2="60" y2="20" />
        </svg>

        <svg className="poly poly-right" viewBox="0 0 320 320" aria-hidden="true">
          <polygon points="180,20 260,50 290,130 250,210 170,240 110,180 120,90" />
          <polygon points="170,70 220,90 230,145 190,175 145,145 140,95" />
          <line x1="180" y1="20" x2="260" y2="50" />
          <line x1="260" y1="50" x2="290" y2="130" />
          <line x1="290" y1="130" x2="250" y2="210" />
          <line x1="250" y1="210" x2="170" y2="240" />
          <line x1="170" y1="240" x2="110" y2="180" />
          <line x1="110" y1="180" x2="120" y2="90" />
          <line x1="120" y1="90" x2="180" y2="20" />
        </svg>

        <svg className="poly poly-mid-left" viewBox="0 0 220 220" aria-hidden="true">
          <polygon points="50,20 130,35 170,95 140,170 65,185 20,110" />
          <polygon points="75,55 120,70 125,120 85,140 48,98" />
        </svg>

        <svg className="poly poly-mid-right" viewBox="0 0 240 240" aria-hidden="true">
          <polygon points="130,25 190,50 215,110 180,175 115,200 60,150 70,80" />
          <polygon points="120,70 160,88 172,132 138,160 95,138 88,92" />
        </svg>

        <svg className="poly poly-bottom-left" viewBox="0 0 220 220" aria-hidden="true">
          <polygon points="40,40 120,20 180,60 170,150 100,190 35,140" />
          <polygon points="70,65 118,58 150,90 140,140 90,155 58,120" />
        </svg>

        <svg className="poly poly-bottom-right" viewBox="0 0 220 220" aria-hidden="true">
          <polygon points="110,20 180,55 190,130 145,190 70,180 30,115 50,50" />
          <polygon points="105,60 145,82 152,125 122,155 78,145 60,102" />
        </svg>

        <svg className="poly poly-web-left" viewBox="0 0 520 520" aria-hidden="true">
          <polygon points="40,310 120,240 200,258 228,340 140,418 70,392" />
          <polygon points="120,240 210,170 300,190 318,276 228,340 200,258" />
          <polygon points="210,170 292,98 388,126 426,212 318,276 300,190" />
          <polygon points="140,418 228,340 288,388 242,484 118,486" />
          <line x1="40" y1="310" x2="120" y2="240" />
          <line x1="40" y1="310" x2="140" y2="418" />
          <line x1="120" y1="240" x2="200" y2="258" />
          <line x1="120" y1="240" x2="210" y2="170" />
          <line x1="200" y1="258" x2="228" y2="340" />
          <line x1="200" y1="258" x2="300" y2="190" />
          <line x1="210" y1="170" x2="292" y2="98" />
          <line x1="210" y1="170" x2="318" y2="276" />
          <line x1="292" y1="98" x2="388" y2="126" />
          <line x1="300" y1="190" x2="388" y2="126" />
          <line x1="300" y1="190" x2="426" y2="212" />
          <line x1="318" y1="276" x2="426" y2="212" />
          <line x1="318" y1="276" x2="228" y2="340" />
          <line x1="228" y1="340" x2="140" y2="418" />
          <line x1="228" y1="340" x2="288" y2="388" />
          <line x1="288" y1="388" x2="242" y2="484" />
          <line x1="140" y1="418" x2="242" y2="484" />
          <line x1="118" y1="486" x2="242" y2="484" />
        </svg>

        <svg className="poly poly-web-right" viewBox="0 0 520 520" aria-hidden="true">
          <polygon points="156,84 258,58 344,102 374,184 286,246 182,214" />
          <polygon points="286,246 396,234 472,314 414,406 284,420 232,330" />
          <polygon points="182,214 286,246 232,330 126,318 102,240" />
          <line x1="156" y1="84" x2="258" y2="58" />
          <line x1="258" y1="58" x2="344" y2="102" />
          <line x1="344" y1="102" x2="374" y2="184" />
          <line x1="374" y1="184" x2="286" y2="246" />
          <line x1="286" y1="246" x2="182" y2="214" />
          <line x1="182" y1="214" x2="156" y2="84" />
          <line x1="182" y1="214" x2="258" y2="58" />
          <line x1="182" y1="214" x2="344" y2="102" />
          <line x1="286" y1="246" x2="472" y2="314" />
          <line x1="374" y1="184" x2="472" y2="314" />
          <line x1="286" y1="246" x2="414" y2="406" />
          <line x1="232" y1="330" x2="414" y2="406" />
          <line x1="232" y1="330" x2="126" y2="318" />
          <line x1="126" y1="318" x2="102" y2="240" />
          <line x1="102" y1="240" x2="182" y2="214" />
          <line x1="232" y1="330" x2="286" y2="246" />
          <line x1="284" y1="420" x2="414" y2="406" />
          <line x1="232" y1="330" x2="284" y2="420" />
        </svg>

        <svg className="poly poly-side-left" viewBox="0 0 420 420" aria-hidden="true">
          <polygon points="52,214 132,144 224,162 260,240 188,322 90,300" />
          <polygon points="132,144 196,88 292,110 324,182 260,240 224,162" />
          <line x1="52" y1="214" x2="132" y2="144" />
          <line x1="52" y1="214" x2="90" y2="300" />
          <line x1="132" y1="144" x2="224" y2="162" />
          <line x1="132" y1="144" x2="196" y2="88" />
          <line x1="196" y1="88" x2="292" y2="110" />
          <line x1="292" y1="110" x2="324" y2="182" />
          <line x1="324" y1="182" x2="260" y2="240" />
          <line x1="260" y1="240" x2="188" y2="322" />
          <line x1="188" y1="322" x2="90" y2="300" />
          <line x1="90" y1="300" x2="52" y2="214" />
          <line x1="224" y1="162" x2="260" y2="240" />
          <line x1="224" y1="162" x2="324" y2="182" />
          <line x1="132" y1="144" x2="188" y2="322" />
        </svg>

        <svg className="poly poly-side-right" viewBox="0 0 420 420" aria-hidden="true">
          <polygon points="124,94 218,66 300,104 334,176 280,246 180,234 112,162" />
          <polygon points="180,234 280,246 340,314 292,376 194,356 144,296" />
          <line x1="124" y1="94" x2="218" y2="66" />
          <line x1="218" y1="66" x2="300" y2="104" />
          <line x1="300" y1="104" x2="334" y2="176" />
          <line x1="334" y1="176" x2="280" y2="246" />
          <line x1="280" y1="246" x2="180" y2="234" />
          <line x1="180" y1="234" x2="112" y2="162" />
          <line x1="112" y1="162" x2="124" y2="94" />
          <line x1="180" y1="234" x2="218" y2="66" />
          <line x1="180" y1="234" x2="334" y2="176" />
          <line x1="180" y1="234" x2="144" y2="296" />
          <line x1="280" y1="246" x2="340" y2="314" />
          <line x1="340" y1="314" x2="292" y2="376" />
          <line x1="292" y1="376" x2="194" y2="356" />
          <line x1="194" y1="356" x2="144" y2="296" />
          <line x1="144" y1="296" x2="180" y2="234" />
        </svg>

        <div className="hud-ring ring-a" />
        <div className="hud-ring ring-b" />
        <div className="hud-ring ring-c" />
        <div className="dot-grid dot-grid-top" />
        <div className="dot-grid dot-grid-right" />
      </div>

      <div className="cyber-bg">
        <div className="cyber-aurora aurora-1" />
        <div className="cyber-aurora aurora-2" />
        <div className="cyber-aurora aurora-3" />
        <div className="cyber-mouse-light" />
        <div className="cyber-grid" />
      </div>
      <div className="page-glow" />
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <BackgroundDecor />
      <header className="navbar">
        <div className="content-wrap nav-inner">
          <div className="logo">
            <img src="/assets/mawi.png" alt="MAWI Logo" />
          </div>
          <div className="nav-right">
            <nav id="primary-navigation">
              <ul className="nav-links">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <a className="hire-btn" href="#contact">Hire Me</a>
            <button
              className="mobile-menu-toggle"
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded="false"
              aria-controls="primary-navigation"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="content-wrap hero-inner">
          <div className="hero-text">
            <p className="hero-intro">Hello, I&apos;m</p>
            <h1 className="hero-name glitch-name" data-text="Malindu Wijayarathna">Malindu Wijayarathna</h1>
            <h2 className="typing-text">Cybersecurity Enthusiast</h2>
            <p className="hero-description">
              Exploring the world of cybersecurity through hands-on learning, threat analysis, and
              system defense. Passionate about identifying vulnerabilities, understanding attack
              surfaces, and building secure, resilient systems.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary">View My Work</a>
              <a href="mailto:malinduwijayarathna@gmail.com?subject=CV Request" target="_blank" rel="noreferrer" className="btn cv-btn">Request Resume</a>
              <a href="#contact" className="btn secondary">Get In Touch</a>
            </div>
            <div className="social-icons">
              {socialLinks.map((item) => (
                <a key={item.title} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="icon-btn" title={item.title}>
                  <i className={item.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="hero-image">
            <div className="avatar-wrap">
              <span className="avatar-ring ring-1" />
              <span className="avatar-ring ring-2" />
              <span className="avatar-ring ring-3" />
              <span className="avatar-glow" />
              <span className="avatar-glow glow-2" />
              <span className="orbit orbit-1" />
              <span className="orbit orbit-2" />
              <span className="scan-line" />
              <img src="/assets/profile.png" alt="Malindu profile photo" className="avatar" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="content-wrap">
          <p className="section-tag">// whoami</p>
          <h2>About Me</h2>
          <div className="about-content centered">
            <p className="about-intro reveal-up">
              I&apos;m a Software Engineering graduate with a growing focus on <span className="glow-word">cybersecurity</span>, currently transitioning into the field after gaining industry experience as an Associate Software Engineer. My interest in security was driven by hands-on exposure to system behavior, vulnerabilities, and real-world problem solving.
            </p>
            {aboutBlocks.map((block) => (
              <div className="about-block reveal-up" key={block.title}>
                <h3>{block.title}</h3>
                <p>{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="content-wrap">
          <p className="section-tag">// capabilities</p>
          <h2>Skills &amp; Technologies</h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <div className="skill-card-header">
                  <div className="skill-card-icon"><i className={group.icon} /></div>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-tags">
                  {group.items.map(([slug, icon, label]) => (
                    <span className={`skill-tag ${slug}`} key={label}><i className={icon} /> {label}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="content-wrap">
          <p className="section-tag">// portfolio</p>
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card reveal-up" key={project.title}>
                <div className="project-image">
                  <img src={project.image} alt={project.alt} />
                  <span className="project-badge">{project.badge}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn primary-btn"
                    >
                      <i className="fab fa-github" /> GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="content-wrap">
          <p className="section-tag">// career journey</p>
          <h2>Experience</h2>
          <div className="experience-timeline">
            <div className="experience-track" />
            <div className="experience-progress" />

            {experienceItems.map((item) => (
              <div className="experience-row" key={`${item.date}-${item.title}`}>
                <div className="experience-marker">
                  <span className="experience-dot" />
                </div>
                <div className="experience-card">
                  <span className="exp-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p className="exp-company">{item.company}</p>
                  <p className="exp-summary">{item.summary}</p>
                  <div className="exp-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="education-section">
        <div className="content-wrap">
          <p className="section-tag">// academic journey</p>
          <h2>Education</h2>
          <div className="education-timeline">
            <div className="timeline-track" />
            <div className="timeline-progress" />

            {educationItems.map((item) => (
              <div className="timeline-row" key={`${item.date}-${item.title}`}>
                <div className="timeline-marker">
                  <span className="timeline-dot" />
                </div>
                <div className="education-card">
                  <span className="edu-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="certificates-section">
        <div className="content-wrap">
          <p className="section-tag">// credentials</p>
          <h2>Certifications</h2>
          <div className="cert-grid">
            {certificates.map((certificate) => {
              const classNames = [
                "cert-card",
                certificate.featured ? "featured-cert" : "",
                certificate.inProgress ? "in-progress" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <div className={classNames} key={certificate.title}>
                  {certificate.status ? (
                    <span className="status-badge">{certificate.status}</span>
                  ) : null}

                  <div className="cert-icon">
                    <i className={certificate.icon} />
                  </div>

                  <div className="cert-content">
                    <h3>{certificate.title}</h3>
                    <p className="cert-meta">{certificate.meta}</p>
                    {certificate.href ? (
                      <a
                        href={certificate.href}
                        target="_blank"
                        rel="noreferrer"
                        className="cert-link"
                      >
                        {certificate.linkLabel}
                      </a>
                    ) : (
                      <span className="cert-link disabled-link">{certificate.linkLabel}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="content-wrap">
          <div className="contact-header">
            <p className="section-tag">// connect</p>
            <h2>Get In Touch</h2>
            <p className="contact-subtext">
              Open to cybersecurity internships, junior security roles, freelance work, and
              collaborations.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-panel">
              <div className="contact-intro-card">
                <h3>Let&apos;s Connect</h3>
                <p>
                  Whether it&apos;s a security opportunity, a project, or a collaboration, feel
                  free to reach out through any of the channels below.
                </p>
              </div>

              <div className="contact-info-list">
                {contactCards.map((card) => {
                  const isLink = Boolean(card.href);
                  const external = card.href.startsWith("http");
                  const content = (
                    <>
                      <div className="info-icon">
                        <i className={card.icon} />
                      </div>
                      <div className="info-content">
                        <span>{card.label}</span>
                        <strong>{card.value}</strong>
                      </div>
                    </>
                  );

                  return isLink ? (
                    <a
                      href={card.href}
                      key={card.label}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="info-card"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="info-card" key={card.label}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="contact-form-panel">
              <div className="form-top-line" />
              <form
                className="cyber-contact-form"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/thank-you"
              >
                <input type="hidden" name="form-name" value="contact" />

                <p hidden>
                  <label>
                    Don&apos;t fill this out if you&apos;re human:
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="form-group">
                  <label htmlFor="name">[ NAME ]</label>
                  <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">[ EMAIL ]</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">[ SUBJECT ]</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">[ MESSAGE ]</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your opportunity, idea, or project..."
                    required
                  />
                </div>

                <button type="submit" className="send-btn">
                  <i className="fas fa-paper-plane" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="content-wrap footer-inner">
          <p className="footer-text">© 2026 Malindu Wijayarathna</p>
          <div className="footer-socials">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      <div className="cursor-dot" />
      <div className="cursor-outline" />

      <Script src="/portfolio.js" strategy="afterInteractive" />
    </>
  );
}
