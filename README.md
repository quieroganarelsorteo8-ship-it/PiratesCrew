# Pirate Queen · Save the Crew

Demo web en español para computadora y móvil, sin instalación ni dependencias de compilación. Abrí `dist/index.html` en un navegador o serví la carpeta `dist` con un servidor estático.

## Campaña de 100 niveles

Cuatro regiones de 25 niveles: Bahía del Sol, Jardines de Coral, Islas del Volcán y Cielo de Tormentas. Cada una tiene una ilustración original, paleta del tablero y dificultad propias. El mapa permite ver las cuatro regiones y entrar en el nivel disponible. Los niveles terminados quedan marcados; no hay repetición con recompensas.

Las distribuciones se generan con semillas estables: 100 conjuntos distintos de barriles y tableros iniciales reproducibles, sin combinaciones resueltas y con jugadas legales. Los objetivos suben suavemente dentro de cada región. Hay entre 6 y 14 barriles, entre 32 y 37 movimientos y un pequeño descanso al comenzar cada tramo de cinco niveles. El tablero mantiene su forma de 8 × 8; varían las posiciones, objetivos, escenarios y colores.

Se simularon 300 partidas con una estrategia automática orientada a objetivos, sin usar el inventario: las 300 terminaron con victoria. Esto detecta bloqueos evidentes, pero no sustituye pruebas con jugadores ni garantiza ganar cualquier partida. Las partidas antiguas en curso conservan sus reglas hasta terminarlas.

## Actualización visual

Interfaz renovada con madera, herrajes dorados y gemas vectoriales facetadas. Los movimientos tienen un medallón circular y los objetivos disponen de marcos y barras de avance. Intercambios de 260 ms, devolución de jugadas inválidas de 210 ms, desaparición con destellos y caída animada de las piezas. Se puede deslizar una pieza con ratón o dedo, o seleccionar dos vecinas. La opción de movimiento reducido del dispositivo se respeta.

Las animaciones bloquean nuevos movimientos hasta terminar, sin alterar las recompensas ni el progreso guardado. Pruebas adicionales verifican los tiempos, la espera antes de cambiar las posiciones, las cascadas y el regreso de intercambios inválidos sin gasto de movimientos.

## Incluye

- Arsenal persistente: bombas de 3 × 3, andanadas horizontales o verticales y fuego cruzado. Selección de objetivo, vista previa y confirmación; cancelar no consume reservas.
- Un poder por victoria y fabricación con doblones del juego. Dotación inicial única: 2 bombas, 2 andanadas y 1 cruz. No hay pagos reales.
- Viento de popa: cada esmeralda carga energía, hasta 12. Permite desplazar una fila una casilla hacia cualquier lado sin gastar movimientos; la ficha del extremo reaparece al otro lado. Sus propias cascadas no recargan el viento.
- Guardado de la partida en curso, pausa, confirmación al reiniciar, guía contextual, navegación del tablero con flechas y sonidos opcionales.
- Ruta visible de diez etapas hasta el rescate y acceso directo a las mejoras de la isla.

- Tablero 8 × 8 con cuatro tipos de tesoros, intercambios vecinos, cascadas, pistas y mezcla automática si faltan movimientos.
- Cañón en cruz, pólvora 3 × 3, brújula de color y activación encadenada de potenciadores.
- Objetivos de rubíes, perlas y barriles, con cantidades y movimientos definidos por nivel.
- Una estrella y 100 doblones por victoria; corazones que se regeneran cada cinco minutos.
- Diez mejoras de Playa Naufragio, por una estrella cada una, con progreso en el panel de construcciones.
- Un rescate de tres pines con caída animada de agua y cofre, enfriamiento de lava, derrota y escape de Luna.
- Rescate obligatorio tras cada diez niveles y práctica libre desde el menú. El rescate de historia entrega 200 doblones y un atuendo.
- Progreso guardado en el navegador mediante localStorage.

## Alcance del prototipo

La cueva es una misión reutilizable con simulación simplificada y una secuencia de solución. No es un simulador general de fluidos. La campaña tiene generación procedural determinista y comprobaciones automáticas; su balance requiere pruebas adicionales con personas. El barco se desbloquea como destino, pero su reconstrucción, nuevos rescates, torneos, eventos y otras áreas quedan para una siguiente versión.

No incluye cuentas, sincronización entre dispositivos, compras, anuncios ni paquete Android para Play Store. Las fuentes web usan Google Fonts, con tipografías locales de respaldo.

## Archivos

- `dist/index.html`: estructura de la interfaz.
- `dist/style.css`: estilo y adaptación a pantallas móviles.
- `dist/polish.css`: acabado visual del tablero, medallones, marcos y paneles.
- `dist/naval.js` y `dist/naval.css`: arsenal, viento, guardado de partida y controles de cubierta.
- `dist/engine.js`: reglas del tablero.
- `dist/app.js`: juego, isla, rescate y progreso.
- `dist/campaign.js`: 100 niveles, mapa de regiones, ilustraciones y partículas.
- `dist/adventure.css`: diseño luminoso, regiones, interfaz y explosiones.
- `dist/assets/`: cuatro escenarios originales generados con la herramienta integrada de imágenes.

Verificación realizada: 500 tableros iniciales, movimientos válidos, gravedad, potenciadores, recompensas únicas, activación del rescate, victoria y derrota, práctica sin recompensas y regeneración de vidas. Inspección visual móvil y prueba manual de combinaciones y rescate en navegador.
