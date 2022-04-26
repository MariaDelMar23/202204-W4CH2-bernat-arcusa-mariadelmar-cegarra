import { useEffect, useState } from "react";
import "./GuessLetters.css";

const GuessLetters = ({ word, letter }) => {
  const wordArray = Array.from(word);
  const [listaLetras] = useState(
    wordArray.map((letter) => (
      <li text="" key={letter} className="guess-letter empty"></li>
    ))
  );


  return <ul className="guess-letters">{listaLetras}</ul>;
};

export default GuessLetters;
