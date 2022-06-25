import './scoreScreen.css';

function ScoreScreen({ gameData }) {
	return (
		<div className="welcome-container">
			<h1>Congratulations, {gameData.userName}!</h1>
			<h2>Your score:</h2>
      <h2 className="score-class">{gameData.points} points </h2>
		</div>
	);
}

export default ScoreScreen;
