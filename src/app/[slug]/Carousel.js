"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Carousel({ slides, waitForVideo = false, durations = null }) {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  if (!slides || slides.length === 0) return null;

  const isOnlyVimeo = slides.length === 1 && slides[0].type === 'vimeo';
  const slide = slides[current];

  useEffect(() => {
    if (isOnlyVimeo || slides.length === 1) return;
    if (waitForVideo && slide.type === 'video') return;
    const duration = durations ? durations[current] : 3000;
    const timer = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [current, slides.length, isOnlyVimeo, slide.type, waitForVideo, durations]);

  const handleVideoEnded = () => {
    if (waitForVideo) setCurrent((c) => (c + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3/2' }}>
      {slide.type === 'image' && (
        <Image
          src={slide.src}
          alt={slide.alt || ''}
          fill
          className="object-cover"
          priority={current === 0}
        />
      )}

      {slide.type === 'video' && (
        <video
          ref={videoRef}
          autoPlay
          loop={!waitForVideo}
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          key={slide.src}
          onEnded={handleVideoEnded}
        >
          <source src={slide.src} type="video/mp4" />
        </video>
      )}

      {slide.type === 'vimeo' && (
        <iframe
          src={slide.src}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={slide.alt || 'Video'}
        />
      )}
    </div>
  );
}
