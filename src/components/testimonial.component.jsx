import "../styles/testimonials.styles.scss";
import TestimonialCard from "./testimonialCard.component";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { IconButton, useMediaQuery } from "@material-ui/core";
import { useState } from "react";
import data from "../data/testimonial.data";

const Testimonial = () => {
  const query = useMediaQuery("(min-width:1050px)");
  const [currentItemId, setCurrentItemId] = useState(1);

  const handlePrevious = (e) => {
    if (currentItemId === 1) {
      setCurrentItemId(data.length - 2);
      return;
    }
    setCurrentItemId((prevItemId) => prevItemId - 1);
  };
  const handleNext = (e) => {
    if (currentItemId === data.length - 2) {
      setCurrentItemId(1);
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
          <TestimonialCard item={{ ...data[currentItemId - 1] }} />
          {query && (
            <>
              <TestimonialCard item={{ ...data[currentItemId] }} />
              <TestimonialCard item={{ ...data[currentItemId + 1] }} />{" "}
            </>
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
