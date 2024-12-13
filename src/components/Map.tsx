'use client'

import React, { useState, useEffect, useCallback } from 'react';

const minBackgroundSize = [1345, 945];

const maxBackgroundSize = [5786, 4008];

type MapProps = {
  imageUrl: string;
}

const Map: React.FC<MapProps> = ({imageUrl}: MapProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [currentCenterPosition, setCurrentCenterPosition] = useState({ x: 0, y: 0 });
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });
  const [backgroundSize, setBackgroundSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl; // Replace with your image path
    img.onload = () => {
      setBackgroundSize({ width: img.width, height: img.height });
    };
  }, [imageUrl]);

  const calculateBackgroundPosition = (
    size: { width: number, height: number }, 
    center: { x: number, y: number } = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
  ) => {
    const centerX = center.x - size.width / 2;
    const centerY = center.y - size.height / 2;

    return `${centerX}px ${centerY}px`;
  };

  const calculateCenterPosition = useCallback(() => {
    const centerX = backgroundPosition.x + backgroundSize.width / 2;
    const centerY = backgroundPosition.y + backgroundSize.height / 2;

    return { x: centerX, y: centerY };
  }, [backgroundPosition, backgroundSize]);


  const getVisibleBoundingBox = useCallback(() => {
    const left = Math.max(0, Math.min(window.innerWidth, -backgroundPosition.x));
    const top = Math.max(0, Math.min(window.innerHeight, -backgroundPosition.y));
    const right = Math.min(backgroundSize.width, Math.max(0, window.innerWidth - backgroundPosition.x));
    const bottom = Math.min(backgroundSize.height, Math.max(0, window.innerHeight - backgroundPosition.y));

    return { left, top, right, bottom };
  }, [backgroundPosition, backgroundSize]);


  const visibleBoundingBox = getVisibleBoundingBox();
  const centerOfVisibleBoundingBox = {
    x: (visibleBoundingBox.left + visibleBoundingBox.right) / 2,
    y: (visibleBoundingBox.top + visibleBoundingBox.bottom) / 2,
  };

  console.log(centerOfVisibleBoundingBox);

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: event.clientX - backgroundPosition.x, y: event.clientY - backgroundPosition.y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setCurrentCenterPosition(calculateCenterPosition());
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return;

    const newX = event.clientX - dragStart.x;
    const newY = event.clientY - dragStart.y;

    setBackgroundPosition({
      x: newX,
      y: newY
    });
  };

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false);
    };

    window.addEventListener('mouseup', handleMouseUpGlobal);

    return () => {
      window.removeEventListener('mouseup', handleMouseUpGlobal);
    };
  }, []);

  return (
    <>
      <div
        className="relative map w-full h-screen bg-no-repeat bg-black overflow-hidden"
        style={{
          scrollBehavior: 'smooth',
          backgroundSize: `${backgroundSize.width}px ${backgroundSize.height}px`,
          backgroundPosition: `${backgroundPosition.x}px ${backgroundPosition.y}px`,
          backgroundImage: `url(${imageUrl})`,
        }}
        onWheel={(e) => {
          const mapElement = e.currentTarget;
          const [backgroundSizeX, backgroundSizeY] = mapElement.style.backgroundSize.split(' ');

          const delta = Math.sign(e.deltaY);
          if (delta > 0) {
            const adjustedBackgroundSizeX = parseInt(backgroundSizeX) / 1.1;
            const adjustedBackgroundSizeY = parseInt(backgroundSizeY) / 1.1;

            if (adjustedBackgroundSizeX < minBackgroundSize[0] || adjustedBackgroundSizeY < minBackgroundSize[1]) return;

            mapElement.style.backgroundSize = `${adjustedBackgroundSizeX}px ${adjustedBackgroundSizeY}px`;

          } else {
            const adjustedBackgroundSizeX = parseInt(backgroundSizeX) * 1.1;
            const adjustedBackgroundSizeY = parseInt(backgroundSizeY) * 1.1;

            if (adjustedBackgroundSizeX > maxBackgroundSize[0] || adjustedBackgroundSizeY > maxBackgroundSize[1]) return;

            mapElement.style.backgroundSize = `${adjustedBackgroundSizeX}px ${adjustedBackgroundSizeY}px`;
          }

          mapElement.style.backgroundPosition = calculateBackgroundPosition({
            width: parseInt(mapElement.style.backgroundSize.split(' ')[0]),
            height: parseInt(mapElement.style.backgroundSize.split(' ')[1])
          }, currentCenterPosition);
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Your map content here */}
          <div
            style={{
              position: 'absolute',
              top: `${centerOfVisibleBoundingBox.y}px`,
              left: `${centerOfVisibleBoundingBox.x}px`,
              width: '50px',
              height: '50px',
              backgroundColor: 'red',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
        />
        <div
          style={{
            position: 'absolute',
            top: `${visibleBoundingBox.top}px`,
            left: `${visibleBoundingBox.left}px`,
            width: `${visibleBoundingBox.right - visibleBoundingBox.left}px`,
            height: `${visibleBoundingBox.bottom - visibleBoundingBox.top}px`,
            border: '2px dashed blue',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            border: '2px solid green',
            pointerEvents: 'none',
          }}
        />
      </div>
    </>
  );
};

export default Map;
