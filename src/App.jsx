import { Game } from "./components/Game";
import "./style.css";

function App() {
  return (
    <>
      <div className="frame">
        <div className="container">
          <div className="title">Tenzies</div>
          <div className="description">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </div>
          <Game />
          <a href="#" className="btn">
            Roll
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
