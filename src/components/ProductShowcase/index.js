import React, { useEffect, useRef, useState } from "react";
import "./showcase.css";
const ProductShowCase = () => {
  const [showanimation, setShowanimation] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowanimation(true);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    if (!showanimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });
  return (
    <div className={`product-showcase`}>
      <div
        className={`showcase-wrapper  ${
          showanimation ? "scale-in-bottom" : ""
        }`}
        ref={ref}
      >
        {showanimation && (
          <div>
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png"
              alt=""
              className="showcase-ui showcase-mockup-1"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png"
              alt=""
              className="showcase-ui showcase-mockup-2"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png"
              alt=""
              className="showcase-ui showcase-mockup-3"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png"
              alt=""
              className="showcase-ui showcase-mockup-4"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png"
              alt=""
              className="showcase-ui showcase-mockup-5"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductShowCase;
