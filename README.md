# sprint-3-patterns-1

Aprender a utilizar implementaciones de patrones de diseño. Las soluciones a los ejercicios estan en TypeScript.

## Contenido


- [sprint-3-patterns-1](#sprint-3-patterns-1)
  - [Contenido](#contenido)
  - [Callback Hell](#callback-hell)
  - [Singleton](#singleton)
  - [Observer](#observer)
  - [Middleware](#middleware)
  - [Decorator](#decorator)
  - [Scripts](#scripts)
  - [Referencias](#referencias)

## Callback Hell

El código adjunto lee un archivo ubicado en un directorio `inbox` y escribe su contenido invertido en otro archivo en el directorio `outbox`. Reestructura y simplifica el código existente para evitar el llamado Callback Hell.

## Singleton

Construye una aplicación que cree varios Jugadores/as. Los jugadores/as podrán ser agregados a un Juego, que mostrará un marcador con las puntuaciones y el ganador/a. La aplicación debe poder agregar o quitar puntos a cada jugador/a para que el marcador cambie. La clase Marcador debe implementar un patrón Singleton como requisito indispensable.


## Observer

Escribe una aplicación que cree diferentes objetos Usuario/a. La aplicación podrá crear diferentes Temas y suscribir a los usuarios/as a ellos. Cuando un Usuario/a agregue un mensaje a un Tema, se enviará una alerta por la consola desde el Tema. También lo mostrarán por consola cada uno de los Usuarios/as que estén suscritos al Tema (recibirán el mensaje). Crea un Tema con un Usuario/a y otro con dos, y muestra la recepción de los mensajes por los usuarios/as. Utiliza el módulo events.

## Middleware

Crea en un archivo inicial una pequeña aplicación que sume, reste y multiplique recibiendo los parámetros en un JSON.
Crea en un archivo externo una clase que almacene middlewares (funciones).
Inserta en la invocación middlewares que hagan el cuadrado, el cubo y la división entre 2 de los operandos iniciales en cada una de las operaciones. Invoca las ejecuciones de la suma, la resta y la multiplicación, de manera que se vayan mostrando por la consola las modificaciones que se van haciendo a los valores antes del resultado final.

## Decorator

Crea un Decorator en un archivo que devuelva una función. Esta función efectuará una conversión de moneda a euros multiplicando por el coeficiente de conversión del archivo adjunto `currency_conversions.json` en función de la divisa original.
Crea una pequeña aplicación que calcule el costo de algunos Artículos en euros a partir de sus divisas iniciales, aplicando diferentes conversiones que utilicen el Decorator del punto anterior.


## Scripts

Para ejecutar los ejercicios, primero ejecuta desde la raíz del directorio. 
```bash
npm install
```
luego utiliza los siguientes scripts en la línea de comandos:

- `npm run n1ex1`: Ejecuta el ejercicio Callback Hell
- `npm run n1ex2`: Ejecuta el ejercicio Singleton
- `npm run n1ex3`: Ejecuta el ejercicio Observer
- `npm run n2ex1`: Ejecuta el ejercicio Middleware
- `npm run n2ex2`: Ejecuta el ejercicio Decorator

## Referencias
- Singleton:
  - [Web con ejemplos de varios diseños de patrones](https://refactoring.guru/design-patterns/singleton)
  -  [Canal de BettaTech: Patrón Sigleton](https://www.youtube.com/watch?v=GGq6s7xhHzY&t=8s)
- TypeScript:
  - [Canal de Midudev: TypeScript desde 0](https://www.youtube.com/watch?v=xtp_DuPxo9Q)
  - [Canal de Holamundo: TypeScript curso intensivo](https://www.youtube.com/watch?v=-xDZwb-PY0M)
  - [Canal de Hdeleon: POO en Typescript](https://www.youtube.com/watch?v=eLVAIxpQotw)