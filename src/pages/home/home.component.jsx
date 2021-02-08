import Services from "../../components/services.component";
import Hero from "../../components/hero.component";
import Testimonial from "../../components/testimonial.component";
const Home = () => {
  return (
    <main className="home">
      <Hero />
      <Services />
      <Testimonial />
    </main>
  );
};

export default Home;
