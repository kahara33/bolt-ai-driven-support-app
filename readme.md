# Source Code Analyzer

Source Code Analyzerは、ソースコードを解析し、設計書とテストケースを自動生成するWebアプリケーションです。

## 機能

- ソースコードの解析
- 設計書の自動生成
- テストケースの自動生成
- OpenAI APIとの連携

## 必要条件

- Node.js (v14以上)
- npm (v6以上)

## インストール

1. リポジトリをクローンします：

```bash
git clone https://github.com/yourusername/source-code-analyzer.git
cd source-code-analyzer
```

2. 依存関係をインストールします：

```bash
npm install
```

## 使用方法

1. 開発サーバーを起動します：

```bash
npm run dev
```

2. ブラウザで [http://localhost:5173](http://localhost:5173) を開きます。

3. アプリケーションの指示に従って、ソースコードをアップロードし、設計書やテストケースを生成します。

## OpenAI APIの設定

1. [OpenAI](https://openai.com/) でアカウントを作成し、APIキーを取得します。
2. アプリケーションの「Settings」ページでAPIキーとエンドポイントを入力します。

## テスト

テストを実行するには、以下のコマンドを使用します：

```bash
npm test
```

## ビルド

プロダクション用のビルドを作成するには、以下のコマンドを使用します：

```bash
npm run build
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。