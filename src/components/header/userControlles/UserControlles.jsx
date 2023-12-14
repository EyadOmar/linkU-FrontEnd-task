import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import SelectLang from './language/SelectLang';
import langs from './language/langs';
import './userControlles.css';
import SelectCountery from './countery/SelectCountery';

function UserControlles() {
  const { t } = useTranslation();
  const currLangCode = Cookies.get('i18next') || 'en';
  const currLang = langs.find((lang) => lang.code == currLangCode);

  useEffect(() => {
    document.body.dir = currLang.dir || 'ltr';
  }, [currLang]);

  return (
    <div className="user-controls">
      <div className="container flex flex-between">
        <div className="left flex">
          <button className="signup">{t('signup')}</button>
          <button className="login">{t('login')}</button>
        </div>
        <div className="right flex">
          <SelectCountery />
          <SelectLang currLang={currLang} />
        </div>
      </div>
    </div>
  );
}

export default UserControlles;
