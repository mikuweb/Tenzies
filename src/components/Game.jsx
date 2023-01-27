export const Game = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="game-container">
        {arr.map((num) => (
          <div className="card">{num}</div>
        ))}
      </div>
    </>
  );
};
