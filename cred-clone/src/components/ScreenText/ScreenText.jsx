/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "./screenText.css";

const ScreenText = ({ screen, setCurrentImg, i }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleShowAnimation = (e) => {
    if (e[0].isIntersecting) {
      setShowAnimation(true);
      setCurrentImg(i);
    }
  };

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    let observer = new IntersectionObserver(toggleShowAnimation, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });

  return (
    <div
      className={`screen-text ${showAnimation ? "text-visible" : ""}`}
      ref={ref}
    >
      <div className="screen-heading">{screen.heading}</div>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={screen.mobileImg}
              alt="mobile-mockup-image"
              className="mobile-screen-image"
            />
          </div>
        </div>
      </div>
      <div className="screen-description">{screen.description}</div>
    </div>
  );
};

export default ScreenText;
