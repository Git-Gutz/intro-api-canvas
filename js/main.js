/**
 * DOCUMENTACIÓN TÉCNICA: RENDERIZADO BÁSICO CON HTML5 CANVAS API
 * * Este programa realiza la conexión entre el DOM y la API gráfica del navegador
 * para dibujar una primitiva geométrica bidimensional ajustada al viewport.
 */

/**
 * 1. REFERENCIA AL ELEMENTO DEL DOM (Document Object Model)
 * Se localiza el nodo específico en el árbol HTML que servirá de lienzo.
 * @type {HTMLCanvasElement}
 */
var canvas = document.getElementById("canvas");

/**
 * 1.5 CONFIGURACIÓN DE RESOLUCIÓN Y DIMENSIONES INTERNAS
 * Se lee el tamaño actual del área visible del navegador (viewport) utilizando
 * el objeto 'window' y se asigna el 50% (0.5) de ese valor a las propiedades
 * de resolución nativa del canvas.
 */
// window.innerWidth devuelve el ancho total de la ventana en píxeles.
canvas.width = window.innerWidth * 0.5; 

// window.innerHeight devuelve el alto total de la ventana en píxeles.
canvas.height = window.innerHeight * 0.5;

/**
 * 2. OBTENCIÓN DEL CONTEXTO DE RENDERIZADO
 * Se inicializa la interfaz de programación (API) para gráficos 2D.
 * El objeto 'ctx' actúa como el controlador principal que contiene todos 
 * los métodos y propiedades para manipular el buffer de imagen del canvas.
 * @type {CanvasRenderingContext2D}
 */
var ctx = canvas.getContext("2d");

/**
 * 3. CONFIGURACIÓN DEL ESTADO DEL RENDERIZADOR (Estilo de Llenado)
 * Canvas funciona como una máquina de estados. Aquí se define la propiedad
 * 'fillStyle' que afectará a todas las figuras de relleno dibujadas a partir
 * de este punto hasta que el estado sea modificado nuevamente.
 * Valor: "rgb(0, 0, 255)" (Azul puro sólido).
 */
ctx.fillStyle = "rgb(0, 0, 255)";

/**
 * 4. RENDERIZADO DE PRIMITIVA GEOMÉTRICA (Rectángulo Relleno)
 * El método 'fillRect' ejecuta el dibujo inmediato en el plano de coordenadas.
 * * Parámetros del método fillRect(x, y, width, height):
 * @param {number} x      - 10: Desplazamiento horizontal desde el origen (0,0) izquierdo.
 * @param {number} y      - 10: Desplazamiento vertical desde el origen (0,0) superior.
 * @param {number} width  - 500: Dimensión horizontal de la figura en píxeles.
 * @param {number} height - 500: Dimensión vertical de la figura en píxeles.
 */
ctx.fillRect(10, 10, 200, 200);