import imgUrl1 from "../assets/images/home-1/lineup-image-4.jpg";
import imgUrl2 from "../assets/images/home-1/lineup-image-5.jpg";
import imgUrl3 from "../assets/images/home-1/lineup-image-6.jpg";
import imgUrl4 from "../assets/images/home-1/lineup-image-4.jpg";
import imgUrl5 from "../assets/images/home-1/lineup-image-5.jpg";
import imgUrl6 from "../assets/images/home-1/lineup-image-6.jpg";
import ellipse from "../assets/images/ellipse-5.png";

export default function LineupSection() {
  return (
    <>
      <section
        id="line-up"
        className="lineup-section lineup-2 subscription-2 pt-40 pb-100 pt-lg-120 pb-lg-150 mb-20"
      >
        <div className="container">
          <div className="row gx-60 gx-xxl-80 gy-30 align-items-center">
            <div className="col-lg-4">
              <div className="lineup-right-content mt-3 mt-lg-0">
                <div className="section-title mb-4 mb-lg-30 mb-xxl-40">
                  <span className="fs-3 straight-line-wrapper fw-semibold position-relative">
                    <span className="straight-line"></span>Line-Up
                  </span>
                  <h2 className="title display-3 fw-extra-bold d-flex flex-column">
                    <span className="mb-n2 text-opacity">Rhythm</span>
                    <span className="sub-title fw-extra-bold text-primary">
                      Revelations
                    </span>
                  </h2>
                </div>
                {/* section-title */}
                <p className="custom-jakarta custom-font-style-2 mb-4 mb-lg-30">
                  Unleash the rhythm with an extraordinary lineup. Get ready for
                  a musical extravaganza that will captivate your senses.
                </p>

                <div className="py-2 pb-lg-0 pt-lg-3">
                  <a
                    href="#"
                    className="download-link d-flex align-items-center gap-30"
                    aria-label="buttons"
                  >
                    See More
                    <span className="ticket-arrow arrow-up-right">
                      <svg width="32" height="32">
                        <use
                          href="#arrow-up-right"
                          xlinkHref="#arrow-up-right"
                        ></use>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              {/* lineup-right-content */}
            </div>
            {/* col-5 */}
            <div className="col-lg-8">
              <div className="swiper-custom-progress position-relative">
                <div className="swiper lineup-swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="lineup-image-wrapper position-relative">
                        <div className="lineup-image">
                          <img
                            src={imgUrl1}
                            className="img-fluid"
                            alt="lineup-image"
                          />
                        </div>
                        <div className="lineup-image-hover">
                          <p className="author-name">Luna Echo</p>
                          <div className="line-up-hover-content">
                            <h5 className="fw-medium mb-20">
                              Genere :{" "}
                              <span className="text-uppercase">pop</span>
                            </h5>
                            {/* <div className="line-up-icons d-flex align-items-center gap-3 gap-lg-20">
                              <a
                                href="#"
                                className="facebook-icon"
                                aria-label="facebook"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#facebook-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="instagram-icon"
                                aria-label="instagram"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#instagram-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="youtube-icon"
                                aria-label="youtube"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#youtube-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="spotify-icon"
                                aria-label="spotify"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#spotify-icon"></use>
                                </svg>
                              </a>
                            </div> */}
                          </div>
                        </div>
                        {/* lineup-image-hover */}
                      </div>
                      {/* lineup-image-wrapper */}
                    </div>
                    {/* swiper-slide */}
                    <div className="swiper-slide">
                      <div className="lineup-image-wrapper position-relative">
                        <div className="lineup-image">
                          <img
                            src={imgUrl2}
                            className="img-fluid"
                            alt="lineup-image"
                          />
                        </div>
                        <div className="lineup-image-hover">
                          <p className="author-name">Orion Ryder</p>
                          <div className="line-up-hover-content">
                            <h5 className="fw-medium mb-20">
                              Genere :{" "}
                              <span className="text-uppercase">rock</span>
                            </h5>
                            {/* <div className="line-up-icons d-flex align-items-center gap-3 gap-lg-20">
                              <a
                                href="#"
                                className="facebook-icon"
                                aria-label="facebook"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#facebook-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="instagram-icon"
                                aria-label="instagram"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#instagram-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="youtube-icon"
                                aria-label="youtube"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#youtube-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="spotify-icon"
                                aria-label="spotify"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#spotify-icon"></use>
                                </svg>
                              </a>
                            </div> */}
                          </div>
                        </div>
                        {/* lineup-image-hover */}
                      </div>
                      {/* lineup-image-wrapper */}
                    </div>
                    {/* swiper-slide */}
                    <div className="swiper-slide">
                      <div className="lineup-image-wrapper position-relative">
                        <div className="lineup-image">
                          <img
                            src={imgUrl3}
                            className="img-fluid"
                            alt="lineup-image"
                          />
                        </div>
                        <div className="lineup-image-hover">
                          <p className="author-name">Electra Nova</p>
                          <div className="line-up-hover-content">
                            <h5 className="fw-medium mb-20">
                              Genere :
                              <span className="text-uppercase">hip-hop</span>
                            </h5>
                            {/* <div className="line-up-icons d-flex align-items-center gap-3 gap-lg-20">
                              <a
                                href="#"
                                className="facebook-icon"
                                aria-label="facebook"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#facebook-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="instagram-icon"
                                aria-label="instagram"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#instagram-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="youtube-icon"
                                aria-label="youtube"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#youtube-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="spotify-icon"
                                aria-label="spotify"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#spotify-icon"></use>
                                </svg>
                              </a>
                            </div> */}
                          </div>
                        </div>
                        {/* lineup-image-hover */}
                      </div>
                      {/* lineup-image-wrapper */}
                    </div>
                    {/* swiper-slide */}
                    <div className="swiper-slide">
                      <div className="lineup-image-wrapper position-relative">
                        <div className="lineup-image">
                          <img
                            src={imgUrl4}
                            className="img-fluid"
                            alt="lineup-image"
                          />
                        </div>
                        <div className="lineup-image-hover">
                          <p className="author-name">Luna Echo</p>
                          <div className="line-up-hover-content">
                            <h5 className="fw-medium mb-20">
                              Genere :{" "}
                              <span className="text-uppercase">pop</span>
                            </h5>
                            {/* <div className="line-up-icons d-flex align-items-center gap-3 gap-lg-20">
                              <a
                                href="#"
                                className="facebook-icon"
                                aria-label="facebook"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#facebook-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="instagram-icon"
                                aria-label="instagram"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#instagram-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="youtube-icon"
                                aria-label="youtube"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#youtube-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="spotify-icon"
                                aria-label="spotify"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#spotify-icon"></use>
                                </svg>
                              </a>
                            </div> */}
                          </div>
                        </div>
                        {/* lineup-image-hover */}
                      </div>
                      {/* lineup-image-wrapper */}
                    </div>
                    {/* swiper-slide */}
                    <div className="swiper-slide">
                      <div className="lineup-image-wrapper position-relative">
                        <div className="lineup-image">
                          <img
                            src={imgUrl5}
                            className="img-fluid"
                            alt="lineup-image"
                          />
                        </div>
                        <div className="lineup-image-hover">
                          <p className="author-name">Orion Ryder</p>
                          <div className="line-up-hover-content">
                            <h5 className="fw-medium mb-20">
                              Genere :{" "}
                              <span className="text-uppercase">rock</span>
                            </h5>
                            {/* <div className="line-up-icons d-flex align-items-center gap-3 gap-lg-20">
                              <a
                                href="#"
                                className="facebook-icon"
                                aria-label="facebook"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#facebook-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="instagram-icon"
                                aria-label="instagram"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#instagram-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="youtube-icon"
                                aria-label="youtube"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#youtube-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="spotify-icon"
                                aria-label="spotify"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#spotify-icon"></use>
                                </svg>
                              </a>
                            </div> */}
                          </div>
                        </div>
                        {/* lineup-image-hover */}
                      </div>
                      {/* lineup-image-wrapper */}
                    </div>
                    {/* swiper-slide */}
                    <div className="swiper-slide">
                      <div className="lineup-image-wrapper position-relative">
                        <div className="lineup-image">
                          <img
                            src={imgUrl6}
                            className="img-fluid"
                            alt="lineup-image"
                          />
                        </div>
                        <div className="lineup-image-hover">
                          <p className="author-name">Electra Nova</p>
                          <div className="line-up-hover-content">
                            <h5 className="fw-medium mb-20">
                              Genere :
                              <span className="text-uppercase">hio-hop</span>
                            </h5>
                            {/* <div className="line-up-icons d-flex align-items-center gap-3 gap-lg-20">
                              <a
                                href="#"
                                className="facebook-icon"
                                aria-label="facebook"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#facebook-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="instagram-icon"
                                aria-label="instagram"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#instagram-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="youtube-icon"
                                aria-label="youtube"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#youtube-icon"></use>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="spotify-icon"
                                aria-label="spotify"
                              >
                                <svg width="20" height="20">
                                  <use xlinkHref="#spotify-icon"></use>
                                </svg>
                              </a>
                            </div> */}
                          </div>
                        </div>
                        {/* lineup-image-hover */}
                      </div>
                      {/* lineup-image-wrapper */}
                    </div>
                    {/* swiper-slide */}
                  </div>
                  {/* swiper-wrapper */}
                </div>
                {/* swiper */}
                <div className="lineup-swiper-pagination"></div>

                <div className="swiper-button-progress">
                  <div className="swiper-button-next">
                    <span className="chevron-right-icon">
                      <svg width="12" height="14">
                        <use
                          href="#chevron-right-icon"
                          xlinkHref="#chevron-right-icon"
                        ></use>
                      </svg>
                    </span>
                  </div>
                  <div className="swiper-button-prev">
                    <span className="chevron-left-icon">
                      <svg width="12" height="14">
                        <use
                          href="#chevron-left-icon"
                          xlinkHref="#chevron-left-icon"
                        ></use>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="ellipse-image-5">
                  <img src={ellipse} className="img-fluid" alt="img" />
                </div>
              </div>
            </div>
            {/* col-7 */}
          </div>
          {/* row */}
        </div>
        {/* container */}
      </section>
    </>
  );
}
