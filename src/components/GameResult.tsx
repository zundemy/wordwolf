import { GameState } from '@/types/game';
import { PlayerCard } from './PlayerCard';

interface GameResultProps {
  gameState: GameState;
  onResetGame: () => void;
}

export function GameResult({ gameState, onResetGame }: GameResultProps) {
  const getResultMessage = () => {
    if (gameState.gameResult === 'citizen_win') {
      return '市民の勝利！';
    } else if (gameState.gameResult === 'wolf_win') {
      return 'ウルフの勝利！';
    }
    return '';
  };

  const getResultColor = () => {
    return gameState.gameResult === 'citizen_win' ? 'text-blue-600' : 'text-red-600';
  };

  const selectedPlayer = gameState.players.find(p => p.id === gameState.selectedWolfId);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-6">
        <h2 className={`text-3xl font-bold mb-4 ${getResultColor()}`}>
          {getResultMessage()}
        </h2>
        
        <div className="mb-4">
          <div className="text-lg">
            市民の言葉: <span className="font-bold text-blue-600">{gameState.citizenWord}</span>
          </div>
          <div className="text-lg">
            ウルフの言葉: <span className="font-bold text-red-600">{gameState.wolfWord}</span>
          </div>
        </div>

        {selectedPlayer && (
          <div className="mb-4 p-4 bg-gray-100 rounded-lg">
            <div className="text-lg">
              選択された人: <span className="font-bold">{selectedPlayer.name}</span>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {gameState.players.map(player => (
          <PlayerCard
            key={player.id}
            player={player}
            isSelected={player.id === gameState.selectedWolfId}
          />
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={onResetGame}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
        >
          もう一度プレイ
        </button>
      </div>
    </div>
  );
}