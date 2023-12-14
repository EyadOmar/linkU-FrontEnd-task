import Info from './Info';
import './footer.css';
function Footer() {
  return (
    <footer>
      <div className="container flex flex-between">
        <div className="download">download</div>
        <div className="links flex">
          <Info title="about us" links={['who are we', 'Our vision']} />
          <Info
            title="Tosok"
            links={['Usage Rules', 'Privacy Policy', 'Download the app']}
          />
          <Info title="counteries" links={['Canada', 'Yamn']} />
          <Info title="contact us" links={['help', 'contact']} />
        </div>
        <div className="social">Social</div>
      </div>
    </footer>
  );
}

export default Footer;
