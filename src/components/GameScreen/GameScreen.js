import './gameScreen.css';
import mockData from '../../data/mockData.json';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GameScreen = ({ selectWords, gameData, checkAnswers }) => {
	let [ helperIndex, setHelperIndex ] = useState(0);
	let mockDataLength = mockData.length;
  
	// get random number to use as index in question selection
	function randomNumberInRange(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	useEffect(() => {
		setHelperIndex = randomNumberInRange(0, mockDataLength);
	
	}, []);

	return (
		<div className="gamescreen-container">
			<h1>{mockData[helperIndex].question}</h1>
			<ul className="words-container">
				{mockData[helperIndex].all_words.map((word) => {
					let liElementClass = gameData.selectedWords.includes(word)
						? 'active-element'
						: 'toppings-list-element';
					let checkedElementClass = gameData.correctWords.includes(word)
						? 'correct-word'
						: 'toppings-list-element';
					let checkedIncorrectElementClass = gameData.incorrectWords.includes(word)
						? 'incorrect-word'
						: 'toppings-list-element';
					return gameData.showAllWords ? (
						<li className={liElementClass} key={word} onClick={() => selectWords(word)}>
							{word}
						</li>
					) : (
						<li
							className={`${checkedElementClass} ${checkedIncorrectElementClass}`}
							key={word}
							onClick={() => selectWords(word)}
						>
							{word}
						</li>
					);
				})}
			</ul>
			{gameData.showHideCheckAnswers && (
				<button
					className="welcome-button"
					onClick={() =>
						checkAnswers(
							gameData.selectedWords,
							mockData[helperIndex].good_words,
							mockData[helperIndex].all_words
						)}
				>
					Check answers
				</button>
			)}

			{gameData.showHideFinishButton && (
				<Link to="/scorescreen">
					<button className="welcome-button">Finish game</button>
				</Link>
			)}
		</div>
	);
};

export default GameScreen;
