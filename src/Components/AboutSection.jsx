import { IoTicketOutline } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import about1 from "../assets/images/home-7/about-7-image.jpg";

export default function AboutSection() {
  return (
    <>
      <section className="about-section about-3 py-50 py-lg-100 py-xxl-120">
        <div className="container">
          <div className="row gx-80 gy-lg-0 gy-40 align-items-center">
            <div className="col-lg-6">
              <div className="about-3-image">
                <img
                  src={about1}
                  className="img-fluid rounded-5"
                  alt="about-image"
                />
              </div>
            </div>
            {/* col-5 */}
            <div className="col-lg-6">
              <div className="section-title mb-30 mb-xxl-40">
                <span className="fs-3 straight-line-wrapper fw-semibold position-relative">
                  <span className="straight-line"></span>About The Event
                </span>
                <h2 className="title display-3 fw-extra-bold d-flex flex-column">
                  <span className="mb-n2 text-opacity">Soulful</span>
                  <span className="sub-title fw-extra-bold text-primary">
                    Symphony
                  </span>
                </h2>
                <p className="custom-jakarta custom-font-style-2 mb-0 mt-30">
                  Experience Harmonia: where melodies transcend boundaries.
                  Immerse in captivating performances that ignite the stage.
                  Unleash your musical senses and embrace rhythmic bliss.
                </p>
              </div>
              {/* section-title */}
              <div className="about-3-text d-flex flex-column flex-lg-row gap-4 justify-content-between align-items-lg-center mb-40 mb-lg-60">
                <div>
                  <h4 className="fw-extra-bold custom-jakarta">
                    25-28 Dec, 2023
                  </h4>
                  <p className="custom-jakarta custom-font-style-2 fw-semibold mb-0">
                    4pm-12am
                  </p>
                </div>
                <div>
                  <h4 className="text-uppercase custom-jakarta fw-extra-bold">
                    Basement
                  </h4>
                  <p className="custom-jakarta custom-font-style-2 fw-semibold mb-0">
                    135 W, 46nd Street, New York
                  </p>
                </div>
              </div>
              {/* about-3-text */}

              <div className="d-block d-md-flex gap-4">
                <a
                  href="#pricing"
                  className="btn btn-primary btn-style-2 btn-rounded align-items-center d-inline-flex gap-2 mb-3 mb-md-0"
                  aria-label="buttons"
                >
                  <span className="buttons-logo">
                    {/* <svg width="25" height="25">
                      <use xlinkHref="#buttons-logo"></use>
                    </svg> */}
                    <IoTicketOutline style={{ width: 25, height: 25 }} />
                  </span>
                  Buy Ticket
                </a>
                <a
                  href="#merchandise"
                  className="btn btn-outline-primary btn-outline-style-2 btn-rounded d-inline-flex align-items-center gap-2"
                  aria-label="buttons"
                >
                  <span className="buttons-logo icon-style-3">
                    {/* <svg width="19" height="19">
                      <use xlinkHref="#shop-icon-sm"></use>
                    </svg> */}
                    <FaBasketShopping style={{ width: 25, height: 25 }} />
                  </span>
                  Shop Merch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
