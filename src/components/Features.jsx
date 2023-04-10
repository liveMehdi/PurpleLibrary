import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Book from "./ui/Book";
import { books } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  AOS.init();

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2
            className="section__title"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="700"
            data-aos-once={true}
          >
            Featured <span className="purple">Books</span>
          </h2>
          <div
            className="books"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-once={true}
          >
            {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book, index) => {
                return <Book index={index} book={book} key={book.id} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
