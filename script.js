* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

body {
  background: #0f172a;
  color: #ffffff;
  min-height: 100vh;
}

/* NAVBAR */
header {
  background: rgba(15, 23, 42, 0.95);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.navbar {
  max-width: 1200px;
  margin: auto;
  padding: 18px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 28px;
  font-weight: bold;
}

.logo span {
  color: #38bdf8;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.nav-links button {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 15px;
  padding: 10px 14px;
  border-radius: 25px;
  transition: 0.3s ease;
}

.nav-links button:hover {
  background: linear-gradient(135deg, #38bdf8, #a78bfa);
  color: #0f172a;
  transform: translateY(-3px);
}

/* PAGES */
main {
  max-width: 1200px;
  margin: auto;
  padding: 50px 30px;
}

.page {
  display: none;
  animation: fadeIn 0.6s ease;
}

.page.active {
  display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-title {
  font-size: 38px;
  margin-bottom: 30px;
  text-align: center;
  background: linear-gradient(135deg, #38bdf8, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* HERO */
.hero {
  min-height: 70vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 35px;
  align-items: center;
}

.hero-text .intro {
  color: #38bdf8;
  font-size: 20px;
  margin-bottom: 10px;
}

.hero-text h1 {
  font-size: 58px;
  margin-bottom: 10px;
}

.hero-text h2 {
  font-size: 24px;
  color: #cbd5e1;
  margin-bottom: 20px;
}

.hero-text p {
  color: #cbd5e1;
  line-height: 1.7;
  max-width: 650px;
}

.hero-buttons {
  margin-top: 30px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

/* BUTTONS */
.main-btn,
.outline-btn,
.project-btn {
  padding: 13px 22px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: 0.3s ease;
}

.main-btn {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
}

.main-btn:hover {
  background: linear-gradient(135deg, #38bdf8, #c084fc);
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 12px 25px rgba(56, 189, 248, 0.3);
}

.outline-btn {
  background: transparent;
  color: white;
  border: 2px solid #38bdf8;
}

.outline-btn:hover {
  background: linear-gradient(135deg, #38bdf8, #a78bfa);
  color: #0f172a;
  transform: translateY(-4px);
}

/* CARDS */
.hero-card,
.content-card,
.project-card,
.timeline-item,
.goal-card,
.contact-info,
.contact-form {
  background: rgba(30, 41, 59, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 22px;
  padding: 28px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
  transition: 0.3s ease;
}

.hero-card:hover,
.project-card:hover,
.timeline-item:hover,
.goal-card:hover,
.content-card:hover {
  transform: translateY(-8px);
  border-color: #38bdf8;
}

.hero-card h3 {
  margin-bottom: 20px;
  color: #38bdf8;
}

.hero-card p {
  margin: 12px 0;
  background: rgba(56, 189, 248, 0.1);
  padding: 12px;
  border-radius: 12px;
}

/* ABOUT */
.content-card p {
  color: #cbd5e1;
  line-height: 1.8;
  margin-bottom: 15px;
}

.skills-grid {
  margin-top: 35px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 18px;
}

.skill {
  background: linear-gradient(135deg, #1e293b, #334155);
  text-align: center;
  padding: 18px;
  border-radius: 18px;
  transition: 0.3s ease;
  border: 1px solid rgba(56, 189, 248, 0.2);
}

.skill:hover {
  background: linear-gradient(135deg, #38bdf8, #a78bfa);
  color: #0f172a;
  transform: scale(1.05);
}

/* PROJECTS */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
}

.project-card h3 {
  color: #38bdf8;
  margin-bottom: 15px;
}

.project-card p {
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 18px;
}

.project-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.project-tags span {
  background: rgba(56, 189, 248, 0.12);
  color: #38bdf8;
  padding: 7px 12px;
  border-radius: 20px;
  font-size: 13px;
}

.project-btn {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
}

.project-btn:hover {
  background: linear-gradient(135deg, #38bdf8, #c084fc);
  color: #0f172a;
  transform: translateY(-3px);
}

/* QUALIFICATIONS */
.timeline {
  display: grid;
  gap: 22px;
}

.timeline-item {
  border-left: 5px solid #38bdf8;
}

.timeline-item h3 {
  color: #ffffff;
  margin-bottom: 8px;
}

.timeline-item p {
  color: #cbd5e1;
}

/* GOALS */
.goals-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
}

.goal-card h3 {
  color: #38bdf8;
  margin-bottom: 12px;
}

.goal-card p {
  color: #cbd5e1;
  line-height: 1.7;
}

/* CONTACT */
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.contact-info h3 {
  color: #38bdf8;
  margin-bottom: 20px;
}

.contact-info p {
  margin-bottom: 14px;
  color: #cbd5e1;
}

.contact-info a {
  color: #38bdf8;
  text-decoration: none;
}

.contact-info a:hover {
  color: #c084fc;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form input,
.contact-form textarea {
  padding: 14px;
  border-radius: 12px;
  border: none;
  outline: none;
  background: #0f172a;
  color: white;
  border: 1px solid rgba(148, 163, 184, 0.3);
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #38bdf8;
}

.contact-form textarea {
  min-height: 130px;
  resize: none;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 25px;
  color: #94a3b8;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
}

/* RESPONSIVE */
@media (max-width: 850px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .hero-text h1 {
    font-size: 42px;
  }

  .contact-container {
    grid-template-columns: 1fr;
  }

  .navbar {
    flex-direction: column;
    gap: 18px;
  }

  .nav-links {
    justify-content: center;
  }
}
