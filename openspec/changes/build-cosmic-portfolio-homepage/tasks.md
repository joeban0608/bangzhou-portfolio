## 1. 首頁資訊架構與內容模型

- [x] 1.1 以單頁形式定義首頁區塊，包含 Hero、About、Skills、Projects、Experience、Contact
- [x] 1.2 建立集中化的 `portfolioContent` 資料模組與對應型別
- [x] 1.3 將占位內容替換為真實履歷資料、代表作品資訊與真實聯絡資料
- [x] 1.4 將 `joe-resume.json` 納入首頁資料來源，並映射為首頁展示結構

## 2. 頁面與導覽實作

- [x] 2.1 以 App Router 首頁元件重做 `/` 路由，移除預設 starter template
- [x] 2.2 加入桌機錨點導覽與手機版收合導覽
- [x] 2.3 讓首頁維持 Server Component 組裝，避免不必要的 client state
- [x] 2.4 在 Hero 區塊加入個人頭像卡片，並調整首頁首屏雙欄構圖
- [x] 2.5 在 Projects 區塊加入對應作品預覽圖

## 3. 視覺系統與站點設定

- [x] 3.1 在全域樣式中建立暗色宇宙主題 token、卡片樣式與 CTA 樣式
- [x] 3.2 更新 root layout 的字型、語系與 metadata 設定
- [x] 3.3 設定 `turbopack.root` 以消除錯誤的 workspace root 偵測警告
- [x] 3.4 將頭像與作品圖片資產接入首頁視覺系統，維持既有卡片風格

## 4. 驗證與後續差異

- [x] 4.1 執行 `npm run lint` 並確認通過
- [x] 4.2 執行 `npm run build` 並確認首頁可靜態建置
- [x] 4.3 補上正式個人頭像與作品預覽素材
- [ ] 4.4 補上社群分享圖與正式 favicon 等站點品牌素材
