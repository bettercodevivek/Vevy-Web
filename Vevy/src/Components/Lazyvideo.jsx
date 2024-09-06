// src/LazyVideo.jsx
import React, { useState, useEffect } from 'react';

const LazyVideo = ({ src, className, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = React.createRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef]);

  return (
    <div className="relative pb-9/16" ref={videoRef}>
      {isVisible && (
        <video autoPlay loop muted className={className} {...props}>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default LazyVideo;
