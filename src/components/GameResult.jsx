import PropTypes from 'prop-types';

const GameResult = ({ players, onPlayAgain }) => {
  // ウルフのプレイヤーを取得
  const wolves = players.filter(player => player.isWolf);
  const citizens = players.filter(player => !player.isWolf);
  
  return (
    <div className="game-result">
      <h2>ゲーム結果</h2>
      
      <div className="result-info">
        <h3>ワードとカテゴリ</h3>
        <p>カテゴリ: <strong>{players[0].category}</strong></p>
        <p>市民のワード: <strong>{citizens[0].word}</strong></p>
        <p>ウルフのワード: <strong>{wolves[0].word}</strong></p>
      </div>
      
      <div className="players-info">
        <h3>プレイヤー情報</h3>
        <ul className="players-list">
          {players.map(player => (
            <li key={player.id} className={player.isWolf ? 'wolf' : 'citizen'}>
              {player.name || `プレイヤー ${player.id}`}: {player.isWolf ? 'ウルフ' : '市民'} (ワード: {player.word})
            </li>
          ))}
        </ul>
      </div>
      
      <button 
        className="play-again-button" 
        onClick={onPlayAgain}
      >
        もう一度遊ぶ
      </button>
    </div>
  );
};

GameResult.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      word: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      isWolf: PropTypes.bool.isRequired
    })
  ).isRequired,
  onPlayAgain: PropTypes.func.isRequired
};

export default GameResult;
