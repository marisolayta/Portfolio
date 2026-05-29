import { useState } from 'react';
import { profile } from '../data/portfolio';
import './ProfileCute.css';

const ORNAMENTS = 12;

export default function ProfileCute() {
  const [src, setSrc] = useState(`${import.meta.env.BASE_URL}profile.png`);

  return (
    <div className="profile-cute" aria-label="Profile photo">
      <div className="profile-cute__aura" aria-hidden="true" />

      <svg className="profile-cute__svg" viewBox="0 0 400 400" aria-hidden="true">
        <defs>
          <linearGradient id="profile-neon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-soft)" />
            <stop offset="50%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-bright)" />
          </linearGradient>
          <filter id="profile-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          className="profile-cute__svg-ring profile-cute__svg-ring--outer"
          cx="200"
          cy="200"
          r="188"
          fill="none"
          stroke="url(#profile-neon)"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          opacity="0.5"
        />
        <circle
          className="profile-cute__svg-ring profile-cute__svg-ring--mid"
          cx="200"
          cy="200"
          r="172"
          fill="none"
          stroke="url(#profile-neon)"
          strokeWidth="2"
          strokeDasharray="2 14"
          opacity="0.7"
        />

        {Array.from({ length: ORNAMENTS }, (_, i) => {
          const angle = (i * 360) / ORNAMENTS - 90;
          const rad = (angle * Math.PI) / 180;
          const cx = 200 + 178 * Math.cos(rad);
          const cy = 200 + 178 * Math.sin(rad);
          const isDiamond = i % 3 === 0;
          return (
            <g key={i} transform={`translate(${cx}, ${cy}) rotate(${angle + 90})`}>
              {isDiamond ? (
                <polygon
                  className="profile-cute__gem"
                  points="0,-6 5,0 0,6 -5,0"
                  fill="var(--accent-soft)"
                />
              ) : (
                <circle className="profile-cute__pearl" r="3" cx="0" cy="0" />
              )}
            </g>
          );
        })}
      </svg>

      <div className="profile-cute__bow" aria-hidden="true">
        <span className="profile-cute__bow-loop profile-cute__bow-loop--left" />
        <span className="profile-cute__bow-loop profile-cute__bow-loop--right" />
        <span className="profile-cute__bow-knot" />
        <span className="profile-cute__bow-tail profile-cute__bow-tail--left" />
        <span className="profile-cute__bow-tail profile-cute__bow-tail--right" />
      </div>

      <div className="profile-cute__scallop" aria-hidden="true" />

      <div className="profile-cute__frame">
        <div className="profile-cute__ring">
          <div className="profile-cute__ring-inner" />
          <img
            className="profile-cute__photo"
            src={src}
            alt={profile.name}
            onError={() => setSrc(`${import.meta.env.BASE_URL}profile.svg`)}
          />
        </div>
      </div>

      <div className="profile-cute__sparkles" aria-hidden="true">
        <span className="profile-cute__sparkle profile-cute__sparkle--1" />
        <span className="profile-cute__sparkle profile-cute__sparkle--2" />
        <span className="profile-cute__sparkle profile-cute__sparkle--3" />
        <span className="profile-cute__sparkle profile-cute__sparkle--4" />
      </div>
    </div>
  );
}
