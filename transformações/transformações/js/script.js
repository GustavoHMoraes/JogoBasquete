const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ball = new Ball(ctx, 50,50,0,1,0,0);
const quadra = new Quadra(ctx);

var velocidadex = 0;
var velocidadey = 0;

function moverAutomatico(){
    ctx.clearRect(0,0,1200,800);

    //Mascara de recorte
    ctx.beginPath();
    ctx.arc(ball.posicaox,ball.posicaoy,300,0,Math.PI*2);
    ctx.stroke();
    ctx.save();

    //Clippin Path
    ctx.clip();
    quadra.draw();
    ball.draw();
    ctx.restore();


    ball.movimentacao(velocidadex,velocidadey);
    ball.rodar(0.07);
    requestAnimationFrame(moverAutomatico);
}

document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowLeft'){
        velocidadex = -5;
        velocidadey = 0;
    }
    if(event.key === 'ArrowRight'){
        velocidadex = 5;
        velocidadey = 0;
    }
    if(event.key === 'ArrowUp'){
        velocidadey = -5;
        velocidadex = 0;
    }
    if(event.key === 'ArrowDown'){
        velocidadey = 5;
        velocidadex = 0;
    }

    if(event.key === 'w' || event.key === 'W'){
        ball.scale(0.1);
    }
    if(event.key === 's' || event.key === 'S'){
        ball.scale(-0.1);
    }
});

moverAutomatico();