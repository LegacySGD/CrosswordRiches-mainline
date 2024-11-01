(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 960,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.audioOffIcon = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.audioOnIcon = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blueBtn_OVER = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blueBtn_UP = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.closeCross = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.greenBtn_OVER = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.greenBtn_UP = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.greenSmallBtn_Down = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.greenSmallBtn_UP = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.helpIcon = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.loader01 = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.loader02 = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.loader03 = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.loader04 = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.loader05 = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.loader06 = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.loader07 = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.loader08 = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.loader09 = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.loader10 = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.loader11 = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.loaderAnimBG = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.meterBg = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.minusBtnDown = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.minusBtnUp = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.plusDown = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.plusUp = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.smallBlueBtn_OVER = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.smallBlueBtn_UP = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.smallRedBtn_OVER = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.smallRedBtn_UP = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.loader12 = function() {
	this.spriteSheet = ss["revealingRichesUI_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.portraitBigSquareholderLarge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.label = new cjs.Text(" ", "bold 25px 'Arial'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 28;
	this.label.lineWidth = 122;
	this.label.setTransform(61,0);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.1,32);


(lib.holderMedium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.label = new cjs.Text(" ", "bold 20px 'Arial'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 22;
	this.label.lineWidth = 184;
	this.label.setTransform(92,0);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188.1,32);


(lib.holderLarge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.label = new cjs.Text(" ", "bold 25px 'Arial'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 28;
	this.label.lineWidth = 184;
	this.label.setTransform(92,0);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188.1,32);


(lib.closeCrossIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.closeCross();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,27);


(lib.winsMeter = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// value
	this.value = new cjs.Text(" ", "bold 16px 'Arial'", "#FFE379");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 20;
	this.value.lineWidth = 144;
	this.value.setTransform(102,12.2);

	this.timeline.addTween(cjs.Tween.get(this.value).wait(1));

	// label
	this.label = new cjs.Text(" ", "bold 16px 'Arial'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 20;
	this.label.lineWidth = 144;
	this.label.setTransform(102,34.2);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// meterBg.png
	this.instance = new lib.meterBg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208,63);


(lib.plusBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plusUp();

	this.instance_1 = new lib.plusDown();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.minusBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.minusBtnUp();

	this.instance_1 = new lib.minusBtnDown();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.loaderAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.loader01();

	this.instance_1 = new lib.loader02();

	this.instance_2 = new lib.loader03();

	this.instance_3 = new lib.loader04();

	this.instance_4 = new lib.loader05();

	this.instance_5 = new lib.loader06();

	this.instance_6 = new lib.loader07();

	this.instance_7 = new lib.loader08();

	this.instance_8 = new lib.loader09();

	this.instance_9 = new lib.loader10();

	this.instance_10 = new lib.loader11();

	this.instance_11 = new lib.loader12();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

	// Layer 2
	this.instance_12 = new lib.loaderAnimBG();
	this.instance_12.setTransform(-30,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-19,188,167);


(lib.betMeter = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// value
	this.value = new cjs.Text(" ", "bold 16px 'Arial'", "#FFE379");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 20;
	this.value.lineWidth = 144;
	this.value.setTransform(102,12.2);

	this.timeline.addTween(cjs.Tween.get(this.value).wait(1));

	// label
	this.label = new cjs.Text(" ", "bold 16px 'Arial'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 20;
	this.label.lineWidth = 144;
	this.label.setTransform(102,34.2);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// meterBg.png
	this.instance = new lib.meterBg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208,63);


(lib.balanceMeter = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// value
	this.value = new cjs.Text(" ", "bold 16px 'Arial'", "#FFE379");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 20;
	this.value.lineWidth = 144;
	this.value.setTransform(102,12.2);

	this.timeline.addTween(cjs.Tween.get(this.value).wait(1));

	// label
	this.label = new cjs.Text(" ", "bold 16px 'Arial'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 20;
	this.label.lineWidth = 144;
	this.label.setTransform(102,34.2);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// meterBg.png
	this.instance = new lib.meterBg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208,63);


(lib.btnHelpIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.helpIcon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,29);


(lib.backArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,28);


(lib.audioOnIcon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.audioOnIcon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,29);


(lib.audioOffIcon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.audioOffIcon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,29);


(lib.PortraitPlayOneBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.textHolder = new lib.portraitBigSquareholderLarge();
	this.textHolder.setTransform(112,34.9,1,1,0,0,0,97.5,18.8);

	this.timeline.addTween(cjs.Tween.get(this.textHolder).wait(2).to({y:36.9,alpha:0.25},0).wait(2));

	// img
	this.instance = new lib.greenSmallBtn_UP();

	this.instance_1 = new lib.greenSmallBtn_Down();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,64);


(lib.PortraitPlayAllBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.textHolder = new lib.portraitBigSquareholderLarge();
	this.textHolder.setTransform(112,34.9,1,1,0,0,0,97.5,18.8);

	this.timeline.addTween(cjs.Tween.get(this.textHolder).wait(2).to({y:36.9,alpha:0.25},0).wait(2));

	// img
	this.instance = new lib.greenSmallBtn_UP();

	this.instance_1 = new lib.greenSmallBtn_Down();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,64);


(lib.portraitexitGameBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.textHolder = new lib.portraitBigSquareholderLarge();
	this.textHolder.setTransform(112,34.9,1,1,0,0,0,97.5,18.8);

	this.timeline.addTween(cjs.Tween.get(this.textHolder).wait(2).to({y:36.9,alpha:0.25},0).wait(2));

	// img
	this.instance = new lib.greenSmallBtn_UP();

	this.instance_1 = new lib.greenSmallBtn_Down();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,64);


(lib.portaitbuyBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.textHolder = new lib.portraitBigSquareholderLarge();
	this.textHolder.setTransform(112,34.9,1,1,0,0,0,97.5,18.8);

	this.timeline.addTween(cjs.Tween.get(this.textHolder).wait(2).to({y:36.9,alpha:0.25},0).wait(2));

	// img
	this.instance = new lib.greenSmallBtn_UP();

	this.instance_1 = new lib.greenSmallBtn_Down();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,64);


(lib.PlayforMoney = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// label
	this.textHolder = new lib.holderMedium();
	this.textHolder.setTransform(107.5,38.4,1,1,0,0,0,97.5,18.8);

	this.timeline.addTween(cjs.Tween.get(this.textHolder).wait(2).to({y:40.4,alpha:0.25},0).wait(2));

	// img
	this.instance = new lib.blueBtn_UP();

	this.instance_1 = new lib.blueBtn_OVER();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208,63);


(lib.playAllBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.textHolder = new lib.holderLarge();
	this.textHolder.setTransform(107.5,34.9,1,1,0,0,0,97.5,18.8);

	this.timeline.addTween(cjs.Tween.get(this.textHolder).wait(2).to({y:36.9,alpha:0.25},0).wait(2));

	// img
	this.instance = new lib.greenBtn_UP();
	this.instance.setTransform(0,0,1,1.016);

	this.instance_1 = new lib.greenBtn_OVER();
	this.instance_1.setTransform(0,0,1,1.016);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208,64);


(lib.helpCloseBtn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.closeCrossIcon();
	this.instance.setTransform(28,32.6,1,1,0,0,0,10.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:33.6,alpha:0.5},0).wait(2));

	// png
	this.instance_1 = new lib.smallBlueBtn_UP();
	this.instance_1.setTransform(0,0.1);

	this.instance_2 = new lib.smallBlueBtn_OVER();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,62,63);


(lib.helpBtn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.btnHelpIcon();
	this.instance.setTransform(31.4,31,1,1,0,0,0,10.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:33,alpha:0.5},0).wait(2));

	// png
	this.instance_1 = new lib.smallBlueBtn_UP();
	this.instance_1.setTransform(0,0.1);

	this.instance_2 = new lib.smallBlueBtn_OVER();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,62,63);


(lib.exitPlaqueBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.textHolder = new lib.holderLarge();
	this.textHolder.setTransform(107.5,34.9,1,1,0,0,0,97.5,18.8);

	this.timeline.addTween(cjs.Tween.get(this.textHolder).wait(2).to({y:36.9,alpha:0.25},0).wait(2));

	// img
	this.instance = new lib.greenBtn_UP();
	this.instance.setTransform(0,0,1,1.016);

	this.instance_1 = new lib.greenBtn_OVER();
	this.instance_1.setTransform(0,0,1,1.016);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208,64);


(lib.exitGameBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.textHolder = new lib.holderLarge();
	this.textHolder.setTransform(107.5,34.9,1,1,0,0,0,97.5,18.8);

	this.timeline.addTween(cjs.Tween.get(this.textHolder).wait(2).to({y:36.9,alpha:0.25},0).wait(2));

	// img
	this.instance = new lib.greenBtn_UP();
	this.instance.setTransform(0,0,1,1.016);

	this.instance_1 = new lib.greenBtn_OVER();
	this.instance_1.setTransform(0,0,1,1.016);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208,64);


(lib.exitBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.backArrow();
	this.instance.setTransform(31,31.5,1,1,0,0,0,8,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:33.5,alpha:0.5},0).wait(2));

	// png
	this.instance_1 = new lib.smallBlueBtn_UP();

	this.instance_2 = new lib.smallBlueBtn_OVER();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,63);


(lib.errorPlaque_port = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.exitBtn = new lib.exitPlaqueBtn();
	this.exitBtn.setTransform(196.5,580);
	new cjs.ButtonHelper(this.exitBtn, 0, 1, 2, false, new lib.exitPlaqueBtn(), 3);

	this.text = new cjs.Text(" ", "25px 'Arial'", "#FFCC00");
	this.text.name = "text";
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 479;
	this.text.setTransform(299.5,224);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.exitBtn}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.5,1,1).p("EglogthMBLRAAAQBkAABGBGQBGBGAABkMAAABTjQAABkhGBGQhGBGhkAAMhLRAAAQhkAAhGhGQhGhGAAhkMAAAhTjQAAhkBGhGQBGhGBkAAg");
	this.shape.setTransform(300,377.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EgloAtiQhkAAhGhGQhGhGAAhkMAAAhTjQAAhkBGhGQBGhGBkAAMBLRAAAQBkAABGBGQBGBGAABkMAAABTjQAABkhGBGQhGBGhkAAg");
	this.shape_1.setTransform(300,377.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.639)").s().p("Egu3BLAMAAAiV/MBdvAAAMAAACV/g");
	this.shape_2.setTransform(300,480);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,960);


(lib.errorPlaque_land = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.exitBtn = new lib.exitPlaqueBtn();
	this.exitBtn.setTransform(374.5,423);
	new cjs.ButtonHelper(this.exitBtn, 0, 1, 2, false, new lib.exitPlaqueBtn(), 3);

	this.text = new cjs.Text(" ", "25px 'Arial'", "#FFCC00");
	this.text.name = "text";
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 792;
	this.text.setTransform(479,200.5);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.exitBtn}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.5,1,1).p("Eg81ggFMB5rAAAQBkAABGBGQBGBGAABkMAAAA4rQAABkhGBGQhGBGhkAAMh5rAAAQhkAAhGhGQhGhGAAhkMAAAg4rQAAhkBGhGQBGhGBkAAg");
	this.shape.setTransform(479.5,293.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Eg81AgGQhkAAhGhGQhGhGAAhkMAAAg4rQAAhkBGhGQBGhGBkAAMB5rAAAQBkAABGBGQBGBGAABkMAAAA4rQAABkhGBGQhGBGhkAAg");
	this.shape_1.setTransform(479.5,293.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.639)").s().p("EhK/Au4MAAAhdvMCV/AAAMAAABdvg");
	this.shape_2.setTransform(480,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,600);


(lib.continueBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.textHolder = new lib.holderLarge();
	this.textHolder.setTransform(107.5,34.9,1,1,0,0,0,97.5,18.8);

	this.timeline.addTween(cjs.Tween.get(this.textHolder).wait(2).to({y:36.9,alpha:0.25},0).wait(2));

	// img
	this.instance = new lib.greenBtn_UP();
	this.instance.setTransform(0,0,1,1.016);

	this.instance_1 = new lib.greenBtn_OVER();
	this.instance_1.setTransform(0,0,1,1.016);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208,64);


(lib.buyBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.textHolder = new lib.holderLarge();
	this.textHolder.setTransform(107.5,34.9,1,1,0,0,0,97.5,18.8);

	this.timeline.addTween(cjs.Tween.get(this.textHolder).wait(2).to({y:36.9,alpha:0.25},0).wait(2));

	// img
	this.instance = new lib.greenBtn_UP();
	this.instance.setTransform(0,0,1,1.016);

	this.instance_1 = new lib.greenBtn_OVER();
	this.instance_1.setTransform(0,0,1,1.016);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208,64);


(lib.audioOnBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.audioOnIcon_1();
	this.instance.setTransform(31,31.5,1,1,0,0,0,17,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:33.5,alpha:0.5},0).wait(2));

	// png
	this.instance_1 = new lib.smallBlueBtn_UP();

	this.instance_2 = new lib.smallBlueBtn_OVER();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,63);


