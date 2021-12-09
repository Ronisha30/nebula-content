const container = document.createElement("div");
const body = document.querySelector('body');
body.appendChild(container);
container.classList.add('styles');

for(let i = 0; i <10; i++){
    const box = document.createElement('div');
    box.className = "colorBox"
    container.appendChild(box);
}

const divs = document.querySelectorAll('.colorBox')
const colors = ['green', 'navy', 'orange', 'pink',]

divs.forEach(div => {
    const randomNum = Math.floor(Math.random() * 4)
    div.style.backgroundColor = colors[randomNum]
    div.innerText= colors[randomNum]
})

