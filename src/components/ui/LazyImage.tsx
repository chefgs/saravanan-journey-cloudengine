"use client";

import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export default function LazyImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  priority = false,
  ...props
}: LazyImageProps) {
  // If priority is true, render immediately loaded so above-the-fold never hides
  const [isLoaded, setIsLoaded] = useState(priority);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if browser already loaded image from cache
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }

    if (priority) {
      setIsInView(true);
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "250px 0px", // Pre-fetch 250px before entering viewport when scrolling up or down
        threshold: 0.05
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority, isInView]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-slate-900/40 ${containerClassName}`}
    >
      {/* Subtle skeleton shimmer pulse while waiting for image view / load */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-slate-800/50 to-slate-900/30 animate-pulse" />
      )}

      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`transition-all duration-700 ease-out ${
            isLoaded
              ? "opacity-100 scale-100 blur-0"
              : "opacity-0 scale-105 blur-sm"
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
}
