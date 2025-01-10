import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import gallery5 from "../assets/images/gallery-5.jpg";
import gallery6 from "../assets/images/gallery-6.jpg";
import gallery7 from "../assets/images/gallery-7.jpg";
import gallery8 from "../assets/images/gallery-8.jpg";
import gallery9 from "../assets/images/gallery-9.jpg";
import gallery10 from "../assets/images/gallery-10.jpg";
import gallery11 from "../assets/images/gallery-11.jpg";

export default function GallerySection() {
  return (
    <>
      <div className="gallery-section gallery-1 py-50 py-lg-100 py-xxl-120">
        <div className="swiper swiper_gallery">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="gallery-image">
                <a
                  href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                  className="video-popup-link hover-area"
                  data-cursor-text="Video"
                >
                  <img src={gallery1} alt="img" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-image">
                <a
                  href={gallery2}
                  className="image-link hover-area"
                  data-cursor-text="Image"
                >
                  <img src={gallery2} alt="img" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-image">
                <a
                  href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                  className="video-popup-link hover-area"
                  data-cursor-text="Video"
                >
                  <img src={gallery3} alt="img" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-image">
                <a
                  href={gallery4}
                  className="image-link hover-area"
                  data-cursor-text="Image"
                >
                  <img src={gallery4} alt="img" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-image">
                <a
                  href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                  className="video-popup-link hover-area"
                  data-cursor-text="Video"
                >
                  <img src={gallery5} alt="img" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-image">
                <a
                  href={gallery5}
                  className="image-link hover-area"
                  data-cursor-text="Image"
                >
                  <img src={gallery5} alt="img" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-image">
                <a
                  href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                  className="video-popup-link hover-area"
                  data-cursor-text="Video"
                >
                  <img src={gallery6} alt="img" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* swiper-gallery */}

        <div className="swiper swiper_gallery2">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="gallery-image">
                <a
                  href={gallery6}
                  className="image-link hover-area"
                  data-cursor-text="Image"
                >
                  <img src={gallery6} alt="img" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-image">
                <a
                  href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                  className="video-popup-link hover-area"
                  data-cursor-text="Video"
                >
                  <img src={gallery7} alt="img" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-image">
                <a
                  href={gallery8}
                  className="image-link hover-area"
                  data-cursor-text="Image"
                >
                  <img src={gallery8} alt="img" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-image">
                <a
                  href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                  className="video-popup-link hover-area"
                  data-cursor-text="Video"
                >
                  <img src={gallery9} alt="img" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-image">
                <a
                  href={gallery10}
                  className="image-link hover-area"
                  data-cursor-text="Image"
                >
                  <img src={gallery10} alt="img" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-image">
                <a
                  href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                  className="video-popup-link hover-area"
                  data-cursor-text="Video"
                >
                  <img src={gallery11} alt="img" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-image">
                <a
                  href={gallery1}
                  className="image-link hover-area"
                  data-cursor-text="Image"
                >
                  <img src={gallery1} alt="img" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* swiper-gallery2 */}
      </div>
    </>
  );
}
