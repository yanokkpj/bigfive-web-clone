## ドメイン（特性）

ビッグファイブの5つの主要特性は以下の通りです：

- **N**: 神経症的傾向（Neuroticism）- 不安、怒り、抑うつなどのネガティブ感情を経験する傾向
- **E**: 外向性（Extraversion）- 社交性、活発さ、刺激希求などの特性
- **O**: 開放性（Openness to Experience）- 好奇心、創造性、新しい経験への開放性
- **A**: 協調性（Agreeableness）- 思いやり、信頼、協力などの対人関係の特性
- **C**: 誠実性（Conscientiousness）- 計画性、責任感、自己規律などの特性

## 結果テキスト生成

結果テキストは各ドメインとファセットについて、スコアレベル（高・中・低）に応じた説明文を提供します。

各ドメインの結果テキストには以下が含まれます：
- タイトルと特性の説明
- 短い概要説明
- 高・中・低スコアに対応する詳細な結果テキスト
- 各ファセット（下位特性）の説明

## 多言語対応

システムは複数の言語をサポートしており、以下の要素が翻訳されています：
- テスト質問と回答選択肢
- 結果の説明と解釈

サポートされている言語には英語、アラビア語、カタロニア語、デンマーク語、ドイツ語、スペイン語、エストニア語、ペルシア語、フィンランド語、フランス語、日本語などが含まれます。

## レポート生成フロー

1. ユーザーが質問パッケージから性格テストの質問に回答
2. 回答はスコアパッケージの `processAnswers` 関数で処理
3. 各ドメインとファセットについて、計算されたスコアカテゴリ（高・中・低）に基づいて結果パッケージから適切な説明テキストを取得
4. 完全な性格プロファイルが組み立てられ、ユーザーに提示される

## スコア計算ロジック

### 計算プロセス
1. **データ収集**: 各質問への回答をドメイン（主要特性）とファセット（副特性）ごとに分類
2. **ドメイン集計**:
   - 同一ドメインのスコアを合算
   - 回答数で除算し平均値を算出
   - 式: `ドメインスコア = Σ(回答値) / 回答数`

3. **ファセット集計**:
   - ドメイン内の各ファセットごとにスコアを合算
   - 当該ファセットの回答数で除算
   - 式: `ファセットスコア = Σ(ファセット回答値) / ファセット回答数`

4. **正規化処理**:
   - 5段階評価を0-100%スケールに変換
   - 式: `正規化スコア = (平均スコア - 1) / 4 * 100`

### 閾値決定根拠
- **3.5閾値**: 5段階評価の70%地点（(3.5-1)/4=62.5%）
- **2.5閾値**: 5段階評価の30%地点（(2.5-1)/4=37.5%）
- 分類境界を明確化するため、中央値3を跨ぐ範囲をneutralと定義

## 分類基準

### スコア範囲と解釈
| 平均スコア | 正規化スコア | 分類    | 解釈                          |
|------------|---------------|---------|-------------------------------|
| 3.5+       | 62.5%+        | high    | 上位20%に相当する特性強度     |
| 2.5-3.5    | 37.5%-62.5%   | neutral | 平均範囲（中央60%）            |
| ～2.5      | ～37.5%       | low     | 下位20%に相当する特性強度     |

## 判定特性
1. **二重階層構造**: ドメインとファセットで独立した判定
2. **スケール不変性**: 異なる質問数でも平均値で比較可能
3. **非線形分類**: 中央値周辺を広くneutral判定
4. **解釈安定化**: 極端な値のみをhigh/lowと判定

## 技術的根拠
- 心理測定学の規準に基づく5段階尺度設計
- 回答バイアス軽減のため中間領域を拡大
- 臨床心理学の分類法を参考に閾値を設定
- **実装コード**: [スコアリングアルゴリズムの実装](https://github.com/yanokkpj/bigfive-web-clone/blob/main/packages/score/src/index.ts)



# 日本語定義ファイル
 1. **質問**:
  - [質問文定義(TS)](https://github.com/yanokkpj/bigfive-web-clone/blob/main/packages/questions/src/data/ja/questions.ts)
  - [質問文定義(CSV)](https://github.com/yanokkpj/bigfive-web-clone/blob/main/packages/questions/src/data/ja/questions.csv)
  - [回答オプション定義(TS)](https://github.com/yanokkpj/bigfive-web-clone/blob/main/packages/questions/src/data/ja/choices.ts)
  - [回答オプション定義(CSV)](https://github.com/yanokkpj/bigfive-web-clone/blob/main/packages/questions/src/data/ja/choices.csv)

2. **レポート**:
   (Github上日本語レポート存在しない状態です。[英語レポート](https://github.com/yanokkpj/bigfive-web-clone/tree/main/packages/results/src/data/en)からAI翻訳のことです。)
- [協調性(TS)](https://github.com/yanokkpj/bigfive-web-clone/blob/main/packages/results/src/data/ja/agreeableness.ts)
- [誠実性(TS)](https://github.com/yanokkpj/bigfive-web-clone/blob/main/packages/results/src/data/ja/conscientiousness.ts)
- [外向性(TS)](https://github.com/yanokkpj/bigfive-web-clone/blob/main/packages/results/src/data/ja/extraversion.ts)
- [神経症的傾向(TS)](https://github.com/yanokkpj/bigfive-web-clone/blob/main/packages/results/src/data/ja/neuroticism.ts)
- [開放性(TS)](  https://github.com/yanokkpj/bigfive-web-clone/blob/main/packages/results/src/data/ja/openness_to_experience.ts)

# 移植可能性
このスコアリングシステムは以下の特徴により、様々なプラットフォームへ移植可能です。

1. **移植対象**:
   - [スコア計算ロジック](https://github.com/yanokkpj/bigfive-web-clone/blob/main/packages/score/src/index.ts)
   - [レポート生成ロジック](https://github.com/yanokkpj/bigfive-web-clone/blob/main/packages/results/src/index.ts)

2. **言語非依存設計**:
   - 数値ベースの処理のみで自然言語処理を含まない

3. **軽量アーキテクチャ**:
   - 依存ライブラリなしの純粋なTypeScript実装

4. **拡張可能なインターフェース**:
   - 最小限の入力インターフェース定義
   - 追加メタデータのオプショナル対応

5. **プラットフォーム非依存**:
   - Node.js/ブラウザ/モバイルアプリなどで動作可能

6. **テストカバレッジ**:
   - ユニットテストによる動作保証
   - 複数データセットでの検証済み
