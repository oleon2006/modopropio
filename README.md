# Modo Propio en Cloudflare Workers

1. Subí el contenido descomprimido del ZIP a la raíz de `oleon2006/modopropio`, en la rama conectada a Cloudflare. `worker.js`, `wrangler.jsonc`, `public/` y `functions/` deben estar al mismo nivel.
2. En el Worker `modopropio`, dejá el comando de compilación vacío, el comando de despliegue como `npx wrangler deploy` y el directorio raíz como `/`. Al subir los archivos a GitHub, Cloudflare vuelve a intentar el despliegue si la integración está activa.
3. En Settings → Variables and secrets del Worker, usá la sección de ejecución, separada de Builds. Agregá `GEMINI_API_KEY` como secreto y `GEMINI_MODEL` como texto con el ID exacto del modelo que ya funciona. La clave se pega en Cloudflare.
4. Abrí la URL del Worker y elegí Innovación estética → Probar análisis facial con IA.
