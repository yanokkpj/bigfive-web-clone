# 性格分析スコアリングロジック

## 手法

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


## 移植可能性
このスコアリングシステムは以下の特徴により、様々なプラットフォームへ移植可能です：

1. **言語非依存設計**:
   - 数値ベースの処理のみで自然言語処理を含まない
   - 国際化(i18n)対応可能なデータ構造

2. **軽量アーキテクチャ**:
   - 依存ライブラリなしの純粋なTypeScript実装
   - ランタイム要件: ES2015以上

3. **拡張可能なインターフェース**:
   ```typescript
   interface Answer {
     domain: string
     facet?: number
     score: number
   }
   ```
   - 最小限の入力インターフェース定義
   - 追加メタデータのオプショナル対応

4. **プラットフォーム非依存**:
   - Node.js/ブラウザ/モバイルアプリなどで動作可能
   - サーバーサイドレンダリング対応

5. **テストカバレッジ**:
   - ユニットテストによる動作保証
   - 複数データセットでの検証済み

実装の主要ロジックは`processAnswers`関数（[ソース](https://github.com/yanokkpj/bigfive-web-clone/blob/master/packages/score/src/index.ts#L18-L55)）に集約されており、他のシステムへの統合が容易です。 


# 日本語定義ファイル
  - [質問文定義(TS)](https://github.com/yanokkpj/bigfive-web-clone/blob/main/packages/questions/src/data/ja/questions.ts)
  - [質問文定義(CSV)](https://github.com/yanokkpj/bigfive-web-clone/blob/main/packages/questions/src/data/ja/questions.csv)
  - [回答オプション定義(TS)](https://github.com/yanokkpj/bigfive-web-clone/blob/main/packages/questions/src/data/ja/choices.ts)
  - [回答オプション定義(CSV)](https://github.com/yanokkpj/bigfive-web-clone/blob/main/packages/questions/src/data/ja/choices.csv)

