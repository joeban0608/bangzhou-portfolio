## 1. 首頁資訊架構與內容模型

- [x] 1.1 以單頁形式定義首頁區塊，包含 Hero、About、Skills、Projects、Experience、Contact
- [x] 1.2 建立集中化的 `portfolioContent` 資料模組與對應型別
- [ ] 1.3 將占位內容替換為最終版的個人經歷、作品資訊與真實聯絡資料

## 2. 頁面與導覽實作

- [x] 2.1 以 App Router 首頁元件重做 `/` 路由，移除預設 starter template
- [x] 2.2 加入桌機錨點導覽與手機版收合導覽
- [x] 2.3 讓首頁維持 Server Component 組裝，避免不必要的 client state

## 3. 視覺系統與站點設定

- [x] 3.1 在全域樣式中建立暗色宇宙主題 token、卡片樣式與 CTA 樣式
- [x] 3.2 更新 root layout 的字型、語系與 metadata 設定
- [x] 3.3 設定 `turbopack.root` 以消除錯誤的 workspace root 偵測警告

## 4. 驗證與後續差異

- [x] 4.1 執行 `npm run lint` 並確認通過
- [x] 4.2 執行 `npm run build` 並確認首頁可靜態建置
- [ ] 4.3 補上正式品牌素材，例如社群分享圖、正式 favicon 或個人頭像資產
