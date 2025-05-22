# Guía de Contribución - STEAM Venezuela

## Reglas Generales de Diseño

### 1. Minimalismo
- Mantener un diseño limpio y minimalista
- Evitar elementos decorativos innecesarios
- Priorizar la legibilidad y usabilidad

### 2. Paleta de Colores
- Color principal: Azul eléctrico (#0070F3)
- Fondo: Blanco (#FFFFFF)
- Texto: Negro (#171717)
- Usar escala de grises para elementos secundarios

### 3. Tipografía
- Fuente principal: Inter
- Fuente secundaria: Montserrat
- Jerarquía clara de tamaños:
  - Títulos principales: 3xl-5xl
  - Subtítulos: xl-2xl
  - Texto regular: base
  - Texto pequeño: sm

## Reglas de Desarrollo

### 1. Estructura del Código
- Usar TypeScript estrictamente
- Mantener componentes pequeños y reutilizables
- Seguir el patrón de diseño atómico

### 2. Convenciones de Nombrado
- Componentes: PascalCase
- Funciones y variables: camelCase
- Constantes: UPPER_SNAKE_CASE
- Archivos de componentes: PascalCase.tsx

### 3. Organización de Archivos
```
src/
  ├── components/
  │   ├── atoms/      # Componentes básicos (Button, Input)
  │   ├── molecules/  # Combinaciones de átomos (Card, SearchBar)
  │   └── organisms/  # Secciones completas (Header, Footer)
  ├── pages/
  │   └── [nivel]/    # Páginas por nivel educativo
  └── styles/         # Estilos globales y utilidades
```

### 4. Rendimiento
- Optimizar imágenes antes de subirlas
- Lazy loading para componentes pesados
- Minimizar dependencias externas

## Reglas de Contenido

### 1. Niveles Educativos
- Primaria: Contenido interactivo y visual
- Secundaria: Proyectos prácticos y experimentos
- Universidad: Material técnico y avanzado

### 2. Proyectos
- Incluir objetivos claros
- Listar materiales necesarios
- Proporcionar instrucciones paso a paso
- Agregar imágenes o diagramas relevantes

### 3. Accesibilidad
- Textos alternativos para imágenes
- Contraste adecuado de colores
- Navegación por teclado
- Contenido responsive

## Control de Calidad

### 1. Testing
- Pruebas unitarias para componentes
- Pruebas de integración para flujos principales
- Verificación de accesibilidad

### 2. Revisión de Código
- Usar ESLint y Prettier
- Seguir principios SOLID
- Documentar cambios importantes

### 3. Performance
- Lighthouse score mínimo de 90
- Tiempo de carga inicial < 3s
- First Contentful Paint < 1.5s

## Proceso de Desarrollo

### 1. Branches
- main: Producción
- develop: Desarrollo
- feature/*: Nuevas características
- fix/*: Correcciones

### 2. Commits
- Usar commits semánticos:
  - feat: Nueva característica
  - fix: Corrección de bug
  - docs: Documentación
  - style: Cambios de estilo
  - refactor: Refactorización
  - test: Pruebas

### 3. Pull Requests
- Descripción clara del cambio
- Screenshots si hay cambios visuales
- Lista de verificación de calidad 