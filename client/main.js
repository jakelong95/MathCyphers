var renderer = PIXI.autoDetectRenderer(600, 400);
renderer.backgroundColor = 0x2e2e2e;
$("#gameBody").append(renderer.view);

var stage = new PIXI.Container();

const STATE_MENU = 0;
const STATE_IN_GAME = 1;
var state = STATE_MENU;

switchToGameMode();
animate();

function animate() 
{
	requestAnimationFrame(animate);

	renderer.render(stage);
}