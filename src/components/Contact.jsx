import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import { profile } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section__title">
          Contact <span className="text-accent">Me</span>
        </h2>
        <p className="section__subtitle">I&apos;d love to hear from you</p>

        <div className="contact__grid">
          <a href={`tel:${profile.phone}`} className="contact__card card">
            <HiPhone className="contact__icon" />
            <h3>Phone</h3>
            <p>{profile.phoneDisplay}</p>
          </a>
          <a href={`mailto:${profile.email}`} className="contact__card card">
            <HiMail className="contact__icon" />
            <h3>Email</h3>
            <p>{profile.email}</p>
          </a>
          <div className="contact__card contact__card--static card">
            <HiLocationMarker className="contact__icon" />
            <h3>Location</h3>
            <p>{profile.location}</p>
          </div>
        </div>

        <div className="contact__social">
          <a href={profile.social.facebook} target="_blank" rel="noreferrer">
            <FaFacebookF /> Facebook
          </a>
          <a href={profile.social.instagram} target="_blank" rel="noreferrer">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
