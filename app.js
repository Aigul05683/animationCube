const board = document.querySelector('#board')
const colors = ['rgba(208, 78, 30, 0.86)', 'rgba(64, 113, 192, 0.86)', 'rgba(208, 30, 172, 0.86)', 'rgba(30, 208, 131, 0.86)', 'rgba(64, 192, 183, 0.86)', 'rgba(208, 30, 172, 0.86)']
const SQUARES_NUMBER = 600

for(let i=0; i<SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=> setColor(square))
    board.append(square)

    square.addEventListener('mouseleave', ()=> removeColor(square))
   
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow= `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow= `0 0 2px #000`
}

function getRandomColor(){
   const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}