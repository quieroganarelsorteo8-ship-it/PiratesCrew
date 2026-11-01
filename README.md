# Pirate Queen · Save the Crew

Demo web en español para computadora y móvil, sin instalación ni dependencias de compilación. Abrí `dist/index.html` en un navegador o serví la carpeta `dist` con un servidor estático.

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
- Objetivos de rubíes, perlas y ocho barriles; 26 movimientos por nivel.
- Una estrella y 100 doblones por victoria; corazones que se regeneran cada cinco minutos.
- Diez mejoras de Playa Naufragio, por una estrella cada una, con marcadores en la isla.
- Un rescate de tres pines con caída animada de agua y cofre, enfriamiento de lava, derrota y escape de Luna.
- Rescate obligatorio tras cada diez niveles y práctica libre desde el menú. El rescate de historia entrega 200 doblones y un atuendo.
- Progreso guardado en el navegador mediante localStorage.

## Alcance del prototipo

La cueva es una misión reutilizable con simulación simplificada y una secuencia de solución. No es un simulador general de fluidos. Los tableros se generan automáticamente; todavía no hay campaña de niveles diseñada y balanceada individualmente. El barco se desbloquea como destino, pero su reconstrucción, nuevos rescates, torneos, eventos y otras áreas quedan para una siguiente versión.

No incluye cuentas, sincronización entre dispositivos, compras, anuncios ni paquete Android para Play Store. Las fuentes web usan Google Fonts, con tipografías locales de respaldo.

## Archivos

- `dist/index.html`: estructura de la interfaz.
- `dist/style.css`: estilo y adaptación a pantallas móviles.
- `dist/polish.css`: acabado visual del tablero, medallones, marcos y paneles.
- `dist/naval.js` y `dist/naval.css`: arsenal, viento, guardado de partida y controles de cubierta.
- `dist/engine.js`: reglas del tablero.
- `dist/app.js`: juego, isla, rescate y progreso.

Verificación realizada: 500 tableros iniciales, movimientos válidos, gravedad, potenciadores, recompensas únicas, activación del rescate, victoria y derrota, práctica sin recompensas y regeneración de vidas. Inspección visual móvil y prueba manual de combinaciones y rescate en navegador.
