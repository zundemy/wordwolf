// ワードペアのデータ
// 各オブジェクトは、カテゴリ、多数派のワード、少数派のワード（ウルフのワード）を持つ
export const wordPairs = [
  // 食べ物カテゴリ（20個）
  {
    category: "食べ物",
    majorityWord: "ラーメン",
    wolfWord: "うどん"
  },
  {
    category: "食べ物",
    majorityWord: "ハンバーガー",
    wolfWord: "サンドイッチ"
  },
  {
    category: "食べ物",
    majorityWord: "カレーライス",
    wolfWord: "ハヤシライス"
  },
  {
    category: "食べ物",
    majorityWord: "寿司",
    wolfWord: "刺身"
  },
  {
    category: "食べ物",
    majorityWord: "焼肉",
    wolfWord: "しゃぶしゃぶ"
  },
  {
    category: "食べ物",
    majorityWord: "パスタ",
    wolfWord: "ピザ"
  },
  {
    category: "食べ物",
    majorityWord: "オムライス",
    wolfWord: "チャーハン"
  },
  {
    category: "食べ物",
    majorityWord: "餃子",
    wolfWord: "シュウマイ"
  },
  {
    category: "食べ物",
    majorityWord: "天ぷら",
    wolfWord: "唐揚げ"
  },
  {
    category: "食べ物",
    majorityWord: "お好み焼き",
    wolfWord: "もんじゃ焼き"
  },
  {
    category: "食べ物",
    majorityWord: "たこ焼き",
    wolfWord: "明石焼き"
  },
  {
    category: "食べ物",
    majorityWord: "アイスクリーム",
    wolfWord: "シャーベット"
  },
  {
    category: "食べ物",
    majorityWord: "ケーキ",
    wolfWord: "タルト"
  },
  {
    category: "食べ物",
    majorityWord: "プリン",
    wolfWord: "ゼリー"
  },
  {
    category: "食べ物",
    majorityWord: "パン",
    wolfWord: "クロワッサン"
  },
  {
    category: "食べ物",
    majorityWord: "おにぎり",
    wolfWord: "お弁当"
  },
  {
    category: "食べ物",
    majorityWord: "そば",
    wolfWord: "そうめん"
  },
  {
    category: "食べ物",
    majorityWord: "親子丼",
    wolfWord: "牛丼"
  },
  {
    category: "食べ物",
    majorityWord: "味噌汁",
    wolfWord: "スープ"
  },
  {
    category: "食べ物",
    majorityWord: "納豆",
    wolfWord: "豆腐"
  },
  
  // 動物カテゴリ（20個）
  {
    category: "動物",
    majorityWord: "イヌ",
    wolfWord: "オオカミ"
  },
  {
    category: "動物",
    majorityWord: "ライオン",
    wolfWord: "トラ"
  },
  {
    category: "動物",
    majorityWord: "ゾウ",
    wolfWord: "サイ"
  },
  {
    category: "動物",
    majorityWord: "キリン",
    wolfWord: "シマウマ"
  },
  {
    category: "動物",
    majorityWord: "パンダ",
    wolfWord: "コアラ"
  },
  {
    category: "動物",
    majorityWord: "ウサギ",
    wolfWord: "モルモット"
  },
  {
    category: "動物",
    majorityWord: "ネコ",
    wolfWord: "ヒョウ"
  },
  {
    category: "動物",
    majorityWord: "クマ",
    wolfWord: "アライグマ"
  },
  {
    category: "動物",
    majorityWord: "サル",
    wolfWord: "チンパンジー"
  },
  {
    category: "動物",
    majorityWord: "カンガルー",
    wolfWord: "ワラビー"
  },
  {
    category: "動物",
    majorityWord: "ペンギン",
    wolfWord: "アホウドリ"
  },
  {
    category: "動物",
    majorityWord: "カバ",
    wolfWord: "マナティー"
  },
  {
    category: "動物",
    majorityWord: "ワニ",
    wolfWord: "トカゲ"
  },
  {
    category: "動物",
    majorityWord: "カメ",
    wolfWord: "ヤドカリ"
  },
  {
    category: "動物",
    majorityWord: "イルカ",
    wolfWord: "クジラ"
  },
  {
    category: "動物",
    majorityWord: "サメ",
    wolfWord: "エイ"
  },
  {
    category: "動物",
    majorityWord: "タコ",
    wolfWord: "イカ"
  },
  {
    category: "動物",
    majorityWord: "クラゲ",
    wolfWord: "ヒトデ"
  },
  {
    category: "動物",
    majorityWord: "カエル",
    wolfWord: "イモリ"
  },
  {
    category: "動物",
    majorityWord: "ヘビ",
    wolfWord: "ミミズ"
  },
  
  // スポーツカテゴリ（20個）
  {
    category: "スポーツ",
    majorityWord: "サッカー",
    wolfWord: "ラグビー"
  },
  {
    category: "スポーツ",
    majorityWord: "テニス",
    wolfWord: "バドミントン"
  },
  {
    category: "スポーツ",
    majorityWord: "野球",
    wolfWord: "ソフトボール"
  },
  {
    category: "スポーツ",
    majorityWord: "バスケットボール",
    wolfWord: "ハンドボール"
  },
  {
    category: "スポーツ",
    majorityWord: "バレーボール",
    wolfWord: "ビーチバレー"
  },
  {
    category: "スポーツ",
    majorityWord: "ゴルフ",
    wolfWord: "パターゴルフ"
  },
  {
    category: "スポーツ",
    majorityWord: "水泳",
    wolfWord: "飛び込み"
  },
  {
    category: "スポーツ",
    majorityWord: "陸上",
    wolfWord: "マラソン"
  },
  {
    category: "スポーツ",
    majorityWord: "柔道",
    wolfWord: "空手"
  },
  {
    category: "スポーツ",
    majorityWord: "剣道",
    wolfWord: "フェンシング"
  },
  {
    category: "スポーツ",
    majorityWord: "スキー",
    wolfWord: "スノーボード"
  },
  {
    category: "スポーツ",
    majorityWord: "フィギュアスケート",
    wolfWord: "アイスホッケー"
  },
  {
    category: "スポーツ",
    majorityWord: "ボクシング",
    wolfWord: "キックボクシング"
  },
  {
    category: "スポーツ",
    majorityWord: "卓球",
    wolfWord: "ビリヤード"
  },
  {
    category: "スポーツ",
    majorityWord: "相撲",
    wolfWord: "レスリング"
  },
  {
    category: "スポーツ",
    majorityWord: "体操",
    wolfWord: "新体操"
  },
  {
    category: "スポーツ",
    majorityWord: "サーフィン",
    wolfWord: "ボディボード"
  },
  {
    category: "スポーツ",
    majorityWord: "ヨガ",
    wolfWord: "ピラティス"
  },
  {
    category: "スポーツ",
    majorityWord: "ダンス",
    wolfWord: "バレエ"
  },
  {
    category: "スポーツ",
    majorityWord: "ボウリング",
    wolfWord: "カーリング"
  },
  
  // 乗り物カテゴリ（20個）
  {
    category: "乗り物",
    majorityWord: "自動車",
    wolfWord: "バイク"
  },
  {
    category: "乗り物",
    majorityWord: "電車",
    wolfWord: "バス"
  },
  {
    category: "乗り物",
    majorityWord: "飛行機",
    wolfWord: "ヘリコプター"
  },
  {
    category: "乗り物",
    majorityWord: "船",
    wolfWord: "ヨット"
  },
  {
    category: "乗り物",
    majorityWord: "自転車",
    wolfWord: "キックボード"
  },
  {
    category: "乗り物",
    majorityWord: "タクシー",
    wolfWord: "ハイヤー"
  },
  {
    category: "乗り物",
    majorityWord: "新幹線",
    wolfWord: "特急"
  },
  {
    category: "乗り物",
    majorityWord: "地下鉄",
    wolfWord: "モノレール"
  },
  {
    category: "乗り物",
    majorityWord: "トラック",
    wolfWord: "ダンプカー"
  },
  {
    category: "乗り物",
    majorityWord: "救急車",
    wolfWord: "消防車"
  },
  {
    category: "乗り物",
    majorityWord: "パトカー",
    wolfWord: "白バイ"
  },
  {
    category: "乗り物",
    majorityWord: "クルーズ船",
    wolfWord: "フェリー"
  },
  {
    category: "乗り物",
    majorityWord: "ロケット",
    wolfWord: "人工衛星"
  },
  {
    category: "乗り物",
    majorityWord: "気球",
    wolfWord: "飛行船"
  },
  {
    category: "乗り物",
    majorityWord: "スケートボード",
    wolfWord: "ローラースケート"
  },
  {
    category: "乗り物",
    majorityWord: "セグウェイ",
    wolfWord: "電動キックボード"
  },
  {
    category: "乗り物",
    majorityWord: "トラクター",
    wolfWord: "コンバイン"
  },
  {
    category: "乗り物",
    majorityWord: "ゴンドラ",
    wolfWord: "リフト"
  },
  {
    category: "乗り物",
    majorityWord: "潜水艦",
    wolfWord: "潜水艇"
  },
  {
    category: "乗り物",
    majorityWord: "戦闘機",
    wolfWord: "爆撃機"
  },
  
  // 家電カテゴリ（20個）
  {
    category: "家電",
    majorityWord: "テレビ",
    wolfWord: "モニター"
  },
  {
    category: "家電",
    majorityWord: "冷蔵庫",
    wolfWord: "冷凍庫"
  },
  {
    category: "家電",
    majorityWord: "洗濯機",
    wolfWord: "乾燥機"
  },
  {
    category: "家電",
    majorityWord: "電子レンジ",
    wolfWord: "オーブン"
  },
  {
    category: "家電",
    majorityWord: "エアコン",
    wolfWord: "扇風機"
  },
  {
    category: "家電",
    majorityWord: "掃除機",
    wolfWord: "ロボット掃除機"
  },
  {
    category: "家電",
    majorityWord: "炊飯器",
    wolfWord: "電気ポット"
  },
  {
    category: "家電",
    majorityWord: "ドライヤー",
    wolfWord: "ヘアアイロン"
  },
  {
    category: "家電",
    majorityWord: "電気ケトル",
    wolfWord: "コーヒーメーカー"
  },
  {
    category: "家電",
    majorityWord: "トースター",
    wolfWord: "ホットプレート"
  },
  {
    category: "家電",
    majorityWord: "加湿器",
    wolfWord: "空気清浄機"
  },
  {
    category: "家電",
    majorityWord: "ミキサー",
    wolfWord: "フードプロセッサー"
  },
  {
    category: "家電",
    majorityWord: "電気シェーバー",
    wolfWord: "バリカン"
  },
  {
    category: "家電",
    majorityWord: "アイロン",
    wolfWord: "スチームアイロン"
  },
  {
    category: "家電",
    majorityWord: "ホームベーカリー",
    wolfWord: "餅つき機"
  },
  {
    category: "家電",
    majorityWord: "電気毛布",
    wolfWord: "ホットカーペット"
  },
  {
    category: "家電",
    majorityWord: "ブルーレイプレーヤー",
    wolfWord: "DVDプレーヤー"
  },
  {
    category: "家電",
    majorityWord: "ゲーム機",
    wolfWord: "パソコン"
  },
  {
    category: "家電",
    majorityWord: "デジタルカメラ",
    wolfWord: "ビデオカメラ"
  },
  {
    category: "家電",
    majorityWord: "スマートスピーカー",
    wolfWord: "Bluetoothスピーカー"
  },
  
  // 恋愛カテゴリ（20個）
  {
    category: "恋愛",
    majorityWord: "告白",
    wolfWord: "プロポーズ"
  },
  {
    category: "恋愛",
    majorityWord: "デート",
    wolfWord: "合コン"
  },
  {
    category: "恋愛",
    majorityWord: "片思い",
    wolfWord: "両思い"
  },
  {
    category: "恋愛",
    majorityWord: "キス",
    wolfWord: "ハグ"
  },
  {
    category: "恋愛",
    majorityWord: "プレゼント",
    wolfWord: "サプライズ"
  },
  {
    category: "恋愛",
    majorityWord: "手紙",
    wolfWord: "メール"
  },
  {
    category: "恋愛",
    majorityWord: "恋人",
    wolfWord: "婚約者"
  },
  {
    category: "恋愛",
    majorityWord: "初恋",
    wolfWord: "遠距離恋愛"
  },
  {
    category: "恋愛",
    majorityWord: "告白",
    wolfWord: "振られる"
  },
  {
    category: "恋愛",
    majorityWord: "好き",
    wolfWord: "愛してる"
  },
  {
    category: "恋愛",
    majorityWord: "カップル",
    wolfWord: "夫婦"
  },
  {
    category: "恋愛",
    majorityWord: "片思い",
    wolfWord: "失恋"
  },
  {
    category: "恋愛",
    majorityWord: "恋バナ",
    wolfWord: "悩み相談"
  },
  {
    category: "恋愛",
    majorityWord: "告白シーン",
    wolfWord: "プロポーズシーン"
  },
  {
    category: "恋愛",
    majorityWord: "恋愛映画",
    wolfWord: "ラブコメディ"
  },
  {
    category: "恋愛",
    majorityWord: "恋愛小説",
    wolfWord: "少女漫画"
  },
  {
    category: "恋愛",
    majorityWord: "片思いの相手",
    wolfWord: "元カレ・元カノ"
  },
  {
    category: "恋愛",
    majorityWord: "恋愛感情",
    wolfWord: "友情"
  },
  {
    category: "恋愛",
    majorityWord: "恋愛相談",
    wolfWord: "占い"
  },
  {
    category: "恋愛",
    majorityWord: "運命の出会い",
    wolfWord: "一目惚れ"
  },
  
  // 面白いカテゴリ（20個）
  {
    category: "面白い",
    majorityWord: "母乳",
    wolfWord: "牛乳"
  },
  {
    category: "面白い",
    majorityWord: "パンツ",
    wolfWord: "財布"
  },
  {
    category: "面白い",
    majorityWord: "初めてのおつかい",
    wolfWord: "初めてのキス"
  },
  {
    category: "面白い",
    majorityWord: "盆踊り",
    wolfWord: "ラジオ体操"
  },
  {
    category: "面白い",
    majorityWord: "痴漢",
    wolfWord: "鬼ごっこ"
  },
  {
    category: "面白い",
    majorityWord: "トランクス",
    wolfWord: "ブリーフ"
  },
  {
    category: "面白い",
    majorityWord: "おなら",
    wolfWord: "しゃっくり"
  },
  {
    category: "面白い",
    majorityWord: "1億円貰ったら",
    wolfWord: "10万円貰ったら"
  },
  {
    category: "面白い",
    majorityWord: "絵本",
    wolfWord: "エロ本"
  },
  {
    category: "面白い",
    majorityWord: "朝食",
    wolfWord: "夕食"
  },
  {
    category: "面白い",
    majorityWord: "歯磨き",
    wolfWord: "洗顔"
  },
  {
    category: "面白い",
    majorityWord: "通勤",
    wolfWord: "通学"
  },
  {
    category: "面白い",
    majorityWord: "散歩",
    wolfWord: "ジョギング"
  },
  {
    category: "面白い",
    majorityWord: "買い物",
    wolfWord: "ウィンドウショッピング"
  },
  {
    category: "面白い",
    majorityWord: "掃除",
    wolfWord: "洗濯"
  },
  {
    category: "面白い",
    majorityWord: "昼寝",
    wolfWord: "仮眠"
  },
  {
    category: "面白い",
    majorityWord: "入浴",
    wolfWord: "シャワー"
  },
  {
    category: "面白い",
    majorityWord: "テレビ視聴",
    wolfWord: "動画視聴"
  },
  {
    category: "面白い",
    majorityWord: "スマホゲーム",
    wolfWord: "SNS"
  },
  {
    category: "面白い",
    majorityWord: "寝坊",
    wolfWord: "徹夜"
  }
];
