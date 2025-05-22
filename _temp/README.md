# Carpeta Temporal para Recursos

Esta carpeta está diseñada para ayudarte a organizar los recursos antes de convertirlos en contenido del sitio web.

## Estructura de Carpetas

```
_temp/
  ├── contenido/     # Archivos markdown o texto con el contenido
  ├── imagenes/      # Imágenes, diagramas, fotos del proyecto
  └── recursos/      # PDFs, archivos descargables, etc.
```

## Cómo Usar

1. **Para un nuevo proyecto:**
   - Crea una carpeta con el nombre del proyecto en cada subdirectorio según necesites
   - Ejemplo para "Cohete de Agua":
     ```
     contenido/
       └── cohete-agua/
           ├── instrucciones.md
           └── materiales.md
     imagenes/
       └── cohete-agua/
           ├── paso1.jpg
           ├── paso2.jpg
           └── resultado-final.jpg
     recursos/
       └── cohete-agua/
           ├── plantilla-mediciones.pdf
           └── guia-seguridad.pdf
     ```

2. **Formato del contenido:**
   - Usa Markdown para el contenido
   - Incluye:
     - Título y descripción
     - Objetivos de aprendizaje
     - Lista de materiales
     - Instrucciones paso a paso
     - Tips y consejos
     - Enlaces a recursos

3. **Imágenes:**
   - Usa nombres descriptivos
   - Optimiza las imágenes antes de incluirlas
   - Dimensiones recomendadas:
     - Fotos principales: 1200x800px
     - Miniaturas: 400x300px

4. **Recursos:**
   - Nombra los archivos claramente
   - Incluye la versión o fecha si es relevante
   - Formatos preferidos:
     - Documentos: PDF
     - Plantillas: PDF y versión editable
     - Videos: Enlaces a YouTube

## Proceso de Integración

1. Prepara todos los recursos en esta carpeta
2. Avisa cuando estén listos para ser integrados
3. El contenido será revisado y convertido en páginas del sitio
4. Las imágenes se optimizarán y moverán a `/public`
5. Los recursos se organizarán en la estructura del proyecto

## Notas
- Esta carpeta está en `.gitignore` y no se subirá al repositorio
- Mantén una copia de seguridad de tus archivos
- Los archivos aquí son temporales y se moverán al proyecto principal 