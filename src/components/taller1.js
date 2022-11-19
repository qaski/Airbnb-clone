import React from 'react';


const miniCode = `Bienvenidos a Mini Code Lab,
                     hoy explicaremos algunos conceptos de Js 
                     para obtener el máximo partido de React.`;
const name = 'Mini Code Lab';
console.log(`¡Hola! Somos ${name} y estos es un Template Literal`);
//-----

const numberA = 5;
const numberB = 5;
console.log(`La suma de los números ${numberA + numberB}`);

//-----

const card = {
    city: 'Madrid',
    poblation: '6m',
    latitude: '40.463667',
    logitude: '-3.74922'
  };
  
  const htmlCard = `<div>
          <h4>${card.city}</h4>
          <p>Número de habitantes: ${card.poblation}</p>
          <p>Ubicación: ${card.latitude} : ${card.logitude}</p>
     </div>`;
  
  // Ahora lo añadimos al DOM
  document.body.innerHTML = htmlCard;

  //---
  const comicBook = {
    title: 'The Amazing Spiderman',
    authors: ['Steve Ditko', 'Stan Lee'],
    pages: '16',
    description: `Este Comic es el primero de Spiderman en solitario`,
    price: '10000'
  };
  
  const getAuthorTitle = (n) => {
    return n > 1 ? 'autores' : 'autor';
  };
  
  const comicCard = `
      <div>
          <h4>${comicBook.title}</h4>
          <p>
              ${getAuthorTitle(comicBook.authors.length)}:
            ${comicBook.authors.map((author) => `<span>${author}</span>`).join(' y ')}
          </p>
      </div>`;
  
  // Ahora lo añadimos al DOM
  document.body.innerHTML = comicCard;

  //---

  const oldUser = (name, lastName, image) => {
    return {
      name: name,
      lastName: lastName,
      image: image,
      timestamp: Date.now()
    };
  };
  
  console.log(oldUser('Bruce', 'Wayne', 'url'));

  //---

  const newUser = (name, lastName, image) => {
    return {
      name,
      lastName,
      image,
      timestamp: Date.now()
    };
  };
  
  console.log(newUser('Clark', 'Kent', 'url'));

  //---

  const oldUserFunction = (name, lastName, image) => {
    return {
      name,
      lastName,
      image,
      timestamp: Date.now(),
      saveData: function () {
        console.log('Guardando...');
      }
    };
  };
  
  const userOld = oldUserFunction('Bruce', 'Wayne', 'url');
  
  userOld.saveData();

  //---
  const newUserFunction = (name, lastName, image) => {
    return {
      name,
      lastName,
      image,
      timestamp: Date.now(),
      saveData() {
        console.log('Guardando...');
      }
    };
  };
  const userNew = newUserFunction('Clark', 'Kent', 'url');
  
  userNew.saveData();
  //---
  function getNameTraditional() {
    return 'Mini Code Lab';
  }
  
  const getNameArrow = () => {
    return 'Mini Code Lab';
  };
  
  const nameArrow = getNameArrow();
  
  console.log(nameArrow);
  //---

  // Ejemplo de Return Implícito (omitiendo el return)
const getNameNoReturn = () => 'Mini Code Lab';

const nameNoReturn = getNameNoReturn();

console.log(nameNoReturn);
//---
const myHero = () => ({ name: 'Logan', power: 100 });

//---
const multiplication = (x) => x * 2;

// Podemos omitir el paréntesis si es un solo argumento 🔥
// const multiplication = x => x * 2;


//---
const multiplicationTwoParams = (a, b) => a * b;

const resultTwoParams = multiplicationTwoParams(2, 2);
//---
const multiplicationDefaultParam = (a, b = 2) => a * b;

const resultOne = multiplicationDefaultParam(2); // 4
const resultTwo = multiplicationDefaultParam(2, 5); // 10
//---
const multiplicationGenerator = function (a) {
    return function (b) {
      return b * a;
    };
  };
  
  const result = multiplicationGenerator(5);
  const finalCount = result(10); // Devuelve 50

//---
const xmenList = ['Ciclops', 'Beast', 'Angel', 'Marvel-girl'];
const newXmenList = ['Wolverine', 'NightCrawler', 'Storm'];

// Antes se usaba el concat y ahora ...
const myMutants = [...xmenList, ...newXmenList];

// Se puede usar también para copiar un array
const xmenCopy = [...xmenList];

// se usa para jugar con tu array sin modificarlo
const reversedXmenList = [...xmenList].reverse();

// No se ha modificado
console.log(xmenList);
console.log(reversedXmenList);

//---

const marvelCharacter = {
    nameHero: {
      heroName: 'Doctor Strange',
      humanName: 'Stephen Vincent Strange'
    },
    team: ['Avengers', 'Iluminati']
  };
  
  // Destructuring
  const { nameHero, team } = marvelCharacter;
  
  // Podemos acceder a las propiedades sin el marvelCharacter -> ya asignado.
  console.log(name.heroName, name.humanName);
  console.log(team[0], team[1]);
  
  // Destructuring
  const { heroName, humanName } = marvelCharacter.name;
  
  console.log(heroName);
  console.log(humanName);

//---

let firstName = null;
let lastName = null;
let nickName = 'Supercoder';

// Muestra el primer valor definido:
alert(firstName ?? lastName ?? nickName ?? 'Anonymous'); // Supercoder