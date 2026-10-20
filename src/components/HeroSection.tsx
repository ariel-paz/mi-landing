import { Container, Typography, Stack, Button, IconButton, Avatar, Box, Chip } from '@mui/material';
import { 
  Download as DownloadIcon, 
  LinkedIn as LinkedInIcon, 
  GitHub as GitHubIcon, 
  Email as EmailIcon,
  AutoAwesome as SparklesIcon,
  CloudQueue as CloudIcon,
  Terminal as TerminalIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { cvConfig, personalInfo } from '../config';
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
    <Box
      id="hero"
      component="header"
      sx={{
        position: 'relative',
        minHeight: { xs: '92vh', md: '94vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: { xs: 12, md: 10 },
        pb: { xs: 8, md: 8 },
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          
          {/* Current Role Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box className="status-pill">
              <span className="status-dot" />
              <span>{personalInfo.currentRoleBadge}</span>
            </Box>
          </motion.div>

          {/* Profile Picture with Tech Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
              <Box
                sx={{
                  position: 'absolute',
                  inset: -6,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #38BDF8, #818CF8, #34D399)',
                  filter: 'blur(8px)',
                  opacity: 0.7
                }}
              />
              <Avatar
                src="1649716700283.jpg"
                alt="Ariel Paz"
                sx={{
                  width: { xs: 125, md: 160 },
                  height: { xs: 125, md: 160 },
                  border: '3px solid rgba(255, 255, 255, 0.9)',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)'
                }}
              />
            </Box>
          </motion.div>

          {/* Main Title & Value Proposition */}
          <Box sx={{ maxWidth: 900 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3.3rem', md: '4.2rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 2,
                  letterSpacing: '-0.03em'
                }}
              >
                Hola, soy <span className="text-gradient-tech">Ariel Paz</span>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.6rem', md: '1.9rem' },
                  fontWeight: 600,
                  color: '#94A3B8',
                  mb: 3
                }}
              >
                Software Engineer{' '}
                <Box component="span" sx={{ color: '#38BDF8' }}>
                  | Node • Nest • TS • Java • React
                </Box>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.18rem' },
                  color: '#CBD5E1',
                  lineHeight: 1.7,
                  maxWidth: '740px',
                  mx: 'auto',
                  mb: 4
                }}
              >
                Desarrollo APIs y arquitecturas de software en <strong>Santander Tecnología</strong> (área de Acciones, Bonos y Custodia), 
                enfocado en migraciones de aplicaciones legacy hacia nuevos lenguajes, nuevos desarrollos en NestJS/React y soluciones con Cloud e Inteligencia Artificial.
              </Typography>
            </motion.div>
          </Box>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              <Button
                variant="contained"
                size="large"
                className="btn-tech-primary"
                component="a"
                href="#projects"
                startIcon={<TerminalIcon />}
                sx={{ px: 4, py: 1.6, fontSize: '1rem' }}
              >
                Ver Proyectos & Arquitectura
              </Button>

              <Button
                variant="outlined"
                size="large"
                component="a"
                href={cvConfig.downloadUrl}
                target="_blank"
                download={cvConfig.fileName}
                startIcon={<DownloadIcon />}
                onClick={handleDownloadCV}
                sx={{
                  px: 4,
                  py: 1.6,
                  fontSize: '1rem',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#F8FAFC',
                  backdropFilter: 'blur(10px)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  '&:hover': {
                    borderColor: '#38BDF8',
                    color: '#38BDF8',
                    background: 'rgba(56, 189, 248, 0.08)'
                  }
                }}
              >
                Descargar CV (PDF)
              </Button>

              <Button
                variant="text"
                size="large"
                onClick={handleContactClick}
                startIcon={<EmailIcon />}
                sx={{
                  color: '#94A3B8',
                  px: 3,
                  '&:hover': { color: '#38BDF8' }
                }}
              >
                Contáctame
              </Button>
            </Stack>
          </motion.div>

          {/* Social Links & Quick Stack Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <IconButton
                aria-label="LinkedIn Profile"
                onClick={() => handleSocialClick('linkedin', personalInfo.linkedin)}
                sx={{
                  color: '#94A3B8',
                  bgcolor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  '&:hover': { color: '#38BDF8', bgcolor: 'rgba(56, 189, 248, 0.1)' }
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="GitHub Profile"
                onClick={() => handleSocialClick('github', personalInfo.github)}
                sx={{
                  color: '#94A3B8',
                  bgcolor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  '&:hover': { color: '#38BDF8', bgcolor: 'rgba(56, 189, 248, 0.1)' }
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                aria-label="Send Email"
                onClick={() => handleSocialClick('email', `mailto:${personalInfo.email}`)}
                sx={{
                  color: '#94A3B8',
                  bgcolor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  '&:hover': { color: '#38BDF8', bgcolor: 'rgba(56, 189, 248, 0.1)' }
                }}
              >
                <EmailIcon />
              </IconButton>
            </Stack>
          </motion.div>

          {/* Tech Highlights Pills Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
              gap={1.5}
              sx={{ pt: 3 }}
            >
              {[
                { label: 'Node.js & NestJS', icon: null },
                { label: 'TypeScript & Java', icon: null },
                { label: 'React (BFF)', icon: null },
                { label: 'APIs REST & Migración Legacy', icon: <TerminalIcon sx={{ fontSize: 16 }} /> },
                { label: 'Oracle & MongoDB', icon: null },
                { label: 'Redis Cache', icon: null },
                { label: 'SonarQube', icon: null },
                { label: 'Gemini API & Chatbots', icon: <SparklesIcon sx={{ fontSize: 16, color: '#A5B4FC' }} /> },
                { label: 'Google Cloud (GCP)', icon: <CloudIcon sx={{ fontSize: 16 }} /> }
              ].map((tech) => (
                <Chip
                  key={tech.label}
                  icon={tech.icon || undefined}
                  label={tech.label}
                  size="small"
                  className="code-pill"
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.04)',
                    color: '#94A3B8',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    py: 1.8,
                    px: 1,
                    '& .MuiChip-label': { px: 1.5 },
                    '&:hover': {
                      borderColor: 'rgba(56, 189, 248, 0.4)',
                      color: '#F8FAFC'
                    }
                  }}
                />
              ))}
            </Stack>
          </motion.div>

        </Stack>
      </Container>
    </Box>
  );
}
