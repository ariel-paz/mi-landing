import { Container, Card, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { value: '3+', label: 'Años de Experiencia', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', icon: '🚀' },
    { value: '25+', label: 'Proyectos Completados', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', icon: '💼' },
    { value: '15+', label: 'Tecnologías Dominadas', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', icon: '⚡' },
    { value: '100%', label: 'Satisfacción del Cliente', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', icon: '⭐' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card 
                  className="card-hover" 
                  sx={{ 
                    textAlign: 'center', 
                    p: 4, 
                    background: stat.gradient,
                    color: 'white', 
                    borderRadius: 4,
                    border: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(255,255,255,0.1)',
                      transform: 'translateX(-100%)',
                      transition: 'transform 0.6s',
                    },
                    '&:hover::before': {
                      transform: 'translateX(100%)',
                    }
                  }}
                >
                  <Typography variant="h2" sx={{ fontSize: '3rem', mb: 1 }}>
                    {stat.icon}
                  </Typography>
                  <Typography variant="h3" fontWeight={800} sx={{ mb: 1, fontSize: '2.5rem' }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500, opacity: 0.9 }}>
                    {stat.label}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}
