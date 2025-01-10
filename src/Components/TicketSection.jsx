export default function TicketSection() {
  return (
    <>
      <section
        id="pricing"
        className="pricing-section pricing-1 pb-50 pb-lg-100 pb-xxl-120"
      >
        <div className="container">
          <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
            <div className="col-lg-4">
              <div className="section-title">
                <span className="fs-3 straight-line-wrapper fw-semibold position-relative">
                  <span className="straight-line"></span>Ticket
                </span>
                <h2 className="title display-3 fw-extra-bold d-flex flex-column">
                  <span className="mb-n2 text-opacity">Harmonia</span>
                  <span className="sub-title fw-extra-bold text-primary">
                    Admissions
                  </span>
                </h2>
              </div>
              {/* section-title */}
            </div>
            <div className="col-lg-5">
              <div className="highlights-text">
                <p className="custom-jakarta custom-font-style-2 text-lg-end mb-2">
                  Unleash the rhythm with an extraordinary lineup. Get ready for
                  a musical extravaganza that will captivate your senses.
                </p>
              </div>
            </div>
          </div>
          {/* row */}
          <div className="row gx-30 gy-50">
            <div className="col-md-6 col-xl-4">
              <div className="pricing-wrapper bg-ticket position-relative">
                <div className="pricing-top-content">
                  <div className="pricing-icon mb-10">
                    <svg width="55" height="49">
                      <use
                        href="#pricing-1-icon"
                        xlinkHref="#pricing-1-icon"
                      ></use>
                    </svg>
                  </div>
                  <h3 className="fw-semibold pricing-title">
                    General Admission
                  </h3>
                  <h3 className="mb-40">
                    <span className="display-2 fw-extra-bold text-primary me-10 custom-jakarta">
                      $42
                    </span>
                    <span className="fw-semibold pricing-subtitle">
                      / Person
                    </span>
                  </h3>
                  <ul className="pricing-list list-unstyled d-flex flex-column gap-10">
                    <li className="mb-0">
                      <span className="check-icon">
                        <svg width="16" height="16">
                          <use href="#check-icon" xlinkHref="#check-icon"></use>
                        </svg>
                      </span>
                      Access to the Event
                    </li>
                    <li className="mb-0">
                      <span className="check-icon">
                        <svg width="16" height="16">
                          <use href="#check-icon" xlinkHref="#check-icon"></use>
                        </svg>
                      </span>
                      Affordable Entertainment
                    </li>
                    <li className="mb-0">
                      <span className="check-icon">
                        <svg width="16" height="16">
                          <use href="#check-icon" xlinkHref="#check-icon"></use>
                        </svg>
                      </span>
                      Shared Memories
                    </li>
                  </ul>
                </div>

                <div className="pricing-separator">
                  <svg
                    viewBox="0 0 420 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3632_1203)">
                      <g clipPath="url(#clip1_3632_1203)">
                        <path
                          d="M30 -418H390C406.016 -418 419 -405.016 419 -389V8.63272C419 16.9435 414.514 24.6071 407.267 28.6754C390.261 38.222 390.261 62.702 407.267 72.2486C414.514 76.3169 419 83.9804 419 92.2912V190C419 206.016 406.016 219 390 219H30C13.9838 219 1 206.016 1 190V92.9604C1 84.3293 5.89026 76.4435 13.6218 72.607C31.9323 63.5211 31.9323 37.4029 13.6218 28.317C5.89026 24.4804 1 16.5946 1 7.9635V-389C1 -405.016 13.9837 -418 30 -418Z"
                          strokeWidth="2"
                        />
                        <line
                          x1="28"
                          y1="49"
                          x2="394"
                          y2="49"
                          strokeWidth="2"
                          strokeDasharray="10 10"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_3632_1203">
                        <rect width="420" height="100" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_3632_1203">
                        <rect
                          width="420"
                          height="616"
                          fill="white"
                          transform="translate(0 -419)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="pricing-bottom-content position-relative">
                  <a href="#" className="btn btn-primary" aria-label="buttons">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="pricing-wrapper bg-ticket position-relative">
                <div className="pricing-top-content">
                  <div className="pricing-icon mb-10">
                    <svg width="55" height="49">
                      <use
                        href="#pricing-2-icon"
                        xlinkHref="#pricing-2-icon"
                      ></use>
                    </svg>
                  </div>
                  <h3 className="fw-semibold pricing-title">VIP Experience</h3>
                  <h3 className="mb-40">
                    <span className="display-2 fw-extra-bold text-primary me-10 custom-jakarta">
                      $100
                    </span>
                    <span className="fw-semibold pricing-subtitle">
                      / Person
                    </span>
                  </h3>
                  <ul className="pricing-list list-unstyled d-flex flex-column gap-10">
                    <li className="mb-0">
                      <span className="check-icon">
                        <svg width="16" height="16">
                          <use href="#check-icon" xlinkHref="#check-icon"></use>
                        </svg>
                      </span>
                      Premium Seating
                    </li>
                    <li className="mb-0">
                      <span className="check-icon">
                        <svg width="16" height="16">
                          <use href="#check-icon" xlinkHref="#check-icon"></use>
                        </svg>
                      </span>
                      Backstage Access
                    </li>
                    <li className="mb-0">
                      <span className="check-icon">
                        <svg width="16" height="16">
                          <use href="#check-icon" xlinkHref="#check-icon"></use>
                        </svg>
                      </span>
                      Artist Interaction
                    </li>
                  </ul>
                </div>

                <div className="pricing-separator">
                  <svg
                    viewBox="0 0 420 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3632_1203)">
                      <g clipPath="url(#clip1_3632_1203)">
                        <path
                          d="M30 -418H390C406.016 -418 419 -405.016 419 -389V8.63272C419 16.9435 414.514 24.6071 407.267 28.6754C390.261 38.222 390.261 62.702 407.267 72.2486C414.514 76.3169 419 83.9804 419 92.2912V190C419 206.016 406.016 219 390 219H30C13.9838 219 1 206.016 1 190V92.9604C1 84.3293 5.89026 76.4435 13.6218 72.607C31.9323 63.5211 31.9323 37.4029 13.6218 28.317C5.89026 24.4804 1 16.5946 1 7.9635V-389C1 -405.016 13.9837 -418 30 -418Z"
                          strokeWidth="2"
                        />
                        <line
                          x1="28"
                          y1="49"
                          x2="394"
                          y2="49"
                          strokeWidth="2"
                          strokeDasharray="10 10"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_3632_1203">
                        <rect width="420" height="100" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_3632_1203">
                        <rect
                          width="420"
                          height="616"
                          fill="white"
                          transform="translate(0 -419)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="pricing-bottom-content position-relative">
                  <a
                    href="#"
                    className="btn btn-outline-primary"
                    aria-label="buttons"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="pricing-wrapper bg-ticket position-relative">
                <div className="pricing-top-content">
                  <div className="pricing-icon mb-10">
                    <svg width="55" height="49">
                      <use
                        href="#pricing-3-icon"
                        xlinkHref="#pricing-3-icon"
                      ></use>
                    </svg>
                  </div>
                  <h3 className="fw-semibold pricing-title">
                    Student Discount
                  </h3>
                  <h3 className="mb-40">
                    <span className="display-2 fw-extra-bold text-primary me-10 custom-jakarta">
                      $25
                    </span>
                    <span className="fw-semibold pricing-subtitle">
                      / Person
                    </span>
                  </h3>
                  <ul className="pricing-list list-unstyled d-flex flex-column gap-10">
                    <li className="mb-0">
                      <span className="check-icon">
                        <svg width="16" height="16">
                          <use href="#check-icon" xlinkHref="#check-icon"></use>
                        </svg>
                      </span>
                      Affordable Access
                    </li>
                    <li className="mb-0">
                      <span className="check-icon">
                        <svg width="16" height="16">
                          <use href="#check-icon" xlinkHref="#check-icon"></use>
                        </svg>
                      </span>
                      Cultural Enrichment
                    </li>
                    <li className="mb-0">
                      <span className="check-icon">
                        <svg width="16" height="16">
                          <use href="#check-icon" xlinkHref="#check-icon"></use>
                        </svg>
                      </span>
                      Community Connection
                    </li>
                  </ul>
                </div>

                <div className="pricing-separator">
                  <svg
                    viewBox="0 0 420 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3632_1203)">
                      <g clipPath="url(#clip1_3632_1203)">
                        <path
                          d="M30 -418H390C406.016 -418 419 -405.016 419 -389V8.63272C419 16.9435 414.514 24.6071 407.267 28.6754C390.261 38.222 390.261 62.702 407.267 72.2486C414.514 76.3169 419 83.9804 419 92.2912V190C419 206.016 406.016 219 390 219H30C13.9838 219 1 206.016 1 190V92.9604C1 84.3293 5.89026 76.4435 13.6218 72.607C31.9323 63.5211 31.9323 37.4029 13.6218 28.317C5.89026 24.4804 1 16.5946 1 7.9635V-389C1 -405.016 13.9837 -418 30 -418Z"
                          strokeWidth="2"
                        />
                        <line
                          x1="28"
                          y1="49"
                          x2="394"
                          y2="49"
                          strokeWidth="2"
                          strokeDasharray="10 10"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_3632_1203">
                        <rect width="420" height="100" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_3632_1203">
                        <rect
                          width="420"
                          height="616"
                          fill="white"
                          transform="translate(0 -419)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="pricing-bottom-content position-relative">
                  <a
                    href="#"
                    className="btn btn-outline-primary"
                    aria-label="buttons"
                  >
                    Buy Now
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
