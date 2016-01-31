b1=true
//b2=true
//b3=true

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	console.log(sender)
	//returns the state to whichever thing requested it
	if (request.greeting == "getState"){
		sendResponse({b1:b1})
	//sets the new stat upon a message of changed state
	}else if(request.greeting ==  "b1"){
		b1 = !b1
		console.log("b1 = " + b1)
		sendResponse({b1:b1})
	}
	/*else if(request.greeting ==  "b2"){
		b2 = !b2
		console.log("b2 = " + b2)
		sendResponse({b2:b2})
	}else if(request.greeting ==  "b3"){
		b3 = !b3
		console.log("b3 = " + b3)
		sendResponse({b3:b3})
	}
	*/
  //if (request.greeting == "b1")
  //	sendResponse({farewell:"b1 toggled"})
});