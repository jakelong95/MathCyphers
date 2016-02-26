var score = 0;
var answer = -1;

function switchToGameMode()
{
	var textOptions = 
	{
		font: 'bold 40px Roboto',
		fill: '#ff0000',
		lineJoin: 'round'
	};
	var scoreText = new PIXI.Text("Score: ", textOptions);
	scoreText.x = scoreText.y = 0;
	stage.addChild(scoreText);
	renderFunction = renderGame;
	
	problem = generateFunction();
}

function renderGame()
{
	
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
	switch(operator)
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
	
	
}

function generateDivisionProblem()
{
	
}