const arr = [
    { nombre: "Jugador1", puntuacion: 25 },
    { nombre: "Jugador2", puntuacion: 10 },
    { nombre: "Jugador3", puntuacion: 42 },
    { nombre: "Jugador4", puntuacion: 17 },
  ];
  
  arr.sort((a, b) => a.puntuacion - b.puntuacion);
  
  console.log(arr);