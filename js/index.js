var canvas = document.querySelector('#canvas')
var ctx = canvas.getContext('2d')

// CAMPO INPUTS
function events(params) {

    window.addEventListener('keydown',function(event){

        if(event.keyCode == 39){
            Player.state = 'RIGHT'
            this.console.log('direita')
        }else{
            if(event.keyCode == 37){
                Player.state = 'LEFT'
                this.console.log('esquerda')
        }}

        if(event.keyCode == 38 && Player.HEIGH+Player.y-20 >= Scene.y_floor ){
            Player.isjump = true
        }

        if(event.keyCode == 32 && Bullet.enable_Shots == true && Bullet.time == 20){
            Bullet.enable_Shots = false
        }
    })
    
    window.addEventListener('keyup', function(event){
        
        if(Player.state == 'RIGHT' && event.keyCode == 37 || Player.state == 'RIGHT' && event.keyCode == 38 || Player.state == 'RIGHT' && event.keyCode == 32){

            Player.state = 'RIGHT'
        }else{
            if(Player.state == 'LEFT' && event.keyCode == 39 || Player.state == 'LEFT' && event.keyCode == 38  || Player.state == 'LEFT' && event.keyCode == 32){

                Player.state = 'LEFT'
        }else{
            Player.state = 'STOPPED'
        }}
        
        this.console.log('soltou')
    })
}

function calculate(params) {
    Player.calculate()
    Scene.calculate()
    Enemy.calculate()
    Bullet.calculate()
    Gun.calculate()
}
function draw(params) {
    Scene.draw()
    Player.draw()
    Enemy.draw()
    Bullet.draw()
    Gun.draw()
}

function load(){
    Player.load()
    Enemy.load()
    Gun.load()
    Scene.load()
    events()
    process()
}

function process(params) {
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
    calculate()
    draw()
    requestAnimationFrame(process)
}

load()

// TRATANDO ERROS
function errorLoad(params) {
    ctx.clearRect(0,0,canvas.width,canvas.heigth)
    ctx.beginPath()
    ctx.font = "30px Arial";
    ctx.fillText("ERRO AO CARREGAR AS IMAGENS... TENTE REINICIAR", 10, 50);
    requestAnimationFrame(errorLoad)
}