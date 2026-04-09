# 🎯 ScoreFusion

A modern web-based **exam score analysis tool** for **JEE Main** and **KEAM**, designed to help students evaluate their performance with deep insights and visual analytics.

---

## 🚀 Features

### ✅ JEE Main Analyzer
- Upload official **response sheet PDF**
- Automatic parsing using PDF.js
- Shift-based answer key evaluation
- Subject-wise score breakdown
- Accuracy calculation
- Question-level analysis
- Export results as PDF

---

### ✅ KEAM Analyzer
- Paste student responses manually
- Flexible input formats supported
- Handles:
  - Skipped questions
  - Invalid entries
  - Duplicate responses
  - Cancelled questions
- Official answer key integration
- Detailed performance breakdown

---

### 📊 Analytics & Visualization
- Score ring (total marks)
- Accuracy ring
- Subject-wise summary table
- Pie chart distribution
- Question-level insights

---

### 📄 Export
- Generate **clean PDF reports**
- Includes:
  - Summary
  - Accuracy
  - Subject-wise analysis

---

### 🌙 UI Features
- Dark / Light mode toggle
- Mobile-first responsive design
- Smooth animations & modern UI

---

## 🏗️ Project Structure
├── index.html # Landing page
├── jee.html # JEE dashboard
├── keam.html # KEAM dashboard
│
├── script.js # JEE logic
├── keam-script.js # KEAM logic
├── pdf-export.js # PDF utilities
├── home.js # Landing logic
│
├── styles.css # Global styles
└── assets/ # Logos & images

---

## ⚙️ How It Works

### 🔹 JEE Flow
1. Select exam shift
2. Upload response sheet PDF
3. System extracts text using PDF.js
4. Answers are matched with official keys
5. Score & analytics are generated

---

### 🔹 KEAM Flow
1. Select exam shift
2. Paste responses
3. System parses and validates input
4. Matches with official answer key
5. Generates score + detailed analysis

---

## 🧠 Scoring Logic

### JEE & KEAM

| Condition   | Marks |
|------------|------|
| Correct    | +4   |
| Wrong      | -1   |
| Skipped    | 0    |

### KEAM Special Cases
- Cancelled questions → excluded from scoring

---

## 💾 Data Persistence

Stored in browser `localStorage`:
- Theme preference
- Last result
- KEAM input data

---

## 🧰 Tech Stack

- **HTML5**
- **CSS3 (Custom Properties + Responsive Design)**
- **JavaScript (Vanilla)**
- **PDF.js** → PDF parsing
- **Chart.js** → Data visualization
- **jsPDF** → Report generation

---

## ⚠️ Limitations

### JEE
- Cannot extract:
  - Question text
  - Option text  
  (Because NTA PDFs render them as images)

### KEAM
- Depends on accuracy of manually entered responses

---

## 🔮 Future Improvements

- Add more JEE shifts dynamically
- Rank prediction system
- Performance trend analytics
- User accounts & cloud storage
- PWA (installable app)
- Better mobile optimizations

---

## 🧑‍💻 Author

Built by **Ashik**  
Focused on improving student exam analysis experience.

---

## ⭐ Support

If you found this useful:
- Star the repo ⭐
- Share with friends preparing for JEE/KEAM

---

## 📜 License

This project is open-source and available under the **MIT License**.
