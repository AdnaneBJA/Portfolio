import React, { useState } from "react";
import { FiArrowUpRight, FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import resume from "./Assets/Resume_Adnane_Bejja.pdf";
import "./App.css";

const github = "https://github.com/AdnaneBJA";
const linkedin = "https://www.linkedin.com/in/adnane-bejja-112398327/";
const projects = [
  { name: "SoccerVision", category: "01 / COMPUTER VISION", description: "A soccer analysis project that follows the action in a match. It detects players, the ball, referees, and goalkeepers, keeps track of everyone with persistent IDs, identifies teams, and maps player trajectories.", tags: ["Python", "PyTorch", "OpenCV", "YOLO", "ByteTrack", "CUDA"], repo: "soccer-vision", visual: "soccer", art: "SOCCER\nVISION", caption: "TRACK. ANALYZE. UNDERSTAND." },
  { name: "GunWest", category: "02 / MULTIPLAYER GAME", description: "A 2D multiplayer game built from scratch in Java. It features custom physics, custom rendering, and real-time gameplay, and was made during ConUHacks.", tags: ["Java", "Multiplayer", "Game development"], repo: "GunWest", visual: "western", label: "Beenox challenge winner", art: "GUNWEST", caption: "PLAYER 01 · READY" },
  { name: "UltimateWebsite", category: "03 / WEB ARCADE", description: "A home for classic games, including chess with complete rule enforcement, move validation, and checkmate detection, alongside games like Tetris.", tags: ["JavaScript", "HTML / CSS", "Game logic"], repo: "UltimateWebsite", visual: "arcade", art: "♜ ♞ ♝ ♛", caption: "YOUR NEXT MOVE." },
  { name: "Pig Game", category: "04 / BROWSER GAME", description: "A two-player dice game about knowing when to take a chance. Roll, hold, and race to 100 with a little strategy and a little luck.", tags: ["JavaScript", "HTML / CSS", "Interactive UI"], repo: "Pig-Game", visual: "dice", art: "⚄", caption: "ROLL. HOLD. REPEAT." },
];
function ExternalLink({ href, children, ...props }) {
  return <a href={href} target="_blank" rel="noreferrer" {...props}>{children}</a>;
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="shell header-inner">
      <a className="wordmark" href="#home" aria-label="Adnane Bejja home">ab<span>_</span></a>
      <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX /> : <FiMenu />}</button>
      <nav id="navigation" className={menuOpen ? "navigation is-open" : "navigation"} aria-label="Main navigation">
        <a href="#about" onClick={() => setMenuOpen(false)}><span>01</span> about</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}><span>02</span> projects</a>
        <a href="#resume" onClick={() => setMenuOpen(false)}><span>03</span> résumé</a>
        <ExternalLink className="nav-contact" href={linkedin}>let’s connect <FiArrowUpRight /></ExternalLink>
      </nav>
    </div></header>
    <main id="main" className="shell">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEERING · MONTRÉAL, CA</p>
          <h1 id="hero-title">Hi, I’m Adnane<span className="accent">.</span><br />I like to build<br /><span className="muted-title">things that work.</span></h1>
          <p className="hero-description">Software engineering student at Concordia.<br className="desktop-break" /> Curious about systems. Thoughtful about the details.<br className="desktop-break" /> Always working on the next idea.</p>
          <div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work <FiArrowDown /></a><a className="text-link" href={resume} target="_blank" rel="noreferrer">View résumé <FiArrowUpRight /></a></div>
          <div className="social-links"><ExternalLink href={github}><FiGithub /> GitHub <FiArrowUpRight /></ExternalLink><ExternalLink href={linkedin}><FiLinkedin /> LinkedIn <FiArrowUpRight /></ExternalLink></div>
        </div>
        <div className="terminal-wrap"><div className="terminal" aria-label="A terminal-style introduction to Adnane">
          <div className="terminal-bar"><div className="window-dots" aria-hidden="true"><i /><i /><i /></div><span>adnane@portfolio: ~</span><span className="terminal-shell">zsh</span></div>
          <div className="terminal-body">
            <p className="command"><span>~ $</span> whoami</p>
            <p className="terminal-answer">Adnane Bejja<br /><span>Software engineering student & builder</span></p>
            <p className="command"><span>~ $</span> cat interests.txt</p>
            <ul className="terminal-list"><li>Backend & distributed systems</li><li>Full-stack development</li><li>Embedded systems & machine learning</li></ul>
            <p className="command"><span>~ $</span> echo $APPROACH</p>
            <p className="terminal-quote">“Understand it. Build it. Make it better.”</p>
            <p className="command terminal-prompt" aria-hidden="true"><span>~ $</span><span className="cursor" /></p>
          </div>
          <div className="terminal-status"><span><span className="status-dot" /> learning by building</span><span>UTF-8</span></div>
        </div><p className="terminal-note">{"// a little curiosity goes a long way"}</p></div>
      </section>
      <div className="stack-strip"><span>MY EVERYDAY TOOLKIT</span><div>Java <i>/</i> Python <i>/</i> C / C++ <i>/</i> JavaScript <i>/</i> Spring Boot</div></div>
      <section id="about" className="section about-section" aria-labelledby="about-title">
        <div className="section-heading"><p className="eyebrow">01 / ABOUT ME</p><h2 id="about-title">Curiosity, meet code<span className="accent">.</span></h2></div>
        <div className="about-grid"><div className="about-copy"><p>I’m Adnane, a software engineering student at <strong>Concordia University</strong>, based in Montréal, Canada.</p><p>I enjoy understanding how things work, then building something of my own. That takes me from backend services with Spring Boot to responsive interfaces, with a growing interest in embedded systems and machine learning.</p><p>My favorite part? Connecting the theory to something you can actually use.</p></div><div className="about-details"><div><span>01</span><p><strong>Build from the ground up</strong>Custom game engines, backend services, and the details in between.</p></div><div><span>02</span><p><strong>Keep exploring</strong>Distributed systems, embedded platforms, and machine learning.</p></div><div><span>03</span><p><strong>Learn by doing</strong>From university coursework to building under a hackathon deadline.</p></div></div></div>
      </section>
      <section id="projects" className="section projects-section" aria-labelledby="projects-title">
        <div className="projects-heading"><div className="section-heading"><p className="eyebrow">02 / SELECTED WORK</p><h2 id="projects-title">Built to learn. Made to play<span className="accent">.</span></h2></div><ExternalLink className="text-link" href={github}>All repositories <FiArrowUpRight /></ExternalLink></div>
        <div className="project-grid">{projects.map(project => <article className="project-card" key={project.repo}>
          <div className={`project-visual ${project.visual}`} aria-hidden="true"><span className="visual-top">{project.category}</span><div className="project-art">{project.art}</div><span className="visual-caption">{project.caption}</span></div>
          <div className="project-content">{project.label && <span className="award">★ {project.label}</span>}<h3><ExternalLink href={`${github}/${project.repo}`}>{project.name}<FiArrowUpRight /></ExternalLink></h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><ExternalLink className="project-source" href={`${github}/${project.repo}`}><FiGithub /> View source <FiArrowUpRight /></ExternalLink></div>
        </article>)}</div>
      </section>
      <section id="resume" className="resume-section" aria-labelledby="resume-title"><div><p className="eyebrow">03 / WHAT’S NEXT</p><h2 id="resume-title">Let’s build something good<span className="accent">.</span></h2><p>Have an interesting project or just want to say hello?<br />I’d love to connect.</p><ExternalLink className="button button-dark" href={linkedin}>Get in touch <FiArrowUpRight /></ExternalLink></div><div className="resume-file"><span className="file-icon" aria-hidden="true">[pdf]</span><h3>Adnane_Bejja.pdf</h3><p>A little more about my background,<br />experience, and skills.</p><a className="text-link" href={resume} download="Adnane_Bejja_Resume.pdf">Download résumé <FiDownload /></a></div></section>
    </main>
    <footer className="shell footer"><a className="wordmark" href="#home">ab<span>_</span></a><p>© {new Date().getFullYear()} Adnane Bejja <span>·</span> Built with care & curiosity.</p><a className="text-link" href="#home">Back to top ↑</a></footer>
  </>;
}
export default App;
