/* ═══════════════════════════════════════════
   MAIN.JS — Ahmad Elhamad Portfolio
   GSAP animations · Parallax · Dynamic content
   ═══════════════════════════════════════════ */

import { CONFIG } from './config.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── SVG Icons ──
const ICONS = {
    github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    arrow: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    external: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    shield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
};

// ══════════════════════════════════════
// CONTENT RENDERING
// ══════════════════════════════════════

function renderContent() {
    // Hero
    document.getElementById('hero-name').textContent = CONFIG.name;
    document.getElementById('hero-headline').textContent = `${CONFIG.headline} — ${CONFIG.subheadline}`;

    // About
    document.getElementById('about-bio').textContent = CONFIG.bio;

    // Profile photo
    if (CONFIG.profilePhoto) {
        const photoContainer = document.getElementById('about-photo');
        photoContainer.innerHTML = `<img src="${CONFIG.profilePhoto}" alt="${CONFIG.profilePhotoAlt}" />`;
    }

    // Education
    const eduContainer = document.getElementById('about-education');
    eduContainer.innerHTML = CONFIG.education.map(edu => `
    <div class="edu-item">
      <img class="edu-logo" src="${edu.logo}" alt="${edu.school} logo" />
      <div class="edu-details">
        <h4>${edu.degree}</h4>
        <p>${edu.school}</p>
        <span>${edu.years}</span>
      </div>
    </div>
  `).join('');

    // Languages
    const langContainer = document.getElementById('about-languages');
    langContainer.innerHTML = `
    <div class="lang-list">
      ${CONFIG.languages.map(l => `<span class="lang-tag">${l.name} · ${l.level}</span>`).join('')}
    </div>
  `;

    // Stats
    const statsGrid = document.getElementById('stats-grid');
    statsGrid.innerHTML = CONFIG.stats.map((s, i) => `
    <div class="stat-card">
      <div class="stat-value" ${s.isDynamic ? 'id="experience-counter"' : ''}>${s.isDynamic ? '' : s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');

    // Experience / Timeline
    const timeline = document.getElementById('timeline');

    // Work experience entries
    const workItems = (CONFIG.experience || []).map(job => `
    <div class="timeline-item">
      <div class="timeline-card">
        <div class="timeline-date">${job.years}</div>
        <div class="timeline-title">${job.title}</div>
        <div class="timeline-company">${job.company} <span class="timeline-industry">· ${job.industry}</span></div>
        <div class="timeline-location">${job.location}</div>
        ${job.highlights ? `<ul class="timeline-highlights">${job.highlights.map(h => `<li>${h}</li>`).join('')}</ul>` : ''}
      </div>
    </div>
  `);

    // Education entries
    const eduItems = CONFIG.education.map(edu => `
    <div class="timeline-item">
      <div class="timeline-card">
        <div class="timeline-card-header">
          <img class="timeline-logo" src="${edu.logo}" alt="${edu.school} logo" />
          <div>
            <div class="timeline-date">${edu.years}</div>
            <div class="timeline-title">${edu.degree}</div>
            <div class="timeline-company">${edu.school}</div>
          </div>
        </div>
        <div class="timeline-desc">${edu.description || ''}</div>
      </div>
    </div>
  `);

    timeline.innerHTML = workItems.join('');

    // Navigation
    const navLinks = document.getElementById('nav-links');
    navLinks.innerHTML = CONFIG.navLinks.map(link =>
        `<li><a href="${link.href}" data-section="${link.href.slice(1)}">${link.label}</a></li>`
    ).join('');

    // Projects
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = CONFIG.projects.map(p => `
    <div class="project-card ${p.featured ? 'featured' : ''}">
      ${p.featured ? '<div class="project-featured-badge">★ FEATURED PROJECT</div>' : ''}
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-tech">
        ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
      <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link">
        ${ICONS.github} View on GitHub ${ICONS.arrow}
      </a>
    </div>
  `).join('');

    // Skills
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = CONFIG.skills.map(cat => `
    <div class="skill-category">
      <div class="skill-cat-header">
        <span class="skill-cat-icon">${cat.icon}</span>
        <h3 class="skill-cat-name">${cat.category}</h3>
      </div>
      <div class="skill-items">
        ${cat.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');

    // Certifications
    const certsGrid = document.getElementById('certs-grid');
    certsGrid.innerHTML = CONFIG.certifications.map(c => `
    <div class="cert-card">
      <div class="cert-icon">${ICONS.shield}</div>
      <h3 class="cert-name">${c.name}</h3>
      <p class="cert-issuer">${c.issuer}</p>
      <p class="cert-date">Issued ${c.date}</p>
      ${c.credentialUrl ? `<a href="${c.credentialUrl}" target="_blank" rel="noopener noreferrer" class="cert-link">${ICONS.external} Verify Credential</a>` : ''}
    </div>
  `).join('');

    // Contact
    const contactGrid = document.getElementById('contact-grid');
    contactGrid.innerHTML = `
    <a href="mailto:${CONFIG.email}" class="contact-card" id="contact-email">
      <div class="contact-icon">${ICONS.mail}</div>
      <div>
        <div class="contact-label">Email</div>
        <div class="contact-value">${CONFIG.email}</div>
      </div>
    </a>
    <a href="${CONFIG.social.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-card" id="contact-linkedin">
      <div class="contact-icon">${ICONS.linkedin}</div>
      <div>
        <div class="contact-label">LinkedIn</div>
        <div class="contact-value">Ahmad Elhamad</div>
      </div>
    </a>
    <a href="${CONFIG.social.github}" target="_blank" rel="noopener noreferrer" class="contact-card" id="contact-github">
      <div class="contact-icon">${ICONS.github}</div>
      <div>
        <div class="contact-label">GitHub</div>
        <div class="contact-value">@20xAEsec</div>
      </div>
    </a>
  `;

    // Footer
    const year = new Date().getFullYear();
    document.getElementById('footer-copy').textContent = `© ${year} ${CONFIG.name}. All rights reserved.`;
}

// ══════════════════════════════════════
// PARTICLE CANVAS (Hero Background)
// ══════════════════════════════════════

function initParticleCanvas() {
    const canvas = document.getElementById('hero-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(96, 165, 250, ${this.opacity})`;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(37, 99, 235, ${0.08 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawConnections();
        animId = requestAnimationFrame(animate);
    }

    resize();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
        resize();
        initParticles();
    });
}

