/* eslint-disable react/prop-types */
import LocPin from '/product-icons/Location-pin.svg';
import Time from '/product-icons/time.svg';
import { useEffect, useRef, useState } from 'react';
import './products.css';
import Cookies from 'js-cookie';
function Product({ prod }) {
  const [isFav, setIsFav] = useState(prod.fav);
  const priceCurrency = Cookies.get('countery') === 'canada' ? 'CAD' : 'ريال';
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
        <h3>{prod.title}</h3>
        <p>{prod.desc}</p>
        <div className="row flex flex-between">
          <span>
            <img src={LocPin} alt="" />
            {prod.loc}
          </span>
          <span>
            <img src={Time} alt="" />
            {prod.date} days
          </span>
        </div>
      </article>
    </div>
  );
}

export default Product;
