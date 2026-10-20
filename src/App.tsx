import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Button, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Container, 
  Stack, 
  useTheme, 
  useMediaQuery 
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Close as CloseIcon, 
  Terminal as TerminalIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon
} from '@mui/icons-material';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { projects, experience, navigationItems, personalInfo, cvConfig } from './config';
import useAnalytics from './hooks/useAnalytics';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    trackEvent('app', 'page_load', 'portfolio_cloud_ai_landing');
  }, [trackEvent]);

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavClick = (id: string) => {
    trackEvent('navigation', 'nav_click', id);
    setDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box className="bg-ambient" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Glassmorphic Navigation Bar */}
      <AppBar 
        position="fixed" 
        elevation={0} 
        className="glass-navbar"
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1, display: 'flex', justifyContent: 'space-between' }}>
            
            {/* Logo / Brand */}
            <Box 
              component="a" 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1.2, 
                textDecoration: 'none', 
                cursor: 'pointer' 
              }}
            >
              <Box
                sx={{
                  p: 0.8,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(129, 140, 248, 0.2))',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <TerminalIcon sx={{ color: '#38BDF8', fontSize: 20 }} />
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 800, 
                  letterSpacing: -0.5,
                  fontSize: '1.2rem',
                  color: '#F8FAFC'
                }}
              >
                Ariel Paz<Box component="span" sx={{ color: '#38BDF8' }}>.dev</Box>
              </Typography>
            </Box>

            {/* Desktop Navigation Links */}
            {!isMobile ? (
              <Stack direction="row" spacing={1} alignItems="center">
                {navigationItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <Button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      sx={{
                        color: isActive ? '#38BDF8' : '#94A3B8',
                        fontWeight: isActive ? 700 : 500,
                        fontSize: '0.9rem',
                        px: 1.8,
                        py: 0.8,
                        borderRadius: 2,
                        position: 'relative',
                        transition: 'all 0.2s ease',
                        bgcolor: isActive ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
                        '&:hover': {
                          color: '#F8FAFC',
                          bgcolor: 'rgba(255, 255, 255, 0.05)'
                        }
                      }}
                    >
                      {item.label}
                    </Button>
                  );
                })}

                <Button
                  variant="outlined"
                  size="small"
                  component="a"
                  href={cvConfig.downloadUrl}
                  target="_blank"
                  download={cvConfig.fileName}
                  sx={{
                    ml: 1.5,
                    borderColor: 'rgba(56, 189, 248, 0.4)',
                    color: '#38BDF8',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    borderRadius: 2,
                    px: 2,
                    '&:hover': {
                      borderColor: '#38BDF8',
                      bgcolor: 'rgba(56, 189, 248, 0.1)'
                    }
                  }}
                >
                  CV PDF
                </Button>
              </Stack>
            ) : (
              <IconButton
                aria-label="Abrir menú de navegación"
                onClick={toggleDrawer}
                sx={{
                  color: '#F8FAFC',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 2
                }}
              >
                <MenuIcon />
              </IconButton>
            )}

          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: 290,
            bgcolor: '#070A13',
            borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
            p: 3
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h6" fontWeight={800} sx={{ color: '#F8FAFC' }}>
            Navegación
          </Typography>
          <IconButton onClick={toggleDrawer} sx={{ color: '#94A3B8' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ p: 0 }}>
          {navigationItems.map((item) => (
            <ListItem
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              sx={{
                borderRadius: 2,
                mb: 1,
                cursor: 'pointer',
                bgcolor: activeSection === item.id ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.05)' }
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: activeSection === item.id ? 700 : 500,
                  color: activeSection === item.id ? '#38BDF8' : '#CBD5E1'
                }}
              />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <Button
            variant="contained"
            fullWidth
            className="btn-tech-primary"
            component="a"
            href={cvConfig.downloadUrl}
            target="_blank"
            download={cvConfig.fileName}
            sx={{ py: 1.4, mb: 2 }}
          >
            Descargar CV PDF
          </Button>

          <Stack direction="row" spacing={1} justifyContent="center">
            <IconButton href={personalInfo.linkedin} target="_blank" sx={{ color: '#94A3B8' }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href={personalInfo.github} target="_blank" sx={{ color: '#94A3B8' }}>
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Box>
      </Drawer>

      {/* Main Single-Page Content Flow */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <HeroSection onContactClick={() => handleNavClick('contact')} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </Box>

      {/* Modern Engineering Footer */}
      <Box 
        component="footer" 
        sx={{ 
          py: 6, 
          bgcolor: 'rgba(7, 10, 19, 0.95)', 
          borderTop: '1px solid rgba(255, 255, 255, 0.06)' 
        }}
      >
        <Container maxWidth="lg">
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            justifyContent="space-between" 
            alignItems="center" 
            spacing={3}
          >
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography variant="body2" fontWeight={700} sx={{ color: '#F8FAFC' }}>
                Ariel Paz • Cloud & AI Software Engineer
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748B' }}>
                Desarrollado con React 19, TypeScript, Material UI & Framer Motion.
              </Typography>
            </Box>

            <Stack direction="row" spacing={2}>
              <IconButton 
                href={personalInfo.linkedin} 
                target="_blank" 
                aria-label="LinkedIn"
                sx={{ color: '#94A3B8', '&:hover': { color: '#38BDF8' } }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                href={personalInfo.github} 
                target="_blank" 
                aria-label="GitHub"
                sx={{ color: '#94A3B8', '&:hover': { color: '#38BDF8' } }}
              >
                <GitHubIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

    </Box>
  );
}

export default App;
