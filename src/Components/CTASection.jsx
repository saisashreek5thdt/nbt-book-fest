import { FiArrowUpRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <>
      <section className="cta-section cta-1 pb-50 pb-lg-100 pb-xxl-120">
        <div className="dark-wrapper-bg">
          <div className="container">
            <div className="row gy-20 gy-lg-0 align-items-lg-center justify-content-lg-between">
              <div className="col-lg-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="fs-180-style-2 fw-extra-bold text-primary d-flex align-items-center gap-2 mb-0">
                    <span className="odometer" data-count-to="30"></span>
                    <span className="d-flex flex-column cta-percent-off">
                      <span className="cta-percent fw-extra-bold">%</span>
                      <span className="cta-off fw-extra-bold">Off</span>
                    </span>
                  </h2>
                  <div className="d-block d-lg-none">
                    <div className="cta-icon">
                      <a href="#ticket" aria-label="icons">
                        <span className="arrow-up-right-big">
                          {/* <svg>
                            <use href="#arrow-up-right-big" xlinkHref="#arrow-up-right-big" />
                          </svg> */}
                          <FiArrowUpRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <h2 className="cta-text ms-xl-n60 display-3 fw-extra-bold text-opacity">
                  Get Your Tickets Today!
                </h2>
              </div>
              <div className="col-lg-3">
                <div className="cta-icon d-none d-lg-block ms-xl-70 ms-xxl-100">
                  <a href="#ticket" aria-label="icons">
                    <span className="arrow-up-right-big">
                      <svg width="205" height="205">
                        <use href="#arrow-up-right-big" xlinkHref="#arrow-up-right-big" />
                      </svg>
                      {/* <FiArrowUpRight style={{ width: 205, height: 205 }} /> */}
                    </span>
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
