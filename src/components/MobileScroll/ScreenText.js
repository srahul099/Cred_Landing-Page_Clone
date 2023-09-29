import React, { useEffect, useRef, useState } from "react";

const ScreenText = ({ screen, setCurrentImg, i }) => {
  const [showanimation, setShowanimation] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowanimation(true);
      setCurrentImg(i);
    } else {
      setShowanimation(false);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [i]);
  return (
    <div
      className={` screen-text ${showanimation ? "text-visible" : ""}`}
      ref={ref}
    >
      <div className="screen-heading">{screen.heading}</div>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex ">
            <img src={screen.mobile_img} className="mobile-screen-img" />
          </div>
        </div>
      </div>
      <div className="screen-description">{screen.description}</div>
    </div>
  );
};

export default ScreenText;
