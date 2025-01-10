import sponsor1 from "../assets/images/brand-13.png";
import sponsor2 from "../assets/images/brand-7.png";
import sponsor3 from "../assets/images/brand-14.png";
import sponsor4 from "../assets/images/brand-9.png";
import sponsor5 from "../assets/images/brand-10.png";
import sponsor6 from "../assets/images/brand-15.png";
import sponsor7 from "../assets/images/brand-16.png";

export default function Sponsors3() {
  return (
    <>
      <div className="row gy-4 gy-lg-0 justify-content-lg-between">
        <div className="col-lg-4">
          <div className="sponsors-type">
            <h2 className="fw-extra-bold mb-0">Silver Sponsors</h2>
          </div>
        </div>
        {/* col-3 */}
        <div className="col-lg-8">
          <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3 g-20 g-lg-30 align-items-center">
            <div className="col">
              <a href="#" className="sponsor-wrapper">
                <img src={sponsor1} className="img-fluid" alt="img" />
              </a>
            </div>
            <div className="col">
              <a href="#" className="sponsor-wrapper">
                <img src={sponsor2} className="img-fluid" alt="img" />
              </a>
            </div>
            <div className="col">
              <a href="#" className="sponsor-wrapper">
                <img src={sponsor3} className="img-fluid" alt="img" />
              </a>
            </div>
            <div className="col">
              <a href="#" className="sponsor-wrapper">
                <img src={sponsor4} className="img-fluid" alt="img" />
              </a>
            </div>
            <div className="col">
              <a href="#" className="sponsor-wrapper">
                <img src={sponsor5} className="img-fluid" alt="img" />
              </a>
            </div>
            <div className="col">
              <a href="#" className="sponsor-wrapper">
                <img src={sponsor6} className="img-fluid" alt="img" />
              </a>
            </div>
            <div className="col">
              <a href="#" className="sponsor-wrapper">
                <img src={sponsor7} className="img-fluid" alt="img" />
              </a>
            </div>
          </div>
          {/* row */}
        </div>
        {/* col-8 */}
      </div>
    </>
  );
}
