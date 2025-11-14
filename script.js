// ===== RESUME DATA MANAGER =====
class ResumeManager {
  constructor() {
    this.resumeData = null;
    this.init();
  }

  async init() {
    // Dynamically load resume data from JSON
    try {
      const response = await fetch('resume-data.json');
      if (!response.ok) throw new Error('Failed to load resume data');
      this.resumeData = await response.json();
      this.renderResume();
    } catch (error) {
      console.warn('Resume data not found, using default resume links');
    }
  }

  renderResume() {
    const resumeSection = document.getElementById('resume');
    if (!this.resumeData) return;

    const { skills, experience, projects } = this.resumeData;
    
    let html = '<h2>Professional Profile</h2>';
    
    if (skills) {
      html += '<div class="resume-section"><h3>⚡ Skills</h3><div class="skills-grid">';
      skills.forEach(skill => {
        html += `<span class="skill-tag">${skill}</span>`;
      });
      html += '</div></div>';
    }

    if (experience) {
      html += '<div class="resume-section"><h3>💼 Experience</h3>';
      experience.forEach(exp => {
        html += `<div class="exp-item">
          <strong>${exp.title}</strong> @ ${exp.company}
          <p style="color:#666;font-size:12px;margin:2px 0">${exp.duration}</p>
          <p style="margin:4px 0;font-size:13px">${exp.description}</p>
        </div>`;
      });
      html += '</div>';
    }

    resumeSection.innerHTML = html;
  }
}

// ===== BACKGROUND ANIMATION =====
class BackgroundEffect {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.init();
  }

  init() {
    this.canvas = document.getElementById('bgCanvas');
    if (!this.canvas) {
      const canvas = document.createElement('canvas');
      canvas.id = 'bgCanvas';
      canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:-1;';
      document.body.appendChild(canvas);
      this.canvas = canvas;
    }

    this.ctx = this.canvas.getContext('2d');
    this.resize();
    this.createParticles();
    this.animate();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    for (let i = 0; i < 50; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  animate() {
    // Dark gradient background
    const gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
    gradient.addColorStop(0, '#0a0e27');
    gradient.addColorStop(0.5, '#1a1f3a');
    gradient.addColorStop(1, '#0f1629');
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw grid lines
    this.ctx.strokeStyle = 'rgba(11, 102, 195, 0.1)';
    this.ctx.lineWidth = 0.5;
    for (let i = 0; i < this.canvas.width; i += 50) {
      this.ctx.beginPath();
      this.ctx.moveTo(i, 0);
      this.ctx.lineTo(i, this.canvas.height);
      this.ctx.stroke();
    }
    for (let i = 0; i < this.canvas.height; i += 50) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, i);
      this.ctx.lineTo(this.canvas.width, i);
      this.ctx.stroke();
    }

    // Draw particles
    this.particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > this.canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.speedY *= -1;

      this.ctx.fillStyle = `rgba(11, 102, 195, ${p.opacity})`;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
    });

    requestAnimationFrame(() => this.animate());
  }
}

// ===== CONTACT AUTHENTICATION =====
class ContactAuth {
  constructor() {
    this.PASSWORD = 'contact@UgantSharma';
    this.init();
  }

  init() {
    const revealBtn = document.getElementById('revealBtn');
    const authModal = document.getElementById('authModal');
    const closeModal = document.getElementById('closeModal');
    const passwordInput = document.getElementById('passwordInput');
    const verifyBtn = document.getElementById('verifyBtn');
    const contactSection = document.getElementById('contact');
    const errorMsg = document.getElementById('errorMsg');

    revealBtn?.addEventListener('click', () => {
      authModal.classList.add('show');
      passwordInput.focus();
    });

    closeModal?.addEventListener('click', () => {
      authModal.classList.remove('show');
      passwordInput.value = '';
      errorMsg.style.display = 'none';
    });

    authModal?.addEventListener('click', (e) => {
      if (e.target === authModal) {
        authModal.classList.remove('show');
        passwordInput.value = '';
        errorMsg.style.display = 'none';
      }
    });

    verifyBtn?.addEventListener('click', () => {
      if (passwordInput.value === this.PASSWORD) {
        contactSection.classList.add('revealed');
        authModal.classList.remove('show');
        revealBtn.style.display = 'none';
        errorMsg.style.display = 'none';
      } else {
        errorMsg.style.display = 'block';
        passwordInput.value = '';
        passwordInput.focus();
      }
    });

    passwordInput?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') verifyBtn.click();
    });
  }
}

// ===== SCROLL ANIMATIONS =====
class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .project').forEach(el => {
      observer.observe(el);
    });
  }
}

// ===== GLITCH EFFECT ON HOVER =====
class GlitchEffect {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mouseenter', (e) => {
        e.target.classList.add('glitch');
      });
      card.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('glitch');
      });
    });
  }
}

// ===== INITIALIZE ALL FEATURES =====
document.addEventListener('DOMContentLoaded', () => {
  new BackgroundEffect();
  new ContactAuth();
  new ScrollAnimations();
  new GlitchEffect();
  new ResumeManager();
});
