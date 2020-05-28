const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");
let line_array = [];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Line{
    constructor(x,y,y_end,color,velocity_y){
        this.x = x;
        this.y = y;
        this.y_end = y_end;
        this.color = color;
        this.velocity_y = velocity_y;
    }
    drawLines(){        
        c.beginPath();
        c.moveTo(this.x,this.y);
        c.lineTo(this.x,this.y+this.y_end);
        c.strokeStyle = this.color;
        c.stroke();
        c.closePath();
    }
    update(){
         if(this.y>innerHeight){
            this.y = 0;
            
        }
        if(this.y>innerHeight - 400){
            this.y += this.velocity_y+3;
            c.lineTo(this.x,this.y+15);
        }
       this.y += this.velocity_y;
        this.drawLines();
    }    
}
function init(){
    for(let i=0; i<400; i++){
        let x = getRandomIntInclusive(0,innerWidth);
        let y = getRandomIntInclusive(0,innerHeight);
        let y_end = getRandomIntInclusive(0,15);
        let velocity_y = 2;
        let color ="deepskyblue";
        line_array.push(new Line(x,y,y_end,color,velocity_y));
     }
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight)
    line_array.forEach((line)=>line.update());
}
function main(){
    init();
    animate();
}
main();

