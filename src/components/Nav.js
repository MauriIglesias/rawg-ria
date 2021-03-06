import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fetchSearch } from "../actions/gamesAction";
import { fadeIn } from "../animation";
import { useDispatch } from "react-redux";

export default function Nav() {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();

    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  return (
    <NavBar
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="nav"    
    >
      <h1>
        API RAWG - LAB II RIA
      </h1>
      <form className="search">
        <input onChange={inputHandler} value={textInput} type="text" />
        <button className="search-btn" type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
    </NavBar>
  );
}

const NavBar = styled(motion.div)`  
    padding: 3rem 5rem;
    text-align: center;  
  }  
  
  color: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  background-color: #212121;
  input {
    background-color: #F7F7FF;
    height: 2.8rem;
    outline: none;
    width: 40%;
    font-size: 1.5rem;
    border: none;

    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  
}
  .search-btn {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2.8rem;
    background: #01579b;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    color: white;
    cursor: pointer;
    &:hover {
      background: #6564DB;
    }
    margin-top:1rem;
  }

`;
