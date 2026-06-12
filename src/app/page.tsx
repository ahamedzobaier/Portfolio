"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Failed to send message. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>AZ.</div>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#skills" className={styles.navLink}>Skills</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground} />
          <div className={`${styles.heroContent} container`}>
            <span className={styles.heroSubtitle}>Full-Stack Engineer</span>
            <h1 className={styles.heroTitle}>
              Crafting <span className="gradient-text">Beautiful</span> & <span className="gradient-text">Performant</span> Web Experiences
            </h1>
            <p className={styles.heroDescription}>
              Hi, I'm Ahamed Zobaier. I design and build robust web applications that solve real-world problems with elegant code and modern aesthetics.
            </p>
            <div className={styles.ctaGroup}>
              <a href="#projects" className={styles.btnPrimary}>View My Work</a>
              <a href="#contact" className={styles.btnSecondary}>Get In Touch</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`${styles.section} container`}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>
                I am a passionate Software Engineer with a deep interest in building modern web applications. 
                My focus lies in creating fast, accessible, and clean user interfaces backed by solid, scalable architectures.
              </p>
              <p>
                Whether it's designing clean RESTful APIs, optimizing database queries, or crafting delightful UI transitions, 
                I strive to ensure every line of code adds value to the user experience.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to open-source, or refining my design skills.
              </p>
            </div>
            <div className={styles.aboutGraphic}>
              <div className={styles.avatarWrapper}>
                <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "5rem" }}>💻</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`${styles.section} container`}>
          <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillsCategory}>
              <h3 className={styles.categoryTitle}>🌐 Frontend</h3>
              <div className={styles.skillsList}>
                <span className={styles.skillBadge}>HTML5 / CSS3</span>
                <span className={styles.skillBadge}>JavaScript (ES6+)</span>
                <span className={styles.skillBadge}>TypeScript</span>
                <span className={styles.skillBadge}>React</span>
                <span className={styles.skillBadge}>Next.js</span>
                <span className={styles.skillBadge}>CSS Modules</span>
              </div>
            </div>

            <div className={styles.skillsCategory}>
              <h3 className={styles.categoryTitle}>⚙️ Backend</h3>
              <div className={styles.skillsList}>
                <span className={styles.skillBadge}>Node.js</span>
                <span className={styles.skillBadge}>Express</span>
                <span className={styles.skillBadge}>RESTful APIs</span>
                <span className={styles.skillBadge}>PostgreSQL</span>
                <span className={styles.skillBadge}>MongoDB</span>
                <span className={styles.skillBadge}>GraphQL</span>
              </div>
            </div>

            <div className={styles.skillsCategory}>
              <h3 className={styles.categoryTitle}>🛠️ Tools & DevOps</h3>
              <div className={styles.skillsList}>
                <span className={styles.skillBadge}>Git & GitHub</span>
                <span className={styles.skillBadge}>Docker</span>
                <span className={styles.skillBadge}>Webpack / Vite</span>
                <span className={styles.skillBadge}>CI/CD</span>
                <span className={styles.skillBadge}>AWS</span>
                <span className={styles.skillBadge}>Vercel</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`${styles.section} container`}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectsGrid}>
            {/* Project 1 */}
            <div className={styles.projectCard}>
              <div className={styles.projectImagePlaceholder}>
                <span className={styles.projectIcon}>🛍️</span>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>E-Commerce Platform</h3>
                <p className={styles.projectDesc}>
                  A full-featured e-commerce storefront with integrated payments, user authentication, and an administrative dashboard.
                </p>
                <div className={styles.projectTech}>
                  <span className={styles.techTag}>Next.js</span>
                  <span className={styles.techTag}>Stripe</span>
                  <span className={styles.techTag}>PostgreSQL</span>
                  <span className={styles.techTag}>Prisma</span>
                </div>
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.projectLink}>Demo</a>
                  <a href="#" className={styles.projectLink}>Code</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className={styles.projectCard}>
              <div className={styles.projectImagePlaceholder}>
                <span className={styles.projectIcon}>💬</span>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>Real-time Chat App</h3>
                <p className={styles.projectDesc}>
                  A modern chat application featuring instant message delivery, typing indicators, and online status.
                </p>
                <div className={styles.projectTech}>
                  <span className={styles.techTag}>React</span>
                  <span className={styles.techTag}>Node.js</span>
                  <span className={styles.techTag}>Socket.io</span>
                  <span className={styles.techTag}>MongoDB</span>
                </div>
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.projectLink}>Demo</a>
                  <a href="#" className={styles.projectLink}>Code</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className={styles.projectCard}>
              <div className={styles.projectImagePlaceholder}>
                <span className={styles.projectIcon}>📊</span>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>Task Analytics Dashboard</h3>
                <p className={styles.projectDesc}>
                  An intuitive productivity tracker featuring real-time data visualization and performance metrics.
                </p>
                <div className={styles.projectTech}>
                  <span className={styles.techTag}>Next.js</span>
                  <span className={styles.techTag}>Chart.js</span>
                  <span className={styles.techTag}>TypeScript</span>
                  <span className={styles.techTag}>Tailwind CSS</span>
                </div>
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.projectLink}>Demo</a>
                  <a href="#" className={styles.projectLink}>Code</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`${styles.section} container`}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div className={styles.contactContainer}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder="Your Name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder="your.email@example.com"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={styles.formTextarea}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" disabled={loading} className={styles.submitBtn}>
                {loading ? "Sending..." : "Send Message"}
              </button>
              {status.type === "success" && <p className={styles.successMessage}>{status.message}</p>}
              {status.type === "error" && <p className={styles.errorMessage}>{status.message}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.footerContent} container`}>
          <div className={styles.socials}>
            <a href="https://github.com/ahamedzobaier" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>GitHub</a>
            <a href="#" className={styles.socialIcon}>LinkedIn</a>
            <a href="#" className={styles.socialIcon}>Twitter</a>
          </div>
          <p className={styles.footerText}>
            © {new Date().getFullYear()} Ahamed Zobaier. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
