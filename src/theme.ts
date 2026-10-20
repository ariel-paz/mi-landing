import { createTheme } from '@mui/material/styles';

export const techTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#38BDF8', // Cyan / Sky Cloud
      light: '#7DD3FC',
      dark: '#0284C7',
      contrastText: '#04101E',
    },
    secondary: {
      main: '#818CF8', // AI Indigo / Gemini violet
      light: '#A5B4FC',
      dark: '#4F46E5',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#10B981', // Emerald
    },
    background: {
      default: '#070A13', // Deep Obsidian
      paper: '#0F172A',   // Slate Dark
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 22px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
  },
});
