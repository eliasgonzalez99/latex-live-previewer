# latex-live-previewer

# 📐 LaTeX Live Previewer 

Un previsualizador de LaTeX moderno y elegante construido con **Vanilla JavaScript** y **MathJax 3**. Escribe fórmulas matemáticas y visualízalas en tiempo real sin necesidad de compilar.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![JavaScript](https://img.shields.io/badge/javascript-vanilla-yellow)

## ✨ Características

- ⚡ **Renderizado en tiempo real** con debouncing optimizado
- 🎨 **Interfaz moderna** con diseño oscuro y efectos visuales
- 📊 **Contador de caracteres** y estado de renderizado
- 💾 **Ejemplos precargados** para comenzar rápidamente
- 📋 **Copiar al portapapeles** con un solo clic
- ⌨️ **Atajos de teclado** para mayor productividad
- 📱 **Diseño responsive** para móviles y tablets
- 🧠 **Soporte completo de LaTeX** mediante MathJax 3

## 🚀 Demo

```latex
$$E = mc^2$$

$$\int_{0}^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$$

$$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$
```

## 📦 Instalación

### Opción 1: Uso directo
1. Descarga el archivo `index.html`
2. Ábrelo en tu navegador
3. ¡Listo para usar!

### Opción 2: Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/latex-previewer-pro.git
cd latex-previewer-pro
```

Luego abre `index.html` en tu navegador preferido.

### Opción 3: Servidor local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Con PHP
php -S localhost:8000
```

Visita `http://localhost:8000` en tu navegador.

## 🎯 Uso

### Interfaz básica

1. **Editor (izquierda)**: Escribe tu código LaTeX
2. **Vista previa (derecha)**: Visualiza el resultado renderizado
3. **Toolbar superior**: Accede a todas las funcionalidades

### Botones disponibles

| Botón | Descripción |
|-------|-------------|
| **Limpiar** | Borra todo el contenido del editor |
| **Ejemplo** | Carga ejemplos de fórmulas LaTeX |
| **Copiar LaTeX** | Copia el código al portapapeles |

### Atajos de teclado

| Atajo | Acción |
|-------|--------|
| `Ctrl/Cmd + Enter` | Renderiza inmediatamente |
| `Ctrl/Cmd + L` | Limpia el editor |

## 📝 Ejemplos de LaTeX

### Ecuaciones básicas
```latex
$$x^2 + y^2 = r^2$$
```

### Fracciones
```latex
$$\frac{a}{b} = \frac{c}{d}$$
```

### Integrales
```latex
$$\int_{a}^{b} f(x) dx$$
```

### Matrices
```latex
$$\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}$$
```

### Sumatorias
```latex
$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$
```

### Límites
```latex
$$\lim_{x \to \infty} \frac{1}{x} = 0$$
```

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con gradientes y animaciones
- **Vanilla JavaScript**: Sin frameworks ni dependencias
- **MathJax 3**: Motor de renderizado LaTeX
- **CDN**: jsdelivr para MathJax

## 🎨 Características técnicas

### Debouncing
El previsualizador utiliza un sistema de debouncing que espera 300ms después de que dejes de escribir antes de renderizar, optimizando el rendimiento.

```javascript
let renderTimeout;
input.addEventListener("input", () => {
  clearTimeout(renderTimeout);
  renderTimeout = setTimeout(updatePreview, 300);
});
```

### Renderizado asíncrono
Utiliza `MathJax.typesetPromise()` para renderizado asíncrono sin bloquear la UI.

### Estado vacío
Muestra una interfaz amigable cuando no hay contenido en el editor.

## 📱 Responsive Design

- **Desktop**: Vista dividida en dos paneles
- **Tablet**: Optimizado para pantallas medianas
- **Mobile**: Vista en columnas verticales

## 🔧 Personalización

### Cambiar colores
Modifica las variables CSS en la sección `<style>`:

```css
/* Color principal */
#00c3ff → Tu color preferido

/* Fondo oscuro */
#1e1e1e → Tu color de fondo

/* Paneles */
#2c2c2c → Color de los paneles
```

### Modificar el delay del debouncing
Cambia el valor en milisegundos:

```javascript
setTimeout(updatePreview, 300); // 300ms por defecto
```

## 📄 Estructura de archivos

```
latex-previewer-pro/
│
├── index.html          # Archivo principal (todo en uno)
├── README.md          # Este archivo
└── LICENSE            # Licencia MIT
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🐛 Reportar bugs

Si encuentras un bug, por favor abre un issue con:

- Descripción del problema
- Pasos para reproducirlo
- Comportamiento esperado vs actual
- Screenshots si es posible
- Navegador y versión

## 📋 Roadmap

- [ ] Modo claro/oscuro
- [ ] Guardar/cargar desde archivo
- [ ] Historial de ecuaciones
- [ ] Más ejemplos por categoría
- [ ] Export a PDF/PNG
- [ ] Panel de símbolos LaTeX
- [ ] Auto-completado de comandos
- [ ] Temas personalizables

## 📚 Recursos útiles

- [Documentación de MathJax](https://docs.mathjax.org/)
- [Guía de LaTeX](https://www.overleaf.com/learn/latex/Mathematical_expressions)
- [Símbolos LaTeX](https://www.ctan.org/tex-archive/info/symbols/comprehensive/)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

## 🌟 Agradecimientos

- [MathJax](https://www.mathjax.org/) por el motor de renderizado
- [jsdelivr](https://www.jsdelivr.com/) por el CDN
- Comunidad de LaTeX por los recursos

## 💡 Inspiración

Este proyecto fue creado para facilitar la escritura y visualización de fórmulas matemáticas sin necesidad de herramientas pesadas o configuraciones complejas.

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

**Made with ❤️ and Vanilla JavaScript
