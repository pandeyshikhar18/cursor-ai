import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../styles.css';

type Message = {
  role: 'user' | 'ai';
  content: string;
};

const ChatPane: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    const lower = input.toLowerCase();
    if (
      lower.includes('who is shikhar') ||
      lower.includes('about the developer') ||
      lower.includes('who made this') ||
      lower.includes('creator') ||
      lower.includes('developer')
    ) {
      const bioMessage: Message = {
        role: 'ai',
        content: `👨‍💻 *Shikhar Pandey* is a highly motivated final-year CSE student with a strong foundation in full-stack web development and data-driven machine learning solutions.`,
      };
      setMessages((prev) => [...prev, bioMessage]);
      setLoading(false);
      setInput('');
      return;
    }

    try {
      const res = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'openai/gpt-3.5-turbo',
          messages: [{ role: 'user', content: input }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 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`,
            'HTTP-Referer': 'http://localhost:3000',
            'X-Title': 'cursor-clone',
          },
        }
      );

      const aiMessage: Message = {
        role: 'ai',
        content: res.data.choices[0].message.content,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err: any) {
      const errorMessage: Message = {
        role: 'ai',
        content: `[Error: ${err.message}]`,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
      setInput('');
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chat-container">
      <h1 className="chat-title">
        💬 Cursor AI Assistant
        <span className="chat-subtitle">crafted by Shikhar Pandey</span>
      </h1>

      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.role} fade-in`}>
            {msg.content}
          </div>
        ))}
        {loading && (
          <div className="chat-message ai typing-indicator">
            <span></span><span></span><span></span>
          </div>
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message... (Enter to send)"
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      <footer className="chat-footer">
        <span>
          ⚡ Built with React, Electron & AI •{' '}
          <a href="https://github.com/pandeyshikhar18" target="_blank" rel="noreferrer">
            by Shikhar
          </a>
        </span>
      </footer>
    </div>
  );
};

export default ChatPane;
