import { useEffect, useRef } from 'react';

export const useReveal = () => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      element.classList.add('in');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.12, 
        rootMargin: '0px 0px -40px 0px' 
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return ref;
};