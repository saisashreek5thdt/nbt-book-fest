import logo1 from "../assets/images/global/logo-landing-light.png";
import logo2 from "../assets/images/global/logo-secondary.png";
import logo3 from "../assets/images/global/logo.png";

export default function Header() {
  return (
    <>
      <header className="header-section header-7 sticky-navbar hover-menu">
        <div className="container">
          <nav className="navbar navbar-expand-xl">
            <div className="d-flex w-100 justify-content-between">
              <a
                className="navbar-brand"
                href="index.html"
                aria-label="nav-brands"
              >
                <img src={logo1} className="logo-light" alt="logo" />
                <img src={logo2} className="logo-dark" alt="logo" />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#navContentmenu"
                aria-controls="navContentmenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="d-none d-xl-block">
                <div className="d-flex gap-50 align-items-center">
                  <ul className="menu-list list-unstyled d-flex gap-40 navbar-nav mb-2 me-2 mb-lg-0">
                    <li className="nav-item dropdown single-pages-dropdown">
                      <a
                        className="nav-link dropdown-toggle active text-uppercase"
                        aria-current="page"
                        href="#"
                        aria-label="nav-links"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="fw-semibold">Home</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="home-1.html"
                            target="_self"
                            aria-label="single-pages"
                          >
                            Home 1
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="home-2.html"
                            target="_self"
                            aria-label="single-pages"
                          >
                            Home 2
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="home-3.html"
                            target="_self"
                            aria-label="single-pages"
                          >
                            Home 3
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="home-4.html"
                            target="_self"
                            aria-label="single-pages"
                          >
                            Home 4
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="home-5.html"
                            target="_self"
                            aria-label="single-pages"
                          >
                            Home 5
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="home-6.html"
                            target="_self"
                            aria-label="single-pages"
                          >
                            Home 6
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="home-7.html"
                            target="_self"
                            aria-label="single-pages"
                          >
                            Home 7
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-end gap-0 flex-column text-uppercase"
                        href="about-us.html"
                        aria-label="nav-links"
                      >
                        <span className="fw-semibold">About Us</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-end gap-0 flex-column text-uppercase"
                        href="venue.html"
                        aria-label="nav-links"
                      >
                        <span className="fw-semibold">Venue</span>
                      </a>
                    </li>
                    <li className="nav-item dropdown single-pages-dropdown">
                      <a
                        className="nav-link dropdown-toggle active text-uppercase"
                        href="#"
                        aria-label="nav-links"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="fw-semibold">Pages</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog.html"
                            target="_self"
                            aria-label="single-pages"
                          >
                            Blog
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog-single-1.html"
                            target="_self"
                            aria-label="single-pages"
                          >
                            Blog Single 1
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog-single-2.html"
                            target="_self"
                            aria-label="single-pages"
                          >
                            Blog Single 2
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog-single-3.html"
                            target="_self"
                            aria-label="single-pages"
                          >
                            Blog Single 3
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="event-listing.html"
                            target="_self"
                            aria-label="single-pages"
                          >
                            Event Listing
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="event-single.html"
                            target="_self"
                            aria-label="single-pages"
                          >
                            Event Single
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-end gap-0 flex-column text-uppercase"
                        href="contact-us.html"
                        aria-label="nav-links"
                      >
                        <span className="fw-semibold">Contact Us</span>
                      </a>
                    </li>
                  </ul>
                  <a
                    href="home-1.html#ticket"
                    className="btn btn-primary d-inline-flex btn-rounded align-items-center gap-2"
                    aria-label="buttons"
                  >
                    <span className="buttons-logo">
                      <svg width="25" height="25">
                        <use href="#buttons-logo" xlinkHref="#buttons-logo"></use>
                      </svg>
                    </span>
                    Buy Ticket
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div
        className="offcanvas offcanvas-top"
        id="navContentmenu"
        data-bs-backdrop="static"
        tabIndex="-1"
      >
        <div className="offcanvas-header">
          <a className="navbar-brand" href="index.html" aria-label="nav-brands">
            <img src={logo3} alt="logo" />
          </a>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex justify-content-center">
          <ul className="navbar-nav custom-navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown offcanvas-pages-dropdown">
              <a
                className="nav-link dropdown-toggle active text-uppercase"
                aria-current="page"
                href="#"
                aria-label="nav-links"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="fw-semibold">Home</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="home-1.html"
                    target="_blank"
                    aria-label="single-pages"
                  >
                    Home 1
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="home-2.html"
                    target="_blank"
                    aria-label="single-pages"
                  >
                    Home 2
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="home-3.html"
                    target="_blank"
                    aria-label="single-pages"
                  >
                    Home 3
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="home-4.html"
                    target="_blank"
                    aria-label="single-pages"
                  >
                    Home 4
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="home-5.html"
                    target="_blank"
                    aria-label="single-pages"
                  >
                    Home 5
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="home-6.html"
                    target="_blank"
                    aria-label="single-pages"
                  >
                    Home 6
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="home-7.html"
                    target="_blank"
                    aria-label="single-pages"
                  >
                    Home 7
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-uppercase"
                href="about-us.html"
                aria-label="nav-links"
              >
                <span className="fw-semibold">About Us</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-uppercase"
                href="venue.html"
                aria-label="nav-links"
              >
                <span className="fw-semibold">Venue</span>
              </a>
            </li>
            <li className="nav-item dropdown offcanvas-pages-dropdown">
              <a
                className="nav-link dropdown-toggle text-uppercase"
                href="#"
                aria-label="nav-links"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="fw-semibold">Blog</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="blog.html"
                    target="_blank"
                    aria-label="single-pages"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="blog-single-1.html"
                    target="_blank"
                    aria-label="single-pages"
                  >
                    Blog Single 1
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="blog-single-2.html"
                    target="_blank"
                    aria-label="single-pages"
                  >
                    Blog Single 2
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="blog-single-3.html"
                    target="_blank"
                    aria-label="single-pages"
                  >
                    Blog Single 3
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-uppercase"
                href="contact-us.html"
                aria-label="nav-links"
              >
                <span className="fw-semibold">Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
