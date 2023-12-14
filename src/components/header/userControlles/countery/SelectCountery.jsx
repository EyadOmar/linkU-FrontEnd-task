import { useRef, useEffect, useState } from 'react';
import down from '../../../../assets/icons/down.svg';
import counteries from './counteries';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

function SelectCountery() {
  const [currentCountery, setCurrentCountery] = useState(
    Cookies.get('countery') || 'canada'
  );

  const currentCode = counteries.find(
    (country) => country.name == currentCountery
  ).code;

  const { t } = useTranslation();
  const counterySelect = useRef(null);
  const counteryMenu = useRef(null);

  useEffect(() => {
    counterySelect.current.addEventListener('click', toggleCounteries);

    return () => {
      counterySelect.current.removeEventListener('click', toggleCounteries);
    };
  }, [currentCountery]);

  const toggleCounteries = () => {
    counteryMenu.current.classList.toggle('active');
  };

  const handleCounteryClick = (country) => {
    Cookies.set('countery', country.name);
    setCurrentCountery(country.name);
  };

  return (
    <div
      ref={counterySelect}
      className="main-header-select countery-select flex"
    >
      <span className={`flag-icon flag-icon-${currentCode}`}></span>
      <span className="countery">{t(currentCountery)}</span>
      <div className="select-icon">
        <img src={down} alt={t('choose-count')} title={t('choose-count')} />
      </div>
      <ul ref={counteryMenu} className="counteries drop-down-menu">
        {counteries.map((country) => (
          <li key={country.name} onClick={() => handleCounteryClick(country)}>
            <button>{t(country.name)}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectCountery;
