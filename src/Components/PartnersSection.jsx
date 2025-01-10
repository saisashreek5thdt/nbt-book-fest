import Sponsors1 from "./Sponsors1";
import Sponsors2 from "./Sponsors2";
import Sponsors3 from "./Sponsors3";

export default function ParternsSection() {
  return (
    <>
      <section
        id="sponsor"
        className="sponsor-section sponsor-2 position-relative pt-50 pt-lg-100 pt-xxl-120"
      >
        <div className="container">
          <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-40 mb-lg-70">
            <div className="col-lg-4">
              <div className="section-title">
                <span className="fs-3 straight-line-wrapper fw-semibold position-relative">
                  <span className="straight-line"></span>The Power Behind Us
                </span>
                <h2 className="title display-3 fw-extra-bold d-flex flex-column">
                  <span className="mb-n2 text-opacity">Cadence</span>
                  <span className="sub-title fw-extra-bold text-primary">
                    Contributors
                  </span>
                </h2>
              </div>
              {/* section-title */}
            </div>
            <div className="col-lg-5">
              <div className="highlights-text">
                <p className="custom-jakarta custom-font-style-2 text-lg-end">
                  Elevating the Music. Our valued partners and sponsors play a
                  pivotal role in bringing our vision to life. We orchestrate an
                  unforgettable music celebration that resonates.
                </p>
              </div>
            </div>
          </div>
          {/* row */}

          <Sponsors1 />
          {/* row */}

          <Sponsors2 />
          {/* row */}

          <Sponsors3 />
          {/* row */}
        </div>
      </section>
    </>
  );
}
