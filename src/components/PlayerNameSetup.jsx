import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PlayerNameSetup = ({ playerCount, onSubmitNames }) => {
  const [playerNames, setPlayerNames] = useState([]);
  
  // プレイヤー数に合わせて名前配列を初期化
  useEffect(() => {
    setPlayerNames(Array(playerCount).fill(''));
  }, [playerCount]);
  
  // プレイヤー名の変更ハンドラー
  const handlePlayerNameChange = (index, value) => {
    setPlayerNames(prevNames => {
      const newNames = [...prevNames];
      newNames[index] = value;
      return newNames;
    });
  };
  
  // 名前設定完了ハンドラー
  const handleSubmit = () => {
    onSubmitNames(playerNames);
  };
  
  return (
    <div className="player-name-setup">
      <h2>プレイヤー名の設定</h2>
      <p className="instruction">各プレイヤーの名前を入力してください</p>
      
      <div className="player-names-container">
        {Array.from({ length: playerCount }).map((_, index) => (
          <div key={index} className="form-group">
            <label htmlFor={`player-name-${index + 1}`}>プレイヤー {index + 1}:</label>
            <input
              type="text"
              id={`player-name-${index + 1}`}
              value={playerNames[index]}
              onChange={(e) => handlePlayerNameChange(index, e.target.value)}
              placeholder={`プレイヤー${index + 1}`}
              className="form-input"
            />
          </div>
        ))}
      </div>
      
      <button 
        className="start-button" 
        onClick={handleSubmit}
      >
        ゲームスタート
      </button>
    </div>
  );
};

PlayerNameSetup.propTypes = {
  playerCount: PropTypes.number.isRequired,
  onSubmitNames: PropTypes.func.isRequired
};

export default PlayerNameSetup;
