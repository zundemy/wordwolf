export const wordPairs = {
  '動物': [
    { citizen: 'ライオン', wolf: 'トラ' },
    { citizen: 'ゾウ', wolf: 'キリン' },
    { citizen: 'ネコ', wolf: 'イヌ' },
    { citizen: 'ウサギ', wolf: 'ハムスター' },
    { citizen: 'パンダ', wolf: 'コアラ' },
  ],
  '食べ物': [
    { citizen: 'ラーメン', wolf: 'うどん' },
    { citizen: 'カレー', wolf: 'シチュー' },
    { citizen: 'ピザ', wolf: 'ハンバーガー' },
    { citizen: 'すし', wolf: 'さしみ' },
    { citizen: 'パン', wolf: 'ご飯' },
  ],
  '乗り物': [
    { citizen: '自動車', wolf: 'バイク' },
    { citizen: '電車', wolf: 'バス' },
    { citizen: '飛行機', wolf: 'ヘリコプター' },
    { citizen: '自転車', wolf: 'スケートボード' },
    { citizen: '船', wolf: 'ボート' },
  ],
  '職業': [
    { citizen: '医者', wolf: '看護師' },
    { citizen: '先生', wolf: '教授' },
    { citizen: '警察官', wolf: '消防士' },
    { citizen: 'エンジニア', wolf: 'プログラマー' },
    { citizen: 'シェフ', wolf: 'パティシエ' },
  ],
  'スポーツ': [
    { citizen: 'サッカー', wolf: 'フットサル' },
    { citizen: '野球', wolf: 'ソフトボール' },
    { citizen: 'バスケットボール', wolf: 'バレーボール' },
    { citizen: 'テニス', wolf: 'バドミントン' },
    { citizen: '水泳', wolf: 'ダイビング' },
  ],
};

export const categories = Object.keys(wordPairs);

export function getRandomWordPair(category: string) {
  const pairs = wordPairs[category as keyof typeof wordPairs];
  if (!pairs) return { citizen: '', wolf: '' };
  
  const randomPair = pairs[Math.floor(Math.random() * pairs.length)];
  return randomPair;
}