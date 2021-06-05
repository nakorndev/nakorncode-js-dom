const ul = document.getElementById('select')
// const ul = document.querySelectorAll('ul#select > li')

console.log(ul)
console.log(ul.children)
console.log(ul.parentElement)
console.log(ul.parentElement.parentElement)

// for (let el of ul.children) {
//     console.log(el)
// }

const li = document.createElement('li') // <li></li>
li.innerText = 'Item 2.4' // <li>Item 2.4</li>

// <ul id="select"> <li>Item 2.4</li> </ul>
// ul.append(li)
ul.prepend(li)

const lastList = document.querySelector('ul#parent > li:last-child')
lastList.remove()

const copy = document.getElementById('parent').cloneNode(true)
document.getElementById('paste').append(copy)
