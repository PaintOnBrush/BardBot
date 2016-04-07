// ==UserScript==
// @name         BardBot
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  A poetry creater and reciter! (Reddit Robin)
// @author       ptrakk, schollz, DogDaYort
// @include      https://www.reddit.com/robin*
// @updateURL    https://github.com/ptrakk/bardbot/raw/master/bardbot.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js
// @grant   GM_getValue
// ==/UserScript==

var poem=["0"];
//create event listener in main frame to get data from iframe
if (typeof window.addEventListener != 'undefined') {
    window.addEventListener('message', function(e) {
        poem = e.data[1];
    }, false);
} else if (typeof window.attachEvent != 'undefined') { // this part is for IE8
    window.attachEvent('onmessage', function(e) {
        poem = e.data;
    });
}

//create new poem url
var poemLink;
function newpoem() {
var poemId = ["0", "0"];
poemId.length=Math.floor(Math.random() * (100 - 1)) + 1;
for (i = 0; i < poemId.length; i++) {poemId[i]=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)];}
poemId2=poemId.toString().replace(/\,/g,"");
poemLink = "https://127.0.0.1/mushypoem/".concat(poemId2);
console.log(poemLink);
}
newpoem();

//create frame window
function makeFrame() {
	ifrm = document.createElement("IFRAME");
	ifrm.setAttribute("src", poemLink);
	ifrm.style.width = 640+"px";
	ifrm.style.height = 480+"px";
	ifrm.id="cool";
	document.body.appendChild(ifrm);
	console.log(poem.length);

	function wait(flag) {
		if(!flag)
		{
			setTimeout(function()
			{
				console.log("poems swag");
				if (poem.length > 1) wait(true);
			}, 5000);
			return;
		}
			if (poem.length > 1) {return;}
	wait();
}
wait();
}
makeFrame();

//update poem window
function update()
{
	cool.src=poemLink;
}
update();

function initializing()
{
	//send message to chat
$('input.c-form-control.text-counter-input').val("#bard ＩＮＩＴＩＡＬＩＺＩＮＧ ­ ­ ＢＡＲＤ ­ ­ ＢＯＴ ­ ­ １．０");
setTimeout(function() {$('input.c-form-control.text-counter-input').submit();}, 50);
}
initializing();

