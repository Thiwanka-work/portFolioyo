import { useEffect, useRef } from "react";
import { SiDotnet, SiTerraform, SiKubernetes, SiMicrosoftazure } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaGithub, FaDatabase, FaCloud, FaPython, FaPhp, FaLinkedin, FaExternalLinkAlt, FaAws, FaDocker, FaLinux } from "react-icons/fa";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Project {
  iconUrl: string;
  title: string;
  desc: string | React.ReactNode;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

interface Skill {
  icon: React.ReactNode;
  name: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const SKILLS: Skill[] = [
  { icon: <FaAws color="#FF9900" />, name: "Amazon Web Services (AWS)" },
  { icon: <SiMicrosoftazure color="#0089D6" />, name: "Microsoft Azure" },
  { icon: <FaDocker color="#2496ED" />, name: "Docker & Containerization" },
  { icon: <FaLinux color="#FCC624" />, name: "Linux & Bash Scripting" },
  { icon: <SiTerraform color="#7B42BC" />, name: "Infrastructure as Code (Terraform)" },
  { icon: <FaCloud color="#00a4ef" />, name: "CI/CD & DevOps Practices" },
  { icon: <FaDatabase color="#336791" />, name: "Database Systems (SQL & NoSQL)" },
  { icon: <FaPython color="#3776AB" />, name: "Python & Automation" },
  { icon: <TbBrandCSharp color="#239120" />, name: "C# & .NET Core" },
  { icon: <FaGithub color="#ffffff" />, name: "Git & GitHub" },
];

const PROJECTS: Project[] = [
  {
    iconUrl: "/projects/smartgpa_logo.png",
    title: "Smart GPA Calculator",
    desc: (
      <>
        A comprehensive academic management system available on two platforms:
        <br /><br />
        <strong>🌐 Web Application:</strong> A responsive dashboard with visual analytics, semester tracking, and a GPA prediction engine. Live at <a href="https://www.smartgpa.app" target="_blank" rel="noreferrer" style={{ color: '#4da3ff', textDecoration: 'none' }}>smartgpa.app</a>. <a href="https://github.com/Thiwanka-work/SmartGpaCal" target="_blank" rel="noreferrer" style={{ color: '#4da3ff', textDecoration: 'none' }}>[GitHub]</a>
        <br /><br />
        <strong>💻 Desktop Application:</strong> A premium dark-themed WPF app built with C# and .NET 10, featuring dynamic semester tracking and a smart target GPA planner. <a href="https://github.com/Thiwanka-work/GpaCalculatorApp" target="_blank" rel="noreferrer" style={{ color: '#4da3ff', textDecoration: 'none' }}>[GitHub]</a>
      </>
    ),
    tags: ["C#", "WPF", ".NET 10", "JavaScript", "Chart.js"],
    githubUrl: "https://github.com/Thiwanka-work/SmartGpaCal",
    liveUrl: "https://www.smartgpa.app",
  },
  {
    iconUrl: "/projects/auction.png",
    title: "Cricket Auction System",
    desc: (
      <>
        A dual-screen desktop application built for the Technology Premier League (TPL) cricket tournament at the University of Vavuniya.
        <br /><br />
        <strong>🏏 Live Auction Engine:</strong> Features real-time bidding controls, dynamic team assignments, and persistent SQLite storage for budget management.
        <br /><br />
        <strong>🖥️ Dual Architecture:</strong> Includes an Admin Control Center for data management and a high-visibility Projector Display for live audience viewing.
      </>
    ),
    tags: ["Python", "PyQt5", "SQLite"],
    githubUrl: "https://github.com/Thiwanka-work/cricket_auction_system",
  },
  {
    iconUrl: "/projects/Unihouse.png",
    title: "Boarding Finder",
    desc: (
      <>
        A full-stack web platform designed to simplify finding student accommodation, connecting students, owners, and service providers.
        <br /><br />
        <strong>🔐 Multi-Role Ecosystem:</strong> Secure role-based access for Students, Owners, Service Providers, and Admins with a centralized management dashboard.
        <br /><br />
        <strong>🔍 Smart Search:</strong> Advanced filtering to find boarding places based on university proximity, price range, and accommodation type.
      </>
    ),
    tags: ["React.js", "Tailwind", "PHP", "MySQL"],
    githubUrl: "https://github.com/Thiwanka-work/Uni-House",
  },
];

// ─── GitHub SVG ───────────────────────────────────────────────────────────────
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);

  // ── Three.js background ──────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Dynamically load Three.js from CDN
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.async = true;

    let animFrameId: number;

    script.onload = () => {
      const THREE = (window as any).THREE;
      if (!THREE) return;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 80;

      const COUNT = 900;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(COUNT * 3);
      const sizes = new Float32Array(COUNT);

      for (let i = 0; i < COUNT; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 220;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 160;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 120;
        sizes[i] = Math.random() * 0.9 + 0.2;
      }

      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const mat = new THREE.PointsMaterial({ color: 0x4da3ff, size: 0.45, transparent: true, opacity: 0.35, sizeAttenuation: true });
      const points = new THREE.Points(geo, mat);
      scene.add(points);

      // Faint lines between nearby particles
      const lineVerts: number[] = [];
      const SUBSET = 200;
      const MAX_DIST = 28;
      for (let i = 0; i < SUBSET; i++) {
        for (let j = i + 1; j < SUBSET; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          if (Math.sqrt(dx * dx + dy * dy + dz * dz) < MAX_DIST) {
            lineVerts.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2], pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
          }
        }
      }
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(lineVerts), 3));
      const lineMat = new THREE.LineBasicMaterial({ color: 0x4da3ff, transparent: true, opacity: 0.06 });
      scene.add(new THREE.LineSegments(lineGeo, lineMat));

      let mouseX = 0, mouseY = 0, scrollY = 0;
      const onMouse = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.3;
      };
      const onScroll = () => { scrollY = window.scrollY; };
      document.addEventListener("mousemove", onMouse);
      window.addEventListener("scroll", onScroll);

      function animate() {
        animFrameId = requestAnimationFrame(animate);
        const t = Date.now() * 0.00025;
        points.rotation.y = t * 0.12 + mouseX * 0.5;
        points.rotation.x = t * 0.06 + mouseY * 0.3;
        camera.position.y = -scrollY * 0.018;
        renderer.render(scene, camera);
      }
      animate();

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      // Store cleanup refs on script element
      (script as any)._cleanup = () => {
        document.removeEventListener("mousemove", onMouse);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(animFrameId);
        renderer.dispose();
      };
    };

    document.head.appendChild(script);

    return () => {
      (script as any)._cleanup?.();
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  // ── Intersection Observer for scroll reveals ─────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("tw-inview")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".tw-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ── Hamburger ────────────────────────────────────────────────────────────
  const toggleNav = () => navLinksRef.current?.classList.toggle("tw-open");
  const closeNav = () => navLinksRef.current?.classList.remove("tw-open");

  return (
    <>
      <style>{CSS}</style>

      {/* Three.js canvas */}
      <canvas ref={canvasRef} id="tw-canvas" />

      {/* ── NAV ── */}
      <nav id="tw-nav">
        <a href="#hero" className="tw-logo">TW.</a>
        <ul ref={navLinksRef} id="tw-navlinks">
          {["about", "skills", "projects", "contact"].map((s) => (
            <li key={s}>
              <a href={`#${s}`} onClick={closeNav}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button className="tw-burger" onClick={toggleNav} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      <main>

        {/* ── HERO ── */}
        <section id="hero">
          <div className="tw-badge tw-reveal">
            <span className="tw-dot" /> Available for opportunities
          </div>
          <h1 className="tw-hero-name tw-reveal">
            Hi, I&apos;m <span>Thiwanka</span>
          </h1>
          <p className="tw-hero-title tw-reveal">
            Cloud Engineer &amp; Backend Developer
          </p>


          <p className="tw-hero-desc tw-reveal">
            Passionate about architecting <strong>cloud-native solutions</strong>,
            building scalable <strong>infrastructure</strong>, and optimizing deployments.
            Currently focused on <strong>AWS, Azure, and DevOps practices</strong>, 
            designing resilient backend systems and automating workflows.
          </p>
          <div className="tw-hero-actions tw-reveal">
            <a href="#projects" className="tw-btn tw-btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m6 9 6 6 6-6" />
              </svg>
              View Projects
            </a>
            <a href="#" className="tw-btn tw-btn-secondary" download>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </div>
          <div className="tw-scroll-hint">
            <div className="tw-scroll-line" />
            scroll
          </div>
        </section>

        <div className="tw-divider" />

        {/* ── ABOUT ── */}
        <section id="about">
          <span className="tw-label tw-reveal">01 — About</span>
          <h2 className="tw-section-title tw-reveal">
            Turning ideas into<br />working software
          </h2>
          <p className="tw-section-sub tw-reveal">
            A dedicated cloud engineer and software engineering student with hands-on experience building scalable systems.
          </p>

          <div className="tw-about-grid">
            <div className="tw-about-text tw-reveal">
              <p>
                I&apos;m <strong>Thiwanka</strong>, a Cloud Engineering enthusiast based in{" "}
                <strong>Sri Lanka</strong> with a genuine passion for creating robust, secure,
                and highly available infrastructure. My core expertise lies in <strong>Cloud Platforms</strong> (AWS, Azure) and
                <strong> DevOps practices</strong> (CI/CD, Containerization, Infrastructure as Code).
              </p>
              <p>
                I enjoy bridging the gap between development and operations. Whether it&apos;s deploying microservices, 
                managing databases, or writing automation scripts in <strong>Python</strong> or <strong>C#</strong>, I believe great systems 
                are built on solid, scalable architecture.
              </p>
              <p>
                When I&apos;m not architecting cloud solutions, I&apos;m exploring new networking concepts, contributing to
                open-source ideas, or prototyping the next tool that simplifies a complex workflow.
              </p>
            </div>

            <div className="tw-stats-grid">
              {[
                { num: "AWS", label: "Primary Cloud" },
                { num: "DevOps", label: "Core Focus" },
                { num: "4+", label: "Projects Deployed" },
                { num: "🇱🇰", label: "Based in Sri Lanka" },
              ].map((s, i) => (
                <div key={i} className={`tw-stat tw-reveal tw-s${i + 1}`}>
                  <div className="tw-stat-num">{s.num}</div>
                  <div className="tw-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="tw-divider" />

        {/* ── SKILLS ── */}
        <section id="skills">
          <span className="tw-label tw-reveal">02 — Skills</span>
          <h2 className="tw-section-title tw-reveal">Technologies &amp; Tools</h2>
          <p className="tw-section-sub tw-reveal">
            The stack I work with to build modern, scalable software systems.
          </p>
          <div className="tw-skills-grid">
            {SKILLS.map((sk, i) => (
              <div key={sk.name} className={`tw-skill tw-reveal tw-s${i + 1}`}>
                <div className="tw-skill-icon">{sk.icon}</div>
                <span className="tw-skill-name">{sk.name}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="tw-divider" />

        {/* ── PROJECTS ── */}
        <section id="projects">
          <span className="tw-label tw-reveal">03 — Projects</span>
          <h2 className="tw-section-title tw-reveal">Selected Work</h2>
          <p className="tw-section-sub tw-reveal">
            Real-world projects built to solve practical problems.
          </p>
          <div className="tw-projects-grid">
            {PROJECTS.map((p, i) => (
              <div key={p.title} className={`tw-project tw-reveal tw-s${i + 1}`}>
                <div className="tw-project-top">
                  <a href={p.liveUrl || p.githubUrl} target="_blank" rel="noopener noreferrer" className="tw-project-icon" style={{ display: 'block', cursor: 'pointer' }} aria-label="Visit Project">
                    <img src={p.iconUrl} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', display: 'block' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  </a>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tw-gh-link" aria-label="Visit Live Site">
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="tw-gh-link" aria-label="View on GitHub">
                      <GithubIcon />
                    </a>
                  </div>
                </div>
                <h3 className="tw-project-title">{p.title}</h3>
                <p className="tw-project-desc">{p.desc}</p>
                <div className="tw-tags">
                  {p.tags.map((t) => <span key={t} className="tw-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="tw-divider" />

        {/* ── CONTACT ── */}
        <section id="contact">
          <span className="tw-label tw-reveal">04 — Contact</span>
          <h2 className="tw-section-title tw-reveal">Let&apos;s connect</h2>
          <p className="tw-section-sub tw-reveal">
            Open to collaborations, internships, and interesting engineering challenges.
          </p>

          <div className="tw-contact-grid">
            <div className="tw-contact-info">
              <p className="tw-contact-blurb tw-reveal">
                Whether you have a project in mind, want to collaborate, or just want to say
                hello — I&apos;m always happy to connect with fellow developers and industry professionals.
              </p>
              <div className="tw-contact-items">
                {[
                  { icon: "✉️", label: "Email", value: "thiwankasandaruwan110@gmail.com", href: "mailto:thiwankasandaruwan110@gmail.com" },
                  { icon: <FaLinkedin size={18} color="#0077b5" />, label: "LinkedIn", value: "Thiwanka Sandaruwan", href: "https://www.linkedin.com/in/thiwanka-sandaruwan-9b0714366" },
                  { icon: null, label: "GitHub", value: "Thiwanka-work", href: "https://github.com/Thiwanka-work" },
                ].map((item, i) => {
                  const cls = `tw-contact-item tw-reveal tw-s${i + 1}`;
                  const inner = (
                    <>
                      <div className="tw-ci-icon">
                        {item.icon ? item.icon : <GithubIcon size={18} />}
                      </div>
                      <div>
                        <div className="tw-ci-label">{item.label}</div>
                        <div className="tw-ci-value">{item.value}</div>
                      </div>
                    </>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label} className={cls}>{inner}</div>
                  );
                })}
              </div>
            </div>


            <div className="tw-cta-col">
              <div className="tw-cta tw-reveal">


                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Ready to build something?
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    I&apos;m currently focused on <b>Cloud Engineering</b> and expanding my skills in AWS,
                    DevOps, and scalable system design. I&apos;m open to software engineering roles,
                    internships, and freelance projects. If you need a reliable and efficient solution, let&apos;s talk.
                  </p>

                  <div className="text-sm text-gray-500">
                    Current Focus: AWS • Linux • Networking • CI/CD
                  </div>

                  <a
                    href="mailto:thiwankasandaruwan110@gmail.com"
                    aria-label="Send an Email"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
               bg-blue-600 text-white font-medium 
               hover:bg-blue-700 transition-all duration-300"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>

                    Send an Email
                  </a>
                </div>



              </div>
            </div>


          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="tw-footer">
        <span className="tw-footer-copy">&copy; 2025 Thiwanka. Crafted with care.</span>
        <div className="tw-footer-links">
          <a href="https://github.com/Thiwanka-work" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#hero">Back to top</a>
        </div>
      </footer>
    </>
  );
}

// ─── Scoped CSS ───────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  :root {
    --tw-blue: #4da3ff;
    --tw-blue-dim: rgba(77,163,255,0.12);
    --tw-blue-glow: rgba(77,163,255,0.35);
    --tw-bg: #080c14;
    --tw-card: rgba(255,255,255,0.04);
    --tw-card-h: rgba(255,255,255,0.07);
    --tw-border: rgba(255,255,255,0.08);
    --tw-border-b: rgba(77,163,255,0.3);
    --tw-text: #e8edf5;
    --tw-muted: #7a8694;
    --tw-dim: #3a4558;
    --tw-r: 16px;
    --tw-rs: 10px;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Inter', sans-serif !important;
    background: var(--tw-bg) !important;
    color: var(--tw-text) !important;
    overflow-x: hidden;
    line-height: 1.6;
  }

  #tw-canvas {
    position: fixed;
    inset: 0;
    width: 100%; height: 100%;
    z-index: 0;
    pointer-events: none;
  }

  /* ── NAV ── */
  #tw-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 clamp(1.5rem,5vw,4rem);
    height: 64px;
    background: rgba(8,12,20,0.75);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid var(--tw-border);
  }

  .tw-logo {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--tw-blue);
    letter-spacing: -0.02em;
    text-decoration: none;
  }

  #tw-navlinks {
    display: flex;
    gap: 2rem;
    list-style: none;
    padding: 0; margin: 0;
  }

  #tw-navlinks a {
    text-decoration: none;
    color: var(--tw-muted);
    font-size: 0.875rem;
    font-weight: 500;
    transition: color 0.2s;
    position: relative;
  }
  #tw-navlinks a::after {
    content: '';
    position: absolute;
    bottom: -3px; left: 0;
    width: 0; height: 1.5px;
    background: var(--tw-blue);
    transition: width 0.25s ease;
  }
  #tw-navlinks a:hover { color: var(--tw-text); }
  #tw-navlinks a:hover::after { width: 100%; }

  .tw-burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
  }
  .tw-burger span {
    display: block;
    width: 22px; height: 2px;
    background: var(--tw-muted);
    border-radius: 2px;
    transition: 0.3s;
  }

  /* ── MAIN / SECTION ── */
  main { position: relative; z-index: 1; }

  section {
    padding: clamp(5rem,10vw,9rem) clamp(1.5rem,5vw,4rem);
    max-width: 1100px;
    margin: 0 auto;
  }

  #hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; padding-top: 100px; position: relative; }

  .tw-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, var(--tw-border), transparent);
    max-width: 1100px;
    margin: 0 auto;
  }

  /* ── REVEAL ── */
  .tw-reveal {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .tw-reveal.tw-inview { opacity: 1; transform: none; }

  .tw-s1 { transition-delay: 0.04s; }
  .tw-s2 { transition-delay: 0.09s; }
  .tw-s3 { transition-delay: 0.14s; }
  .tw-s4 { transition-delay: 0.19s; }
  .tw-s5 { transition-delay: 0.24s; }
  .tw-s6 { transition-delay: 0.29s; }
  .tw-s7 { transition-delay: 0.34s; }
  .tw-s8 { transition-delay: 0.39s; }

  /* ── HERO ── */
  .tw-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.375rem 0.875rem;
    border: 1px solid var(--tw-border-b);
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--tw-blue);
    background: var(--tw-blue-dim);
    margin-bottom: 1.75rem;
    width: fit-content;
    animation: tw-fadeUp 0.7s 0.2s ease both;
  }

  .tw-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--tw-blue);
    animation: tw-pulse 2s infinite;
  }

  @keyframes tw-pulse {
    0%,100% { opacity:1; transform:scale(1); }
    50% { opacity:0.5; transform:scale(0.8); }
  }

  .tw-hero-name {
    font-size: clamp(3rem,8vw,6rem);
    font-weight: 700;
    letter-spacing: -0.05em;
    line-height: 1;
    margin-bottom: 0.5rem;
    animation: tw-fadeUp 0.7s 0.35s ease both;
  }
  .tw-hero-name span { color: var(--tw-blue); }

  .tw-hero-title {
    font-size: clamp(1rem,2.5vw,1.35rem);
    font-weight: 400;
    color: var(--tw-muted);
    margin-bottom: 1.5rem;
    animation: tw-fadeUp 0.7s 0.5s ease both;
  }

  .tw-hero-desc {
    font-size: clamp(0.9rem,1.5vw,1.05rem);
    color: var(--tw-muted);
    max-width: 520px;
    line-height: 1.8;
    margin-bottom: 2.5rem;
    animation: tw-fadeUp 0.7s 0.65s ease both;
  }
  .tw-hero-desc strong { color: var(--tw-text); font-weight: 500; }

  .tw-hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    animation: tw-fadeUp 0.7s 0.8s ease both;
  }

  .tw-scroll-hint {
    position: absolute;
    bottom: 2.5rem; left: 50%;
    transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center;
    gap: 0.5rem;
    color: var(--tw-dim);
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    animation: tw-fadeIn 1s 1.5s ease both;
  }

  .tw-scroll-line {
    width: 1px; height: 40px;
    background: linear-gradient(to bottom, var(--tw-blue), transparent);
    animation: tw-scrollDown 1.8s infinite ease;
  }

  @keyframes tw-fadeUp {
    from { opacity:0; transform:translateY(20px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes tw-fadeIn {
    from { opacity:0; } to { opacity:1; }
  }
  @keyframes tw-scrollDown {
    0%   { opacity:0; transform:scaleY(0); transform-origin:top; }
    50%  { opacity:1; transform:scaleY(1); }
    100% { opacity:0; transform:scaleY(0); transform-origin:bottom; }
  }

  /* ── LABELS / TITLES ── */
  .tw-label {
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    font-weight: 500;
    color: var(--tw-blue);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }
  .tw-section-title {
    font-size: clamp(1.75rem,4vw,2.5rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.15;
    margin-bottom: 1rem;
  }
  .tw-section-sub {
    color: var(--tw-muted);
    font-size: 1rem;
    max-width: 540px;
    margin-bottom: 0;
  }

  /* ── BUTTONS ── */
  .tw-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.625rem;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    border: none;
    transition: all 0.2s ease;
  }
  .tw-btn-primary {
    background: var(--tw-blue);
    color: #05080f;
  }
  .tw-btn-primary:hover {
    background: #6db8ff;
    transform: translateY(-2px);
    box-shadow: 0 8px 28px var(--tw-blue-glow);
  }
  .tw-btn-secondary {
    background: transparent;
    color: var(--tw-text);
    border: 1px solid var(--tw-border);
  }
  .tw-btn-secondary:hover {
    border-color: var(--tw-border-b);
    color: var(--tw-blue);
    transform: translateY(-2px);
    background: var(--tw-blue-dim);
  }

  /* ── ABOUT ── */
  .tw-about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 3rem;
  }
  .tw-about-text p {
    color: var(--tw-muted);
    line-height: 1.85;
    margin-bottom: 1rem;
    font-size: 0.975rem;
  }
  .tw-about-text p strong { color: var(--tw-text); font-weight: 500; }

  .tw-stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-content: start;
  }

  .tw-stat {
    padding: 1.25rem 1.5rem;
    border-radius: var(--tw-rs);
    background: var(--tw-card);
    border: 1px solid var(--tw-border);
    transition: border-color 0.2s, background 0.2s;
  }
  .tw-stat:hover { border-color: var(--tw-border-b); background: var(--tw-card-h); }
  .tw-stat-num {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--tw-blue);
    letter-spacing: -0.03em;
    line-height: 1;
    margin-bottom: 0.35rem;
  }
  .tw-stat-label { font-size: 0.78rem; color: var(--tw-muted); font-weight: 500; }

  /* ── SKILLS ── */
  .tw-skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
    gap: 1rem;
    margin-top: 3rem;
  }
  .tw-skill {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    padding: 1rem 1.25rem;
    background: var(--tw-card);
    border: 1px solid var(--tw-border);
    border-radius: var(--tw-rs);
    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
  }
  .tw-skill:hover {
    border-color: var(--tw-border-b);
    background: var(--tw-card-h);
    box-shadow: 0 0 20px rgba(77,163,255,0.08);
  }
  .tw-skill-icon {
    width: 36px; height: 36px;
    border-radius: 8px;
    background: var(--tw-blue-dim);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
  .tw-skill-name { font-size: 0.875rem; font-weight: 500; color: var(--tw-text); }

  /* ── PROJECTS ── */
  .tw-projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px,1fr));
    gap: 1.25rem;
    margin-top: 3rem;
  }
  .tw-project {
    display: flex;
    flex-direction: column;
    padding: 1.75rem;
    background: var(--tw-card);
    border: 1px solid var(--tw-border);
    border-radius: var(--tw-r);
    position: relative;
    overflow: hidden;
    transition: border-color 0.2s, background 0.2s, box-shadow 0.25s, transform 0.25s;
  }
  .tw-project::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(circle at top right, rgba(77,163,255,0.06), transparent 60%);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }
  .tw-project:hover::before { opacity: 1; }
  .tw-project:hover {
    border-color: var(--tw-border-b);
    background: var(--tw-card-h);
    box-shadow: 0 8px 40px rgba(77,163,255,0.1);
    transform: translateY(-3px);
  }

  .tw-project-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
  }
  .tw-project-icon {
    width: 42px; height: 42px;
    border-radius: 10px;
    background: var(--tw-blue-dim);
    border: 1px solid var(--tw-border-b);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.3rem;
  }
  .tw-gh-link {
    display: flex; align-items: center; justify-content: center;
    width: 34px; height: 34px;
    border-radius: 8px;
    background: var(--tw-card-h);
    border: 1px solid var(--tw-border);
    color: var(--tw-muted);
    text-decoration: none;
    transition: all 0.2s;
  }
  .tw-gh-link:hover { border-color: var(--tw-border-b); color: var(--tw-blue); background: var(--tw-blue-dim); }

  .tw-project-title { font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; letter-spacing: -0.01em; }
  .tw-project-desc {
    font-size: 0.845rem;
    color: var(--tw-muted);
    line-height: 1.65;
    flex: 1;
    margin-bottom: 1.25rem;
    position: relative;
    z-index: 2;
  }
  .tw-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .tw-tag {
    padding: 0.25rem 0.625rem;
    border-radius: 6px;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    background: var(--tw-blue-dim);
    color: var(--tw-blue);
    border: 1px solid rgba(77,163,255,0.2);
  }

  /* ── CONTACT ── */
  .tw-contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 3rem;
  }
  .tw-contact-blurb {
    color: var(--tw-muted);
    font-size: 0.975rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
  .tw-contact-items { display: flex; flex-direction: column; gap: 1rem; }

  .tw-contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.25rem;
    background: var(--tw-card);
    border: 1px solid var(--tw-border);
    border-radius: var(--tw-rs);
    text-decoration: none;
    color: inherit;
    transition: border-color 0.2s, background 0.2s;
  }
  .tw-contact-item:hover { border-color: var(--tw-border-b); background: var(--tw-card-h); }

  .tw-ci-icon {
    width: 38px; height: 38px;
    border-radius: 9px;
    background: var(--tw-blue-dim);
    border: 1px solid var(--tw-border-b);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem;
    flex-shrink: 0;
    color: var(--tw-blue);
  }
  .tw-ci-label { font-size: 0.7rem; font-weight: 600; color: var(--tw-muted); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.1rem; }
  .tw-ci-value { font-size: 0.9rem; font-weight: 500; color: var(--tw-text); }

  .tw-cta-col { display: flex; flex-direction: column; justify-content: center; }
  .tw-cta {
    padding: 2rem;
    background: linear-gradient(135deg, rgba(77,163,255,0.06), rgba(77,163,255,0.02));
    border: 1px solid var(--tw-border-b);
    border-radius: var(--tw-r);
  }
  .tw-cta h3 { font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem; letter-spacing: -0.02em; }
  .tw-cta p { color: var(--tw-muted); font-size: 0.875rem; line-height: 1.7; margin-bottom: 1.5rem; }

  /* ── FOOTER ── */
  .tw-footer {
    position: relative; z-index: 1;
    border-top: 1px solid var(--tw-border);
    padding: 2rem clamp(1.5rem,5vw,4rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .tw-footer-copy { color: var(--tw-dim); font-size: 0.8rem; }
  .tw-footer-links { display: flex; gap: 1.5rem; }
  .tw-footer-links a { color: var(--tw-dim); font-size: 0.8rem; text-decoration: none; transition: color 0.2s; }
  .tw-footer-links a:hover { color: var(--tw-blue); }

  /* ── SCROLLBAR ── */
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: var(--tw-bg); }
  ::-webkit-scrollbar-thumb { background: rgba(77,163,255,0.3); border-radius: 10px; }

  /* ── MOBILE ── */
  @media (max-width: 768px) {
    #tw-navlinks { display: none; }
    #tw-navlinks.tw-open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 64px; left: 0; right: 0;
      background: rgba(8,12,20,0.97);
      backdrop-filter: blur(20px);
      padding: 1.5rem 2rem;
      gap: 1.25rem;
      border-bottom: 1px solid var(--tw-border);
    }
    .tw-burger { display: flex; }
    .tw-about-grid { grid-template-columns: 1fr; gap: 2rem; }
    .tw-contact-grid { grid-template-columns: 1fr; }
    .tw-footer { flex-direction: column; text-align: center; }
    .tw-hero-name { font-size: clamp(2.5rem,10vw,4rem); }
  }
`;
