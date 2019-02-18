let sum = process.argv.slice(2).reduce((acc, x) => acc + Number(x), 0)
console.log(sum)
