/* eslint-disable react/prop-types */
import Product from './Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import './products.css';
import productsData from './products-data';
import Arrow from '/product-icons/arrow.svg';
import { useTranslation } from 'react-i18next';

function Products({ title }) {
  const { t } = useTranslation();

  const sliderSettings = {
    className: 'slider',
    scrollbar: true,
    spaceBetween: 0,
  };

  return (
    <section className="products">
      <div className="container">
        <div className="title flex flex-between">
          <h2>{t(title)}</h2>
          <a href="#" className="flex">
            {t('see_all')}
            <img src={Arrow} alt={t('see_all')} />
          </a>
        </div>
        <Swiper {...sliderSettings} dir="ltr" slidesPerView={'auto'}>
          {productsData.map((prod, i) => (
            <SwiperSlide key={`${title}-prod-${i}`}>
              <Product prod={prod} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Products;
