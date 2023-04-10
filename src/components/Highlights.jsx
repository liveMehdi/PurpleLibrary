import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";
import AOS from "aos";
import "aos/dist/aos.css";

const Highlights = () => {
  AOS.init();
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2
            className="section__title"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-once={true}
          >
            Why choose <span className="purple">Us</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              index={0}
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              subTitle="Get access to the book you purchased online instantly."
            />
            <Highlight
              index={1}
              icon={<FontAwesomeIcon icon="book-open" />}
              title="10,000+ Books"
              subTitle="Library has books in all your favourite categories."
            />
            <Highlight
              index={2}
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              subTitle="Get your hands on popular books for as little as $10."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
