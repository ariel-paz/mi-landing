import { useState } from 'react';
import { 
  Box, 
  Typography, 
  AppBar,
  Toolbar,
  IconButton,
  Tabs,
  Tab,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useTheme,
  useMediaQuery} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  Code as CodeIcon,
  Email as EmailIcon
} from '@mui/icons-material';
import './App.css';
import HeroSection from './components/HeroSection';
// import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import TabPanel from './components/TabPanel';
import { projects, experience, navigationItems } from './config';

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  function getIcon(icon: string) {
    switch (icon) {
      case 'home': return <HomeIcon />;
      case 'person': return <PersonIcon />;
      case 'work': return <WorkIcon />;
      case 'code': return <CodeIcon />;
      case 'email': return <EmailIcon />;
      default: return undefined;
    }
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Navigation Bar */}
      <AppBar 
        position="fixed" 
        elevation={0} 
        sx={{ 
          bgcolor: 'rgba(255,255,255,0.95)', 
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease'
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              color: 'text.primary', 
              fontWeight: 800,
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.5rem'
            }}
          >
            Portfolio
          </Typography>
          
          {!isMobile ? (
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange}
              sx={{ 
                '& .MuiTab-root': { 
                  color: 'text.primary',
                  fontWeight: 600,
                  borderRadius: 2,
                  margin: '0 4px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(102,126,234,0.1)',
                    transform: 'translateY(-2px)'
                  },
                  '&.Mui-selected': {
                    color: '#667eea',
                    bgcolor: 'rgba(102,126,234,0.1)'
                  }
                },
                '& .MuiTabs-indicator': {
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  height: 3,
                  borderRadius: 2
                }
              }}
            >
              {navigationItems.map((item) => (
                <Tab 
                  key={item.value}
                  icon={getIcon(item.icon)}
                  label={item.label} 
                  iconPosition="start"
                  sx={{ 
                    minHeight: 48, 
                    textTransform: 'none',
                    fontSize: '0.95rem'
                  }}
                />
              ))}
            </Tabs>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{ 
                color: 'text.primary',
                bgcolor: 'rgba(102,126,234,0.1)',
                '&:hover': {
                  bgcolor: 'rgba(102,126,234,0.2)',
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer 
        anchor="right" 
        open={drawerOpen} 
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            background: 'linear-gradient(135deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%)',
            backdropFilter: 'blur(20px)'
          }
        }}
      >
        <Box sx={{ width: 280, pt: 3, px: 2 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 3, 
              textAlign: 'center',
              fontWeight: 700,
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            ✨ Navegación
          </Typography>
          <List>
            {navigationItems.map((item) => (
              <ListItem 
                key={item.value}
                component="button"
                onClick={() => {
                  setTabValue(item.value);
                  setDrawerOpen(false);
                }}
                sx={{ 
                  width: '100%', 
                  textAlign: 'left', 
                  border: 'none', 
                  background: 'none', 
                  p: 2,
                  borderRadius: 2,
                  mb: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(102,126,234,0.1)',
                    transform: 'translateX(8px)'
                  }
                }}
              >
                <ListItemIcon sx={{ color: '#667eea' }}>
                  {getIcon(item.icon)}
                </ListItemIcon>
                <ListItemText 
                  primary={item.label} 
                  sx={{ 
                    '& .MuiListItemText-primary': {
                      fontWeight: 600
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ pt: { xs: 7, md: 8 }, '& .MuiBox-root': { padding: 0 } }}>
        {/* Hero Section - Tab 0 */}
        <TabPanel value={tabValue} index={0}>
          <HeroSection onContactClick={() => setTabValue(4)} />
          {/* <StatsSection /> */}
        </TabPanel>

        {/* About Section - Tab 1 */}
        <TabPanel value={tabValue} index={1}>
          <AboutSection />
        </TabPanel>

        {/* Experience Section - Tab 2 */}
        <TabPanel value={tabValue} index={2}>
          <ExperienceSection experience={experience} />
        </TabPanel>

        {/* Projects Section - Tab 3 */}
        <TabPanel value={tabValue} index={3}>
          <ProjectsSection projects={projects} />
        </TabPanel>

        {/* Contact Section - Tab 4 */}
        <TabPanel value={tabValue} index={4}>
          <ContactSection />
        </TabPanel>
      </Box>
    </Box>
  );
}

export default App;
