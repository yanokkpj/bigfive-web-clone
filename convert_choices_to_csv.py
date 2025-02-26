import csv
import os

# 入力ファイルのパス
input_file = 'packages/questions/src/data/ja/choices.ts'

# 入力ファイルのディレクトリを取得
input_dir = os.path.dirname(input_file)

# 出力ファイルのパスを入力ファイルと同じディレクトリに設定
output_file = os.path.join(input_dir, 'choices.csv')

# 手動で選択肢データを定義（TypeScriptファイルの内容に基づく）
choices_data = [
    # plus の選択肢
    {'type': 'plus', 'text': 'まったく当てはまらない', 'score': 1, 'color': 1},
    {'type': 'plus', 'text': 'あまり当てはまらない', 'score': 2, 'color': 2},
    {'type': 'plus', 'text': 'どちらとも言えない', 'score': 3, 'color': 3},
    {'type': 'plus', 'text': 'やや当てはまる', 'score': 4, 'color': 4},
    {'type': 'plus', 'text': 'とても当てはまる', 'score': 5, 'color': 5},
    
    # minus の選択肢
    {'type': 'minus', 'text': 'まったく当てはまらない', 'score': 5, 'color': 1},
    {'type': 'minus', 'text': 'あまり当てはまらない', 'score': 4, 'color': 2},
    {'type': 'minus', 'text': 'どちらとも言えない', 'score': 3, 'color': 3},
    {'type': 'minus', 'text': 'やや当てはまる', 'score': 2, 'color': 4},
    {'type': 'minus', 'text': 'とても当てはまる', 'score': 1, 'color': 5}
]

# CSVファイルに書き込む
with open(output_file, 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    # ヘッダー行を書き込む
    writer.writerow(['type', 'text', 'score', 'color'])
    # 選択肢データを書き込む
    for choice in choices_data:
        writer.writerow([choice['type'], choice['text'], choice['score'], choice['color']])

print(f'{len(choices_data)}個の選択肢を{output_file}に書き込みました。') 