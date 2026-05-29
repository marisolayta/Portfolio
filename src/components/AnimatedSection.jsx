import { useReveal } from '../hooks/useReveal';
import './AnimatedSection.css';

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}
