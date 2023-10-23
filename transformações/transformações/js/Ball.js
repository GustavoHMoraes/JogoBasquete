class Ball{
    constructor(ctx, posicaox, posicaoy, rotacao, s, inx, iny){
        this.ctx = ctx;
        this.posicaox = posicaox;
        this.posicaoy = posicaoy;
        this.rotacao = rotacao;
        this.s = s;
        this.inx = inx;
        this.iny = iny;
    }

    draw(){
        //Translação, rotação, scale e transform
        this.ctx.translate(this.posicaox, this.posicaoy);
        this.ctx.rotate(this.rotacao);
        this.ctx.scale(this.s, this.s);
        this.ctx.transform(1,this.inx,this.iny,1,0,0);

        //bola
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 3;

        this.ctx.beginPath();
        this.ctx.arc(0,0,40,0,Math.PI*2);
        this.ctx.stroke();
        this.ctx.fillStyle = '#f27f05';
        this.ctx.fill();

        //linhas bola
        this.ctx.beginPath();
        this.ctx.moveTo(0,-40);
        this.ctx.lineTo(0,40);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(-40,0);
        this.ctx.lineTo(40,0);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(-30,-25);
        this.ctx.quadraticCurveTo(0,-10,30,-25);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(-30,25);
        this.ctx.quadraticCurveTo(0,10,30,25);
        this.ctx.stroke();
        this.ctx.restore();

        this.ctx.setTransform(1,0,0,1,0,0);
    }

    movimentacao(velocidadex, velocidadey){
        this.posicaox += velocidadex;
        this.posicaoy += velocidadey;

        if(this.posicaox >= 1160){
            this.posicaox = 1160;
            this.inx = 0.3;
        }
        if(this.posicaox <= 40){
            this.posicaox = 40;
            this.inx = 0.5;
        }
        if(this.posicaoy >= 760){
            this.posicaoy = 760;
            this.iny = 0.4;
        }
        if(this.posicaoy <= 40){
            this.posicaoy = 40;
            this.iny = 0.2;
        }

        if(this.posicaox > 40 && this.posicaox < 1160 && this.posicaoy > 40 
            && this.posicaoy < 760){
                this.iny = 0;
                this.inx = 0;
            }
    }

    rodar(angulo){
        this.rotacao += angulo;
        if(this.rotacao >= 6.2){
            this.rotacao = 0;
        }
    }

    scale(tamanho){
        this.s += tamanho;

        if(this.s >= 1.5){
            this.s = 1.5;
        }
        if(this.s <= 0.5){
            this.s = 0.5;
        }
    }
}