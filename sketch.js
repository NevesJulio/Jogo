function setup() {
  createCanvas(700, 300);
} 


var tanjirogeral
var speed= 0
var tanjiro
var kamado
var xtanjiro=150
var ytanjiro=20
var esquerda
var lado = 0
var ponto = 0
var xdemonio = 300
var veloDemonio = 2
var ydemonio = 210
var colisão = 1
var i3 = 0
var i4 = 0
var cont1 =0
var cont2 =0
var vidas = 3
var tela = 1

//Variável projétil 
var xprojetil = [], 
    yprojetil = [],  
    stepyprojetil = [],
    stepxprojetil = 3;

for(varia=0; varia<6; varia++){
   stepyprojetil[varia] = Math.random(0,1)*6
}
//


//variável pulo
var rapidez = 2
var pulo = false
var direção =1
var poderdePulo = 14
var velocidadedeQueda = 3
var alturaMinima = 180
var contadorPulo = 0
var alturaMax = 0
//

//Variável de tempo
var inicioJogo = true
var tempoDecorrido
var tempoInicial
var tempoCriacaoInimigo = 0
//

//variável da bola
var xbola = 370
var ybola = 270

//


projeteis = []
zenitsu = []
zenitsuEsquerda = []


function preload(){
  tanjiro = loadImage("Sprites/sprite_00.png")
  esquerda=loadImage("Sprites/sprite_invertido (2).png")
  kamado = loadImage("Sprites/tanjiro (4).gif")
  
//definindo o vetor do zenitsu
  for(i=0; i<=4; i++){
    zenitsu[i] = loadImage("Sprite_Zenitsu/sprite_zenitsu_"+i+".png")
    zenitsuEsquerda[i] = loadImage("Zenitsu_Esquerda/sprite_invertido_"+i+".png")
  
  }
  
} 

p1 = zenitsu[0]

colisao=1



function draw() {
if(tela == 3){
     background(220);

if(tela == 1)
colisaoDemonio()
 
text("vidas:"+vidas, xtanjiro-130, 10)
  

  demonio()

if(colisaoDemonio()){
  if(Ataque()==true){
    xdemonio = -25
    ydemonio = 0
    
  }
  else{
    ytanjiro = 20
    xtanjiro = 0
    vidas = vidas - 1
    
  }
}

DesenhoProjetil(6)
tempo()
/*
line(xtanjiro+25, 50, xtanjiro+25, 400)
  
line(xtanjiro+90, 50, xtanjiro+90, 400)
  
line(20, ytanjiro, 400, ytanjiro)
  
line(20, ytanjiro+100, 400, ytanjiro+100)
*/
function keyPressed(){
  
    return keyCode 
} 
  






if(keyPressed()== LEFT_ARROW){
//imagem(esquerda,xtanjiro, ytanjiro,0.5);
p1 = zenitsuEsquerda[0] 
}
else if(keyPressed()== RIGHT_ARROW){
  
//imagem(zenitsu[0],xtanjiro, ytanjiro,0.5);  
/*imagem(zenitsu[parseInt(i3)],xtanjiro, ytanjiro,0.5);*/
p1 = zenitsu[0]
}
else{
//imagem(tanjiro,xtanjiro, ytanjiro,0.5);
p1 = zenitsuEsquerda[0]
}
  
  





  gravidade()
  
  push()
rect(0,280, 700, 15)
  pop()
xbola= xbola-1
if(xbola<xtanjiro+20 && keyPressed()==DOWN_ARROW) {
  
  ponto = ponto+1
}
else{
ellipse(xbola,ybola,15,15)

}  
function colisão(x,y,largx,largy){
  if((x+largx)>xtanjiro && 
     (x-largx)<xtanjiro+60 && 
     (y-largy)<(ytanjiro) && 
     (y+largy)>(ytanjiro+100)){
    
    return true
  }
  else{
    return false
  }
  
}
function bola(colisão){
    if(colisão) {
      if(keyPressed()==DOWN_ARROW){
        ponto = ponto+1
      }
      else{//dano
         
      }
}
    else{
      ellipse(xbola,ybola,15,15)
    }
      
  }
  
text("ponto= "+ ponto, 15, 15)
text("x= "+ mouseX +"\n"+ "y="+mouseY , 15, 35)
  

  
  
//movimentação 

andar()  
 
gravidade()

  
//aparência

  
//colisão  


   }
/*escolha personagem*/else if(tela == 1){
imagem(zenitsu[0], 450, 140, 0.60)
imagem(tanjiro, 340, 10, 0.60)  
}
}
function gravidade(){
  
  
if(pulo == true){
  if(ytanjiro<=alturaMax || contadorPulo >= poderdePulo){
    if(ytanjiro>=alturaMinima){
      ytanjiro=alturaMinima
    }//Parar quando chegar no chão
    else{
      rapidez = velocidadedeQueda
    }//continuar caindo enquanto não char no chão
   
    
  }
  else{
   rapidez =  -poderdePulo
   contadorPulo++
}
  }
else{
  rapidez = velocidadedeQueda
  }
  

    
  
//parado no chão   
if(ytanjiro>=alturaMinima && pulo==false){
      
      ytanjiro= ytanjiro
      contadorPulo = 0
    } 
//caindo
else{
    ytanjiro= ytanjiro + (rapidez*direção)
    }

} 

