import { Container, Typography, Stack, Button, IconButton, Avatar, Paper, Box, Grid } from '@mui/material';
import { Download as DownloadIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon, Email as EmailIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { cvConfig } from '../config';
import useAnalytics from '../hooks/useAnalytics';

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const { trackEvent } = useAnalytics();

  const handleDownloadCV = () => {
    trackEvent('download', 'cv', 'hero_section');
  };

  const handleContactClick = () => {
    trackEvent('navigation', 'contact_click', 'hero_section');
    onContactClick();
  };

  const handleSocialClick = (platform: string, url: string) => {
    trackEvent('social_click', 'external_link', platform);
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Paper 
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          minHeight: { xs: 'calc(100vh - 56px)', md: 'calc(100vh - 64px)' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 80%, rgba(120,119,198,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center" sx={{ 
            flexDirection: { xs: 'column-reverse', md: 'row' }, 
            padding: { xs: 3, md: 4 },
          }}>
            <Grid size={{ xs: 12, md: 8 }} component="div">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <Typography 
                  variant="h2" 
                  fontWeight={800} 
                  gutterBottom
                  sx={{ 
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
                  }}
                >
                  ¡Hola! Soy <span style={{ color: '#FFD700' }}>Ari</span>
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 3, 
                    opacity: 0.95, 
                    fontWeight: 400,
                    fontSize: { xs: '1.5rem', md: '2rem' }
                  }}
                >
                  Full Stack Developer
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 4, 
                    opacity: 0.85, 
                    fontSize: '1.2rem', 
                    lineHeight: 1.7,
                    maxWidth: '600px'
                  }}
                >
                  Apasionado por crear experiencias digitales únicas y funcionales. 
                  Especializado en React, TypeScript y tecnologías modernas que transforman ideas en realidad.
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={3}
                  sx={{ mb: 5 }}
                >
                  <Button 
                    variant="contained" 
                    size="large" 
                    component="a"
                    href={cvConfig.downloadUrl}
                    target="_blank"
                    download={cvConfig.fileName}
                    sx={{ 
                      bgcolor: 'white', 
                      color: 'primary.main',
                      px: 5,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 3,
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                      background: 'linear-gradient(45deg, #ffffff, #f8f9fa)',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
                        bgcolor: 'grey.50'
                      }
                    }}
                    endIcon={<DownloadIcon />}
                    onClick={handleDownloadCV}
                  >
                    Descargar CV
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large"
                    sx={{ 
                      borderColor: 'white', 
                      color: 'white',
                      px: 5,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 3,
                      borderWidth: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#FFD700',
                        color: '#FFD700',
                        bgcolor: 'rgba(255,215,0,0.1)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(255,215,0,0.3)'
                      }
                    }}
                    onClick={handleContactClick}
                  >
                    Contactar
                  </Button>
                </Stack>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Stack direction="row" spacing={2}>
                  <IconButton 
                    sx={{ 
                      color: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.2)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                      }
                    }} 
                    onClick={() => handleSocialClick('linkedin', 'https://www.linkedin.com/in/ariel-paz/')}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      color: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.2)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                      }
                    }}
                    onClick={() => handleSocialClick('github', 'https://github.com/ariel-paz1')}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      color: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.2)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                      }
                    }}
                    onClick={() => handleSocialClick('email', 'mailto:ariel.paz.dev@gmail.com')}
                  >
                    <EmailIcon />
                  </IconButton>
                </Stack>
              </motion.div>
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }} component="div">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Box sx={{ 
                  textAlign: 'center',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: 180, md: 230 },
                    height: { xs: 180, md: 230 },
                    background: 'linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B)',
                    borderRadius: '50%',
                    zIndex: 0,
                    animation: 'pulse 3s ease-in-out infinite'
                  },
                  '@keyframes pulse': {
                    '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.7 },
                    '50%': { transform: 'translate(-50%, -50%) scale(1.05)', opacity: 0.5 },
                    '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.7 }
                  }
                }}>
                  <Avatar
                    src="1649716700283.jpg"
                    sx={{ 
                      width: { xs: 160, md: 210 }, 
                      height: { xs: 160, md: 210 }, 
                      mx: 'auto',
                      border: '6px solid white',
                      boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
                      position: 'relative',
                      zIndex: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
                      }
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </motion.div>
  );
}
