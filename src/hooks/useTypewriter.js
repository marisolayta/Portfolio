import { useEffect, useState } from 'react';

export function useTypewriter(words, typingSpeed = 100, deletingSpeed = 60, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      const next = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);
      timeout = setTimeout(() => setText(next), isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}
