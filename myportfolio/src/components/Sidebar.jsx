// src/components/Sidebar.jsx

export default function Sidebar() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sidebar">
      <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>home</a>
      <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>about</a>
      <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>projects</a>
      <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>contact</a>
    </div>
  );
}

