import { GameSettings } from '@/types/game';
import { categories } from '@/data/words';

interface GameSetupProps {
  settings: GameSettings;
  onSettingsChange: (settings: GameSettings) => void;
  onStartGame: () => void;
}

export function GameSetup({ settings, onSettingsChange, onStartGame }: GameSetupProps) {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">ワードウルフ</h1>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            プレイヤー数
          </label>
          <select
            value={settings.playerCount}
            onChange={(e) => onSettingsChange({ ...settings, playerCount: parseInt(e.target.value) })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {[3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num}人</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            議論時間
          </label>
          <select
            value={settings.discussionTime}
            onChange={(e) => onSettingsChange({ ...settings, discussionTime: parseInt(e.target.value) })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value={180}>3分</option>
            <option value={300}>5分</option>
            <option value={420}>7分</option>
            <option value={600}>10分</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            カテゴリー
          </label>
          <select
            value={settings.selectedCategory}
            onChange={(e) => onSettingsChange({ ...settings, selectedCategory: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <button
          onClick={onStartGame}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors font-medium"
        >
          ゲーム開始
        </button>
      </div>
    </div>
  );
}