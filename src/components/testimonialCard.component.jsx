const TestimonialCard = ({ item }) => {
  return (
    <article className="testimonial__card">
      <div className="card__top">
        <img
          className="card__image"
          src={item.imageUrl || process.env.PUBLIC_URL + "/assets/default.jpg"}
          alt=""
        />
        <div className="card__intro">
          <span className="card__name">{item.name}</span>
          <span className="card__identity">{item.identity}</span>
        </div>
      </div>
      <q className="card__content">{item.feedback}</q>
    </article>
  );
};

export default TestimonialCard;
