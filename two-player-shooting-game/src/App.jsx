import { useState } from 'react';

// ===========Importing Player Images==========
import PLAYER1 from './assets/player1.png';
import PLAYER2 from './assets/player2.png';

function App() {
  // ============Diffing Two Player Health=================
  const [player1Health, setPlayer1Health] = useState(100);

  const [player2Health, setPlayer2Health] = useState(100);
  
  // ==========Set Round Counter==============
  const [roundCounter,setRoundCounter] = useState(0);

  // =========Player Fire==========
  const [player1Fire, setPlayer1Fire] = useState(0);

  const [player2Fire, setPlayer2Fire] = useState(0);

  // ==========Players Score==========
  const [player1Score, setPlayer1Score] = useState(0);

  const [player2Score, setPlayer2Score] = useState(0);

  // =========Set Button Name==========
  const [name, setName] = useState('Start Game');

  // ==========Game Message=========
  const [message, setMessage] = useState('');

  // =========Set Paly Button Disabled==========
  const [disable, setDisable] = useState(false);

  // ==========Game Start Handaling=======
  const gameStart = ()=>{
    // ==========Set Button Name=====
    setName('Shoot');

    //======Getting Random Power for each player from 0 to 5 and Set======
    setPlayer1Fire(Math.floor(Math.random() * 5));
    setPlayer2Fire(Math.floor(Math.random() * 5));

    //=====Calculating Players Health after hitting by power======
    setPlayer1Health(player1Health - player2Fire);
    setPlayer2Health(player2Health - player1Fire);

    //===In case Player whose health reaches 0, dies and the game ends====
    if(player1Health === 0){
      setMessage('Player 2 Is Won !')
    }
    
    if(player2Health === 0){
      setMessage('Player 1 Is Won !')
    }
    
    //========Counting The Rounds=======
    setRoundCounter(roundCounter + 1);

    // ======If Round If Alrady 5 =========
    if(roundCounter === 4){
      setDisable(true);
      setName('Game Is Over');
    }

    //====Finding the Winner of individual rounds and incrementing their score by 1=====
    if(player1Fire > player2Fire){
      setPlayer1Score(player1Score + 1);
    }

    if(player2Fire > player1Fire){
      setPlayer2Score(player2Score + 1);
    }

    //====Checking if anyone of the player has scored 3, if yes then terminating the game and announcing the result.===
    if(player1Score === 3){
      setMessage('Player 1 Is Won !');
      setDisable(true);
      setName('Game Is Over');
    }

    if(player2Score === 3){
      setMessage('Player 2 Is Won !');
      setDisable(true);
      setName('Game Is Over');
    }

   //====Checking which player has scored more after completing 5 rounds===
   if(roundCounter === 4){
     if(player1Score > player2Score){
       setMessage('Player 1 Is Won !');
     }

     if(player2Score > player1Score){
      setMessage('Player 2 Is Won !');
     }

     if(player2Score === player1Score){
      setMessage('Match Draw !');
     }
   }

  }

  // ======For Restarting=========
  const reStart = ()=>{
    setPlayer1Health(100);
    setPlayer2Health(100);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setPlayer1Fire(0);
    setPlayer2Fire(0);
    setRoundCounter(0);
    setName('Game Start');
    setMessage();
    setDisable(false);
  }

  return (
    <>
      <div className='game_body'>
          <div className='heading'>
              <h1>Wellcome, <span>2 Player Shooting Game</span></h1>
              <h2>Round : <span>{roundCounter}</span>  / 5</h2>
              <p>{message}</p>
          </div>
          <div className='player_section'>
              <div className='player'>
                  <img src={PLAYER1} alt=""/>
                  <div className='player_name'>
                      <p>PLAYER I</p>
                  </div>
                  <div className='fire'>
                      <p>Fire Score : {player1Fire}</p>
                  </div>
                  <div className='health'>
                      <p>Health : <span>{player1Health}</span></p>
                  </div>
                  <div className='score'>
                      <p>Score : <span>{player1Score}</span></p>
                  </div>
              </div>
              <div className='player'>
                  <img src={PLAYER2} alt=""/>
                  <div className='player_name'>
                      <p>PLAYER II</p>
                  </div>
                  <div className='fire'>
                      <p>Fire Score : {player2Fire}</p>
                  </div>
                  <div className='health'>
                      <p>Health : <span>{player2Health}</span></p>
                  </div>
                  <div className='score'>
                      <p>Score : <span>{player2Score}</span></p>
                  </div>
              </div>
          </div>
          <div className='play_button'>
            <button className="btn" disabled={disable} onClick={gameStart}>{name}</button>
            { " "}
            <button className="btn" disabled={!disable} onClick={reStart}>Re-Start Game</button>
          </div>
      </div>
    </>
  );
}

export default App;