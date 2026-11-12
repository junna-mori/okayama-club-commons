# GitHub・Vercelへの公開

この制作ではアップロード・外部公開を行っていません。以下は公開担当者向けの手順です。仮称・運営者・内容の確認事項は `HANDOFF_JA.md` を参照してください。

## 推奨：GitHubで管理し、Vercelで公開

1. プロジェクトフォルダー `okayama-club-commons` を展開する。
2. ローカルで `npm run check` と `npm run build` を実行する。
3. このフォルダーをリポジトリのルートとしてGitHubへ登録する。`package.json` と `vercel.json` がルート直下に来るようにする。
4. VercelでGitHubリポジトリをImportする。
5. Framework Presetは **Other**。Root Directoryはリポジトリのルート。
6. Build Commandは `npm run build`、Output Directoryは `dist`。Install Commandは不要で、環境変数も不要。
7. Deploy後に、英語の初期表示、日英切り替え、保存、フィルター、ダイアログ、相談文のコピー、外部リンクを確認する。

`vercel.json` にビルド・出力フォルダーとHTTPヘッダーを記載済みです。ハッシュルーティングのため、すべてのページに対するrewritesは不要です。

公式参考：[Vercel Frameworks](https://vercel.com/docs/frameworks)・[Project configuration](https://vercel.com/docs/project-configuration)

## GitHub登録の例

GitHubで空のリポジトリを作り、そのURLを使います。下のURLは説明用の置き換え箇所です。実際に存在するリポジトリURLではありません。

```sh
git init
git add .
git commit -m "Create bilingual Okayama student club guide"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

認証情報・APIキーはコードに書き込まないでください。このサイト自体にAPIキーは必要ありません。

## 選択肢：GitHub Pages

静的ファイルで動くためGitHub Pagesでも公開できます。`npm run build` で生成した `dist` の中身を公開元フォルダーへ配置するか、GitHub Actionsの成果物として `dist` を公開します。`dist` 自体はGit管理対象から除外しています。

パスを相対指定しているため、通常のプロジェクトサイトのサブパスでも使用できます。Vercelの `headers` はGitHub Pagesには適用されません。特にCSP等はPagesの配信では別途ホスティング側の機能に従います。

公式参考：[GitHub Pagesの作成](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## 検索掲載を始める場合

レビュー版では `index.html` に `noindex,nofollow`、`robots.txt` に `Disallow: /` を設定しています。これはアクセス制限ではなく、公開URLを知っている人は閲覧できます。

正式公開時に、本人が検索掲載も希望したら次を実施します。

- `index.html` のrobotsメタタグを削除するか `index,follow` に変更。
- `robots.txt` を `Allow: /` に変更。
- 正式なサイト名・運営者・問い合わせ先を確定。
- 正式ドメインに合わせてcanonical、og:url、絶対URLのog:imageを設定。
- 検索流入を強化する場合は、各ページのHTML事前生成を検討。

## 更新

`data.js` 等を変更 → `npm run check` → `npm run build` → PC・スマートフォンで確認 → GitHubにpush → Vercelのデプロイ状況を確認。情報確認日は、実際に根拠を見直したときだけ更新してください。
