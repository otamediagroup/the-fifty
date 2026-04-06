'use client';

import { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function LazyImage({ src, alt, className, width, height }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  const retryCount = useRef(0);
  const maxRetries = 3;

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleError = () => {
    if (retryCount.current < maxRetries) {
      retryCount.current++;
      // Retry with exponential backoff
      setTimeout(() => {
        setError(false);
      }, retryCount.current * 2000);
    } else {
      setError(true);
    }
  };

  return (
    <div ref={imgRef} className={className} style={{ width, height }}>
      {inView && !error && (
        <img
          src={src}
          alt={alt}
          className={className}
          width={width}
          height={height}
          onLoad={() => setLoaded(true)}
          onError={handleError}
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s' }}
        />
      )}
      {(!inView || (!loaded && !error)) && (
        <div
          className="bg-gray-200 animate-pulse"
          style={{ width: width || '100%', height: height || '100%' }}
        />
      )}
      {error && (
        <div
          className="bg-gray-300 flex items-center justify-center text-gray-500 text-sm"
          style={{ width: width || '100%', height: height || '100%' }}
        >
          {alt}
        </div>
      )}
    </div>
  );
}
