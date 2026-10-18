# AI RPG

**一款由 AI 驅動的桌面文字角色扮演遊戲。**

AI RPG 是一個以大型語言模型（LLM）為核心的文字 RPG 實驗性專案，嘗試將 AI 對話能力與桌面應用程式結合，探索由 AI 驅動的互動式文字遊戲體驗。

本專案由 [Thomas10409](https://github.com/Thomas10409) 開發，使用 Vue 3、TypeScript 與 Tauri 建構桌面應用程式，並透過 OpenAI 相容的 API 與語言模型進行互動。

> [!WARNING]
> 本專案目前仍處於開發階段，功能與穩定性尚未完善，部分功能可能無法正常運作。
>
> 如果你只是想體驗遊戲，建議優先查看 [Releases](https://github.com/Thomas10409/AI-RPG-tauri/releases) 是否提供可用的版本，而不是直接下載原始碼。
>
> 如果你想參與開發，歡迎自行建置、測試，或協助修復問題。

## 專案目標

本專案的目標是探索如何利用大型語言模型，打造具有互動性與敘事能力的文字 RPG。

相較於完全依賴預先編寫劇情的傳統文字遊戲，AI 驅動的遊戲可以透過模型生成回應，讓玩家與遊戲之間的互動更具彈性。

目前專案仍在持續開發，實際遊戲機制與功能可能隨開發進度調整。

## 技術架構

| 技術 | 用途 |
|---|---|
| Vue 3 | 前端介面與互動邏輯 |
| TypeScript | 前端程式開發與型別檢查 |
| Vite | 前端開發伺服器與建置工具 |
| Tauri 1.x | 建立桌面應用程式 |
| OpenAI Node.js SDK | 與相容的語言模型 API 互動 |
| Axios | HTTP 請求處理 |

### 系統概念

```text
┌────────────────────────────┐
│       AI RPG Desktop       │
│                            │
│  Vue 3 + TypeScript        │
│  使用者介面與互動邏輯      │
└─────────────┬──────────────┘
              │
              │ API Request
              ▼
┌────────────────────────────┐
│    OpenAI-Compatible API   │
│                            │
│  語言模型推論與回應生成    │
└─────────────┬──────────────┘
              │
              │ Model Response
              ▼
┌────────────────────────────┐
│       AI RPG Desktop       │
│                            │
│  顯示 AI 生成的文字回應    │
└────────────────────────────┘
```

以上為概念性架構示意。實際 API 端點、模型設定與請求流程，請以程式碼中的實作為準。

## 專案結構

```text
AI-RPG-tauri/
├── public/
│   └── images/          # 靜態圖片資源
├── src/                 # Vue 前端程式碼
├── src-tauri/            # Tauri 桌面應用程式設定與原生部分
├── index.html            # 前端入口 HTML
├── package.json          # 套件依賴與執行指令
├── package-lock.json     # npm 依賴版本鎖定
├── tsconfig.json         # TypeScript 設定
├── vite.config.ts        # Vite 設定
└── README.md             # 專案說明文件
```

## 開發環境

若要從原始碼建置本專案，請先準備以下環境：

- [Node.js](https://nodejs.org/)
- npm
- [Rust](https://www.rust-lang.org/tools/install) 與 Cargo
- Tauri 1.x 所需的作業系統建置工具
- 可供應用程式使用的 OpenAI 相容 API 服務及模型

Tauri 所需的原生建置依賴會依作業系統而有所不同，請參考 [Tauri v1 官方文件](https://v1.tauri.app/v1/guides/getting-started/prerequisites/)。

## 從原始碼執行

### 1. 下載專案

```bash
git clone https://github.com/Thomas10409/AI-RPG-tauri.git
cd AI-RPG-tauri
```

### 2. 安裝依賴

```bash
npm install
```

### 3. 啟動前端開發伺服器

```bash
npm run dev
```

此命令會啟動 Vite 開發伺服器，適合單獨測試前端介面。

### 4. 建置前端

```bash
npm run build
```

此命令會先執行 Vue / TypeScript 型別檢查，再使用 Vite 建置前端。

### 5. 啟動桌面應用程式

請先確認已安裝符合本專案版本的 Tauri 原生建置依賴，再透過 Tauri CLI 啟動桌面開發環境：

```bash
npx tauri dev
```

### 6. 建置桌面應用程式

```bash
npx tauri build
```

建置產物的位置與封裝格式會依作業系統及 Tauri 設定而有所不同。

> **注意：** 上述命令是依據專案目前的套件設定整理而成，並不代表目前版本已通過完整建置或執行測試。若發生錯誤，請以終端機輸出及專案實際依賴版本進行排查。

## AI 模型與 API

本專案使用 OpenAI 相容的 API 格式與語言模型互動。實際可用的模型取決於 API 服務提供者及程式中的請求設定。

使用時請確認：

- API 端點符合所使用服務的規格。
- 模型名稱與服務提供者支援的模型一致。
- API 金鑰已正確設定。
- 請求與回應格式符合程式預期。

不同服務提供者對 OpenAI 相容 API 的支援程度可能不同，因此即使使用相同 SDK，也不保證所有模型都能直接使用。

**安全提醒：** 請勿將 API 金鑰直接寫入公開原始碼，或提交至 GitHub。建議使用本機環境變數或其他不納入版本控制的設定方式。

## 開發狀態

本專案仍處於早期開發階段。

目前的重點是建立桌面應用程式的基本架構，並探索語言模型與文字 RPG 的整合方式。部分介面、遊戲流程及模型互動功能仍可能需要調整。

如果你在使用過程中發現問題，歡迎提供：

- 問題發生的操作步驟。
- 預期結果與實際結果。
- 終端機或應用程式的錯誤訊息。
- 作業系統與執行環境資訊。

這些資訊有助於重現問題並改善專案。

## 授權條款

本專案採用 [MIT License](LICENSE)。

如果你使用、修改或延伸本專案，請依照授權條款保留必要的著作權與授權聲明。

## 作者

**Thomas10409**

GitHub：[https://github.com/Thomas10409](https://github.com/Thomas10409)

專案：[AI-RPG-tauri](https://github.com/Thomas10409/AI-RPG-tauri)

