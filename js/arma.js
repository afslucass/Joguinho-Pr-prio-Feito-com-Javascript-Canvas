var imgGun = new Image();
var isloadGun = false

var Gun = {
    WIDTH: 150,
    HEIGH: 85,
    x: 0,
    y: 0,

    load: function(){
        imgGun.src = './img/gun.png'
        imgGun.addEventListener('load', function(){
            isloadGun = true
            if(isloadGun == false){
                errorLoad()
            }
        })
    },
    calculate: function(){

        switch (Player.index_frame) {
            case 0:
                this.x = Player.x + 50
                this.y = Player.y + 60
                break;
        
            case 1:
                this.x = Player.x + 50
                this.y = Player.y + 55
                break;

            case 4:
                this.x = Player.x + 50
                this.y = Player.y + 75
                break;
        
            default:
                break;
        }
    },
    draw: function(){
        ctx.drawImage(imgGun,this.x,this.y,this.WIDTH,this.HEIGH)
    }
}