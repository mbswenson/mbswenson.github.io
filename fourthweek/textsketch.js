var buttbutt;
var textLocale;
var rememberedText;

function setup(){
	noCanvas();
	textLocale = createElement('textArea', 'write how you feel');
	textLocale.size(200,200);
	createElement('br');
	createElement('br');
	buttbutt = createButton ('dissociate from how you feel');
	buttbutt.mousePressed(saveText);
}

function saveText(){
	background(random(255), random(255), random(255));
	rememberedText = textLocale.value();
	var textArr = splitTokens(rememberedText, '.:;?! @#$%^&*()-+');
	var length = textArr.length;

	for (var i = 0; i < textArr.length; i++){
		if (textArr[i] === "I" || textArr[i] === "i"){
			textArr[i] = " ";
		}
		if (textArr[i] === "I'm" || textArr[i] === "i'm"){
			textArr[i] = " ";
		}
		if (textArr[i] === "I've" || textArr[i] === "i've"){
			textArr[i] = " ";
		}	
		if (textArr[i] === "My" || textArr[i] === "my"){
			textArr[i] = " ";
		}
		if (textArr[i] === "FEELING" || textArr[i] === "feeling"){
			textArr[i] = " ";
		}
		if (textArr[i] === "FEEL" || textArr[i] === "feel"){
			textArr[i] = " ";
		}

	}
	var newString = join(textArr, ' ');
	createP(newString);
}