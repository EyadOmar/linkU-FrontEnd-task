import './header.css';
import UserControlles from './userControlles/UserControlles';
import Nav from './nav/Nav';
import Menu from '../../assets/icons/menu.svg';
import MobileLogo from '../../assets/icons/mobile-logo.png';
import SearchIcon from '../../assets/icons/search-white.svg';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  const search = useRef(null);
  const searchInput = useRef(null);
  const mneuBtn = useRef(null);

  useEffect(() => {
    search.current.addEventListener('click', toggleSearchBar);

    mneuBtn.current.addEventListener('click', toggleNav);

    return () => {
      search.current.removeEventListener('click', toggleSearchBar);
      mneuBtn.current.removeEventListener('click', toggleNav);
    };
  });

  const toggleSearchBar = () => {
    searchInput.current.classList.toggle('active');
    searchInput.current.focus();
  };

  const toggleNav = () => {
    document.querySelector('.main-nav').classList.toggle('active');
    document.querySelector('.user-controls').classList.toggle('active');
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="mobile-nav flex flex-between">
          <div ref={mneuBtn} className="menu-btn">
            <img src={Menu} />
          </div>
          <div className="brand-logo">
            <img src={MobileLogo} />
          </div>

          <div ref={search} className="search-btn">
            <img src={SearchIcon} alt={t('search')} />
            <input
              ref={searchInput}
              type="text"
              name="search"
              id="search"
              placeholder={t('search_placeholder_mob')}
            />
          </div>
        </div>
      </div>
      <UserControlles />
      <Nav />
    </header>
  );
}

export default Header;
