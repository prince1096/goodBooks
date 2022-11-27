import React, { useState } from "react";
import "./style.css";

const bookList = {
  coding: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" },
    { name: "Data Structures and Algorithms Made Easy", rating: "4/5" },
    { name: "Cracking the Coding Interview", rating: "3.5/5" },
  ],

  Astrology: [
    {
      name: "Vedic Astrology",
      rating: "4/5",
    },
    {
      name: "KAT",
      rating: "5/5",
    },
    {
      name: "Lal Kitab",
      rating: "3.5/5",
    },
    {
      name: "phalDeepika",
      rating: "3/5",
    },
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5",
    },
    {
      name: "Loonshots",
      rating: "5/5",
    },
    {
      name: "The 10 Day MBA",
      rating: "4/5",
    },
    {
      name: "Rich Dad Poor Dad ",
      rating: "4.5/5",
    },
  ],
  SelfDevlopment: [
    {
      name: "Bhagavad Gita",
      rating: "5/5",
    },
    {
      name: "Power of Subconsious Mind",
      rating: "5/5",
    },
    {
      name: "Atomic Habits",
      rating: "4.5/5",
    },
    {
      name: "The Secret",
      rating: "5/5",
    },
  ],
};

const bookSection = Object.keys(bookList);
const n = bookSection.length;
console.log(bookSection);
console.log(n);

export default () => {
  const [selectedSection, setSelectedSection] = useState("SelfDevlopment");

  function chooseSection(section) {
    console.log("chose");
    setSelectedSection(section);
  }

  return (
    <div className="app">
      <h1>📚goodBooks</h1>
      <p>CheckOut My favourite Books. choose a section</p>

      <div>
        {bookSection.map((section) => (
          <button
            className="section-button"
            onClick={() => {
              chooseSection(section);
            }}
            key={section}
          >
            {section}
          </button>
        ))}
      </div>

      {/* <button onClick={chooseSection}>button</button> */}

      <hr />

      <div className="container">
        <ul>
          {bookList[selectedSection].map((book) => (
            <li key={book.name}>
              <p className="book-name">{book.name} </p>
              <p className="book-rating">{book.rating} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
