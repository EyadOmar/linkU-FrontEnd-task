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
      <Products title="Electronics" />
    </div>
  );
}

export default Home;
