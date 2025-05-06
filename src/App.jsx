import { useState } from 'react';
import './App.css';
import GameSetup from './components/GameSetup';
import PlayerNameSetup from './components/PlayerNameSetup';
import PlayerView from './components/PlayerView';
import GameResult from './components/GameResult';
import { wordPairs } from './data/wordPairs';

// ゲームの状態を表す定数
const GAME_STATES = {
  SETUP: 'setup',
  PLAYER_SETUP: 'player_setup',
  PLAYER_VIEW: 'player_view',
  DISCUSSION: 'discussion',
  RESULT: 'result'
};

function App() {
  // ゲームの状態
  const [gameState, setGameState] = useState(GAME_STATES.SETUP);
  // プレイヤー情報
  const [players, setPlayers] = useState([]);
  // 残り時間（ディスカッション用）
  const [timeRemaining, setTimeRemaining] = useState(300); // 5分（秒単位）
  // タイマーID
  const [timerId, setTimerId] = useState(null);

  // ゲーム設定の状態
  const [gameConfig, setGameConfig] = useState({
    playerCount: 3,
    wolfCount: 1,
    category: 'すべて'
  });

  // ゲーム設定完了処理
  const handleGameSetup = (playerCount, wolfCount, category) => {
    setGameConfig({
      playerCount,
      wolfCount,
      category
    });
    setGameState(GAME_STATES.PLAYER_SETUP);
  };

  // プレイヤー名設定完了処理
  const handlePlayerNameSetup = (playerNames) => {
    startGame(gameConfig.playerCount, gameConfig.wolfCount, gameConfig.category, playerNames);
  };

  // ゲーム開始処理
  const startGame = (playerCount, wolfCount, category, playerNames) => {
    // カテゴリーでフィルタリングしたワードペアから選択
    const filteredPairs = category === 'すべて' 
      ? wordPairs 
      : wordPairs.filter(pair => pair.category === category);
    
    // フィルタリングされたワードペアからランダムに選択
    const randomIndex = Math.floor(Math.random() * filteredPairs.length);
    const selectedPair = filteredPairs[randomIndex];
    
    // プレイヤー配列を作成
    const newPlayers = [];
    
    // プレイヤーIDの配列を作成（1からplayerCountまで）
    const playerIds = Array.from({ length: playerCount }, (_, i) => i + 1);
    
    // ウルフのプレイヤーをランダムに選択
    const wolfIds = [];
    for (let i = 0; i < wolfCount; i++) {
      const randomIndex = Math.floor(Math.random() * playerIds.length);
      const selectedId = playerIds.splice(randomIndex, 1)[0];
      wolfIds.push(selectedId);
    }
    
    // プレイヤー情報を作成
    for (let i = 1; i <= playerCount; i++) {
      const isWolf = wolfIds.includes(i);
      newPlayers.push({
        id: i,
        name: playerNames[i - 1] || `プレイヤー${i}`, // 名前が入力されていない場合はデフォルト名を使用
        word: isWolf ? selectedPair.wolfWord : selectedPair.majorityWord,
        category: selectedPair.category,
        isWolf
      });
    }
    
    setPlayers(newPlayers);
    setGameState(GAME_STATES.PLAYER_VIEW);
  };

  // プレイヤーのワード確認完了処理
  const handleFinishViewing = () => {
    setGameState(GAME_STATES.DISCUSSION);
    startTimer();
  };

  // 追加時間の入力状態
  const [additionalTimeInput, setAdditionalTimeInput] = useState('');

  // タイマー開始
  const startTimer = () => {
    // 既存のタイマーをクリア
    if (timerId) {
      clearInterval(timerId);
    }
    
    // 5分（300秒）のタイマーを設定
    setTimeRemaining(300);
    
    // 1秒ごとにカウントダウン
    const id = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    setTimerId(id);
  };

  // 追加時間の設定
  const handleAddTime = () => {
    const additionalMinutes = parseInt(additionalTimeInput, 10);
    if (!isNaN(additionalMinutes) && additionalMinutes > 0) {
      // 分を秒に変換
      const additionalSeconds = additionalMinutes * 60;
      setTimeRemaining(additionalSeconds);
      
      // 新しいタイマーを開始
      const id = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(id);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      setTimerId(id);
    }
  };

  // タイマーリセット
  const resetTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
    setTimeRemaining(300);
  };

  // 結果表示処理
  const handleShowResult = () => {
    resetTimer();
    setGameState(GAME_STATES.RESULT);
  };

  // もう一度遊ぶ処理
  const handlePlayAgain = () => {
    setGameState(GAME_STATES.SETUP);
    setPlayers([]);
    resetTimer();
  };

  // 残り時間のフォーマット（mm:ss）
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>ワードウルフ</h1>
      </header>
      
      <main className="app-main">
        {gameState === GAME_STATES.SETUP && (
          <GameSetup onStartGame={handleGameSetup} />
        )}
        
        {gameState === GAME_STATES.PLAYER_SETUP && (
          <PlayerNameSetup 
            playerCount={gameConfig.playerCount} 
            onSubmitNames={handlePlayerNameSetup} 
          />
        )}
        
        {gameState === GAME_STATES.PLAYER_VIEW && (
          <PlayerView 
            players={players} 
            onFinishViewing={handleFinishViewing} 
          />
        )}
        
        {gameState === GAME_STATES.DISCUSSION && (
          <div className="discussion">
            <h2>ディスカッション</h2>
            <p className="timer">残り時間: {formatTime(timeRemaining)}</p>
            <p className="instruction">
              お互いの言葉から、誰がウルフ（少数派）かを推理しましょう！
            </p>
            
            <div className="discussion-buttons">
              <button 
                className="result-button" 
                onClick={handleShowResult}
              >
                結果を見る
              </button>
              
              {timeRemaining === 0 && (
                <div className="add-time-form">
                  <div className="form-group">
                    <label htmlFor="additional-time">追加時間（分）:</label>
                    <input 
                      type="number" 
                      id="additional-time" 
                      min="1" 
                      value={additionalTimeInput} 
                      onChange={(e) => setAdditionalTimeInput(e.target.value)}
                      className="form-input"
                    />
                    <button 
                      className="add-time-button" 
                      onClick={handleAddTime}
                    >
                      時間を追加
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {gameState === GAME_STATES.RESULT && (
          <GameResult 
            players={players} 
            onPlayAgain={handlePlayAgain} 
          />
        )}
      </main>
    </div>
  );
}

export default App;