// ══════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    // Scroll state
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Smooth scroll + close mobile menu
    navLinks.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link) {
            navToggle.classList.remove('open');
            navLinks.classList.remove('open');
        }
    });

    // Active section highlighting
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                document.querySelectorAll('.nav-links a').forEach(a => {
                    a.classList.toggle('active', a.dataset.section === id);
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
}

// ══════════════════════════════════════
// GSAP SCROLL ANIMATIONS
// ══════════════════════════════════════

function initAnimations() {
    // ── Hero entrance ──
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl
        .to('.hero-badge', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
        })
        .to('.hero-name', {
            opacity: 1,
            y: 0,
            duration: 1,
        }, '-=0.4')
        .to('.hero-headline', {
            opacity: 1,
            y: 0,
            duration: 0.8,
        }, '-=0.5')
        .to('.hero-cta', {
            opacity: 1,
            y: 0,
            duration: 0.8,
        }, '-=0.4')
        .to('.scroll-indicator', {
            opacity: 1,
            duration: 1,
        }, '-=0.2');

    // ── Parallax hero shapes ──
    gsap.utils.toArray('.shape').forEach((shape, i) => {
        const speed = (i + 1) * 50;
        gsap.to(shape, {
            y: speed,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
            },
        });
    });

    // ── Scroll indicator fade ──
    gsap.to('.scroll-indicator', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero',
            start: '80px top',
            end: '200px top',
            scrub: true,
        },
    });

    // ── About section ──
    gsap.from('.about-photo-wrapper', {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#about',
            start: 'top 75%',
            toggleActions: 'play none none none',
        },
    });

    gsap.from('.about-text', {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#about',
            start: 'top 75%',
            toggleActions: 'play none none none',
        },
    });

    // Stats counter animation
    gsap.fromTo('.stat-card',
        { y: 40, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.stats-grid',
                start: 'top 95%',
                toggleActions: 'play none none none',
            },
        });

    // ── Timeline items ──
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.to(item, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        });
    });

    // ── Project cards ──
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: i * 0.15,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        });

        // Parallax tilt on scroll
        gsap.to(card, {
            y: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            },
        });
    });

    // ── Skill categories ──
    gsap.utils.toArray('.skill-category').forEach((cat, i) => {
        gsap.to(cat, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            delay: i * 0.1,
            scrollTrigger: {
                trigger: cat,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        });
    });

    // ── Certification cards ──
    gsap.utils.toArray('.cert-card').forEach((card, i) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            ease: 'power3.out',
            delay: i * 0.12,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        });
    });

    // ── Contact cards ──
    gsap.from('.contact-card', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 75%',
            toggleActions: 'play none none none',
        },
    });

    // ── Section headers ──
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        });
    });

    // ── Parallax background effect on sections ──
    gsap.utils.toArray('.section').forEach((section) => {
        const bg = section.querySelector('.section-header');
        if (bg) {
            gsap.to(bg, {
                y: -30,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 2,
                },
            });
        }
    });
}

