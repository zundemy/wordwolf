import { Player } from '@/types/game';

interface PlayerCardProps {
  player: Player;
  isSelected?: boolean;
}

export function PlayerCard({ player, isSelected = false }: PlayerCardProps) {
  const getRoleColor = () => {
    if (!player.isRevealed) return 'bg-gray-100';
    return player.role === 'wolf' ? 'bg-red-100' : 'bg-blue-100';
  };

  const getRoleText = () => {
    if (!player.isRevealed) return '';
    return player.role === 'wolf' ? 'ウルフ' : '市民';
  };

  return (
    <div className={`p-4 rounded-lg border-2 ${getRoleColor()} transition-colors ${
      isSelected ? 'border-red-500' : ''
    }`}>
      <div className="text-center">
        <div className="font-bold text-lg mb-2">{player.name}</div>
        
        {player.isRevealed && (
          <div className="mb-2">
            <div className="text-sm text-gray-600">{getRoleText()}</div>
            <div className="font-medium text-blue-600">{player.word}</div>
          </div>
        )}
        
        {isSelected && (
          <div className="text-red-600 font-medium mt-2">
            選択されました
          </div>
        )}
      </div>
    </div>
  );
}