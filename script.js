//Iteration#1 - Mix for e includes --------------------------------
// Dado el siguiente javascript usa for ... of para recorrer el array de películas, 
//genera un nuevo array con las categorías de las películas e imprime por consola el 
//array de categorías. Ten en cuenta que las categorías no deberían repetirse. 
//Para filtrar las categorías puedes ayudarte de la función .includes()

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let comedyFilms = [];
let adventureFilms = [];
let actionFilms = [];
let thrillerFilms = [];
let animationFilms = [];

for (element of movies) {

    if (element.categories.includes("comedia")){

        comedyFilms.push(element);
    }

    if (element.categories.includes("aventura")){

        adventureFilms.push(element);
    }

    if (element.categories.includes("acción")){

        actionFilms.push(element);
    }

    if (element.categories.includes("thriller")){

        thrillerFilms.push(element);
    }

    if (element.categories.includes("animación")){

        animationFilms.push(element);
    }
};


let category = prompt("¿Qué categoría de película estás buscando?");

if (category === "comedia") {
    
    for (i=0; i< comedyFilms.length; i++) {

        console.log(`-----------Película ${i+1}:`)
        for (const [key, value] of Object.entries(comedyFilms[i])) {
        
            console.log(`${key}: ${value}`);
        }
    }
};

if (category === "aventura") {
    
    for (i=0; i< adventureFilms.length; i++) {

        console.log(`-----------Película ${i+1}:`)
        for (const [key, value] of Object.entries(adventureFilms[i])) {
        
            console.log(`${key}: ${value}`);
        }
    }
};

if (category === "acción") {
    
    for (i=0; i< actionFilms.length; i++) {

        console.log(`-----------Película ${i+1}:`)
        for (const [key, value] of Object.entries(actionFilms[i])) {
        
            console.log(`${key}: ${value}`);
        }
    }
};

if (category === "thriller") {
    
    for (i=0; i< thrillerFilms.length; i++) {

        console.log(`-----------Película ${i+1}:`)
        for (const [key, value] of Object.entries(thrillerFilms[i])) {
        
            console.log(`${key}: ${value}`);
        }
    }
};

if (category === "animación") {
    
    for (i = 0; i < animationFilms.length; i++) {

        console.log(`-----------Película ${i+1}:`)
        for (const [key, value] of Object.entries(animationFilms[i])) {
        
            console.log(`${key}: ${value}`);
        }
    }
};