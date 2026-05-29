import { education } from '../data/portfolio';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section__title">
          <span className="text-accent">Education</span>
        </h2>
        <p className="section__subtitle">My academic journey</p>

        <div className="education__list">
          {education.map((item) => (
            <article key={item.level} className="education__card card">
              <h3>{item.level}</h3>
              <p className="education__school">{item.school}</p>
              {item.course && <p className="education__course">{item.course}</p>}
              <time>{item.year}</time>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
