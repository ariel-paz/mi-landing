import { Container, Typography, Box, Stack, Chip } from '@mui/material';
import { 
  WorkOutline as WorkIcon, 
  LocationOnOutlined as LocationIcon, 
  CalendarTodayOutlined as CalendarIcon,
  CheckCircleOutline as CheckIcon 
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import type { ExperienceItem } from '../config';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <Box id="experience" component="section" className="section-padding">
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 9 } }}>
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
              TRAYECTORIA PROFESIONAL
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
              Experiencia en{' '}
              <Box component="span" className="text-gradient-tech">
                Producción & FinTech
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
              Impacto comprobado desarrollando arquitecturas de backend seguras y sistemas de inteligencia artificial aplicados.
            </Typography>
          </motion.div>
        </Box>

        {/* Timeline Container */}
        <Box sx={{ position: 'relative', maxWidth: 960, mx: 'auto', pl: { xs: 3, md: 4 } }}>
          
          {/* Vertical Glowing Line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 12, md: 16 },
              top: 10,
              bottom: 20,
              width: 2,
              background: 'linear-gradient(180deg, #38BDF8 0%, #818CF8 50%, #34D399 100%)',
              opacity: 0.6,
              boxShadow: '0 0 10px rgba(56, 189, 248, 0.4)'
            }}
          />

          <Stack spacing={6}>
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Box sx={{ position: 'relative', pl: { xs: 3, md: 5 } }}>
                  
                  {/* Timeline Dot Indicator */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: -24, md: -28 },
                      top: 6,
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      bgcolor: '#070A13',
                      border: '3px solid #38BDF8',
                      boxShadow: '0 0 12px #38BDF8',
                      zIndex: 2
                    }}
                  />

                  {/* Card Content */}
                  <Box
                    className="glass-panel"
                    sx={{
                      p: { xs: 3, md: 4.5 },
                      borderRadius: 4,
                      borderColor: 'rgba(255, 255, 255, 0.08)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(56, 189, 248, 0.3)',
                        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)'
                      }
                    }}
                  >
                    {/* Header Row: Title & Badge */}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { sm: 'center' }, gap: 1.5, mb: 1.5 }}>
                      <Box>
                        <Typography variant="h5" fontWeight={800} sx={{ color: '#F8FAFC', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                          {item.title}
                        </Typography>
                        <Typography variant="subtitle1" fontWeight={700} sx={{ color: '#38BDF8', display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                          <WorkIcon sx={{ fontSize: 18 }} />
                          {item.company}
                        </Typography>
                      </Box>

                      <Chip
                        label={item.highlightBadge}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(56, 189, 248, 0.1)',
                          color: '#7DD3FC',
                          border: '1px solid rgba(56, 189, 248, 0.3)',
                          fontWeight: 700,
                          alignSelf: { xs: 'flex-start', sm: 'center' }
                        }}
                      />
                    </Box>

                    {/* Meta info: Period & Location */}
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 3 }} sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#94A3B8', fontSize: '0.85rem' }}>
                        <CalendarIcon sx={{ fontSize: 16, color: '#818CF8' }} />
                        <span>{item.period}</span>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#94A3B8', fontSize: '0.85rem' }}>
                        <LocationIcon sx={{ fontSize: 16, color: '#34D399' }} />
                        <span>{item.location}</span>
                      </Box>
                    </Stack>

                    {/* Achievements List */}
                    <Typography variant="subtitle2" sx={{ color: '#E2E8F0', fontWeight: 700, mb: 1.5, textTransform: 'uppercase', letterSpacing: 0.5, fontSize: '0.75rem' }}>
                      Principales Logros & Responsabilidades
                    </Typography>
                    <Stack spacing={1.5} sx={{ mb: 3 }}>
                      {item.achievements.map((ach, aIdx) => (
                        <Box key={aIdx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                          <CheckIcon sx={{ color: '#34D399', fontSize: 18, mt: 0.3, flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ color: '#CBD5E1', lineHeight: 1.7 }}>
                            {ach}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    {/* Tech Stack Tags */}
                    <Box sx={{ pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {item.techStack.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            className="code-pill"
                            sx={{
                              bgcolor: 'rgba(255, 255, 255, 0.04)',
                              color: '#CBD5E1',
                              border: '1px solid rgba(255, 255, 255, 0.08)'
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>

                  </Box>
                </Box>
              </motion.div>
            ))}
          </Stack>

        </Box>
      </Container>
    </Box>
  );
}
