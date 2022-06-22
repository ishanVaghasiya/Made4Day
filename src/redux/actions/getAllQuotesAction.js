import React,{usestate} from "react";
import { GET_ALL_QUOTES } from "../constant/getAllQuotesConstant";
import axios from "axios";

const getAllQuotes = () => async (dispatch) => {
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");          
        dispatch({
            type:GET_ALL_QUOTES,
            payload:data
        })

    } catch (error) {
        console.log(error)
    }
} 


export {getAllQuotes}