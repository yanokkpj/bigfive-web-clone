import { type TemplateDomain } from '../../types'

const openness: TemplateDomain = {
  domain: 'O',
  title: '開放性',
  shortDescription: '開放性、または経験への開放性は、想像力豊かで創造的な人と想像力に乏しく慣習的な人を区別する認知スタイルの次元です。',
  description: `開放的な人は知的好奇心が強く、芸術を評価し、
美に敏感です。彼らは閉鎖的な人と比較して、自分の感情により
気づいている傾向があります。彼らは個性的で非同調的な方法で
考え、行動する傾向があります。知的な人は通常、経験への開放性で
高得点を取ります。したがって、この要因は文化または知性とも
呼ばれています。<br /><br />それにもかかわらず、知性は経験への開放性の
一側面として最もよく考えられています。経験への開放性のスコアは、
教育年数や標準的な知能テストのスコアとわずかに関連しています。
<br /><br />
開放的な認知スタイルのもう一つの特徴は、具体的な経験から
遠く離れた象徴や抽象概念で考える能力です。個人の
特定の知的能力に応じて、この象徴的認知は数学的、論理的、または
幾何学的思考、言語の芸術的および比喩的使用、音楽の作曲または演奏、
あるいは多くの視覚芸術または舞台芸術の形をとることがあります。
<br /><br />
経験への開放性が低い人は、狭く一般的な興味を持つ傾向があります。
彼らは複雑で曖昧で微妙なものよりも、平凡で直接的で明白なものを好みます。
彼らは芸術や科学を疑いの目で見て、これらの活動を難解または実用的でないと
考えるかもしれません。閉鎖的な人は新奇性よりも馴染みのあるものを好みます。
彼らは保守的で変化に抵抗します。
<br /><br />
開放性は、しばしば心理学者によってより健康的または成熟していると
提示されます。心理学者自身がしばしば経験に開放的だからです。
しかし、開放的および閉鎖的な思考スタイルは異なる環境で有用です。
開放的な人の知的スタイルは教授にとって役立つかもしれませんが、
研究によれば閉鎖的な思考は警察の仕事、販売、およびいくつかの
サービス職業での優れた職務遂行と関連しています。`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `あなたの経験への開放性のスコアは低く、あなたが平凡で単純な
方法で考えることを好むことを示しています。他の人はあなたを現実的、
実用的、保守的と表現します。`
    },
    {
      score: 'neutral', // do not translate this line
      text: `あなたの経験への開放性のスコアは平均的で、あなたが伝統を
楽しむと同時に新しいことを試す意欲があることを示しています。
あなたの思考は単純でも複雑でもありません。他の人からは、
あなたは教養のある人だが知識人ではないと見られています。`
    },
    {
      score: 'high', // do not translate this line
      text: `あなたの経験への開放性のスコアは高く、あなたが新奇性、
多様性、変化を楽しむことを示しています。あなたは好奇心が強く、
想像力豊かで、創造的です。`
    }
  ],
  facets: [
    {
      facet: 1,
      title: '想像力',
      text: `想像力豊かな個人は魅力的な内面世界を持っています。
彼らにとって現実世界はしばしば平凡で単調すぎるため、
空想と創造された世界を作り出します。彼らは自分の空想を詳細に
発展させ、それを現実逃避の方法として使用します。
想像力豊かな人は、彼らの豊かな想像力が創造的な仕事に貢献するため、
詩人、小説家、芸術家になることがあります。想像力の低い人は
現在の課題に集中することを好みます。`
    },
    {
      facet: 2,
      title: '芸術的関心',
      text: `芸術に高い関心を持つ人は芸術、音楽、詩を愛し、
それらに感動します。彼らは芸術的で、才能がなくても芸術的な追求に
没頭します。このスケールで高得点の人は、芸術と美に対する知識と
鑑賞力を発展させる傾向があります。このスケールで低得点の人は
比較的芸術や美に興味がありません。`
    },
    {
      facet: 3,
      title: '感情',
      text: `感情が高い人は自分の感情に良くアクセスでき、
それを認識しています。低得点者は自分の感情にあまり気づかず、
感情を開けて表現する傾向がありません。`
    },
    {
      facet: 4,
      title: '冒険心',
      text: `冒険心の高い人は新しい活動を試したり、外国を旅行したり、
異なる経験をすることに熱心です。彼らは馴染みのあるものや
ルーティンを退屈だと感じ、単に違うからという理由で新しい道を
選ぶことがあります。低得点者は変化に不快感を感じ、
馴染みのあるルーティンを好みます。`
    },
    {
      facet: 5,
      title: '知性',
      text: `知性と芸術的関心は、経験への開放性の最も重要な
中心的側面です。知性で高得点の人はアイデアで遊ぶことを
愛しています。彼らは新しく珍しいアイデアに対してオープンで、
知的な問題について議論することを好みます。彼らは謎、パズル、
頭の体操を楽しみます。知性で低得点の人はアイデアよりも
人や物事を扱うことを好みます。彼らは知的な活動を時間の無駄と
考えています。知性は知能と同一視されるべきではありません。
知性は知的能力ではなく知的スタイルですが、知性の高い人は
知性の低い人よりも標準的な知能テストでわずかに高いスコアを取ります。`
    },
    {
      facet: 6,
      title: '自由主義',
      text: `心理的自由主義は、権威、慣習、伝統的価値観に
挑戦する準備を指します。その最も極端な形では、心理的自由主義は
規則に対する敵意、法を破る人への共感、曖昧さ、混沌、無秩序への
愛情を表すこともあります。心理的保守主義者は伝統への適合がもたらす
安全と安定を好みます。心理的自由主義と保守主義は政治的所属と
同一ではありませんが、確かに個人を特定の政党に傾ける傾向があります。`
    }
  ]
}

export default openness 