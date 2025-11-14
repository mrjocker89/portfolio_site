# 🎮 Ugant Kumar - Modern Gaming/Hacker Portfolio

## 🚀 Features

### 1. **Modern Dark Gaming Aesthetic**
- Cyberpunk-themed design with cyan/purple neon colors
- Animated particle background with grid effect
- Glassmorphism effects with backdrop blur
- Smooth scroll behavior and hover animations

### 2. **Dynamic Resume System**
- **No more manual updates!** Just edit `resume-data.json`
- Site content automatically syncs with resume data
- Skills displayed as neon tags
- Experience and projects auto-populated
- PDF/DOCX files kept private (not exposed in UI)

### 3. **Smart Contact Protection**
- Contact info hidden by default
- Password-protected reveal modal
- Only shows when password verified
- Prevents scraping and spam

### 4. **Advanced Animations**
- Glitch effect on card hover
- Fade-in animations as you scroll
- Parallax particle background
- Neon glow effects
- Smooth transitions everywhere

### 5. **Hacker/Developer Theme**
- Monospace fonts (Courier New, JetBrains Mono)
- Terminal-like aesthetics
- Neon cyan (#00d9ff) primary color
- Purple accents (#a855f7)
- Neon green highlights (#39ff14)

---

## 📋 How to Use

### **Update Your Resume Content:**
Edit `resume-data.json` and the site will automatically update:
```json
{
  "skills": ["Add", "Your", "Skills"],
  "experience": [
    {
      "title": "Job Title",
      "company": "Company",
      "duration": "2024 - Present",
      "description": "Your description"
    }
  ],
  "projects": [...]
}
```

### **Change Contact Password:**
Edit `script.js` line ~140:
```javascript
this.PASSWORD = 'your-secure-password-here';
```

---

## 📁 File Structure

```
portfolio_site/
├── index.html              # Main HTML (updated with modern theme)
├── styles.css              # Modern cyberpunk styling
├── script.js               # NEW: JavaScript for all features
├── resume-data.json        # NEW: Dynamic resume content
├── headshot.png            # Your profile photo
├── Ugant_Resume_Professional.pdf  # Hidden from UI
└── Ugant_Resume_Professional.docx # Hidden from UI
```

---

## 🎨 Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| Cyan | `#00d9ff` | Primary accent, glows |
| Purple | `#a855f7` | Secondary accent |
| Neon Green | `#39ff14` | Highlights, headings |
| Dark BG | `#0a0e27` | Main background |

---

## 🔧 Customization Tips

1. **Change neon colors**: Edit CSS variables in `:root`
2. **Adjust particle speed**: Modify `script.js` `BackgroundEffect` class
3. **Add more sections**: Update `index.html` and apply `.card` class
4. **Modify animations**: Edit `@keyframes` in `styles.css`

---

## 🚀 Deployment

Works on any static host (GitHub Pages, Netlify, Vercel, etc.)
No server-side processing needed!

---

*Built with modern web standards • Fully responsive • Dark mode optimized* 🌙✨
