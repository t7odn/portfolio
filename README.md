# GitHub Profile Portfolio

React + TypeScript + Next.js で作成されたポートフォリオサイトです。

## 🚀 機能

- **レスポンシブデザイン**: モバイル・デスクトップ対応
- **ダークモード**: システム設定に応じた自動切り替え + 手動切り替え
- **ホームページ**: プロフィール紹介とナビゲーション
- **ポートフォリオページ**:
  - 技術スキル一覧
  - スキルレベル別フィルター（初級/中級/上級）
  - カテゴリ別フィルター（言語/フレームワーク/ツール/データベース/ミドルウェア）
  - 技術アイコンと経験年数表示

## 🛠 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v3
- **デプロイ**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 静的ファイルの出力
npm run export
```

## 🌐 デプロイ

このプロジェクトはGitHub Pagesにデプロイされます。

1. GitHubリポジトリにプッシュ
2. GitHub Actionsが自動的にビルド・デプロイを実行
3. `https://[username].github.io/gh-profile/` でアクセス可能

## 📝 カスタマイズ

### スキルデータの編集

`src/data/skills.ts` でスキル情報を編集できます：

```typescript
{
  id: 'skill-id',
  name: 'スキル名',
  level: 'beginner' | 'intermediate' | 'advanced',
  category: 'language' | 'framework' | 'tool' | 'database' | 'middleware',
  icon: '🔷',
  description: 'スキルの説明',
  yearsOfExperience: 3,
}
```

### プロフィール情報の編集

- `src/app/page.tsx`: ホームページの内容
- `src/components/Navigation.tsx`: ナビゲーションのタイトル

## 📁 プロジェクト構成

```
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions設定
├── public/
│   └── icons/              # アイコンファイル
├── src/
│   ├── app/
│   │   ├── page.tsx        # ホームページ
│   │   ├── portfolio/
│   │   │   └── page.tsx    # ポートフォリオページ
│   │   ├── layout.tsx      # レイアウト
│   │   └── globals.css     # グローバルスタイル
│   ├── components/
│   │   ├── Navigation.tsx  # ナビゲーション
│   │   ├── SkillCard.tsx   # スキルカード
│   │   ├── LevelBadge.tsx  # レベルバッジ
│   │   └── ThemeToggle.tsx # テーマ切り替え
│   ├── data/
│   │   └── skills.ts       # スキルデータ
│   └── types/
│       └── skill.ts        # 型定義
├── next.config.js          # Next.js設定
├── tailwind.config.js      # Tailwind CSS設定
└── tsconfig.json           # TypeScript設定
```

## 🎨 デザイン

- **カラーテーマ**: ブルー系グラデーション + ダークモード対応
- **フォント**: Inter（Google Fonts）
- **アニメーション**: Hover効果とトランジション
- **レスポンシブ**: モバイルファーストデザイン

## 📄 ライセンス

ISC