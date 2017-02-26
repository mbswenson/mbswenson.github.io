var button;
var textArea;
var savedText;

function setup(){
	noCanvas();
	textArea = createElement('textArea', 'enter text');
	textArea.size(300,400);
	createElement('br');
	button = createButton ('push to save');
	button.mousePressed(saveText);
}

function saveText(){
	savedText = textArea.value();
	createP("ORIGINAL TEXT: " + savedText);

	var textArr = splitTokens(savedText, '.:;?! @#$%^&*()-+');
	var length = textArr.length;

	for (var i = 0; i < textArr.length; i++){
		 if (textArr[i] === "I" || textArr[i] === "i") {
     	 textArr[i] = "you";
    	}
	}

	var newString = join(textArr, '');
	createP("NEW TEXT: " + newString);
}