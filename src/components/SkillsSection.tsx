import { Container, Typography, Box, Grid, Chip, Stack } from '@mui/material';
import { 
  CloudQueue as CloudIcon, 
  AutoAwesome as AiIcon, 
  Storage as BackendIcon, 
  Devices as FrontendIcon 
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { skillsCategories } from '../config';

export default function SkillsSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud, Serverless & DB':
        return <CloudIcon sx={{ color: '#38BDF8', fontSize: 28 }} />;
      case 'Inteligencia Artificial & GenAI':
        return <AiIcon sx={{ color: '#818CF8', fontSize: 28 }} />;
      case 'Backend & Arquitectura':
        return <BackendIcon sx={{ color: '#34D399', fontSize: 28 }} />;
      case 'Frontend & UX/UI Moderno':
        return <FrontendIcon sx={{ color: '#F472B6', fontSize: 28 }} />;
      default:
        return <CloudIcon sx={{ color: '#38BDF8', fontSize: 28 }} />;
    }
  };

  return (
    <Box id="skills" component="section" className="section-padding">
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: '#818CF8',
                fontWeight: 700,
                letterSpacing: 2,
                fontSize: '0.85rem'
              }}
            >
              STACK & DOMINIO TÉCNICO
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
              Herramientas &{' '}
              <Box component="span" className="text-gradient-tech">
                Ecosistema Cloud / AI
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
              Tecnologías de grado empresarial dominadas a través de proyectos en producción y
              entornos de misión crítica.
            </Typography>
          </motion.div>
        </Box>

        {/* 4 Category Cards Grid */}
        <Grid container spacing={3.5}>
          {skillsCategories.map((group, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                style={{ height: '100%' }}
              >
                <Box
                  className="glass-panel"
                  sx={{
                    p: 3.5,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    '&:hover': {
                      borderColor: group.accentColor,
                      boxShadow: `0 12px 30px ${group.accentColor}25`
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    {getCategoryIcon(group.category)}
                    <Typography variant="h6" fontWeight={700} sx={{ fontSize: '1.05rem', color: '#F8FAFC' }}>
                      {group.category}
                    </Typography>
                  </Box>

                  <Stack spacing={1.5} sx={{ flexGrow: 1 }}>
                    {group.skills.map((skill, sIdx) => (
                      <Box
                        key={sIdx}
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          bgcolor: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.05)',
                            borderColor: `${group.accentColor}50`
                          }
                        }}
                      >
                        <Typography variant="body2" fontWeight={600} sx={{ color: '#F8FAFC', mb: 0.5 }}>
                          {skill.name}
                        </Typography>
                        <Chip
                          label={skill.level}
                          size="small"
                          className="code-pill"
                          sx={{
                            height: 20,
                            fontSize: '0.7rem',
                            bgcolor: `${group.accentColor}15`,
                            color: group.accentColor,
                            border: `1px solid ${group.accentColor}30`
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
