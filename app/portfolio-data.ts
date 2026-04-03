export const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
  {
    href: "mailto:malinduwijayarathna@gmail.com?subject=CV Request",
    label: "Request Resume",
  },
];

export const socialLinks = [
  { href: "https://github.com/malindumawi", icon: "fab fa-github", title: "GitHub" },
  {
    href: "https://www.linkedin.com/in/malindu-wijayarathna-1741a4223/",
    icon: "fab fa-linkedin",
    title: "LinkedIn",
  },
  { href: "mailto:malinduwijayarathna@gmail.com", icon: "fas fa-envelope", title: "Email" },
  { href: "tel:+94763869647", icon: "fas fa-phone", title: "Call" },
];

export const aboutBlocks = [
  {
    title: "What I Do",
    body: "I focus on understanding how systems can be analyzed, exploited, and secured. With experience in tools such as Nmap, Wireshark, and Metasploit, I work on network traffic analysis, vulnerability assessment, and identifying potential security risks aligned with modern cybersecurity practices.",
  },
  {
    title: "What I'm Learning",
    body: "I am actively developing my expertise in security operations, SIEM-based monitoring, incident response, and threat detection. I continuously explore new tools and techniques to better understand evolving cyber threats and defensive strategies.",
  },
  {
    title: "What I Aim For",
    body: "My goal is to grow into a well-rounded cybersecurity professional who can contribute to protecting and strengthening modern digital systems, while continuously learning and adapting to emerging security challenges.",
  },
];

export const skillGroups = [
  {
    icon: "fas fa-shield-halved",
    title: "Technical Skills",
    items: [
      ["tech", "fas fa-shield-virus", "SOC Operations"],
      ["tech", "fas fa-crosshairs", "Threat Detection"],
      ["tech", "fas fa-triangle-exclamation", "Incident Response"],
      ["tech", "fas fa-bug", "Vulnerability Assessment"],
      ["tech", "fas fa-network-wired", "Network Traffic Analysis"],
      ["tech", "fas fa-scale-balanced", "Risk Assessment"],
      ["tech", "fas fa-fingerprint", "Digital Forensics"],
      ["tech", "fas fa-list-check", "OWASP Top 10"],
      ["tech", "fas fa-globe", "DNS Enumeration"],
      ["tech", "fas fa-file-shield", "GRC"],
    ],
  },
  {
    icon: "fas fa-toolbox",
    title: "Tools & Platforms",
    items: [
      ["klinux", "devicon-linux-plain", "Kali Linux"],
      ["wireshark", "fas fa-network-wired", "Wireshark"],
      ["nmap", "fas fa-magnifying-glass", "Nmap"],
      ["metasploit", "fas fa-bolt", "Metasploit"],
      ["burp", "fas fa-bug", "Burp Suite"],
      ["siem", "fas fa-chart-line", "SIEM"],
      ["wazuh", "fas fa-shield-alt", "Wazuh"],
      ["windows", "fab fa-windows", "Windows"],
      ["linux", "devicon-linux-plain", "Linux"],
      ["oracle", "fas fa-database", "Oracle"],
      ["figma", "devicon-figma-plain", "Figma"],
      ["adobexd", "fas fa-pen-nib", "Adobe XD"],
    ],
  },
  {
    icon: "fas fa-code",
    title: "Programming & Development",
    items: [
      ["python", "devicon-python-plain", "Python"],
      ["sql", "fas fa-database", "SQL"],
      ["java", "devicon-java-plain", "Java"],
      ["javascript", "devicon-javascript-plain", "JavaScript"],
      ["html", "devicon-html5-plain", "HTML"],
      ["css", "devicon-css3-plain", "CSS"],
      ["flutter", "devicon-flutter-plain", "Flutter"],
    ],
  },
  {
    icon: "fas fa-brain",
    title: "Soft Skills",
    items: [
      ["soft", "fas fa-lightbulb", "Analytical Thinking"],
      ["soft", "fas fa-puzzle-piece", "Problem Solving"],
      ["soft", "fas fa-users", "Teamwork"],
      ["soft", "fas fa-arrows-rotate", "Adaptability"],
      ["soft", "fas fa-comments", "Communication"],
      ["soft", "fas fa-wand-magic-sparkles", "Innovative Thinking"],
      ["soft", "fas fa-lightbulb", "Creativity"],
    ],
  },
];

