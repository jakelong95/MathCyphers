var score = 0;
var answer = -1;

var operand1Text, operand2Text;

function switchToGameMode()
{
	document.addEventListener('keydown', function(event)
	{
		handleInput(event);
	});
	
	var textOptions = 
	{
		font: 'bold 40px Roboto',
		fill: '#ff0000',
		lineJoin: 'round'
	};
	var scoreText = new PIXI.Text("Score: ", textOptions);
	scoreText.x = scoreText.y = 0;
	stage.addChild(scoreText);
	
	updateProblem();
}

function updateProblem()
{
	stage.removeChild(operand1Text);
	stage.removeChild(operand2Text);
	operands = generateFunction();
	
	var textOptions = 
	{
		font: 'bold 64px Roboto',
		fill: '#008EBD',
		lineJoin: 'round'
	};
	operand1Text = new PIXI.Text(operands[0], textOptions);
	operand1Text.x = 140;
	operand1Text.y = 180;
	var operationText = new PIXI.Text(operation, textOptions);
	operationText.x = 210;
	operationText.y = 180;
	operand2Text = new PIXI.Text(operands[1], textOptions);
	operand2Text.x = 260;
	operand2Text.y = 180;
	var equalsText = new PIXI.Text('=', textOptions);
	equalsText.x = 340;
	equalsText.y = 180;
	
	stage.addChild(operand1Text);
	stage.addChild(operationText);
	stage.addChild(operand2Text);
	stage.addChild(equalsText);
}

function generateFunction()
{
	if(operation === '/')
	{
		generateDivisionProblem();
	}
	
	//Stores the two operands and the result
	var operands = new Array();
	
	var lowerBound = 0, upperBound;
	switch(difficulty)
	{
		case DIFFICULTY_EASY:
			upperBound = 10;
			break;
		case DIFFICULTY_MED:
			upperBound = 15;
			break;
		case DIFFICULTY_HARD:
			upperBound = 20;
			break;
	}
	
	operands[0] = Math.floor(Math.random() * upperBound);
	operands[1] = Math.floor(Math.random() * upperBound);
	switch(operation)
	{
		case '+':
			answer = operands[0] + operands[1];
			break;
		case '-':
			answer = operands[0] - operands[1];
			break;
		case 'x':
			answer = operands[0] * operands[1];
			break;
	}
	
	return operands;
}

function generateDivisionProblem()
{
	
}

function handleInput(event)
{	
	var num = event.keyCode - 48;
	alert(num);
}