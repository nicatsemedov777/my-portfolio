import './style.css'

interface TechStack {
  category: string;
  items: string[];
}

interface Project {
  title: string;
  description: string;
  role: string;
  techStack: string[];
  features: string[];
  impact: string[];
  link?: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
  major?: string;
}

const portfolioData = {
  name: "Nicat Samadov",
  role: "Backend Developer (Java & Spring)",
  yearsOfExperience: "2+ Years including Professional & Internship work",
  location: "Baku, Azerbaijan",
  summary: "I am a Backend Developer specializing in Java and Spring Boot, with experience in building scalable, secure, and high-performance backend systems. I focus on clean architecture, database design, microservices, and cloud-based solutions. I enjoy solving complex technical problems, optimizing system performance, and delivering reliable software products.",
  
  techStack: [
    {
      category: "Backend",
      items: [
        "Java (8/11/17)",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA / Hibernate",
        "Spring WebFlux",
        "Spring Batch",
        "Microservices",
        "RESTful API Design"
      ]
    },
    {
      category: "Databases",
      items: [
        "PostgreSQL",
        "Redis",
        "Cassandra"
      ]
    },
    {
      category: "Cloud & Storage",
      items: [
        "AWS S3",
        "AWS SES",
        "DigitalOcean"
      ]
    },
    {
      category: "DevOps / Tools",
      items: [
        "Docker",
        "Git",
        "Nginx",
        "Makefile",
        "Liquibase",
        "Prometheus"
      ]
    },
    {
      category: "Messaging & Eventing",
      items: [
        "Apache Kafka"
      ]
    },
    {
      category: "Testing",
      items: [
        "JUnit"
      ]
    },
    {
      category: "Other",
      items: [
        "OAuth2",
        "JWT Authentication",
        "CI/CD Automation"
      ]
    }
  ] as TechStack[],

  projects: [
    {
      title: "Məhsul-Plus (Business Management Platform)",
      description: "Mehsul Plus is a comprehensive software solution for managing business operations including inventory management, sales, warehouse operations, financial transactions, and company payments — streamlining multiple business processes into a single system.",
      role: "Backend Developer / System Design Contributor",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "Spring Data JPA", "REST APIs", "Docker"],
      features: [
        "Centralized Business Process Management",
        "Inventory & Sales Modules",
        "Financial Operations Control",
        "Secure Authentication"
      ],
      impact: [
        "Reduced Manual Work",
        "Increased Data Visibility",
        "Improved Process Consistency"
      ],
      link: "https://mehsulplus.store/"
    }
  ] as Project[],

  experience: [
    {
      title: "Backend Developer",
      company: "Birainy",
      period: "Apr 2025 — Oct 2025",
      achievements: [
        "Led domain migration and server-side deployment on Ubuntu",
        "Configured Nginx as a reverse-proxy",
        "Integrated Cloudflare DNS & SSL security",
        "Supported Spring Boot, Angular/Vite, PostgreSQL & WebSocket services",
        "Automated CI/CD for dockerized microservices",
        "Ensured stable releases, uptime & real-time updates"
      ]
    },
    {
      title: "Backend Developer",
      company: "Phoenixmild Sat",
      period: "Mar 2024 — Feb 2025",
      achievements: [
        "Designed full backend architecture and database structure",
        "Implemented Spring Batch for bulk user import processing",
        "Built automated email system using Cron jobs + AWS SES",
        "Designed AWS S3-based storage workflows",
        "Built document & certificate template generation module",
        "Improved system data processing efficiency"
      ]
    },
    {
      title: "Backend Developer (Intern)",
      company: "Imalionshop (E-commerce Startup)",
      period: "Feb 2024 — Apr 2024",
      achievements: [
        "Worked on authentication & JWT security",
        "Implemented database features using Spring Data JPA",
        "Built email notification logic",
        "Optimized backend logic & performance"
      ]
    },
    {
      title: "IT Operator",
      company: "TDS Consulting LLC",
      period: "Jan 2024 — Jun 2025",
      achievements: [
        "Configured & supported existing software systems",
        "Created technical user documentation",
        "Supported IT audit & system monitoring"
      ]
    }
  ] as Experience[],

  education: [
    {
      degree: "Bachelor — Computer Science",
      institution: "The Academy of Public Administration under the President of the Republic of Azerbaijan",
      period: "Sep 2021 — Jun 2025",
      major: "Major in Programming",
      details: "Final Project: \"Development of Intelligent Software Solutions and Automation Tools in Modern Programming Environments\""
    },
    {
      degree: "MBA — Master of Business Administration",
      institution: "Baku Eurasian University",
      period: "Sep 2025 — Jun 2027"
    }
  ] as Education[],

  training: [
    {
      title: "Backend Programming Course",
      institution: "IKT Lab Training Center",
      period: "May 2023 — Nov 2023",
      details: "Technest Scholarship - Java SE & EE, Backend Fundamentals & Advanced Modules"
    }
  ],

  certifications: [
    "IELTS (IDP)",
    "Programming Diploma — Ministry of Digital Development",
    "HackerRank — Java Skills & Coding"
  ],

  languages: [
    "Azerbaijani",
    "English",
    "Turkish"
  ],

  contact: {
    email: "nijatsmdov@gmail.com",
    github: "https://github.com/nicatsemedov777",
    linkedin: "https://www.linkedin.com/in/nicatsamadov/",
    location: "Baku, Azerbaijan"
  }
};

