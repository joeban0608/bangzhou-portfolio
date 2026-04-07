## Context

專案目前使用 `Next.js 16.2.2`、`React 19.2.4`、`Tailwind CSS v4`，並採用 `app/` 路由結構。實作前首頁仍是預設模板，因此缺乏品牌資訊、內容模型與視覺主題。`AGENTS.md` 另外要求在實作時參照本地 `node_modules/next/dist/docs/` 文件，因此本次設計需遵守 Next 16 的 `app/layout.tsx`、metadata 與 `public/` 慣例。

## Goals / Non-Goals

**Goals:**
- 建立一個單頁式作品集首頁，完整涵蓋個人介紹、技能、作品、經歷與聯絡方式。
- 將站點文案抽成單一資料模組，讓內容維護不依賴 JSX 結構。
- 用全域樣式 token 建立暗色星際視覺風格，避免只靠零散 utility class 堆疊。
- 讓首頁可被靜態建置，並具備基本 SEO metadata 與手機版導覽能力。

**Non-Goals:**
- 不在本次加入 CMS、後端 API、表單提交或資料庫。
- 不在本次建立作品詳情頁、部落格、雙語切換 UI。
- 不在本次處理真實內容蒐集、正式頭像或正式社群圖片素材。

## Decisions

### 1. 採用單一路由首頁，而不是先拆多頁
首頁需求以快速建立個人展示能力為主，因此先維持 `/` 單一路由，使用錨點導覽對應六個主區塊。這能降低資訊架構與 routing 複雜度，也符合目前內容仍在整理中的狀態。

替代方案是先拆成 `/about`、`/projects`、`/contact` 多頁，但這會提高內容量需求與導覽成本，不適合第一版。

### 2. 以 Server Component 組裝首頁，避免不必要的 client state
首頁內容是靜態展示，不需要即時互動或瀏覽器狀態，因此保留 `app/page.tsx` 為 Server Component，只在畫面層使用純標記與 CSS。手機導覽使用原生 `details/summary`，避免為了簡單收合新增 client component。

替代方案是用 React state 管理 mobile menu，但會增加 hydration 成本與元件複雜度。

### 3. 內容集中在型別化資料模組
建立 `portfolioContent` 作為首頁唯一內容來源，頁面元件只接收與 render 對應資料片段。這讓內容調整、未來替換真實資料、或升級成雙語結構時不必大幅改動頁面實作。

替代方案是直接把文案寫在 JSX 中，但會讓內容修改與元件結構耦合，後續不利維護。

### 4. 使用全域 CSS token 建立視覺系統
暗色宇宙風格涉及背景層次、柔光、玻璃卡片、文字階層與 CTA 樣式，集中在 `app/globals.css` 定義 token 與 reusable class 比完全散落在 JSX 更可控。頁面仍使用 Tailwind utility 組版，但視覺語言由少量全域 class 統一。

替代方案是完全使用 utility class 寫所有樣式，但重複高、風格難以統一，也不利後續調整品牌方向。

### 5. metadata 與字型在 root layout 統一設定
依 Next 16 App Router 慣例，站點 metadata 直接在 `app/layout.tsx` 以 `Metadata` 物件定義，字型則透過 `next/font/google` 載入並綁定 CSS variables。這能同時處理 SEO、語言設定與全站字型。

替代方案是把 metadata 留在 page 層或用外部 CSS 載字型，但都不如 root layout 集中。

### 6. 補上 `turbopack.root` 消除 workspace root 警告
此 repo 上層存在其他 lockfile，Next 16 會錯誤推斷 workspace root 並發出警告。於 `next.config.ts` 設定 `turbopack.root = process.cwd()` 能將 root 鎖定在目前專案，避免 dev/build 噪音。

## Risks / Trade-offs

- [內容仍為占位資料] → 目前作品、經歷、聯絡資訊不是最終版本；以集中式資料模組降低後續替換成本。
- [單頁結構的資訊承載有限] → 第一版適合快速展示，但若作品與文章增加，需後續擴成多頁架構。
- [全域 CSS class 增加少量客製樣式] → 透過限制在 token、卡片與按鈕層級，避免演變成無邏輯的大型樣式表。
- [原生 `details` 導覽互動有限] → 優先換取無 JS 狀態管理與較低複雜度，若之後需要更細控制再升級。
