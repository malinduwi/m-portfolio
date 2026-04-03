import Script from "next/script";
import ContactForm from "./contact-form";
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

        <svg className="poly poly-web-top" viewBox="0 0 500 500" aria-hidden="true">
          <polygon points="92,124 172,72 282,84 344,156 320,256 218,302 120,252 76,176" />
          <polygon points="172,72 244,30 340,58 388,126 344,156 282,84" />
          <polygon points="218,302 320,256 394,322 344,408 238,430 176,370" />
          <line x1="92" y1="124" x2="172" y2="72" />
          <line x1="172" y1="72" x2="282" y2="84" />
          <line x1="282" y1="84" x2="344" y2="156" />
          <line x1="344" y1="156" x2="320" y2="256" />
          <line x1="320" y1="256" x2="218" y2="302" />
          <line x1="218" y1="302" x2="120" y2="252" />
          <line x1="120" y1="252" x2="76" y2="176" />
          <line x1="76" y1="176" x2="92" y2="124" />
          <line x1="172" y1="72" x2="244" y2="30" />
          <line x1="244" y1="30" x2="340" y2="58" />
          <line x1="340" y1="58" x2="388" y2="126" />
          <line x1="388" y1="126" x2="344" y2="156" />
          <line x1="282" y1="84" x2="388" y2="126" />
          <line x1="218" y1="302" x2="176" y2="370" />
          <line x1="176" y1="370" x2="238" y2="430" />
          <line x1="238" y1="430" x2="344" y2="408" />
          <line x1="344" y1="408" x2="394" y2="322" />
          <line x1="394" y1="322" x2="320" y2="256" />
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

        <svg className="poly poly-mid-edge-left" viewBox="0 0 360 360" aria-hidden="true">
          <polygon points="42,188 118,126 206,140 236,220 170,292 82,276" />
          <polygon points="118,126 172,82 252,96 286,154 236,220 206,140" />
          <line x1="42" y1="188" x2="118" y2="126" />
          <line x1="42" y1="188" x2="82" y2="276" />
          <line x1="118" y1="126" x2="206" y2="140" />
          <line x1="118" y1="126" x2="172" y2="82" />
          <line x1="172" y1="82" x2="252" y2="96" />
          <line x1="252" y1="96" x2="286" y2="154" />
          <line x1="286" y1="154" x2="236" y2="220" />
          <line x1="236" y1="220" x2="170" y2="292" />
          <line x1="170" y1="292" x2="82" y2="276" />
          <line x1="82" y1="276" x2="42" y2="188" />
          <line x1="206" y1="140" x2="236" y2="220" />
          <line x1="206" y1="140" x2="286" y2="154" />
        </svg>

        <svg className="poly poly-mid-edge-right" viewBox="0 0 360 360" aria-hidden="true">
          <polygon points="106,58 202,40 282,84 312,164 248,228 150,220 82,148" />
          <polygon points="150,220 248,228 308,286 266,344 176,336 126,280" />
          <line x1="106" y1="58" x2="202" y2="40" />
          <line x1="202" y1="40" x2="282" y2="84" />
          <line x1="282" y1="84" x2="312" y2="164" />
          <line x1="312" y1="164" x2="248" y2="228" />
          <line x1="248" y1="228" x2="150" y2="220" />
          <line x1="150" y1="220" x2="82" y2="148" />
          <line x1="82" y1="148" x2="106" y2="58" />
          <line x1="82" y1="148" x2="202" y2="40" />
          <line x1="150" y1="220" x2="126" y2="280" />
          <line x1="126" y1="280" x2="176" y2="336" />
          <line x1="176" y1="336" x2="266" y2="344" />
          <line x1="266" y1="344" x2="308" y2="286" />
          <line x1="308" y1="286" x2="248" y2="228" />
          <line x1="150" y1="220" x2="312" y2="164" />
        </svg>

        <svg className="poly poly-upper-edge-right" viewBox="0 0 340 340" aria-hidden="true">
          <polygon points="78,54 176,30 254,74 278,156 212,210 122,188 64,120" />
          <polygon points="176,30 224,96 212,210 278,156" />
          <polygon points="122,188 164,278 92,314 46,238" />
          <line x1="78" y1="54" x2="176" y2="30" />
          <line x1="176" y1="30" x2="254" y2="74" />
          <line x1="254" y1="74" x2="278" y2="156" />
          <line x1="278" y1="156" x2="212" y2="210" />
          <line x1="212" y1="210" x2="122" y2="188" />
          <line x1="122" y1="188" x2="64" y2="120" />
          <line x1="64" y1="120" x2="78" y2="54" />
          <line x1="176" y1="30" x2="224" y2="96" />
          <line x1="224" y1="96" x2="212" y2="210" />
          <line x1="122" y1="188" x2="164" y2="278" />
          <line x1="164" y1="278" x2="92" y2="314" />
          <line x1="92" y1="314" x2="46" y2="238" />
          <line x1="46" y1="238" x2="122" y2="188" />
        </svg>

        <svg className="poly poly-lower-edge-right" viewBox="0 0 360 360" aria-hidden="true">
          <polygon points="92,48 196,72 244,144 218,236 126,258 60,188" />
          <polygon points="196,72 286,110 302,204 218,236 244,144" />
          <polygon points="126,258 188,324 108,356 46,300" />
          <line x1="92" y1="48" x2="196" y2="72" />
          <line x1="196" y1="72" x2="244" y2="144" />
          <line x1="244" y1="144" x2="218" y2="236" />
          <line x1="218" y1="236" x2="126" y2="258" />
          <line x1="126" y1="258" x2="60" y2="188" />
          <line x1="60" y1="188" x2="92" y2="48" />
          <line x1="196" y1="72" x2="286" y2="110" />
          <line x1="286" y1="110" x2="302" y2="204" />
          <line x1="302" y1="204" x2="218" y2="236" />
          <line x1="126" y1="258" x2="188" y2="324" />
          <line x1="188" y1="324" x2="108" y2="356" />
          <line x1="108" y1="356" x2="46" y2="300" />
          <line x1="46" y1="300" x2="126" y2="258" />
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
              <ContactForm />
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
