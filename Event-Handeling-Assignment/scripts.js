const body = document.querySelector('body');
body.setAttribute('style', 'background-color: coral');
const h1 = document.createElement("H1");
body.appendChild(h1);
h1.innerText = "Hello World";
h1.setAttribute("style", "background-color: gray");
h1.setAttribute("style", "color: white");
h1.setAttribute("style", "font-size: 50px");
h1.innerText = 0;
const buttonEle = document.createElement("button");
body.appendChild(buttonEle);
buttonEle.innerText = "Add";
buttonEle.classList.add("buttonClass");
const deleteBtn = document.createElement("button");
body.appendChild(deleteBtn);
deleteBtn.innerText = "Remove";
deleteBtn.classList.add("deleteBtnClass");


let i = 0;
function addH1() {
    h1.setAttribute("id", i)
    h1.innerText = i;
    i++
}
buttonEle.addEventListener("click", addH1);

function deleteH1() {
    h1.setAttribute("id", i)
    h1.innerText = i;
    i--
}
deleteBtn.addEventListener("click", deleteH1);










