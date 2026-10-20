import { Container, Typography, Box, Grid, Stack, Card, CardContent } from '@mui/material';
import { 
  AutoAwesomeOutlined as AiIcon, 
  AccountBalanceOutlined as BankIcon,
  SchoolOutlined as SchoolIcon,
  CheckCircleOutline as CheckIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const pillars = [
    {
      title: 'APIs & Migración Legacy',
      subtitle: 'NestJS, Node.js, TypeScript & Java',
      description: 'Diseño y desarrollo de nuevas APIs REST documentadas con OpenAPI y migración de sistemas legacy en Java hacia microservicios modernos en NestJS, con control de calidad mediante SonarQube.',
      icon: <BankIcon sx={{ fontSize: 36, color: '#38BDF8' }} />,
      glowColor: 'rgba(56, 189, 248, 0.15)'
    },
    {
      title: 'Persistencia, Caching & Eventos',
      subtitle: 'Oracle, MongoDB, Redis & Mensajería',
      description: 'Operaciones en el área de Acciones, Bonos y Custodia en Santander, integrando bases de datos relacionales y NoSQL, caching en memoria con Redis y procesamiento de eventos asíncronos.',
      icon: <CheckIcon sx={{ fontSize: 36, color: '#34D399' }} />,
      glowColor: 'rgba(52, 211, 153, 0.15)'
    },
    {
      title: 'React (BFF), Cloud & Chatbots',
      subtitle: 'React, GCP, Firebase & Gemini API',
      description: 'Implementación del patrón BFF en NestJS para alimentar interfaces en React, despliegues en GCP / Firebase y 3 años de trayectoria construyendo chatbots inteligentes con NLP.',
      icon: <AiIcon sx={{ fontSize: 36, color: '#818CF8' }} />,
      glowColor: 'rgba(129, 140, 248, 0.15)'
    }
  ];

  return (
    <Box id="about" component="section" className="section-padding">
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
                color: '#38BDF8',
                fontWeight: 700,
                letterSpacing: 2,
                fontSize: '0.85rem'
              }}
            >
              PERFIL PROFESIONAL
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
              Transformando Desafíos Complejos en{' '}
              <Box component="span" className="text-gradient-tech">
                Sistemas Escalables
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#94A3B8',
                maxWidth: 720,
                mx: 'auto',
                fontSize: '1.05rem',
                lineHeight: 1.7
              }}
            >
              Ingeniero de software con sólida base técnica, orientado al desarrollo de soluciones Cloud
              de alto rendimiento y la integración estratégica de modelos de Inteligencia Artificial.
            </Typography>
          </motion.div>
        </Box>

        {/* Narrative Box + Education / Background */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ height: '100%' }}
            >
              <Box className="glass-panel" sx={{ p: { xs: 3.5, md: 5 }, height: '100%' }}>
                <Typography variant="h5" fontWeight={700} sx={{ mb: 2.5, color: '#F8FAFC' }}>
                  Experiencia & Enfoque de Trabajo
                </Typography>
                <Typography variant="body1" sx={{ color: '#CBD5E1', lineHeight: 1.8, mb: 2 }}>
                  Actualmente formo parte de <strong>Santander Tecnología</strong> en el área de <strong>Acciones, Bonos y Custodia</strong>. Mi trabajo principal consiste en el <strong>desarrollo de nuevas APIs</strong>, la <strong>migración de monolitos y servicios legacy en Java hacia microservicios en NestJS, Node.js y TypeScript</strong>, el desarrollo de interfaces en <strong>React</strong> bajo el patrón BFF, y la integración asíncrona mediante colas de mensajería.
                </Typography>
                <Typography variant="body1" sx={{ color: '#CBD5E1', lineHeight: 1.8, mb: 3 }}>
                  En el día a día opero con <strong>Oracle Database, MongoDB y Redis</strong> para optimizar latencias de consulta, asegurando estándares rigurosos de calidad de código mediante análisis estático con <strong>SonarQube</strong>. Además, cuento con 3 años de experiencia previa en <strong>Chat-Tonic</strong> desarrollando chatbots con NLP e integraciones con webhooks, y desarrollo proyectos con <strong>GCP, Firebase y Gemini API</strong>.
                </Typography>
                
                <Stack spacing={1.5}>
                  {[
                    'Desarrollo de APIs REST en NestJS, Node.js y mantenimiento de lógica en Java.',
                    'Migración técnica de sistemas legacy a arquitecturas modernas en NestJS.',
                    'Patrón BFF en NestJS conectado a interfaces desarrolladas en React.',
                    'Persistencia y caching con Oracle, MongoDB y Redis.',
                    'Análisis estático y estándares de cobertura con SonarQube.'
                  ].map((item, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <CheckIcon sx={{ color: '#38BDF8', fontSize: 20, mt: 0.3 }} />
                      <Typography variant="body2" sx={{ color: '#E2E8F0', fontWeight: 500 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>

          {/* Academic Background Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ height: '100%' }}
            >
              <Box className="glass-panel" sx={{ p: { xs: 3.5, md: 4.5 }, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                  <SchoolIcon sx={{ color: '#818CF8', fontSize: 28 }} />
                  <Typography variant="h5" fontWeight={700} sx={{ color: '#F8FAFC' }}>
                    Formación Académica
                  </Typography>
                </Box>

                <Stack spacing={3}>
                  <Box sx={{ pl: 2, borderLeft: '2px solid rgba(129, 140, 248, 0.4)' }}>
                    <Typography variant="subtitle1" fontWeight={700} sx={{ color: '#F8FAFC' }}>
                      Licenciatura en Informática
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#818CF8', fontWeight: 600 }}>
                      UNAHUR (Universidad Nacional de Hurlingham)
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                      En curso • Foco en algoritmos, estructuras de datos y arquitectura de sistemas.
                    </Typography>
                  </Box>

                  <Box sx={{ pl: 2, borderLeft: '2px solid rgba(56, 189, 248, 0.4)' }}>
                    <Typography variant="subtitle1" fontWeight={700} sx={{ color: '#F8FAFC' }}>
                      Ingeniería en Sistemas de Información
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#38BDF8', fontWeight: 600 }}>
                      UTN (Universidad Tecnológica Nacional)
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                      Trayecto cursado • Fundamentos de ingeniería de software y ciencias exactas.
                    </Typography>
                  </Box>

                  <Box sx={{ pl: 2, borderLeft: '2px solid rgba(52, 211, 153, 0.4)' }}>
                    <Typography variant="subtitle1" fontWeight={700} sx={{ color: '#F8FAFC' }}>
                      Técnico en Programación
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#34D399', fontWeight: 600 }}>
                      Educación Técnica Secundaria
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                      Formación inicial rigurosa en lógica, POO y base de datos relacionales.
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* 3 Core Value Pillars */}
        <Grid container spacing={3}>
          {pillars.map((pillar, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <Card
                  className="glass-panel"
                  sx={{
                    height: '100%',
                    p: 3.5,
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'rgba(15, 23, 42, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    '&:hover': {
                      boxShadow: `0 16px 36px ${pillar.glowColor}`
                    }
                  }}
                >
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <Box sx={{ mb: 2 }}>{pillar.icon}</Box>
                    <Typography variant="h6" fontWeight={700} sx={{ color: '#F8FAFC', mb: 0.5 }}>
                      {pillar.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#94A3B8', fontWeight: 600, display: 'block', mb: 2 }}>
                      {pillar.subtitle}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#CBD5E1', lineHeight: 1.6 }}>
                      {pillar.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}
