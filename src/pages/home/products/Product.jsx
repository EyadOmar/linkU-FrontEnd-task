/* eslint-disable react/prop-types */
import Favorite from '/product-icons/favorite.svg';
import LocPin from '/product-icons/Location-pin.svg';
import Time from '/product-icons/time.svg';
import { useEffect, useRef } from 'react';
import './products.css';
import Cookies from 'js-cookie';
function Product({ img, price, fav, title, desc, loc, date }) {
  const priceCurrency = Cookies.get('countery') === 'canada' ? 'CAD' : 'ريال';

  const cover = useRef(null);

  useEffect(() => {
    cover.current.style.backgroundImage = `url(${img})`;
  }, []);
  return (
    <div className="product-card">
      <div className="cover" ref={cover}></div>
      <article>
        <div className="row flex flex-between">
          <span className="price">
            {price} {priceCurrency}
          </span>
          <button className="fav-btn">
            <img src={Favorite} alt="" className={`${fav ? 'active' : ''}`} />
          </button>
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="row flex flex-between">
          <span>
            <img src={LocPin} alt="" />
            {loc}
          </span>
          <span>
            <img src={Time} alt="" />
            {date} days
          </span>
        </div>
      </article>
    </div>
  );
}

export default Product;
