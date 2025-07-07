import { Container, Typography, Stack, Button, IconButton, Avatar, Paper, Box, Grid } from '@mui/material';
import { Download as DownloadIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon, Email as EmailIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
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
          py: 0,
          mb: 0,
          borderRadius: 0
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }} component="div">
              <Typography 
                variant="h3" 
                fontWeight={700} 
                gutterBottom
                sx={{ mb: 2 }}
              >
                ¡Hola¡ 👋 Soy <span style={{ color: '#FFD700' }}>Ari</span>
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ mb: 3, opacity: 0.9, fontWeight: 300 }}
              >
                Full Stack Developer
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ mb: 4, opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.6 }}
              >
                Apasionado por crear experiencias digitales únicas y funcionales. 
                Especializado en React, TypeScript y tecnologías modernas.
              </Typography>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2}
                sx={{ mb: 4 }}
              >
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={{ 
                    bgcolor: 'white', 
                    color: 'primary.main',
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      bgcolor: 'grey.100'
                    }
                  }}
                  endIcon={<DownloadIcon />}
                >
                  Descargar CV
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    borderColor: 'white', 
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                  onClick={onContactClick}
                >
                  Contactar
                </Button>
              </Stack>
              <Stack direction="row" spacing={2}>
                <IconButton 
                  sx={{ color: 'white' }} 
                  onClick={() => window.open('https://www.linkedin.com/in/ariel-paz', '_blank')}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton sx={{ color: 'white' }} onClick={() => window.open('https://github.com/ariel-paz1', '_blank')}>
                  <GitHubIcon />
                </IconButton>
                <IconButton sx={{ color: 'white' }} onClick={() => window.open('mailto:ariel.paz.dev@gmail.com')}>
                  <EmailIcon />
                </IconButton>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} component="div">
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  src="1649716700283.jpg"
                  sx={{ 
                    width: { xs: 150, md: 200 }, 
                    height: { xs: 150, md: 200 }, 
                    mx: 'auto',
                    border: '4px solid white',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </motion.div>
  );
}
