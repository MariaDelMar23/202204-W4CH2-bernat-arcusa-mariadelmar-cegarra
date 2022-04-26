import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";

function App() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const usedLettersList = [];

  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters usedLettersList={usedLettersList} />
          <Hangman />
        </div>
        <GuessLetters />
        <Result resultText="You're dead!" />
        <Letters alphabet={alphabet} />
      </div>
    </>
  );
}

export default App;
