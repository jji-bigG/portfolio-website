import React, { useEffect, useRef } from "react";

const images = import.meta.glob(
  "/public/images/photography/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

const shuffle = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function VerticalImageGallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Prevent user scrolling
    const preventScroll = (event) => {
      event.preventDefault();
    };
    container.addEventListener("wheel", preventScroll);
    container.addEventListener("touchmove", preventScroll);

    const scrollInterval = setInterval(() => {
      if (container) {
        if (
          container.scrollTop + container.clientHeight >=
          container.scrollHeight
        ) {
          container.scrollTop = 0;
        } else {
          container.scrollTop += 1;
        }
      }
    }, 20);

    // Cleanup listeners on component unmount
    return () => {
      clearInterval(scrollInterval);
      container.removeEventListener("wheel", preventScroll);
      container.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-80 h-full overflow-y-scroll no-scrollbar mt-10"
      style={{ pointerEvents: "auto" }} // Keep pointer events enabled for hover effects
    >
      {shuffle(Object.keys(images)).map((image, index) => (
        <img
          key={index}
          className="hover:select-none hover:shadow-lg hover:scale-105 transition duration-300 hover:cursor-pointer mb-4"
          src={image.replace("/public", "")}
          alt=""
        />
      ))}
    </div>
  );
}

export default VerticalImageGallery;
