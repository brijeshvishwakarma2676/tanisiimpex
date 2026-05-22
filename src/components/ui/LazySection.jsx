import React, { useState, useEffect, useRef, Suspense } from 'react';

export default function LazySection({ children, minHeight = '100vh', rootMargin = '400px' }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: isInView ? 'auto' : minHeight }} className="w-full relative">
      {isInView ? (
        <Suspense fallback={<div style={{ minHeight }} className="w-full animate-pulse bg-white/5" />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
}
