import React, { useEffect } from "react";
import { QuoteCard } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { addToFav } from "../../redux/actions/favQuotesActoins";
import { getAllQuotes } from "../../redux/actions/getAllQuotesAction";
import "./home.css";
import axios from "axios";
import toast from "react-hot-toast";

const Home = () => {
  const dispatch = useDispatch();
  const { allQuotes } = useSelector((state) => state.allQuotes);
  const { favQuotes } = useSelector((state) => state.quotes);
  const addToFavBtn = (data) => {
    const isExist = favQuotes.find((quote) => quote.id === data.id);
    if (isExist) {
      toast("Already Exist!", {
        icon: "💟",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast("Sucessfully Added!", {
        icon: "💌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      dispatch(addToFav(data));
    }
  };

  useEffect(() => {
    dispatch(getAllQuotes());
  }, [dispatch]);

  return (
    <>
      {allQuotes &&
        allQuotes.map((quote) => (
          <QuoteCard
            key={quote.id}
            quote={quote.body}
            onClick={() => addToFavBtn(quote)}
          />
        ))}
    </>
  );
};

export default Home;
