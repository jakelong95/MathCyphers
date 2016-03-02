    $("#submitLogin").click(function(){
        
        
        var un = $("#username").val();
        var pwd = $("#pwd").val();
        var success = true;
        
        
        if(un === "")
        {
            success = false;
            return false;
        }
        
        if(pwd === "")
        {
            success = false;
            return false;
        }
        
        //Handle Validation
        
        $("#gameBody").html("");
        $("#gameBody").load("difficulty.html");
        
        var script = document.createElement("script");
        script.id = "diffscript";
        script.type = "text/javascript";
        script.src = "scripts/difficulty.js"; 
        document.getElementsByTagName("head")[0].appendChild(script);
        
        $("#liscript").remove();
        return false;
    });