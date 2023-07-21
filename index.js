const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: ["Muzzarella", "Tomate", "Queso Azul", "Parmesano", "Roquefort",],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

console.log('~ ~ ~ ~ ~ Actividad A  ~ ~ ~ ~ ~');

const idPar = pizzas.filter( (pizzas) => {
  return pizzas.id % 2 === 0;
});

idPar.forEach( (pizzas) => {
  console.log(`La ${pizzas.nombre} tiene id par.`);
});

console.log('~ ~ ~ ~ ~ Actividad B  ~ ~ ~ ~ ~');

const precioMenor = pizzas.filter( (pizzas) => {
  return pizzas.precio < 600;
});

precioMenor.forEach( (pizzas) => {
  console.log(`La ${pizzas.nombre} tiene un valor de $${pizzas.precio}.`);
})

console.log('~ ~ ~ ~ ~ Actividad C  ~ ~ ~ ~ ~');

pizzas.forEach( (pizzas) => {
  inicialMayus = pizzas.nombre.charAt(0).toUpperCase();
  residuoNombre = pizzas.nombre.slice(1);
  pizzas.nombre = inicialMayus + residuoNombre;
  console.log(`${pizzas.nombre} - $${pizzas.precio}`);
});

console.log('~ ~ ~ ~ ~ Actividad D  ~ ~ ~ ~ ~');

pizzas.forEach( (pizzas) => {
    console.log(`${pizzas.nombre}: ${pizzas.ingredientes.join(', ')}`);
});
