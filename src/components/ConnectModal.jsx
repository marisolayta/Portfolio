import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { HiLocationMarker, HiMail, HiPhone, HiX } from 'react-icons/hi';
import { profile } from '../data/portfolio';
import './ConnectModal.css';

export default function ConnectModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="connect-modal" role="dialog" aria-modal="true" aria-labelledby="connect-modal-title">
      <button type="button" className="connect-modal__backdrop" onClick={onClose} aria-label="Close" />
      <div className="connect-modal__panel">
        <button type="button" className="connect-modal__close" onClick={onClose} aria-label="Close">
          <HiX />
        </button>

        <h2 id="connect-modal-title" className="connect-modal__title">
          Let&apos;s <span className="text-accent">Connect</span>
        </h2>
        <p className="connect-modal__subtitle">Feel free to reach out anytime.</p>

        <ul className="connect-modal__contacts">
          <li>
            <a href={`mailto:${profile.email}`}>
              <HiMail aria-hidden />
              <span>
                <strong>Email</strong>
                {profile.email}
              </span>
            </a>
          </li>
          <li>
            <a href={`tel:${profile.phone}`}>
              <HiPhone aria-hidden />
              <span>
                <strong>Phone</strong>
                {profile.phoneDisplay}
              </span>
            </a>
          </li>
          <li>
            <div className="connect-modal__static">
              <HiLocationMarker aria-hidden />
              <span>
                <strong>Location</strong>
                {profile.location}
              </span>
            </div>
          </li>
        </ul>

        <div className="connect-modal__social">
          <p>Follow me</p>
          <div className="connect-modal__social-links">
            <a href={profile.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href={profile.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <button type="button" className="btn btn--primary connect-modal__cta" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}
