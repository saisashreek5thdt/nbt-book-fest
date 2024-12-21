import React from "react";

export default function Speakers() {
  return (
    <>
      {/* team-section */}
      <section className="team__section see__pad p_relative">
        <div className="pattern-layer">
          <div
            className="pattern-3 p_absolute"
            data-parallax='{"y": 50}'
            style={{
              backgroundImage: "url(assets/images/shapes/shape-03.png)",
            }}
          />
        </div>
        <div className="auto-container">
          <div className="title__data">
            <div className="sub__title">
              <h4>Speakers</h4>
            </div>
            <div className="title">
              <h2>Invited Speakers for Mumbai Book Fest</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team__block wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="team__img">
                  <figure>
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="team__name">
                  <h3>Speaker 1</h3>
                </div>
                <div className="team__media">
                  {/* <ul>
                    <li>
                      <a href="#">FB.</a>
                    </li>
                    <li>
                      <a href="#">TW.</a>
                    </li>
                    <li>
                      <a href="#">LI</a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team__block wow fadeInUp animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="team__img">
                  <figure>
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="team__name">
                  <h3>Speaker 2</h3>
                </div>
                <div className="team__media">
                  {/* <ul>
                    <li>
                      <a href="#">FB.</a>
                    </li>
                    <li>
                      <a href="#">TW.</a>
                    </li>
                    <li>
                      <a href="#">LI</a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team__block wow fadeInUp animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="team__img">
                  <figure>
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="team__name">
                  <h3>Speaker 3</h3>
                </div>
                <div className="team__media">
                  {/* <ul>
                    <li>
                      <a href="#">FB.</a>
                    </li>
                    <li>
                      <a href="#">TW.</a>
                    </li>
                    <li>
                      <a href="#">LI</a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team__block wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="team__img">
                  <figure>
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="team__name">
                  <h3>Speaker4</h3>
                </div>
                <div className="team__media">
                  {/* <ul>
                    <li>
                      <a href="#">FB.</a>
                    </li>
                    <li>
                      <a href="#">TW.</a>
                    </li>
                    <li>
                      <a href="#">LI</a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* team-section-end */}
    </>
  );
}
