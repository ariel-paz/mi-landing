import { Container, Card, Typography, Grid } from '@mui/material';
// TODO remove: no se usa
export default function StatsSection() {
  return (
    <Container maxWidth="lg" sx={{ mb: 8 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }} component="div">
          <Card className="card-hover" sx={{ textAlign: 'center', p: 3, background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white', boxShadow: '0 4px 24px rgba(240,147,251,0.15)' }}>
            <Typography variant="h3" fontWeight={700} color="#FFD700">
              3+
            </Typography>
            <Typography variant="body2" color="white">
              Años de Experiencia
            </Typography>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }} component="div">
          <Card className="card-hover" sx={{ textAlign: 'center', p: 3, background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', color: 'white', boxShadow: '0 4px 24px rgba(67,233,123,0.15)' }}>
            <Typography variant="h3" fontWeight={700} color="#FFD700">
              25+
            </Typography>
            <Typography variant="body2" color="white">
              Proyectos Completados
            </Typography>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }} component="div">
          <Card className="card-hover" sx={{ textAlign: 'center', p: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', boxShadow: '0 4px 24px rgba(102,126,234,0.15)' }}>
            <Typography variant="h3" fontWeight={700} color="#FFD700">
              15+
            </Typography>
            <Typography variant="body2" color="white">
              Tecnologías Dominadas
            </Typography>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }} component="div">
          <Card className="card-hover" sx={{ textAlign: 'center', p: 3, background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)', color: 'white', boxShadow: '0 4px 24px rgba(247,151,30,0.15)' }}>
            <Typography variant="h3" fontWeight={700} color="#764ba2">
              100%
            </Typography>
            <Typography variant="body2" color="white">
              Satisfacción del Cliente
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
