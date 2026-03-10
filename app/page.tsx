"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`main ${darkMode ? 'dark' : ''}`}>
      <section id="home" className="home-section">
        <div className="home-text fade-in">
          <h1>Hi, I'm</h1>
          <h1>Rachit Kanaujia</h1>
          <p>Frontend Engineer | React Developer | Full Stack Developer</p>
          <p className="tagline">Building scalable, high-performance web applications using React, Angular, and modern cloud technologies.</p>
        </div>
        <div className="home-image-container fade-in">
          <img src="/images/profile.jpg" alt="Profile" />
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="about-section-box fade-in">
          <div className="profile-logo" >
            <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Software Engineer with 3+ years of experience in React, Angular, TypeScript, Node.js, and AWS. Experienced in building scalable applications, optimizing performance, and integrating REST APIs.
            </p>
          </div>
        </div>
      </section>
      <section id="skills" className="skills-section">
        <div className="skills-container fade-in">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <i className="fab fa-react"></i>
              <span>React</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-angular"></i>
              <span>Angular</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-code"></i>
              <span>Redux</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-js-square"></i>
              <span>TypeScript</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-sass"></i>
              <span>SCSS</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-bootstrap"></i>
              <span>Bootstrap</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-node-js"></i>
              <span>Node.js</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-server"></i>
              <span>FastAPI</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-server"></i>
              <span>Express</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-database"></i>
              <span>MongoDB</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-aws"></i>
              <span>AWS Lambda</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-aws"></i>
              <span>Step Functions</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-git-alt"></i>
              <span>Git</span>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects-section">
        <div className="projects-container fade-in">
          <h2>Selected Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-image-placeholder">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3>Insurance Management Portal</h3>
              <p>A responsive insurance platform with policy comparison, purchase, and tracking.</p>
              <div className="tech-stack">
                <span>Angular</span>
                <span>TypeScript</span>
                <span>HTML5</span>
                <span>SCSS</span>
                <span>RxJS</span>
                <span>REST APIs</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image-placeholder">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3>Shipping Management Portal</h3>
              <p>An internal enterprise desktop portal to manage shipments and orders with role-based access.</p>
              <div className="tech-stack">
                <span>Angular</span>
                <span>TypeScript</span>
                <span>HTML5</span>
                <span>SCSS</span>
                <span>RxJS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="contact-container fade-in">
          <h2>Contact Me</h2>
          <p>If you'd like to work together or just want to say hello, feel free to reach out!</p>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>rachitkanaujiakvs@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+91 9026921890</span>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <a href="https://github.com/Imrachu" target="_blank" rel="noopener noreferrer">github.com/Imrachu</a>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <a href="https://linkedin.com/in/rachit-kanaujia" target="_blank" rel="noopener noreferrer">linkedin.com/in/rachit-kanaujia</a>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
