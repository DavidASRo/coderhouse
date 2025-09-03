# MusiShop - Tienda de Instrumentos Musicales

## 📋 Descripción del Proyecto

MusiShop es una tienda online responsive especializada en instrumentos musicales de alta calidad. El proyecto está desarrollado con HTML5, CSS3, SASS y JavaScript, cumpliendo con todos los estándares modernos de desarrollo web.

## ✅ Requisitos Completados

### Estructura del Proyecto
- ✅ **1 carpeta CSS** con `style.css` y `style.css.map`
- ✅ **1 carpeta de imágenes** con recursos multimedia
- ✅ **1 carpeta con 5 HTML** (pages/)
- ✅ **1 carpeta SCSS** completa y organizada
- ✅ **1 archivo index.html** principal

### Características Técnicas
- ✅ **Sitio completo responsive** (vista desktop y mobile) sin scroll horizontal
- ✅ **5 páginas HTML** completamente funcionales
- ✅ **Flexbox y CSS Grid** implementados
- ✅ **SASS completo** con todas las funcionalidades requeridas:
  - Anidación de selectores
  - Variables globales
  - Mixins reutilizables
  - Extends/Placeholders
- ✅ **Animaciones y transformaciones** CSS

## 🗂️ Estructura de Archivos

```
coderhouse/
├── index.html                 # Página principal
├── css/
│   ├── style.css             # CSS compilado
│   └── style.css.map         # Source map
├── scss/                      # Archivos SASS
│   ├── main.scss             # Archivo principal SASS
│   ├── _variables.scss       # Variables globales
│   ├── _mixins.scss          # Mixins reutilizables
│   ├── _extends.scss         # Placeholders/Extends
│   ├── _animations.scss      # Animaciones CSS
│   ├── _base.scss            # Estilos base
│   ├── _header.scss          # Navegación
│   ├── _sections.scss        # Secciones principales
│   ├── _footer.scss          # Pie de página
│   └── _pages.scss           # Páginas específicas
├── js/
│   └── main.js               # JavaScript interactivo
├── imagenes/                 # Recursos multimedia
├── pages/                    # Páginas adicionales
│   ├── contacto.html
│   ├── galeria.html
│   ├── instrumentos.html
│   ├── mates.html
│   └── sobreNosotros.html
└── package.json              # Configuración npm/SASS
```

## 🎨 Funcionalidades SASS Implementadas

### Variables
- Colores del tema
- Tipografías
- Espaciados
- Breakpoints responsive
- Transiciones

### Mixins
- `@mixin center-flex` - Centrado con flexbox
- `@mixin button-style` - Estilos de botones personalizables
- `@mixin card-style` - Tarjetas con sombras
- `@mixin mobile/tablet/desktop` - Media queries responsive
- `@mixin fade-in` - Animaciones de entrada

### Extends/Placeholders
- `%flex-center` - Centrado flex reutilizable
- `%container-base` - Contenedor base
- `%hover-lift` - Efecto hover elevación
- `%shadow-hover` - Sombras en hover
- `%reset-list` - Reset de listas

### Anidación
- Navegación responsive anidada
- Tarjetas de productos con estados hover
- Formularios con validación visual
- Galería con overlays interactivos

## 🌟 Animaciones Implementadas

1. **Fade In** - Aparición suave de elementos
2. **Slide In (Left/Right)** - Entrada lateral de contenido
3. **Bounce In** - Entrada con rebote para tarjetas
4. **Pulse Hover** - Pulsación en hover
5. **Scale Hover** - Escalado en hover
6. **Rotate** - Rotación de elementos decorativos

## 📱 Diseño Responsive

- **Mobile First** approach
- **Breakpoints** definidos: 768px, 992px, 1200px
- **Grid System** flexible y adaptativo
- **Navegación móvil** tipo hamburger
- **Imágenes** completamente responsive
- **Sin scroll horizontal** en ningún dispositivo

## 🛠️ Scripts npm Disponibles

```bash
# Compilar SASS una vez
npm run sass

# Modo watch (compilación automática)
npm run sass:watch

# Build de producción (CSS comprimido)
npm run build
```

## 🚀 Instrucciones de Desarrollo

1. **Clonar el repositorio**
2. **Instalar dependencias**: `npm install`
3. **Modo desarrollo**: `npm run sass:watch`
4. **Build producción**: `npm run build`

## 🎯 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos
- **SASS/SCSS** - Preprocesador CSS
- **JavaScript** - Interactividad
- **Bootstrap 5** - Framework CSS base
- **Font Awesome** - Iconografía
- **CSS Grid & Flexbox** - Layouts modernos

## 📊 Optimizaciones

- **Source maps** para debugging
- **CSS comprimido** en producción
- **Lazy loading** de imágenes
- **Animaciones optimizadas** con `transform` y `opacity`
- **Mobile-first** responsive design

---

*Proyecto desarrollado para el curso de Coderhouse - Desarrollo Web*

**Autor:** David  
**Fecha:** Septiembre 2025
