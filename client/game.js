var score = 0;
var answer = -1;

var operand1Text, operand2Text, operationText; //Displays the operands to the user
var answerText; //Displays the answer the user has typed
var currentAnswer = ''; //String containing what the user has typed so far
var currentScoreText; //Displays the current score
var operation = '+';
var operations = [];
const DIFFICULTY_EASY = 0;
const DIFFICULTY_MED = 1;
const DIFFICULTY_HARD = 2;
var difficulty = DIFFICULTY_EASY;

//Indices correspond to DIFFICULTY_X above
const POINTS_PER_PROBLEM = [10, 20, 30];

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
    stage.removeChild(operationText);
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
    operationText = new PIXI.Text(operation, textOptions);
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
    
    operation = operations[Math.floor(Math.random() * (operations.length))];
    
	var generateDivisionProblem = function(upper)
	{
		var operands = new Array();
		operands[0] = Math.floor(Math.random() * upperBound);
		operands[1] = Math.floor(Math.random() * upperBound) + 1;
		
		while(operands[0] / operands[1] % 1 != 0)
		{
			operands[1]--;
		}
		
		return operands;
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

	if(operation === '/')
	{
		operands = generateDivisionProblem(upperBound);
	}	
	else
	{
		operands[0] = Math.floor(Math.random() * upperBound);
		operands[1] = Math.floor(Math.random() * upperBound);
	}
	switch(operation)
	{
		case '+':
			answer = operands[0] + operands[1];
			break;
		case '-':
            if(difficulty == 0)
            {
                if(operands[0] < operands[1])
                {
                    operands[0] += operands[1];
                    operands[1] = operands[0] - operands[1];
                    operands[0] -= operands[1];
                }
            }
			answer = operands[0] - operands[1];
			break;
		case 'x':
			answer = operands[0] * operands[1];
			break;
		case '/':
			answer = operands[0] / operands[1];
	}
	
	return operands;
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
        event.preventDefault();
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
    else if(event.keyCode == 189)
    {
        if(currentAnswer.length == 0)
        {
            currentAnswer = '-';
            updateAnswerText();
        }
        return;
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