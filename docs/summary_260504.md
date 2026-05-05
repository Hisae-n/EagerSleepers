# 2026-05-04 作業サマリー

## 参照情報

- 文字起こし: `transcribe_260504.vtt`
- Git履歴: 2026-05-04にマージされたPR/コミット
- GitHub Issues: `Hisae-n/EagerSleepers`

## 全体概要

2026-05-04は、tnakazaとhinakazaの2名で、EagerSleepersの開発基盤作りと、今後の進め方のすり合わせを行った。

大きな成果は、Docker + Wasp + PostgreSQLで動く最小構成を作り、メールアドレス/パスワード認証、利用規約ページ、プライバシーポリシーページまでをGitHub上でPR化してマージしたこと。あわせて、hinakazaがGitHub Projects / Issue / branch / PR / review / merge の流れを実際に触りながら学び、今後は小さなIssue単位で実装とレビューを回す方針を確認した。

## 1. Webアプリとフルスタックフレームワークの概説

tnakazaからhinakazaへ、Waspを使ったWebアプリの基本構造を説明した。

主な説明内容:

- `src/` 配下に実際のReact/TypeScriptコードを書くこと
- `MainPage.tsx` のようなReactコンポーネントが画面本体になること
- `main.wasp` にルーティングを書き、URLとReactコンポーネントを対応させること
- Docker Composeで `web` と `db` のコンテナを分けて動かしていること
- DBはPostgreSQL、ORMはPrismaを使うこと
- Prismaの `schema.prisma` にモデルを書くだけではDBには反映されず、migrationが必要になること

MVCモデルに近い説明として、画面を表示するReactコンポーネント、URLとページを結びつけるWasp設定、DB構造を定義するPrisma schema、実DBに反映するmigrationの関係を確認した。

補足として、今回はまだ画面を整える段階ではないため、CSSやTailwind/DaisyUIの本格導入は後回しにする方針も話した。

## 2. GitHub Projectsを使ったプロジェクト運営の解説

GitHub上でIssueを小さく分割し、ブランチを切ってPRを作り、レビューを経てマージする流れを実演した。

確認した運用:

- Issue単位で作業する
- branch名やPRタイトルにIssue番号を含める
- PR本文には「何をやったか」「どう確認できるか」を簡潔に書く
- 小さな変更でもレビューアーを入れる
- マージ後は作業側で `main` をpullして最新化する
- PRの説明はファイル名の羅列ではなく、利用者視点で何ができるようになったかを書く

会話では、特にhinakazaが今後ひとりで作業する場合、どんなに小さい変更でもレビュー依頼を出す方針が確認された。まだ開発フローに慣れていない段階なので、レビューを通じてGitHub操作とコード変更の両方を確認することが重要とされた。

## 3. Docker + Wasp環境での開発着手

tnakazaがDocker + Wasp + PostgreSQLの環境構築と、サインアップ/ログイン機能の実装を進めた。

GitHubで確認できた関連作業:

| Issue | 内容 | PR/Commit | 状態 |
| --- | --- | --- | --- |
| #1 | Docker上にWasp + PostgreSQLの開発環境を構築 | PR #92, #93 | Closed |
| #3 | Sign Up画面にアクセスできるようにする | PR #94 | Closed |
| #4 | メールアドレスとパスワードでSign Upできるようにする | PR #94 | Closed |
| #5 | Sign In画面にアクセスできるようにする | PR #94 | Closed |
| #6 | メールアドレスとパスワードでSign Inできるようにする | PR #94 | Closed |
| #12 | ホーム画面にアクセスできるようにする | PR #94 | Closed |

実装内容:

- Waspアプリの最小構成を作成
- Docker ComposeでWasp appとPostgreSQLを起動できるようにした
- `.env.example`、Dockerfile、READMEなどを整備
- Waspのemail authを使って、メールアドレス/パスワード認証を追加
- `User` モデルを `schema.prisma` に追加
- migrationを実行してDBへ反映
- `src/pages/auth.tsx` にSign In / Sign Up / password reset / email verification関連の画面を追加
- dummy email providerを使い、開発中は実メール送信ではなくサーバログ上の認証リンクで検証する形にした

会話内では、DBは各ローカル環境ごとに別であり、片方の端末で作成したユーザはもう片方のDBには存在しないことも確認した。そのため、各自の環境でmigrationやサインアップを行う必要がある。

## 4. 利用規約ページの作成

tnakazaが、hinakazaへ説明しながら利用規約ページを作成した。

GitHubで確認できた関連作業:

| Issue | 内容 | PR/Commit | 状態 |
| --- | --- | --- | --- |
| #8 | 利用規約を閲覧できるようにする | PR #95 | Closed |

実装内容:

- `docs/terms-of-service.md` を作成
- `main.wasp` に利用規約ページのroute/pageを追加
- `src/TermOfServicePage.tsx` を作成
- Markdown本文をReact上で表示するため、`react-markdown` を導入
- `.md?raw` importを扱うためにVite/TypeScript設定を調整
- 参照資料PDFを `_references/` に移動

