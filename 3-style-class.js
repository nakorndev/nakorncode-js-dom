const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

btn1.classList.add('is-link')
btn3.classList.remove('is-medium')

// setInterval(() => {
//     btn3.classList.toggle('is-medium')
// }, 1000)

console.log(btn1.classList.contains('is-danger'))
console.log(btn2.classList.contains('is-danger'))

// .add()
// .remove()
// .toggle()
// .contains()

// btn4.style = 'font-weight: bold; color: red;'
btn4.style.fontWeight = 'bold'
btn4.style.color = 'red'
