var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gameState="serve";

calle1 = createSprite(190, 120, 420, 3);
calle2 = createSprite(190, 260, 420, 3);

var inicio = createSprite(-10, 190, 120, 138);
inicio.shapeColor=("#67f5ae");

var final = createSprite(410, 190,120,138);
final.shapeColor=("#f0f567")

elaplastado = createSprite(20,190,17,17);
elaplastado.shapeColor=("Green");

var car1 = createSprite(100, 145, 25, 25);
car1.shapeColor=("Red");

var car2 = createSprite(205, 145, 25, 25);
car2.shapeColor=("Red");

var car3 = createSprite(280, 145, 25, 25);
car3.shapeColor=("Red");

car1.velocityY=(4);
car2.velocityY=(7);
car3.velocityY=(9);
vidas=0;

function draw() {
  background("white");
 
 if (keyDown("up")) {
   elaplastado.y=elaplastado.y-5;
 }
  if (keyDown("down")) {
   elaplastado.y=elaplastado.y+5;
 }
  if (keyDown("left")) {
   elaplastado.x=elaplastado.x-5;
 }
  if (keyDown("right")) {
   elaplastado.x=elaplastado.x+5;
 }
 



textSize(20)
 text("Vidas usadas: "+vidas,130,35);
 
 if (elaplastado.isTouching(car1) || elaplastado.isTouching(car2) || elaplastado.isTouching(car3)) {
   playSound("assets/error-fallo-1.mp3");
   vidas=vidas+1
   elaplastado.x=20
   elaplastado.y=190
 }
 
 if (gameState=="serve") {
  if (keyDown("up")||keyDown("down")||keyDown("right")||keyDown("left")) {
    gameState="play";
  }
  
}
if (gameState=="play")
{
  if (vidas==5) {
    gameState="perdió";
  }
  if (elaplastado.isTouching(final)) {
    gameState="ganó";
  }
  
}
if (gameState=="perdió") {
  playSound("assets/kirby-death.mp3",false);
  elaplastado.destroy();
  text("Fin del juego :(",145,200);
}
if (gameState=="ganó") {
  playSound("assets/ganar-tonos.mp3",false);
  elaplastado.destroy();
  text("Ganaste!",145,200);
}

 
  drawSprites();
  
  
createEdgeSprites();

car1.bounceOff(calle1);
car1.bounceOff(calle2);
car2.bounceOff(calle1);
car2.bounceOff(calle2);
car3.bounceOff(calle1);
car3.bounceOff(calle2);
elaplastado.bounce(edges);
elaplastado.bounce(calle1);
elaplastado.bounce(calle2);
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
