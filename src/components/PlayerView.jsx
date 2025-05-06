import { useState } from 'react';
import PropTypes from 'prop-types';

const PlayerView = ({ players, onFinishViewing }) => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [showWord, setShowWord] = useState(false);
  
  const currentPlayer = players[currentPlayerIndex];
  const isLastPlayer = currentPlayerIndex === players.length - 1;
  
  // ワードを表示する
  const showPlayerWord = () => {
    setShowWord(true);
  };
  
  // 次のプレイヤーに進む
  const goToNextPlayer = () => {
    if (isLastPlayer) {
      // 全プレイヤーが確認し終わったら、親コンポーネントに通知
      onFinishViewing();
    } else {
      // 次のプレイヤーに進み、ワードを非表示にする
      setCurrentPlayerIndex(currentPlayerIndex + 1);
      setShowWord(false);
    }
  };
  
  return (
    <div className="player-view">
      <h2>{currentPlayer.name || `プレイヤー ${currentPlayerIndex + 1}`} の番</h2>
      
      <div className="word-container">
        {showWord ? (
          <>
            <p className="word-display">あなたのワード: <strong>{currentPlayer.word}</strong></p>
            <p className="category">カテゴリ: {currentPlayer.category}</p>
          </>
        ) : (
          <p className="instruction">下のボタンをタップしてワードを確認してください</p>
        )}
      </div>
      
      <div className="button-container">
        {!showWord ? (
          <button 
            className="toggle-button" 
            onClick={showPlayerWord}
          >
            ワードを見る
          </button>
        ) : (
          <button 
            className="next-button" 
            onClick={goToNextPlayer}
          >
            {isLastPlayer ? 'ディスカッションを始める' : '次のプレイヤーへ'}
          </button>
        )}
      </div>
    </div>
  );
};

PlayerView.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      word: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      isWolf: PropTypes.bool.isRequired
    })
  ).isRequired,
  onFinishViewing: PropTypes.func.isRequired
};

export default PlayerView;
