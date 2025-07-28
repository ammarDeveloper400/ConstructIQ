# ConstructIQ UI – AI Estimation Chat Interface (Frontend Only)
ConstructIQ UI is a standalone frontend component that simulates AI-powered construction project estimation. It allows users to upload a document (PDF) and view mock AI-generated insights like valuation, risk flags, and confidence scores – all in an interactive chat-style interface.
---
## 📌 Key Highlights
- ⚛️ **Built with React.js**
- 🎨 **Styled with Tailwind CSS**
- 💬 **Chat-style interface**
- 📊 **Confidence meters**
- 🚩 **Risk flag visualizations**
- 📑 **Line item breakdown**
- 🔄 **No backend required (mock AI logic)**
---
## 🧱 Tech Stack
| Technology  | Description                                 |
|-------------|---------------------------------------------|
| React.js    | UI framework                                 |
| Tailwind CSS| Utility-first styling framework              |
| Framer Motion | Smooth animations                         |
| Lucide Icons | Icon set used for UI elements               |
---
## 📁 Project Structure
```bash
📦components/
 ┣ 📜ChatWindow.jsx          # Core UI logic and upload handling
 ┣ 📜EstimateRenderer.jsx    # Main estimate display logic
 ┣ 📜ConfidenceMeter.jsx     # Visual confidence meter
 ┣ 📜RiskFlags.jsx           # Displays risk flags
 ┣ 📜LineItemsTable.jsx      # Tabular item cost breakdown
 ┗ 📜Loader.jsx              # Loading animation component