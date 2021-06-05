const btn = document.getElementById('btn')
btn.onclick = function () {
    console.log('click! (.onclick)')
}

function testClickAttr() {
    console.log('click! (attr)')
}

const btnListener = document.getElementById('btn-listener')
// btnListener.addEventListener('click', () => {
//     console.log('click! (.addEventListener)')
// }, { once: true })

let count = 0
const handleOnClick = () => {
    console.log('click! (.addEventListener)')
    if (++count >= 5) {
        btnListener.removeEventListener('click', handleOnClick)
    }
}
btnListener.addEventListener('click', handleOnClick)

const inputs = document.getElementsByTagName('input')
for (let input of inputs) {
    input.addEventListener('input', (event) => {
        console.log(event.currentTarget.value)
    })
}