export const projects = [
  {
    image: "/assets/curenzee.png",
    alt: "CurenZee project preview",
    badge: "Final Year Project",
    title: "CurenZee",
    description:
      "A mobile-based real-time Sri Lankan currency recognition system for visually impaired users, built using a custom-tuned YOLOv8 model, a CLAHE-based low-light enhancement pipeline, a Flutter frontend, and a Flask backend.",
    tags: ["Flutter", "YOLOv8", "Flask", "CLAHE", "Accessibility"],
    href: "https://github.com/malindumawi/curenzee-final-year-project",
  },
  {
    image: "/assets/owsap.png",
    alt: "Cybersecurity lab preview",
    badge: "OWASP Vulnerability Assessment",
    title: "OWASP Vulnerability Assessment Lab",
    description:
      "Performed a full-cycle vulnerability assessment in an OWASP lab environment covering reconnaissance, scanning, service enumeration, exploitation, and remediation. Investigated SQLi, XSS, MITM, DoS, privilege escalation, and hash cracking.",
    tags: ["Kali Linux", "Nmap", "Wireshark", "Metasploit", "Ettercap"],
    href: "https://github.com/malindumawi/full-cycle-vulnerability-assesment",
  },
  {
    image: "/assets/vulnapp.png",
    alt: "Passive Reconnaissance of VulnApp Solutions Inc. project preview",
    badge: "Passive Recon",
    title: "Passive Reconnaissance of VulnApp Solutions Inc.",
    description:
      "Performed passive reconnaissance on a PHP-based web application hosted on a bare IP. Enumerated visible and hidden endpoints, and identified issues including unauthenticated admin access, IDOR, reflected XSS evidence, missing CSRF protection, insecure transport, and exposed configuration endpoints. Delivered an Attack Surface Diagram, Risk Matrix, OWASP Top 10 mapping, and remediation recommendations.",
    tags: ["Passive Recon", "Web Security", "OWASP", "Attack Surface", "Security Reporting"],
    href: "https://github.com/malindumawi/vulnapp-passive-reconnaissance",
  },
  {
    image: "/assets/silentshadow.png",
    alt: "Silent Shadow project preview",
    badge: "OSINT",
    title: "Silent Shadow: ikman.lk",
    description:
      "Conducted a passive OSINT and external attack surface assessment on a corporate platform using crt.sh, dig, WHOIS, BGP.he.net, Wappalyzer, Hunter.io, and ExifTool. Delivered an Attack Surface Map, Risk Matrix, and mitigation recommendations.",
    tags: ["OSINT", "Attack Surface", "Risk Analysis", "Reconnaissance", "Security Reporting"],
    href: "https://github.com/malindumawi/ikmanlk-silent-shadow",
  },
  {
    image: "/assets/IOT.png",
    alt: "Environmental monitoring system preview",
    badge: "IoT",
    title: "Environmental Monitoring System",
    description:
      "Built an IoT-based environmental monitoring system to measure temperature, humidity, and air pressure in real time using Raspberry Pi Pico W, MicroPython, and a web-server-based data logger.",
    tags: ["IoT", "Raspberry Pi Pico W", "MicroPython", "Sensors", "Web Server"],
    href: "https://github.com/malindumawi/environmental-monitoring-system",
  },
  {
    image: "/assets/innova.png",
    alt: "Innovascapers prototype preview",
    badge: "UI/UX",
    title: "Innovascapers",
    description:
      "Designed a prototype interface focused on innovative user-centered solutions using Figma, with emphasis on visual clarity, usability, and interactive design thinking.",
    tags: ["Figma", "UI/UX", "Prototype Design", "User-Centered Design"],
    href: "https://github.com/malindumawi/innovascapers",
  },
  {
    image: "/assets/currencymate.png",
    alt: "Currencymate app preview",
    badge: "Mobile App",
    title: "Currencymate",
    description:
      "Developed a currency recognition mobile application for visually impaired users using Flutter, with UI/UX design support from Figma to ensure accessibility and ease of interaction.",
    tags: ["Flutter", "Figma", "Accessibility", "Mobile App"],
    href: "https://github.com/malindumawi/currency-mate",
  },
];