(lib.audioOffBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.audioOffIcon_1();
	this.instance.setTransform(31,31.5,1,1,0,0,0,17,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:33.5,alpha:0.5},0).wait(2));

	// png
	this.instance_1 = new lib.smallRedBtn_UP();

	this.instance_2 = new lib.smallRedBtn_OVER();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,63);


(lib.timeoutWarningPlaque_port = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.continueBtn = new lib.continueBtn();
	this.continueBtn.setTransform(303.5,568);
	new cjs.ButtonHelper(this.continueBtn, 0, 1, 2, false, new lib.continueBtn(), 3);

	this.exitBtn = new lib.exitPlaqueBtn();
	this.exitBtn.setTransform(84.5,568);
	new cjs.ButtonHelper(this.exitBtn, 0, 1, 2, false, new lib.exitPlaqueBtn(), 3);

	this.text = new cjs.Text(" ", "bold 30px 'Arial'", "#FFCC00");
	this.text.name = "text";
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 479;
	this.text.setTransform(298.5,237);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.exitBtn},{t:this.continueBtn}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.5,1,1).p("EglogthMBLRAAAQBkAABGBGQBGBGAABkMAAABTjQAABkhGBGQhGBGhkAAMhLRAAAQhkAAhGhGQhGhGAAhkMAAAhTjQAAhkBGhGQBGhGBkAAg");
	this.shape.setTransform(299,377.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EgloAtiQhkAAhGhGQhGhGAAhkMAAAhTjQAAhkBGhGQBGhGBkAAMBLRAAAQBkAABGBGQBGBGAABkMAAABTjQAABkhGBGQhGBGhkAAg");
	this.shape_1.setTransform(299,377.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.639)").s().p("Egu3BLAMAAAiV/MBdvAAAMAAACV/g");
	this.shape_2.setTransform(300,480);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,960);


