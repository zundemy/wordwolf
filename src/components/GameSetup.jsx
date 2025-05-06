import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { wordPairs } from '../data/wordPairs';

// 利用可能なカテゴリーを抽出
const getCategories = () => {
  const categories = new Set(wordPairs.map(pair => pair.category));
  return ['すべて', ...Array.from(categories)];
};

const GameSetup = ({ onStartGame }) => {
  const [playerCount, setPlayerCount] = useState(3);
  const [wolfCount, setWolfCount] = useState(1);
  const [playerInputValue, setPlayerInputValue] = useState('3');
  const [wolfInputValue, setWolfInputValue] = useState('1');
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const categories = getCategories();
  
  // 初期値を設定
  useEffect(() => {
    setPlayerInputValue(playerCount.toString());
    setWolfInputValue(wolfCount.toString());
  }, []);
  
  // プレイヤー数の変更ハンドラー
  const handlePlayerCountChange = (e) => {
    const value = e.target.value;
    setPlayerInputValue(value);
    
    // 空の入力の場合は処理しない
    if (value === '') return;
    
    const count = parseInt(value, 10);
    if (!isNaN(count)) {
      // 有効範囲内の値に制限
      const validCount = Math.max(3, Math.min(8, count));
      setPlayerCount(validCount);
      
      // 入力値が範囲外の場合、表示を有効な値に更新
      if (count !== validCount) {
        setPlayerInputValue(validCount.toString());
      }
      
      // ウルフの数がプレイヤー数を超えないようにする
      if (wolfCount >= validCount) {
        setWolfCount(validCount - 1);
        setWolfInputValue((validCount - 1).toString());
      }
    }
  };
  
  // ウルフ数の変更ハンドラー
  const handleWolfCountChange = (e) => {
    const value = e.target.value;
    setWolfInputValue(value);
    
    // 空の入力の場合は処理しない
    if (value === '') return;
    
    const count = parseInt(value, 10);
    if (!isNaN(count)) {
      // 有効範囲内の値に制限
      const validCount = Math.max(1, Math.min(playerCount - 1, count));
      setWolfCount(validCount);
      
      // 入力値が範囲外の場合、表示を有効な値に更新
      if (count !== validCount) {
        setWolfInputValue(validCount.toString());
      }
    }
  };
  
  // カテゴリー変更ハンドラー
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  
  // ゲーム設定完了ハンドラー
  const handleSubmit = () => {
    onStartGame(playerCount, wolfCount, selectedCategory);
  };
  
  return (
    <div className="game-setup">
      <h2>ゲーム設定</h2>
      
      <div className="form-group">
        <label htmlFor="player-count">プレイヤー数:</label>
        <input 
          type="number" 
          id="player-count" 
          min="3" 
          max="8" 
          value={playerInputValue} 
          onChange={handlePlayerCountChange}
          onBlur={() => {
            // フォーカスが外れたときに有効な値に修正
            const count = parseInt(playerInputValue, 10);
            if (isNaN(count) || count < 3) {
              setPlayerInputValue('3');
              setPlayerCount(3);
            } else if (count > 8) {
              setPlayerInputValue('8');
              setPlayerCount(8);
            }
          }}
          className="form-input"
        />
        <small>3〜8人で設定してください</small>
      </div>
      
      <div className="form-group">
        <label htmlFor="wolf-count">ウルフ数:</label>
        <input 
          type="number" 
          id="wolf-count" 
          min="1" 
          max={playerCount - 1} 
          value={wolfInputValue} 
          onChange={handleWolfCountChange}
          onBlur={() => {
            // フォーカスが外れたときに有効な値に修正
            const count = parseInt(wolfInputValue, 10);
            if (isNaN(count) || count < 1) {
              setWolfInputValue('1');
              setWolfCount(1);
            } else if (count >= playerCount) {
              setWolfInputValue((playerCount - 1).toString());
              setWolfCount(playerCount - 1);
            }
          }}
          className="form-input"
        />
        <small>1〜{playerCount - 1}人で設定してください</small>
      </div>
      
      <div className="form-group">
        <label htmlFor="category">カテゴリー:</label>
        <select 
          id="category" 
          value={selectedCategory} 
          onChange={handleCategoryChange}
          className="form-input"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      
      <button 
        className="start-button" 
        onClick={handleSubmit}
      >
        次へ
      </button>
    </div>
  );
};

GameSetup.propTypes = {
  onStartGame: PropTypes.func.isRequired
};

export default GameSetup;
