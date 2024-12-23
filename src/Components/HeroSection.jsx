import hero1 from "../assets/images/home-7/hero-image-1.png";
import hero2 from "../assets/images/home-7/hero-image-2.png";
import author1 from "../assets/images/home-7/hero-author-1.png";
import author2 from "../assets/images/home-7/hero-author-2.png";
import author3 from "../assets/images/home-7/hero-author-3.png";
import { MoveUpRight } from "lucide-react";
import { FaStar } from "react-icons/fa";

export default function HeroSection() {
  return (
    <>
      <section className="hero-section hero-7">
        <div className="hero-wrapper mx-auto position-relative parallax">
          <div className="container">
            <div className="row gx-80 gy-50 gy-lg-0 align-items-center">
              <div className="col-lg-4 col-xl-5">
                <div className="d-flex align-items-end gap-30 position-relative py-lg-40">
                  <div className="hero-image-mask">
                    <img
                      src={hero1}
                      className="img-fluid"
                      alt="img"
                    />
                  </div>
                  <div className="hero-image-mask">
                    <img
                      src={hero2}
                      className="img-fluid"
                      alt="img"
                    />
                  </div>
                  <div className="star-icons d-flex align-items-end gap-0 position-absolute end-50">
                    <span className="star-icon-big">
                      {/* <svg width="87" height="87">
                        <use xlinkHref="#star-icon-big"></use>
                      </svg> */}
                      <FaStar style={{ width: 87, height: 87 }} />
                    </span>
                    <span className="star-icon-small">
                      {/* <svg width="23" height="23">
                        <use xlinkHref="#star-icon-small"></use>
                      </svg> */}
                      <FaStar style={{ width: 23, height: 23 }} />
                    </span>
                  </div>
                </div>
              </div>
              {/* col-6 */}
              <div className="col-lg-8 col-xl-7">
                <h1 className="fs-120 custom-font-jakarta text-primary fw-extra-bold mb-4 mb-lg-30 mb-xxl-40 lh-1">
                  Aural Euphoria
                </h1>
                <p className="custom-jakarta custom-font-style-2">
                  Where melodies transcend boundaries. Immerse in captivating
                  performances. Unleash your musical senses and embrace rhythmic
                  bliss.
                </p>
                <div className="event-counter event-counter-2 py-20 py-xxl-40">
                  <div className="row row-cols-2 row-cols-md-3 gy-lg-0 gy-2 justify-content-between">
                    <div className="col">
                      <div className="d-flex align-items-center gap-1 gap-lg-2">
                        <span
                          className="odometer text-primary display-2"
                          data-count-to="32"
                        ></span>
                        <h3 className="fw-extra-bold d-flex flex-column mb-0 custom-jakarta">
                          <span>Event</span>
                          <span>Artists</span>
                        </h3>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center gap-1 gap-lg-2">
                        <span
                          className="odometer text-primary display-2"
                          data-count-to="5"
                        ></span>
                        <h3 className="fw-extra-bold d-flex flex-column mb-0 custom-jakarta">
                          <span>Event</span>
                          <span>Stages</span>
                        </h3>
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="d-flex align-items-center gap-1 gap-lg-2">
                        <span
                          className="odometer text-primary display-2"
                          data-count-to="3"
                        ></span>
                        <h3 className="fw-extra-bold d-flex flex-column mb-0 custom-jakarta">
                          <span>Days</span>
                          <span>Concert</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/* hero-counter */}

                <div className="d-flex flex-column flex-lg-row gap-4 align-items-lg-center">
                  <div className="author-wrapper d-flex gap-3 gap-lg-20 py-10 align-items-center">
                    <div className="author-image d-flex gap-0 ps-10">
                      <img
                        className="hero-author"
                        src={author1}
                        alt="img"
                      />
                      <img
                        className="hero-author ms-n3"
                        src={author2}
                        alt="img"
                      />
                      <img
                        className="hero-author ms-n3"
                        src={author3}
                        alt="img"
                      />
                      <div className="circle hero-author ms-n3">
                        <h4 className="text-white fw-extra-bold mb-0">25+</h4>
                      </div>
                    </div>
                    <h3 className="hero-author-title custom-jakarta mb-0 fw-extra-bold pe-10">
                      Music Maestros
                    </h3>
                  </div>
                  {/* author-wrapper */}
                  <a
                    href="#"
                    className="ticket-arrow arrow-style-2 arrow-up-right"
                  >
                    {/* <svg width="50" height="50">
                      <use xlinkHref="#arrow-up-right"></use>
                    </svg> */}
                    <MoveUpRight width="50" height="50" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
