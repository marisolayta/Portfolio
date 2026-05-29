import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks, profile } from '../data/portfolio';
import { useScrollSpy } from '../hooks/useScrollSpy';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar({ theme, onToggleTheme }) {
  const active = useScrollSpy(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
        >
          {profile.shortName}
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`} aria-label="Main">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={active === link.id ? 'active' : ''}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="navbar__burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <button
        type="button"
        className={`navbar__backdrop ${menuOpen ? 'navbar__backdrop--visible' : ''}`}
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />
    </header>
  );
}
