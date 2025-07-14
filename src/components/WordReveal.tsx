import { Player } from '@/types/game';

interface WordRevealProps {
  player: Player;
  onNext: () => void;
  isLastPlayer: boolean;
}

export function WordReveal({ player, onNext, isLastPlayer }: WordRevealProps) {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {player.name}の番です
        </h2>
        <p className="text-gray-600">
          あなたのワードを確認してください
        </p>
      </div>

      <div className="mb-8">
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="text-3xl font-bold text-blue-600">
            {player.word}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-500">
          ワードを覚えたら次の人にデバイスを渡してください
        </p>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors font-medium"
      >
        {isLastPlayer ? '議論開始' : '次のプレイヤー'}
      </button>
    </div>
  );
}