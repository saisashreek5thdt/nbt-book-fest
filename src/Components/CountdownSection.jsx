export default function Countdown() {
  return (
    <>
      <div className="countdown-section position-relative pt-50 pt-lg-100 pt-xxl-130">
        <div className="dark-wrapper-bg">
          <div className="container">
            {/* CountDown Section */}
            <div className="countdown">
              <div className="row row-cols-2 row-cols-lg-3 row-cols-xl-4 justify-content-between align-items-center">
                <div className="col">
                  <div className="countdown-item">
                    <span
                      className="countdown-number text-primary custom-jakarta"
                      id="days"
                    >
                      00
                    </span>
                    <span className="countdown-label text-opacity custom-jakarta">
                      Days
                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="countdown-item">
                    <span
                      className="countdown-number text-primary custom-jakarta"
                      id="hours"
                    >
                      00
                    </span>
                    <span className="countdown-label text-opacity custom-jakarta">
                      Hours
                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="countdown-item">
                    <span
                      className="countdown-number text-primary custom-jakarta"
                      id="minutes"
                    >
                      00
                    </span>
                    <span className="countdown-label text-opacity custom-jakarta">
                      Minutes
                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="countdown-item">
                    <span
                      className="countdown-number text-primary custom-jakarta"
                      id="seconds"
                    >
                      00
                    </span>
                    <span className="countdown-label text-opacity custom-jakarta">
                      Seconds
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
