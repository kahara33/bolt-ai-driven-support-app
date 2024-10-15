# Source Code Analyzer - 設計書

## 1. システム概要

Source Code Analyzerは、ソースコードを解析し、設計書とテストケースを自動生成するWebアプリケーションです。

## 2. システム構成

### 2.1 フロントエンド
- React
- React Router
- Tailwind CSS
- Lucide React (アイコン)

### 2.2 バックエンド (TODO)
- Node.js
- Express.js
- ソースコード解析ライブラリ (言語別)

### 2.3 外部連携
- GitHub API (Octokit)

## 3. 主要コンポーネント

### 3.1 App.tsx
- アプリケーションのメインコンポーネント
- ルーティング設定

### 3.2 Header.tsx
- ナビゲーションメニュー

### 3.3 Footer.tsx
- フッター情報

### 3.4 Home.tsx
- ホームページ
- 主要機能へのリンク

### 3.5 SourceAnalysis.tsx
- ソースコードのアップロードと解析

### 3.6 DocumentGeneration.tsx
- 設計書生成機能

### 3.7 TestGeneration.tsx
- テストケース生成機能

## 4. データフロー

1. ユーザーがソースコードをアップロード
2. バックエンドでソースコード解析
3. 解析結果を基に設計書とテストケースを生成
4. 生成された成果物をユーザーに表示

## 5. 今後の拡張計画

- バックエンド機能の実装
- 複数言語対応
- GitHub連携機能の実装
- 差分解析と影響範囲分析の実装