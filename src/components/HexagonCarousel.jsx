import React from "react";
import { Helmet } from "react-helmet";
import Carousel from "react-bootstrap/Carousel";
import icons from "../assets/images/logo/logo2.png";

const HexagonCarousel = () => {
  const hexagonStyle = {
    clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
    width: "120px",
    height: "120px",
    margin: "100px", // Add spacing
    overflow: "hidden", // Ensures image stays inside hexagon
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensures the image fits inside
  };

  const slides = [
    [{ img: icons }, { img: icons }, { img: icons }],
    [{ img: icons }, { img: icons }, { img: icons }],
  ];

  return (
    <div className="container py-5">
      {/* Dynamically load Bootstrap and Icons CSS */}
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        />
      </Helmet>
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index} className="text-center">
            <div className="d-flex justify-content-center">
              {slide.map((item, idx) => (
                <div
                  key={idx}
                  className={`d-flex justify-content-center align-items-center text-white ${item.bg}`}
                  style={hexagonStyle}
                >
                  {/* Add dummy image */}
                  <img src={item.img} alt="Dummy" style={imageStyle} />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HexagonCarousel;
