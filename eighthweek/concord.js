var buttbutt;
var textLocale;
var rememberedText;

function setup(){
	noCanvas();
	textLocale = createElement ('textArea', 'write here');
	textLocale.size(500, 500);
	createElement('br');
	createElement('br');
	buttbutt = createButton ('boop');
	buttbutt.mousePressed(saveText);
}

function saveText(){
	rememberedText = textLocale.value();
	var textArr = splitTokens(rememberedText, '.:;?! @#$%^*()-+=[]{}/')
    var length = textArr.length;
}