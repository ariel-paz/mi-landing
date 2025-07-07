import { Container, Paper, Typography, Box, Card, Grid } from '@mui/material';
import { Computer as ComputerIcon, Business as BusinessIcon, School as SchoolIcon } from '@mui/icons-material';

export default function AboutSection() {
  return (
    <Container maxWidth="lg">
      <Typography 
        variant="h3" 
        fontWeight={700} 
        gutterBottom 
        textAlign="center"
        sx={{ mb: 6 }}
      >
        Sobre Mí
      </Typography>
      <Grid container spacing={6}>
        <Grid component="div">
          <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Mi Historia
            </Typography>
            <Typography paragraph color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Me egresé de una escuela técnica en programación, estudié Ingeniería en Sistemas en la UTN y actualmente estoy cursando la Licenciatura en Informática en la UNAHUR. Siempre busco formas de seguir creciendo y ampliando mis conocimientos.
            </Typography>
            <Typography paragraph color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Además de lo académico, realicé cursos en desarrollo Mobile y en el stack MERN (MongoDB, Express, React, Node.js) con JavaScript. Esto me dio una visión más completa del desarrollo web y móvil, permitiéndome trabajar en proyectos muy interesantes.
            </Typography>
            <Typography paragraph color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Trabajé durante 3 años en Chat-tonic diseñando chatbots y entrenándolos con IA.
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Actualmente formo parte de Santander Tecnología, en el área de Inversiones, donde utilizo tecnologías como Node.js, Nest y TypeScript para crear soluciones eficientes y escalables.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" fontWeight={600} textAlign="center" gutterBottom sx={{ mb: 4 }}>
          Áreas de Especialización
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }} component="div">
            <Card className="card-hover" sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <ComputerIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Frontend Development
              </Typography>
              <Typography color="text.secondary">
                React, TypeScript, Material-UI, responsive design
              </Typography>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }} component="div">
            <Card className="card-hover" sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <BusinessIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Backend Development
              </Typography>
              <Typography color="text.secondary">
                Node.js, Express, APIs REST, bases de datos
              </Typography>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }} component="div">
            <Card className="card-hover" sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <SchoolIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                UI/UX Design
              </Typography>
              <Typography color="text.secondary">
                Diseño centrado en el usuario, prototipos, usabilidad
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
