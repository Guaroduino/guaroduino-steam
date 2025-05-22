# STEAM Venezuela

Plataforma educativa minimalista para impulsar Ciencia, Tecnología, Ingeniería, Artes y Matemáticas en Venezuela.

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Antes de hacer Push

Siempre ejecuta el siguiente comando antes de hacer push para verificar que todo funciona:

```bash
npm run verify
```

Este comando verificará:
- Que no hay errores de linting
- Que el formato del código es correcto
- Que el build funciona correctamente

## Estructura del Proyecto

- `src/pages/` - Páginas de la aplicación
- `src/components/` - Componentes reutilizables
- `src/styles/` - Estilos globales y configuración de Tailwind

## Despliegue

El sitio se despliega automáticamente a GitHub Pages cuando se hace push a la rama `main`.

### Notas Importantes

1. El sitio usa Next.js con exportación estática (`output: 'export'`)
2. La configuración de Next.js está en `next.config.js`
3. El despliegue se maneja a través de GitHub Actions (`.github/workflows/gh-pages.yml`)
4. La URL de producción es: https://guaroduino.github.io/guaroduino-steam/

### Solución de Problemas Comunes

Si el despliegue falla:
1. Verifica que `npm run verify` pasa localmente
2. Asegúrate de que no hay errores de TypeScript
3. Revisa los logs en la pestaña "Actions" de GitHub
