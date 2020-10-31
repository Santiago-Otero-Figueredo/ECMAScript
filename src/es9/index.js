const obj = {
    name: 'Santiago',
    age: 25,
    country: 'CO'
}

let {name, ...all} = obj
console.log(all)

const obj2 = {
    name: 'Santiago',
    age: 25,    
}

const obj3 = {
    ...obj2, //---------------------------
    country: 'CO'
}

console.log(obj3)

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout( () => resolve("Hello World"), 3000)
            : reject(new Error("Test Error"))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(reject => console.log(error))
    .finally(() => console.log('Finalizo'))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const macth = regexData.exec('2020-10-30')
const year = macth[1]
const mounth = macth[2]
const day = macth[3]

console.log(year, mounth, day)