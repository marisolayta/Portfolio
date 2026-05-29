import { useState } from 'react';
import { profile } from '../data/portfolio';
import { useTypewriter } from '../hooks/useTypewriter';
import ConnectModal from './ConnectModal';
import ProfileCute from './ProfileCute';
import './Hero.css';

export default function Hero() {
  const typedRole = useTypewriter(profile.roles);
  const [connectOpen, setConnectOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const nameParts = profile.name.trim().split(/\s+/);
  const firstName = nameParts[0] ?? profile.shortName;
  const lastName = nameParts.slice(1).join(' ') || '';

  return (
    <>
      <section id="home" className="hero">
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <div className="hero__glow hero__glow--2" aria-hidden="true" />

        <div className="container container--hero hero__grid">
          <div className="hero__visual">
            <ProfileCute />
          </div>

          <div className="hero__content">
            <p className="hero__greeting">Hello, I&apos;m</p>
            <h1 className="hero__name">
              <span>{firstName}</span>
              {lastName && <span className="hero__name--accent">{lastName}</span>}
            </h1>
            <h2 className="hero__role">
              And I&apos;m a <span className="text-accent">{typedRole}</span>
              <span className="hero__cursor">|</span>
            </h2>
            <p className="hero__bio">{profile.heroIntro}</p>

            <div className="hero__cta">
              <button type="button" className="btn btn--primary" onClick={() => setConnectOpen(true)}>
                Say Hello
              </button>
              <button type="button" className="btn btn--outline" onClick={() => scrollTo('about')}>
                About Me
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConnectModal isOpen={connectOpen} onClose={() => setConnectOpen(false)} />
    </>
  );
}
