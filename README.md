# 【Auth.js】NextAuth v5で認証機能を作って、Cloudflare Pagesにデプロイする

## YouTube

[!["【Auth.js】NextAuth v5で認証機能を作って、Cloudflare Pagesにデプロイする"](https://i.ytimg.com/vi/-3EoYGs4THw/maxresdefault.jpg)](https://youtu.be/-3EoYGs4THw)

## 技術選定

- TypeScript
- Next.js
- Tailwind CSS
- Auth.js(NextAuth.js) v5
- Cloudflare Pages

## 初期設定

### NodeModuleをインストール

```bash
npm install
```

### 環境変数を設定

ファイル`.env.local.sample`を`.env.local`に変更して、各環境変数を指定する

```sh:.env.local
AUTH_SECRET=

AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```
