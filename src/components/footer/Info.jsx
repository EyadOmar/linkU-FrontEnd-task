/* eslint-disable react/prop-types */
import './info.css';
function Info({ title, links }) {
  return (
    <div className="info">
      <div className="info-title flex flex-between">
        <h3>{title}</h3>
        <img src="/footer-icons/down.svg" />
      </div>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
