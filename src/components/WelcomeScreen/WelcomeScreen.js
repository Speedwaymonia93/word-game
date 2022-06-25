import './welcomeScreen.css';
import { Link } from 'react-router-dom';

const WelcomeScreen = ({ gameData, handleChange, value }) => {
	return (
		<div className="welcome-container">
			<h1 className="welcome-title">Wordcloud game</h1>
			<input
				type="text"
				placeholder="Enter your nickname here ..."
				className="welcome-input"
				name="nickname"
				id={value}
				onChange={handleChange}
				value={gameData.userName}
			/>

			<Link to="/gamescreen">
				<button className="welcome-button">Play</button>
			</Link>
		</div>
	);
};

export default WelcomeScreen;
