var imgScene_Background = new Image();
var isloadScene_Background = false
var imgScene_Floor = new Image();
var isloadScene_Floor = false

var Scene = {
    WIDTH_floor: 80,
    WIDTH_background: canvas.clientWidth,
    HEIGH_floor: 80,
    HEIGH_bachground: canvas.clientHeight,
    x_background: 0,
    x_floor: 0,
    y_background: 0,
    y_floor: canvas.clientHeight - 80,

    load: function(){
        imgScene_Background.src = './img/floresta.jpg'
        imgScene_Floor.src = './img/grama.jpg'

        imgScene_Background.addEventListener('load', function(){
            isloadScene_Background = true
            if(isloadScene_Background == false){
                errorLoad()
            }
        })
        imgScene_Floor.addEventListener('load', function(){
            isloadScene_Floor = true
            if(isloadScene_Floor == false){
                errorLoad()
            }
        })
    },
    calculate: function(){
        
    },
    draw: function(){
        ctx.drawImage(imgScene_Background,this.x_background,this.y_background,this.WIDTH_background,this.HEIGH_bachground)
        for(var i = 0; i < 9; i++){
            ctx.drawImage(imgScene_Floor,this.x_floor+this.WIDTH_floor*i,this.y_floor,this.WIDTH_floor,this.HEIGH_floor)
        }
    }
}