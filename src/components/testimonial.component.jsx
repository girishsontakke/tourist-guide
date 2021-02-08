import "../styles/testimonials.styles.scss";
import TestimonialCard from "./testimonialCard.component";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { IconButton, useMediaQuery } from "@material-ui/core";
import { useState } from "react";
import DATA from "../data/testimonial.data";

const Testimonial = () => {
  const query = useMediaQuery("(max-width:1000px)");
  const [currentItemId, setCurrentItemId] = useState(2);

  const handlePrevious = (e) => {
    if (currentItemId === 2) {
      setCurrentItemId(DATA.length - 1);
      return;
    }
    setCurrentItemId((prevItemId) => prevItemId - 1);
  };
  const handleNext = (e) => {
    if (currentItemId === DATA.length - 1) {
      setCurrentItemId(2);
      return;
    }
    setCurrentItemId((prevItemId) => prevItemId + 1);
  };

  return (
    <section className="testimonials">
      <h1 className="testimonials__heading">What Our Customers Say</h1>
      <div className="testimonials__cover">
        <IconButton color="primary" onClick={handlePrevious}>
          <ChevronLeftIcon />
        </IconButton>
        <div className="testimonial__card__container">
          {DATA.map((data, index) =>
            (!query &&
              index + 1 >= currentItemId - 1 &&
              index + 1 <= currentItemId + 1) ||
            currentItemId === index ? (
              <TestimonialCard key={data.id} item={{ ...data }} />
            ) : null
          )}
        </div>
        <IconButton color="primary" onClick={handleNext}>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </section>
  );
};

export default Testimonial;
