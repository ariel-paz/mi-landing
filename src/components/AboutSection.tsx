import { Container, Paper, Typography, Box, LinearProgress, Card, Grid, Chip } from '@mui/material';
import { Computer as ComputerIcon, CloudOutlined as CloudIcon, PhoneAndroid as MobileIcon, MenuBook as BookIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface AboutSectionProps {
  skills?: Skill[];
}

export default function AboutSection({ skills = [] }: AboutSectionProps) {
  const defaultSkills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Material UI', level: 88 },
    { name: 'Git', level: 82 },
    { name: 'MongoDB', level: 70 },
    { name: 'PostgreSQL', level: 75 }
  ];

  const skillsToShow = skills.length > 0 ? skills : defaultSkills;

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant="h3" 
          fontWeight={700} 
          gutterBottom 
          textAlign="center"
          sx={{ 
            mb: 8,
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Sobre Mí
        </Typography>
        
        <Grid container spacing={6}>
          <Grid size={{ xs: 12 }} component="div">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 5, 
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)',
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <BookIcon sx={{ fontSize: '2rem', color: '#667eea' }} />
                  <Typography variant="h4" fontWeight={700} sx={{ color: '#667eea' }}>
                    Mi Historia
                  </Typography>
                </Box>
                <Typography paragraph color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                  Me egresé de una escuela técnica en programación, estudié Ingeniería en Sistemas en la UTN y actualmente estoy cursando la Licenciatura en Informática en la UNAHUR. Siempre busco formas de seguir creciendo y ampliando mis conocimientos.
                </Typography>
                <Typography paragraph color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                  Además de lo académico, realicé cursos en desarrollo Mobile y en el stack MERN (MongoDB, Express, React, Node.js) con JavaScript. Esto me dio una visión más completa del desarrollo web y móvil, permitiéndome trabajar en proyectos muy interesantes.
                </Typography>
                <Typography paragraph color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                  Trabajé durante 3 años en Chat-tonic diseñando chatbots y entrenándolos con IA.
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  Actualmente formo parte de Santander Tecnología, en el área de Inversiones, donde utilizo tecnologías como Node.js, Nest y TypeScript para crear soluciones eficientes y escalables.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          
          {/* <Grid size={{ xs: 12, md: 6 }} component="div">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 5, 
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(67,233,123,0.1) 0%, rgba(56,249,215,0.1) 100%)',
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
                <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 4, color: '#43e97b' }}>
                  Habilidades Técnicas 🚀
                </Typography>
                {skillsToShow.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <Box sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Typography variant="body1" fontWeight={600}>
                          {skill.name}
                        </Typography>
                        <Chip 
                          label={`${skill.level}%`} 
                          size="small" 
                          sx={{ 
                            bgcolor: 'primary.main', 
                            color: 'white',
                            fontWeight: 600 
                          }} 
                        />
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={skill.level} 
                        sx={{ 
                          height: 10, 
                          borderRadius: 5,
                          bgcolor: 'rgba(0,0,0,0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 5,
                            background: 'linear-gradient(45deg, #43e97b, #38f9d7)'
                          }
                        }}
                      />
                    </Box>
                  </motion.div>
                ))}
              </Paper>
            </motion.div>
          </Grid> */}
        </Grid>
        
        <Box sx={{ mt: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Typography 
              variant="h4" 
              fontWeight={700} 
              textAlign="center" 
              gutterBottom 
              sx={{ 
                mb: 6,
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Áreas de Especialización
            </Typography>
            
            <Grid container spacing={4}>
              {[
                { 
                  title: 'Frontend Development', 
                  description: 'React, TypeScript, Material-UI, responsive design',
                  gradient: 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)',
                  iconColor: '#667eea',
                  icon: 'computer'
                },
                { 
                  title: 'Backend Development', 
                  description: 'Node.js, Express, APIs REST, bases de datos',
                  gradient: 'linear-gradient(135deg, rgba(67,233,123,0.1) 0%, rgba(56,249,215,0.1) 100%)',
                  iconColor: '#43e97b',
                  icon: 'cloud'
                },
                { 
                  title: 'Mobile Development', 
                  description: 'React Native, desarrollo multiplataforma',
                  gradient: 'linear-gradient(135deg, rgba(240,147,251,0.1) 0%, rgba(245,87,108,0.1) 100%)',
                  iconColor: '#f093fb',
                  icon: 'mobile'
                }
              ].map((area, index) => {
                const renderIcon = () => {
                  switch (area.icon) {
                    case 'computer':
                      return <ComputerIcon sx={{ fontSize: 60, color: area.iconColor }} />;
                    case 'cloud':
                      return <CloudIcon sx={{ fontSize: 60, color: area.iconColor }} />;
                    case 'mobile':
                      return <MobileIcon sx={{ fontSize: 60, color: area.iconColor }} />;
                    default:
                      return <ComputerIcon sx={{ fontSize: 60, color: area.iconColor }} />;
                  }
                };

                return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card 
                      className="card-hover" 
                      sx={{ 
                        textAlign: 'center', 
                        p: 4, 
                        height: '100%',
                        background: area.gradient,
                        border: '2px solid rgba(0,0,0,0.05)',
                        borderRadius: 4,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                          border: '2px solid rgba(0,0,0,0.1)'
                        }
                      }}
                    >
                      <Box sx={{ mb: 3 }}>
                        {renderIcon()}
                      </Box>
                      <Typography variant="h6" fontWeight={700} gutterBottom>
                        {area.title}
                      </Typography>
                      <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {area.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
                );
              })}
            </Grid>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
}
