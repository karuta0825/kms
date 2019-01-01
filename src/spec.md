### 期限

- [] 事業部会まで 10/19

### Task

- [x] redux-sage による非同期通信
- [x] redux x material-ui の実装方法
- [] HOC と atomic design によるきれいなコンポーネント設計
- [] login 処理と redux について
- [x] flow, ESLint 導入
- [] Service Worker に挑戦

### Today Task

- [] ユーザー詳細画面移行時に、プログレスダイアログを表示する
- [] 各種入力コンポーネント作成
  - [x] 入力チェックしてくれる
  - [x] 数値
  - [x] 数値(増加、減少ボタンあり)
  - [] マルチ選択(map つかえるようにしたいね)
    - [] 選択コンポーネントをつくる
      - [x] isEdit で disable 制御ができるようにする
      - [x] inputValues.has_xxx で class をかえる
      - [] 排他制御をかけるかどうかを選べる - radio
  - [x] 日付
  - [x] 多選択
  - [x] 長さを指定できる
- [x] システムタブを作る
  - [x] reducer を下位階層に下ろす
  - [x] state 設計
  - [x] 受付日
  - [x] 解約日
  - [x] KID
  - [x] サーバ(AP, Db)
  - [x] サーバをフィルターする
  - [x] 業務 QA
  - [x] ユーザーキ
  - [x] DB パスワード
  - [x] Fenics キー
  - [x] モバイル -> 修正必要かもね? helperText がほしい
  - [] システム環境(オンプレ、クラウド)
  - [x] バージョン(LM, ES)
    - [] 変更時にそれぞれの最新の KID を取得するようにする
  - [x] ネットワーク(Fenics, ビジネス VPN)
  - [] クライアント数(Citrix クライアント数)
  - [] 端末数(下記２つの合計で表示のみ) number_pc = busiv_number + fenics_number
    - [x] ビジネス VPN 利用端末数
    - [x] Fenics 利用端末数
          -> DB の設計変更必要(busiv_number, fenics_number をわける)
- [x] 入力エラー時に保存できない方法を考える
- [x] Customer タブの入力コンポーネントに入力チェックを追加する
- [x] 一覧にもどったときに参照モードに戻す
- [] System タブを完成させる
  - [] server 選択時に IP アドレスもつける(表示とデータをわけられるかどうか?)
  - [x] 受付日・終了日  のデータ反映させる
  - [x] モバイル入力がデータ反映できていない
- [] ダウンロード機能の実験
- [x] 不要な components を削除
- [] ライセンスタブを完成させる
  - [x] react grid をつかってみる
  - [x] バージョンごとのテーブル表示
  - [x] 現在の使用サービスのみ表示
  - [] テキストからの編集ができるようにする

### 実装したい機能

- [] インターネットにつながならくてもよい
- [] 戻る・進む可能
- [] エラー内容を表示できる
- [] グラフは、チャートライブラリを使う
- [] todo が作成できる
- [] fenics とビジ V をわける
- [] customer をわける。ここに拠点の概念をもたせる
- [] パートナ一覧と編集ができるようにする
- [] ユーザー作成・登録までの作成が手順としてできるようになる
- [] 手順を管理者が作成・編集できるようにする -> UI 設計が大事だね
- [] push 通知(予定近づいたとき) Service Worker の実装
- [] Electron 実装ではもっと別なことができるようになる
- [] API 設計通りにつくる

### ディレクトリ構成

```cmd
  .
   |-- components
   |-- containers
   |   |-- TopPage
   |   |    |-- css
   |   |    |-- index.js
   |   |    |-- reducer.js
   |   |    |-- action.js
   |   |    |-- ComponentA.jsx
   |   |    `-- ComponentA'.jsx
   |   |-- UserMakePage
   |   |-- UserRegisterPage
   |   |-- UserListPage
   |   |-- UserDetailPage
   |   |-- FenicsListPage
   |   |-- ServerManagePage
   |   |-- ServiceManagePage
   |   |-- TemplateManagePage
   |   `-- AccountManagePage
   |-- constants
   |   `-- ActionType.js
   |-- ConfigureStore.js
   |-- App.js
   `-- index.html
```

### State 設計

State 設計難しい
気にせずつくればいいのかな?
あとで分割すればいいのではないか?

```json
{
  "session": {
    "id": "string",
    "name": "string",
    "pass": "string"
  },
  "selectedMenu": {
    "isTop": "boolean",
    "isMakeUser": "boolean",
    "isRegister": "boolean"
  },
  "top": {
    "news": {},
    "servers": {},
    "graph": {}
  },
  "kidList": {},
  "makeUserPage": {
    "value": {},
    "canMakeUser": "boolean"
  },
  "detail": {
    "selectTab": "number"
  },
  // ひとつのreducerで管理必要になる
  "data": {
    "kids": [],
    "customers": [],
    "licennse": {},
    "fenics": [],
    "busivs": [],
    "mobiles": [],
    "historys": [],
    "memos": [],
    "templates": [],
    "servers": [],
    "services": [],
    "loginUsers": []
  }
}
```
