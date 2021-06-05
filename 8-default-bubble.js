const ul = document.querySelector('ul')
const li = document.querySelector('li')
const button = document.querySelector('button')

// event.currentTarget จะแนะนำให้ใช้งาน
ul.addEventListener('click', () => console.log('ul clicked'))
li.addEventListener('click', () => console.log('li clicked'))
button.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log('button clicked')
})

document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(document.querySelector('input[name="username"]').value)
    console.log(document.querySelector('input[name="password"]').value)
})
