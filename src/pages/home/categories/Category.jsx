/* eslint-disable react/prop-types */
import './categories.css';
function Category({ title, imgSrc, alt }) {
  return (
    <a href="#">
      <div className="category-card flex">
        <div className="card-icon">
          <img src={imgSrc} alt={alt} />
        </div>
        <p className="card-text">{title}</p>
      </div>
    </a>
  );
}

export default Category;
