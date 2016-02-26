var renderer = PIXI.autoDetectRenderer(600, 400);
renderer.backgroundColor = 0x2e2e2e;
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

const STATE_MENU = 0;
const STATE_IN_GAME = 1;
var state = STATE_MENU;

var DIFFICULTY_EASY = 0;
var DIFFICULTY_MED = 1;
var DIFFICULTY_HARD = 2;
var difficulty = DIFFICULTY_EASY;
var operation = '+';

switchToGameMode();
animate();

function animate() 
{
	requestAnimationFrame(animate);


	renderer.render(stage);
}