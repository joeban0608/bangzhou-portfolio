## Context

專案目前使用 `Next.js 16.2.2`、`React 19.2.4`、`Tailwind CSS v4`，並採用 `app/` 路由結構。實作前首頁仍是預設模板，因此缺乏品牌資訊、內容模型與視覺主題。`AGENTS.md` 另外要求在實作時參照本地 `node_modules/next/dist/docs/` 文件，因此本次設計需遵守 Next 16 的 `app/layout.tsx`、metadata 與 `public/` 慣例。

## Goals / Non-Goals

**Goals:**
- 建立一個單頁式作品集首頁，完整涵蓋個人介紹、技能、作品、經歷與聯絡方式。
- 將站點文案抽成單一資料模組，讓內容維護不依賴 JSX 結構。
- 讓首頁作品與經歷區塊有明確的資訊分層，首頁摘要與完整列表各自有清楚入口。
- 讓作品資料可從多個 JSON 來源整合，並保留獨立排序控制。
- 用全域樣式 token 建立暗色星際視覺風格，避免只靠零散 utility class 堆疊。
- 讓首頁可被靜態建置，並具備基本 SEO metadata 與手機版導覽能力。

**Non-Goals:**
- 不在本次加入 CMS、後端 API、表單提交或資料庫。
- 不在本次建立作品詳情頁、部落格、雙語切換 UI。
- 不在本次製作社群分享圖、正式 favicon 或延伸品牌素材包。

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

後續實作中，首頁內容已改為從 `joe/joe-resume.json` 匯入真實履歷資料，再映射成首頁需要的 `portfolioContent` 結構，而不是讓元件直接依賴原始履歷 JSON shape。這保留了展示層與原始資料層之間的轉換空間。

### 4. 使用全域 CSS token 建立視覺系統
暗色宇宙風格涉及背景層次、柔光、玻璃卡片、文字階層與 CTA 樣式，集中在 `app/globals.css` 定義 token 與 reusable class 比完全散落在 JSX 更可控。頁面仍使用 Tailwind utility 組版，但視覺語言由少量全域 class 統一。

替代方案是完全使用 utility class 寫所有樣式，但重複高、風格難以統一，也不利後續調整品牌方向。

### 5. metadata 與字型在 root layout 統一設定
依 Next 16 App Router 慣例，站點 metadata 直接在 `app/layout.tsx` 以 `Metadata` 物件定義，字型則透過 `next/font/google` 載入並綁定 CSS variables。這能同時處理 SEO、語言設定與全站字型。

替代方案是把 metadata 留在 page 層或用外部 CSS 載字型，但都不如 root layout 集中。

### 6. 補上 `turbopack.root` 消除 workspace root 警告
此 repo 上層存在其他 lockfile，Next 16 會錯誤推斷 workspace root 並發出警告。於 `next.config.ts` 設定 `turbopack.root = process.cwd()` 能將 root 鎖定在目前專案，避免 dev/build 噪音。

### 7. 頭像與作品圖使用本地靜態資產匯入
首頁 Hero 頭像與作品預覽圖以本地圖片資產方式匯入，交由 `next/image` 處理尺寸與載入穩定性。圖片對應關係維持在展示資料層，僅將 `project-avatars` 映射到 Projects 區塊，不把這組圖片錯誤掛載到 Experience。

替代方案是將圖片路徑直接寫回原始履歷 JSON，或在元件內用條件式硬編碼對應，但前者會把履歷來源與展示需求耦合，後者則讓資料關係散落在 UI 層。

### 8. Hero 首屏以左欄為主視覺重心
在加入頭像後，桌機版首屏若採左右垂直置中，會讓標題視覺重心被照片卡分散。因此 Hero 改為左欄文字由上往下起排、右欄照片卡頂部對齊，並將右欄控制在固定最大寬度，讓照片是輔助資訊而不是主角。

