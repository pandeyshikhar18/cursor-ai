# 🚀 cursor-ai

A desktop AI-powered code assistant inspired by GitHub Copilot and ChatGPT, built with **Electron**, **React**, and **OpenRouter API** (GPT-3.5 Turbo).

---

## ✨ Features

- 💬 Real-time AI chat assistant integrated with GPT-3.5 Turbo via OpenRouter API
-  Deployed Link: https://cursor-ai-eosin.vercel.app/ 
- 📝 Persistent chat history within session  
- 🔄 Typing indicator animation and light/dark theme toggle  
- 🕵️‍♂️ Custom hardcoded triggers (e.g., developer bio response)  
- 🖥️ Desktop app shell via Electron for native experience  
- 🌐 Frontend deployed on Vercel for web access  

---

## 🛠️ Tech Stack

| Layer            | Technology                          | Purpose                              |
|------------------|-----------------------------------|------------------------------------|
| Frontend         | React + TypeScript                 | UI components & state management    |
| AI Backend       | OpenRouter API (GPT-3.5 Turbo)    | AI chat completions                 |
| HTTP Client      | Axios                             | API requests                       |
| Desktop Wrapper  | Electron                         | Native desktop app window           |
| Bundler          | Vite                              | Fast builds & dev environment       |
| API Key Management | `config.ts` fallback              | API key injection (due to .env limitations) |

---

## ⚙️ Installation & Running Locally

1. **Clone the repo**  
   ```bash
   git clone https://github.com/pandeyshikhar18/cursor-ai.git
   cd cursor-ai
Install dependencies

bash
Copy
Edit
npm install
Add your OpenRouter API key
Create or edit src/config.ts and add:

ts
Copy
Edit
export const OPENROUTER_API_KEY = "your_api_key_here";
Build the React app

bash
Copy
Edit
npm run build
Run the Electron app

bash
Copy
Edit
npm run electron
🚀 Deployment
Frontend deployed on Vercel (production-ready React build)

Electron app is packaged and runs locally using Electron commands

🐞 Challenges & Solutions
Issue	Cause	Solution
Environment Variables	.env not accessible inside Electron build	Switched to manual config.ts export for API key
Authentication Errors (401)	Missing or malformed Authorization header	Ensured correct Authorization: Bearer <key> format
Entry Point Confusion	Electron loading wrong React entry during dev	Separated Electron main (main.ts) from React entry (main.tsx)

📚 Learnings
Environment variables behave differently in Electron vs frontend React context

How to integrate AI models in desktop apps using API calls

Managing stateful chat UI in React wrapped by Electron

📄 License
This project is licensed under the MIT License.

📬 Contact
Shikhar Pandey – GitHub | Email

Feel free to open issues or contribute! ⭐

vbnet
Copy
Edit

Just paste this into your repo’s `README.md` and you’re set! Want me to help with any o
