# Renderizado Geométrico con Canvas 2D

## Descripción del Proyecto
Este proyecto es una implementación técnica de la API Canvas de HTML5 para el renderizado bidimensional de primitivas geométricas. El código demuestra la correcta separación de responsabilidades entre la estructura del documento (HTML), la presentación visual (CSS) y la lógica gráfica (JavaScript).

## Características Técnicas
* **Renderizado Dinámico:** Utilización de `CanvasRenderingContext2D` para dibujar elementos gráficos directamente en el buffer de la pantalla.
* **Resolución Relativa:** Cálculo matemático mediante el objeto global `window` (`innerWidth` e `innerHeight`) para adaptar la resolución interna del lienzo exactamente al 50% del viewport del navegador.
* **Estilizado Avanzado (CSS3):** Implementación del modelo de caja con bordes suavizados (`border-radius`) y proyección de sombras vectoriales (`box-shadow`) para generar profundidad visual, utilizando una paleta de colores en tonos café.

## Tecnologías Utilizadas
* **HTML5:** Estructura de nodos del DOM.
* **CSS3:** Hoja de estilos en cascada para la interfaz.
* **JavaScript:** Lógica de control y API gráfica.

## Instalación y Ejecución
Al ser un proyecto estático del lado del cliente, no requiere dependencias externas ni procesos de compilación.

1. Clonar este repositorio en el entorno local usando Git.
2. Abrir el archivo `index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari).

## Estructura de Archivos
* `index.html`: Punto de entrada principal y contenedor estático.
* `style.css`: Reglas de presentación visual de la interfaz.
* `script.js`: Lógica de inicialización del motor gráfico y ejecución del renderizado.