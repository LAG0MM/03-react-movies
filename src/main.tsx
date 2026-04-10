import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App.tsx';

// Normalization of styles
import 'modern-normalize';

// Global styles
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);