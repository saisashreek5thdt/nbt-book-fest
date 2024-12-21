import React from 'react';

function Services() {
  return (
    <>
      <section className="service__section p_relative">
        <div className="auto-container">
          <div className="service__data">
            <div className="title__data">
              <div className="sub__title">
                <h4>Mumbai Book Fest</h4>
              </div>
              <div className="title">
                <h2>Explore Our Book Services</h2>
              </div>
            </div>
            <div className="row">
              {/* Block 1 */}
              <div
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="service__block">
                  <div className="service__icon">
                    <i className="fa-solid fa-book" />
                    <div className="service__icon__two" />
                  </div>
                  <div className="service__text">
                    <h4>
                      <a href="service-details.html">Book Collection</a>
                    </h4>
                    <p>Discover an extensive collection of books across all genres.</p>
                  </div>
                  <div className="service__button">
                    <a href="service-details.html">
                      <i className="fa-solid fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Block 2 */}
              <div
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="service__block">
                  <div className="service__icon">
                    <i className="fa-solid fa-palette" />
                    <div className="service__icon__two" />
                  </div>
                  <div className="service__text">
                    <h4>
                      <a href="service-details.html">Book Design</a>
                    </h4>
                    <p>Custom book cover and interior design services for authors.</p>
                  </div>
                  <div className="service__button">
                    <a href="service-details.html">
                      <i className="fa-solid fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Block 3 */}
              <div
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="service__block">
                  <div className="service__icon">
                    <i className="fa-solid fa-bullhorn" />
                    <div className="service__icon__two" />
                  </div>
                  <div className="service__text">
                    <h4>
                      <a href="service-details.html">Book Promotions</a>
                    </h4>
                    <p>Boost your book's visibility with our marketing strategies.</p>
                  </div>
                  <div className="service__button">
                    <a href="service-details.html">
                      <i className="fa-solid fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Block 4 */}
              <div
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="service__block">
                  <div className="service__icon">
                    <i className="fa-solid fa-chart-line" />
                    <div className="service__icon__two" />
                  </div>
                  <div className="service__text">
                    <h4>
                      <a href="service-details.html">Author Analytics</a>
                    </h4>
                    <p>Track your book sales, audience engagement, and more.</p>
                  </div>
                  <div className="service__button">
                    <a href="service-details.html">
                      <i className="fa-solid fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Block 5 */}
              <div
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="service__block">
                  <div className="service__icon">
                    <i className="fa fa-globe" />
                    <div className="service__icon__two" />
                  </div>
                  <div className="service__text">
                    <h4>
                      <a href="service-details.html">E-Book Development</a>
                    </h4>
                    <p>Transform your manuscript into a professional e-book format.</p>
                  </div>
                  <div className="service__button">
                    <a href="service-details.html">
                      <i className="fa-solid fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Block 6 */}
              <div
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="service__block">
                  <div className="service__icon">
                    <i className="fa-solid fa-search" />
                    <div className="service__icon__two" />
                  </div>
                  <div className="service__text">
                    <h4>
                      <a href="service-details.html">Rare Book Search</a>
                    </h4>
                    <p>We help you find rare and out-of-print books for your collection.</p>
                  </div>
                  <div className="service__button">
                    <a href="service-details.html">
                      <i className="fa-solid fa-chevron-right" />
                    </a>
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

export default Services;
