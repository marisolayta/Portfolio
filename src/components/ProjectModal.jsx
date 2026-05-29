import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HiExternalLink, HiX } from 'react-icons/hi';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

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
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <button type="button" className="project-modal__backdrop" onClick={onClose} aria-label="Close" />
      <div className="project-modal__panel">
        <button type="button" className="project-modal__close" onClick={onClose} aria-label="Close">
          <HiX />
        </button>

        <span className="project-modal__tag">{project.tag}</span>
        <h2 id="project-modal-title" className="project-modal__title">
          {project.title}
        </h2>
        <p className="project-modal__desc">{project.description}</p>

        {project.tech?.length > 0 && (
          <ul className="project-modal__tech">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary project-modal__link"
          >
            {project.linkLabel || 'View project'}
            <HiExternalLink aria-hidden />
          </a>
        )}
      </div>
    </div>,
    document.body
  );
}
