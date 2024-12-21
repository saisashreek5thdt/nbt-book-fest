import React from "react";
import blogImg from "../assets/images/blogs/blog1.jpg"

export default function Blogs() {
  return (
    <>
      {/* blog-section */}
      <section className="blog__section see__pad p_relative">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="title__data">
                <div className="sub__title">
                  <h4>Latest News </h4>
                </div>
                <div className="title">
                  <h2>Learn From Blog</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="normaol__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus lacinia odio vitae vestibulum.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 news__block">
              <div
                className="news___block wow slideInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <a href="blog-details.html">
                        <img src={blogImg} alt="" />
                      </a>
                    </figure>
                    {/* <div className="post__date">
                      <ul>
                        <li>
                          {" "}
                          <i className="icon-15" />
                          26 July 2023
                        </li>
                        <li className="two" />
                        <li>
                          <i className="icon-09" /> Admin
                        </li>
                      </ul>
                    </div> */}
                  </div>
                  <div className="lower___content p_relative">
                    <h4>
                      <a href="blog-details.html">Lorem Ipsum</a>
                    </h4>
                    <div className="btn__box__two">
                      <a href="blog-details.html" className="theme__btn__two">
                        <i className="icon-02" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news__block">
              <div
                className="news___block wow slideInUp animated animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <a href="blog-details.html">
                        <img src={blogImg} alt="" />
                      </a>
                    </figure>
                    {/* <div className="post__date">
                      <ul>
                        <li>
                          {" "}
                          <i className="icon-15" />
                          26 July 2023
                        </li>
                        <li className="two" />
                        <li>
                          <i className="icon-09" /> Admin
                        </li>
                      </ul>
                    </div> */}
                  </div>
                  <div className="lower___content p_relative">
                    <h4>
                      <a href="blog-details.html">Lorem Ipsum</a>
                    </h4>
                    <div className="btn__box__two">
                      <a href="blog-details.html" className="theme__btn__two">
                        <i className="icon-02" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news__block">
              <div
                className="news___block wow slideInUp animated animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <a href="blog-details.html">
                        <img src={blogImg} alt="" />
                      </a>
                    </figure>
                    {/* <div className="post__date">
                      <ul>
                        <li>
                          {" "}
                          <i className="icon-15" />
                          26 July 2023
                        </li>
                        <li className="two" />
                        <li>
                          <i className="icon-09" /> Admin
                        </li>
                      </ul>
                    </div> */}
                  </div>
                  <div className="lower___content p_relative">
                    <h4>
                      <a href="blog-details.html">Lorem Ipsum</a>
                    </h4>
                    <div className="btn__box__two">
                      <a href="blog-details.html" className="theme__btn__two">
                        <i className="icon-02" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog-section-end */}
    </>
  );
}
