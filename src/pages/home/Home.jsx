import HeroSlider from './hero/HeroSlider';
import HeroImage from '../../assets/pics/hero.jpg';
import Categories from './categories/Categories';
import Products from './products/Products';

function Home() {
  const heroImages = [HeroImage, HeroImage, HeroImage, HeroImage, HeroImage];
  return (
    <div className="home">
      <HeroSlider imgsSrc={heroImages} />
      <Categories />
      <Products title="other_tools" />
      <Products title="properties" />
      <Products title="mob_tabs" />
    </div>
  );
}

export default Home;
