var imgEnemy = new Image();
var isloadEnemy = false

var Enemy = {
    WIDTH: 300,
    HEIGH: 300,
    x: 450,
    y: -100,
    isjump: false,
    gun_fire:1,
    gravity: 0,
    forceJump: 20,
    timeJump: 100,
    life: 100,
    state: 'VIVO', // VIVO, MORTO

    load: function(){
        imgEnemy.src = './img/enemy.gif'

        imgEnemy.addEventListener('load', function(){
            isloadEnemy = true
            if(isloadEnemy == false){
                errorLoad()
            }
        })
    },
    calculate: function(){
        if(this.WIDTH+this.y-20 < Scene.y_floor){
            this.y += this.gravity
            this.gravity += 1
        }else{
            this.gravity = 0
        }
        
        // JUMP

        if(this.state == 'VIVO'){
            this.timeJump -= 1
            if(this.timeJump < 0){
                this.y -= this.forceJump
                if(this.WIDTH+this.y-20 > Scene.y_floor){
                    this.timeJump = 100
                }
            }  
        }

        // LIFE AND DAMAGE

        if(this.life <= 0){
            this.state = 'MORTO'
        }
    },
    draw: function(){
        if(this.state == 'VIVO'){
            ctx.drawImage(imgEnemy,this.x,this.y,this.WIDTH,this.HEIGH)
        }else{
            ctx.beginPath()
            ctx.font = '50px serif'
            ctx.fillStyle = 'red'
            ctx.fillText('Morreu', this.x + 50, this.y + 100)
        }
    }
}