# FrikiCraft web móvil

## Archivos
- `index.html`: página de lanzamiento y primer spoiler.
- `styles.css`: diseño adaptable a móvil, escritorio y accesibilidad básica.
- `assets/frikicraftproximamente.png`: imagen principal recibida.
- `assets/frikifest.png`: logo pequeño derivado de la imagen recibida para que el sitio funcione desde el primer momento.

## Antes de publicar
En `index.html`, reemplaza `PEGA_AQUI_EL_LINK_DEL_FORMULARIO` por el enlace público de Google Forms (aparece dos veces).

## Publicación en el proyecto existente
Copia `index.html`, `styles.css` y la carpeta `assets/` a la carpeta pública configurada para Cloudflare Worker. Si mantienes `assets/` en la raíz del directorio publicado, las rutas ya están preparadas.
