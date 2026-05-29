import { HiMoon, HiSun } from 'react-icons/hi';
import './ThemeToggle.css';

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <HiSun /> : <HiMoon />}
    </button>
  );
}