### 9. Experience 採 timeline 摘要並用原生 `details` 展開更多內容
首頁經歷區需要兼顧可掃讀性與資訊量，因此第一屏只保留 3 段近期經歷，並透過 timeline 視覺建立閱讀順序。其餘經歷以原生 `details/summary` 在同頁展開，延續既有「避免不必要 client state」的方向。

替代方案是直接一次列出全部經歷，或改用 client-side accordion；前者會讓首頁節奏變重，後者則增加 hydration 與互動狀態管理。

### 10. Projects 分成首頁精選與獨立作品集頁
首頁作品區的任務是快速建立代表作印象，因此只保留 3 個精選專案，並固定以 SEO Flow、crown-clothing、smart-brain-api 的順序排列。完整專案列表則移到 `/projects`，首頁用明確 CTA 導流，避免首頁承載過多卡片。

為了避免資料與 UI 重複定義，作品卡與段落標題抽成可重用元件，資料層同時提供首頁精選與完整列表兩種映射結果。

### 11. 將擴充專案 JSON 視為第二個作品來源
部分作品不適合直接混在履歷 JSON 中維護，因此額外建立 `joe/2026-extend-projects.json` 作為第二個作品來源，與 `joe/joe-resume.json` 的 `projects` 一起合併後再映射為展示用資料。這讓履歷資料與作品集補充資料可以並存，不必強迫所有專案都遵循同一個來源結構。

替代方案是把所有作品都塞回單一履歷 JSON，但那會讓履歷檔逐步承擔過多展示層責任，也不利之後獨立維護作品集內容。

### 12. 首頁與完整作品集使用獨立排序欄位
首頁精選與完整作品集的排序目標不同，因此資料層支援 `homeSortOrder` 與 `portfolioSortOrder` 兩個欄位。首頁只依 `homeSortOrder` 決定精選內容，`/projects` 則依 `portfolioSortOrder` 排完整列表；若舊資料只提供 `sortOrder`，則保留相容作為 fallback。

這比單一 `sortOrder` 更可持續，因為首頁的「想優先展示什麼」與完整作品集的「想怎麼排列全部作品」本來就是兩套決策。

### 13. 作品外部連結統一使用單一 `link` 欄位
作品資料中的外部網址不再使用巢狀 `links` 物件，而統一為單一 `link` 字串欄位。這樣展示層不需要知道連結類型，只要判斷是否存在 `link` 即可決定 CTA 是外部導流還是回落到聯絡入口。

首頁精選卡片也沿用同一份 `link` 值，不再額外覆寫成 `/projects#...`。首頁區塊負責精選展示，「更多作品」按鈕才是導流到 `/projects` 的主要入口。

## Risks / Trade-offs

- [履歷 JSON 與首頁展示內容可能逐步分歧] → 透過展示層映射維持解耦，但之後若欄位持續擴充，需定期同步資料轉換邏輯。
- [單頁結構的資訊承載有限] → 第一版適合快速展示，但若作品與文章增加，需後續擴成多頁架構。
- [首頁與獨立作品集頁共用同一份資料映射] → 可以降低重複維護成本，但若未來兩者展示需求差異變大，可能需要拆分更細的 view model。
- [多個資料來源需要維持欄位語意一致] → 透過展示層 helper 做統一轉換，但若來源格式再擴張，需持續補齊型別與 fallback 邏輯。
- [外部連結只保留單一欄位] → 簡化了 CTA 判斷，但若未來同一作品需要同時展示 demo、repo 等多種連結，需再擴充資料結構。
- [全域 CSS class 增加少量客製樣式] → 透過限制在 token、卡片與按鈕層級，避免演變成無邏輯的大型樣式表。
- [原生 `details` 導覽互動有限] → 優先換取無 JS 狀態管理與較低複雜度，若之後需要更細控制再升級。
- [本地素材已部分正式化，但品牌資產仍未完整] → 目前已有頭像與作品圖；OG 圖、favicon 與更完整品牌素材仍需後續補齊。
