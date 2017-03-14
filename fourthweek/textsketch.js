var buttbutt;
var textLocale;
var rememberedText;

function setup(){
	noCanvas();
	textLocale = createElement('textArea', 'write how you feel');
	textLocale.size(200,200);
	createElement('br');
	buttbutt = createButton ('push to save');
	buttbutt.mousePressed(saveText);
}

function saveText(){
	rememberedText = textLocale.value();
	createP("ORIGINAL TEXT: " + rememberedText);
	var textArr = splitTokens(rememberedText, '.:;?! @#$%^&*()-+');
	var length = textArr.length;

	for (var i = 0; i < textArr.length; i++){
		if (textArr[i] === "I" || textArr[i] === "i"){
			textArr[i] = "";
		}
		if (textArr[i] === "I'm" || textArr[i] === "i'm"){
			textArr[i] = "";
		}
		if (textArr[i] === "I've" || textArr[i] === "i've"){
			textArr[i] = "";
		}	
		if (textArr[i] === "My" || textArr[i] === "my"){
			textArr[i] = "";
		}
		if (textArr[i] === "FEELING" || textArr[i] === "feeling"){
			textArr[i] = "";
		}
		if (textArr[i] === "FEEL" || textArr[i] === "feel"){
			textArr[i] = "";
		}

	}
	var newString = join(textArr, '');
	createP("NEW TEXT: " + newString);
}