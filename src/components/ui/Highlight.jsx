import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Highlight = ({ icon, title, subTitle, index }) => {
  AOS.init();

  return (
    <div
      className="highlight"
      data-aos="fade-right"
      data-aos-delay={`${200 + index * 200}`}
      data-aos-duration="700"
      data-aos-once={true}
    >
      <div className="highlight__img">{icon}</div>
      <div className="highlight__text--wrapper">
        <h3 className="highlight__subtitle">{title}</h3>
        <p className="highlight__para">{subTitle}</p>
      </div>
    </div>
  );
};

export default Highlight;