作業中には、Reactコンポーネントのexport/import、Waspのpage定義、routeとURLの対応、MarkdownをHTMLとしてレンダリングする考え方を説明した。

また、Markdownを直接Reactコンポーネント内にベタ書きするのではなく、`docs/*.md` に分けて管理することで、今後文面を直すときはMarkdownだけを編集すれば済む形にした。

## 5. プライバシーポリシーページの作成

hinakazaが、利用規約ページを参考にしながらプライバシーポリシーページの作成に挑戦した。

GitHubで確認できた関連作業:

| Issue | 内容 | PR/Commit | 状態 |
| --- | --- | --- | --- |
| #7 | プライバシーポリシーを閲覧できるようにする | PR #103, #105 | Closed |

実装内容:

- `docs/privacy-policy.md` を作成/更新
- `main.wasp` にプライバシーポリシーページのroute/pageを追加
- `src/PrivacyPolicyPage.tsx` を作成
- `/privacy-policy` から未ログインでも閲覧できるようにした
- 後続PRで運営者名と運営者メールアドレスを追記

会話では、PR説明の書き方についても確認した。ファイル単位の細かい説明よりも、「`/privacy-policy` で閲覧できるようにした」など、確認者が動作を理解しやすい説明がよいと整理した。

また、PR作成時にsuggestionが出ない場合は、GitHubのcompare branchを現在の作業ブランチに合わせてPRを作る、という操作も確認した。

## 6. 直近の進め方、タスクアサイン、優先順位

直近は、MVPに必要な最小機能をP0として進める方針。2026-05-04時点で、基盤、認証、法務系ページの閲覧は完了し、次は導線整備、データ設計、ゲーム/リアルタイム通信の土台作りへ進む。

### 完了済み

- #1 Docker + Wasp + PostgreSQL環境構築
- #3 Sign Up画面
- #4 Sign Up機能
- #5 Sign In画面
- #6 Sign In機能
- #7 プライバシーポリシー閲覧
- #8 利用規約閲覧
- #12 ホーム画面アクセス

### 直近で優先するP0タスク

| 優先 | Issue | 内容 | 推奨担当 |
| --- | --- | --- | --- |
| 1 | #9 | どの画面からもPP/ToSを閲覧できるようにする | hinakaza |
| 2 | #99 | `.env` を `.env.server` と `.env.client` に分割する | tnakaza |
| 3 | #100 | ミニマムのデータ設計をし、反映する | tnakaza主導、hinakazaレビュー |
| 4 | #101 | Phaser + Socket.IO環境を用意する | tnakaza |
| 5 | #102 | ローカル起動中のEagerSleepersでオンライン対戦する方法を検討 | tnakaza |
| 6 | #104 | HTTPS通信のみ許可するようにする | tnakaza |
| 7 | #13 | 対戦機能への入口をホームに追加する | hinakazaまたはペア作業 |
| 8 | #14〜#19 | ログイン後の対戦導線、待機、マッチング、試合画面遷移、ルーム接続 | tnakaza主導 |

### hinakaza向けの次タスク

まずは #9 のFooter作成が適切。理由は、プライバシーポリシーページ作成で学んだ「既存の似た実装を参考にしてページ/コンポーネントを追加する」流れをそのまま活かせるため。

進め方:

1. `src/_components/Header.tsx` を参考にFooterコンポーネントを作る
2. Footerに `/privacy-policy` と `/terms-of-service` へのリンクを置く
3. 主要画面にFooterを表示する
4. PRを作成し、tnakazaをreviewerに入れる
5. PR本文には「どのURLから何を確認できるか」を書く

### tnakaza向けの次タスク

tnakazaは、MVPの土台になる技術的リスクの高い部分を先に潰すのがよい。

優先順:

1. `.env` 分割とWasp warning対応
2. User / Friend / Game / Chatなどの最小DB設計
3. Phaser + Socket.IOの導入方針検証
4. ローカルネットワーク越しの2端末アクセス方法の整理
5. HTTPS必須化への対応方針整理

特にオンライン対戦は、会話中に同一LAN内の別端末からホスト端末のIPアドレスでアクセスできる見込みが確認された。ただし、HTTPSや環境変数、サーバ/クライアントのURL設定が絡むため、Issue #102 と #104 で明文化しておく必要がある。

## 今後気をつけること

### Wasp / Docker / DB

#### Docker Compose上で開発する

このリポジトリでは、WaspアプリとPostgreSQLをDocker Compose上で動かす。ホストPCにWasp CLIやPostgreSQLを直接インストールする前提にはしない。

理由:

- 開発者ごとのPC環境差を減らすため
- Wasp、Node.js、PostgreSQLのバージョン差による不具合を避けるため
- ft_transcendenceで求められるfrontend/backend/database構成に近い形で早い段階から開発するため
- DBをDocker named volumeに置くことで、コンテナを作り直しても開発データを保持しやすくするため

実現方法:

- 開発開始時は `docker compose up` で `web` と `db` を起動する
- Wasp CLIコマンドはホストではなく `web` コンテナ内で実行する
- 例: `docker compose exec web wasp version`
- 例: `docker compose exec web wasp db migrate-dev --name add-user-profile`
- ブラウザからはWasp clientに `http://localhost:3000`、serverに `http://localhost:3001` でアクセスする
- DBの状態を確認したい場合は、Prisma Studio用に開けた `5555` 番ポートを使う方針を取れる

