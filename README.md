# JogoBasquete
Carlos Alarcon e Gustavo Henrique

Criamos um Jogo sobre basquete para demonstrar Translação, rotação, escala, transform e clipping path no javaScript.

# Códigos

# Translate

O código define uma classe chamada "Ball" que representa uma bola de basquete. A classe possui um construtor que inicializa os atributos da bola, como sua posição (posicaox e posicaoy), rotação (rotacao), escala (s) e valores iniciais de velocidade nos eixos x e y (inx e iny).

A função "draw" é responsável por desenhar a bola e ela começa com uma transformação de translação para a posição da bola (this.posicaox, this.posicaoy).

![ballTR](https://github.com/GustavoHMoraes/JogoBasquete/assets/127853014/432b409d-cd84-46db-bc42-fb32d2faa37e)

![ballMV](https://github.com/GustavoHMoraes/JogoBasquete/assets/127853014/93242dd0-d9d1-4b96-a82c-f57e0a94b494)

A função "movimentacao" atualiza a posição de uma bola com base nas velocidades fornecidas nos eixos x e y, verifica se a bola atingiu os limites da tela e ajusta as velocidades iniciais para simular colisões com as bordas da tela.

# Rotate

A linha "this.ctx.rotate(this.rotacao);" está aplicando uma rotação ao desenho usando o ângulo de rotação especificado em "this.rotacao".

![ballR](https://github.com/GustavoHMoraes/JogoBasquete/assets/127853014/d06a84fb-a399-4d9e-b5e4-28599e5c0a84)

![balRD](https://github.com/GustavoHMoraes/JogoBasquete/assets/127853014/45a58c90-cf27-4a86-8087-db347ee1c136)

A função "rodar" aumenta o ângulo de rotação da bola ("this.rotacao") adicionando o valor "angulo" fornecido como argumento. Em seguida, verifica se o ângulo de rotação ultrapassou um limite de 6.2 (um valor aproximado de 360 graus em radianos)

# Scale

A linha "this.ctx.scale(this.s, this.s);" está aplicando uma escala ao desenho. Isso significa que qualquer desenho subsequente feito no contexto será ampliado ou reduzido pelo fator de escala "this.s" ao longo dos eixos x e y. 

![ballSC](https://github.com/GustavoHMoraes/JogoBasquete/assets/127853014/7f2e480e-ce07-4127-8577-15b484b593f2)
![ballSL](https://github.com/GustavoHMoraes/JogoBasquete/assets/127853014/0d281a71-73b0-4a27-b539-68343ba369ab)


A função "scale" ajusta o fator de escala da bola ("this.s") adicionando o valor "tamanho" fornecido como argumento. Em seguida, a função verifica se o fator de escala excedeu os limites de 1,5 (ampliação máxima) ou 0,5 (redução máxima).

# Tranform

Esta linha de código aplica uma transformação afim ao contexto de desenho, potencialmente inclinando a bola nos eixos x e y, mas sem alterar sua escala, e faz com que, a bola, se tranforme toda vez que se colide com a borda.

![ballTM](https://github.com/GustavoHMoraes/JogoBasquete/assets/127853014/6602ce92-5e79-4215-8f5c-a5020a94eff7)


# ClippingPath

A função "moverAutomatico" apaga o contexto de desenho, define um círculo como uma máscara de recorte ao redor da bola, desenha objetos apenas dentro dessa área e, em seguida, move a bola automaticamente, fazendo-a girar e inicia uma animação em loop para atualização contínua.

![scriptcp](https://github.com/GustavoHMoraes/JogoBasquete/assets/127853014/c9b2cc57-8a57-4a55-a2e1-511208b028eb)
![quadra](https://github.com/GustavoHMoraes/JogoBasquete/assets/127853014/fe758717-48f5-480a-b38c-45401f9577cb)


# Resultado

https://drive.google.com/file/d/1HZADo11XIBI8S6fBhD6aFVuhJx9QnZh2/view?usp=share_link

# Codigos do git

![git](https://github.com/GustavoHMoraes/JogoBasquete/assets/127853014/d4a7ea09-4c68-4ece-a11d-28d8e5719f6d)

# Diagrama de Classes
![classes drawio](https://github.com/GustavoHMoraes/JogoBasquete/assets/127853014/66b33c22-c130-4fcc-8d4e-6e5c30cb6ab3)



