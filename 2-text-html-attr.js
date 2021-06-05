const h1 = document.getElementById('title')
console.dir(h1)

// h1.innerText = 'สวัสดีชาวโลก'
// h1.textContent = 'สวัสดีชาวโลก'

// h1.innerText = '<i>สวัสดีชาวโลก</i>'
// h1.innerHTML = '<i>สวัสดีชาวโลก</i>'

const ul = document.getElementById('list')
console.log(ul.innerText)
console.log(ul.innerHTML)
console.log(ul.outerHTML)

// ul.outerHTML = '<ol><li>Item</li></ol>'

const links = document.querySelectorAll('#list-link a')
console.log(links)

for (let a of links) {
    // a.target = '_blank'
    console.log(a.getAttribute('href')) // เรียกค่า
    a.setAttribute('target', '_blank') // กำหนดค่า
    a.removeAttribute('class') // ลบค่า
    console.log(a.hasAttribute('id')) // ตรวจสอบ (boolean)
}
