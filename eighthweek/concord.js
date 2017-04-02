var buttbutt;
var textLocale;
var rememberedText;
var concordance = {};

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

function concordanceMaker(){
	data = saveText.value();
	var tokens = data.split(/\W+/);

	var keys = [];
	for (var i = 0; i < tokens.length; i++){
		var word = tokens[i].toLowerCase();
		if (concordance[word] === undefined){
			concordance[word] = 1;
			keys.push(word);
	  } else {
	  	concordance[word]++;
	  }
		}

	keys.sort(function(a, b){
		return (concordance[b] - concordance[a]);
	});

	for (var i = 0; i < keys.length; i++) {
		console.log(keys[i] + ': ' + concordance[keys[i]]);
	}

	var ul = select('#concordance');
	for (var i = 0; i < keys.length; i++) {
		var li = createElement ('li', keys[i] + ': ' + concordance[keys[i]]);
		li.parent(ul);
	}
}
