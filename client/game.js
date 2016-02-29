var score = 0;
var answer = -1;

var operand1Text, operand2Text; //Displays the operands to the user
var answerText; //Displays the answer the user has typed
var currentAnswer = ''; //String containing what the user has typed so far
var currentScoreText; //Displays the current score

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
	currentScoreText = new PIXI.Text(score, textOptions);
	currentScoreText.x = 110;
	currentScoreText.y = 0;
	stage.addChild(currentScoreText);
	
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
	var updateAnswerText = function()
	{
		stage.removeChild(answerText);
		var textOptions = 
		{
			font: 'bold 64px Roboto',
			fill: '#008EBD',
			lineJoin: 'round'
		};
		answerText = new PIXI.Text(currentAnswer, textOptions);
		answerText.x = 390;
		answerText.y = 180;
		stage.addChild(answerText);
	};
	
	var updateScoreText = function()
	{
		stage.removeChild(currentScoreText);
		
		var textOptions = 
		{
			font: 'bold 40px Roboto',
			fill: '#ff0000',
			lineJoin: 'round'
		};
		currentScoreText = new PIXI.Text(score, textOptions);
		currentScoreText.x = 110;
		currentScoreText.y = 0;
		stage.addChild(currentScoreText);
	};
	
	//Handle backspace
	if(event.keyCode === 8)
	{
		if(currentAnswer.length > 0)
		{
			currentAnswer = currentAnswer.substring(0, currentAnswer.length - 1);
			updateAnswerText();
		}

		return;
	}
	
	var num = 0;
	//Only accept numeric input
	if(event.keyCode >= 48 && event.keyCode <= 57)
	{
		num = event.keyCode - 48;
	}
	else if(event.keyCode >= 96 && event.keyCode <= 105)
	{
		num = event.keyCode - 96;
	}
	else
	{
		return;
	}
	
	currentAnswer = currentAnswer + num;
	updateAnswerText(currentAnswer);
	
	if(answer == currentAnswer)
	{
		score += POINTS_PER_PROBLEM[difficulty];
		
		updateScoreText();
		currentAnswer = '';
		updateAnswerText();
		updateProblem();
	}
}