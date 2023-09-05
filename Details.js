import React from "react";
import Productlist from "./Productlist";
import Book from "./Book.js";

function Details(props) {
  const data = [
    {
      id: "1",
      name: "Crime punishment",
      author: "Fyodor Dostoevsky",
      price: "₹ 529",
      "published in": "2000",
    },
    {
      id: "2",
      name: "The book of life",
      author: "Written by j krishmurthy",
      price: "₹ 275",
      "published in": "2001",
    },
    {
      id: "3",
      name: "The power of mind",
      author: "Joseph murphy",
      price: "₹ 400",
      "published in": "2002",
    },
    {
      id: "4",
      name: "The 5AM club",
      author: "Robin sharma",
      price: "₹ 600",
      "published in": "2003",
    },
  ];

  const books = props.books;
  const bookitems = data.map((ele) => <li key={ele.id}>{ele.data}</li>);

  return (
    <div>
      <ul>{bookitems}</ul>
    </div>
  );
}
export default Details;
