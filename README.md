# Customizing Create React App : *CSS*

## CSS → Sass
Getting started customizing `polyreact` .

### Install npm module : *node-sass-chokidar*
```bash
# Current path : ~/polyreact
npm install node-sass-chokidar --save-dev
```

### Install npm module : *npm-run-all*
```bash
# Current path : ~/polyreact
npm install npm-run-all --save-dev
```

### Edit package.json : *script*
```diff
# Current path : ~/polyreact/package.json
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build": "npm run build-css && react-scripts build",
+    "build-css": "node-sass-chokidar src/ -o src/",
+    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
```

→ Running `npm start` compiles `.sass` files to `.css` under `/src` directory.