import { profile } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
