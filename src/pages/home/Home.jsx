import HeroSlider from './hero/HeroSlider';
import HeroImage from '../../assets/pics/hero.jpg';
import Categories from './categories/Categories';

function Home() {
  const heroImages = [HeroImage, HeroImage, HeroImage, HeroImage, HeroImage];
  return (
    <div className="home">
      <HeroSlider imgsSrc={heroImages} />
      <Categories />
    </div>
  );
}

export default Home;