function andar(){
  if (keyIsDown(LEFT_ARROW)) {
    if((xtanjiro+15)>0){
    xtanjiro -= 5;
    }
   cont2 += 0.12
  if(cont2>4){
    cont2=0
  }
  
imagem(zenitsuEsquerda[parseInt(cont2)],xtanjiro, ytanjiro,0.5); 
  }
  
else if (keyIsDown(RIGHT_ARROW)) {
  if((xtanjiro+80)<width){
    xtanjiro += 5;
    }
   
  cont1 += 0.12
  if(cont1>4){
    cont1=0
  }
  
imagem(zenitsu[parseInt(cont1)],xtanjiro, ytanjiro,0.5); 
  }

else if(keyIsDown(DOWN_ARROW)){
    imagem(kamado,xtanjiro, ytanjiro,0.5)
  }
else{
  imagem(p1,xtanjiro, ytanjiro,0.5)
    
  }
  
if(keyIsDown(UP_ARROW)) {
    pulo = true
  }
else{
    pulo = false
  }
  
}
//Desenhar imagem

function imagem(arquivo,x,y,tamanho){
largImg = arquivo.width * tamanho
altImg = arquivo.height * tamanho
image(arquivo,x,y, largImg, altImg)

  
  
}

function demonio(){
xdemonio=xdemonio+veloDemonio
  
  if(xdemonio>=500 || xdemonio<=200){
    veloDemonio = veloDemonio*(-1)
  }
rect(xdemonio, ydemonio, 25, 70)

}


function colisaoDemonio(){
 if((xdemonio<(xtanjiro+90) && ydemonio<(ytanjiro+105) &&  (xtanjiro+90)<(xdemonio+25)) || (xdemonio+25)>(xtanjiro+40) && ydemonio<(ytanjiro+105) && (xtanjiro+40)>(xdemonio)){
    colisao = 0
    return true
}
  
}

function Ataque(){
  if(keyIsDown(DOWN_ARROW)){
    return true
  }
  else{
    return false
  }
}

function letras(argumento,x, y, tamanho, cor){
   
push();
fill(cor)
textStyle(BOLD)
textSize(tamanho)
text(argumento,x,y)
pop();
  
}

function tempo(){
tempoDecorrido = ((millis()-tempoInicial)/1000)
if(inicioJogo){
  inicioJogo = false
  tempoInicial = millis()
}  
  
letras(tempoDecorrido.toFixed(1), 50, 50, 35, "#000000"); 
}


function DesenhoProjetil(p){
  if(tempoDecorrido-tempoCriacaoInimigo>=p){
    for(i5=0; i5<6; i5++){
      xprojetil[i5] = xdemonio 
      yprojetil[i5] = ydemonio
      stepyprojetil[varia] = Math.random(0,1)*6
}
  }
    for(i10=0; i10<6; i10++){
    if(xprojetil[i10]<0 || yprojetil[i10]<0){
       yprojetil.pop()
       xprojetil.pop()
 }
      
    yprojetil[i10] -= stepyprojetil[i10]
    xprojetil[i10] -= 3
    ellipse(xprojetil[i10], yprojetil[i10], 20, 20)
  }

}

/*function DesenhoProjetil(){
  
  for(i10=0; i10<6; i10++){
    if((xprojetil[i10]+10)>0 && (yprojetil[i10]+10)>0){
    yprojetil[i10] -= stepyprojetil[i10]
    xprojetil[i10] -= 3
}
    else{
      yprojetil[i10] = ydemonio
      xprojetil[i10] = xdemonio
    }
  ellipse(xprojetil[i10], yprojetil[i10], 20, 20)
}

}*/



