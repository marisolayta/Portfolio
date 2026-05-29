import { SiCss, SiHtml5, SiJavascript } from 'react-icons/si';
import { skills } from '../data/portfolio';
import './Skills.css';

const iconMap = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section__title">
          My <span className="text-accent">Skills</span>
        </h2>
        <p className="section__subtitle">Things I&apos;m learning and growing in</p>

        <div className="skills__grid">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <article key={skill.name} className="skills__card">
                <div className="skills__icon-wrap">
                  {Icon && <Icon className="skills__icon" aria-hidden />}
                </div>
                <h3>{skill.name}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
