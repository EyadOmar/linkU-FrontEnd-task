/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react';
import down from '../../../../assets/icons/down.svg';
import i18next from 'i18next';
import langs from './langs';
import { useTranslation } from 'react-i18next';

function SelectLang({ currLang }) {
  const langSelect = useRef(null);
  const langMenu = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    langSelect.current.addEventListener('click', toggleLangs);

    return () => {
      langSelect.current.removeEventListener('click', toggleLangs);
    };
  }, []);

  const toggleLangs = () => {
    langMenu.current.classList.toggle('active');
  };

  return (
    <div ref={langSelect} className="main-header-select lang-select flex">
      <label htmlFor="langSelect" className="lang">
        {currLang.name}
      </label>
      <div className="select-icon">
        <img src={down} alt={t('choose-lang')} title={t('choose-lang')} />
      </div>
      <ul ref={langMenu} className="langs drop-down-menu">
        {langs.map((lang) => (
          <li key={lang.code} onClick={() => i18next.changeLanguage(lang.code)}>
            <button>{lang.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectLang;