(lib.timeoutWarningPlaque_land = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// continueBtn
	this.continueBtn = new lib.continueBtn();
	this.continueBtn.setTransform(485,418);
	new cjs.ButtonHelper(this.continueBtn, 0, 1, 2, false, new lib.continueBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.continueBtn).wait(1));

	// exitBtn
	this.exitBtn = new lib.exitPlaqueBtn();
	this.exitBtn.setTransform(266,418);
	new cjs.ButtonHelper(this.exitBtn, 0, 1, 2, false, new lib.exitPlaqueBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.exitBtn).wait(1));

	// text
	this.text = new cjs.Text(" ", "bold 30px 'Arial'", "#FFCC00");
	this.text.name = "text";
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 792;
	this.text.setTransform(478,191.5);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.5,1,1).p("Eg81ggFMB5rAAAQBkAABGBGQBGBGAABkMAAAA4rQAABkhGBGQhGBGhkAAMh5rAAAQhkAAhGhGQhGhGAAhkMAAAg4rQAAhkBGhGQBGhGBkAAg");
	this.shape.setTransform(480,293.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Eg81AgGQhkAAhGhGQhGhGAAhkMAAAg4rQAAhkBGhGQBGhGBkAAMB5rAAAQBkAABGBGQBGBGAABkMAAAA4rQAABkhGBGQhGBGhkAAg");
	this.shape_1.setTransform(480,293.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.639)").s().p("EhK/Au4MAAAhdvMCV/AAAMAAABdvg");
	this.shape_2.setTransform(480,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,600);


(lib.revealingRiches_UI_portrait = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// loading
	this.loadingAnim = new lib.loaderAnim();
	this.loadingAnim.setTransform(301,357.5,1,1,0,0,0,65,65);

	this.timeline.addTween(cjs.Tween.get(this.loadingAnim).wait(1));

	// errorPlaque
	this.errorPlaque = new lib.errorPlaque_port();
	this.errorPlaque.setTransform(480,274.5,1,1,0,0,0,480,274.5);

	this.timeline.addTween(cjs.Tween.get(this.errorPlaque).wait(1));

	// timeoutWarningPlaque
	this.timeoutWarningPlaque = new lib.timeoutWarningPlaque_port();
	this.timeoutWarningPlaque.setTransform(480,274.5,1,1,0,0,0,480,274.5);

	this.timeline.addTween(cjs.Tween.get(this.timeoutWarningPlaque).wait(1));

	// UI
	this.plusBtn = new lib.plusBtn();
	this.plusBtn.setTransform(437,41.5,1,1,0,0,0,31,31);
	new cjs.ButtonHelper(this.plusBtn, 0, 1, 2, false, new lib.plusBtn(), 3);

	this.minusBtn = new lib.minusBtn();
	this.minusBtn.setTransform(163,47,1,1,0,0,0,31,36.5);
	new cjs.ButtonHelper(this.minusBtn, 0, 1, 2, false, new lib.minusBtn(), 3);

	this.betMeter = new lib.betMeter();
	this.betMeter.setTransform(280,48,1,1,0,0,0,84,38);

	this.audioOnBtn = new lib.audioOnBtn();
	this.audioOnBtn.setTransform(304,46.5,1,1,0,0,0,35,36.5);
	new cjs.ButtonHelper(this.audioOnBtn, 0, 1, 2, false, new lib.audioOnBtn(), 3);

	this.exitBtn = new lib.exitBtn();
	this.exitBtn.setTransform(304,46.5,1,1,0,0,0,35,36.5);
	new cjs.ButtonHelper(this.exitBtn, 0, 1, 2, false, new lib.exitBtn(), 3);

	this.audioOffBtn = new lib.audioOffBtn();
	this.audioOffBtn.setTransform(304,46.5,1,1,0,0,0,35,36.5);
	new cjs.ButtonHelper(this.audioOffBtn, 0, 1, 2, false, new lib.audioOffBtn(), 3);

	this.helpBtn = new lib.helpBtn();
	this.helpBtn.setTransform(304,46.5,1,1,0,0,0,35,36.5);
	new cjs.ButtonHelper(this.helpBtn, 0, 1, 2, false, new lib.helpBtn(), 3);

	this.helpCloseBtn = new lib.helpCloseBtn();
	this.helpCloseBtn.setTransform(304,46.5,1,1,0,0,0,35,36.5);
	new cjs.ButtonHelper(this.helpCloseBtn, 0, 1, 2, false, new lib.helpCloseBtn(), 3);

	this.helpBtn_1 = new lib.helpBtn();
	this.helpBtn_1.setTransform(527,10);
	new cjs.ButtonHelper(this.helpBtn_1, 0, 1, 2, false, new lib.helpBtn(), 3);

	this.helpCloseBtn_1 = new lib.helpCloseBtn();
	this.helpCloseBtn_1.setTransform(562,46.5,1,1,0,0,0,35,36.5);
	new cjs.ButtonHelper(this.helpCloseBtn_1, 0, 1, 2, false, new lib.helpCloseBtn(), 3);

	this.audioOnBtn_1 = new lib.audioOnBtn();
	this.audioOnBtn_1.setTransform(10.6,10);
	new cjs.ButtonHelper(this.audioOnBtn_1, 0, 1, 2, false, new lib.audioOnBtn(), 3);

	this.exitBtn_1 = new lib.exitBtn();
	this.exitBtn_1.setTransform(45.6,46.5,1,1,0,0,0,35,36.5);
	new cjs.ButtonHelper(this.exitBtn_1, 0, 1, 2, false, new lib.exitBtn(), 3);

	this.audioOffBtn_1 = new lib.audioOffBtn();
	this.audioOffBtn_1.setTransform(45.6,46.5,1,1,0,0,0,35,36.5);
	new cjs.ButtonHelper(this.audioOffBtn_1, 0, 1, 2, false, new lib.audioOffBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.audioOffBtn_1},{t:this.exitBtn_1},{t:this.audioOnBtn_1},{t:this.helpCloseBtn_1},{t:this.helpBtn_1},{t:this.helpCloseBtn},{t:this.helpBtn},{t:this.audioOffBtn},{t:this.exitBtn},{t:this.audioOnBtn},{t:this.betMeter},{t:this.minusBtn},{t:this.plusBtn}]}).wait(1));

	// playForMoneyBtn
	this.playForMoneyBtn = new lib.PlayforMoney();
	this.playForMoneyBtn.setTransform(104,919.3,1,1,0,0,0,93,33.5);
	new cjs.ButtonHelper(this.playForMoneyBtn, 0, 1, 2, false, new lib.PlayforMoney(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playForMoneyBtn).wait(1));

	// winMeter
	this.winMeter = new lib.winsMeter();
	this.winMeter.setTransform(474,919.3,1,1,0,0,0,93,33.5);

	this.timeline.addTween(cjs.Tween.get(this.winMeter).wait(1));

	// balanceMeter
	this.balanceMeter = new lib.balanceMeter();
	this.balanceMeter.setTransform(104,919.3,1,1,0,0,0,93,33.5);

	this.timeline.addTween(cjs.Tween.get(this.balanceMeter).wait(1));

	// playAllBtn
	this.playAllBtn = new lib.PortraitPlayAllBtn();
	this.playAllBtn.setTransform(222.5,884.8);
	new cjs.ButtonHelper(this.playAllBtn, 0, 1, 2, false, new lib.PortraitPlayAllBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playAllBtn).wait(1));

	// playOneBtn
	this.playOneBtn = new lib.PortraitPlayOneBtn();
	this.playOneBtn.setTransform(222.5,884.8);
	new cjs.ButtonHelper(this.playOneBtn, 0, 1, 2, false, new lib.PortraitPlayOneBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playOneBtn).wait(1));

	// exitGameBtn
	this.exitGameBtn = new lib.portraitexitGameBtn();
	this.exitGameBtn.setTransform(222.5,884.8);
	new cjs.ButtonHelper(this.exitGameBtn, 0, 1, 2, false, new lib.portraitexitGameBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.exitGameBtn).wait(1));

	// buyBtn
	this.buyBtn = new lib.portaitbuyBtn();
	this.buyBtn.setTransform(222.5,884.8);
	new cjs.ButtonHelper(this.buyBtn, 0, 1, 2, false, new lib.portaitbuyBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.buyBtn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,960);