function createNavigation() {
  return `
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">${portfolioData.name}</div>
        <ul class="nav-menu">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#tech-stack" class="nav-link">Tech Stack</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#experience" class="nav-link">Experience</a></li>
          <li><a href="#education" class="nav-link">Education</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <button class="nav-toggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `;
}

function createHeroSection() {
  return `
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-name">${portfolioData.name}</h1>
        <h2 class="hero-role">${portfolioData.role}</h2>
        <p class="hero-location">📍 ${portfolioData.location}</p>
        <p class="hero-experience">${portfolioData.yearsOfExperience}</p>
        <div class="hero-cta">
          <a href="#contact" class="btn btn-primary">Get in Touch</a>
          <a href="#projects" class="btn btn-secondary">View Projects</a>
        </div>
      </div>
    </section>
  `;
}

function createAboutSection() {
  return `
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="about-text">
            <p class="summary">${portfolioData.summary}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function createTechStackSection() {
  const techStackHTML = portfolioData.techStack.map(category => `
    <div class="tech-category">
      <h3 class="tech-category-title">${category.category}</h3>
      <div class="tech-items">
        ${category.items.map(item => `<span class="tech-badge">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');

  return `
    <section id="tech-stack" class="section section-alt">
      <div class="container">
        <h2 class="section-title">Tech Stack</h2>
        <div class="tech-stack-grid">
          ${techStackHTML}
        </div>
      </div>
    </section>
  `;
}

function createProjectsSection() {
  const projectsHTML = portfolioData.projects.map(project => `
    <div class="project-card">
      <div class="project-header">
        <h3 class="project-title">${project.title}</h3>
        ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">🔗 View Project</a>` : ''}
      </div>
      <p class="project-description">${project.description}</p>
      <p class="project-role"><strong>Role:</strong> ${project.role}</p>
      <div class="project-tech">
        <strong>Tech Stack:</strong>
        ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      <div class="project-details">
        <div class="project-features">
          <h4>Key Features</h4>
          <ul>
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
        <div class="project-impact">
          <h4>Impact</h4>
          <ul>
            ${project.impact.map(impact => `<li>${impact}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
          ${projectsHTML}
        </div>
      </div>
    </section>
  `;
}

function createExperienceSection() {
  const experienceHTML = portfolioData.experience.map(exp => `
    <div class="experience-card">
      <div class="experience-header">
        <div>
          <h3 class="experience-title">${exp.title}</h3>
          <p class="experience-company">${exp.company}</p>
        </div>
        <span class="experience-period">${exp.period}</span>
      </div>
      <ul class="experience-achievements">
        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  return `
    <section id="experience" class="section section-alt">
      <div class="container">
        <h2 class="section-title">Experience</h2>
        <div class="experience-timeline">
          ${experienceHTML}
        </div>
      </div>
    </section>
  `;
}

function createEducationSection() {
  const educationHTML = portfolioData.education.map(edu => `
    <div class="education-card">
      <h3 class="education-degree">${edu.degree}</h3>
      <p class="education-institution">${edu.institution}</p>
      <p class="education-period">${edu.period}</p>
      ${edu.major ? `<p class="education-major"><strong>${edu.major}</strong></p>` : ''}
      ${edu.details ? `<p class="education-details">${edu.details}</p>` : ''}
    </div>
  `).join('');

  const trainingHTML = portfolioData.training.map(training => `
    <div class="training-card">
      <h3 class="training-title">${training.title}</h3>
      <p class="training-institution">${training.institution}</p>
      <p class="training-period">${training.period}</p>
      ${training.details ? `<p class="training-details">${training.details}</p>` : ''}
    </div>
  `).join('');

  return `
    <section id="education" class="section">
      <div class="container">
        <h2 class="section-title">Education</h2>
        <div class="education-grid">
          ${educationHTML}
        </div>
        <div class="training-section">
          <h3 class="subsection-title">Training & Scholarship</h3>
          <div class="training-grid">
            ${trainingHTML}
          </div>
        </div>
        <div class="certifications-section">
          <h3 class="subsection-title">Certifications</h3>
          <div class="certifications-list">
            ${portfolioData.certifications.map(cert => `<span class="cert-badge">${cert}</span>`).join('')}
          </div>
        </div>
        <div class="languages-section">
          <h3 class="subsection-title">Languages</h3>
          <div class="languages-list">
            ${portfolioData.languages.map(lang => `<span class="lang-badge">${lang}</span>`).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function createContactSection() {
  return `
    <section id="contact" class="section section-alt">
      <div class="container">
        <h2 class="section-title">Contact</h2>
        <div class="contact-content">
          <p class="contact-intro">Let's connect and discuss opportunities!</p>
          <div class="contact-links">
            <a href="mailto:${portfolioData.contact.email}" class="contact-link">
              <span class="contact-icon">📧</span>
              <span>${portfolioData.contact.email}</span>
            </a>
            <a href="${portfolioData.contact.github}" target="_blank" rel="noopener noreferrer" class="contact-link">
              <span class="contact-icon">🐙</span>
              <span>GitHub</span>
            </a>
            <a href="${portfolioData.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link">
              <span class="contact-icon">🔗</span>
              <span>LinkedIn</span>
            </a>
            <div class="contact-link">
              <span class="contact-icon">📍</span>
              <span>${portfolioData.contact.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function createFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} ${portfolioData.name}. All rights reserved.</p>
      </div>
    </footer>
  `;
}

function initApp() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  
  app.innerHTML = `
    ${createNavigation()}
    ${createHeroSection()}
    ${createAboutSection()}
    ${createTechStackSection()}
    ${createProjectsSection()}
    ${createExperienceSection()}
    ${createEducationSection()}
    ${createContactSection()}
    ${createFooter()}
  `;

  // Smooth scrolling for navigation links
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('active');
      navToggle?.classList.remove('active');
    });
  });

  // Add scroll effect to navbar
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all sections and cards
  const animatedElements = document.querySelectorAll('.section, .tech-category, .project-card, .experience-card, .education-card, .training-card');
  animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Add parallax effect to hero
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    if (hero && scrolled < window.innerHeight) {
      (hero as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`;
      (hero as HTMLElement).style.opacity = `${1 - scrolled / window.innerHeight}`;
    }
  });
}

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
