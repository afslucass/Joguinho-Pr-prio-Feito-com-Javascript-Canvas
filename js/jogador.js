
var imgPlayer = []
var isloadPlayer = []


var Player = {
    WIDTH: 200,
    HEIGH: 200,
    x: 10,
    y: 10,
    velocity: 5,
    state: 'STOPPED', // STOPPED, LEFT, RIGHT
    isjump: false,
    cont_frame: -1,
    time_frame:3,
    index_frame:0,
    gravity: 0,

    load: function(){
        for(let i = 0; i < 6; i++){
            imgPlayer[i] = new Image()
            imgPlayer[i].src = "./img/player/player" + i + ".png"
            
            imgPlayer[i].addEventListener('load', function(){
                isloadPlayer[i] = true
                if( isloadPlayer[i] == false){
                    errorLoad()
                }
            })   
        }
    },
    calculate: function(){
        //ANIMATION SPRITES --------------------------------------------------------------
        if(this.cont_frame < (imgPlayer.length)*this.time_frame){
            this.cont_frame += 1
        }else{
            this.cont_frame = 0
        }

        if(this.cont_frame < (this.time_frame*1)+1){
            this.index_frame = 0
        }else{
            if(this.cont_frame < (this.time_frame*2)+1){
                this.index_frame = 1
            }else{
                if(this.cont_frame < (this.time_frame*3)+1){
                    this.index_frame = 2
                }else{
                    if(this.cont_frame < (this.time_frame*4)+1){
                        this.index_frame = 3
                    }else{
                        if(this.cont_frame < (this.time_frame*5)+1){
                            this.index_frame = 4
                        }
                    }
                }
            }
        }
        //GRAVIDADE

        if(this.HEIGH+this.y-20 < Scene.y_floor ){
            this.y += this.gravity
            this.gravity += 1
        }else{
            this.gravity = 0
        }

        //KEYEVENTS

        switch (this.state) {
            case 'RIGHT':
                this.x += this.velocity
                break;
            case 'LEFT':
                this.x -= this.velocity
                break;
            case 'STOPPED':
                this.x = this.x
                break;
        
            default:
                break;
        }

        //JUMP

        if(this.isjump == true){
            this.y -= 15
            if(this.HEIGH+this.y-20 > Scene.y_floor ){
                this.isjump = false
            }
        }
    },
    draw: function(){
        ctx.drawImage(imgPlayer[this.index_frame],this.x,this.y,this.WIDTH,this.HEIGH)
    }
}