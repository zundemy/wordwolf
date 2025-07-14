export interface Player {
  id: string;
  name: string;
  role: 'citizen' | 'wolf';
  word: string;
  isRevealed: boolean;
}

export interface GameState {
  players: Player[];
  phase: 'setup' | 'word_reveal' | 'discussion' | 'wolf_selection' | 'result';
  timeRemaining: number;
  citizenWord: string;
  wolfWord: string;
  currentPlayerIndex: number;
  selectedWolfId: string | null;
  gameResult: 'citizen_win' | 'wolf_win' | null;
}

export interface GameSettings {
  playerCount: number;
  discussionTime: number;
  categories: string[];
  selectedCategory: string;
}