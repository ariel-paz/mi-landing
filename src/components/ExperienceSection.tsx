import { Container, Typography, Box, Card, Chip, Grow } from '@mui/material';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
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
          Experiencia Profesional
        </Typography>
        <Box sx={{ position: 'relative' }}>
          {/* Timeline line */}
          <Box 
            sx={{ 
              position: 'absolute', 
              left: { xs: 20, md: '50%' }, 
              top: 0, 
              bottom: 0, 
              width: 2, 
              bgcolor: 'primary.main',
              transform: { md: 'translateX(-50%)' }
            }} 
          />
          {experience.map((exp, index) => (
            <Grow 
              key={index}
              in={true}
              timeout={1000 + index * 200}
            >
              <Box 
                sx={{ 
                  position: 'relative', 
                  mb: 6,
                  ml: { xs: 6, md: 0 }
                }}
              >
                {/* Timeline dot */}
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    left: { xs: -32, md: '50%' }, 
                    transform: { md: 'translateX(-50%)' },
                    width: 16, 
                    height: 16, 
                    bgcolor: 'primary.main', 
                    borderRadius: '50%',
                    border: '3px solid white',
                    boxShadow: '0 0 0 3px #1976d2'
                  }} 
                />
                <Card 
                  className="card-hover"
                  sx={{ 
                    ml: { md: index % 2 === 0 ? 0 : 'auto' },
                    mr: { md: index % 2 === 0 ? 'auto' : 0 },
                    width: { md: '45%' },
                    p: 3
                  }}
                >
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle1" color="primary.main" fontWeight={500} gutterBottom>
                    {exp.company}
                  </Typography>
                  <Chip 
                    label={exp.period} 
                    size="small" 
                    sx={{ mb: 2, bgcolor: 'primary.light', color: 'white' }}
                  />
                  <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {exp.description}
                  </Typography>
                </Card>
              </Box>
            </Grow>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
}
