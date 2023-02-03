import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Die } from "./components/Die";
import Confetti from "react-confetti";
import "./style.css";
import { Score } from "./components/Score";

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
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [time, setTime] = useState("00:00");
  const [startTime, setStartTime] = useState(new Date());
  const [bestTime, setBestTime] = useState("00:00");

  //* Roll & New Game
  const rollDice = () => {
    if (!tenzies) {
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
      setScore((preScore) => preScore + 1);
    } else {
      setTenzies(false);
      //best score
      if (bestScore == 0) {
        setBestScore(score);
      } else if (score < bestScore) {
        setBestScore(score);
      }
      setScore(0);
      //best time
      if (bestTime === "00:00") {
        setBestTime(time);
      } else if (time < bestTime) {
        setBestTime(time);
      }
      setTime("00:00");
      setStartTime(new Date());

      setDice(allNewDice);
      //Question
      // setDice(allNewDice());
    }
  };

  // *Hold Dice functionaluty
  const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
    console.log(dice);
  };

  // *When you win the game
  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);

    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("YOU WON!");
    }
  }, [dice]);

  //*count time
  useEffect(() => {
    if (!tenzies) {
      const interval = setInterval(() => {
        //1.Convert to seconds
        let seconds = (new Date() - startTime) / 1000;
        //2.Extract minutes
        const minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
        //3.Keep only seconds not extracted to minutes
        seconds = Math.floor(seconds % 60);
        setTime(
          `${minutes < 10 ? "0" + minutes : minutes}:${
            seconds < 10 ? "0" + seconds : seconds
          }`
        );
      }, 1000);

      //necessary, so we don't end up with multiple stale setIntervals
      return () => clearInterval(interval);
    }
  }, [tenzies]);

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
        <Score
          time={time}
          score={score}
          bestScore={bestScore}
          bestTime={bestTime}
        />
        <div className="dice-container">{diceElement}</div>
        <button onClick={rollDice} className="btn">
          {tenzies ? "New Game" : "Roll"}
        </button>
      </main>
    </>
  );
}

export default App;
