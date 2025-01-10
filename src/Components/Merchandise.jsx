import ellipse from "../assets/images/ellipse-4.png";
import merchandise1 from "../assets/images/home-6/merchandise-1.png";
import merchandise2 from "../assets/images/home-6/merchandise-2.png";
import merchandise3 from "../assets/images/home-6/merchandise-3.png";
import merchandise4 from "../assets/images/home-6/merchandise-4.png";

function Merchandise() {
  return (
    <>
      <section
        id="merchandise"
        className="merchandise-section merchandise-1 position-relative mb-50 mb-lg-100 mb-xxl-120 py-50 py-lg-100 py-xxl-120"
      >
        <div className="container">
          <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-40 mb-lg-70">
            <div className="col-lg-4">
              <div className="section-title">
                <span className="fs-3 straight-line-wrapper fw-semibold position-relative">
                  <span className="straight-line"></span>The shop
                </span>
                <h2 className="title display-3 fw-extra-bold d-flex flex-column">
                  <span className="mb-n2 text-opacity">Get Our</span>
                  <span className="sub-title fw-extra-bold text-primary">
                    Merchandise
                  </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="highlights-text">
                <p className="custom-jakarta custom-font-style-2 text-lg-end mb-2">
                  Elevating the Music. Our valued partners and sponsors play a
                  pivotal role in bringing our vision to life. With their
                  support, we orchestrate an unforgettable music celebration.
                </p>
              </div>
            </div>
          </div>

          <div className="merchandise-contents position-relative">
            <div className="ellipse-image-4">
              <img
                src={ellipse}
                className="img-fluid"
                alt="img"
              />
            </div>
            <div className="swiper merchandise-swiper py-20">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="merchandise-wrapper">
                    <div className="merchandise-image mb-4">
                      <img
                        src={merchandise1}
                        alt="img"
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="product-information">
                        <h5>White T-Shirt</h5>
                        <h6 className="text-primary fw-bold">$24.99</h6>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="btn btn-outline-primary btn-custom-light"
                          aria-label="buttons"
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="merchandise-wrapper">
                    <div className="merchandise-image mb-4">
                      <img
                        src={merchandise2}
                        alt="img"
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="product-information">
                        <h5>White Cap</h5>
                        <h6 className="text-primary fw-bold">$24.99</h6>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="btn btn-outline-primary btn-custom-light"
                          aria-label="buttons"
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="merchandise-wrapper">
                    <div className="merchandise-image mb-4">
                      <img
                        src={merchandise3}
                        alt="img"
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="product-information">
                        <h5>Black T-Shirt</h5>
                        <h6 className="text-primary fw-bold">$24.99</h6>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="btn btn-outline-primary btn-custom-light"
                          aria-label="buttons"
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="merchandise-wrapper">
                    <div className="merchandise-image mb-4">
                      <img
                        src={merchandise4}
                        alt="img"
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="product-information">
                        <h5>Black T-Shirt</h5>
                        <h6 className="text-primary fw-bold">$24.99</h6>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="btn btn-outline-primary btn-custom-light"
                          aria-label="buttons"
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Merchandise;
