var score = 0;


var problem = new Object();

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
		return generateDivisionProblem();
	}
	
	//Stores the two operands and the result
	var triple = new Object();
	
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
	
	triple.operands[0] = Math.floor(Math.random() * upperBound);
	triple.operands[1] = Math.floor(Math.random() * upperBound);
	switch(operator)
	{
		case '+':
			triple.answer = triple.operands[0] + triple.operands[1];
			break;
		case '-':
			triple.answer = triple.operands[0] - triple.operands[1];
			break;
		case 'x':
			triple.answer = triple.operands[0] * triple.operands[1];
			break;
	}
	
	return triple;
}

function generateDivisionProblem()
{
	
}