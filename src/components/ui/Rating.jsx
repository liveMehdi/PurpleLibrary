import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({rating}) => {
  let ratingArray = new Array(Math.floor(rating)).fill(0);
  return (
    <div className="book__ratings">
      {ratingArray.map(() => (
        <FontAwesomeIcon icon="star" key="hey" />
      ))}
      {ratingArray.length < rating && (
        <FontAwesomeIcon icon="star-half-alt" />
      )}
    </div>
  );
};

export default Rating;
