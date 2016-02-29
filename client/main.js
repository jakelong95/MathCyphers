var renderer = PIXI.autoDetectRenderer(600, 400);
renderer.backgroundColor = 0x2e2e2e;
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

const STATE_MENU = 0;
const STATE_IN_GAME = 1;
var state = STATE_MENU;

const DIFFICULTY_EASY = 0;
const DIFFICULTY_MED = 1;
const DIFFICULTY_HARD = 2;
var difficulty = DIFFICULTY_HARD;
var operation = '+';

//Indices correspond to DIFFICULTY_X above
const POINTS_PER_PROBLEM = [10, 20, 30];

switchToGameMode();
animate();

function animate() 
{
	requestAnimationFrame(animate);

	renderer.render(stage);
}