import { useEffect, useState } from "react";
import profile from "./data/profile.js";
import Intro from "./components/Intro.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Timeline from "./components/Timeline.jsx";
import Contact from "./components/Contact.jsx";

function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "light");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch (e) { /* stockage indisponible */ }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

export default function App() {
  const [theme, toggle] = useTheme();
  const { contact } = profile;
  return (
    <>
      <header className="top">
        <div className="col bar">
          <a className="brand" href="#top">{profile.name}</a>
          <div className="icons">
            {contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
            {contact.github && <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>}
            <button type="button" onClick={toggle} aria-label="Changer de thème">{theme === "dark" ? "☀️" : "🌙"}</button>
          </div>
        </div>
        <nav className="col menu" aria-label="Navigation principale">
          <a href="#top">Accueil</a>
          <a href="#projets">Projets</a>
          <a href="#competences">Compétences</a>
          <a href="#parcours">Parcours</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className="col" id="top">
        <Intro profile={profile} />
        <Projects projects={profile.projects} />
        <Skills skills={profile.skills} languages={profile.languages} />
        <Timeline id="parcours" title="Expérience" items={profile.experience} />
        <Timeline title="Formation" items={profile.education} />
        <Contact contact={contact} />
      </main>
      <footer className="col">© 2025–{new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
