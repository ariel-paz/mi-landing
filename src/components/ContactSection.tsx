import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Stack, 
  Box, 
  TextField, 
  Button, 
  IconButton, 
  Alert, 
  Snackbar 
} from '@mui/material';
import { 
  Email as EmailIcon, 
  LocationOn as LocationIcon, 
  LinkedIn as LinkedInIcon, 
  GitHub as GitHubIcon, 
  Send as SendIcon, 
  Chat as ChatIcon,
  CheckCircleOutline as CheckIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { personalInfo, emailJSConfig } from '../config';
import useAnalytics from '../hooks/useAnalytics';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });
  const { trackEvent } = useAnalytics();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    trackEvent('form_submission', 'contact_form', 'start');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: personalInfo.email
      };

      await emailjs.send(
        emailJSConfig.serviceID, 
        emailJSConfig.templateID, 
        templateParams, 
        emailJSConfig.publicKey
      );
      
      trackEvent('form_submission', 'contact_form', 'success');
      
      setNotification({
        open: true,
        message: '¡Mensaje recibido! Te responderé en menos de 24 horas.',
        severity: 'success'
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Error al enviar email:', error);
      trackEvent('form_submission', 'contact_form', 'error');
      
      setNotification({
        open: true,
        message: 'No se pudo enviar el mensaje. Por favor escríbeme directo a ' + personalInfo.email,
        severity: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialClick = (platform: string, url: string) => {
    trackEvent('social_click', 'contact_section', platform);
    window.open(url, '_blank');
  };

  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  return (
    <Box id="contact" component="section" className="section-padding">
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: '#34D399',
                fontWeight: 700,
                letterSpacing: 2,
                fontSize: '0.85rem'
              }}
            >
              INICIEMOS CONVERSACIÓN
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '2.8rem' },
                mt: 1,
                mb: 2
              }}
            >
              ¿Tienes un Proyecto o Desafío en{' '}
              <Box component="span" className="text-gradient-tech">
                Cloud o Inteligencia Artificial?
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#94A3B8',
                maxWidth: 680,
                mx: 'auto',
                fontSize: '1.05rem',
                lineHeight: 1.7
              }}
            >
              Disponible para colaborar en arquitecturas escalables, integración de modelos de lenguaje (LLMs) y roles de ingeniería senior.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          
          {/* Direct Contact Info Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ height: '100%' }}
            >
              <Box
                className="glass-panel"
                sx={{
                  p: { xs: 3.5, md: 5 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <ChatIcon sx={{ color: '#38BDF8', fontSize: 28 }} />
                    <Typography variant="h5" fontWeight={700} sx={{ color: '#F8FAFC' }}>
                      Canales Directos
                    </Typography>
                  </Box>

                  <Typography variant="body2" sx={{ color: '#CBD5E1', lineHeight: 1.7, mb: 4 }}>
                    Ya sea para evaluar mi perfil técnico, consultar una propuesta o discutir sobre arquitecturas con GCP y Gemini, puedes contactarme directamente:
                  </Typography>

                  <Stack spacing={2.5} sx={{ mb: 4 }}>
                    <Box
                      component="a"
                      href={`mailto:${personalInfo.email}`}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        borderRadius: 2.5,
                        bgcolor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        textDecoration: 'none',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          borderColor: '#38BDF8',
                          bgcolor: 'rgba(56, 189, 248, 0.08)'
                        }
                      }}
                    >
                      <EmailIcon sx={{ color: '#38BDF8', fontSize: 24 }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: '#94A3B8', fontWeight: 600 }}>
                          Correo Electrónico
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#F8FAFC', fontWeight: 600 }}>
                          {personalInfo.email}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        borderRadius: 2.5,
                        bgcolor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      <LocationIcon sx={{ color: '#34D399', fontSize: 24 }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: '#94A3B8', fontWeight: 600 }}>
                          Ubicación
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#F8FAFC', fontWeight: 600 }}>
                          {personalInfo.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>

                {/* Social Connect Box */}
                <Box sx={{ pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <Typography variant="subtitle2" sx={{ color: '#94A3B8', mb: 2, fontWeight: 600 }}>
                    Perfiles Profesionales
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <IconButton
                      aria-label="LinkedIn"
                      onClick={() => handleSocialClick('linkedin', personalInfo.linkedin)}
                      sx={{
                        color: '#F8FAFC',
                        bgcolor: 'rgba(56, 189, 248, 0.1)',
                        border: '1px solid rgba(56, 189, 248, 0.3)',
                        '&:hover': {
                          bgcolor: '#38BDF8',
                          color: '#04101E',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      aria-label="GitHub"
                      onClick={() => handleSocialClick('github', personalInfo.github)}
                      sx={{
                        color: '#F8FAFC',
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Stack>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ height: '100%' }}
            >
              <Box
                className="glass-panel"
                sx={{
                  p: { xs: 3.5, md: 5 },
                  height: '100%'
                }}
              >
                <Typography variant="h5" fontWeight={700} sx={{ color: '#F8FAFC', mb: 1 }}>
                  Envíame un Mensaje
                </Typography>
                <Typography variant="body2" sx={{ color: '#94A3B8', mb: 4 }}>
                  Completa el formulario y se enviará directo a mi casilla de correo.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        name="name"
                        label="Nombre Completo"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            bgcolor: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: 2.5
                          }
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        name="email"
                        label="Correo Electrónico"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            bgcolor: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: 2.5
                          }
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        name="subject"
                        label="Asunto / Oportunidad"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            bgcolor: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: 2.5
                          }
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        name="message"
                        label="Mensaje"
                        multiline
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            bgcolor: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: 2.5
                          }
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={isLoading}
                        className="btn-tech-primary"
                        endIcon={<SendIcon sx={{ fontSize: 18 }} />}
                        sx={{ py: 1.8, fontSize: '1rem', mt: 1 }}
                      >
                        {isLoading ? 'Enviando Mensaje...' : 'Enviar Mensaje Directo'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </motion.div>
          </Grid>

        </Grid>
      </Container>

      {/* Snackbar feedback */}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          icon={<CheckIcon fontSize="inherit" />}
          sx={{
            bgcolor: notification.severity === 'success' ? '#0F172A' : '#450A0A',
            color: '#F8FAFC',
            border: `1px solid ${notification.severity === 'success' ? '#10B981' : '#EF4444'}`,
            borderRadius: 2
          }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
