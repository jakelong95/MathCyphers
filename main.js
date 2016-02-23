var renderer = PIXI.autoDetectRenderer(600, 400);
renderer.backgroundColor = 0x659CEF;

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

animate();

function animate() 
{
	requestAnimationFrame(animate);
	renderer.render(stage);
}