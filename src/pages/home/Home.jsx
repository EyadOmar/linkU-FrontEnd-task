import HeroSlider from './hero/HeroSlider';
import HeroImage from '../../assets/pics/hero.jpg';

function Home() {
  const heroImages = [HeroImage, HeroImage, HeroImage, HeroImage, HeroImage];
  return (
    <div className="home">
      <HeroSlider imgsSrc={heroImages} />
    </div>
  );
}

export default Home;