#### `schema.prisma` 変更後はmigrationする

`schema.prisma` を変更したらmigrationが必要になる。

理由:

- `schema.prisma` は「アプリ側が期待するDB構造」を書くファイルであり、書き換えただけでは実際のPostgreSQLのテーブルは変わらないため
- 実DBへ反映するSQLを生成し、適用し、履歴として残す作業がmigrationであるため
- migrationファイルをGit管理することで、他の開発者や本番環境でも同じDB変更を再現できるため

実現方法:

- 例: `schema.prisma` に `User`、`Game`、`Friend` などのmodelを追加する
- その後、`docker compose exec web wasp db migrate-dev --name <descriptive-name>` を実行する
- 生成された `migrations/` 配下のSQLもPRに含める
- 他の人がそのPRを取り込んだ後は、自分のローカルDBにもmigrationを適用する

注意点:

- migrationは必ず `--name` を付けて実行する
- `--name` には `add-email-auth` や `add-game-models` のように、何を変更したか分かる名前を付ける
- DB構造を変更したPRでは、PR本文に「migrationが必要」と書くとレビュー/動作確認がしやすい
- schema変更後にアプリの型や挙動が古いままに見える場合は、Waspの再生成や再起動が必要になることがある

#### ローカルDBは端末ごとに異なる

DBは各自のローカル環境にあるため、ユーザデータやmigration状態は端末ごとに異なる。

理由:

- `docker compose up` で起動するPostgreSQLは、各開発者のPC上に作られるローカルDBであるため
- tnakazaのPCでSign Upしたユーザは、hinakazaのPCのDBには存在しないため
- migrationを実行したかどうかも各PCのDBごとに管理されるため

実現方法:

- 新しい環境では、まず `docker compose up` でDBを起動する
- 必要なmigrationを `docker compose exec web wasp db migrate-dev --name <descriptive-name>` で適用する
- Sign Up / Sign Inの確認は、各自のローカル環境でそれぞれユーザ登録して行う
- 他人のローカルDBにあるユーザや試合データを前提にした確認手順を書かない

注意点:

- 「自分の環境ではログインできるが、相手の環境ではログインできない」は自然に起こる。まず相手側DBにユーザが存在するか確認する
- DBを消す、volumeを消す、migrationを戻す操作は影響が大きいので、必要性を確認してから行う
- テスト用ユーザを増やす場合、Gmailの `name+1@example.com` のようなplus addressingを使うと、実メール送信に切り替えた後も同じメールボックスで確認しやすい

#### dummy email providerではメールは届かない

email authは開発中dummy providerを使うため、認証リンクはメールではなくサーバログで確認する。

理由:

- 本物のメール送信にはSMTP、SendGrid、Mailgunなどの外部サービス設定が必要になるため
- 認証機能の実装初期段階では、「認証リンクを踏んだら登録完了できるか」を確認できれば十分なため
- dummy providerを使うと、実メール送信をせずにサーバログへ認証リンクを出せるため

実現方法:

- Sign Up画面からメールアドレスとパスワードを入力する
- Wasp serverのログを確認する
- ログに出力されたemail verification linkをブラウザで開く
- 認証完了後、Sign Inできるか確認する

注意点:

- 「メールが届かない」のは、dummy provider利用中は正常な挙動
- 認証リンクを探すには `docker compose logs -f web` でwebコンテナのログを見る
- 本番や外部テストに進む段階では、dummy providerから実メール送信 providerへ切り替える必要がある
- `.env` / `.env.server` / `.env.client` の分割やメール送信設定は、別Issueで明示的に扱う

### GitHub運用

- Issue単位でbranchを切る
- 小さい変更でもPRを作る
- まだ慣れていない間は必ずreviewerを入れる
- PR本文は「確認方法」が伝わるように書く
- マージ後は `main` をpullしてから次の作業に入る
- 似た実装をコピーする場合でも、URL、コンポーネント名、import/export、route名の対応を必ず確認する

### 実装方針

- 画面の見た目作りは後回しにし、まずはMVPに必要な動作をつなぐ
- Tailwind/DaisyUI導入は別Issueで扱う
- Markdownで管理できる文書は、Reactコンポーネントへベタ書きしない
- 抽象化は必要になってから行う。利用規約とプライバシーポリシー程度なら、過剰な共通化は避けてもよい
- オンライン対戦は、最初から本番品質にせず、まずローカル2端末で成立する最小経路を作る

## 次回開始時のチェックリスト

- `main` が最新か確認する
- `docker compose up` でWasp/DBを起動する
- 必要なら `docker compose exec web wasp db migrate-dev --name <descriptive-name>` を実行する
- Sign Up / Sign Inが各自のローカルDBでできるか確認する
- `/terms-of-service` と `/privacy-policy` が開けるか確認する
- hinakazaは #9 のFooter作成から着手する
- tnakazaは #99/#100/#101/#102/#104 の技術タスクを順に整理する
