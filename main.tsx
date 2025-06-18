import React from 'react';
import { createRoot } from 'react-dom/client';
import ChatPane from './components/ChatPane';
import './styles.css';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(<ChatPane />);
} else {
  console.error("Root element not found");
}
