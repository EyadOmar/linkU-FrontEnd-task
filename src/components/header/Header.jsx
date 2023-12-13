import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import './header.css';
import down from '../../assets/icons/down.svg';
import canada from '../../assets/flags/canada.svg';
import { useEffect } from 'react';

function Header() {
  const { t, i18n } = useTranslation();

  const langs = [
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'ar',
      name: 'عربي',
    },
  ];

  const coutries = [
    {
      name: 'Canada',
      flag: canada,
    },
    {
      name: 'Egypt',
      flag: canada,
    },
  ];

  useEffect(() => {
    console.log(i18n.language);
    console.log(t('login'));
  }, [t]);

  return (
    <header className="main-header">
      <div className="container flex flex-between">
        <div className="left flex">
          <button className="signup">{t('signup')}</button>
          <button className="login">{t('login')}</button>
        </div>
        <div className="right flex">
          <div className="main-header-select countery-select flex">
            <div className="flag">
              <img src={canada} alt="USA Flag" />
            </div>
            <span className="countery">USA</span>
            <div className="select-icon">
              <img src={down} />
            </div>
            <ul className="counteries">
              {coutries.map((country) => (
                <li key={country.name}>
                  <button onClick={() => console.log(country.name)}>
                    {country.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="main-header-select lang-select flex">
            <span className="lang">English</span>
            <div className="select-icon">
              <img src={down} />
            </div>
            <ul className="langs">
              {langs.map((lang) => (
                <li key={lang.code}>
                  <button onClick={() => i18next.changeLanguage(lang.code)}>
                    {lang.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
