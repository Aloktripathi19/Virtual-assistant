# 🤖 Virtual Assistant Web App

A fun and lightweight virtual assistant built with JavaScript that interacts with users through voice commands and offers a variety of features ranging from motivational support to basic utilities and health tips.

---

## ✨ Features

### 🗣️ Conversational Capabilities
- **Emotional Support**
  - Responds to phrases like:
    - `"I love you"`, `"I miss you"`, `"what is love?"`, `"what is life?"`
    - `"I'm feeling down"`, `"I'm stressed"` – provides motivational quotes
- **Birthday Interaction**
  - Recognizes: `"your birthday"`, `"happy birthday"`, `"today is my birthday"` – gives fun responses

---

### 💡 Health & Wellness Tips
- Offers simple remedies and tips for:
  - Cold, cough, sore throat
  - Eye strain
  - Stomach ache, indigestion
  - Muscle pain
  - Improving sleep and immunity

---

### 🧮 Math Evaluation
- Answers basic math questions:
  - `"what is 2 + 2?"`, `"what is 10/2?"`, `"what is 3 power 2?"`
  - Supports basic arithmetic and exponentiation

> ⚠️ Uses `eval()` for expression parsing – ensure safety before production use.

---

### 🎮 Game Launcher
- Voice command `"open game"` or `"open games"` randomly launches one of:
  - Rock Paper Scissors
  - Multiplication Game
  - Tic Tac Toe

---

## 🚀 Tech Stack
- HTML, CSS, JavaScript
- Web Speech API for speech recognition
- Modular game files and logic
- Responsive UI for desktop and mobile

---

## 📁 Project Structure (Suggested)

- `index.html` – Main webpage for the virtual assistant
- `script.js` – JavaScript file with voice recognition and speech synthesis logic
- `style.css`, `style1.css` – Styling files
- `*.png / *.jpg` – Assets used for visual UI

## 🛠️ How It Works

1. Click the voice button (identified with `#btn`).
2. Speak your command.
3. The assistant:
   - Converts your voice to text.
   - Greets you based on the current time.
   - Optionally, can respond to commands (future enhancement).

## 🧠 Technologies Used

- HTML5
- CSS3
- JavaScript
- Web Speech API (`SpeechRecognition`, `SpeechSynthesis`)

## ✅ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Aloktripathi19/Virtual-assistant.git
