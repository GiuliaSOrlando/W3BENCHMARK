/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20
//oppure
const sum1 = 10 + 20

console.log('Esercizio A: ', sum, sum1)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21)
console.log('Esercizio B: ', random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: 'Giulia',
  surname: 'Orlando',
  age: 30
}

console.log('Esercizio C:', me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age
console.log('Esercizio D:', me)

//Se volessi invece rimuovere la proprietà, senza alterare l'oggetto potrei usare questo approccio ad esempio
const {age: _,...me1} = me
console.log('Proprietà rimossa su una copia dell\'oggetto', me1)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ['Python', 'JavaScript']
console.log('Esercizio E:', me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('R')
console.log('Esercizio F:', me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()
console.log('Esercizio G:', me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => Math.floor(Math.random() * 6) + 1
console.log('Esercizio 1: ', dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (num1, num2) => {
  let arr = [num1, num2]
  arr.sort((a, b) => a - b)
  return arr[1]
}

console.log('Esercizio 2: ', whoIsBigger(2,18))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const slitMe = (str) => str.split(' ')
myString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatibus sed architecto neque natus, cupiditate expedita eveniet deleniti eligendi, nulla, aspernatur vitae esse asperiores ipsam quam consequatur voluptatum unde accusamus.'

console.log('Esercizio 3: ', slitMe(myString))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (str, Boolean) => {
  if(Boolean === true){
    str = str.slice(1)
  } else {
    str = str.slice(0, str.length-1)
  }
  return str
}

console.log('Esercizio 4: ', deleteOne('Supercalifragilistichespiralidoso', false), deleteOne('Supercalifragilistichespiralidoso', true))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

// Scusami ma qui mi viene proprio d'istinto di risolverlo con una regex ^^
const onlyLetters = (str) => str = str.replace(/\d+/g, '')

console.log('Esercizio 5: ', onlyLetters("Buongiornissimo caffe111!!1!"))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

/* Anche in questo caso ho usato una regex; ho deciso di scriverne una
ragionevolmente semplice. Questa regex accetta:
 - caratteri alfanumerici, incluso underscore, prima della chiocciola ->
    cioè quelli generalmente considerati parte di una parola (word, da cui w)
    Il + dopo la w significa che ne accetta uno o più
 - la chiocciola @
 - lettere, maiuscole e minuscole, e underscore -> in questo caso non accetta numeri
    Questo perché non mi sembra di ricordare indirizzi email con un dominio contenente numeri
    (anche in questo caso ho messo +, perché accetti uno o più caratteri)
 - dopo il dominio l'unico carattere accettato è il punto
 - infine, alla fine il dominio top-level, per cui accetto solo lettere (maiuscole e minuscole)
    minimo 2 massimo 3 (non ricordo nulla lungo un carattere; so che esistono più lunghi di 3, 
    ma i domini più comuni non sono maggiori di tre)

    Il tutto è circondato da ^ e $, ovvero il simbolo di inizio e di fine della stringa. Se 
    non l'avessi messa mi avrebbe validato come email anche una stringa del genere
    "sono una stringa contenente diverse parole e anche un'email giuliaorlando@gmail.com", cosa
    che va benissimo se voglio individuare un'email all'interno di un testo, ma non è indicata
    per la validazione ad esempio di un input.

*/

const isThisAnEmail = (str) => {
  let emailValidator = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/
  return emailValidator.test(str)
  }

  let myString1 = 'giuliaserenaorlando@outlook.it'

console.log('Esercizio 6: ', myString1, isThisAnEmail(myString1))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = () => {
  const currentDayName = new Date().toLocaleString('default', {weekday: 'long'}) 
  //in questo modo ottengo il nome del giorno, in italiano, per esteso 
  //volendo ottenere la versione breve del nome, posso scrivere {weekday: 'short'}
  return currentDayName
}

console.log(whatDayIsIt())


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (length) => {
  let arr = []
  let totale = 0
  for (let i = 0; i < length; i++) {
   arr.push(dice())
  } 
  console.log('Esercizio 8: Questi sono i valori estratti: ', arr)
  arr = arr.reduce((totale, el) => totale + el, 0)
  return console.log('Questo è il totale della loro somma ',), arr
}

console.log(rollTheDices(10))


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = (str) => {
  let givenDate = Date.parse(str)
  let currentDate = new Date()
  let timeInMS = currentDate - givenDate
  return (Math.ceil(timeInMS / (1000 * 60 * 60 * 24)))
}

console.log('Esercizio 9: dal 10 Marzo 1994 ad oggi sono passati', howManyDays('10 Marzo 1994'), 'giorni')

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = (myBD) => {
  const currentDate = new Date()
  const day = currentDate.getDate()
  const month = currentDate.getMonth()+1
  const date = `${month}-${day}`
  return date === myBD ? true : false
}
console.log('Esercizio 10: ', isTodayMyBirthday('17 Dicembre'))

// Arrays & Oggetti

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = (obj, str) => {
  /* Volevo anche verificare che la stringa inserita fosse una proprietà prima di rimuoverla
  ma non ho trovato il modo di strutturare la funzione in modo che questa parte commentata
  e la parte non commentata fossero funzionanti assieme 

  let keys = Object.keys(obj)
  keys.forEach(function(key){
    if(key, key === str) 
    */
    delete obj[str]
    return obj
    }  

console.log('Esercizio 11: ', deleteProp(movies[0], 'Title'))


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = (arr) => {
  arr.sort((a,b) => b.Year - a.Year)
  return arr[0]
}

console.log('Esercizio 12: ', newestMovie(movies))


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = (arr) => arr.length
console.log('Esercizio 13: ','Questo è il numero di film contenuti nella lista: ', countMovies(movies))


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = (arr) => arr.map(arr => arr.Year)
console.log('Esercizio 14: ','Questo è un array con tutti i titoli ', onlyTheYears(movies))

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = movies.filter((e) => e.Year < 2000)
console.log('Esercizio 15: ', onlyInLastMillennium)

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (arr) => {
  return arr.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0)
}

console.log('Esercizio 16: ', sumAllTheYears(onlyTheYears(movies)))

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* Questa è la mia soluzione al 17^ esercizio. Mi sembra corretta a livello logico, ma la console continua a dirmi
che non può utilizzare includes su qualcosa di undefined.

const searchByTitle = (str, arr) => {
  return arr.filter(movie => movie.Title.includes(str))
}

console.log('Esercizio 17: ', searchByTitle('flies', movies))

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* Per la stessa ragione dell'esercizio 17, non riesco a rendere funzionante la funzione di questo esercizio*

const searchAndDivide = (str, arr) => {
  const matched = []
  matched.push(arr.filter(movie => movie.Title.includes(str)))
  const unmatched = []
  unmatched.push(arr.filter(movie => !movie.Title.includes(str)))
  myObj = {...matched,...unmatched}
}

searchAndDivide('lord', movies)

console.log(myObj) */


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (n) => {
  const remove = movies.filter((el) => movies.indexOf(el) !== n)
  return remove
}
console.log('Esercizio 19: ', removeIndex(12))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const getbyID = (id) => {
  const myElement = document.getElementById(id)
  return myElement
}

getbyID('container')

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const addTdtoAll = () => {
  const allTheTags = document.getElementsByTagName('td')
  return allTheTags
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

 const printTheTable = () => {

 }

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const addBackgroundColor = () => {
  const myLinks = Array.from(document.getElementsByTagName('a'))
  myLinks.forEach((el) => el.style.backgroundColor = '#ff0000')
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addNewEl = () => {
  const parentOl = document.getElementById('myList')
  let newList = document.createElement('li')
  parentOl.appendChild(newList)
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const emptyMyList = () => {
  const myList = document.getElementsByTagName('ul')
  myList.removeChild('li')
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const classTr = () => {
  const allTr = Array.from(document.getElementsByTagName('tr'))
  allTr.forEach((e) => {e.classList.add('test')})
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = (numRow) => {
  let tree = ""

  for (let i=0; i<numRow; i++) {
    tree += "*".repeat(i) + "\n"
  }
  return tree;
}
console.log(halfTree(7))

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = (numRow) => {
  for (let i = 1; i <= numRow; i++) {
    console.log(" ".repeat(numRow - i) + "*".repeat(2 * i - 1));
  }
}

(tree(8))


/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isPrime = num => {
  for(let i=2, s=Math.sqrt(num); i <= s; i++) {
      if(num % i === 0) return false
  }
  return num > 1
}

console.log(isPrime(9973))