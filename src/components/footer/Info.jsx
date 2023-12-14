/* eslint-disable react/prop-types */
function Info({ title, links }) {
  return (
    <div className="info">
      <h3>{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
