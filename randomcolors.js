const randomColor = require("randomcolor");
a = []
for (let i = 0; i < 100; i++) {
    a.push(Math.floor(Math.random() + 0.5) === 0 ? "white" : `${randomColor()}`)
}
console.log(a)