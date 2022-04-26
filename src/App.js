import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";

function App() {
  const abecedario = ["A", "B", "C", "D", "E"];
  const word = "PATATA";
  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters />
          <Hangman />
        </div>
        <GuessLetters word={word} letter={"A"} />
        <Result resultText="You're dead!" />
        <Letters abecedario={abecedario} />
      </div>
    </>
  );
}

export default App;
