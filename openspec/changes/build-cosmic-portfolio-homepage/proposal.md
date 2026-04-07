## Why

目前專案仍是 `create-next-app` 預設首頁，無法傳達個人定位、代表作品與工程能力，也沒有符合專案簡述中定義的暗色宇宙風格。需要先建立一個可展示、可維護、可後續擴充的個人作品集首頁，作為後續補齊真實內容與多語擴充的基礎。

## What Changes

- 將首頁重做為單頁式軟體工程師作品集，包含 Hero、關於我、技能、作品、經歷與聯絡區塊。
- 建立集中化的首頁內容資料模型，避免文案直接散落在頁面元件中。
- 首頁作品區僅保留 3 個代表作，並補上獨立作品集頁承接完整列表。
- 首頁經歷區改為 timeline 摘要，先顯示 3 段近期經歷並支援原頁展開更多內容。
- 擴充作品資料來源，讓作品集可同時整合履歷 JSON 與額外專案 JSON。
- 支援首頁與 `/projects` 各自獨立的作品排序欄位，讓精選順序與完整列表順序可分開維護。
- 統一作品資料的外部連結格式為單一 `link` 字串欄位，並讓首頁作品 CTA 直接導向對應專案。
- 更新根層級 metadata、語系與字型設定，讓站點基礎 SEO 與品牌資訊可用。
- 建立暗色宇宙／銀河視覺方向的全域樣式 token、卡片樣式與 CTA 樣式。
- 設定單頁錨點導覽與手機版收合導覽，讓頁面在桌機與手機都可使用。
- 補上 Next 16 Turbopack root 設定，移除多 lockfile 導致的 workspace root 警告。

## Capabilities

### New Capabilities
- `portfolio-homepage`: 提供單頁式個人作品集首頁，涵蓋內容區塊、導航、樣式主題與基礎站點 metadata。

### Modified Capabilities

## Impact

- 影響 `app/page.tsx`、`app/layout.tsx`、`app/globals.css`、`next.config.ts`、`joe/joe-resume.json`
- 新增首頁內容模組、首頁元件、`/projects` route、擴充作品 JSON 與新作品圖片資產
- 技術維持 `Next.js 16`、`React 19`、`Tailwind CSS v4`
