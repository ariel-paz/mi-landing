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
        
        <Box sx={{ position: 'relative', maxWidth: 900, mx: 'auto' }}>
          {/* Timeline line mejorada */}
          <Box 
            sx={{ 
              position: 'absolute', 
              left: { xs: 20, md: '50%' }, 
              top: 60, 
              bottom: 60, 
              width: { xs: 4, md: 6 }, 
              background: 'linear-gradient(180deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              transform: { md: 'translateX(-50%)' },
              borderRadius: 3,
              zIndex: 1,
              boxShadow: '0 0 20px rgba(102,126,234,0.3)'
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
                  mb: { xs: 6, md: 10 },
                  ml: { xs: 5, md: 0 }
                }}
              >
                {/* Timeline dot mejorado */}
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    left: { xs: -27, md: '50%' }, 
                    top: { xs: 30, md: 60 },
                    transform: { md: 'translateX(-50%)' },
                    width: { xs: 18, md: 24 }, 
                    height: { xs: 18, md: 24 }, 
                    background: `linear-gradient(45deg, ${
                      index % 2 === 0 
                        ? '#667eea, #764ba2' 
                        : '#f093fb, #f5576c'
                    })`,
                    borderRadius: '50%',
                    border: { xs: '3px solid white', md: '4px solid white' },
                    boxShadow: `0 0 0 ${index % 2 === 0 ? '4px rgba(102,126,234,0.2)' : '4px rgba(240,147,251,0.2)'}, 0 4px 20px rgba(0,0,0,0.15)`,
                    zIndex: 3,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: 6, md: 8 },
                      height: { xs: 6, md: 8 },
                      background: 'white',
                      borderRadius: '50%'
                    }
                  }} 
                />
                
                <Card 
                  className="card-hover"
                  sx={{ 
                    ml: { md: index % 2 === 0 ? 0 : 'auto' },
                    mr: { md: index % 2 === 0 ? 'auto' : 0 },
                    width: { xs: '100%', md: '42%' },
                    minHeight: { xs: 240, md: 320 },
                    p: { xs: 2.5, md: 4 },
                    background: index % 2 === 0 
                      ? 'linear-gradient(135deg, rgba(102,126,234,0.08) 0%, rgba(118,75,162,0.08) 100%)'
                      : 'linear-gradient(135deg, rgba(240,147,251,0.08) 0%, rgba(245,87,108,0.08) 100%)',
                    border: `2px solid ${index % 2 === 0 ? 'rgba(102,126,234,0.15)' : 'rgba(240,147,251,0.15)'}`,
                    borderRadius: 4,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    backdropFilter: 'blur(10px)',
                    boxShadow: `0 8px 32px ${index % 2 === 0 ? 'rgba(102,126,234,0.1)' : 'rgba(240,147,251,0.1)'}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 16px 48px ${index % 2 === 0 ? 'rgba(102,126,234,0.2)' : 'rgba(240,147,251,0.2)'}`,
                      border: `2px solid ${index % 2 === 0 ? 'rgba(102,126,234,0.3)' : 'rgba(240,147,251,0.3)'}`
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: { xs: 30, md: 60 },
                      [index % 2 === 0 ? 'right' : 'left']: { xs: 'auto', md: -15 },
                      width: 0,
                      height: 0,
                      borderTop: '15px solid transparent',
                      borderBottom: '15px solid transparent',
                      [index % 2 === 0 ? 'borderRight' : 'borderLeft']: { 
                        xs: 'none', 
                        md: `15px solid ${index % 2 === 0 ? 'rgba(102,126,234,0.15)' : 'rgba(240,147,251,0.15)'}` 
                      },
                      display: { xs: 'none', md: 'block' }
                    }
                  }}
                >
                  <Stack spacing={{ xs: 2, md: 3 }} sx={{ height: '100%' }}>
                    <Box>
                      <Typography 
                        variant="h4" 
                        fontWeight={700} 
                        sx={{ 
                          color: index % 2 === 0 ? '#667eea' : '#f093fb',
                          mb: 1,
                          fontSize: { xs: '1.3rem', md: '1.8rem' }
                        }}
                      >
                        {exp.title}
                      </Typography>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: 'primary.main', 
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          fontSize: { xs: '1rem', md: '1.25rem' }
                        }}
                      >
                        <WorkIcon sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                        {exp.company}
                      </Typography>
                    </Box>
                    
                    <Chip 
                      label={exp.period}
                      size="medium" 
                      sx={{ 
                        alignSelf: 'flex-start',
                        background: index % 2 === 0 
                          ? 'linear-gradient(45deg, #667eea, #764ba2)'
                          : 'linear-gradient(45deg, #f093fb, #f5576c)',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: { xs: '0.8rem', md: '0.9rem' },
                        height: { xs: 32, md: 36 },
                        '& .MuiChip-label': { px: { xs: 2, md: 3 } }
                      }}
                    />
                    
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                      <Typography 
                        color="text.secondary" 
                        sx={{ 
                          lineHeight: 1.6, 
                          fontSize: { xs: '0.95rem', md: '1.1rem' },
                          fontWeight: 400
                        }}
                      >
                        {exp.description}
                      </Typography>
                    </Box>
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
