$("#begin").click(function(){
    
    operations = [];
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
    
    if(!opSelected)
    {
        return false;
    }
    
    $("#navbar").load("navbar.html");
    
    $("#gameBody").css({"padding":"0px"});
    
    $("#gameBody").html("");
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "client/main.js"; 
    document.getElementsByTagName("head")[0].appendChild(script);
    
    return false; 
    
});