$("#submitSignup").click(function(){
        
        
        var un = $("#username").val();
        var pwd = $("#pwd").val();
        var conpwd = $("#conpwd").val();
        var success = true;
        
        $("#usernameErr").text("");
        $("#pwdErr").text("");
        $("#conpwdErr").text(""); 
        
        if(un === "")
        {
            $("#usernameErr").text("*Username is required");
            success = false;
        }
        
        if(pwd === "")
        {
            $("#pwdErr").text("*Password is required");
            success = false;
        }
        else if(conpwd === "")
        {
            $("#conpwdErr").text("*Please confirm password");
            success = false;
        }
        else if(pwd !== conpwd)
        {
            $("#conpwdErr").text("*Passwords do not match");
            success = false;
        }
        
        //Handle Validation
        
        if(success){
            $("#gameBody").html("");
            $("#gameBody").load("difficulty.html");
        }
        else{
            return false;
        }
    
        $("#gameBody").html("");
        
        var script = document.createElement("script");
        script.id = "diffscript";
        script.type = "text/javascript";
        script.src = "scripts/difficulty.js"; 
        document.getElementsByTagName("head")[0].appendChild(script);
    
        $("#suscript").remove();
        
        return false;
    });