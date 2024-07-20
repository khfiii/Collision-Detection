const board = document.querySelector('.board');

const box1 = document.querySelector('.object-1'); 
const box2 = document.querySelector('.object-2'); 

let defaultPositionBox2 = box2.getBoundingClientRect(); 

let cordinate = {
    x: 0, 
    y: 0
}; 

board.addEventListener('mousemove', (event)=>{
    cordinate.x = event.x;
    cordinate.y = event.y; 
    moveBox1();
})

function moveBox1(){
    let newLeft = cordinate.x - (box1.clientWidth / 2 ); 
    let newTop = cordinate.y - (box1.clientHeight / 2 ); 

    if(newLeft < 0){
        newLeft = 0; 
    }

    if(newLeft + box1.clientWidth > board.clientWidth){
        newLeft = board.clientWidth - box1.clientWidth; 
    }

    if(newTop < 0){
        newTop = 0;     
    }

    if(newTop + box1.clientHeight > board.clientHeight){
        newTop = board.clientHeight - box1.clientHeight; 
    }

    box1.style.left = newLeft + 'px'; 
    box1.style.top = newTop + 'px'; 

    let x = box1.getBoundingClientRect().x + box1.clientWidth; 
    let y = box1.getBoundingClientRect().y + box1.clientHeight; 
    let box2Position = box2.getBoundingClientRect(); 

    if( x >= box2Position.x && 
        x - box1.clientWidth <= box2Position.x + box2.clientWidth &&
        y >= box2Position.y &&
        y - box1.clientHeight <= box2Position.y + box2.clientHeight
    ){
        box1.style.backgroundColor = 'red'; 
    }else{
        box1.style.backgroundColor = 'yellow'; 

    }

    // from left 
    // console.log(x >= box2Position.x);

    // // from top
    // console.log(y >= box2Position.y);

    // // from right
    // console.log(x - box1.clientWidth <= box2Position.x + box2.clientWidth);

    // from bottom
    // console.log(box1.getBoundingClientRect().y <= box2Position.y + box2.clientHeight);

} 