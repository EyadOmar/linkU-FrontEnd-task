import { useTranslation } from 'react-i18next';
import Category from './Category';
import catgories from './catgories';
import './categories.css';
function Categories() {
  const { t } = useTranslation();
  return (
    <section className="categories">
      <div className="container">
        <h2>{t('categories')}</h2>
        <div className="categories-cards flex">
          {catgories.map((cat, i) => (
            <Category
              key={`category-${i}`}
              title={t(cat.title)}
              imgSrc={cat.img}
              alt={t(cat.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