export const experienceItems = [
  {
    date: "Dec 2024 - Nov 2025",
    title: "Associate Software Engineer",
    company: "Pentagon i Runway (Pvt) Ltd | Nugegoda, Sri Lanka",
    summary:
      "Contributed to multiple ERP implementation and customization projects by delivering features, resolving development and production issues, and improving system workflows to meet stakeholder and business needs.",
    tags: ["ERP Customization", "Feature Implementation", "Production Support", "Dashboards & Reports", "User Training", "Mentoring"],
  },
  {
    date: "Jun 2024 - Dec 2024",
    title: "Trainee Software Engineer",
    company: "Pentagon i Runway (Pvt) Ltd | Nugegoda, Sri Lanka",
    summary:
      "Supported full-cycle ERP implementation activities from requirement gathering to deployment, while participating in Agile delivery, testing, UAT validation, and module-specific documentation.",
    tags: ["ERP Implementation", "Agile / Scrum", "System Testing", "UAT", "Documentation", "Deployment Support"],
  },
  {
    date: "Oct 2023 - Jun 2024",
    title: "Intern Software Engineer",
    company: "Pentagon i Runway (Pvt) Ltd | Nugegoda, Sri Lanka",
    summary:
      "Built a strong foundation in ERP systems by assisting with module customization, requirement gathering, issue troubleshooting, and day-to-day support to improve functionality and reliability.",
    tags: ["Module Development", "Requirement Gathering", "Troubleshooting", "Issue Resolution", "System Reliability"],
  },
];

export const educationItems = [
  {
    date: "2021 - 2025",
    title: "BEng (Hons) in Software Engineering",
    detail: "Informatics Institute of Technology | Colombo, Sri Lanka (Affiliated with University of Westminster | London, UK)",
  },
  {
    date: "2021 - 2021",
    title: "Foundation Certificate in Higher Education",
    detail: "Informatics Institute of Technology | Colombo, Sri Lanka",
  },
  {
    date: "2006 - 2020",
    title: "Primary Education",
    detail: "Leeds International School | Panadura, Sri Lanka",
  },
];

export const certificates = [
  {
    title: "Cyber Security Bootcamp",
    meta: "STEM Link",
    status: "In Progress",
    linkLabel: "Ongoing",
    href: "",
    inProgress: true,
    featured: true,
    icon: "fas fa-award",
  },
  {
    title: "Certified in Cybersecurity (CC)",
    meta: "ISC2",
    status: "In Progress",
    linkLabel: "Ongoing",
    href: "",
    inProgress: true,
    featured: false,
    icon: "fas fa-award",
  },
  {
    title: "Certified Cybersecurity Educator Professional (CCEP)",
    meta: "Red Team Leaders",
    status: "",
    linkLabel: "View Credential",
    href: "https://courses.redteamleaders.com/exam-completion/a48313e3dbd27c55",
    inProgress: false,
    featured: false,
    icon: "fas fa-graduation-cap",
  },
  {
    title: "Introduction to CIP",
    meta: "OPSWAT Academy",
    status: "",
    linkLabel: "View Credential",
    href: "https://learn.opswatacademy.com/certificate/HeSS2eFtqA",
    inProgress: false,
    featured: false,
    icon: "fas fa-graduation-cap",
  },
];

export const contactCards = [
  {
    href: "mailto:malinduwijayarathna@gmail.com",
    icon: "fas fa-envelope",
    label: "Email",
    value: "malinduwijayarathna@gmail.com",
  },
  {
    href: "tel:+94763869647",
    icon: "fas fa-phone-alt",
    label: "Phone",
    value: "+94 76 386 9647",
  },
  {
    href: "https://www.linkedin.com/in/malindu-wijayarathna-1741a4223/",
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
    value: "Malindu Wijayarathna",
  },
  {
    href: "https://github.com/malindumawi",
    icon: "fab fa-github",
    label: "GitHub",
    value: "MalinduMawi",
  },
  {
    href: "",
    icon: "fas fa-map-marker-alt",
    label: "Location",
    value: "Sri Lanka",
  },
];

export const footerLinks = [
  { href: "https://www.instagram.com/malindu_wijayarathna", icon: "fab fa-instagram" },
  { href: "https://www.facebook.com/malindu.wijayarathna", icon: "fab fa-facebook-f" },
  { href: "https://discord.com/users/773564601332793375", icon: "fab fa-discord" },
];
