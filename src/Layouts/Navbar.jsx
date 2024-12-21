import React from 'react'

function Navbar() {
  return (
<>
<header className="main-header header__style__one ">
        {/* header-top-one */}
        <div className="header-top-one">
          <div className="auto-container">
            <div className="top__inner">
              <div className="top__hrader__left">
                <ul>
                  <li>
                    <span>Address :</span> Mumbai
                  </li>
                  <li>/</li>
                  <li>
                    <span>Email :</span>{" "}
                    <a href="mailto:info@nbt.com">info@nbt.com</a>
                  </li>
                </ul>
              </div>
              <div className="top__hrader__right">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon-10" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-14" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-01" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-11" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* header-lower */}
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <a href="index.html">
                    <img
                      src="assets/images/logo3.png"
                      alt=""
                      style={{ width: "180px", height: "75px" }}
                    />
                  </a>
                </figure>
              </div>
              <div className="menu-area clearfix">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix home-menu">
                      <li className=" dropdown">
                        <a href="#">Home</a>
                        {/* <ul>
                          <li>
                            <a href="index.html">Home One </a>
                          </li>
                          <li>
                            <a href="index-2.html">Home Two </a>
                          </li>
                          <li>
                            <a href="index-3.html">Home Three </a>
                          </li>
                        </ul> */}
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">Services </a>
                        {/* <ul>
                          <li>
                            <a href="services.html">Services </a>
                          </li>
                          <li>
                            <a href="service-details.html">Services Details</a>
                          </li>
                        </ul> */}
                      </li>
                      <li className="dropdown">
                        <a href="#">Page</a>
                        {/* <ul>
                          <li className="dropdown">
                            <a href="#">Projects </a>
                            <ul>
                              <li>
                                <a href="projects.html">Projects </a>
                              </li>
                              <li>
                                <a href="projects-details.html">
                                  Projects Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="pricing.html">Pricing</a>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="testimonial.html">Testimonial</a>
                          </li>
                          <li>
                            <a href="404.html">404 Page</a>
                          </li>
                        </ul> */}
                      </li>
                      <li className="dropdown">
                        <a href="#">Blog</a>
                        {/* <ul>
                          <li>
                            <a href="blog.html">Blog </a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul> */}
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="btn-box">
                <a href="contact.html" className="theme-btn theme-btn-one">
                  <i className="icon-02" /> Discuses
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*sticky Header*/}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <a href="index.html">
                    <img src="assets/images/logo3.png" alt="" />
                  </a>
                </figure>
              </div>
              <div className="menu-area clearfix">
                <nav className="main-menu clearfix">
                  {/*Keep This Empty / Menu will come through Javascript*/}
                </nav>
              </div>
              <div className="btn-box">
                <a href="contact.html" className="theme-btn theme-btn-one">
                  <i className="icon-02" /> Discuses
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* main-header end */}
      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
          <i className="icon-fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <a href="index.html">
              <img src="assets/images/logo.png" alt="" title="" />
            </a>
          </div>
          <div className="menu-outer">
            {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Chicago 12, Melborne City, USA</li>
              <li>
                <a href="tel:+8801682648101">+88 01682648101</a>
              </li>
              <li>
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
</>
  )
}

export default Navbar