(lib.revealingRiches_UI_landscape = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// loading
	this.loadingAnim = new lib.loaderAnim();
	this.loadingAnim.setTransform(483,281,1,1,0,0,0,65,65);

	this.timeline.addTween(cjs.Tween.get(this.loadingAnim).wait(1));

	// errorPlaque
	this.errorPlaque = new lib.errorPlaque_land();
	this.errorPlaque.setTransform(480,274.5,1,1,0,0,0,480,274.5);

	this.timeline.addTween(cjs.Tween.get(this.errorPlaque).wait(1));

	// timeoutWarningPlaque
	this.timeoutWarningPlaque = new lib.timeoutWarningPlaque_land();
	this.timeoutWarningPlaque.setTransform(480,274.5,1,1,0,0,0,480,274.5);

	this.timeline.addTween(cjs.Tween.get(this.timeoutWarningPlaque).wait(1));

	// buyBtn
	this.buyBtn = new lib.buyBtn();
	this.buyBtn.setTransform(449.5,568.3,1,1,0,0,0,73.5,37);
	new cjs.ButtonHelper(this.buyBtn, 0, 1, 2, false, new lib.buyBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.buyBtn).wait(1));

	// UI
	this.plusBtn = new lib.plusBtn();
	this.plusBtn.setTransform(586.3,2.5);
	new cjs.ButtonHelper(this.plusBtn, 0, 1, 2, false, new lib.plusBtn(), 3);

	this.minusBtn = new lib.minusBtn();
	this.minusBtn.setTransform(311.8,2.5);
	new cjs.ButtonHelper(this.minusBtn, 0, 1, 2, false, new lib.minusBtn(), 3);

	this.audioOnBtn = new lib.audioOnBtn();
	this.audioOnBtn.setTransform(10.6,5);
	new cjs.ButtonHelper(this.audioOnBtn, 0, 1, 2, false, new lib.audioOnBtn(), 3);

	this.helpBtn = new lib.helpBtn();
	this.helpBtn.setTransform(893,5);
	new cjs.ButtonHelper(this.helpBtn, 0, 1, 2, false, new lib.helpBtn(), 3);

	this.exitBtn = new lib.exitBtn();
	this.exitBtn.setTransform(45.6,41.5,1,1,0,0,0,35,36.5);
	new cjs.ButtonHelper(this.exitBtn, 0, 1, 2, false, new lib.exitBtn(), 3);

	this.betMeter = new lib.betMeter();
	this.betMeter.setTransform(376,2);

	this.winMeter = new lib.winsMeter();
	this.winMeter.setTransform(806.4,564.8,1,1,0,0,0,93,33.5);

	this.audioOffBtn = new lib.audioOffBtn();
	this.audioOffBtn.setTransform(45.6,41.5,1,1,0,0,0,35,36.5);
	new cjs.ButtonHelper(this.audioOffBtn, 0, 1, 2, false, new lib.audioOffBtn(), 3);

	this.helpCloseBtn = new lib.helpCloseBtn();
	this.helpCloseBtn.setTransform(928,41.5,1,1,0,0,0,35,36.5);
	new cjs.ButtonHelper(this.helpCloseBtn, 0, 1, 2, false, new lib.helpCloseBtn(), 3);

	this.playForMoneyBtn = new lib.PlayforMoney();
	this.playForMoneyBtn.setTransform(38.6,531.3);
	new cjs.ButtonHelper(this.playForMoneyBtn, 0, 1, 2, false, new lib.PlayforMoney(), 3);

	this.balanceMeter = new lib.balanceMeter();
	this.balanceMeter.setTransform(131.6,564.8,1,1,0,0,0,93,33.5);

	this.playAllBtn = new lib.playAllBtn();
	this.playAllBtn.setTransform(376,531.3);
	new cjs.ButtonHelper(this.playAllBtn, 0, 1, 2, false, new lib.playAllBtn(), 3);

	this.exitGameBtn = new lib.exitGameBtn();
	this.exitGameBtn.setTransform(449.5,568.3,1,1,0,0,0,73.5,37);
	new cjs.ButtonHelper(this.exitGameBtn, 0, 1, 2, false, new lib.exitGameBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.exitGameBtn},{t:this.playAllBtn},{t:this.balanceMeter},{t:this.playForMoneyBtn},{t:this.helpCloseBtn},{t:this.audioOffBtn},{t:this.winMeter},{t:this.betMeter},{t:this.exitBtn},{t:this.helpBtn},{t:this.audioOnBtn},{t:this.minusBtn},{t:this.plusBtn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,600);


// stage content:
(lib.revealingRichesUI_Ben = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,300,960,960);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
