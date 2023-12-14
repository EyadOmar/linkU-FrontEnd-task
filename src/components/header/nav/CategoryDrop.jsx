/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import down from '../../../assets/icons/down.svg';

function CategoryDrop({ cat, links }) {
  const { t } = useTranslation();

  return (
    <div className="category-drop">
      <button>{t(cat)}</button>
      <div className="down-icon">
        <img src={down} alt={t('choose-cat')} title={t('choose-cat')} />
      </div>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a>{t(link)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryDrop;
