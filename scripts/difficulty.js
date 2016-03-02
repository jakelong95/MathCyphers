$("#begin").click(function(){
    
    operations = [];
    POINTS_PER_PROBLEM[0] = 10;
    POINTS_PER_PROBLEM[1] = 20;
    POINTS_PER_PROBLEM[2] = 30;
    var opSelected = false;
    
    
    if($("#easy").is(':checked'))
    {
        difficulty = DIFFICULTY_EASY;
    }
    else if($("#medium").is(':checked'))
    {
        difficulty = DIFFICULTY_MED;
    }
    else
    {
        difficulty = DIFFICULTY_HARD;
    }
    
    
    if($("#add").is(':checked'))
    {
        operations[operations.length] = '+';
        opSelected = true;
    }
    
    if($("#sub").is(':checked'))
    {
        operations[operations.length] = '-';
        POINTS_PER_PROBLEM[difficulty] += 5;
        opSelected = true;
    }
    
    if($("#mult").is(':checked'))
    {
        operations[operations.length] = 'x';
        POINTS_PER_PROBLEM[difficulty] += 10;
        opSelected = true;
    }
    
    if($("#div").is(':checked'))
    {
        operations[operations.length] = '/';
        POINTS_PER_PROBLEM[difficulty] += 15;
        opSelected = true;
    }
    
    if(opSelected == false)
    {
        return false;
    }
    
    $("#navbar").load("navbar.html");
    
    $("#gameBody").css({"padding":"0px"});
    
    if(typeof renderer === 'undefined')
    {
        $("#gameBody").html("");
        var script = document.createElement("script");
        script.id = "mainscript";
        script.type = "text/javascript";
        script.src = "client/main.js"; 
        document.getElementsByTagName("head")[0].appendChild(script);   
    }
    else
    {
        $("#gameBody").html("");
        $("#gameBody").append(renderer.view);
        currentAnswer = '';
		updateAnswerText();
		updateProblem();
    }
    
    var script = document.createElement("script");
    script.id = "navscript";
    script.type = "text/javascript";
    script.src = "scripts/nav.js"; 
    document.getElementsByTagName("head")[0].appendChild(script);
    
    $("#diffscript").remove();
    
    return false; 
    
});