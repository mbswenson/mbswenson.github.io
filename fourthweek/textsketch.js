var buttbutt;
var textLocale;
var rememberedText;

function setup(){
	noCanvas();
	textLocale = createElement('textArea', 'enter text');
	textLocale.size(500,500);
	createElement('br');
	buttbutt = createButton ('push to save');
	buttbutt.color(#4B0082);
	buttbutt.mousePressed(saveText);
}

function saveText(){
	rememberedText = textLocale.value();
	createP("ORIGINAL TEXT: " + rememberedText);

	var textArr = splitTokens(rememberedText, '.:;?! @#$%^&*()-+');
	var length = textArr.length;
	var newString = join(textArr, '');
	createP("NEW TEXT: " + newString);
}