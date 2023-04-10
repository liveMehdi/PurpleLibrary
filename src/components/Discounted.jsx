import React from "react";
import { books } from "../data";
import Book from "./ui/Book";
import AOS from "aos";
import "aos/dist/aos.css";

const Discounted = () => {
  AOS.init();

  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title"
          data-aos="fade-down"
          data-aos-delay="400"
          data-aos-duration="700"
          data-aos-once={true}
          >
            Discounted <span className="purple">Books</span>
          </h2>
          <div className="books"
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="1000"
          data-aos-once={true}
          >
            {books.filter(book => book.salePrice).slice(0,8).map((book) => {
              return <Book
                book={book} key={book.id}
              />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
