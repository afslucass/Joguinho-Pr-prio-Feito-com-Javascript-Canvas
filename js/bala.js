var Bullet = {
    enable_Shots: true,
    index_shots_x: [],
    index_shots_y: [],
    WIDTH: 20,
    HEIGH: 10, 
    x: -100,
    y: 0,
    velocity: 8,
    time:20,

    calculate: function(){
        if(this.enable_Shots == false){
            this.index_shots_x.push(Player.x + 190)
            this.index_shots_y.push(Player.y + 90)
            this.time = 0
            this.enable_Shots = true
        }

        for(let i = 0; i < this.index_shots_x.length; i++){
            if(this.index_shots_x[i] > canvas.clientWidth){
                this.index_shots_x.splice(i,1)
                this.index_shots_y.splice(i,1)
            }

            this.index_shots_x[i] += this.velocity
            this.index_shots_y[i] = this.index_shots_y[i]

            if(this.index_shots_x[i] + this.WIDTH > Enemy.x && this.index_shots_y[i] + this.HEIGH > Enemy.y && this.index_shots_y[i] < Enemy.y + Enemy.HEIGH){
                Enemy.life -= 15
                this.index_shots_x.splice(i,1)
                this.index_shots_y.splice(i,1)
                console.log(Enemy.life)
            }
        }
        if(this.time < 20){
            this.time += 1
        }

    },
    draw: function(){
        for(let i = 0; i < this.index_shots_x.length; i++){
            ctx.fillRect(this.index_shots_x[i],this.index_shots_y[i],this.WIDTH,this.HEIGH)
        }
    }
}