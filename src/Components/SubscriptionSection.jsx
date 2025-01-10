export default function SubscriptionSection() {
  return (
    <>
      <section className="subscription-section subscription-2 position-relative py-50 py-lg-70 py-xxl-100">
        <div className="container">
          <div className="subscription-wrapper">
            <div className="row justify-content-between gy-40 gy-lg-0">
              <div className="col-lg-5">
                <div className="subscription-left-content">
                  <div className="section-title mb-4 mb-lg-5">
                    <span className="fs-3 straight-line-wrapper fw-semibold position-relative">
                      <span className="straight-line"></span>Join the Harmonious
                      Beat
                    </span>
                    <h2 className="title display-3 fw-extra-bold d-flex flex-column">
                      <span className="mb-n2 text-opacity">Sonic</span>
                      <span className="sub-title fw-extra-bold text-primary">
                        Dispatch
                      </span>
                    </h2>
                  </div>
                  <p className="custom-jakarta custom-font-style-2 mb-30">
                    Become Part of Our Harmonious Community and Receive
                    Exclusive Updates, Special Offers, and Exciting News about
                    the Festival Straight to Your Inbox.
                  </p>
                  <form action="#">
                    <div className="subscription-form position-relative">
                      <input
                        type="email"
                        className="form-control"
                        id="subscriptionInput1"
                        placeholder="Enter your Email"
                      />
                      <button className="subscription-form-arrow" type="submit">
                        <svg width="37" height="38">
                          <use
                            href="#subscription-form-arrow"
                            xlinkHref="#subscription-form-arrow"
                          ></use>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-5">
                <h3 className="straight-line-wrapper fw-semibold position-relative mb-20">
                  <span className="straight-line"></span>Harmonia Wayfinder
                </h3>
                <div className="map-image parallax position-relative">
                  <span className="map-marker">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                  </span>

                  <div className="map-popup-content">
                    <h3>Basement</h3>
                    <p>135W, 46nd Street, New York</p>
                    <a
                      id="mapDirectionBtn"
                      href="#"
                      className="btn btn-primary btn-sm d-flex align-items-center justify-content-center custom-roboto gap-10 btn-map-direction"
                      data-bs-toggle="modal"
                      data-bs-target="#RoutingMapModal"
                    >
                      Get Direction
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div
                  className="modal modal-fullscreen routing-map-modal fade"
                  id="RoutingMapModal"
                  tabIndex="-1"
                  aria-labelledby="RoutingMapLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="RoutingMapLabel">
                          135 W, 46nd Street, New York
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div id="RoutingMap"></div>
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
