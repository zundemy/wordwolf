import { useState, useEffect, useCallback } from 'react';
import { GameState, Player, GameSettings } from '@/types/game';
import { getRandomWordPair } from '@/data/words';

export function useGame() {
  const [gameState, setGameState] = useState<GameState>({
    players: [],
    phase: 'setup',
    timeRemaining: 0,
    citizenWord: '',
    wolfWord: '',
    currentPlayerIndex: 0,
    selectedWolfId: null,
    gameResult: null,
  });

  const [settings, setSettings] = useState<GameSettings>({
    playerCount: 4,
    discussionTime: 300,
    categories: ['動物', '食べ物', '乗り物', '職業', 'スポーツ'],
    selectedCategory: '動物',
  });

  const startGame = useCallback(() => {
    const wordPair = getRandomWordPair(settings.selectedCategory);
    const wolfIndex = Math.floor(Math.random() * settings.playerCount);
    
    const players: Player[] = Array.from({ length: settings.playerCount }, (_, index) => ({
      id: `player-${index + 1}`,
      name: `プレイヤー${index + 1}`,
      role: index === wolfIndex ? 'wolf' : 'citizen',
      word: index === wolfIndex ? wordPair.wolf : wordPair.citizen,
      isRevealed: false,
    }));

    setGameState({
      players,
      phase: 'word_reveal',
      timeRemaining: 0,
      citizenWord: wordPair.citizen,
      wolfWord: wordPair.wolf,
      currentPlayerIndex: 0,
      selectedWolfId: null,
      gameResult: null,
    });
  }, [settings]);

  const nextPlayer = useCallback(() => {
    setGameState(prev => {
      const nextIndex = prev.currentPlayerIndex + 1;
      if (nextIndex >= prev.players.length) {
        return {
          ...prev,
          phase: 'discussion',
          timeRemaining: settings.discussionTime,
        };
      }
      return {
        ...prev,
        currentPlayerIndex: nextIndex,
      };
    });
  }, [settings.discussionTime]);

  const goToWolfSelection = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      phase: 'wolf_selection',
      timeRemaining: 0,
    }));
  }, []);

  const selectWolf = useCallback((playerId: string) => {
    setGameState(prev => ({
      ...prev,
      selectedWolfId: playerId,
    }));
  }, []);

  const endGame = useCallback(() => {
    const selectedPlayer = gameState.players.find(p => p.id === gameState.selectedWolfId);
    const gameResult = selectedPlayer?.role === 'wolf' ? 'citizen_win' : 'wolf_win';

    setGameState(prev => ({
      ...prev,
      phase: 'result',
      gameResult,
      players: prev.players.map(p => ({ ...p, isRevealed: true })),
    }));
  }, [gameState.selectedWolfId, gameState.players]);

  const resetGame = useCallback(() => {
    setGameState({
      players: [],
      phase: 'setup',
      timeRemaining: 0,
      citizenWord: '',
      wolfWord: '',
      currentPlayerIndex: 0,
      selectedWolfId: null,
      gameResult: null,
    });
  }, []);

  useEffect(() => {
    if (gameState.phase === 'discussion' && gameState.timeRemaining > 0) {
      const timer = setTimeout(() => {
        setGameState(prev => ({
          ...prev,
          timeRemaining: prev.timeRemaining - 1,
        }));
      }, 1000);

      return () => clearTimeout(timer);
    } else if (gameState.phase === 'discussion' && gameState.timeRemaining === 0) {
      goToWolfSelection();
    }
  }, [gameState.phase, gameState.timeRemaining, goToWolfSelection]);

  return {
    gameState,
    settings,
    setSettings,
    startGame,
    nextPlayer,
    goToWolfSelection,
    selectWolf,
    endGame,
    resetGame,
  };
}