const box = document.querySelector('.box')

console.log('.clientWidth:', box.clientWidth)
console.log('.clientHeight:', box.clientHeight)

console.log('.offsetWidth:', box.offsetWidth)
console.log('.offsetHeight:', box.offsetHeight)

console.log('.offsetLeft:', box.offsetLeft)
console.log('.offsetTop:', box.offsetTop)

setInterval(() => {
    console.log('.scrollTop:', box.scrollTop)
    console.log('.scrollHeight:', box.scrollHeight)
}, 2000)
