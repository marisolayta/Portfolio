import { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { projects } from '../data/portfolio';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section__title">
            My <span className="text-accent">Projects</span>
          </h2>
          <p className="section__subtitle">School work and personal creations</p>

          {projects.length === 0 ? (
            <div className="projects__empty card">
              <p>Projects will show up here once you add them in</p>
              <code>src/data/portfolio.js</code>
            </div>
          ) : (
            <div className="projects__grid">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  className="projects__card"
                  onClick={() => setActiveProject(project)}
                >
                  <span className="projects__tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  <span className="projects__cta">
                    View details <HiArrowRight aria-hidden />
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
