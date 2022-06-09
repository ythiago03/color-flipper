const colors = ["green", "red", "rgba(133,122,200)", "#f15025", 'white', 'gray', 'violet','lightblue','rgba(143,100,110)'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function(){
   const randomNumber = parseInt(Math.random() * colors.length);
   document.body.style.backgroundColor = colors[randomNumber]
   color.textContent = colors[randomNumber]
})