var tela = 1
var img, img1, img2
var larg = 200
var xMenu = 100
var alt = 50
var yMenu1 = 70
var yMenu2 = 180
var yMenu3 = 285

function preload(){
  img = loadImage('bg.png')
  img1 = loadImage('cré.png')
  img2 = loadImage('como.png')
}


function setup() {
  createCanvas(400, 400)

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

      if(key == 'c'){
        tela == 2
      }
      if(key == 'j'){
        tela = 3
      }
      if(key == 'm'){
        tela = 4
      }
  }
  //TELA DE CRÉDITOS
  if( tela == 2){
    background(10)
    fill(150)
    textSize(32)
    text("JOGAR", 150, 100)
  }
  if( tela == 3){
    image(img1, -20, -10)
     
    
  }
  if( tela == 4){
    image(img2, -20, -10) 

  }

}
