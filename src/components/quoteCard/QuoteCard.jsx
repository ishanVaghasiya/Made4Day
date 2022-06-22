import React from "react";
import "./quoteCard.css";

const QuoteCard = ({ quote, onClick, type }) => {
  return (
    <>
      <section className="quotes_container">
        <div className="quotes_text">
          <p>{quote}</p>
        </div>
        <div className="quotes_btn">
          {type === "remove" ? (
            <button onClick={onClick} style={{ color: "red" }}>
              💔
            </button>
          ) : (
            <button
              onClick={onClick}
              style={{ fontWeight: "800", color: "var(--darkBlue)" }}
            >
              +
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default QuoteCard;
