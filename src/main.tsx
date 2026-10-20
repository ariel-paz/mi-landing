import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import './App.css';
import App from './App.tsx';
import { techTheme } from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={techTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
