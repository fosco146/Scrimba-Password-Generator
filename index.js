var digits = prompt("How many digits?");

button1 = document.getElementById("pbutton-1")
button2 = document.getElementById("pbutton-2")
button3 = document.getElementById("pbutton-3")
button4 = document.getElementById("pbutton-4")
let password1 = []
let password2 = []
let password3 = []
let password4 = []
let passwordArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "?"]

function box1(){
for (i = 0; i < digits; i++) {

    index = Math.floor(Math.random() * passwordArray.length + 1)
    
    password1.push(passwordArray[index])
    
    }
    password1 = password1.join(' ')
    button1.innerText = password1
    
}



function box2(){
for (i = 0; i < digits; i++) {

    index = Math.floor(Math.random() * passwordArray.length + 1)
    
    password2.push(passwordArray[index])
    
    }
    password2 = password2.join(' ')
    button2.innerText = password2
}


function box3(){
for (i = 0; i < digits; i++) {

    index = Math.floor(Math.random() * passwordArray.length + 1)
    
    password3.push(passwordArray[index])
    
    }
    password3 = password3.join(' ')
    button3.innerText = password3
}


function box4(){
for (i = 0; i < digits; i++) {

    index = Math.floor(Math.random() * passwordArray.length + 1)
    
    password4.push(passwordArray[index])
    
    }
    password4 = password4.join(' ')
    button4.innerText = password4
    
}
