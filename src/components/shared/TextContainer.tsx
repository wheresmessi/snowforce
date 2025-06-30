import React, { useRef, useEffect } from 'react';

interface TextContainerProps {
  children: React.ReactNode;
}

const TextContainer: React.FC<TextContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="relative pl-8" ref={containerRef}>
      <div 
        className="absolute left-0 top-0 h-full"
        style={{ 
          backgroundColor: '#EA762C',
          width: '2px'
        }}
      />
      <div
        className="absolute left-[-2px] w-[6px] h-[50px]"
        style={{
          backgroundColor: '#EA762C',
          animation: isVisible ? 'moveBox 1.5s ease forwards' : 'none',
          bottom: '0',
        }}
      />
      <style>
        {`
          @keyframes moveBox {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-1000%);
            }
          }
        `}
      </style>
      {children}
    </div>
  );
};

export default TextContainer; 