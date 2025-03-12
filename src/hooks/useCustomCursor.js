"use client";

import { useEffect, useState, useRef } from 'react';

const useCustomCursor = () => {
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [linkRect, setLinkRect] = useState({ width: 0, height: 0, x: 0, y: 0 });

  const trailLength = 5;
  const trailSpacing = 10;

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update cursor and trail positions
  useEffect(() => {
    if (cursorRef.current) {
      if (isLinkHovered) {
        // If the link is small enough, keep it as a circle
        if (linkRect.width <= 40 && linkRect.height <= 40) {
          cursorRef.current.style.width = '40px';
          cursorRef.current.style.height = '40px';
          cursorRef.current.style.borderRadius = '50%';
          cursorRef.current.style.transform = `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`;
        } else {
          // If the link is large, transform into a rectangle
          cursorRef.current.style.width = `${linkRect.width}px`;
          cursorRef.current.style.height = `${linkRect.height}px`;
          cursorRef.current.style.borderRadius = '4px'; // Slightly rounded corners
          cursorRef.current.style.transform = `translate(${linkRect.x}px, ${linkRect.y}px)`;
        }
      } else {
        // Default circle cursor
        cursorRef.current.style.width = '40px';
        cursorRef.current.style.height = '40px';
        cursorRef.current.style.borderRadius = '50%';
        cursorRef.current.style.transform = `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)`;
      }
    }

    if (trailRefs.current.length === trailLength) {
      trailRefs.current.forEach((trailRef, index) => {
        if (trailRef.current) {
          const trailX = mousePosition.x - (trailLength - index) * trailSpacing - 10;
          const trailY = mousePosition.y - 10;
          trailRef.current.style.transform = `translate(${trailX}px, ${trailY}px)`;
        }
      });
    }
  }, [mousePosition, isLinkHovered, linkRect]);

  // Handle link hover and leave events
  useEffect(() => {
    const handleLinkHover = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'LINK') {
        const rect = target.getBoundingClientRect();
        setLinkRect({
          width: rect.width + 10,
          height: rect.height + 10,
          x: rect.left - 5,
          y: rect.top - 5,
        });
        setIsLinkHovered(true);
      }
    };

    const handleLinkLeave = () => {
      setIsLinkHovered(false);
    };

    document.addEventListener('mouseover', handleLinkHover);
    document.addEventListener('mouseout', handleLinkLeave);

    return () => {
      document.removeEventListener('mouseover', handleLinkHover);
      document.removeEventListener('mouseout', handleLinkLeave);
    };
  }, []);

  // Custom cursor and trail elements
  const cursorElement = (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: '1px solid black',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.2s ease-out, width 0.3s ease-out, height 0.3s ease-out, border-radius 0.3s ease-out',
        }}
      />
      {trailRefs.current.map((trailRef, index) => (
        <div
          key={index}
          ref={trailRef}
          style={{
            position: 'fixed',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'gray',
            pointerEvents: 'none',
            zIndex: 9998 - index,
            transition: 'transform 0.2s ease-out',
          }}
        />
      ))}
    </>
  );

  return { cursorElement };
};

export default useCustomCursor;