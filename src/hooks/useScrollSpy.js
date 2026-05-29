import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] ?? 'home');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const visible = new Map(sectionIds.map((id) => [id, 0]));

    const pickActive = () => {
      if (window.scrollY < 60) {
        setActive(sectionIds[0]);
        return;
      }

      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;

      if (nearBottom) {
        setActive(sectionIds[sectionIds.length - 1]);
        return;
      }

      const viewportAnchor = window.scrollY + window.innerHeight * 0.35;
      let bestId = sectionIds[0];
      let bestScore = -Infinity;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        const ratio = visible.get(id) ?? 0;

        if (viewportAnchor >= top && viewportAnchor < bottom) {
          setActive(id);
          return;
        }

        const dist = Math.abs(viewportAnchor - (top + el.offsetHeight / 2));
        const score = ratio * 1000 - dist;
        if (score > bestScore) {
          bestScore = score;
          bestId = id;
        }
      }

      setActive(bestId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.set(entry.target.id, entry.intersectionRatio);
        });
        pickActive();
      },
      {
        root: null,
        rootMargin: '-72px 0px -45% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    window.addEventListener('scroll', pickActive, { passive: true });
    window.addEventListener('resize', pickActive);
    pickActive();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', pickActive);
      window.removeEventListener('resize', pickActive);
    };
  }, [sectionIds]);

  return active;
}
