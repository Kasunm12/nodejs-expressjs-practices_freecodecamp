// CommonJS ,every file is module (by defsult)
// Modules - Encapsulated Code (only share minimum)
//const names = require('./4-names')
//const sayHi = require('./5-utils')
//const data = require('./6-alternative-flavor')
//require(`./7-mind-grenade`)
//require(`./8-os-module`)
//require(`./9-path-module`)
// const {readFileSync,writeFileSync} = require('fs');
// const http = require('http');

// const server = http.createServer((req, res) => {
//     //console.log(req);
//     if (req.url === '/') {
//         res.end('Welcome to our home page')
//     }
//     if (req.url == '/about') {
//         res.end('Here is our short history')
//     }
//     res.end(`
//     <h1>Oops!</h1>

//     <p>We can't seem to find the page you are looking fpr</p>
//     <a href="/">Back Home</a>
//     `)
//     //res.write()
//     //res.end()
// })

// server.listen(5000)

// const _= require('lodash');
// const items = [1,[2,[3,[4]]]]
// const newItems =_.flattenDeep(items)
// console.log(newItems);
// console.log('kasun weerasekara');

// 
const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))


// const { readFile, writeFile } = require('fs')

// console.log('started a first task')
// // CHECK FILE PATH!!!!
// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(result)
//   console.log('completed first task')
// })
// console.log('starting next task')

// const first = readFileSync('./content/first.txt','utf8')
// const second = readFileSync('./content/second.txt','utf8')
// writeFileSync(
//     './content/result-sync.txt',
//     `Here is the result : ${first}, ${second}`,
//     { flag:'a'}
// )
//console.log(first,second);
//console.log(data);
// sayHi ('susan')
// sayHi (names.john)
// sayHi (names.peter)


//npmjs.com
//npm -global command,comes with node
//npm --version
//local dependency - use it only in this particular project
//npm i <packageName>
//global dependency -use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)
