//hrome.extension.getURL("images/f.png");
window.onload=function(){
	b1=true
	//b2=true
	//b3=true
	$(document).ready(function(){
		//sets up the UI based on background internal state
		chrome.runtime.sendMessage({greeting:"getState"},function(response) {
    		console.log(response)
    		b1=response.b1
    		//b2=response.b2
    		//b3=response.b3
    		if (!b1)
				$("#b1").find('img').toggle();
			/*
            if (!b2)
				$("#b2").find('img').toggle();
			if (!b3)
				$("#b3").find('img').toggle();
            */
    	});

        $("#b1").click(function() {
            $(this).find('img').toggle();
            b1=!b1
            chrome.runtime.sendMessage({greeting:"b1"},function(response) {
            });
        });

        /*
        $("#b2").click(function() {
            $(this).find('img').toggle();
            b2=!b2
            chrome.runtime.sendMessage({greeting:"b2"},function(response) {
            });
        });
        $("#b3").click(function() {
            $(this).find('img').toggle();
            b1=!b1
            chrome.runtime.sendMessage({greeting:"b3"},function(response) {
            });
        });
        //onclicks for eacho button
        */
	});
	
	//var btn = document.createElement("BUTTON");        // Create a <button> element
	//var t = document.createTextNode("CLICK ME");       // Create a text node
	//btn.appendChild(t);                                // Append the text to <button>
	//document.body.appendChild(btn);
	//var port = chrome.runtime.connect({name:"popup"});
	//port.onMessage.addListener(function(message,sender){
  	//	if(message.greeting === "hello"){
    //		alert(message.greeting);
  	//	}
	//});   
	                 // Append <button> to <body>
}