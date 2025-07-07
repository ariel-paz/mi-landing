import { Container, Typography, Grid, Paper, Stack, Box, TextField, Button, IconButton } from '@mui/material';
import { Email as EmailIcon, Phone as PhoneIcon, LocationOn as LocationIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant="h3" 
          fontWeight={700} 
          gutterBottom 
          textAlign="center"
          sx={{ mb: 6 }}
        >
          Contacto
        </Typography>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }} component="div">
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mb: 3 }}>
                Información de Contacto
              </Typography>
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ color: 'primary.main', mr: 2, fontSize: 28 }} />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      ariel.paz.dev@gmail.com
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon sx={{ color: 'primary.main', mr: 2, fontSize: 28 }} />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Teléfono
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      +54 11 3504-0874
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationIcon sx={{ color: 'primary.main', mr: 2, fontSize: 28 }} />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Ubicación
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      Buenos Aires, Argentina
                    </Typography>
                  </Box>
                </Box>
              </Stack>
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Redes Sociales
                </Typography>
                <Stack direction="row" spacing={2}>
                  <IconButton 
                    sx={{ 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      '&:hover': { bgcolor: 'primary.dark' }
                    }}
                    onClick={() => window.open('https://www.linkedin.com/in/ariel-paz', '_blank')}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      bgcolor: 'grey.800', 
                      color: 'white',
                      '&:hover': { bgcolor: 'grey.900' }
                    }}
                    onClick={() => window.open('https://github.com/ariel-paz1', '_blank')}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      bgcolor: 'error.main', 
                      color: 'white',
                      '&:hover': { bgcolor: 'error.dark' }
                    }}
                    onClick={() => window.open('mailto:ariel.paz.dev@gmail.com')}
                  >
                    <EmailIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} component="div">
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mb: 3 }}>
                Envíame un Mensaje
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }} component="div">
                    <TextField 
                      fullWidth
                      label="Nombre" 
                      variant="outlined" 
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }} component="div">
                    <TextField 
                      fullWidth
                      label="Email" 
                      variant="outlined" 
                      type="email"
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }} component="div">
                    <TextField 
                      fullWidth
                      label="Asunto" 
                      variant="outlined" 
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }} component="div">
                    <TextField 
                      fullWidth 
                      label="Mensaje" 
                      variant="outlined" 
                      multiline 
                      rows={4}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }} component="div">
                    <Button 
                      variant="contained" 
                      size="large"
                      fullWidth
                      endIcon={<EmailIcon />}
                      sx={{ py: 1.5 }}
                    >
                      Enviar Mensaje
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
}
