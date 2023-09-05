import React from "react";
import Productlist from "./Productlist";

function Book() {
  const books = [
    {
      id: 1,
      image:
        "https://m.media-amazon.com/images/I/71dLXkOLOJL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Crime punishment",
      description: "written by Fyodor Dostoevsky",
      price: 529,
    },
    {
      id: 2,
      image:
        "https://m.media-amazon.com/images/I/61WVRpAeALL._AC_UY327_FMwebp_QL65_.jpg",
      name: "The book of life",
      description: "written by J krishnamurti",
      price: 275,
    },
    {
      id: 3,
      image:
        "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY327_FMwebp_QL65_.jpg",
      name: "The power of mind",
      description: "written by Joseph murphy",
      price: 400,
    },
    {
      id: 4,
      image:
        "https://m.media-amazon.com/images/I/71zytzrg6lL._AC_UY327_FMwebp_QL65_.jpg",
      name: "The 5AM club ",
      description: "written by Robin Sharma",
      price: 600,
    },
  ];
  return (
    <div>
      {books.map((ele) => {
        return (
          <Productlist
            id={ele.id}
            image={ele.image}
            name={ele.name}
            description={ele.description}
            price={ele.price}
          />
        );
      })}
    </div>
  );
}
export default Book;
