export const Score = ({time, score, bestScore, bestTime}) => {


    return (
        <>
            <div className="score-container">
          <div className="time">
            Time <span className="number">{time}</span>
          </div>
          <div className="score">
            Score <span className="number">{score}</span>
          </div>
        </div>
        <div className="best-container">
          <div className="time">
            Best Time <span className="number">{bestTime}</span>
          </div>
          <div className="score">
            Best Score <span className="number">{bestScore}</span>
          </div>
        </div>
        </>
    )
}