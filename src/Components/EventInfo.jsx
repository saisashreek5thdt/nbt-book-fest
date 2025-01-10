import ellipse from "../assets/images/ellipse-3.png";

export default function EventInfo() {
  return (
    <>
      <section
        id="schedule"
        className="schedule-section schedule-1 schedule-style-3 pt-50 pt-lg-100 pt-xxl-120 position-relative"
      >
        <div className="container">
          <div className="row gx-70 gy-40">
            <div className="col-lg-4">
              <div className="sticky-contents">
                <div className="schedule-left-content">
                  <div className="section-title mb-30 mb-lg-40 mb-xxl-60">
                    <span className="fs-3 straight-line-wrapper fw-semibold position-relative">
                      <span className="straight-line"></span>Schedule
                    </span>
                    <h2 className="title display-3 fw-extra-bold d-flex flex-column">
                      <span className="mb-n2 text-opacity">Melody</span>
                      <span className="sub-title fw-extra-bold text-primary">
                        Agenda
                      </span>
                    </h2>
                  </div>
                  {/* section-title */}
                  <p className="custom-jakarta custom-font-style-2">
                    Captivating performances, interactive workshops, and
                    delightful culinary delights await you at Harmonia Music
                    Festival. Let the melodies transcend boundaries on this
                    unforgettable musical journey.
                  </p>

                  <div className="pt-4 pt-lg-30">
                    <a
                      href="#"
                      className="download-link d-flex align-items-center gap-40"
                      aria-label="buttons"
                    >
                      Download Agenda
                      <span className="ticket-arrow arrow-down-right">
                        <svg width="36" height="36">
                          <use href="#arrow-down-right" xlinkHref="#arrow-down-right"></use>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                {/* schedule-left-content */}
              </div>
            </div>
            {/* col-4 */}
            <div className="col-lg-8">
              <div className="schedule-right-content position-relative">
                <div className="ellipse-image-3">
                  <img
                    src={ellipse}
                    className="img-fluid"
                    alt="img"
                  />
                </div>

                {/* Tabs */}
                <ul
                  className="schedule-tabs nav nav-pills mb-50 mb-lg-70 d-flex justify-content-between justify-content-lg-center"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="schedule-button active"
                      id="day-1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#day-1"
                      type="button"
                      role="tab"
                      aria-controls="day-1"
                      aria-selected="true"
                    >
                      <span className="fs-3 fw-extra-bold mb-0">Day 1</span>
                      <span className="fs-5 fw-semibold mb-0 d-none d-lg-block">
                        August 25, 2023
                      </span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="schedule-button"
                      id="day-2-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#day-2"
                      type="button"
                      role="tab"
                      aria-controls="day-2"
                      aria-selected="false"
                    >
                      <span className="fs-3 fw-extra-bold mb-0">Day 2</span>
                      <span className="fs-5 fw-semibold mb-0 d-none d-lg-block">
                        August 25, 2023
                      </span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="schedule-button"
                      id="day-3-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#day-3"
                      type="button"
                      role="tab"
                      aria-controls="day-3"
                      aria-selected="false"
                    >
                      <span className="fs-3 fw-extra-bold mb-0">Day 3</span>
                      <span className="fs-5 fw-semibold mb-0 d-none d-lg-block">
                        August 25, 2023
                      </span>
                    </button>
                  </li>
                </ul>
                {/* Tabs */}

                {/* Tabs-Contents */}
                <div className="tab-content" id="pills-tabContent">
                  {/* day-1-tab */}
                  <div
                    className="tab-pane fade show active"
                    id="day-1"
                    role="tabpanel"
                    aria-labelledby="day-1-tab"
                    tabIndex="0"
                  >
                    <ul className="schedule-tabs-content list-unstyled d-flex flex-column mb-0 gap-30">
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          11:00 AM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Pre-Event Registration
                          </h2>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          12:30 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Interactive Music Workshops
                          </h2>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          02:00 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Food & Beverage Bazaar
                          </h2>
                          <p className="custom-jakarta custom-font-style-2">
                            Delight in a culinary journey with a diverse array
                            of delectable treats from local vendors. Savor
                            gourmet dishes and specialty drinks amidst a vibrant
                            atmosphere.
                          </p>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          04:00 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Artistic Installations Unveiled
                          </h2>
                          <p className="custom-jakarta custom-font-style-2">
                            Immerse yourself in an artistic wonderland as
                            enchanting installations come to life. Engage with
                            visual and interactive displays that celebrate the
                            harmony between music and art.
                          </p>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          06:30 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Opening Ceremony with Celestial Rhythms
                          </h2>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          08:00 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Astral Beats on the Main Stage
                          </h2>
                          <p className="custom-jakarta custom-font-style-2">
                            Get ready to dance as the electrifying duo Astral
                            Beats takes the main stage, delivering an immersive
                            blend of electronic and live instruments.
                          </p>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          10:00 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Starlit Serenade Sessions
                          </h2>
                          <p className="custom-jakarta custom-font-style-2">
                            Extend your night under the stars with intimate
                            acoustic sessions. Unwind with soul-stirring
                            melodies and acoustic performances by guest artists.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* day-1-tab */}

                  {/* day-2-tab */}
                  <div
                    className="tab-pane fade"
                    id="day-2"
                    role="tabpanel"
                    aria-labelledby="day-2-tab"
                    tabIndex="0"
                  >
                    <ul className="schedule-tabs-content list-unstyled d-flex flex-column mb-0 gap-30">
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          11:00 AM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Food & Beverage Bazaar
                          </h2>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          12:30 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Interactive Music Workshops
                          </h2>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          02:00 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Event Registration
                          </h2>
                          <p className="custom-jakarta custom-font-style-2">
                            Delight in a culinary journey with a diverse array
                            of delectable treats from local vendors. Savor
                            gourmet dishes and specialty drinks amidst a vibrant
                            atmosphere.
                          </p>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          04:00 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Artistic Installations Unveiled
                          </h2>
                          <p className="custom-jakarta custom-font-style-2">
                            Immerse yourself in an artistic wonderland as
                            enchanting installations come to life. Engage with
                            visual and interactive displays that celebrate the
                            harmony between music and art.
                          </p>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          06:30 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Opening Ceremony with Celestial Rhythms
                          </h2>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          08:00 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Astral Beats on the Main Stage
                          </h2>
                          <p className="custom-jakarta custom-font-style-2">
                            Get ready to dance as the electrifying duo Astral
                            Beats takes the main stage, delivering an immersive
                            blend of electronic and live instruments.
                          </p>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          10:00 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Starlit Serenade Sessions
                          </h2>
                          <p className="custom-jakarta custom-font-style-2">
                            Extend your night under the stars with intimate
                            acoustic sessions. Unwind with soul-stirring
                            melodies and acoustic performances by guest artists.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* day-2-tab */}

                  {/* day-3-tab */}
                  <div
                    className="tab-pane fade"
                    id="day-3"
                    role="tabpanel"
                    aria-labelledby="day-3-tab"
                    tabIndex="0"
                  >
                    <ul className="schedule-tabs-content list-unstyled d-flex flex-column mb-0 gap-30">
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          11:00 AM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Registration for Event
                          </h2>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          12:30 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Food & Beverage Bazaar
                          </h2>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          02:00 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Interactive Music Workshops
                          </h2>
                          <p className="custom-jakarta custom-font-style-2">
                            Delight in a culinary journey with a diverse array
                            of delectable treats from local vendors. Savor
                            gourmet dishes and specialty drinks amidst a vibrant
                            atmosphere.
                          </p>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          04:00 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Artistic Installations Unveiled
                          </h2>
                          <p className="custom-jakarta custom-font-style-2">
                            Immerse yourself in an artistic wonderland as
                            enchanting installations come to life. Engage with
                            visual and interactive displays that celebrate the
                            harmony between music and art.
                          </p>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          06:30 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Opening Ceremony with Celestial Rhythms
                          </h2>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          08:00 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Astral Beats on the Main Stage
                          </h2>
                          <p className="custom-jakarta custom-font-style-2">
                            Get ready to dance as the electrifying duo Astral
                            Beats takes the main stage, delivering an immersive
                            blend of electronic and live instruments.
                          </p>
                        </div>
                      </li>
                      <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          10:00 PM
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            Starlit Serenade Sessions
                          </h2>
                          <p className="custom-jakarta custom-font-style-2">
                            Extend your night under the stars with intimate
                            acoustic sessions. Unwind with soul-stirring
                            melodies and acoustic performances by guest artists.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* day-3-tab */}
                </div>
                {/* Tabs-Contents */}
              </div>
              {/* schedule-right-content */}
            </div>
            {/* col-8 */}
          </div>
        </div>
      </section>
    </>
  );
}
