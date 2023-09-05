import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Productlist.css";
import Details from "./Details";
import { useNavigate } from "react-router-dom";



const Product = (props) => {
  var { id, image, name, description, price } = props;
  




  // const showdetails = (e) => {
  //   e.preventDefault();
  //   alert("image has viewed");
  //   console.log({ id });
  // };

  // let navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `/details`;
  //   navigate(path);
  // };

   function fetchDetails(val){
    console.log("val", val);
      if(val!== " "){
        setVisible(true);
        
      }
   }


   
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
            <button className="btn btn-primary" onClick={() => fetchDetails(true)}>View details </button>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Product;
