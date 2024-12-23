import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaMicrophoneAlt, FaRegCalendarAlt } from "react-icons/fa";
import { AiFillPieChart } from "react-icons/ai";
import { IoGameController } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

export default function EventHighlights() {
  return (
    <>
      <section className="highlight-section highlight-2 pb-50 pb-lg-100 pb-xxl-120">
        <div className="container position-relative">
          <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
            <div className="col-lg-5">
              <div className="section-title">
                <span className="fs-3 straight-line-wrapper fw-semibold position-relative">
                  <span className="straight-line"></span>Highlights
                </span>
                <h2 className="title display-3 fw-extra-bold d-flex flex-column">
                  <span className="mb-n2 text-opacity">Music</span>
                  <span className="sub-title fw-extra-bold text-primary">
                    Extravaganza
                  </span>
                </h2>
              </div>
              {/* section-title */}
            </div>
            <div className="col-lg-5">
              <div className="highlights-text">
                <p className="custom-jakarta custom-font-style-2 text-lg-end mb-2">
                  Immerse in mesmerizing performances, vibrant soundscapes and
                  interactive art at our music extravaganza. Experience a
                  festival atmosphere like no other.
                </p>
              </div>
            </div>
          </div>
          {/* row */}

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-30">
            <div className="col">
              <a
                href="#"
                className="highlights-item-3 text-decoration-none position-relative d-flex flex-column gap-20 px-30 px-lg-40 py-40 py-lg-50"
              >
                <div className="highlights-icon-style-1">
                  {/* <svg width="68" height="64">
                    <use xlinkHref="#highlights-icon-1"></use>
                  </svg> */}
                  <FaRegStarHalfStroke style={{ width: 68, height: 64 }} />
                </div>
                <h3 className="fw-extra-bold mb-0 custom-jakarta">
                  Diverse Musical Lineup
                </h3>
                <p className="custom-jakarta custom-font-style-2">
                  Experience a diverse array of musical genres of talented
                  artists.
                </p>
              </a>
            </div>
            {/* col */}
            <div className="col">
              <a
                href="#"
                className="highlights-item-3 text-decoration-none position-relative d-flex flex-column gap-20 px-30 px-lg-40 py-40 py-lg-50"
              >
                <div className="highlights-icon-style-1">
                  {/* <svg width="58" height="68">
                    <use xlinkHref="#highlights-icon-2"></use>
                  </svg> */}
                  <FaMicrophoneAlt style={{ width: 58, height: 68 }} />
                </div>
                <h3 className="fw-extra-bold mb-0 custom-jakarta">
                  Immersive Performances
                </h3>
                <p className="custom-jakarta custom-font-style-2">
                  Immerse yourself in captivating live performances that ignite
                  the stage
                </p>
              </a>
            </div>
            {/* col */}
            <div className="col">
              <a
                href="#"
                className="highlights-item-3 text-decoration-none position-relative d-flex flex-column gap-20 px-30 px-lg-40 py-40 py-lg-50"
              >
                <div className="highlights-icon-style-1">
                  {/* <svg width="60" height="68">
                    <use xlinkHref="#highlights-icon-3"></use>
                  </svg> */}
                  <FaRegCalendarAlt style={{ width: 60, height: 60 }} />
                </div>
                <h3 className="fw-extra-bold mb-0 custom-jakarta">
                  Interactive Schedule
                </h3>
                <p className="custom-jakarta custom-font-style-2">
                  Easily plan your day with an interactive event schedule.
                </p>
              </a>
            </div>
            {/* col */}
            <div className="col">
              <a
                href="#"
                className="highlights-item-3 text-decoration-none position-relative d-flex flex-column gap-20 px-30 px-lg-40 py-40 py-lg-50"
              >
                <div className="highlights-icon-style-1">
                  {/* <svg width="68" height="68">
                    <use xlinkHref="#highlights-icon-4"></use>
                  </svg> */}
                  <AiFillPieChart style={{ width: 68, height: 68 }} />
                </div>
                <h3 className="fw-extra-bold mb-0 custom-jakarta">
                  Culinary Delights
                </h3>
                <p className="custom-jakarta custom-font-style-2">
                  Indulge in a delightful culinary journey with a variety of
                  food and beverage.
                </p>
              </a>
            </div>
            {/* col */}
            <div className="col">
              <a
                href="#"
                className="highlights-item-3 text-decoration-none position-relative d-flex flex-column gap-20 px-30 px-lg-40 py-40 py-lg-50"
              >
                <div className="highlights-icon-style-1">
                  {/* <svg width="68" height="68">
                    <use xlinkHref="#highlights-icon-5"></use>
                  </svg> */}
                  <IoGameController style={{ width: 68, height: 68 }} />
                </div>
                <h3 className="fw-extra-bold mb-0 custom-jakarta">
                  Engaging Activities
                </h3>
                <p className="custom-jakarta custom-font-style-2">
                  Beyond music, engage in a range of activities.
                </p>
              </a>
            </div>
            {/* col */}
            <div className="col">
              <div className="highlights-link position-relative d-flex align-items-center justify-content-center h-100">
                <a href="#" className="text-decoration-none d-flex gap-10">
                  <span className="fs-4 fw-extra-bold custom-jakarta">
                    See More
                  </span>
                  <span className="arrow-up-short">
                    {/* <svg width="30" height="29">
                      <use xlinkHref="#arrow-up-short"></use>
                    </svg>*/}
                    <FiArrowUpRight style={{ width: 30, height: 29 }} />
                  </span>
                </a>
              </div>
            </div>
            {/* col */}
          </div>
          {/* row */}
        </div>
      </section>
    </>
  );
}
