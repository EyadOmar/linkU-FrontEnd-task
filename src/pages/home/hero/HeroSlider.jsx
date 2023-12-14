/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css';

function HeroSlider({ imgsSrc }) {
  const sliderSettings = {
    className: 'slider',
    slidesPerView: 1.1,
    scrollbar: true,
    loop: true,
    centeredSlides: true,
  };

  return (
    <Swiper {...sliderSettings} dir="ltr">
      {imgsSrc.map((img, i) => (
        <SwiperSlide key={`$img-${i}`}>
          <img src={img} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;
