import React, { useState, useEffect  } from 'react'

import './ImageGrid.css'

const ImageGrid = ({ images }) => {
    const [zoomIndex, setZoomIndex] = useState(null);
  
    const imageCount = images.length;
  
    const handleKeyDown = (e) => {
      if (zoomIndex !== null) {
        if (e.key === 'Escape') {
          setZoomIndex(null);
        } else if (e.key === 'ArrowRight') {
          setZoomIndex((prev) => (prev + 1) % imageCount);
        } else if (e.key === 'ArrowLeft') {
          setZoomIndex((prev) => (prev - 1 + imageCount) % imageCount);
        }
      }
    };
  
    useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [zoomIndex]);
  
    return (
      <>
        <div className={`image-grid image-grid-${imageCount}`}>
          {images.map((src, index) => (
            <div
            key={index}
            className={`image-wrapper ${imageCount === 3 && index === 0 ? 'image-span-2' : ''} ${imageCount === 1 ? 'single-image' : ''}`}
            onClick={() => setZoomIndex(index)}
            >
            <img
                src={src}
                alt={`Image ${index + 1}`}
                className="grid-image"
            />
         </div>
          ))}
        </div>
  
        {zoomIndex !== null && (
          <div className="image-overlay" onClick={() => setZoomIndex(null)}>
             {imageCount > 1 && (
            <button
              className="nav-button prev"
              onClick={(e) => {
                e.stopPropagation();
                setZoomIndex((zoomIndex - 1 + imageCount) % imageCount);
              }}
            >
              ‹
            </button>
             )}

            <img
              src={images[zoomIndex]}
              alt="Zoomed"
              className="zoomed-image"
              onClick={(e) => e.stopPropagation()}
            />

            {imageCount > 1 && (
            <button
              className="nav-button next"
              onClick={(e) => {
                e.stopPropagation();
                setZoomIndex((zoomIndex + 1) % imageCount);
              }}
            >
              ›
            </button>
            )}
            
          </div>
        )}
      </>
    );
  };
  
  export default ImageGrid;