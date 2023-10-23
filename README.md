# JogoBasquete
Carlos Alarcon e Gustavo Henrique

Criamos um Jogo sobre basquete para demonstrar Translação, rotação, escala, transform e clipping path no javaScript.

# Códigos

# Translate

O código define uma classe chamada "Ball" que representa uma bola de basquete. A classe possui um construtor que inicializa os atributos da bola, como sua posição (posicaox e posicaoy), rotação (rotacao), escala (s) e valores iniciais de velocidade nos eixos x e y (inx e iny).

A função "draw" é responsável por desenhar a bola e ela começa com uma transformação de translação para a posição da bola (this.posicaox, this.posicaoy).

<img src='img/ballTR.png' />
<img src='img/ballMV.png' />

A função "movimentacao" atualiza a posição de uma bola com base nas velocidades fornecidas nos eixos x e y, verifica se a bola atingiu os limites da tela e ajusta as velocidades iniciais para simular colisões com as bordas da tela.

# Rotate

A linha "this.ctx.rotate(this.rotacao);" está aplicando uma rotação ao desenho usando o ângulo de rotação especificado em "this.rotacao".

<img src='img/ballR.png' />
<img src='img/ballRD.png' />

A função "rodar" aumenta o ângulo de rotação da bola ("this.rotacao") adicionando o valor "angulo" fornecido como argumento. Em seguida, verifica se o ângulo de rotação ultrapassou um limite de 6.2 (um valor aproximado de 360 graus em radianos)

# Scale

A linha "this.ctx.scale(this.s, this.s);" está aplicando uma escala ao desenho. Isso significa que qualquer desenho subsequente feito no contexto será ampliado ou reduzido pelo fator de escala "this.s" ao longo dos eixos x e y. 

<img src='img/ballSC.png' />
<img src='img/ballSL.png' />

A função "scale" ajusta o fator de escala da bola ("this.s") adicionando o valor "tamanho" fornecido como argumento. Em seguida, a função verifica se o fator de escala excedeu os limites de 1,5 (ampliação máxima) ou 0,5 (redução máxima).

# Tranform

Esta linha de código aplica uma transformação afim ao contexto de desenho, potencialmente inclinando a bola nos eixos x e y, mas sem alterar sua escala, e faz com que, a bola, se tranforme toda vez que se colide com a borda.

<img src='img/ballTM.png' />

# ClippingPath

A função "moverAutomatico" apaga o contexto de desenho, define um círculo como uma máscara de recorte ao redor da bola, desenha objetos apenas dentro dessa área e, em seguida, move a bola automaticamente, fazendo-a girar e inicia uma animação em loop para atualização contínua.

<img src='img/scriptcp.png' />
<img src='img/quadra.png' />

# Resultado



# Codigos do git
