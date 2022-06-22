import React from "react";
import { Link } from "react-router-dom";
import { QuoteCard } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFav } from "../../redux/actions/favQuotesActoins";
import "./favorite.css";
import toast from "react-hot-toast";

const Favorite = () => {
  const dispatch = useDispatch();
  const { favQuotes } = useSelector((state) => state.quotes);

  const removeFromCart = (id) => {
    dispatch(removeFromFav(id));
    toast("Remove from Favorite!", {
      icon: "💔",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };
  return (
    <>
      <h1 className="fav_heading">Your Favorite Quotes</h1>
      <br />
      {favQuotes.length > 0 ? (
        favQuotes &&
        favQuotes.map((quote) => (
          <QuoteCard
            quote={quote.body}
            type="remove"
            onClick={() => removeFromCart(quote.id)}
          />
        ))
      ) : (
        <p className="fav_message">
          Currenty not any favorite quotes <Link to="/">Add now</Link>
        </p>
      )}
    </>
  );
};

export default Favorite;
