function newFunction(name = 'Santiago', age = 25, country = 'CO'){
    console.log(name, age, country)
}

newFunction()
newFunction('Jaime', 30, 'MX')

let hello = "helo"
let word = "word"
let phrase = `${hello} ${word}`
console.log(phrase)

let lorem = `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor
(N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
        No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en 
     los 60s con la creación de las hojas , 
las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`

console.log(lorem)

let person = {
    'name': 'santiago',
    'age': 25,
    'country': 'CO'
}

let {name, age, country} = person
console.log(name, age, country)

let team1 = ['Santiago', 'oscar', 'Julian']
let team2 = ['Andres', 'Diana']

let education = ['David', ...team1, ...team2]

console.log(education)

{
    var globalVar = "Global var"
}

{
    let globalLet = "Global let"
    console.log(globalLet)
}
console.log(globalVar)
//console.log(globalLet)

let name = 'Santiago'
let age = 25

obj = {name, age}
console.log(obj)

const names = [
    {name: 'Santiago', age: 32},
    {name: 'Diana', age: 27}
]

let listOfnames = names.map(item => console.log(item.name))

const helloPromise = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!')
        }else{
            reject('ups!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error))

class calculator{
    constructor(){
        this.valueA = 0
        this.valueB = 0
    }
    sum(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.sum(3, 7))

import {hello} from './module'

console.log(hello());

function* helloWorld(){
    if(true){
        yield 'Hello, '
    }
    if(true){
        yield 'World '
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)


const promise = new Promise((resolve, reject) => {
	const number = Math.floor(Math.random() * 10);

	setTimeout(
		() => number > 5
			? resolve(number)
			: reject(new Error('Menor a 5')),
		1000
	);
});

promise
	.then(number => console.log(number))
	.catch(error => console.error(error));