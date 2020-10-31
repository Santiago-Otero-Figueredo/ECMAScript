const  data = {
    fronted: 'Santiago',
    backend: 'Gustavo',
    desing: 'Kevin',

}

const entries = Object.entries(data);
console.log(entries)
console.log(entries.length)

const values = Object.values(data)
console.log(values)
console.log(values.length)

const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, '--------'))

const hellorWord = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve("Hello World"), 3000) 
            : reject(new Error('test Error'))            
    })
}

const helloAsync = async () => {
    const hello = await hellorWord();
    console.log(hello)
}

const anotherFunction =async () => {
    try{
        const hello = await hellorWord()
        console.log(hello)
    }catch(error){
        console.log(error)
    }
}

helloAsync()
//anotherFunction()