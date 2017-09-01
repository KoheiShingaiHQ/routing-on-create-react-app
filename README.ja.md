# Create React App - *CSS* のカスタマイズ

## CSS → Sass
`polyreact` を、カスタマイズしてみます。

### npmモジュール - *node-sass-chokidar* のインストール
```bash
# カレントディレクトリ : ~/polyreact
npm install node-sass-chokidar --save-dev
```

### npmモジュール - *npm-run-all* のインストール
```bash
# カレントディレクトリ : ~/polyreact
npm install npm-run-all --save-dev
```

### package.json - *script* の編集
```diff
# ファイルパス : ~/polyreact/package.json
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build": "npm run build-css && react-scripts build",
+    "build-css": "node-sass-chokidar src/ -o src/",
+    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
```

→ `npm start` 実行により、`/src` フォルダ以下の `.sass` ファイルが、`.css` に変換されます。