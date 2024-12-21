
import { useEffect } from "react";
import Navbar from "./Layouts/Navbar";
import Services from "./components/Services";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Testimonal from "./components/Testimonal";
import HexagonCarousel from "./components/HexagonCarousel";

function App() {
  const loadScript = (src, onLoad = () => {}) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = onLoad;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script); // Cleanup if the component unmounts
    };
  };

  useEffect(() => {
    // Load scripts in order (if needed)
    const cleanups = [
      loadScript("assets/js/jquery.js"),
      loadScript("assets/js/bootstrap.min.js"),
      loadScript("assets/js/owl.js"),
      loadScript("assets/js/wow.js"),
      loadScript("assets/js/jquery.fancybox.js"),
      loadScript("assets/js/appear.js"),
      loadScript("assets/js/scrollbar.js"),
      loadScript("assets/js/swiper.min.js"),
      loadScript("assets/js/parallax-scroll.js"),
      loadScript("assets/js/script.js"), // Main script
    ];

    // Cleanup on unmount
    return () => cleanups.forEach((cleanup) => cleanup && cleanup());
  }, []);
  return (
    <div>
      {/* mouse-pointer */}
      <div className="mouse-pointer" id="mouse-pointer">
        <div className="icon">
          <i className="icon-06" />
          <i className="icon-05" />
        </div>
      </div>
      {/* mouse-pointer end */}
      {/* preloader */}
      <div className="loader-wrap">
        <div className="hendel__preloder">
          <div className="preloader">
            <div className="preloader-ring">
              Mumbai Book Fair
            </div>
            <div className="preloader-ring">
            Mumbai Book Fair
            </div>
          </div>
        </div>
      </div>
      {/* preloader end */}
      {/* main header */}
      <Navbar/>
      {/* End Mobile Menu */}
      {/* banner-one */}
      <section className="banner__one ">
        <div className="pattern-layer">
          <div
            className="banner__icon pattern-1 p_absolute"
            data-parallax='{"x": 100}'
            style={{
              backgroundImage: "url(assets/images/banner/banner-shap-01.png)",
            }}
          />
        </div>
        <div className="banner__data p_relative">
          <div
            className="banner__bg"
            style={{
              backgroundImage: "url(assets/images/banner/banner-bg.png)",
            }}
          />
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="banner__left">
                  <div className="sub__title">
                    <h4>Mumbai Literature Festival</h4>
                  </div>
                  <div className="banner__title">
                    <h1>
                      Book <span>Fest</span>{" "}
                    </h1>
                  </div>
                  <div className="text">
                    <p>Azad Maidan, Mumbai. </p>
                  </div>
                  {/* <div className="btn-box">
                    <a href="contact.html" className="theme-btn theme-btn-one">
                      <i className="icon-02" /> Contact Us
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-2" />
              <div className="col-lg-4 col-md-12 ">
                <div className="banner__right p_relative">
                  <div className="image__one">
                    <figure
                      className="image-box wow slideInUp animated animated animated animated"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                      style={{ visibility: "visible" }}
                    >
                      <img src="assets/images/banner/banner-01.png" alt="" />
                    </figure>
                  </div>
                  <div className="icon__image__banner">
                    <div className="circle-main">
                      <div className="circle">
                        <img src="assets/images/logo2.png" alt="" />
                        <div className="round-text">
                          <div className="text_1">
                            <p className="text_2">
                            Azad Maidan Mumbai Book Fest April 2025
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner-one end */}
      {/* service */}
     <Services/>
     <HexagonCarousel/>
      {/* service-end */}
      {/* about */}
      <section className="about__section p_relative see__pad">
        <div className="pattern-layer">
          <div
            className="pattern-2 p_absolute"
            data-parallax='{"x": -50}'
            style={{
              backgroundImage: "url(assets/images/shapes/shape-02.png)",
            }}
          />
        </div>
        <div className="boild__text">
          <h1>Mumbai Book Festival</h1>
        </div>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about__block p_relative">
                <figure
                  className="wow zoomIn animated"
                  data-wow-delay="100ms"
                  data-wow-duration="1500ms"
                >
                  <img src="assets/images/resource/about-us.png" alt="" />
                </figure>
                <div
                  className="funfact__content about"
                  style={{
                    backgroundImage: "url(assets/images/shapes/shape-01.png)",
                  }}
                >
                  <div className="count-outer count-box">
                    <h1 className="count-text" data-speed={1500} data-stop={2}>
                      0
                    </h1>
                    <span>K+</span>
                  </div>
                  <p>World wide Client</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-5 col-md-12">
              <div className="about__text__block">
                <div className="sub__title">
                  <h4>About Mumbai Book Fest</h4>
                </div>
                <div className="title two">
                  <h2>
                    Enhancing Real-world Experiences with AR{" "}
                    <span>Technology</span>.
                  </h2>
                </div>
                <div className="texts">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit,.
                  </p>
                </div>
                <div className="btn-box">
                  {/* <a href="about.html" className="theme-btn theme-btn-one">
                    <i className="icon-02" /> About more
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-end */}

      {/* added data */}
       <div className="auto-container">
          <div className="title__data">
            <div className="sub__title">
              <h4>Exectutive member</h4>
            </div>
            <div className="title">
              <h2>We Have Expert Member</h2>
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
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png" alt="" />
                  </figure>
                </div>
                <div className="team__name">
                  <h3>Member 1</h3>
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
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png" alt="" />
                  </figure>
                </div>
                <div className="team__name">
                  <h3>Member 2</h3>
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
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png" alt="" />
                  </figure>
                </div>
                <div className="team__name">
                  <h3>Member 3</h3>
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
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png" alt="" />
                  </figure>
                </div>
                <div className="team__name">
                  <h3>Member 4</h3>
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

        {/* <HexagonCarousel/> */}

      {/* choose */}
      <section className="choose__us p_relative">
        <div className="choose__us__data">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="choose__block">
                  <figure>
                    <img src="assets/images/resource/choose-01.png" alt="" />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="choose__block__right">
                  <div className="title__data">
                    <div className="sub__title">
                      <h4>Event schedule</h4>
                    </div>
                    <div className="title">
                      <h2>We Provide Your Best Work </h2>
                    </div>
                  </div>
                  <div className="team__data">
                    <div className="team__data__left">
                      <img src="assets/images/resource/choose-02.svg" alt="" />
                    </div>
                    <div className="team__data__right">
                      <h3>Lorem ipsum :</h3>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
                      </p>
                    </div>
                  </div>
                  <div className="team__data">
                    <div className="team__data__left">
                      <img src="assets/images/resource/choose-02.svg" alt="" />
                    </div>
                    <div className="team__data__right">
                      <h3>Lorem ipsum :</h3>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
                      </p>
                    </div>
                  </div>
                  <div className="team__data three">
                    <div className="team__data__left">
                      <img src="assets/images/resource/choose-02.svg" alt="" />
                    </div>
                    <div className="team__data__right">
                      <h3>Lorem ipsum :</h3>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* choose-end */}
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
              <h2>We Have Expert Member</h2>
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
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png" alt="" />
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
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png" alt="" />
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
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png" alt="" />
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
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png" alt="" />
                  </figure>
                </div>
                <div className="team__name">
                  <h3>Kristin Watson</h3>
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
      {/* testimonial-section */}
      <Testimonal/>
      {/* testimonial-section-end */}
      {/* brand-section */}
      <div className="brand__section p_relative see__pad">
        <div className="pattern-layer">
          <div
            className="pattern-3 p_absolute"
            data-parallax='{"y": -50}'
            style={{
              backgroundImage: "url(assets/images/shapes/shape-05.png)",
            }}
          />
        </div>
        <div className="brand-carousel owl-carousel owl-theme  nav-style-one owl-loaded owl-drag">
          <div className="brand__content">
            <div className="brand__name">
              <h1>Mumbai *</h1>
            </div>
          </div>
          <div className="brand__content">
            <div className="brand__name">
              <h1>Book Fest 2025 *</h1>
            </div>
          </div>
          <div className="brand__content">
            <div className="brand__name">
              <h1>Mumbai *</h1>
            </div>
          </div>
          <div className="brand__content">
            <div className="brand__name">
              <h1>Book Fest 2025 *</h1>
            </div>
          </div>
        </div>
      </div>
      {/* brand-section-end */}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
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
                        <img src="assets/images/news/news-1.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="post__date">
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
                    </div>
                  </div>
                  {/* <div className="lower___content p_relative">
                    <h4>
                      <a href="blog-details.html">
                        4 Cybersecurity Takeaways from China’s Largest Data
                        Breach
                      </a>
                    </h4>
                    <div className="btn__box__two">
                      <a href="blog-details.html" className="theme__btn__two">
                        <i className="icon-02" />
                      </a>
                    </div>
                  </div> */}
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
                        <img src="assets/images/news/news-2.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="post__date">
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
                    </div>
                  </div>
                  {/* <div className="lower___content p_relative">
                    <h4>
                      <a href="blog-details.html">
                        4 Cybersecurity Takeaways from China’s Largest Data
                        Breach
                      </a>
                    </h4>
                    <div className="btn__box__two">
                      <a href="blog-details.html" className="theme__btn__two">
                        <i className="icon-02" />
                      </a>
                    </div>
                  </div> */}
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
                        <img src="assets/images/news/news-3.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="post__date">
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
                    </div>
                  </div>
                  {/* <div className="lower___content p_relative">
                    <h4>
                      <a href="blog-details.html">
                        4 Cybersecurity Takeaways from China’s Largest Data
                        Breach
                      </a>
                    </h4>
                    <div className="btn__box__two">
                      <a href="blog-details.html" className="theme__btn__two">
                        <i className="icon-02" />
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog-section-end */}
      {/* footer-one */}
      <footer className="main__footer">
        <div className="footer-top">
          <div className="auto-container">
            <div className="top-inner">
              <div className="left__top">
                <h3>Mumbai Book Festival</h3>
              </div>
              <div className="right__top">
                <div className="btn-box">
                  {/* <a href="contact.html" className="theme-btn theme-btn-one">
                    <i className="icon-02" /> Contact Us
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__one">
          <div className="footer-widget-section">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div
                    className="footer-widget footer-logo-widget wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <figure className="footer-logo">
                      <a href="index.html">
                        <img src="assets/images/logo2.png" alt="" />
                      </a>
                    </figure>
                    <div className="text">
                      <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <div className="btn-box">
                      <a href="about.html" className="theme-btn theme-btn-one">
                        <i className="icon-02" /> About Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div
                    className="footer-widget news-letter-widget ml_80 wow fadeInUp animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="widget-title">
                      <h4>Newletter</h4>
                    </div>
                    <div className="text">
                      <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      </p>
                    </div>
                    <div className="subscribe-inner">
                      <form
                        action="https://test.valorwide.com/datamatrix/contact.html"
                        method="post"
                        className="subscribe-form"
                      >
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your mail address *"
                            required=""
                          />
                          <div className="btn-box">
                            <button
                              className="theme-btn theme-btn-one"
                              type="submit"
                            >
                              <i className="icon-02" /> GO
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div
                    className="footer-widget office-widget wow fadeInUp animated"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="widget-title">
                      <h4>Official info:</h4>
                    </div>
                    <div className="widget-content">
                      <div className="text">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                      <a href="tell:3055873407">+2(305) 587-3407</a>
                      <a href="mailto:sample@example.com">sample@example.com</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column pr-0">
                  <div
                    className="footer-widget gallery-widget wow fadeInUp animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="widget-title">
                      <h4>Gallery</h4>
                    </div>
                    <div className="widget_content">
                      <ul className="instagram_list clearfix">
                        <li>
                          <div className="inner__box">
                            <div className="image__box">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="assets/images/resource/gallery-01.png"
                              >
                                <img
                                  src="assets/images/resource/gallery-01.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner__box">
                            <div className="image__box">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="assets/images/resource/gallery-02.png"
                              >
                                <img
                                  src="assets/images/resource/gallery-02.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner__box">
                            <div className="image__box">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="assets/images/resource/gallery-03.png"
                              >
                                <img
                                  src="assets/images/resource/gallery-03.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner__box">
                            <div className="image__box">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="assets/images/resource/gallery-04.png"
                              >
                                <img
                                  src="assets/images/resource/gallery-04.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner__box">
                            <div className="image__box">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="assets/images/resource/gallery-05.png"
                              >
                                <img
                                  src="assets/images/resource/gallery-05.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner__box">
                            <div className="image__box">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="assets/images/resource/gallery-06.png"
                              >
                                <img
                                  src="assets/images/resource/gallery-06.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="auto-container">
              <div className="bottom-inner">
                <div className="copyright">
                  <p>
                    © 2024 <a href="index.html">.</a> All rights
                    reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer-one end */}
      {/*Scroll to top*/}
      <div className="scroll-to-top">
        <div>
          <div className="scroll-top-inner">
            <div className="scroll-bar">
              <div className="bar-inner" />
            </div>
            <div className="scroll-bar-text g_color">Go To Top</div>
          </div>
        </div>
      </div>
      {/* Scroll to top end */}
    </div>
  );
}

export default App;
