var renderer = PIXI.autoDetectRenderer(600, 400);
renderer.backgroundColor = 0x659CEF;

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

const STATE_MENU = 0;
const STATE_IN_GAME = 1;
int state = STATE_MENU;

animate();

function animate() 
{
	requestAnimationFrame(animate);

	//TODO - Do we need different stages for each state?
	if(state === STATE_MENU)
	{
		//In menu.js
		renderMenu();
	}
	else if(state === STATE_IN_GAME)
	{
		//In game.js
		renderGame();
	}

	renderer.render(stage);
}