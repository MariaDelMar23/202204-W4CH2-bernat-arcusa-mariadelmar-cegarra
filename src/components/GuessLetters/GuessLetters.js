import { useState } from "react";
import "./GuessLetters.css";

const GuessLetters = ({ word, letter }) => {
  const wordArray = word.split();
  const [palabraAAcertar, setPalabraAAcertar] = useState(
    wordArray.map((letter) => (
      <li key={letter} className="guess-letter empty"></li>
    ))
  );

  setPalabraAAcertar(
    wordArray.map((letterWord) => {
      let elementoLetra;
      if (letter === letterWord) {
        elementoLetra = (
          <li key={letter} className="guess-letter">
            {letter}
          </li>
        );
      }
      elementoLetra = <li key={letter} className="guess-letter empty"></li>;
      return elementoLetra;
    })
  );
  return <ul className="guess-letters">{palabraAAcertar}</ul>;
};

export default GuessLetters;
