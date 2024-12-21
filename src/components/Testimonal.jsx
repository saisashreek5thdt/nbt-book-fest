import React from 'react'

function Testimonal() {
  return (
    <>
    <section className="testimonial__section p_relative">
  <div className="auto-container">
    <div className="testimonial__top">
      <div className="title__data">
        <div className="sub__title">
          <h4>Testimonial</h4>
        </div>
        <div className="title">
          <h2>What our clients say</h2>
        </div>
      </div>
      <div className="swiper__button">
        <div className="button_next">
          <i className="icon-06" />
        </div>
        <div className="button_prev">
          <i className="icon-05" />
        </div>
      </div>
    </div>
  </div>
  <div className="swiper-container two-item-carousel">
    <div className="swiper-wrapper">
      <div className="swiper-slide testimonials__block__one">
        <div className="test__bg" />
        <div className="testimonials__info">
          <div className="authore__img">
            <figure className="image">
              <img src="assets/images/resource/dummy-author.png" alt="Author" />
            </figure>
          </div>
          <div className="authore__rating">
            <ul>
              <li><i className="icon-13" /></li>
              <li><i className="icon-13" /></li>
              <li><i className="icon-13" /></li>
              <li><i className="icon-13" /></li>
              <li><i className="icon-13" /></li>
            </ul>
          </div>
          <div className="authore__info">
            <h5>Testimonial 1</h5>
            <p>Lorem ipsum</p>
          </div>
          <div className="testimonials__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
          </div>
        </div>
        <div className="quote">
          <span className="icon-03" />
        </div>
      </div>
      <div className="swiper-slide testimonials__block__one">
        <div className="test__bg" />
        <div className="testimonials__info">
          <div className="authore__img">
            <figure className="image">
              <img src="assets/images/resource/dummy-author.png" alt="Author" />
            </figure>
          </div>
          <div className="authore__rating">
            <ul>
              <li><i className="icon-13" /></li>
              <li><i className="icon-13" /></li>
              <li><i className="icon-13" /></li>
              <li><i className="icon-13" /></li>
              <li><i className="icon-13" /></li>
            </ul>
          </div>
          <div className="authore__info">
            <h5>testimonial 2</h5>
            <p>Lorem ipsum</p>
          </div>
          <div className="testimonials__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel orci vel magna pellentesque.</p>
          </div>
        </div>
        <div className="quote">
          <span className="icon-03" />
        </div>
      </div>
      <div className="swiper-slide testimonials__block__one">
        <div className="test__bg" />
        <div className="testimonials__info">
          <div className="authore__img">
            <figure className="image">
              <img src="assets/images/resource/dummy-author.png" alt="Author" />
            </figure>
          </div>
          <div className="authore__rating">
            <ul>
              <li><i className="icon-13" /></li>
              <li><i className="icon-13" /></li>
              <li><i className="icon-13" /></li>
              <li><i className="icon-13" /></li>
              <li><i className="icon-13" /></li>
            </ul>
          </div>
          <div className="authore__info">
            <h5>Testimonal 3</h5>
            <p>Lorem ipsum</p>
          </div>
          <div className="testimonials__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis urna non orci tincidunt.</p>
          </div>
        </div>
        <div className="quote">
          <span className="icon-03" />
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Testimonal