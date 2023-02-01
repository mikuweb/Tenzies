export const One = () => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "10px",
        border: "1px solid black",
        backgroundImage:
          "radial-gradient(circle at 50% 50%,#ff0000ff 19%,#ff000000 20%)",
      }}
    />
  );
};

export const Two = () => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "10px",
        border: "1px solid black",
        backgroundImage:
          "radial-gradient(circle at 75% 25%,#000000ff 10%,#00000000 11%), radial-gradient(circle at 25% 75%,#000000ff 10%,#00000000 11%)",
      }}
    />
  );
};

export const Three = () => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "10px",
        border: "1px solid black",
        backgroundImage:
          "radial-gradient(circle at 75% 25%,#000000ff 10%,#00000000 11%),radial-gradient(circle at 50% 50%,#000000ff 15%,#00000000 16%),radial-gradient(circle at 25% 75%,#000000ff 10%,#00000000 11%)",
      }}
    />
  );
};

export const Four = () => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "10px",
        border: "1px solid black",
        backgroundImage:
          "radial-gradient(circle at 25% 25%,#000000ff 10%,#00000000 11%),radial-gradient(circle at 25% 75%,#000000ff 10%,#00000000 11%),radial-gradient(circle at 75% 25%,#000000ff 10%,#00000000 11%),radial-gradient(circle at 75% 75%,#000000ff 10%,#00000000 11%)",
      }}
    />
  );
};

export const Five = () => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "10px",
        border: "1px solid black",
        backgroundImage:
          "radial-gradient(circle at 25% 25%,#000000ff 10%,#00000000 11%),radial-gradient(circle at 25% 75%,#000000ff 10%,#00000000 11%),radial-gradient(circle at 50% 50%,#000000ff 15%,#00000000 16%),radial-gradient(circle at 75% 25%,#000000ff 10%,#00000000 11%),radial-gradient(circle at 75% 75%,#000000ff 10%,#00000000 11%)",
      }}
    />
  );
};

export const Six = () => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "10px",
        border: "1px solid black",
        backgroundImage:
          "radial-gradient(circle at 25% 25%,#000000ff 10%,#00000000 11%),radial-gradient(circle at 25% 50%,#000000ff 12%,#00000000 13%),radial-gradient(circle at 25% 75%,#000000ff 10%,#00000000 11%),radial-gradient(circle at 75% 25%,#000000ff 10%,#00000000 11%),radial-gradient(circle at 75% 50%,#000000ff 12%,#00000000 13%),radial-gradient(circle at 75% 75%,#000000ff 10%,#00000000 11%)",
      }}
    />
  );
};

const Dice = ({ value }) => {
  if (value == 0) return <One />;
  if (value == 1) return <Two />;
  if (value == 2) return <Three />;
  if (value == 3) return <Four />;
  if (value == 4) return <Five />;
  if (value == 5) return <Six />;
};

export default Dice;
