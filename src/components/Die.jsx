export const Die = ({ value, isHeld, holdDice }) => {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };

  return (
    <div onClick={holdDice} className="die-face" style={styles}>
      <h2 className="die-num">{value}</h2>
    </div>
  );
};

// holdDice("4Asd4th65")
// onClick={() => console.log("Lalalala")}
// onClick={console.log}
// onClick={e => console.log(e)}
