/* eslint-disable react/prop-types */
import Product from './Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import './products.css';
import productsData from './products-data';

function Products({ title }) {
  const sliderSettings = {
    className: 'slider',
    scrollbar: true,
    spaceBetween: 0,
  };

  return (
    <section className="products">
      <div className="container">
        <h2>{title}</h2>
        <Swiper {...sliderSettings} dir="ltr" slidesPerView={'auto'}>
          {productsData.map((prod, i) => (
            <SwiperSlide key={`${title}-prod-${i}`}>
              <Product prod= {prod} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Products;
