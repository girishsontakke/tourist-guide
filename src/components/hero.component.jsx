import "../styles/hero.styles.scss";
const Hero = () => {
  return (
    <section className="hero">
      <article className="hero__content">
        <h1 className="hero__content__heading">REDISCOVER THE WORLD</h1>
        <p className="hero__content__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea
          vero veniam totam tempora voluptatem soluta tenetur odio hic
          cupiditate excepturi, officia repellendus quod nemo accusantium
          expedita fuga quisquam libero.
        </p>
      </article>
      <img
        src={process.env.PUBLIC_URL + "/assets/travel.svg"}
        alt="hero"
        className="hero__svg"
      />
    </section>
  );
};

export default Hero;
