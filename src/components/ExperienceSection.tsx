import { Container, Typography, Box, Card, Chip, Stack } from '@mui/material';
import { Work as WorkIcon } from '@mui/icons-material';
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
            <WorkIcon sx={{ fontSize: '3rem', color: '#667eea' }} />
            Experiencia Profesional
          </Typography>
        </Box>
        
        <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto' }}>
          {/* Timeline line mejorada */}
          <Box 
            sx={{ 
              position: 'absolute', 
              left: { xs: 20, md: '50%' }, 
              top: 0, 
              bottom: 0, 
              width: 4, 
              background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
              transform: { md: 'translateX(-50%)' },
              borderRadius: 2,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 12,
                height: 12,
                bgcolor: '#667eea',
                borderRadius: '50%',
                border: '3px solid white',
                boxShadow: '0 0 0 4px rgba(102,126,234,0.2)'
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 12,
                height: 12,
                bgcolor: '#764ba2',
                borderRadius: '50%',
                border: '3px solid white',
                boxShadow: '0 0 0 4px rgba(118,75,162,0.2)'
              }
            }} 
          />
          
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Box 
                sx={{ 
                  position: 'relative', 
                  mb: 6,
                  ml: { xs: 6, md: 0 }
                }}
              >
                {/* Timeline dot mejorado */}
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    left: { xs: -32, md: '50%' }, 
                    top: 20,
                    transform: { md: 'translateX(-50%)' },
                    width: 20, 
                    height: 20, 
                    background: `linear-gradient(45deg, ${index % 2 === 0 ? '#667eea' : '#764ba2'}, ${index % 2 === 0 ? '#764ba2' : '#f093fb'})`,
                    borderRadius: '50%',
                    border: '4px solid white',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    zIndex: 2
                  }} 
                />
                
                <Card 
                  className="card-hover"
                  sx={{ 
                    ml: { md: index % 2 === 0 ? 0 : 'auto' },
                    mr: { md: index % 2 === 0 ? 'auto' : 0 },
                    width: { md: '45%' },
                    p: 4,
                    background: index % 2 === 0 
                      ? 'linear-gradient(135deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%)'
                      : 'linear-gradient(135deg, rgba(240,147,251,0.05) 0%, rgba(245,87,108,0.05) 100%)',
                    border: `2px solid ${index % 2 === 0 ? 'rgba(102,126,234,0.1)' : 'rgba(240,147,251,0.1)'}`,
                    borderRadius: 4,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 20,
                      [index % 2 === 0 ? 'right' : 'left']: { xs: 'auto', md: -10 },
                      width: 0,
                      height: 0,
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      [index % 2 === 0 ? 'borderRight' : 'borderLeft']: { xs: 'none', md: `10px solid ${index % 2 === 0 ? 'rgba(102,126,234,0.1)' : 'rgba(240,147,251,0.1)'}` },
                      display: { xs: 'none', md: 'block' }
                    }
                  }}
                >
                  <Stack spacing={2}>
                    <Typography variant="h5" fontWeight={700} sx={{ color: index % 2 === 0 ? '#667eea' : '#f093fb' }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="h6" color="primary.main" fontWeight={600}>
                      🏢 {exp.company}
                    </Typography>
                    <Chip 
                      label={`📅 ${exp.period}`}
                      size="medium" 
                      sx={{ 
                        alignSelf: 'flex-start',
                        background: index % 2 === 0 
                          ? 'linear-gradient(45deg, #667eea, #764ba2)'
                          : 'linear-gradient(45deg, #f093fb, #f5576c)',
                        color: 'white',
                        fontWeight: 600,
                        '& .MuiChip-label': { px: 2 }
                      }}
                    />
                    <Typography color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                      {exp.description}
                    </Typography>
                  </Stack>
                </Card>
              </Box>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
}
