/* eslint-disable react/prop-types */
import LocPin from '/product-icons/Location-pin.svg';
import Time from '/product-icons/time.svg';
import { useEffect, useRef, useState } from 'react';
import './products.css';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
function Product({ prod }) {
  const { t } = useTranslation();
  const [isFav, setIsFav] = useState(prod.fav);
  const priceCurrency = Cookies.get('countery') === 'canada' ? '$' : 'ريال';
  const cover = useRef(null);

  const favClickHandler = () => {
    setIsFav(!isFav);
  };

  useEffect(() => {
    cover.current.style.backgroundImage = `url(${prod.img})`;
  }, []);
  return (
    <div className="product-card">
      <div className="cover" ref={cover}></div>
      <article>
        <div className="row flex flex-between">
          <span className="price">
            {prod.price} {priceCurrency}
          </span>
          <button
            className={`fav-btn ${isFav ? 'active' : ''}`}
            onClick={favClickHandler}
          ></button>
        </div>
        <div className="prod-details">
          <h3>{t(prod.title)}</h3>
          <p>{t(prod.desc)}</p>
        </div>
        <div className="row flex flex-between">
          <span>
            <img src={LocPin} alt="" />
            {t(prod.loc)}
          </span>
          <span>
            <img src={Time} alt="" />
            {prod.date} {t('days')}
          </span>
        </div>
      </article>
    </div>
  );
}

export default Product;
