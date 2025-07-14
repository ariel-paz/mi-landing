// Configuración de EmailJS
// Para configurar EmailJS:
// 1. Ve a https://www.emailjs.com/
// 2. Crea una cuenta gratuita
// 3. Crea un servicio (Gmail, Outlook, etc.)
// 4. Crea un template de email
// 5. Obtén tu Public Key
// 6. Reemplaza los valores aquí

export const emailJSConfig = {
  serviceID: 'portfolio', // Reemplaza con tu Service ID
  templateID: 'template_u4t7hoq', // Reemplaza con tu Template ID
  publicKey: '9785hw3wyozLTsw4k' // Reemplaza con tu Public Key
};

// Template recomendado para EmailJS:
/*
Asunto: Nuevo mensaje desde tu portfolio - {{subject}}

Contenido:
Nombre: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu portfolio web.
*/
