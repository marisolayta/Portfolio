import { personalInfo, profile, softSkills } from '../data/portfolio';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section__title section__title--spaced">
          About <span className="text-accent">Me</span>
        </h2>

        <div className="about__grid">
          <article className="about__card card">
            <h3>Who I am</h3>
            <div className="about__bio">
              {profile.aboutBio.map((paragraph) => (
                <p key={paragraph.slice(0, 28)}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="about__card card">
            <h3>Personal Information</h3>
            <dl className="about__list">
              {personalInfo.map((item) => (
                <div key={item.label} className="about__row">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="about__soft">
              <h4>Soft Skills</h4>
              <ul>
                {softSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
