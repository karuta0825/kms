### 期限
- [] 事業部会まで10/19

### Task

- [] redux-sageによる非同期通信
- [] redux x material-uiの実装方法
- [] HOCとatomic designによるきれいなコンポーネント設計
- [] login処理とreduxについて
- [x] flow, ESLint導入
- [] Promise・async/await導入
- [] Service Workerに挑戦

### 実装したい機能

- [] インターネットにつながならくてもよい
- [] 戻る・進む可能
- [] エラー内容を表示できる
- [] グラフは、チャートライブラリを使う
- [] todoが作成できる
- [] fenicsとビジVをわける
- [] customerをわける。ここに拠点の概念をもたせる
- [] パートナ一覧と編集ができるようにする
- [] ユーザー作成・登録までの作成が手順としてできるようになる
- [] 手順を管理者が作成・編集できるようにする -> UI設計が大事だね
- [] push通知(予定近づいたとき) Service Workerの実装
- [] Electron実装ではもっと別なことができるようになる
- [] API設計通りにつくる

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

### State設計

State設計難しい
気にせずつくればいいのかな?
あとで分割すればいいのではないか?

```json
{
  "session" : {
    "id" : "string",
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
    "graph": {},
  },
  "kidList" : {

  },
  "makeUserPage": {
    "value" : {

    },
    "canMakeUser" : "boolean"
  },
  "detail" : {
    "selectTab" : "number",
  },
  // ひとつのreducerで管理必要になる
  "data" : {
    "kids" : [],
    "customers" : [],
    "licennse": {},
    "fenics" : [],
    "busivs": [],
    "mobiles":  [],
    "historys" : [],
    "memos": [],
    "templates": [],
    "servers": [],
    "services": [],
    "loginUsers": [],
  },
}

```