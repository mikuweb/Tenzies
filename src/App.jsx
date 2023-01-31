import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Die } from "./components/Die";
import Confetti from "react-confetti"
import "./style.css";

const allNewDice = () => {
  const newDice = [];
  for (let i = 0; i < 10; i++) {
    newDice.push({
      value: Math.floor(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    });
  }
  return newDice;
};

function App() {
  const [dice, setDice] = useState(allNewDice);
  const [tenzies, setTenzies] = useState(false);

  const rollDice = () => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld
          ? die
          : {
              value: Math.floor(Math.random() * 6),
              isHeld: false,
              id: nanoid(),
            };
      })
    );
    console.log(dice);
    // setDice(allNewDice());
  };

  const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };
  console.log(dice);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);

    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("YOU WON!");
    }
  }, [dice]);

  const diceElement = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <>
      <main>
        {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <div className="description">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </div>
        <div className="dice-container">{diceElement}</div>
        <button onClick={rollDice} className="btn">
          {tenzies ? "New Game" : "Roll"}
        </button>
      </main>
    </>
  );
}

export default App;
