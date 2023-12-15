import { useTranslation } from 'react-i18next';
import Info from './Info';
import './footer.css';
function Footer() {
  const { t } = useTranslation();

  const toTopClickHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <footer>
      <div className="container flex flex-between">
        <div className="brand-logo">
          <img src="/footer-icons/logo.png" alt="" />
          <div className="download flex" dir="ltr">
            <button>
              <a href="#" className="flex">
                <div className="left">
                  <img src="/footer-icons/google.svg" alt="" />
                </div>
                <div className="right">
                  <p>get it on</p>
                  <p>Google Store</p>
                </div>
              </a>
            </button>
            <button>
              <img src="/footer-icons/add.svg" alt="" />
            </button>
            <button>
              <a href="#" className="flex">
                <div className="left">
                  <img src="/footer-icons/apple.svg" alt="" />
                </div>
                <div className="right">
                  <p>get it on</p>
                  <p>App Store</p>
                </div>
              </a>
            </button>
          </div>
        </div>
        <div className="links flex">
          <Info title={t('about_us')} links={[t('who'), t('vision')]} />
          <Info
            title={t('tosok')}
            links={[t('usage_rules'), t('privacy_policy'), t('download_app')]}
          />
          <Info title={t('countries')} links={[t('canada'), t('yemen')]} />
          <Info title={t('contact_us')} links={[t('help'), t('contact')]} />
        </div>
        <div className="social flex">
          <a href="#">
            <img
              src="/footer-icons/facebook.svg"
              alt={t('facebook')}
              title={t('facebook')}
            />
          </a>
          <a href="#">
            <img
              src="/footer-icons/instagram.svg"
              alt={t('instagram')}
              title={t('instagram')}
            />
          </a>
          <a href="#">
            <img
              src="/footer-icons/tikTok.svg"
              alt={t('tiktok')}
              title={t('tiktok')}
            />
          </a>
          <a href="#">
            <img
              src="/footer-icons/youTube.svg"
              alt={t('youtube')}
              title={t('youtube')}
            />
          </a>
        </div>
        <span className="attr">{t('developed_by_linkYou')}</span>
        <button className="to-top" onClick={toTopClickHandler}>
          <img
            src="/footer-icons/to_top.svg"
            alt={t('to_top')}
            title={t('to_top')}
          />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
