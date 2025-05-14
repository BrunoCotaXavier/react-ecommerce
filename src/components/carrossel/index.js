import React, { useRef } from "react";
import "./carrosselFullWidth.css";

const CarrosselFullWidth = ({ items }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carrossel-container">
      <button className="carrossel-btn left" onClick={() => scroll("left")}>‹</button>
      <div className="carrossel-scroll" ref={scrollRef}>
        {items.map((item, index) => (
          <div className="carrossel-item" key={index}>
            {item}
          </div>
        ))}
      </div>
      <button className="carrossel-btn right" onClick={() => scroll("right")}>›</button>
    </div>
  );
};

export default CarrosselFullWidth;