//read poem
var poemIterate=0;
function readpoem(sentenceRead) {
	if(!sentenceRead) {
		setTimeout(function() {
							// poem blank line
			if (poem[poemIterate] == "pause"){$('input.c-form-control.text-counter-input').val("#bard ­"); setTimeout(function() {$('input.c-form-control.text-counter-input').submit();}, 50);}
			//poem title 											//convert font to mathematical script unicode
	if (poemIterate === 0) {poem[poemIterate]=poem[poemIterate].replace(/A/g,"𝓐").replace(/B/g,"𝓑").replace(/C/g,"𝓒").replace(/D/g,"𝓓").replace(/E/g,"𝓔").replace(/F/g,"𝓕").replace(/G/g,"𝓖").replace(/H/g,"𝓗").replace(/I/g,"𝓘").replace(/J/g,"𝓙").replace(/K/g,"𝓚").replace(/L/g,"𝓛").replace(/M/g,"𝓜").replace(/N/g,"𝓝").replace(/O/g,"𝓞").replace(/P/g,"𝓟").replace(/Q/g,"𝓠").replace(/R/g,"𝓡").replace(/S/g,"𝓢").replace(/T/g,"𝓣").replace(/U/g,"𝓤").replace(/V/g,"𝓥").replace(/W/g,"𝓦").replace(/X/g,"𝓧").replace(/Y/g,"𝓨").replace(/Z/g,"𝓩").replace(/a/g,"𝓪").replace(/b/g,"𝓫").replace(/c/g,"𝓬").replace(/d/g,"𝓭").replace(/e/g,"𝓮").replace(/f/g,"𝓯").replace(/g/g,"𝓰").replace(/h/g,"𝓱").replace(/i/g,"𝓲").replace(/j/g,"𝓳").replace(/k/g,"𝓴").replace(/l/g,"𝓵").replace(/m/g,"𝓶").replace(/n/g,"𝓷").replace(/o/g,"𝓸").replace(/p/g,"𝓹").replace(/q/g,"𝓺").replace(/r/g,"𝓻").replace(/s/g,"𝓼").replace(/t/g,"𝓽").replace(/u/g,"𝓾").replace(/v/g,"𝓿").replace(/w/g,"𝔀").replace(/x/g,"𝔁").replace(/y/g,"𝔂").replace(/z/g,"𝔃").replace(/,/g,",").replace(/\./g,".").replace(/!/g,"!").replace(/\?/g,"?");
				//send message to chat
				$('input.c-form-control.text-counter-input').val("#bard ~" + poem[poemIterate] + "~");
				setTimeout(function() {$('input.c-form-control.text-counter-input').submit();}, 50);
			console.log("~" + poem[poemIterate] + "~");}
							//poem body																	//convert font to mathematical script unicode
           if (poemIterate > 0 && poem[poemIterate] != "pause") {poem[poemIterate]=poem[poemIterate].replace(/A/g,"𝓐").replace(/B/g,"𝓑").replace(/C/g,"𝓒").replace(/D/g,"𝓓").replace(/E/g,"𝓔").replace(/F/g,"𝓕").replace(/G/g,"𝓖").replace(/H/g,"𝓗").replace(/I/g,"𝓘").replace(/J/g,"𝓙").replace(/K/g,"𝓚").replace(/L/g,"𝓛").replace(/M/g,"𝓜").replace(/N/g,"𝓝").replace(/O/g,"𝓞").replace(/P/g,"𝓟").replace(/Q/g,"𝓠").replace(/R/g,"𝓡").replace(/S/g,"𝓢").replace(/T/g,"𝓣").replace(/U/g,"𝓤").replace(/V/g,"𝓥").replace(/W/g,"𝓦").replace(/X/g,"𝓧").replace(/Y/g,"𝓨").replace(/Z/g,"𝓩").replace(/a/g,"𝓪").replace(/b/g,"𝓫").replace(/c/g,"𝓬").replace(/d/g,"𝓭").replace(/e/g,"𝓮").replace(/f/g,"𝓯").replace(/g/g,"𝓰").replace(/h/g,"𝓱").replace(/i/g,"𝓲").replace(/j/g,"𝓳").replace(/k/g,"𝓴").replace(/l/g,"𝓵").replace(/m/g,"𝓶").replace(/n/g,"𝓷").replace(/o/g,"𝓸").replace(/p/g,"𝓹").replace(/q/g,"𝓺").replace(/r/g,"𝓻").replace(/s/g,"𝓼").replace(/t/g,"𝓽").replace(/u/g,"𝓾").replace(/v/g,"𝓿").replace(/w/g,"𝔀").replace(/x/g,"𝔁").replace(/y/g,"𝔂").replace(/z/g,"𝔃").replace(/,/g,",").replace(/\./g,".").replace(/!/g,"!").replace(/\?/g,"?");
				//send message to chat
				$('input.c-form-control.text-counter-input').val("#bard "+ poem[poemIterate]);
				setTimeout(function() {$('input.c-form-control.text-counter-input').submit();}, 50);}
           readpoem(true);
        }, 11000);
		return;
    }
poemIterate++;
if (poemIterate==poem.length){newpoem(); $('input.c-form-control.text-counter-input').val("#bard －－－－－－－－－Ｎｅｗ Ｐｏｅｍ－－－－－－－－－"); setTimeout(function() {$('input.c-form-control.text-counter-input').submit();}, 50); update();  poemIterate=0; readpoem(); return;}
readpoem();
}
readpoem();
