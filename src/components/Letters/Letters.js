import "./Letters.css";

const Letters = ({ alphabet, clickLetter }) => {
  return (
    <ul className="letters">
      {alphabet.map((letter) => (
        <li className="letter" key={letter} onClick={clickLetter}>
          <a href={letter}>{letter}</a>
        </li>
      ))}
    </ul>
  );
};

export default Letters;
