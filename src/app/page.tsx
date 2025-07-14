'use client';

import { useGame } from '@/hooks/use-game';
import { GameSetup } from '@/components/game-setup';
import { WordReveal } from '@/components/word-reveal';
import { GameBoard } from '@/components/game-board';
import { WolfSelection } from '@/components/wolf-selection';
import { GameResult } from '@/components/game-result';

export default function Page() {
  const {
    gameState,
    settings,
    setSettings,
    startGame,
    nextPlayer,
    goToWolfSelection,
    selectWolf,
    endGame,
    resetGame,
  } = useGame();

  return (
    <main className="container mx-auto px-4 py-8">
      {gameState.phase === 'setup' && (
        <GameSetup
          settings={settings}
          onSettingsChange={setSettings}
          onStartGame={startGame}
        />
      )}

      {gameState.phase === 'word_reveal' && (
        <WordReveal
          player={gameState.players[gameState.currentPlayerIndex]}
          onNext={nextPlayer}
          isLastPlayer={gameState.currentPlayerIndex === gameState.players.length - 1}
        />
      )}

      {gameState.phase === 'discussion' && (
        <GameBoard
          gameState={gameState}
          onGoToWolfSelection={goToWolfSelection}
        />
      )}

      {gameState.phase === 'wolf_selection' && (
        <WolfSelection
          players={gameState.players}
          selectedWolfId={gameState.selectedWolfId}
          onSelectWolf={selectWolf}
          onConfirm={endGame}
        />
      )}

      {gameState.phase === 'result' && (
        <GameResult
          gameState={gameState}
          onResetGame={resetGame}
        />
      )}
    </main>
  );
}