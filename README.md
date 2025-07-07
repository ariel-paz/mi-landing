# Portfolio Personal Interactivo

Este proyecto es un portfolio personal interactivo creado con Vite + React + TypeScript, Material UI y Framer Motion. Diseñado como un CV digital moderno y atractivo para mostrar habilidades, experiencia y proyectos de manera profesional.

## ✨ Características

- **Diseño moderno y profesional** con animaciones suaves
- **100% responsive** - Perfecto en móvil, tablet y desktop
- **Navegación por pestañas** intuitiva y accesible
- **Animaciones interactivas** con Framer Motion
- **Secciones completas**:
  - 🏠 **Inicio**: Presentación personal con estadísticas
  - 👤 **Sobre Mí**: Historia personal y habilidades técnicas
  - 💼 **Experiencia**: Timeline de experiencia profesional
  - 🚀 **Proyectos**: Galería de proyectos con tecnologías
  - 📧 **Contacto**: Formulario y información de contacto
- **Tecnologías modernas**: React 19, TypeScript, Material-UI v7, Framer Motion
- **Optimizado para rendimiento** y SEO

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19 + TypeScript
- **UI Framework**: Material-UI v7
- **Animaciones**: Framer Motion
- **Build Tool**: Vite
- **Styling**: CSS3 + Material-UI theming
- **Icons**: Material Icons

## 🚀 Instalación y uso

1. **Clona el repositorio**:
   ```sh
   git clone [url-del-repositorio]
   cd mi-landing
   ```

2. **Instala las dependencias**:
   ```sh
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```sh
   npm run dev
   ```

4. **Abre tu navegador** en [http://localhost:5173](http://localhost:5173)

## 📝 Personalización

### Información Personal
Edita los siguientes datos en `src/App.tsx`:

```typescript
// Información personal básica
const personalInfo = {
  name: "Tu Nombre",
  title: "Tu Título Profesional",
  email: "tu.email@ejemplo.com",
  phone: "+54 11 1234-5678",
  location: "Tu Ubicación",
  // ... más información
};
```

### Habilidades
Modifica el array `skills` con tus tecnologías:

```typescript
const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  // Agrega tus habilidades...
];
```

### Experiencia Profesional
Actualiza el array `experience` con tu historial:

```typescript
const experience = [
  {
    title: 'Tu Cargo',
    company: 'Tu Empresa',
    period: '2022 - Presente',
    description: 'Descripción de tu rol...'
  },
  // Más experiencias...
];
```

### Proyectos
Modifica el array `projects` con tus trabajos:

```typescript
const projects = [
  {
    title: 'Nombre del Proyecto',
    description: 'Descripción del proyecto...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://demo.com',
    codeUrl: 'https://github.com/...'
  },
  // Más proyectos...
];
```

### Colores y Tema
Los colores principales se pueden modificar en el archivo CSS o en el tema de Material-UI:

```css
/* Gradiente principal */
.gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Imágenes
- Reemplaza el avatar en la sección hero
- Agrega imágenes reales para los proyectos
- Considera agregar un favicon personalizado

## 📱 Características Responsivas

- **Desktop**: Navegación por pestañas horizontal
- **Mobile**: Menú hamburguesa con drawer lateral
- **Adaptativo**: Layouts que se ajustan automáticamente
- **Touch-friendly**: Botones y elementos optimizados para touch

## 🎨 Animaciones y UX

- **Scroll suave** entre secciones
- **Animaciones de entrada** con Framer Motion
- **Hover effects** en cards y botones
- **Transiciones fluidas** en navegación
- **Loading states** y feedback visual

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint

# Deploy a GitHub Pages
npm run deploy
```

## 🚀 Deploy

### GitHub Pages
1. Configura la URL en `package.json`:
   ```json
   "homepage": "https://tu-usuario.github.io/tu-repositorio/"
   ```

2. Deploy:
   ```sh
   npm run deploy
   ```

### Netlify/Vercel
1. Conecta tu repositorio
2. Configura el build command: `npm run build`
3. Directorio de output: `dist`

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el portfolio:

1. Fork el proyecto
2. Crea una feature branch
3. Commit tus cambios
4. Push a la branch
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo como base para tu propio portfolio.

---

## 💡 Próximas Mejoras

- [ ] Modo oscuro/claro
- [ ] Integración con CMS headless
- [ ] Blog personal integrado
- [ ] Optimización de imágenes automática
- [ ] Análíticas y métricas
- [ ] PWA capabilities
- [ ] Animaciones más avanzadas
- [ ] Sección de testimonios
- [ ] Integración con redes sociales

---

**¡Tu portfolio profesional está listo para impresionar! 🌟**

Personalízalo con tu información y proyectos para crear una presencia digital única que destaque tus habilidades y experiencia.
