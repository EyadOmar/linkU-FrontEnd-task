/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@react-hook/media-query';
import './slider.css';
import { useEffect } from 'react';

function HeroSlider({ imgsSrc }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const sliderSettings = {
    className: 'slider',
    slidesPerView: isMobile ? 1 : 1.1,
    scrollbar: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: isMobile ? 0 : 10,
  };

  useEffect(() => {}, [isMobile]);

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
