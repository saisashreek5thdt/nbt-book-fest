import React from "react";

export default function BrandTags() {
  return (
    <>
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
    </>
  );
}
