# Configuración de Descarga de CV desde Google Drive

## Pasos para configurar la descarga del CV:

### 1. Subir tu CV a Google Drive
- Ve a [Google Drive](https://drive.google.com)
- Sube tu archivo de CV (formato PDF recomendado)
- Asegúrate de que el archivo tenga un nombre descriptivo como "CV_Ariel_Paz.pdf"

### 2. Configurar permisos de compartir
- Haz clic derecho en tu archivo de CV
- Selecciona "Compartir"
- Cambia los permisos a "Cualquier persona con el enlace"
- Asegúrate de que el permiso sea "Visor" (no es necesario "Editor")
- Copia el enlace compartido

### 3. Extraer el ID del archivo
Del enlace compartido que se ve así:
```
https://drive.google.com/file/d/1ABC123DEF456GHI789JKL/view?usp=sharing
```

El ID del archivo es la parte entre `/d/` y `/view`:
```
1ABC123DEF456GHI789JKL
```

### 4. Configurar en el proyecto
- Abre el archivo `src/config.ts`
- Busca la sección `cvConfig`
- Reemplaza `'TU_FILE_ID_AQUI'` con el ID que copiaste:

```typescript
export const cvConfig = {
  driveFileId: '1ABC123DEF456GHI789JKL', // Tu ID aquí
  fileName: 'CV_Ariel_Paz.pdf',
  get downloadUrl() {
    return `https://drive.google.com/uc?export=download&id=${this.driveFileId}`;
  }
};
```

### 5. Personalizar el nombre del archivo (opcional)
Puedes cambiar el nombre que tendrá el archivo cuando se descargue:

```typescript
fileName: 'Tu_Nombre_CV.pdf',
```

## ✅ Verificar que funciona

1. Guarda los cambios
2. Ejecuta el proyecto (`npm run dev`)
3. Haz clic en el botón "Descargar CV"
4. Debería descargarse automáticamente tu archivo

## 🔧 Troubleshooting

**Si no funciona la descarga:**

1. **Verifica los permisos:** Asegúrate de que el archivo esté configurado como "Cualquier persona con el enlace puede ver"

2. **Verifica el ID:** Comprueba que hayas copiado correctamente el ID del archivo (sin espacios ni caracteres extra)

3. **Prueba el enlace directo:** Abre en una nueva pestaña:
   ```
   https://drive.google.com/uc?export=download&id=TU_ID_AQUI
   ```
   Reemplaza `TU_ID_AQUI` con tu ID real. Si funciona aquí, también funcionará en el botón.

## 📝 Alternativas

Si prefieres otra opción, puedes:

1. **Subir a la carpeta public del proyecto:**
   - Pon tu CV en `public/CV_Ariel_Paz.pdf`
   - Cambia `driveFileId` por `'/CV_Ariel_Paz.pdf'`
   - Modifica el `downloadUrl` a `return this.driveFileId`

2. **Usar otro servicio de almacenamiento:**
   - Dropbox, OneDrive, etc.
   - Solo cambia la URL en `downloadUrl`

¡Una vez configurado, cualquier persona podrá descargar tu CV con un clic!
