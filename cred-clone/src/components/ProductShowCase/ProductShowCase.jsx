import { useEffect, useRef, useState } from "react";
import "./productShowCase.css";

const ProductShowCase = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleShowAnimation = (e) => {
    if (e[0].isIntersecting) {
      setShowAnimation(true);
    }
  };

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    let observer = new IntersectionObserver(toggleShowAnimation, options);
    if (!showAnimation) {
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
    <div
      className={`product-showcase ${showAnimation ? "scale-in-bottom" : ""}`}
      ref={ref}
    >
      {showAnimation && (
        <div className="showcase-wrapper">
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png"
            alt="showcase-image-1"
            className="showcase-image showcase-image-1"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png"
            alt="showcase-image-1"
            className="showcase-image showcase-image-2"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png"
            alt="showcase-image-1"
            className="showcase-image showcase-image-3"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png"
            alt="showcase-image-1"
            className="showcase-image showcase-image-4"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png"
            alt="showcase-image-1"
            className="showcase-image showcase-image-5"
          />
        </div>
      )}
    </div>
  );
};

export default ProductShowCase;
