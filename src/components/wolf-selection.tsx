import { Player } from '@/types/game';

interface WolfSelectionProps {
  players: Player[];
  selectedWolfId: string | null;
  onSelectWolf: (playerId: string) => void;
  onConfirm: () => void;
}

export function WolfSelection({ players, selectedWolfId, onSelectWolf, onConfirm }: WolfSelectionProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-orange-600 mb-2">ウルフ選択</h2>
        <p className="text-gray-600">
          ウルフだと思う人を1人選択してください
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {players.map(player => (
          <div
            key={player.id}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              selectedWolfId === player.id
                ? 'border-red-500 bg-red-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
            onClick={() => onSelectWolf(player.id)}
          >
            <div className="text-center">
              <div className="font-bold text-lg mb-2">{player.name}</div>
              {selectedWolfId === player.id && (
                <div className="text-red-600 font-medium">選択中</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={onConfirm}
          disabled={!selectedWolfId}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            selectedWolfId
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          結果発表
        </button>
      </div>
    </div>
  );
}