import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);
  

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
      if (item.id === book.id) {
        return {...item, quantity: quantity}
      }
      else {
        return item
      }
    }))
  }

  function cartSize() {
    let size = 0
    cart.map((book) => {
      size += +book.quantity
    })
    return size
  }

  function removeCart(book) {
    setCart(cart.filter((item) => {
      return item.id !== book.id
    }))
  }

  return (
    <Router>
      <div className="App">
        <Nav cartSize={cartSize()}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={<BookInfo books={books} addToCart={addToCart} cart={cart}/>}
          />
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeCart={removeCart}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


