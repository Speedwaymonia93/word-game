import GameScreen from './components/GameScreen/GameScreen';
import ScoreScreen from './components/ScoreScreen/ScoreScreen';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import { useState} from 'react';
import { Route, Switch } from "react-router-dom";

function App() {
  const [gameData, setGameData] = useState(
    { userName: "", selectedWords: [], class:"", points: "", showHideFinishButton: false, showHideCheckAnswers: true ,
  correctWords: [], incorrectWords:[], showAllWords: true, helperIndex: "" });

  const selectWords = (word) => {
    let newWords;
    let helperClass;
    if(!gameData.selectedWords.includes(word)){
      newWords = [...gameData.selectedWords, word];
      helperClass = [...gameData.class, "red"]
    } else {
      newWords = gameData.selectedWords.filter(item => item !== word)
      helperClass = [...gameData.class, "green"]

  
    }
    setGameData({ ...gameData, selectedWords: newWords, class: helperClass});
  }

  const handleChange = event => {
    setGameData({ ...gameData, userName: event.target.value, });
  }
	
  // logic for checking game answers
  const checkAnswers = (selectedWords, good_words, all_words) =>{

    let points = 0;
  
    let helperIncorrect = selectedWords.filter((word) => !good_words.includes(word));
    let helperCorrect = selectedWords.filter((word) => good_words.includes(word));
    let helperNotSelected = all_words.filter((word) => !selectedWords.includes(word));
    let correctNotSelected = helperNotSelected.filter((word) => good_words.includes(word));

// count points
points = helperCorrect.length *2 - (helperIncorrect.length + correctNotSelected.length);
setGameData({ ...gameData, points: points,
   showHideFinishButton: true, showHideCheckAnswers: false, 
   correctWords: helperCorrect, incorrectWords: helperIncorrect,
  showAllWords: false});

  }

  return (
   <>
   <Switch >
     <Route exact path="/gamescreen">
    <GameScreen selectWords={selectWords} gameData={gameData} checkAnswers={checkAnswers}/>
    </Route>
    <Route exact path="/scorescreen">
    <ScoreScreen gameData={gameData}/>
    </Route>
    <Route path="/">
    <WelcomeScreen handleChange={handleChange} gameData={gameData}/>
    </Route>
   </Switch>
   </>
  );
}

export default App;
