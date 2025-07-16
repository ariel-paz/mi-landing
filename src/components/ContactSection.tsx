import { useState } from 'react';
import { Container, Typography, Grid, Stack, Box, TextField, Button, IconButton, Card, Alert, Snackbar } from '@mui/material';
import { Email as EmailIcon, Phone as PhoneIcon, LocationOn as LocationIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon, Send as SendIcon, Chat as ChatIcon, ContactPhone as ContactPhoneIcon, Language as LanguageIcon, MailOutline as MailOutlineIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { emailJSConfig } from '../config/emailConfig';
import useAnalytics from '../hooks/useAnalytics';

interface SocialData {
  icon: string;
  color: string;
  label: string;
  url: string;
}

const contactData = [
  { icon: 'email', label: 'Email', value: 'ariel.paz.dev@gmail.com', color: '#667eea' },
  { icon: 'phone', label: 'Teléfono', value: '+54 11 1234-5678', color: '#43e97b' },
  { icon: 'location', label: 'Ubicación', value: 'Buenos Aires, Argentina', color: '#f093fb' }
];

const socialData: SocialData[] = [
  { icon: 'linkedin', color: '#0077b5', label: 'LinkedIn', url: 'https://www.linkedin.com/in/ariel-paz/' },
  { icon: 'github', color: '#333', label: 'GitHub', url: 'https://github.com/ariel-paz1' },
  { icon: 'email', color: '#ea4335', label: 'Email', url: 'mailto:ariel.paz.dev@gmail.com' }
];

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Trackear envío de formulario
    trackEvent('form_submission', 'contact_form', 'start');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'ariel.paz.dev@gmail.com'
      };

      await emailjs.send(
        emailJSConfig.serviceID, 
        emailJSConfig.templateID, 
        templateParams, 
        emailJSConfig.publicKey
      );
      
      // Trackear éxito del formulario
      trackEvent('form_submission', 'contact_form', 'success');
      
      setNotification({
        open: true,
        message: '¡Mensaje enviado con éxito! Te responderé pronto.',
        severity: 'success'
      });

      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Error al enviar email:', error);
      
      // Trackear error del formulario
      trackEvent('form_submission', 'contact_form', 'error');
      
      setNotification({
        open: true,
        message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
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

  const handleContactMethodClick = (method: string, value: string) => {
    trackEvent('contact_interaction', 'contact_method', method);
    
    switch (method) {
      case 'email':
        window.open(`mailto:${value}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${value}`, '_blank');
        break;
      case 'location':
        window.open(`https://www.google.com/maps/search/${encodeURIComponent(value)}`, '_blank');
        break;
      default:
        break;
    }
  };

  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h3" 
            fontWeight={700} 
            gutterBottom 
            sx={{ 
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2
            }}
          >
            <ChatIcon sx={{ fontSize: '3rem', color: '#667eea' }} />
            Contacto
          </Typography>
        </Box>
        
        <Grid container spacing={6} sx={{ alignItems: 'stretch' }}>
          <Grid size={{ xs: 12, md: 6 }} component="div" sx={{ display: 'flex' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ width: '100%' }}
            >
              <Card 
                elevation={0} 
                sx={{ 
                  p: 5, 
                  height: '100%',
                  minHeight: '600px',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(135deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%)',
                  border: '2px solid rgba(102,126,234,0.1)',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 40px rgba(102,126,234,0.15)',
                    border: '2px solid rgba(102,126,234,0.2)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                  <ContactPhoneIcon sx={{ fontSize: '2rem', color: '#667eea' }} />
                  <Typography variant="h4" fontWeight={700} sx={{ color: '#667eea' }}>
                    Información de Contacto
                  </Typography>
                </Box>
                
                <Stack spacing={4}>
                  {contactData.map((contact, index) => {
                    const renderContactIcon = () => {
                      switch (contact.icon) {
                        case 'email':
                          return <EmailIcon sx={{ color: contact.color, mr: 3, fontSize: 32 }} />;
                        case 'phone':
                          return <PhoneIcon sx={{ color: contact.color, mr: 3, fontSize: 32 }} />;
                        case 'location':
                          return <LocationIcon sx={{ color: contact.color, mr: 3, fontSize: 32 }} />;
                        default:
                          return <EmailIcon sx={{ color: contact.color, mr: 3, fontSize: 32 }} />;
                      }
                    };

                    return (
                    <motion.div
                      key={contact.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <Box 
                        onClick={() => handleContactMethodClick(contact.icon, contact.value)}
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          p: 3,
                          borderRadius: 3,
                          border: '2px solid transparent',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                          '&:hover': {
                            border: `2px solid ${contact.color}`,
                            bgcolor: `${contact.color}10`,
                            transform: 'translateX(8px)'
                          }
                        }}
                      >
                        {renderContactIcon()}
                        <Box>
                          <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 600 }}>
                            {contact.label}
                          </Typography>
                          <Typography variant="h6" fontWeight={600} sx={{ color: 'text.primary' }}>
                            {contact.value}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                    );
                  })}
                </Stack>
                
                <Box sx={{ mt: 5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <LanguageIcon sx={{ fontSize: '1.5rem', color: '#667eea' }} />
                    <Typography variant="h5" fontWeight={700} sx={{ color: '#667eea' }}>
                      Redes Sociales
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={3}>
                    {socialData.map((social, index) => {
                      const renderSocialIcon = () => {
                        switch (social.icon) {
                          case 'linkedin':
                            return <LinkedInIcon sx={{ fontSize: 28 }} />;
                          case 'github':
                            return <GitHubIcon sx={{ fontSize: 28 }} />;
                          case 'email':
                            return <EmailIcon sx={{ fontSize: 28 }} />;
                          default:
                            return <EmailIcon sx={{ fontSize: 28 }} />;
                        }
                      };

                      return (
                      <motion.div
                        key={social.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconButton 
                          onClick={() => handleSocialClick(social.icon, social.url)}
                          sx={{ 
                            bgcolor: social.color,
                            color: 'white',
                            width: 56,
                            height: 56,
                            boxShadow: `0 8px 24px ${social.color}40`,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              bgcolor: social.color,
                              transform: 'translateY(-4px)',
                              boxShadow: `0 12px 32px ${social.color}60`
                            }
                          }}
                        >
                          {renderSocialIcon()}
                        </IconButton>
                      </motion.div>
                      );
                    })}
                  </Stack>
                </Box>
              </Card>
            </motion.div>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }} component="div" sx={{ display: 'flex' }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ width: '100%' }}
            >
              <Card 
                elevation={0} 
                sx={{ 
                  p: 5, 
                  height: '100%',
                  minHeight: '600px',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(135deg, rgba(67,233,123,0.05) 0%, rgba(56,249,215,0.05) 100%)',
                  border: '2px solid rgba(67,233,123,0.1)',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 40px rgba(67,233,123,0.15)',
                    border: '2px solid rgba(67,233,123,0.2)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                  <MailOutlineIcon sx={{ fontSize: '2rem', color: '#43e97b' }} />
                  <Typography variant="h4" fontWeight={700} sx={{ color: '#43e97b' }}>
                    Envíame un Mensaje
                  </Typography>
                </Box>
                
                <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Grid container spacing={3} sx={{ flexGrow: 1 }}>
                    <Grid size={{ xs: 12, sm: 6 }} component="div">
                      <TextField 
                        fullWidth
                        name="name"
                        label="Nombre" 
                        variant="outlined" 
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                            '&:hover fieldset': {
                              borderColor: '#43e97b'
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#43e97b'
                            }
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#43e97b'
                          }
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }} component="div">
                      <TextField 
                        fullWidth
                        name="email"
                        label="Email" 
                        variant="outlined" 
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                            '&:hover fieldset': {
                              borderColor: '#43e97b'
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#43e97b'
                            }
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#43e97b'
                          }
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }} component="div">
                      <TextField 
                        fullWidth
                        name="subject"
                        label="Asunto" 
                        variant="outlined" 
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                            '&:hover fieldset': {
                              borderColor: '#43e97b'
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#43e97b'
                            }
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#43e97b'
                          }
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }} component="div" sx={{ flexGrow: 1 }}>
                      <TextField 
                        fullWidth 
                        name="message"
                        label="Mensaje" 
                        variant="outlined" 
                        multiline 
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        sx={{
                          height: '100%',
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                            height: '100%',
                            '&:hover fieldset': {
                              borderColor: '#43e97b'
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#43e97b'
                            }
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#43e97b'
                          }
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }} component="div">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit"
                          variant="contained" 
                          size="large"
                          fullWidth
                          disabled={isLoading}
                          endIcon={<SendIcon />}
                          sx={{ 
                            py: 2,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            borderRadius: 3,
                            background: isLoading 
                              ? 'linear-gradient(45deg, #ccc, #999)' 
                              : 'linear-gradient(45deg, #43e97b, #38f9d7)',
                            boxShadow: '0 8px 24px rgba(67,233,123,0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: isLoading 
                                ? 'linear-gradient(45deg, #ccc, #999)' 
                                : 'linear-gradient(45deg, #38d9a9, #20e3b2)',
                              transform: isLoading ? 'none' : 'translateY(-2px)',
                              boxShadow: isLoading 
                                ? '0 8px 24px rgba(67,233,123,0.3)' 
                                : '0 12px 32px rgba(67,233,123,0.4)'
                            }
                          }}
                        >
                          {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>

      {/* Notificación de estado */}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity} 
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
