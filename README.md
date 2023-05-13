`create-next-app`で作成


## 環境構築
### 1. ローカル環境

- nodeのバージョンマネージャーに`volta`を使っています。以下のコマンドを実行してインストールしてください。

    `curl https://get.volta.sh/ | bash`

- 再起動して`volta --version`を実行してインストールできたか確認してください。`1.1.1`のようにバージョンが表示されれば大丈夫です。

- 以下のコマンドを実行して`node`をインストールしてください。

    `volta install node@18`

- `node`のバージョンは`v.18.16.0`を使用します。`node --version`を実行して問題ないか確認してください。


### 2. リポジトリのclone

- 以下のコマンドを実行して、ローカルにリポジトリをクローンします。

    `git clone git@github.com:powaaaaa/tsumaguro-frontend.git`


### 3. ライブラリのインストール

- 以下のコマンドを実行して、ライブラリをインストールします。

    `npm i`



## 開発について

- ### 開発サーバーの起動

    1. 以下のコマンドを実行します。

        `npm run dev`

    2. ブラウザで[http://localhost:3000](http://localhost:3000)を開いて結果を確認します。


- ### コミット

    - 以下のコマンドで、現在のパス以下の全てのファイルの変更を記録するようにします。

        `git add .`

    - 以下のコマンドでコミットできます。
        
        `git commit -m "ここにコミットメッセージ"`

    - コミットは**出来るだけ細かく行ってください**。


- ### ブランチ操作

    - ブランチ

    1. 以下のコマンドを実行してローカルを最新にします。

        `git pull`

    2. `git branch`で現在のブランチが確認できます。

    3. 以下のコマンドを実行してブランチを切り、そのブランチに切り替えます。

        `git switch -c [ブランチ名]`
    
    4. `git branch`で新しいブランチに移動したことを確認できれば大丈夫です。

    ※**mainブランチ以外**で`push`、`pull`するときは、以下のようにコマンドを実行して下さい。

        ```
        git push origin [ブランチ名]
        git pull origin [ブランチ名]
        ```


    - マージ

    1. 切ったブランチで作業後、`commit`、`push`まで行います。
    
    2. GitHub上のリポジトリに`Pull Request`のボタンが出るので、これを押して`Pull Request`を作成します。

    3. マージしたいブランチを選択して、`Create pull request`を押します。

    4. `Pull Request`の内容を入力する画面になるので、タイトル、詳細を記入します。(適当でいいよ)

    5. 入力後、画面下の`Create pull request`を押すとプルリク完了です。ぽわがapproveします。

    6. `Marge pull request`を押し、`Confirm marge`を押すとマージ顔料です。

    7. 最後にローカルにmainブランチを反映させます。`git switch main`でmainブランチへ移動し、`git pull`を実行してください。