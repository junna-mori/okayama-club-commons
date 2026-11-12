# 生成画像の一覧と扱い

本サイトのホーム、部活動、食事候補の画像14点は、本制作でImageGenの組み込みツールを使って生成した概念画像です。CLI/APIフォールバックは使用していません。生成したPNGをWeb用のWebPに変換し、ローカル素材として同梱しました。

実際の岡山大学の建物・部員・掲載店舗・提供料理を撮影したものではありません。各画像の近くにAI生成イメージと明記し、料理には実際のメニューではないことも表示しています。画像から留学生の受け入れ条件や、ビーガン・ハラール・アレルギーへの対応を判断しないでください。

## 現行で使用している画像

| 対象 | 保存先 |
| --- | --- |
| WIZARDS | `assets/clubs/wizards.webp` |
| 写真部 | `assets/clubs/photography.webp` |
| 茶道部 | `assets/clubs/tea.webp` |
| サイクリング部 | `assets/clubs/cycling.webp` |
| 吹奏楽団 | `assets/clubs/wind.webp` |
| 弓道部 | `assets/clubs/kyudo.webp` |
| ECOLO | `assets/clubs/ecolo.webp` |
| バドミントン部 | `assets/clubs/badminton.webp` |
| Shah Arena | `assets/dining/shah-arena.webp` |
| アオババ | `assets/dining/aobaba.webp` |
| マスカットカフェテリア | `assets/dining/muscat.webp` |
| Plant-Based Cafe PEACH | `assets/dining/peach.webp` |
| SALT－石川食堂 | `assets/dining/salt.webp` |
| トップページ | `assets/campus-life.webp` |

## 生成の記録

各画像の正確な生成プロンプトと、画像内に入った説明用バナーを除いてHTMLのキャプションへ揃えるための調整プロンプトは `IMAGE_PROMPTS.json` に記録しています。バナー除去もImageGenで行い、人物・活動・料理の内容は維持しました。

第1版の `assets/campus-commons.webp` は旧版イラストです。現行画面では使用しません。

提供PPTXに含まれていた部員写真・WIZARDSロゴ、他サイトの店舗写真、大学章は同梱していません。サイトの独自アイコンとファビコンは単純な記号として作成したものです。大学のロゴを模したものではありません。
