import { GameState } from '@/types/game';
import { Timer } from './Timer';

interface GameBoardProps {
  gameState: GameState;
  onGoToWolfSelection: () => void;
}

export function GameBoard({ gameState, onGoToWolfSelection }: GameBoardProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-4">ワードウルフ</h1>
        <h2 className="text-xl font-bold text-blue-600 mb-2">議論フェーズ</h2>
        
        <div className="mb-4">
          <Timer timeRemaining={gameState.timeRemaining} />
          <div className="mt-4">
            <button
              onClick={onGoToWolfSelection}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
            >
              ウルフ選択へ
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 text-lg">
          全員でワードについて議論してください
        </p>
        <p className="text-gray-500 mt-2">
          自分のワードを忘れてしまった場合は、「もう一度プレイ」から始めてください
        </p>
      </div>
    </div>
  );
}