import re
import csv
import os

# 入力ファイルのパス
input_file = 'packages/questions/src/data/ja/questions.ts'

# 入力ファイルのディレクトリを取得
input_dir = os.path.dirname(input_file)

# 出力ファイルのパスを入力ファイルと同じディレクトリに設定
output_file = os.path.join(input_dir, 'questions.csv')

# TypeScriptファイルを読み込む
with open(input_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 質問データを抽出するための正規表現パターン
pattern = r'\{\s*id:\s*\'([^\']+)\',\s*text:\s*\'([^\']+)\',\s*keyed:\s*\'([^\']+)\',\s*domain:\s*\'([^\']+)\',\s*facet:\s*(\d+)\s*\}'
questions = re.findall(pattern, content)

# CSVファイルに書き込む
with open(output_file, 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    # ヘッダー行を書き込む
    writer.writerow(['id', 'text', 'keyed', 'domain', 'facet'])
    # 質問データを書き込む
    for question in questions:
        writer.writerow(question)

print(f'{len(questions)}個の質問を{output_file}に書き込みました。') 