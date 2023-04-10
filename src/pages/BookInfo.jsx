import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Book from "../components/ui/Book";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const whichBook = books[id - 1];

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistsOnCart() {
    return cart.find(book => +book.id === +id)
  }

  useEffect(() => {
    window.scrollTo(0,0)
  })

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={whichBook.url}
                  alt=""
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{whichBook.title}</h2>
                <Rating rating={whichBook.rating} />
                <div className="book__selected--price">
                  <Price
                    salePrice={whichBook.salePrice}
                    originalPrice={whichBook.originalPrice}
                  />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Introduction:</div>
                  <p className="book__summary--para">
                   {whichBook.summary}
                  </p>
                </div>

                {bookExistsOnCart() ? (
                    <Link to="/cart">
                  <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button
                    className="btn"
                    onClick={() => addBookToCart(whichBook)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="book__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter(
                  (book) => book.rating == 5 && +book.id !== +whichBook.id
                )
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
