var tela = 1
var img, img1, img2
var larg = 200
var xMenu = 100
var alt = 50
var yMenu1 = 70
var yMenu2 = 180
var yMenu3 = 285
var cont = 0
var contS = 0
var cont2 = 0
var vetorImg = []
var posX = 40
var posY = 60
var posX1 = 80
var posY1 = 130


function preload(){
  img = loadImage('bg.png')
  img1 = loadImage('cré.png')
  img2 = loadImage('como.png')
  img3 = loadImage('bggame.png')
  img4 = loadImage('go.png')
  
  for(i = 0; i < 16; i++){
    vetorImg[i]=loadImage('a1000'+i+'.png')
  }
}


function setup() {
  createCanvas(400, 400)
  frameRate(30)
}

function draw() {
  //TELA INICIAL
  
  if( tela == 1){
      image(img, -20, -20)
    
      if(  mouseX>xMenu && mouseX<xMenu + larg && mouseY>yMenu1 && mouseY<yMenu1+alt ){
        stroke(30)
        fill(600)
        rect(xMenu, yMenu1, larg, alt, 10)
        if (mouseIsPressed){
          tela = 2
        }
      }
    
      if(  mouseX>xMenu && mouseX<xMenu + larg && mouseY>yMenu2 && mouseY<yMenu2+alt ){
        stroke(30)
        fill(600)
        rect(xMenu, yMenu2, larg, alt, 10)
        if (mouseIsPressed){
          tela = 3
        }
      }
      
      if(  mouseX>xMenu && mouseX<xMenu + larg && mouseY>yMenu3 && mouseY<yMenu3+alt ){
        stroke(30)
        fill(600)
        rect(xMenu, yMenu3, larg, alt, 10)
        if (mouseIsPressed){
          tela = 4
        }
      }
    
    
      //TEXTO
      strokeWeight(5);
      stroke(0)
      fill(999)
      textSize(30)
      text("INICIAR", 150, 105)
      text("CRÉDITOS", 125, 215)
      text("MANUAL", 145, 320)
      

      //CONTRUIR O MENU
      //CRÉDITOS

      
  }
  //TELA DE CRÉDITOS
  if( tela == 2){
    cont = cont + 1
    contS = parseInt(cont/30);
    background(img3)
    fill(200, 100, 250)
    textSize(28)
    text("BOA SORTE", 75, 60)
    
    fill(200)
    text (contS, 300, 60)
    if(contS == 60){
      tela = 5
    }
    
    
    
    image(vetorImg[cont2], posX, posY)
    posX = posX + 0.05
    posY = posY + 0.05
    cont2++
    if( cont2 >= 16){
      cont2 = 0
    }
    
   
    
    
   
    
     text(Math.floor(Math.random()*1000), posX1, posY1)
    if ( posX1 < 320 && posY1 < 300){
      posX1 = posX1 + 0.05
      posY1 = posY1 + 0.05
    }
    
 
  }
  else if( tela == 3){
    image(img1, -20, -10)
    
  }
  else if( tela == 4){
    image(img2, -20, -10) 

  }
  else if( tela == 5){
    image(img4, -20, -5) 

  }

}

function keyTyped() {
  if (key === 'i') {
    tela = 1;
  }
}