class Quadra{
    constructor(ctx){
        this.ctx = ctx;
    }

    draw(){
        this.ctx.fillStyle = '#ffd2a3';
        this.ctx.fillRect(0,0,1200,800);

        //linha meio quadra
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 6;
        this.ctx.beginPath();
        this.ctx.moveTo(600,0);
        this.ctx.lineTo(600,800);
        this.ctx.stroke();

        //circulo meio quadra
        this.ctx.beginPath();
        this.ctx.arc(600,400,80,0,Math.PI*2);
        this.ctx.stroke();

        //arco esquerda
        this.ctx.beginPath();
        this.ctx.arc(0,400,200,0,Math.PI*2);
        this.ctx.stroke();

        //arco direita
        this.ctx.beginPath();
        this.ctx.arc(1200,400,200,0,Math.PI*2,true);
        this.ctx.stroke();
    }
}