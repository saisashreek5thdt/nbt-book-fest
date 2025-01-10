import footer1 from "../assets/images/global/logo-landing-light.png";
import footer2 from "../assets/images/global/logo-secondary.png";

export default function FooterSection() {
  return (
    <>
      <footer className="footer-section footer-1 py-lg-50 py-40 mt-auto">
        <div className="container">
          <div className="row gy-lg-0 gy-10 justify-content-between align-items-center text-center text-lg-start">
            <div className="col-lg-4 order-3 order-lg-1">
              <p className="custom-jakarta custom-font-style-2 footer-nav">
                &copy; 2023
                <a
                  href="https://themeperch.net/"
                  className="text-decoration-none"
                  target="_blank"
                >
                  Themeperch
                </a>
                . All rights Reserved.
              </p>
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              <a
                className="navbar-brand d-flex justify-content-center"
                href="index.html"
                aria-label="nav-brands"
              >
                <img src={footer1} className="logo-light" alt="logo" />
                <img src={footer2} className="logo-dark" alt="logo" />
              </a>
            </div>
            <div className="col-lg-4 order-2 order-lg-3">
              <ul className="footer-nav list-unstyled d-flex justify-content-center justify-content-lg-end gap-30 mb-0">
                <li className="nav-item">
                  <a href="#" className="nav-link" aria-label="nav-links">
                    Privecy Policy
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" aria-label="nav-links">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
