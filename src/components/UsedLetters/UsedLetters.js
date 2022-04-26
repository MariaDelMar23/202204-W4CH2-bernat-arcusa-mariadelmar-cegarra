import "./UsedLetters.css";

const UsedLetters = ({ usedLettersList }) => {
  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">
        {usedLettersList.map((letra) => (
          <li className="used-letter">{letra},</li>
        ))}
      </ul>
    </section>
  );
};

export default UsedLetters;
