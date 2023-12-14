import './nav.css';
import CategoryDrop from './CategoryDrop';
import Logo from '../../../assets/icons/logo.png';
import SearchIcon from '../../../assets/icons/search.svg';
import { useTranslation } from 'react-i18next';

function Nav() {
  const { t } = useTranslation();

  return (
    <nav className="main-nav">
      <div className="container">
        <div className="brand-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="categories-links">
          <button className="active">{t('home')}</button>
          <CategoryDrop
            cat="vec_cars"
            links={['vec_cars_cars', 'vec_cars_motos', 'vec_cars_bikes']}
          />

          <CategoryDrop
            cat="properties"
            links={['properties_houses', 'properties_apart']}
          />

          <CategoryDrop
            cat="mob_tabs"
            links={[
              'mob_tabs_sam',
              'mob_tabs_ip',
              'mob_tabs_xiao',
              'mob_tabs_lg',
            ]}
          />
          <CategoryDrop
            cat="elec"
            links={['elec_pc', 'elec_speakers', 'elec_laptops']}
          />
          <button>{t('more_cat')}</button>
        </div>
        <div className="search">
          <div className="input">
            <input type="text" placeholder={t('search_placeholder')} />
            <button>
              <img src={SearchIcon} alt={t('search')} title={t('search')} />
            </button>
          </div>
          <button>{t('add_ad')}</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
