import React, { useEffect } from "react";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Features from "../components/Features";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  })
  return (
    <>
      <Landing />
      <Highlights />
      <Features />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
