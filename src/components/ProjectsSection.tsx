import { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Chip, Box, Stack, Button, CardMedia, Dialog, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Launch as LaunchIcon, GitHub as GitHubIcon, Close as CloseIcon } from '@mui/icons-material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useAnalytics from '../hooks/useAnalytics';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  images?: string[];
  demoUrl: string;
  codeUrl: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
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

  const handleGitHubProfileClick = () => {
    trackEvent('social_click', 'github_profile', 'projects_section');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
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
          sx={{ 
            mb: 8,
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Mis Proyectos
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Card className="card-hover" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    bgcolor: 'grey.300',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: project.images ? 'pointer' : 'default'
                  }}
                  image={project.image}
                  onClick={project.images ? () => handleOpen(project) : undefined}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.technologies.map((tech) => (
                      <Chip 
                        key={tech}
                        label={tech} 
                        size="small" 
                        sx={{ mr: 1, mb: 1 }}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                  <Stack direction="row" spacing={2}>
                    <Button 
                      variant="contained" 
                      size="small"
                      endIcon={<LaunchIcon />}
                      fullWidth
                      href={project.demoUrl}
                      target="_blank"
                      disabled={!project.demoUrl}
                      onClick={() => handleDemoClick(project.title)}
                    >
                      Demo
                    </Button>
                    <Button 
                      variant="outlined" 
                      size="small"
                      endIcon={<GitHubIcon />}
                      fullWidth
                      href={project.codeUrl}
                      target="_blank"
                      disabled={!project.codeUrl}
                      onClick={() => handleCodeClick(project.title)}
                    >
                      Código
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button 
            variant="outlined" 
            size="large"
            endIcon={<GitHubIcon />}
            sx={{ px: 4 }}
            href="https://github.com/ariel-paz"
            target="_blank"
            onClick={handleGitHubProfileClick}
          >
            Ver más en GitHub
          </Button>
        </Box>
        {/* Carrusel Modal con react-slick */}
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <Box sx={{ position: 'relative', bgcolor: 'black', p: 0 }}>
            <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, right: 8, color: 'white', zIndex: 2 }}>
              <CloseIcon />
            </IconButton>
            {activeProject && activeProject.images && (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'black', p: 2 }}>
                <Box sx={{ width: '100%' }}>
                <Slider
                  dots={false}
                  infinite
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  arrows={false}
                  adaptiveHeight
                >
                  {activeProject.images.map((img, idx) => (
                    <Box key={idx} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400 }}>
                      <img
                        src={img}
                        alt={activeProject.title}
                        style={{ maxHeight: 400, maxWidth: '100%', objectFit: 'contain', margin: 'auto' }}
                      />
                    </Box>
                  ))}
                </Slider>
                </Box>
              </Box>
            )}
          </Box>
        </Dialog>
      </motion.div>
    </Container>
  );
}
