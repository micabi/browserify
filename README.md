# browserify-test

browserify、babel、gulpのテスト

BabelはES2015+のコードをES5相当までダウングレードするだけのツール → importをrequireに変換(browserifyがimport/exportを理解できないから)

BrowserifyはrequireをJavaScript世界にでっち上げるだけのツール → requireをfunctionに変換(ブラウザーがrequireを理解できないから)

babelify は Browserify 用の Babel 変換ライブラリ(browserifyがimport/exportを理解できるようにする)

---

## babelのバージョンについて

バージョン7+にしたい場合(推奨)

npm i -D @babel/core

npm i -D @babel/preset-env

バージョン6にしたい場合

npm i -D babel-core

npm i -D babel-preset-2015