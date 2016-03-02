$("#diff").click(function(){
    
    $("#navbar").html("");
    $("#navscript").remove();
    
   // $("#gameBody").html("");
    $("#gameBody").load("difficulty.html");
    
    var script = document.createElement("script");
        script.id = "diffscript";
        script.type = "text/javascript";
        script.src = "scripts/difficulty.js"; 
        document.getElementsByTagName("head")[0].appendChild(script);
    
    return false;
    
});