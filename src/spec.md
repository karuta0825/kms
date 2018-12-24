### 期限

- [] 事業部会まで 10/19

### Task

- [] redux-sage による非同期通信
- [] redux x material-ui の実装方法
- [] HOC と atomic design によるきれいなコンポーネント設計
- [] login 処理と redux について
- [x] flow, ESLint 導入
- [] Service Worker に挑戦

### Today Task

- [] ユーザー詳細画面移行時に、プログレスダイアログを表示する
- [] 各種入力コンポーネント作成
  - [x] 入力チェックしてくれる
  - [] Customer タブの入力コンポーネントに入力チェックを追加する
  - [x] 数値
  - [] 数値(増加、減少ボタンあり)
  - [] 2 選択
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
  - [x] 業務 QA
  - [x] ユーザーキ
  - [x] DB パスワード
  - [x] Fenics キー
  - [x] モバイル -> 修正必要かもね? helperText がほしい
  - [] システム環境
  - [] バージョン
  - [] ネットワーク
  - [] クライアント数
  - [] 端末数
- [] 不要な components を削除

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