// ══════════════════════════════════════
// MOUSE PARALLAX (Hero)
// ══════════════════════════════════════

function initMouseParallax() {
    const hero = document.querySelector('.hero');
    const shapes = document.querySelectorAll('.shape');

    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const deltaX = (clientX - centerX) / centerX;
        const deltaY = (clientY - centerY) / centerY;

        shapes.forEach((shape, i) => {
            const speed = (i + 1) * 8;
            gsap.to(shape, {
                x: deltaX * speed,
                y: deltaY * speed,
                duration: 1,
                ease: 'power2.out',
            });
        });
    });
}

// ══════════════════════════════════════
// TILT EFFECT ON PROJECT CARDS
// ══════════════════════════════════════

function initTiltEffect() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.4,
                ease: 'power2.out',
                transformPerspective: 1000,
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.6,
                ease: 'power3.out',
            });
        });
    });
}

// ══════════════════════════════════════
// SMOOTH SCROLL PROGRESS BAR
// ══════════════════════════════════════

function initScrollProgress() {
    const progress = document.createElement('div');
    progress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #2563eb, #60a5fa);
    z-index: 9999;
    transition: none;
    width: 0%;
  `;
    document.body.appendChild(progress);

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const pct = (scrolled / maxScroll) * 100;
        progress.style.width = `${pct}%`;
    });
}

// ══════════════════════════════════════
// DYNAMIC EXPERIENCE COUNTER
// ══════════════════════════════════════

function initExperienceCounter() {
    const el = document.getElementById('experience-counter');
    if (!el || !CONFIG.experienceStartDate) return;

    const startDate = new Date(CONFIG.experienceStartDate);

    function update() {
        const now = new Date();
        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();

        if (days < 0) {
            months--;
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        el.innerHTML = `
          <div class="counter-group">
            <span class="counter-number">${years}</span>
            <span class="counter-label">Years</span>
          </div>
          <div class="counter-group">
            <span class="counter-number">${months}</span>
            <span class="counter-label">Months</span>
          </div>
          <div class="counter-group">
            <span class="counter-number">${days}</span>
            <span class="counter-label">Days</span>
          </div>
        `;
    }

    update();
    setInterval(update, 1000);
}

// ══════════════════════════════════════
// INITIALIZATION
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    initParticleCanvas();
    initNavigation();
    initScrollProgress();
    initExperienceCounter();

    // Small delay for DOM to settle before animations
    requestAnimationFrame(() => {
        initAnimations();
        initMouseParallax();
        initTiltEffect();
    });
});
