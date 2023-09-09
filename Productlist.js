import React, { useState } from "react";
import "./Productlist.css";
import Details from "./Details";

import { Link } from "react-router-dom";

const Productlist = (props) => {
  var { id, image, name, description, price } = props;

  
  

  return (
    <>
      <div className="container-fluid">
        <div className="book">
          <div className="book- image">
            <a href="www.amazon books store.com">
              <img src={image} />
            </a>
          </div>

          <div className="book-info">
            <h1>{name}</h1>
            <p className="book-author">{description}</p>
            <p className="book-price">₹ {price} </p>
            {/* <button
              className="btn btn-primary"
              onClick={() => fetchDetails(true)}
            >
              View details{" "}
            </button> */}
            <Link to="/details" className="btn btn-primary">
              View details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Productlist;
