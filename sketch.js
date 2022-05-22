const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
  baseimage = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
World.add(world, baseimage);

  //criar corpo do jogador
playerArcher = Bodies.rectangle(160, 300, 160, 310, { isStatic: true });
World.add(world, playerArcher);

}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  rect(playerArcher.position.x, playerArcher.position.y,160, 310 );

  //exibir a imagem da base do jogador usando a função image()
  rect(baseimage.position.x, baseimage.position.y,width / 2, 50 );



  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
