const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function(){
    let aux = '#'
    while(aux.length < 7){
        const randomNumber = parseInt(Math.random() * hex.length)
        aux += hex[randomNumber]
        console.log(aux)
    }
     color.textContent = aux
     document.body.style.backgroundColor = aux
 })