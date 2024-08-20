import React, { useRef, useState, useEffect, Suspense, useCallback } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline/next'));

export default function Splines() {
  const [isVisible, setIsVisible] = useState(false);
  const splineRef = useRef(null);

  const handleIntersection = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 0,
    });

    if (splineRef.current) {
      observer.observe(splineRef.current);
    }

    return () => {
      if (splineRef.current) {
        observer.unobserve(splineRef.current);
      }
    };
  }, [handleIntersection]);

  return (
    <main>
      <div ref={splineRef}>
        {isVisible && (
          <Suspense fallback={<div>Loading...</div>}>
            <Spline scene="https://prod.spline.design/qFvhcvppGKnGAr9C/scene.splinecode" />
          </Suspense>
        )}
      </div>
    </main>
  );
}