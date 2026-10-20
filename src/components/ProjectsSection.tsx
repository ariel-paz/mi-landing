import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  CardContent, 
  Chip, 
  Box, 
  Stack, 
  Button, 
  CardMedia, 
  Dialog, 
  IconButton 
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Launch as LaunchIcon, 
  GitHub as GitHubIcon, 
  Close as CloseIcon, 
  AutoAwesome as AiIcon,
  CheckCircleOutline as CheckIcon
} from '@mui/icons-material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { Project } from '../config';
import useAnalytics from '../hooks/useAnalytics';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<'Todos' | 'Cloud & IA' | 'Full Stack' | 'Frontend'>('Todos');
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const { trackEvent } = useAnalytics();

  const handleOpen = (project: Project) => {
    setActiveProject(project);
    setOpen(true);
    trackEvent('project_interaction', 'image_gallery_open', project.title);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveProject(null);
  };

  const handleDemoClick = (projectTitle: string) => {
    trackEvent('project_interaction', 'demo_click', projectTitle);
  };

  const handleCodeClick = (projectTitle: string) => {
    trackEvent('project_interaction', 'code_click', projectTitle);
  };

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Box id="projects" component="section" className="section-padding">
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: '#38BDF8',
                fontWeight: 700,
                letterSpacing: 2,
                fontSize: '0.85rem'
              }}
            >
              PORTAFOLIO DE INGENIERÍA
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
              Proyectos Destacados en{' '}
              <Box component="span" className="text-gradient-tech">
                Cloud & AI
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
              Casos de estudio reales donde la arquitectura de software, la escalabilidad y los modelos generativos resuelven problemas concretos.
            </Typography>
          </motion.div>

          {/* Category Filter Pills */}
          <Stack
            direction="row"
            justifyContent="center"
            gap={1.5}
            flexWrap="wrap"
            sx={{ mt: 4 }}
          >
            {(['Todos', 'Cloud & IA', 'Full Stack', 'Frontend'] as const).map((cat) => (
              <Chip
                key={cat}
                label={cat}
                clickable
                onClick={() => setFilter(cat)}
                sx={{
                  px: 1.5,
                  py: 2,
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  bgcolor: filter === cat ? '#38BDF8' : 'rgba(255, 255, 255, 0.04)',
                  color: filter === cat ? '#04101E' : '#94A3B8',
                  border: filter === cat ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    bgcolor: filter === cat ? '#7DD3FC' : 'rgba(255, 255, 255, 0.08)',
                    color: filter === cat ? '#04101E' : '#F8FAFC'
                  }
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => {
            const isAiCard = project.isAiOrCloud;

            return (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  style={{ height: '100%' }}
                >
                  <Box
                    className={isAiCard ? 'ai-glow-card' : 'glass-panel'}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      overflow: 'hidden'
                    }}
                  >
                    {/* Media Preview Box */}
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                      <CardMedia
                        component="div"
                        sx={{
                          height: 220,
                          bgcolor: '#0B1320',
                          backgroundImage: `url(${project.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center top',
                          cursor: project.images ? 'pointer' : 'default',
                          transition: 'transform 0.5s ease',
                          '&:hover': {
                            transform: project.images ? 'scale(1.04)' : 'none'
                          }
                        }}
                        onClick={project.images ? () => handleOpen(project) : undefined}
                      />

                      {/* Top Badges Overlay */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 12,
                          left: 12,
                          right: 12,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          pointerEvents: 'none'
                        }}
                      >
                        {isAiCard ? (
                          <Box className="ai-badge">
                            <AiIcon sx={{ fontSize: 14 }} />
                            <span>CLOUD & AI FEATURED</span>
                          </Box>
                        ) : (
                          <Chip
                            label={project.category}
                            size="small"
                            sx={{
                              bgcolor: 'rgba(15, 23, 42, 0.85)',
                              color: '#94A3B8',
                              backdropFilter: 'blur(10px)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              fontSize: '0.75rem',
                              fontWeight: 600
                            }}
                          />
                        )}

                        {project.images && (
                          <Chip
                            label="Galería disponible"
                            size="small"
                            sx={{
                              bgcolor: 'rgba(0, 0, 0, 0.65)',
                              color: '#38BDF8',
                              backdropFilter: 'blur(8px)',
                              fontSize: '0.7rem',
                              fontWeight: 600,
                              border: '1px solid rgba(56, 189, 248, 0.3)'
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    {/* Card Content Body */}
                    <CardContent sx={{ p: { xs: 3, md: 4 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      
                      <Typography variant="h5" fontWeight={800} sx={{ color: '#F8FAFC', mb: 0.5 }}>
                        {project.title}
                      </Typography>
                      
                      <Typography variant="subtitle2" sx={{ color: '#38BDF8', fontWeight: 600, mb: 2 }}>
                        {project.tagline}
                      </Typography>

                      <Typography variant="body2" sx={{ color: '#CBD5E1', lineHeight: 1.7, mb: 3 }}>
                        {project.description}
                      </Typography>

                      {/* Impact Metrics (Recruiter High-Value Section) */}
                      <Box sx={{ mb: 3, p: 2, borderRadius: 2.5, bgcolor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <Typography variant="caption" sx={{ color: '#818CF8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, display: 'block', mb: 1 }}>
                          Impacto & Arquitectura
                        </Typography>
                        <Stack spacing={1}>
                          {project.impactMetrics.map((metric, mIdx) => (
                            <Box key={mIdx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                              <CheckIcon sx={{ color: '#34D399', fontSize: 16, mt: 0.2, flexShrink: 0 }} />
                              <Typography variant="caption" sx={{ color: '#E2E8F0', fontWeight: 500, lineHeight: 1.5 }}>
                                {metric}
                              </Typography>
                            </Box>
                          ))}
                        </Stack>
                      </Box>

                      {/* Technologies Chips */}
                      <Box sx={{ mb: 3, mt: 'auto' }}>
                        <Stack direction="row" flexWrap="wrap" gap={0.8}>
                          {project.technologies.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              className="code-pill"
                              sx={{
                                bgcolor: 'rgba(56, 189, 248, 0.06)',
                                color: '#7DD3FC',
                                border: '1px solid rgba(56, 189, 248, 0.15)',
                                fontSize: '0.75rem'
                              }}
                            />
                          ))}
                        </Stack>
                      </Box>

                      {/* Action Buttons */}
                      <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
                        <Button
                          variant="contained"
                          size="small"
                          fullWidth
                          className="btn-tech-primary"
                          endIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                          href={project.demoUrl}
                          target="_blank"
                          disabled={!project.demoUrl}
                          onClick={() => handleDemoClick(project.title)}
                        >
                          Ver Demo
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          fullWidth
                          endIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
                          href={project.codeUrl || 'https://github.com/ariel-paz'}
                          target="_blank"
                          disabled={!project.codeUrl && !project.demoUrl}
                          onClick={() => handleCodeClick(project.title)}
                          sx={{
                            borderColor: 'rgba(255, 255, 255, 0.15)',
                            color: '#F8FAFC',
                            '&:hover': {
                              borderColor: '#38BDF8',
                              color: '#38BDF8',
                              bgcolor: 'rgba(56, 189, 248, 0.08)'
                            }
                          }}
                        >
                          Código
                        </Button>
                      </Stack>

                    </CardContent>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

        {/* Global GitHub CTA */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button
            variant="outlined"
            size="large"
            endIcon={<GitHubIcon />}
            href="https://github.com/ariel-paz"
            target="_blank"
            sx={{
              px: 4,
              py: 1.5,
              borderColor: 'rgba(255, 255, 255, 0.2)',
              color: '#F8FAFC',
              '&:hover': {
                borderColor: '#38BDF8',
                color: '#38BDF8',
                bgcolor: 'rgba(56, 189, 248, 0.08)'
              }
            }}
          >
            Explorar más repositorios en GitHub
          </Button>
        </Box>

        {/* Modal Gallery */}
        <Dialog 
          open={open} 
          onClose={handleClose} 
          maxWidth="md" 
          fullWidth
          PaperProps={{
            sx: {
              bgcolor: '#070A13',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 3,
              overflow: 'hidden'
            }
          }}
        >
          <Box sx={{ position: 'relative', bgcolor: '#070A13', p: 0 }}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                color: 'white',
                zIndex: 10,
                bgcolor: 'rgba(0,0,0,0.6)',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.9)' }
              }}
            >
              <CloseIcon />
            </IconButton>

            {activeProject && activeProject.images && (
              <Box sx={{ p: { xs: 2, md: 4 } }}>
                <Typography variant="h6" fontWeight={700} sx={{ color: '#F8FAFC', mb: 2 }}>
                  {activeProject.title} — Capturas
                </Typography>
                <Slider
                  dots={true}
                  infinite
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  arrows={false}
                  adaptiveHeight
                >
                  {activeProject.images.map((img, idx) => (
                    <Box key={idx} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: { xs: 260, md: 420 } }}>
                      <img
                        src={img}
                        alt={`${activeProject.title} screenshot ${idx + 1}`}
                        style={{
                          maxHeight: '100%',
                          maxWidth: '100%',
                          objectFit: 'contain',
                          borderRadius: '8px'
                        }}
                      />
                    </Box>
                  ))}
                </Slider>
              </Box>
            )}
          </Box>
        </Dialog>

      </Container>
    </Box>
  );
}
