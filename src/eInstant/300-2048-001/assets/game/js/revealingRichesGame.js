(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 960,
	height: 600,
	fps: 30,
	color: "#000000",
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



(lib.amethystAbyssLogo = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.amethystCaveBig = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.amethystChain = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.amethystKey = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.amythstCellColour = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.audioOffIcon = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bigGoldCave = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blue = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blueReveal = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.closeBtnDown = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.closeBtnUp = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.closeIcon = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.crystal = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.crystalCaveBig = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.crystalCavernLogo = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.crystalCellColour = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.crystalChain = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.crystalKey1 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.crystalKey = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.crystalReveal = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.crystalSweep_00000 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.crystalSweep_00002 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.crystalSweep_00004 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.crystalSweep_00006 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.crystalSweep_00008 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.crystalSweep_00010 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.crystalSweep_00012 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.crystalSweep_00014 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.crystalSweep_00016 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.crystalSweep_00018 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.crystalSweep_00020 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.crystalSweep_00022 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.crystalSweep_00024 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.crystalSweep_00026 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.crystalSweep_00028 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.crystalSweep_00029 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.emeraldCaveBig = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.emeraldCellColour = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.emeraldChain = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.emeraldExpanseLogo = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.emeraldKey1 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.emeraldKey = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.glittery195_00000 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.glittery195_00002 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.glittery195_00004 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.glittery195_00006 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.glittery195_00008 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.glittery195_00010 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.glittery195_00012 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.glittery195_00014 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.glittery195_00016 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.glittery195_00018 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.glittery195_00020 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.glittery195_00022 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.glittery195_00024 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.glittery195_00026 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.glittery195_00028 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.glossyPlaqueBg = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.gold = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.goldCellColour = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.goldChain = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.golden_payMeter_off = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.goldenGorgeLogo = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.goldKey = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.goldReveal = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.goldSweep_00000 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.goldSweep_00002 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.goldSweep_00004 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.goldSweep_00006 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.goldSweep_00008 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.goldSweep_00010 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.goldSweep_00012 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.goldSweep_00014 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.goldSweep_00016 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.goldSweep_00018 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.goldSweep_00020 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.goldSweep_00022 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.goldSweep_00024 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.goldSweep_00026 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.goldSweep_00028 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.goldSweep_00029 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.green = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.greenReveal = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.greenSweep_00000 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.greenSweep_00002 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.greenSweep_00004 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.greenSweep_00006 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.greenSweep_00008 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.greenSweep_00010 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.greenSweep_00012 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.greenSweep_00014 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.greenSweep_00016 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.greenSweep_00018 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.greenSweep_00020 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.greenSweep_00022 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.greenSweep_00024 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.greenSweep_00026 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.greenSweep_00028 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.greenSweep_00029 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.keyHolder = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.keyHolderPlaque = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.locked = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.lockFrontPiece = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.lockUnlocked = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.menuCellBackground = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.menuCellOff = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.messageBoardLrg = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.numberHilight = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.pink = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.pinkReveal = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.pinkSweep_00000 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.pinkSweep_00002 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.pinkSweep_00004 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.pinkSweep_00006 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.pinkSweep_00008 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.pinkSweep_00010 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.pinkSweep_00012 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.pinkSweep_00014 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.pinkSweep_00016 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.pinkSweep_00018 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.pinkSweep_00020 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.pinkSweep_00022 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.pinkSweep_00024 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.pinkSweep_00026 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.pinkSweep_00028 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.pinkSweep_00029 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.plaqueGems = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.plaqueSeperator = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.radioBtn_on1 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.red = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.redReveal = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.redSweep_00000 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.redSweep_00002 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.redSweep_00004 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.redSweep_00006 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.redSweep_00008 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.redSweep_00010 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.redSweep_00012 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.redSweep_00014 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.redSweep_00016 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.redSweep_00018 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.redSweep_00020 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.redSweep_00022 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.redSweep_00024 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.redSweep_00026 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.redSweep_00028 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.redSweep_00029 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00000 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00001 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00002 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00003 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00004 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00005 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00006 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00007 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00008 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00009 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00010 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00011 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00012 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00013 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00014 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00015 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00016 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00017 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00018 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00019 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00020 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00021 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00022 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00023 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00024 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00025 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00026 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00027 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.revealSparkles_00028 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.rubyCaveBig = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.rubyCellColour = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.rubyKey = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.rubyRavineLogo = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_2"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.sapphireCaveBig = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.sapphireCellColour = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.sapphireKey = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.sapphireShelfLogo = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.sapphireSweep_00000 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.sapphireSweep_00002 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.sapphireSweep_00004 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.sapphireSweep_00006 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.sapphireSweep_00008 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.sapphireSweep_00010 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.sapphireSweep_00012 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.sapphireSweep_00014 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.sapphireSweep_00016 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.sapphireSweep_00018 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.sapphireSweep_00020 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.sapphireSweep_00022 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.sapphireSweep_00024 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.sapphireSweep_00026 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.sapphireSweep_00028 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.sapphireSweep_00029 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.smallRedBtn_OVER11 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.smallRedBtn_OVER = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.smallRedBtn_UP = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.swoosh = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.tileAmethyst = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.tileBlank01 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.tileBlank02 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.tileBlank03 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.tileBlank04 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.tileCrystal = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.tileEmerald = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.tileGold = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.tileRuby = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.tileSapphire = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.tileSweep_00001 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.tileSweep_00002 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.tileSweep_00003 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.tileSweep_00004 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.tileWord = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.unlockAnim_00000 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.unlockAnim_00001 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.unlockAnim_00002 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.unlockAnim_00003 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.unlockAnim_00004 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.unlockAnim_00005 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.unlockAnim_00006 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.unlockAnim_00007 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.unlockAnim_00008 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.unlockAnim_00009 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.unlockAnim_00010 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.unlockAnim_00011 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.unlockAnim_00012 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.unlockAnim_00013 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.unlockAnim_00014 = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.wordCountBg = function() {
	this.spriteSheet = ss["revealingRichesGame_atlas_3"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.wordCountBg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wordCountBg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,28);


(lib.winGems = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plaqueGems();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,528,179);


(lib.unlockAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(1));

	// Layer 1
	this.instance = new lib.unlockAnim_00000();
	this.instance.setTransform(-148.5,-123.5);

	this.instance_1 = new lib.unlockAnim_00001();
	this.instance_1.setTransform(-148.5,-123.5);

	this.instance_2 = new lib.unlockAnim_00002();
	this.instance_2.setTransform(-148.5,-123.5);

	this.instance_3 = new lib.unlockAnim_00003();
	this.instance_3.setTransform(-148.5,-123.5);

	this.instance_4 = new lib.unlockAnim_00004();
	this.instance_4.setTransform(-148.5,-123.5);

	this.instance_5 = new lib.unlockAnim_00005();
	this.instance_5.setTransform(-148.5,-123.5);

	this.instance_6 = new lib.unlockAnim_00006();
	this.instance_6.setTransform(-148.5,-123.5);

	this.instance_7 = new lib.unlockAnim_00007();
	this.instance_7.setTransform(-148.5,-123.5);

	this.instance_8 = new lib.unlockAnim_00008();
	this.instance_8.setTransform(-148.5,-123.5);

	this.instance_9 = new lib.unlockAnim_00009();
	this.instance_9.setTransform(-148.5,-123.5);

	this.instance_10 = new lib.unlockAnim_00010();
	this.instance_10.setTransform(-148.5,-123.5);

	this.instance_11 = new lib.unlockAnim_00011();
	this.instance_11.setTransform(-148.5,-123.5);

	this.instance_12 = new lib.unlockAnim_00012();
	this.instance_12.setTransform(-148.5,-123.5);

	this.instance_13 = new lib.unlockAnim_00013();
	this.instance_13.setTransform(-148.5,-123.5);

	this.instance_14 = new lib.unlockAnim_00014();
	this.instance_14.setTransform(-148.5,-123.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.5,-123.5,297,247);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.amethystAbyssLogo();
	this.instance.setTransform(-217,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217,-89.5,434,179);


(lib.seperator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plaqueSeperator();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,321,6);


(lib.selectMessage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.label = new cjs.Text(" ", "bold 20px 'Arial'", "#F7BC82");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 24;
	this.label.lineWidth = 301;
	this.label.setTransform(159.5,467.4,1,1.018);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// Layer 1
	this.label_1 = new cjs.Text(" ", "bold 20px 'Arial'");
	this.label_1.name = "label_1";
	this.label_1.textAlign = "center";
	this.label_1.lineHeight = 24;
	this.label_1.lineWidth = 301;
	this.label_1.setTransform(161.5,468.4,1,1.018);

	this.timeline.addTween(cjs.Tween.get(this.label_1).wait(1));

	// Layer 2
	this.instance = new lib.messageBoardLrg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,324,519);


(lib.sapphirePickerKey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sapphireKey.png
	this.instance = new lib.sapphireKey();
	this.instance.setTransform(-5.3,-43.6,0.499,0.499,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-43.6,70.3,87.3);


(lib.sapphireCave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sapphireCaveBig();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,499,137);


(lib.saphireWordCountMeter_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sapphireCellColour.png
	this.instance = new lib.sapphireCellColour();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// menuCellBackground.png
	this.instance_1 = new lib.menuCellBackground();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.rubyCave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rubyCaveBig();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,499,118);


(lib.revealSparkles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.revealSparkles_00000();
	this.instance.setTransform(-125,-125);

	this.instance_1 = new lib.revealSparkles_00001();
	this.instance_1.setTransform(-125,-125);

	this.instance_2 = new lib.revealSparkles_00002();
	this.instance_2.setTransform(-125,-125);

	this.instance_3 = new lib.revealSparkles_00003();
	this.instance_3.setTransform(-125,-125);

	this.instance_4 = new lib.revealSparkles_00004();
	this.instance_4.setTransform(-125,-125);

	this.instance_5 = new lib.revealSparkles_00005();
	this.instance_5.setTransform(-125,-125);

	this.instance_6 = new lib.revealSparkles_00006();
	this.instance_6.setTransform(-125,-125);

	this.instance_7 = new lib.revealSparkles_00007();
	this.instance_7.setTransform(-125,-125);

	this.instance_8 = new lib.revealSparkles_00008();
	this.instance_8.setTransform(-125,-125);

	this.instance_9 = new lib.revealSparkles_00009();
	this.instance_9.setTransform(-125,-125);

	this.instance_10 = new lib.revealSparkles_00010();
	this.instance_10.setTransform(-125,-125);

	this.instance_11 = new lib.revealSparkles_00011();
	this.instance_11.setTransform(-125,-125);

	this.instance_12 = new lib.revealSparkles_00012();
	this.instance_12.setTransform(-125,-125);

	this.instance_13 = new lib.revealSparkles_00013();
	this.instance_13.setTransform(-125,-125);

	this.instance_14 = new lib.revealSparkles_00014();
	this.instance_14.setTransform(-125,-125);

	this.instance_15 = new lib.revealSparkles_00015();
	this.instance_15.setTransform(-125,-125);

	this.instance_16 = new lib.revealSparkles_00016();
	this.instance_16.setTransform(-125,-125);

	this.instance_17 = new lib.revealSparkles_00017();
	this.instance_17.setTransform(-125,-125);

	this.instance_18 = new lib.revealSparkles_00018();
	this.instance_18.setTransform(-125,-125);

	this.instance_19 = new lib.revealSparkles_00019();
	this.instance_19.setTransform(-125,-125);

	this.instance_20 = new lib.revealSparkles_00020();
	this.instance_20.setTransform(-125,-125);

	this.instance_21 = new lib.revealSparkles_00021();
	this.instance_21.setTransform(-125,-125);

	this.instance_22 = new lib.revealSparkles_00022();
	this.instance_22.setTransform(-125,-125);

	this.instance_23 = new lib.revealSparkles_00023();
	this.instance_23.setTransform(-125,-125);

	this.instance_24 = new lib.revealSparkles_00024();
	this.instance_24.setTransform(-125,-125);

	this.instance_25 = new lib.revealSparkles_00025();
	this.instance_25.setTransform(-125,-125);

	this.instance_26 = new lib.revealSparkles_00026();
	this.instance_26.setTransform(-125,-125);

	this.instance_27 = new lib.revealSparkles_00027();
	this.instance_27.setTransform(-125,-125);

	this.instance_28 = new lib.revealSparkles_00028();
	this.instance_28.setTransform(-125,-125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-125,250,250);


(lib.reveal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.letter = new cjs.Text(" ", "bold 96px 'Arial'", "#FFFFFF");
	this.letter.name = "letter";
	this.letter.textAlign = "center";
	this.letter.lineHeight = 109;
	this.letter.lineWidth = 79;
	this.letter.setTransform(-2,-57.4);

	this.timeline.addTween(cjs.Tween.get(this.letter).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-57.4,83,111.3);


(lib.redReveal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.redReveal();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.red_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.red();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.radioBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.radioBtn_on1();

	this.instance_1 = new lib.smallRedBtn_OVER11();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,63);


(lib.pinkReveal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pinkReveal();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.pink_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pink();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.numberLightStatic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.numberHilight();
	this.instance.setTransform(-92,-91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-91.5,184,183);


(lib.miniSapphireKey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sapphireKey();
	this.instance.setTransform(-3.2,-26.1,0.3,0.3,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-26.1,42.2,52.4);


(lib.miniRubyKey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rubyKey.png
	this.instance = new lib.rubyKey();
	this.instance.setTransform(-3.2,-26.1,0.3,0.3,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-26.1,42.2,52.4);


(lib.miniGoldKey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.goldKey();
	this.instance.setTransform(-3.2,-26.1,0.3,0.3,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-26.1,42.2,52.4);


(lib.miniEmeraldKey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.emeraldKey1();
	this.instance.setTransform(-3.3,-26.4,0.3,0.3,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-26.4,42.5,52.9);


(lib.miniCrystalKey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.crystalKey();
	this.instance.setTransform(-3.2,-26.1,0.3,0.3,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-26.1,42.2,52.4);


(lib.miniAmethystKey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.amethystKey();
	this.instance.setTransform(-3.2,-26.1,0.3,0.3,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-26.1,42.2,52.4);


(lib.menuCelloff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menuCellOff();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.lockUnlocked_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lockUnlocked();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,53);


(lib.lockFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lockFrontPiece();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19,28);


(lib.lockBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.locked();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,45);


(lib.keyHolder_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.keyHolder();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238,45);


(lib.greenReveal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.greenReveal();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.goldReveal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.goldReveal();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.goldPickerKey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.goldKey();
	this.instance.setTransform(29.8,0,0.499,0.499,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.3,87.3);


(lib.goldenGorgeLogo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.goldenGorgeLogo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,368,189);


(lib.goldChain_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.goldChain();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,227,29);


(lib.goldCave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bigGoldCave();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,501,270);


(lib.gold_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gold();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.emeraldPickerKey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// emeraldKey.png
	this.instance = new lib.emeraldKey();
	this.instance.setTransform(29.8,0,0.499,0.499,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.8,88.1);


(lib.emeraldGem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.green();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.emeraldChain_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.emeraldChain();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244,31);


(lib.emeraldCave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.emeraldCaveBig();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,497,164);


(lib.darkener = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhK/Au4MAAAhdvMCV/AAAMAAABdvg");
	this.shape.setTransform(480,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,600);


(lib.crystalReveal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.crystalReveal();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.crystalPickerKey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.crystalKey1();
	this.instance.setTransform(29.8,0,0.499,0.499,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.3,87.3);


(lib.crystalChain_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.crystalChain();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,28);


(lib.crystalCavernLogo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.crystalCavernLogo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469,161);


(lib.crystalCave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.crystalCaveBig();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,497,249);


(lib.crystal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// crystal.png
	this.instance = new lib.crystal();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172,189);


(lib.closeIcon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.closeIcon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,47);


(lib.caveSparkles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// right
	this.instance = new lib.glittery195_00022();
	this.instance.setTransform(-109,-52.1,0.518,0.518);

	this.instance_1 = new lib.glittery195_00024();
	this.instance_1.setTransform(-109,-52.1,0.518,0.518);

	this.instance_2 = new lib.glittery195_00026();
	this.instance_2.setTransform(-109,-52.1,0.518,0.518);

	this.instance_3 = new lib.glittery195_00028();
	this.instance_3.setTransform(-109,-52.1,0.518,0.518);

	this.instance_4 = new lib.glittery195_00000();
	this.instance_4.setTransform(-109,-52.1,0.518,0.518);

	this.instance_5 = new lib.glittery195_00002();
	this.instance_5.setTransform(-109,-52.1,0.518,0.518);

	this.instance_6 = new lib.glittery195_00004();
	this.instance_6.setTransform(-109,-52.1,0.518,0.518);

	this.instance_7 = new lib.glittery195_00006();
	this.instance_7.setTransform(-109,-52.1,0.518,0.518);

	this.instance_8 = new lib.glittery195_00008();
	this.instance_8.setTransform(-109,-52.1,0.518,0.518);

	this.instance_9 = new lib.glittery195_00010();
	this.instance_9.setTransform(-109,-52.1,0.518,0.518);

	this.instance_10 = new lib.glittery195_00012();
	this.instance_10.setTransform(-109,-52.1,0.518,0.518);

	this.instance_11 = new lib.glittery195_00014();
	this.instance_11.setTransform(-109,-52.1,0.518,0.518);

	this.instance_12 = new lib.glittery195_00016();
	this.instance_12.setTransform(-109,-52.1,0.518,0.518);

	this.instance_13 = new lib.glittery195_00018();
	this.instance_13.setTransform(-109,-52.1,0.518,0.518);

	this.instance_14 = new lib.glittery195_00020();
	this.instance_14.setTransform(-109,-52.1,0.518,0.518);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).wait(2));

	// middle
	this.instance_15 = new lib.glittery195_00006();
	this.instance_15.setTransform(35.9,-72,0.518,0.518,45);

	this.instance_16 = new lib.glittery195_00008();
	this.instance_16.setTransform(35.9,-72,0.518,0.518,45);

	this.instance_17 = new lib.glittery195_00010();
	this.instance_17.setTransform(35.9,-72,0.518,0.518,45);

	this.instance_18 = new lib.glittery195_00012();
	this.instance_18.setTransform(35.9,-72,0.518,0.518,45);

	this.instance_19 = new lib.glittery195_00014();
	this.instance_19.setTransform(35.9,-72,0.518,0.518,45);

	this.instance_20 = new lib.glittery195_00016();
	this.instance_20.setTransform(35.9,-72,0.518,0.518,45);

	this.instance_21 = new lib.glittery195_00018();
	this.instance_21.setTransform(35.9,-72,0.518,0.518,45);

	this.instance_22 = new lib.glittery195_00020();
	this.instance_22.setTransform(35.9,-72,0.518,0.518,45);

	this.instance_23 = new lib.glittery195_00022();
	this.instance_23.setTransform(35.9,-72,0.518,0.518,45);

	this.instance_24 = new lib.glittery195_00024();
	this.instance_24.setTransform(35.9,-72,0.518,0.518,45);

	this.instance_25 = new lib.glittery195_00026();
	this.instance_25.setTransform(35.9,-72,0.518,0.518,45);

	this.instance_26 = new lib.glittery195_00028();
	this.instance_26.setTransform(35.9,-72,0.518,0.518,45);

	this.instance_27 = new lib.glittery195_00000();
	this.instance_27.setTransform(35.9,-72,0.518,0.518,45);

	this.instance_28 = new lib.glittery195_00002();
	this.instance_28.setTransform(35.9,-72,0.518,0.518,45);

	this.instance_29 = new lib.glittery195_00004();
	this.instance_29.setTransform(35.9,-72,0.518,0.518,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_29}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-72,216.3,142.8);


(lib.wordTile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tileWord();
	this.instance.setTransform(-17,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34,34);


(lib.tileBlank04_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tileBlank01.png
	this.instance = new lib.tileBlank01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.tileBlank03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tileBlank02.png
	this.instance = new lib.tileBlank02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.tileBlank02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tileBlank03.png
	this.instance = new lib.tileBlank03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.tileBlank01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tileBlank04.png
	this.instance = new lib.tileBlank04();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.sapphireTile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tileSapphire();
	this.instance.setTransform(-17,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34,34);


(lib.sapphireLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sapphireShelfLogo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,575,153);


(lib.rubyWordCountMeter_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rubyCellColour.png
	this.instance = new lib.rubyCellColour();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// menuCellBackground.png
	this.instance_1 = new lib.menuCellBackground();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.rubyTile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tileRuby();
	this.instance.setTransform(-17,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34,34);


(lib.rubyLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rubyRavineLogo.png
	this.instance = new lib.rubyRavineLogo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,503,123);


(lib.lightPingAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.glittery195_00000();

	this.instance_1 = new lib.glittery195_00002();

	this.instance_2 = new lib.glittery195_00004();

	this.instance_3 = new lib.glittery195_00006();

	this.instance_4 = new lib.glittery195_00008();

	this.instance_5 = new lib.glittery195_00010();

	this.instance_6 = new lib.glittery195_00012();

	this.instance_7 = new lib.glittery195_00014();

	this.instance_8 = new lib.glittery195_00016();

	this.instance_9 = new lib.glittery195_00018();

	this.instance_10 = new lib.glittery195_00020();

	this.instance_11 = new lib.glittery195_00022();

	this.instance_12 = new lib.glittery195_00024();

	this.instance_13 = new lib.glittery195_00026();

	this.instance_14 = new lib.glittery195_00028();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195,195);


(lib.goldTile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tileGold();
	this.instance.setTransform(-17,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34,34);


(lib.goldenWordCountMeter_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// goldCellColour.png
	this.instance = new lib.goldCellColour();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// menuCellBackground.png
	this.instance_1 = new lib.menuCellBackground();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.goldenLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.goldenGorgeLogo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,368,189);


(lib.emeraldWordCountMeter_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// crystalCellColour.png
	this.instance = new lib.emeraldCellColour();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// menuCellBackground.png
	this.instance_1 = new lib.menuCellBackground();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.emeraldTile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tileEmerald();
	this.instance.setTransform(-17,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34,34);


(lib.emeraldLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// emeraldExpanseLogo.png
	this.instance = new lib.emeraldExpanseLogo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,416,171);


(lib.crystalWordCountMeter_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// crystalCellColour.png
	this.instance = new lib.crystalCellColour();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// menuCellBackground.png
	this.instance_1 = new lib.menuCellBackground();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.crystalTile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tileCrystal();
	this.instance.setTransform(-17,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34,34);


(lib.crystalLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.crystalCavernLogo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469,161);


(lib.amethystTile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tileAmethyst();
	this.instance.setTransform(-17,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34,34);


(lib.amathystWordCountMeter_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// amythstCellColour.png
	this.instance = new lib.amythstCellColour();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// menuCellBackground.png
	this.instance_1 = new lib.menuCellBackground();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.amathystLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.amethystAbyssLogo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,434,179);


(lib.blueReveal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blueReveal();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.blue_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blue();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.audioOffIcon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.audioOffIcon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,29);


(lib.winValue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.value = new cjs.Text(" ", "bold 100px 'Arial'", "#F7BC82");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 114;
	this.value.lineWidth = 461;
	this.value.setTransform(232.4,2);

	this.timeline.addTween(cjs.Tween.get(this.value).wait(1));

	// Layer 1 copy
	this.value_1 = new cjs.Text(" ", "bold 100px 'Arial'");
	this.value_1.name = "value_1";
	this.value_1.textAlign = "center";
	this.value_1.lineHeight = 114;
	this.value_1.lineWidth = 461;
	this.value_1.setTransform(234.4,3);

	this.timeline.addTween(cjs.Tween.get(this.value_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,467,136);


(lib.winMessage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label copy
	this.text = new cjs.Text(" ", "bold 40px 'Arial'", "#F5BC83");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 514;
	this.text.setTransform(257,0);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// label
	this.text_1 = new cjs.Text(" ", "bold 40px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 47;
	this.text_1.lineWidth = 514;
	this.text_1.setTransform(259,1);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,520,103);


(lib.amethystPickerKey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.amethystKey();
	this.instance.setTransform(29.8,0,0.499,0.499,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.3,87.3);


(lib.amethystLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.amethystAbyssLogo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,434,179);


(lib.amethystCave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.amethystCaveBig();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,202);


(lib.amethstChain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.amethystChain();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251,34);


(lib._1Pix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,255,0,0.973)").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.swoosh_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1Pix
	this.instance = new lib._1Pix();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.swoosh();
	this.instance_1.setTransform(0,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,457);


(lib.selectMessageOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// selectMessage
	this.instance = new lib.selectMessage();
	this.instance.setTransform(116,258.5,1,1,0,0,0,116,259.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:262.1},1).to({y:-106.4},28,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,324,519);


(lib.selectMessageIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// selectMessage
	this.instance = new lib.selectMessage();
	this.instance.setTransform(116,-106.4,1,1,0,0,0,116,259.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:262.1},28,cjs.Ease.get(1)).to({y:258.5},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-365.9,324,519);


(lib.sapphireSwoosh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1Pix
	this.instance = new lib._1Pix();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.swoosh();
	this.instance_1.setTransform(0,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,457);


(lib.sapphireLogoAnimPort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.sapphireLogo = new lib.sapphireLogo();
	this.sapphireLogo.setTransform(181,81,0.5,0.5,0,0,0,288.4,78.1);
	this.sapphireLogo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.sapphireLogo).to({scaleX:0.65,scaleY:0.65,alpha:0.961},28).to({scaleX:0.63,scaleY:0.63,x:180.9,alpha:1},1).wait(1));

	// Layer 3
	this.instance = new lib.glittery195_00000();
	this.instance.setTransform(163.4,-63.6,1,1,44.9);

	this.instance_1 = new lib.glittery195_00002();
	this.instance_1.setTransform(163.4,-63.6,1,1,44.9);

	this.instance_2 = new lib.glittery195_00004();
	this.instance_2.setTransform(163.4,-63.6,1,1,44.9);

	this.instance_3 = new lib.glittery195_00006();
	this.instance_3.setTransform(163.4,-63.6,1,1,44.9);

	this.instance_4 = new lib.glittery195_00008();
	this.instance_4.setTransform(163.4,-63.6,1,1,44.9);

	this.instance_5 = new lib.glittery195_00010();
	this.instance_5.setTransform(163.4,-63.6,1,1,44.9);

	this.instance_6 = new lib.glittery195_00012();
	this.instance_6.setTransform(163.4,-63.6,1,1,44.9);

	this.instance_7 = new lib.glittery195_00014();
	this.instance_7.setTransform(163.4,-63.6,1,1,44.9);

	this.instance_8 = new lib.glittery195_00016();
	this.instance_8.setTransform(163.4,-63.6,1,1,44.9);

	this.instance_9 = new lib.glittery195_00018();
	this.instance_9.setTransform(163.4,-63.6,1,1,44.9);

	this.instance_10 = new lib.glittery195_00020();
	this.instance_10.setTransform(163.4,-63.6,1,1,44.9);

	this.instance_11 = new lib.glittery195_00022();
	this.instance_11.setTransform(163.4,-63.6,1,1,44.9);

	this.instance_12 = new lib.glittery195_00024();
	this.instance_12.setTransform(163.4,-63.6,1,1,44.9);

	this.instance_13 = new lib.glittery195_00026();
	this.instance_13.setTransform(163.4,-63.6,1,1,44.9);

	this.instance_14 = new lib.glittery195_00028();
	this.instance_14.setTransform(163.4,-63.6,1,1,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[]},1).wait(1));

	// Layer 2
	this.instance_15 = new lib.crystalCave();
	this.instance_15.setTransform(289,801.9,0.898,0.719,0,0,0,248.5,124.5);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.6,-63.6,486.7,955);


(lib.sapphireLogoAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.sapphireLogo = new lib.sapphireLogo();
	this.sapphireLogo.setTransform(181,49,0.5,0.5,0,0,0,288.4,78.1);
	this.sapphireLogo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.sapphireLogo).to({scaleX:0.65,scaleY:0.65,alpha:0.961},28).to({scaleX:0.63,scaleY:0.63,x:180.9,alpha:1},1).wait(1));

	// Layer 3
	this.instance = new lib.glittery195_00000();
	this.instance.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_1 = new lib.glittery195_00002();
	this.instance_1.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_2 = new lib.glittery195_00004();
	this.instance_2.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_3 = new lib.glittery195_00006();
	this.instance_3.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_4 = new lib.glittery195_00008();
	this.instance_4.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_5 = new lib.glittery195_00010();
	this.instance_5.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_6 = new lib.glittery195_00012();
	this.instance_6.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_7 = new lib.glittery195_00014();
	this.instance_7.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_8 = new lib.glittery195_00016();
	this.instance_8.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_9 = new lib.glittery195_00018();
	this.instance_9.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_10 = new lib.glittery195_00020();
	this.instance_10.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_11 = new lib.glittery195_00022();
	this.instance_11.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_12 = new lib.glittery195_00024();
	this.instance_12.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_13 = new lib.glittery195_00026();
	this.instance_13.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_14 = new lib.glittery195_00028();
	this.instance_14.setTransform(163.4,-95.6,1,1,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[]},1).wait(1));

	// Layer 2
	this.instance_15 = new lib.crystalCave();
	this.instance_15.setTransform(639.7,638.6,1.25,1,0,0,0,248.5,124.5);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.6,-95.6,924.6,858.7);


(lib.saphireWordCountMeter_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// menuCelloff
	this.instance = new lib.menuCelloff();
	this.instance.setTransform(105,23.5,1,1,0,0,0,105,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sapphireCellColour.png
	this.instance_1 = new lib.sapphireCellColour();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// menuCellBackground.png
	this.instance_2 = new lib.menuCellBackground();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.rubySwoosh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1Pix
	this.instance = new lib._1Pix();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.swoosh();
	this.instance_1.setTransform(0,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,457);


(lib.rubyLogAnimPort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.rubyLogo = new lib.rubyLogo();
	this.rubyLogo.setTransform(185,81,0.6,0.522,0,0,0,254.8,60.8);
	this.rubyLogo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.rubyLogo).to({regY:60.9,scaleX:0.72,scaleY:0.63,alpha:1},28).to({regX:254.7,regY:60.8,scaleX:0.7,scaleY:0.61},1).wait(1));

	// Layer 3
	this.instance = new lib.glittery195_00000();
	this.instance.setTransform(155.4,-54.6,1,1,44.9);

	this.instance_1 = new lib.glittery195_00002();
	this.instance_1.setTransform(155.4,-54.6,1,1,44.9);

	this.instance_2 = new lib.glittery195_00004();
	this.instance_2.setTransform(155.4,-54.6,1,1,44.9);

	this.instance_3 = new lib.glittery195_00006();
	this.instance_3.setTransform(155.4,-54.6,1,1,44.9);

	this.instance_4 = new lib.glittery195_00008();
	this.instance_4.setTransform(155.4,-54.6,1,1,44.9);

	this.instance_5 = new lib.glittery195_00010();
	this.instance_5.setTransform(155.4,-54.6,1,1,44.9);

	this.instance_6 = new lib.glittery195_00012();
	this.instance_6.setTransform(155.4,-54.6,1,1,44.9);

	this.instance_7 = new lib.glittery195_00014();
	this.instance_7.setTransform(155.4,-54.6,1,1,44.9);

	this.instance_8 = new lib.glittery195_00016();
	this.instance_8.setTransform(155.4,-54.6,1,1,44.9);

	this.instance_9 = new lib.glittery195_00018();
	this.instance_9.setTransform(155.4,-54.6,1,1,44.9);

	this.instance_10 = new lib.glittery195_00020();
	this.instance_10.setTransform(155.4,-54.6,1,1,44.9);

	this.instance_11 = new lib.glittery195_00022();
	this.instance_11.setTransform(155.4,-54.6,1,1,44.9);

	this.instance_12 = new lib.glittery195_00024();
	this.instance_12.setTransform(155.4,-54.6,1,1,44.9);

	this.instance_13 = new lib.glittery195_00026();
	this.instance_13.setTransform(155.4,-54.6,1,1,44.9);

	this.instance_14 = new lib.glittery195_00028();
	this.instance_14.setTransform(155.4,-54.6,1,1,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[]},1).wait(1));

	// Layer 2
	this.instance_15 = new lib.rubyCave();
	this.instance_15.setTransform(297.8,830.6,1.015,1.015,0,0,0,249.5,59);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.6,-54.6,533.3,945.1);


(lib.rubyLogAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.rubyLogo = new lib.rubyLogo();
	this.rubyLogo.setTransform(193,40,0.6,0.522,0,0,0,254.8,60.8);
	this.rubyLogo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.rubyLogo).to({scaleX:0.78,scaleY:0.68,y:40.1,alpha:1},28).to({scaleX:0.76,scaleY:0.66},1).wait(1));

	// Layer 3
	this.instance = new lib.glittery195_00000();
	this.instance.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_1 = new lib.glittery195_00002();
	this.instance_1.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_2 = new lib.glittery195_00004();
	this.instance_2.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_3 = new lib.glittery195_00006();
	this.instance_3.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_4 = new lib.glittery195_00008();
	this.instance_4.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_5 = new lib.glittery195_00010();
	this.instance_5.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_6 = new lib.glittery195_00012();
	this.instance_6.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_7 = new lib.glittery195_00014();
	this.instance_7.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_8 = new lib.glittery195_00016();
	this.instance_8.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_9 = new lib.glittery195_00018();
	this.instance_9.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_10 = new lib.glittery195_00020();
	this.instance_10.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_11 = new lib.glittery195_00022();
	this.instance_11.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_12 = new lib.glittery195_00024();
	this.instance_12.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_13 = new lib.glittery195_00026();
	this.instance_13.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_14 = new lib.glittery195_00028();
	this.instance_14.setTransform(163.4,-95.6,1,1,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[]},1).wait(1));

	// Layer 2
	this.instance_15 = new lib.rubyCave();
	this.instance_15.setTransform(669,667.5,1.693,1.693,0,0,0,249.5,59);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.6,-95.6,1065.7,863);


(lib.plaqueGems_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plaqueGems.png
	this.instance = new lib.winGems();
	this.instance.setTransform(264,89.5,1,1,0,0,0,264,89.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,528,179);


(lib.numberLightAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.numberLightStatic();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:6.1},0).wait(1).to({rotation:12.2},0).wait(1).to({rotation:18.3},0).wait(1).to({rotation:24.4},0).wait(1).to({rotation:30.5},0).wait(1).to({rotation:36.6},0).wait(1).to({rotation:42.7},0).wait(1).to({rotation:48.8},0).wait(1).to({rotation:54.9},0).wait(1).to({rotation:61},0).wait(1).to({rotation:67.1},0).wait(1).to({rotation:73.2},0).wait(1).to({rotation:79.3},0).wait(1).to({rotation:85.4},0).wait(1).to({rotation:91.5},0).wait(1).to({rotation:97.6},0).wait(1).to({rotation:103.7},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:115.9},0).wait(1).to({rotation:122},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:134.2},0).wait(1).to({rotation:140.3},0).wait(1).to({rotation:146.4},0).wait(1).to({rotation:152.5},0).wait(1).to({rotation:158.6},0).wait(1).to({rotation:164.7},0).wait(1).to({rotation:170.8},0).wait(1).to({rotation:176.9},0).wait(1).to({rotation:183.1},0).wait(1).to({rotation:189.2},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:207.5},0).wait(1).to({rotation:213.6},0).wait(1).to({rotation:219.7},0).wait(1).to({rotation:225.8},0).wait(1).to({rotation:231.9},0).wait(1).to({rotation:238},0).wait(1).to({rotation:244.1},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:256.3},0).wait(1).to({rotation:262.4},0).wait(1).to({rotation:268.5},0).wait(1).to({rotation:274.6},0).wait(1).to({rotation:280.7},0).wait(1).to({rotation:286.8},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:299},0).wait(1).to({rotation:305.1},0).wait(1).to({rotation:311.2},0).wait(1).to({rotation:317.3},0).wait(1).to({rotation:323.4},0).wait(1).to({rotation:329.5},0).wait(1).to({rotation:335.6},0).wait(1).to({rotation:341.7},0).wait(1).to({rotation:347.8},0).wait(1).to({rotation:353.9},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-91.5,184,183);


(lib.goldenlogoAnimPort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.goldenLogo = new lib.goldenLogo();
	this.goldenLogo.setTransform(164.8,120,0.4,0.4,0,0,0,190.8,91.8);
	this.goldenLogo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.goldenLogo).to({regX:190.7,scaleX:0.6,scaleY:0.6,alpha:1},28).to({regX:190.8,scaleX:0.57,scaleY:0.57},1).wait(1));

	// Layer 3
	this.instance = new lib.glittery195_00000();
	this.instance.setTransform(163.4,-21.6,1,1,44.9);

	this.instance_1 = new lib.glittery195_00002();
	this.instance_1.setTransform(163.4,-21.6,1,1,44.9);

	this.instance_2 = new lib.glittery195_00004();
	this.instance_2.setTransform(163.4,-21.6,1,1,44.9);

	this.instance_3 = new lib.glittery195_00006();
	this.instance_3.setTransform(163.4,-21.6,1,1,44.9);

	this.instance_4 = new lib.glittery195_00008();
	this.instance_4.setTransform(163.4,-21.6,1,1,44.9);

	this.instance_5 = new lib.glittery195_00010();
	this.instance_5.setTransform(163.4,-21.6,1,1,44.9);

	this.instance_6 = new lib.glittery195_00012();
	this.instance_6.setTransform(163.4,-21.6,1,1,44.9);

	this.instance_7 = new lib.glittery195_00014();
	this.instance_7.setTransform(163.4,-21.6,1,1,44.9);

	this.instance_8 = new lib.glittery195_00016();
	this.instance_8.setTransform(163.4,-21.6,1,1,44.9);

	this.instance_9 = new lib.glittery195_00018();
	this.instance_9.setTransform(163.4,-21.6,1,1,44.9);

	this.instance_10 = new lib.glittery195_00020();
	this.instance_10.setTransform(163.4,-21.6,1,1,44.9);

	this.instance_11 = new lib.glittery195_00022();
	this.instance_11.setTransform(163.4,-21.6,1,1,44.9);

	this.instance_12 = new lib.glittery195_00024();
	this.instance_12.setTransform(163.4,-21.6,1,1,44.9);

	this.instance_13 = new lib.glittery195_00026();
	this.instance_13.setTransform(163.4,-21.6,1,1,44.9);

	this.instance_14 = new lib.glittery195_00028();
	this.instance_14.setTransform(163.4,-21.6,1,1,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[]},1).wait(1));

	// Layer 2
	this.instance_15 = new lib.goldCave();
	this.instance_15.setTransform(266.7,878.4,0.843,0.843,0,0,0,250.5,135);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},14).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.6,-21.6,452.3,1013.8);


(lib.goldenlogoAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.goldenLogo = new lib.goldenLogo();
	this.goldenLogo.setTransform(153,43.2,0.75,0.75,0,0,0,170,48);
	this.goldenLogo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.goldenLogo).to({scaleX:0.95,scaleY:0.95,alpha:1},28).to({scaleX:0.9,scaleY:0.9},1).wait(1));

	// Layer 3
	this.instance = new lib.glittery195_00000();
	this.instance.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_1 = new lib.glittery195_00002();
	this.instance_1.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_2 = new lib.glittery195_00004();
	this.instance_2.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_3 = new lib.glittery195_00006();
	this.instance_3.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_4 = new lib.glittery195_00008();
	this.instance_4.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_5 = new lib.glittery195_00010();
	this.instance_5.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_6 = new lib.glittery195_00012();
	this.instance_6.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_7 = new lib.glittery195_00014();
	this.instance_7.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_8 = new lib.glittery195_00016();
	this.instance_8.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_9 = new lib.glittery195_00018();
	this.instance_9.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_10 = new lib.glittery195_00020();
	this.instance_10.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_11 = new lib.glittery195_00022();
	this.instance_11.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_12 = new lib.glittery195_00024();
	this.instance_12.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_13 = new lib.glittery195_00026();
	this.instance_13.setTransform(163.4,-95.6,1,1,44.9);

	this.instance_14 = new lib.glittery195_00028();
	this.instance_14.setTransform(163.4,-95.6,1,1,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[]},1).wait(1));

	// Layer 2
	this.instance_15 = new lib.goldCave();
	this.instance_15.setTransform(899.9,1036.7,1.807,1.807,0,0,0,250.5,135);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},14).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.5,-95.6,1327,1376.2);


(lib.emeraldLogoAnimPort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.emeraldLogo = new lib.emeraldLogo();
	this.emeraldLogo.setTransform(190,102,0.42,0.42,0,0,0,210.3,81.9);
	this.emeraldLogo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.emeraldLogo).to({regX:210.2,regY:82,scaleX:0.7,scaleY:0.7,y:102.1,alpha:1},28).to({regY:81.9,scaleX:0.66,scaleY:0.66,y:102},1).wait(1));

	// Layer 3
	this.instance = new lib.glittery195_00000();
	this.instance.setTransform(183,-29.8,1,1,44.9);

	this.instance_1 = new lib.glittery195_00002();
	this.instance_1.setTransform(183,-29.8,1,1,44.9);

	this.instance_2 = new lib.glittery195_00004();
	this.instance_2.setTransform(183,-29.8,1,1,44.9);

	this.instance_3 = new lib.glittery195_00006();
	this.instance_3.setTransform(183,-29.8,1,1,44.9);

	this.instance_4 = new lib.glittery195_00008();
	this.instance_4.setTransform(183,-29.8,1,1,44.9);

	this.instance_5 = new lib.glittery195_00010();
	this.instance_5.setTransform(183,-29.8,1,1,44.9);

	this.instance_6 = new lib.glittery195_00012();
	this.instance_6.setTransform(183,-29.8,1,1,44.9);

	this.instance_7 = new lib.glittery195_00014();
	this.instance_7.setTransform(183,-29.8,1,1,44.9);

	this.instance_8 = new lib.glittery195_00016();
	this.instance_8.setTransform(183,-29.8,1,1,44.9);

	this.instance_9 = new lib.glittery195_00018();
	this.instance_9.setTransform(183,-29.8,1,1,44.9);

	this.instance_10 = new lib.glittery195_00020();
	this.instance_10.setTransform(183,-29.8,1,1,44.9);

	this.instance_11 = new lib.glittery195_00022();
	this.instance_11.setTransform(183,-29.8,1,1,44.9);

	this.instance_12 = new lib.glittery195_00024();
	this.instance_12.setTransform(183,-29.8,1,1,44.9);

	this.instance_13 = new lib.glittery195_00026();
	this.instance_13.setTransform(183,-29.8,1,1,44.9);

	this.instance_14 = new lib.glittery195_00028();
	this.instance_14.setTransform(183,-29.8,1,1,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[]},1).wait(1));

	// Layer 2
	this.instance_15 = new lib.emeraldCave();
	this.instance_15.setTransform(284.7,864.7,1.101,1.101,0,0,0,248.6,82);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},14).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.1,-29.8,547,984.8);


(lib.emeraldLogoAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.emeraldLogo = new lib.emeraldLogo();
	this.emeraldLogo.setTransform(190,74,0.8,0.8,0,0,0,210.2,81.9);
	this.emeraldLogo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.emeraldLogo).to({scaleX:0.93,scaleY:0.93,alpha:1},28).to({scaleX:0.9,scaleY:0.9},1).wait(1));

	// Layer 3
	this.instance = new lib.glittery195_00000();
	this.instance.setTransform(183,-85.8,1,1,44.9);

	this.instance_1 = new lib.glittery195_00002();
	this.instance_1.setTransform(183,-85.8,1,1,44.9);

	this.instance_2 = new lib.glittery195_00004();
	this.instance_2.setTransform(183,-85.8,1,1,44.9);

	this.instance_3 = new lib.glittery195_00006();
	this.instance_3.setTransform(183,-85.8,1,1,44.9);

	this.instance_4 = new lib.glittery195_00008();
	this.instance_4.setTransform(183,-85.8,1,1,44.9);

	this.instance_5 = new lib.glittery195_00010();
	this.instance_5.setTransform(183,-85.8,1,1,44.9);

	this.instance_6 = new lib.glittery195_00012();
	this.instance_6.setTransform(183,-85.8,1,1,44.9);

	this.instance_7 = new lib.glittery195_00014();
	this.instance_7.setTransform(183,-85.8,1,1,44.9);

	this.instance_8 = new lib.glittery195_00016();
	this.instance_8.setTransform(183,-85.8,1,1,44.9);

	this.instance_9 = new lib.glittery195_00018();
	this.instance_9.setTransform(183,-85.8,1,1,44.9);

	this.instance_10 = new lib.glittery195_00020();
	this.instance_10.setTransform(183,-85.8,1,1,44.9);

	this.instance_11 = new lib.glittery195_00022();
	this.instance_11.setTransform(183,-85.8,1,1,44.9);

	this.instance_12 = new lib.glittery195_00024();
	this.instance_12.setTransform(183,-85.8,1,1,44.9);

	this.instance_13 = new lib.glittery195_00026();
	this.instance_13.setTransform(183,-85.8,1,1,44.9);

	this.instance_14 = new lib.glittery195_00028();
	this.instance_14.setTransform(183,-85.8,1,1,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[]},1).wait(1));

	// Layer 2
	this.instance_15 = new lib.emeraldCave();
	this.instance_15.setTransform(931,1029.8,1.857,1.857,0,0,0,248.6,82);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},14).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.9,-85.8,1370.4,1267.8);


(lib.crystalSwoosh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.swoosh_1();
	this.instance.setTransform(480,287.5,1,1,0,0,0,480,228.5);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(10, 0, 100, -151))];
	this.instance.cache(-2,-2,964,461);

	this.instance_1 = new lib.swoosh_1();
	this.instance_1.setTransform(480,228.5,1,1,0,0,0,480,228.5);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(10, 0, 100, -120))];
	this.instance_1.cache(-2,-2,964,461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,964,520);


(lib.crystalLogoAnimPort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.crystalLogo = new lib.crystalLogo();
	this.crystalLogo.setTransform(188.9,102,0.41,0.41,0,0,0,238.3,82.3);
	this.crystalLogo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.crystalLogo).to({regY:82.4,scaleX:0.6,scaleY:0.6,alpha:1},28).to({scaleX:0.58,scaleY:0.58},1).wait(1));

	// Layer 3
	this.instance = new lib.glittery195_00000();
	this.instance.setTransform(182.4,-39.4,1,1,44.9);

	this.instance_1 = new lib.glittery195_00002();
	this.instance_1.setTransform(182.4,-39.4,1,1,44.9);

	this.instance_2 = new lib.glittery195_00004();
	this.instance_2.setTransform(182.4,-39.4,1,1,44.9);

	this.instance_3 = new lib.glittery195_00006();
	this.instance_3.setTransform(182.4,-39.4,1,1,44.9);

	this.instance_4 = new lib.glittery195_00008();
	this.instance_4.setTransform(182.4,-39.4,1,1,44.9);

	this.instance_5 = new lib.glittery195_00010();
	this.instance_5.setTransform(182.4,-39.4,1,1,44.9);

	this.instance_6 = new lib.glittery195_00012();
	this.instance_6.setTransform(182.4,-39.4,1,1,44.9);

	this.instance_7 = new lib.glittery195_00014();
	this.instance_7.setTransform(182.4,-39.4,1,1,44.9);

	this.instance_8 = new lib.glittery195_00016();
	this.instance_8.setTransform(182.4,-39.4,1,1,44.9);

	this.instance_9 = new lib.glittery195_00018();
	this.instance_9.setTransform(182.4,-39.4,1,1,44.9);

	this.instance_10 = new lib.glittery195_00020();
	this.instance_10.setTransform(182.4,-39.4,1,1,44.9);

	this.instance_11 = new lib.glittery195_00022();
	this.instance_11.setTransform(182.4,-39.4,1,1,44.9);

	this.instance_12 = new lib.glittery195_00024();
	this.instance_12.setTransform(182.4,-39.4,1,1,44.9);

	this.instance_13 = new lib.glittery195_00026();
	this.instance_13.setTransform(182.4,-39.4,1,1,44.9);

	this.instance_14 = new lib.glittery195_00028();
	this.instance_14.setTransform(182.4,-39.4,1,1,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[]},1).wait(1));

	// Layer 2
	this.instance_15 = new lib.crystalCave();
	this.instance_15.setTransform(291.9,850.7,1.005,1.005,0,0,0,248.5,124.5);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.1,-39.4,499.6,1015.2);


(lib.crystalLogoAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.crystalLogo = new lib.crystalLogo();
	this.crystalLogo.setTransform(190.9,66.1,0.6,0.6,0,0,0,238.3,82.4);
	this.crystalLogo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.crystalLogo).to({regY:82.3,scaleX:0.82,scaleY:0.82,x:191,y:66,alpha:1},28).to({regY:82.4,scaleX:0.8,scaleY:0.8},1).wait(1));

	// Layer 3
	this.instance = new lib.glittery195_00000();
	this.instance.setTransform(182.4,-80.4,1,1,44.9);

	this.instance_1 = new lib.glittery195_00002();
	this.instance_1.setTransform(182.4,-80.4,1,1,44.9);

	this.instance_2 = new lib.glittery195_00004();
	this.instance_2.setTransform(182.4,-80.4,1,1,44.9);

	this.instance_3 = new lib.glittery195_00006();
	this.instance_3.setTransform(182.4,-80.4,1,1,44.9);

	this.instance_4 = new lib.glittery195_00008();
	this.instance_4.setTransform(182.4,-80.4,1,1,44.9);

	this.instance_5 = new lib.glittery195_00010();
	this.instance_5.setTransform(182.4,-80.4,1,1,44.9);

	this.instance_6 = new lib.glittery195_00012();
	this.instance_6.setTransform(182.4,-80.4,1,1,44.9);

	this.instance_7 = new lib.glittery195_00014();
	this.instance_7.setTransform(182.4,-80.4,1,1,44.9);

	this.instance_8 = new lib.glittery195_00016();
	this.instance_8.setTransform(182.4,-80.4,1,1,44.9);

	this.instance_9 = new lib.glittery195_00018();
	this.instance_9.setTransform(182.4,-80.4,1,1,44.9);

	this.instance_10 = new lib.glittery195_00020();
	this.instance_10.setTransform(182.4,-80.4,1,1,44.9);

	this.instance_11 = new lib.glittery195_00022();
	this.instance_11.setTransform(182.4,-80.4,1,1,44.9);

	this.instance_12 = new lib.glittery195_00024();
	this.instance_12.setTransform(182.4,-80.4,1,1,44.9);

	this.instance_13 = new lib.glittery195_00026();
	this.instance_13.setTransform(182.4,-80.4,1,1,44.9);

	this.instance_14 = new lib.glittery195_00028();
	this.instance_14.setTransform(182.4,-80.4,1,1,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[]},1).wait(1));

	// Layer 2
	this.instance_15 = new lib.crystalCave();
	this.instance_15.setTransform(847,856.7,1.532,1.532,0,0,0,248.5,124.5);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.6,-80.4,1183.2,1127.9);


(lib.winPlaquePortrait = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// winMessage
	this.winMessage = new lib.winMessage();
	this.winMessage.setTransform(247.5,336.3,1,1,0,0,0,207.5,64.2);

	this.timeline.addTween(cjs.Tween.get(this.winMessage).wait(1));

	// winValue
	this.winValue = new lib.winValue();
	this.winValue.setTransform(202,441.9,1,1,0,0,0,137.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.winValue).wait(1));

	// winGems
	this.winGems = new lib.plaqueGems_1();
	this.winGems.setTransform(36,426.7);

	this.timeline.addTween(cjs.Tween.get(this.winGems).wait(1));

	// glossyPlaqueBg.png
	this.instance = new lib.glossyPlaqueBg();
	this.instance.setTransform(24,162.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// darkener
	this.instance_1 = new lib.darkener();
	this.instance_1.setTransform(298.4,478.6,1,1,-90,0,0,481.4,298.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,960);


(lib.winPlaque = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// winMessage
	this.winMessage = new lib.winMessage();
	this.winMessage.setTransform(423.9,250.3,1,1,0,0,0,207.5,64.2);

	this.timeline.addTween(cjs.Tween.get(this.winMessage).wait(1));

	// winValue
	this.winValue = new lib.winValue();
	this.winValue.setTransform(378.5,347.9,1,1,0,0,0,137.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.winValue).wait(1));

	// winGems
	this.winGems = new lib.plaqueGems_1();
	this.winGems.setTransform(210.5,332.7);

	this.timeline.addTween(cjs.Tween.get(this.winGems).wait(1));

	// glossyPlaqueBg.png
	this.instance = new lib.glossyPlaqueBg();
	this.instance.setTransform(198.5,68.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// darkener
	this.instance_1 = new lib.darkener();
	this.instance_1.setTransform(481.4,298.4,1,1,0,0,0,481.4,298.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,600);


(lib.tileWord_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sweep copy
	this.instance = new lib.tileSweep_00001();

	this.instance_1 = new lib.tileSweep_00002();

	this.instance_2 = new lib.tileSweep_00003();

	this.instance_3 = new lib.tileSweep_00004();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// sweep
	this.instance_4 = new lib.tileSweep_00001();

	this.instance_5 = new lib.tileSweep_00002();

	this.instance_6 = new lib.tileSweep_00003();

	this.instance_7 = new lib.tileSweep_00004();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

	// tileFlip
	this.tileSapphire = new lib.wordTile();
	this.tileSapphire.setTransform(17,17,1,1,0,180,0);
	this.tileSapphire.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.tileSapphire).to({scaleY:0.03,alpha:1},4).wait(1).to({skewX:0,skewY:180},0).to({scaleY:1},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.tileSapphire_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tileFlip
	this.tileSapphire = new lib.sapphireTile();
	this.tileSapphire.setTransform(17,17,1,1,0,180,0);
	this.tileSapphire.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.tileSapphire).to({scaleY:0.03,alpha:1},4).wait(1).to({skewX:0,skewY:180},0).to({scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.tileRuby_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tileFlip
	this.instance = new lib.rubyTile();
	this.instance.setTransform(17,17,1,1,0,180,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.03,alpha:1},4).wait(1).to({skewX:0,skewY:180},0).to({scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.tileGold_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tileFlip
	this.tileSapphire = new lib.goldTile();
	this.tileSapphire.setTransform(17,17,1,1,0,180,0);
	this.tileSapphire.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.tileSapphire).to({scaleY:0.03,alpha:1},4).wait(1).to({skewX:0,skewY:180},0).to({scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.tileEmerald_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tileFlip
	this.tileSapphire = new lib.emeraldTile();
	this.tileSapphire.setTransform(17,17,1,1,0,180,0);
	this.tileSapphire.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.tileSapphire).to({scaleY:0.03,alpha:1},4).wait(1).to({skewX:0,skewY:180},0).to({scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.tileCrystal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tileFlip
	this.tileSapphire = new lib.crystalTile();
	this.tileSapphire.setTransform(17,17,1,1,0,180,0);
	this.tileSapphire.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.tileSapphire).to({scaleY:0.03,alpha:1},4).wait(1).to({skewX:0,skewY:180},0).to({scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.tileAmethyst_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tileFlip
	this.tileSapphire = new lib.amethystTile();
	this.tileSapphire.setTransform(17,17,1,1,0,180,0);
	this.tileSapphire.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.tileSapphire).to({scaleY:0.03,alpha:1},4).wait(1).to({skewX:0,skewY:180},0).to({scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.tile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// letter
	this.letter = new cjs.Text(" ", "bold 24px 'Arial'");
	this.letter.name = "letter";
	this.letter.textAlign = "center";
	this.letter.lineHeight = 29;
	this.letter.lineWidth = 26;
	this.letter.setTransform(15.5,3.6);

	this.timeline.addTween(cjs.Tween.get(this.letter).wait(1));

	// tileBlank01
	this.tileBlank01 = new lib.tileBlank01_1();
	this.tileBlank01.setTransform(17,17,1,1,0,0,0,17,17);

	this.timeline.addTween(cjs.Tween.get(this.tileBlank01).wait(1));

	// tileBlank02
	this.tileBlank02 = new lib.tileBlank02_1();
	this.tileBlank02.setTransform(17,17,1,1,0,0,0,17,17);

	this.timeline.addTween(cjs.Tween.get(this.tileBlank02).wait(1));

	// tileBlank03
	this.tileBlank03 = new lib.tileBlank03_1();
	this.tileBlank03.setTransform(17,17,1,1,0,0,0,17,17);

	this.timeline.addTween(cjs.Tween.get(this.tileBlank03).wait(1));

	// tileBlank04
	this.tileBlank04 = new lib.tileBlank04_1();
	this.tileBlank04.setTransform(17,17,1,1,0,0,0,17,17);

	this.timeline.addTween(cjs.Tween.get(this.tileBlank04).wait(1));

	// tileSapphire
	this.tileSapphire = new lib.tileSapphire_1();

	this.timeline.addTween(cjs.Tween.get(this.tileSapphire).wait(1));

	// tileRuby
	this.tileRuby = new lib.tileRuby_1();
	this.tileRuby.setTransform(20,20,1,1,0,0,0,20,20);

	this.timeline.addTween(cjs.Tween.get(this.tileRuby).wait(1));

	// tileGold
	this.tileGold = new lib.tileGold_1();
	this.tileGold.setTransform(20,20,1,1,0,0,0,20,20);

	this.timeline.addTween(cjs.Tween.get(this.tileGold).wait(1));

	// tileEmerald
	this.tileEmerald = new lib.tileEmerald_1();
	this.tileEmerald.setTransform(20,20,1,1,0,0,0,20,20);

	this.timeline.addTween(cjs.Tween.get(this.tileEmerald).wait(1));

	// tileCrystal
	this.tileCrystal = new lib.tileCrystal_1();
	this.tileCrystal.setTransform(20,20,1,1,0,0,0,20,20);

	this.timeline.addTween(cjs.Tween.get(this.tileCrystal).wait(1));

	// tileAmethyst
	this.tileAmethyst = new lib.tileAmethyst_1();
	this.tileAmethyst.setTransform(20,20,1,1,0,0,0,20,20);

	this.timeline.addTween(cjs.Tween.get(this.tileAmethyst).wait(1));

	// tileWord
	this.tileWord = new lib.tileWord_1();

	this.timeline.addTween(cjs.Tween.get(this.tileWord).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,34.4);


(lib.sapphireTransAnimPort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1Pix
	this.instance = new lib._1Pix();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// logo
	this.instance_1 = new lib.sapphireLogo();
	this.instance_1.setTransform(31.5,658,0.433,0.438);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:12.6,y:270},14,cjs.Ease.get(1)).wait(22));

	// lightPingAnim
	this.instance_2 = new lib.lightPingAnim("synched",0);
	this.instance_2.setTransform(304,255.7,0.615,0.615);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(33));

	// crystal
	this.instance_3 = new lib.blue_1();
	this.instance_3.setTransform(351,334.2,0.72,0.72,0,0,0,86.6,97.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regX:86.5,scaleX:0.82,scaleY:0.82,x:350.9,alpha:1},11).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280.5,725);


(lib.sapphireTransAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1Pix
	this.instance = new lib._1Pix();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// logo
	this.rubyLogo = new lib.sapphireLogo();
	this.rubyLogo.setTransform(286,406.2,0.45,0.45,0,0,0,251.5,61.5);

	this.timeline.addTween(cjs.Tween.get(this.rubyLogo).to({scaleX:1,scaleY:1,x:487.9,y:181.5},14,cjs.Ease.get(-1)).wait(22));

	// lightPingAnim
	this.instance_1 = new lib.lightPingAnim("synched",0);
	this.instance_1.setTransform(123,122.6,0.615,0.615);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(33));

	// crystal
	this.instance_2 = new lib.blue_1();
	this.instance_2.setTransform(170,201.2,0.72,0.72,0,0,0,86.6,97.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({regX:86.5,scaleX:0.82,scaleY:0.82,alpha:1},11).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,431.6,447.3);


(lib.sapphirePromptGemLandscape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.sapphireSweep_00000();

	this.instance_1 = new lib.sapphireSweep_00002();

	this.instance_2 = new lib.sapphireSweep_00004();

	this.instance_3 = new lib.sapphireSweep_00006();

	this.instance_4 = new lib.sapphireSweep_00008();

	this.instance_5 = new lib.sapphireSweep_00010();

	this.instance_6 = new lib.sapphireSweep_00012();

	this.instance_7 = new lib.sapphireSweep_00014();

	this.instance_8 = new lib.sapphireSweep_00016();

	this.instance_9 = new lib.sapphireSweep_00018();

	this.instance_10 = new lib.sapphireSweep_00020();

	this.instance_11 = new lib.sapphireSweep_00022();

	this.instance_12 = new lib.sapphireSweep_00024();

	this.instance_13 = new lib.sapphireSweep_00026();

	this.instance_14 = new lib.sapphireSweep_00028();

	this.instance_15 = new lib.sapphireSweep_00029();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},1).wait(1));

	// gem
	this.instance_16 = new lib.blue_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.sapphirePromptGem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.sapphireSweep_00000();

	this.instance_1 = new lib.sapphireSweep_00002();

	this.instance_2 = new lib.sapphireSweep_00004();

	this.instance_3 = new lib.sapphireSweep_00006();

	this.instance_4 = new lib.sapphireSweep_00008();

	this.instance_5 = new lib.sapphireSweep_00010();

	this.instance_6 = new lib.sapphireSweep_00012();

	this.instance_7 = new lib.sapphireSweep_00014();

	this.instance_8 = new lib.sapphireSweep_00016();

	this.instance_9 = new lib.sapphireSweep_00018();

	this.instance_10 = new lib.sapphireSweep_00020();

	this.instance_11 = new lib.sapphireSweep_00022();

	this.instance_12 = new lib.sapphireSweep_00024();

	this.instance_13 = new lib.sapphireSweep_00026();

	this.instance_14 = new lib.sapphireSweep_00028();

	this.instance_15 = new lib.sapphireSweep_00029();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},1).wait(1));

	// gem
	this.instance_16 = new lib.blue_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.sapphirelPrompt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sapphireGem
	this.instance = new lib.sapphirePromptGem("single",0);
	this.instance.setTransform(56.4,48.6,0.491,0.491,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"independent"},0).to({regX:104.9,regY:99.1,scaleX:0.53,scaleY:0.53,rotation:-1},14,cjs.Ease.get(-1)).to({scaleX:0.48,scaleY:0.48,rotation:2},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(35));

	// sapphireGem
	this.instance_1 = new lib.sapphirePromptGem("single",0);
	this.instance_1.setTransform(166.1,48.6,0.491,0.491,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1},14,cjs.Ease.get(-1)).to({regX:104.6,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,x:166,y:48.8},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.1,y:48.6,mode:"single",startPosition:0},0).wait(33));

	// sapphireGem
	this.instance_2 = new lib.sapphirePromptGem("single",0);
	this.instance_2.setTransform(273.9,47.5,0.491,0.491,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},14,cjs.Ease.get(-1)).to({regX:100.9,regY:96.8,scaleX:0.48,scaleY:0.48,rotation:1},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(31));

	// sapphireGem
	this.instance_3 = new lib.sapphirePromptGem("single",0);
	this.instance_3.setTransform(54.5,137.6,0.491,0.491,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({mode:"independent"},0).to({regX:100.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:54.4},14,cjs.Ease.get(-1)).to({regY:96.9,scaleX:0.48,scaleY:0.48,rotation:1,x:54.5},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(29));

	// sapphireGem
	this.instance_4 = new lib.sapphirePromptGem("single",0);
	this.instance_4.setTransform(164.2,137.6,0.491,0.491,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({mode:"independent"},0).to({regX:100.8,regY:97.2,scaleX:0.53,scaleY:0.53,rotation:-1,x:164.1},14,cjs.Ease.get(-1)).to({regX:100.9,regY:97.1,scaleX:0.48,scaleY:0.48,rotation:1,x:164.2},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(27));

	// sapphireGem
	this.instance_5 = new lib.sapphirePromptGem("single",0);
	this.instance_5.setTransform(273.9,137.6,0.491,0.491,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({mode:"independent"},0).to({regX:100.8,scaleX:0.53,scaleY:0.53,rotation:-1,x:273.8},14,cjs.Ease.get(-1)).to({regX:100.9,regY:96.9,scaleX:0.48,scaleY:0.48,rotation:1,x:273.9},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(25));

	// sapphireGem
	this.instance_6 = new lib.sapphirePromptGem("single",0);
	this.instance_6.setTransform(54.5,227.7,0.491,0.491,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({mode:"independent"},0).to({regY:96.9,scaleX:0.53,scaleY:0.53,rotation:-1},14,cjs.Ease.get(-1)).to({regX:100.9,regY:96.8,scaleX:0.48,scaleY:0.48,rotation:1},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(23));

	// sapphireGem
	this.instance_7 = new lib.sapphirePromptGem("single",0);
	this.instance_7.setTransform(164.2,227.7,0.491,0.491,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},14,cjs.Ease.get(-1)).to({regX:100.9,regY:97.1,scaleX:0.48,scaleY:0.48,rotation:1,y:227.8},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.49,scaleY:0.49,rotation:0,y:227.7,mode:"single",startPosition:0},0).wait(21));

	// sapphireGem
	this.instance_8 = new lib.sapphirePromptGem("single",0);
	this.instance_8.setTransform(273.9,227.7,0.491,0.491,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({mode:"independent"},0).to({regY:96.9,scaleX:0.53,scaleY:0.53,rotation:-1},14,cjs.Ease.get(-1)).to({regX:100.9,regY:96.8,scaleX:0.48,scaleY:0.48,rotation:1},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(19));

	// sapphireGem
	this.instance_9 = new lib.sapphirePromptGem("single",0);
	this.instance_9.setTransform(54.5,317.8,0.491,0.491,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},14,cjs.Ease.get(-1)).to({regX:100.9,regY:97.1,scaleX:0.48,scaleY:0.48,rotation:1},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(17));

	// sapphireGem
	this.instance_10 = new lib.sapphirePromptGem("single",0);
	this.instance_10.setTransform(164.2,317.8,0.491,0.491,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21).to({mode:"independent"},0).to({regY:97.2,scaleX:0.53,scaleY:0.53,rotation:-1},14,cjs.Ease.get(-1)).to({regX:100.9,regY:97.3,scaleX:0.48,scaleY:0.48,rotation:1},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(15));

	// sapphireGem
	this.instance_11 = new lib.sapphirePromptGem("single",0);
	this.instance_11.setTransform(273.9,317.8,0.491,0.491,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},14,cjs.Ease.get(-1)).to({regX:100.9,regY:97.1,scaleX:0.48,scaleY:0.48,rotation:1},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(13));

	// sapphireGem
	this.instance_12 = new lib.sapphirePromptGem("single",0);
	this.instance_12.setTransform(54.5,409.4,0.491,0.491,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},14,cjs.Ease.get(-1)).to({regX:100.9,regY:97.1,scaleX:0.48,scaleY:0.48,rotation:1},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(11));

	// sapphireGem
	this.instance_13 = new lib.sapphirePromptGem("single",0);
	this.instance_13.setTransform(164.2,409.4,0.491,0.491,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(27).to({mode:"independent"},0).to({regY:97.2,scaleX:0.53,scaleY:0.53,rotation:-1},14,cjs.Ease.get(-1)).to({regX:100.9,regY:97.3,scaleX:0.48,scaleY:0.48,rotation:1},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(9));

	// sapphireGem
	this.instance_14 = new lib.sapphirePromptGem("single",0);
	this.instance_14.setTransform(273.9,409.4,0.491,0.491,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},14,cjs.Ease.get(-1)).to({regX:100.9,regY:97.1,scaleX:0.48,scaleY:0.48,rotation:1},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(7));

	// sapphireGem
	this.instance_15 = new lib.sapphirePromptGem("single",0);
	this.instance_15.setTransform(54.5,506.9,0.491,0.491,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(31).to({mode:"independent"},0).to({regX:100.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:54.4},14,cjs.Ease.get(-1)).to({regY:96.9,scaleX:0.48,scaleY:0.48,rotation:1,x:54.5},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(5));

	// sapphireGem
	this.instance_16 = new lib.sapphirePromptGem("single",0);
	this.instance_16.setTransform(164.2,506.9,0.491,0.491,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(33).to({mode:"independent"},0).to({regX:100.8,scaleX:0.53,scaleY:0.53,rotation:-1,x:164.1},14,cjs.Ease.get(-1)).to({regX:100.9,regY:97.1,scaleX:0.48,scaleY:0.48,rotation:1,x:164.2},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(3));

	// sapphireGem
	this.instance_17 = new lib.sapphirePromptGem("single",0);
	this.instance_17.setTransform(273.9,506.9,0.491,0.491,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(35).to({mode:"independent"},0).to({regX:100.8,scaleX:0.53,scaleY:0.53,rotation:-1,x:273.8},14,cjs.Ease.get(-1)).to({regX:100.9,regY:96.9,scaleX:0.48,scaleY:0.48,rotation:1,x:273.9},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.9,-0.1,318.5,554.6);


(lib.sapphireKey_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_16 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// unlock frames
	this.instance = new lib.unlockAnim_00000();
	this.instance.setTransform(-142,-131);

	this.instance_1 = new lib.unlockAnim_00001();
	this.instance_1.setTransform(-142,-131);

	this.instance_2 = new lib.unlockAnim_00002();
	this.instance_2.setTransform(-142,-131);

	this.instance_3 = new lib.unlockAnim_00003();
	this.instance_3.setTransform(-142,-131);

	this.instance_4 = new lib.unlockAnim_00004();
	this.instance_4.setTransform(-142,-131);

	this.instance_5 = new lib.unlockAnim_00005();
	this.instance_5.setTransform(-142,-131);

	this.instance_6 = new lib.unlockAnim_00006();
	this.instance_6.setTransform(-142,-131);

	this.instance_7 = new lib.unlockAnim_00007();
	this.instance_7.setTransform(-142,-131);

	this.instance_8 = new lib.unlockAnim_00008();
	this.instance_8.setTransform(-142,-131);

	this.instance_9 = new lib.unlockAnim_00009();
	this.instance_9.setTransform(-142,-131);

	this.instance_10 = new lib.unlockAnim_00010();
	this.instance_10.setTransform(-142,-131);

	this.instance_11 = new lib.unlockAnim_00011();
	this.instance_11.setTransform(-142,-131);

	this.instance_12 = new lib.unlockAnim_00012();
	this.instance_12.setTransform(-142,-131);

	this.instance_13 = new lib.unlockAnim_00013();
	this.instance_13.setTransform(-142,-131);

	this.instance_14 = new lib.unlockAnim_00014();
	this.instance_14.setTransform(-142,-131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(1));

	// miniSapphireKey
	this.instance_15 = new lib.miniSapphireKey();
	this.instance_15.setTransform(0.1,-1.7);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:1.05,scaleY:1.05,rotation:-15,alpha:1},14,cjs.Ease.get(1)).wait(2).to({scaleX:1,scaleY:1,rotation:0},0).wait(1));

	// TRANS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AjWEIIAAoPIGtAAIAAIPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-27.8,43,54.4);


(lib.sapphireKey_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// miniSapphireKey
	this.instance = new lib.miniSapphireKey();
	this.instance.setTransform(18.2,21.7,1,1,0,0,0,18.1,23.4);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// TRANS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AjWEIIAAoPIGtAAIAAIPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-27.8,43,54.4);


(lib.sapphireKey_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sapphireKey_on
	this.sapphireKey_on = new lib.sapphireKey_on();

	this.timeline.addTween(cjs.Tween.get(this.sapphireKey_on).wait(1));

	// sapphireKey_off
	this.sapphireKey_off = new lib.sapphireKey_off();

	this.timeline.addTween(cjs.Tween.get(this.sapphireKey_off).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-27.8,43,54.4);


(lib.sapphireGem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sparkles
	this.instance = new lib.revealSparkles("synched",0);
	this.instance.setTransform(105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},29).wait(1));

	// gem
	this.instance_1 = new lib.blue_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(21));

	// reveal
	this.instance_2 = new lib.reveal();
	this.instance_2.setTransform(102,91.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({alpha:1},10).wait(11));

	// redReveal
	this.instance_3 = new lib.blueReveal_1();
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-25.8,250,250);


(lib.saphireWordCountMeter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// saphireWordCountMeter_on
	this.saphireWordCountMeter_on = new lib.saphireWordCountMeter_on();
	this.saphireWordCountMeter_on.setTransform(105,23.5,1,1,0,0,0,105,23.5);

	this.timeline.addTween(cjs.Tween.get(this.saphireWordCountMeter_on).wait(1));

	// saphireWordCountMeter_off
	this.saphireWordCountMeter_off = new lib.saphireWordCountMeter_off();
	this.saphireWordCountMeter_off.setTransform(105,23.5,1,1,0,0,0,105,23.5);

	this.timeline.addTween(cjs.Tween.get(this.saphireWordCountMeter_off).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.rubyWordCountMeter_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// menuCelloff
	this.instance = new lib.menuCelloff();
	this.instance.setTransform(105,23.5,1,1,0,0,0,105,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// rubyCellColour.png
	this.instance_1 = new lib.rubyCellColour();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// menuCellBackground.png
	this.instance_2 = new lib.menuCellBackground();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.rubyWordCountMeter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rubyWordCountMeter_on
	this.rubyWordCountMeter_on = new lib.rubyWordCountMeter_on();
	this.rubyWordCountMeter_on.setTransform(91,23.5,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get(this.rubyWordCountMeter_on).wait(1));

	// rubyWordCountMeter_off
	this.rubyWordCountMeter_off = new lib.rubyWordCountMeter_off();
	this.rubyWordCountMeter_off.setTransform(91,23.5,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get(this.rubyWordCountMeter_off).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.rubyTransAnimPort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1Pix
	this.instance = new lib._1Pix();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// logo
	this.rubyLogo = new lib.rubyLogo();
	this.rubyLogo.setTransform(38.2,331.2,0.434,0.45,0,0,0,-0.3,62.1);

	this.timeline.addTween(cjs.Tween.get(this.rubyLogo).to({regX:-0.2,scaleX:1,scaleY:1,x:48.3,y:332.1},14,cjs.Ease.get(-1)).wait(21));

	// lightPingAnim
	this.instance_1 = new lib.lightPingAnim("synched",0);
	this.instance_1.setTransform(218,207.6,0.615,0.615);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(32));

	// crystal
	this.instance_2 = new lib.red_1();
	this.instance_2.setTransform(274,277.2,0.72,0.72,0,0,0,86.6,97.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({regX:86.5,scaleX:0.82,scaleY:0.82,x:273.9,alpha:1},11).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256.7,358.5);


(lib.rubyTransAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1Pix
	this.instance = new lib._1Pix();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// logo
	this.rubyLogo = new lib.rubyLogo();
	this.rubyLogo.setTransform(150,99.9,0.45,0.45,0,0,0,251.5,61.5);

	this.timeline.addTween(cjs.Tween.get(this.rubyLogo).to({scaleX:1,scaleY:1,x:529,y:181.5},14,cjs.Ease.get(-1)).wait(21));

	// lightPingAnim
	this.instance_1 = new lib.lightPingAnim("synched",0);
	this.instance_1.setTransform(187,122.6,0.615,0.615);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(32));

	// crystal
	this.instance_2 = new lib.red_1();
	this.instance_2.setTransform(243,192.2,0.72,0.72,0,0,0,86.6,97.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({regX:86.5,scaleX:0.82,scaleY:0.82,alpha:1},11).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263.2,127.5);


(lib.rubyPromtGem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.redSweep_00000();

	this.instance_1 = new lib.redSweep_00002();

	this.instance_2 = new lib.redSweep_00004();

	this.instance_3 = new lib.redSweep_00006();

	this.instance_4 = new lib.redSweep_00008();

	this.instance_5 = new lib.redSweep_00010();

	this.instance_6 = new lib.redSweep_00012();

	this.instance_7 = new lib.redSweep_00014();

	this.instance_8 = new lib.redSweep_00016();

	this.instance_9 = new lib.redSweep_00018();

	this.instance_10 = new lib.redSweep_00020();

	this.instance_11 = new lib.redSweep_00022();

	this.instance_12 = new lib.redSweep_00024();

	this.instance_13 = new lib.redSweep_00026();

	this.instance_14 = new lib.redSweep_00028();

	this.instance_15 = new lib.redSweep_00029();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},1).wait(1));

	// gem
	this.instance_16 = new lib.red_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.rubyPromptGemLandscape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.redSweep_00000();

	this.instance_1 = new lib.redSweep_00002();

	this.instance_2 = new lib.redSweep_00004();

	this.instance_3 = new lib.redSweep_00006();

	this.instance_4 = new lib.redSweep_00008();

	this.instance_5 = new lib.redSweep_00010();

	this.instance_6 = new lib.redSweep_00012();

	this.instance_7 = new lib.redSweep_00014();

	this.instance_8 = new lib.redSweep_00016();

	this.instance_9 = new lib.redSweep_00018();

	this.instance_10 = new lib.redSweep_00020();

	this.instance_11 = new lib.redSweep_00022();

	this.instance_12 = new lib.redSweep_00024();

	this.instance_13 = new lib.redSweep_00026();

	this.instance_14 = new lib.redSweep_00028();

	this.instance_15 = new lib.redSweep_00029();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},1).wait(1));

	// gem
	this.instance_16 = new lib.red_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.rubyPrompt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rubyGem
	this.instance = new lib.rubyPromtGem("single",0);
	this.instance.setTransform(56.4,48.7,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},12,cjs.Ease.get(-1)).to({regX:104.9,scaleX:0.49,scaleY:0.49,rotation:1,y:48.6},15,cjs.Ease.get(-0.99)).wait(1).to({regX:105,scaleX:0.49,scaleY:0.49,rotation:0,y:48.7,mode:"single",startPosition:0},0).wait(35));

	// rubyGem
	this.instance_1 = new lib.rubyPromtGem("single",0);
	this.instance_1.setTransform(166.1,48.7,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({mode:"independent"},0).to({regX:104.9,regY:99.4,scaleX:0.53,scaleY:0.53,rotation:-1,x:166},12,cjs.Ease.get(-1)).to({regY:99.3,scaleX:0.49,scaleY:0.49,rotation:1,x:166.1,y:48.6},15,cjs.Ease.get(-0.99)).wait(1).to({regX:105,scaleX:0.49,scaleY:0.49,rotation:0,y:48.7,mode:"single",startPosition:0},0).wait(33));

	// rubyGem
	this.instance_2 = new lib.rubyPromtGem("single",0);
	this.instance_2.setTransform(275.8,48.7,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({mode:"independent"},0).to({regX:105.1,scaleX:0.53,scaleY:0.53,rotation:-1},12,cjs.Ease.get(-1)).to({scaleX:0.49,scaleY:0.49,rotation:1,y:48.6},15,cjs.Ease.get(-0.99)).wait(1).to({regX:105,scaleX:0.49,scaleY:0.49,rotation:0,y:48.7,mode:"single",startPosition:0},0).wait(31));

	// rubyGem
	this.instance_3 = new lib.rubyPromtGem("single",0);
	this.instance_3.setTransform(275.8,138.8,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({mode:"independent"},0).to({regX:105.1,regY:99.2,scaleX:0.53,scaleY:0.53,rotation:-1},12,cjs.Ease.get(-1)).to({regX:105,scaleX:0.49,scaleY:0.49,rotation:1,y:138.7},15,cjs.Ease.get(-0.99)).wait(1).to({regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,y:138.8,mode:"single",startPosition:0},0).wait(29));

	// rubyGem
	this.instance_4 = new lib.rubyPromtGem("single",0);
	this.instance_4.setTransform(166.1,138.8,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({mode:"independent"},0).to({regX:104.9,regY:99.2,scaleX:0.53,scaleY:0.53,rotation:-1,x:166},12,cjs.Ease.get(-1)).to({regX:104.8,scaleX:0.49,scaleY:0.49,rotation:1,x:166.1,y:138.7},15,cjs.Ease.get(-0.99)).wait(1).to({regX:105,regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,y:138.8,mode:"single",startPosition:0},0).wait(27));

	// rubyGem
	this.instance_5 = new lib.rubyPromtGem("single",0);
	this.instance_5.setTransform(56.4,138.8,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({mode:"independent"},0).to({regY:99.2,scaleX:0.53,scaleY:0.53,rotation:-1},12,cjs.Ease.get(-1)).to({regX:104.8,regY:99.1,scaleX:0.49,scaleY:0.49,rotation:1,y:138.7},15,cjs.Ease.get(-0.99)).wait(1).to({regX:105,regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,y:138.8,mode:"single",startPosition:0},0).wait(25));

	// rubyGem
	this.instance_6 = new lib.rubyPromtGem("single",0);
	this.instance_6.setTransform(56.4,228.9,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1},12,cjs.Ease.get(-1)).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:1,y:228.8},15,cjs.Ease.get(-0.99)).wait(1).to({regX:105,regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,y:228.9,mode:"single",startPosition:0},0).wait(23));

	// rubyGem
	this.instance_7 = new lib.rubyPromtGem("single",0);
	this.instance_7.setTransform(166.1,228.9,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({mode:"independent"},0).to({regX:104.9,regY:99.2,scaleX:0.53,scaleY:0.53,rotation:-1},12,cjs.Ease.get(-1)).to({regX:104.8,scaleX:0.49,scaleY:0.49,rotation:1,y:228.8},15,cjs.Ease.get(-0.99)).wait(1).to({regX:105,regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,y:228.9,mode:"single",startPosition:0},0).wait(21));

	// rubyGem
	this.instance_8 = new lib.rubyPromtGem("single",0);
	this.instance_8.setTransform(275.8,228.9,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1},12,cjs.Ease.get(-1)).to({regX:105.1,scaleX:0.49,scaleY:0.49,rotation:1,y:228.8},15,cjs.Ease.get(-0.99)).wait(1).to({regX:105,scaleX:0.49,scaleY:0.49,rotation:0,y:228.9,mode:"single",startPosition:0},0).wait(19));

	// rubyGem
	this.instance_9 = new lib.rubyPromtGem("single",0);
	this.instance_9.setTransform(56.4,319,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({mode:"independent"},0).to({regY:99.2,scaleX:0.53,scaleY:0.53,rotation:-1},12,cjs.Ease.get(-1)).to({regX:104.8,regY:99.1,scaleX:0.49,scaleY:0.49,rotation:1,y:318.9},15,cjs.Ease.get(-0.99)).wait(1).to({regX:105,regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,y:319,mode:"single",startPosition:0},0).wait(17));

	// rubyGem
	this.instance_10 = new lib.rubyPromtGem("single",0);
	this.instance_10.setTransform(166.1,319,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21).to({mode:"independent"},0).to({regX:104.9,regY:99.2,scaleX:0.53,scaleY:0.53,rotation:-1,x:166},12,cjs.Ease.get(-1)).to({regX:104.8,scaleX:0.49,scaleY:0.49,rotation:1,x:166.1,y:318.9},15,cjs.Ease.get(-0.99)).wait(1).to({regX:105,regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,y:319,mode:"single",startPosition:0},0).wait(15));

	// rubyGem
	this.instance_11 = new lib.rubyPromtGem("single",0);
	this.instance_11.setTransform(275.8,319,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({mode:"independent"},0).to({regX:105.1,regY:99.2,scaleX:0.53,scaleY:0.53,rotation:-1},12,cjs.Ease.get(-1)).to({regX:105,scaleX:0.49,scaleY:0.49,rotation:1,y:318.9},15,cjs.Ease.get(-0.99)).wait(1).to({regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,y:319,mode:"single",startPosition:0},0).wait(13));

	// rubyGem
	this.instance_12 = new lib.rubyPromtGem("single",0);
	this.instance_12.setTransform(56.4,410.6,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25).to({mode:"independent"},0).to({regY:99.4,scaleX:0.53,scaleY:0.53,rotation:-1,y:410.7},12,cjs.Ease.get(-1)).to({regX:104.8,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:1,y:410.5},15,cjs.Ease.get(-0.99)).wait(1).to({regX:105,regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,y:410.6,mode:"single",startPosition:0},0).wait(11));

	// rubyGem
	this.instance_13 = new lib.rubyPromtGem("single",0);
	this.instance_13.setTransform(166.1,410.6,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(27).to({mode:"independent"},0).to({regX:104.9,regY:99.4,scaleX:0.53,scaleY:0.53,rotation:-1,x:166,y:410.7},12,cjs.Ease.get(-1)).to({regX:104.8,regY:99.3,scaleX:0.49,scaleY:0.49,rotation:1,x:166.1,y:410.5},15,cjs.Ease.get(-0.99)).wait(1).to({regX:105,scaleX:0.49,scaleY:0.49,rotation:0,y:410.6,mode:"single",startPosition:0},0).wait(9));

	// rubyGem
	this.instance_14 = new lib.rubyPromtGem("single",0);
	this.instance_14.setTransform(275.8,410.6,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({mode:"independent"},0).to({regX:105.1,regY:99.4,scaleX:0.53,scaleY:0.53,rotation:-1,y:410.7},12,cjs.Ease.get(-1)).to({regX:105,regY:99.3,scaleX:0.49,scaleY:0.49,rotation:1,y:410.5},15,cjs.Ease.get(-0.99)).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:0,y:410.6,mode:"single",startPosition:0},0).wait(7));

	// rubyGem
	this.instance_15 = new lib.rubyPromtGem("single",0);
	this.instance_15.setTransform(56.4,508.1,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(31).to({mode:"independent"},0).to({regY:99.5,scaleX:0.53,scaleY:0.53,rotation:-1},12,cjs.Ease.get(-1)).to({regX:104.8,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:1,y:508},15,cjs.Ease.get(-0.99)).wait(1).to({regX:105,regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,y:508.1,mode:"single",startPosition:0},0).wait(5));

	// rubyGem
	this.instance_16 = new lib.rubyPromtGem("single",0);
	this.instance_16.setTransform(166.1,508.1,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(33).to({mode:"independent"},0).to({regX:104.9,regY:99.5,scaleX:0.53,scaleY:0.53,rotation:-1,x:166},12,cjs.Ease.get(-1)).to({regX:104.8,regY:99.3,scaleX:0.49,scaleY:0.49,rotation:1,x:166.1,y:508},15,cjs.Ease.get(-0.99)).wait(1).to({regX:105,scaleX:0.49,scaleY:0.49,rotation:0,y:508.1,mode:"single",startPosition:0},0).wait(3));

	// rubyGem
	this.instance_17 = new lib.rubyPromtGem("single",0);
	this.instance_17.setTransform(275.8,508.1,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(35).to({mode:"independent"},0).to({regX:105.1,regY:99.5,scaleX:0.53,scaleY:0.53,rotation:-1},12,cjs.Ease.get(-1)).to({regX:105,regY:99.3,scaleX:0.49,scaleY:0.49,rotation:1,y:508},15,cjs.Ease.get(-0.99)).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:0,y:508.1,mode:"single",startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.9,-0.1,318.5,554.6);


(lib.rubyKey_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_16 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// unlock frames
	this.instance = new lib.unlockAnim_00000();
	this.instance.setTransform(-142,-131);

	this.instance_1 = new lib.unlockAnim_00001();
	this.instance_1.setTransform(-142,-131);

	this.instance_2 = new lib.unlockAnim_00002();
	this.instance_2.setTransform(-142,-131);

	this.instance_3 = new lib.unlockAnim_00003();
	this.instance_3.setTransform(-142,-131);

	this.instance_4 = new lib.unlockAnim_00004();
	this.instance_4.setTransform(-142,-131);

	this.instance_5 = new lib.unlockAnim_00005();
	this.instance_5.setTransform(-142,-131);

	this.instance_6 = new lib.unlockAnim_00006();
	this.instance_6.setTransform(-142,-131);

	this.instance_7 = new lib.unlockAnim_00007();
	this.instance_7.setTransform(-142,-131);

	this.instance_8 = new lib.unlockAnim_00008();
	this.instance_8.setTransform(-142,-131);

	this.instance_9 = new lib.unlockAnim_00009();
	this.instance_9.setTransform(-142,-131);

	this.instance_10 = new lib.unlockAnim_00010();
	this.instance_10.setTransform(-142,-131);

	this.instance_11 = new lib.unlockAnim_00011();
	this.instance_11.setTransform(-142,-131);

	this.instance_12 = new lib.unlockAnim_00012();
	this.instance_12.setTransform(-142,-131);

	this.instance_13 = new lib.unlockAnim_00013();
	this.instance_13.setTransform(-142,-131);

	this.instance_14 = new lib.unlockAnim_00014();
	this.instance_14.setTransform(-142,-131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(1));

	// miniRubyKey
	this.instance_15 = new lib.miniRubyKey();
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:1.05,scaleY:1.05,rotation:-15,alpha:1},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0},2).wait(1));

	// TRANS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AjWEIIAAoPIGtAAIAAIPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-26.5,43,53);


(lib.rubyKey_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// miniRubyKey
	this.instance = new lib.miniRubyKey();
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// TRANS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AjWEIIAAoPIGtAAIAAIPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-26.5,43,53);


(lib.rubyGem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sparkles
	this.instance = new lib.revealSparkles("synched",0);
	this.instance.setTransform(105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},29).wait(1));

	// gem
	this.instance_1 = new lib.red_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(21));

	// reveal
	this.instance_2 = new lib.reveal();
	this.instance_2.setTransform(102,91.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({alpha:1},10).wait(11));

	// redReveal
	this.instance_3 = new lib.redReveal_1();
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-25.8,250,250);


(lib.redKey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rubyKey_on
	this.rubyKey_on = new lib.rubyKey_on();

	this.timeline.addTween(cjs.Tween.get(this.rubyKey_on).wait(1));

	// rubyKey_off
	this.rubyKey_off = new lib.rubyKey_off();

	this.timeline.addTween(cjs.Tween.get(this.rubyKey_off).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-26.5,43,53);


(lib.plaqueCloseBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.closeIcon_1();
	this.instance.setTransform(23.5,23.5,1,1,0,0,0,23.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9,y:24.5,alpha:0.5},0).wait(2));

	// Layer 2
	this.instance_1 = new lib.closeBtnUp();

	this.instance_2 = new lib.closeBtnDown();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,47);


(lib.goldenWordCountMeter_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// menuCelloff
	this.instance = new lib.menuCelloff();
	this.instance.setTransform(105,23.5,1,1,0,0,0,105,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// rubyCellColour.png
	this.instance_1 = new lib.rubyCellColour();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// menuCellBackground.png
	this.instance_2 = new lib.menuCellBackground();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.golden_payMeter_off();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.goldenTransAnimPort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1Pix
	this.instance = new lib._1Pix();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// logo
	this.instance_1 = new lib.goldenGorgeLogo_1();
	this.instance_1.setTransform(349.7,466.4,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:116,y:270},14,cjs.Ease.get(1)).wait(22));

	// lightPingAnim
	this.instance_2 = new lib.lightPingAnim("synched",0);
	this.instance_2.setTransform(374,277.7,0.615,0.615);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(33));

	// crystal
	this.instance_3 = new lib.gold_1();
	this.instance_3.setTransform(428.1,327.2,0.72,0.72,0,0,0,86.6,97.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regX:86.5,scaleX:0.82,scaleY:0.82,x:428,alpha:1},11).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,526.3,557.1);


(lib.goldenTransAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1Pix
	this.instance = new lib._1Pix();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// lightPingAnim
	this.instance_1 = new lib.lightPingAnim("synched",0);
	this.instance_1.setTransform(292,209.7,0.615,0.615);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(33));

	// logo
	this.rubyLogo = new lib.goldenLogo();
	this.rubyLogo.setTransform(694,211.3,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.rubyLogo).to({scaleX:1,scaleY:1,x:318,y:120},14,cjs.Ease.get(-1)).wait(22));

	// crystal
	this.instance_2 = new lib.gold_1();
	this.instance_2.setTransform(346.1,259.2,0.72,0.72,0,0,0,86.6,97.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({regX:86.5,scaleX:0.82,scaleY:0.82,x:346,alpha:1},11).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,859.6,296.3);


(lib.goldenPromptGemLandscape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.goldSweep_00000();

	this.instance_1 = new lib.goldSweep_00002();

	this.instance_2 = new lib.goldSweep_00004();

	this.instance_3 = new lib.goldSweep_00006();

	this.instance_4 = new lib.goldSweep_00008();

	this.instance_5 = new lib.goldSweep_00010();

	this.instance_6 = new lib.goldSweep_00012();

	this.instance_7 = new lib.goldSweep_00014();

	this.instance_8 = new lib.goldSweep_00016();

	this.instance_9 = new lib.goldSweep_00018();

	this.instance_10 = new lib.goldSweep_00020();

	this.instance_11 = new lib.goldSweep_00022();

	this.instance_12 = new lib.goldSweep_00024();

	this.instance_13 = new lib.goldSweep_00026();

	this.instance_14 = new lib.goldSweep_00028();

	this.instance_15 = new lib.goldSweep_00029();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},1).wait(1));

	// gem
	this.instance_16 = new lib.gold_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.goldenPromptGem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.goldSweep_00000();
	this.instance.setTransform(2,0);

	this.instance_1 = new lib.goldSweep_00002();
	this.instance_1.setTransform(2,0);

	this.instance_2 = new lib.goldSweep_00004();
	this.instance_2.setTransform(2,0);

	this.instance_3 = new lib.goldSweep_00006();
	this.instance_3.setTransform(2,0);

	this.instance_4 = new lib.goldSweep_00008();
	this.instance_4.setTransform(2,0);

	this.instance_5 = new lib.goldSweep_00010();
	this.instance_5.setTransform(2,0);

	this.instance_6 = new lib.goldSweep_00012();
	this.instance_6.setTransform(2,0);

	this.instance_7 = new lib.goldSweep_00014();
	this.instance_7.setTransform(2,0);

	this.instance_8 = new lib.goldSweep_00016();
	this.instance_8.setTransform(2,0);

	this.instance_9 = new lib.goldSweep_00018();
	this.instance_9.setTransform(2,0);

	this.instance_10 = new lib.goldSweep_00020();
	this.instance_10.setTransform(2,0);

	this.instance_11 = new lib.goldSweep_00022();
	this.instance_11.setTransform(2,0);

	this.instance_12 = new lib.goldSweep_00024();
	this.instance_12.setTransform(2,0);

	this.instance_13 = new lib.goldSweep_00026();
	this.instance_13.setTransform(2,0);

	this.instance_14 = new lib.goldSweep_00028();
	this.instance_14.setTransform(2,0);

	this.instance_15 = new lib.goldSweep_00029();
	this.instance_15.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},1).wait(1));

	// gem
	this.instance_16 = new lib.gold_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204,194);


(lib.goldenKey_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_16 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// unlock frames
	this.instance = new lib.unlockAnim_00000();
	this.instance.setTransform(-142,-131);

	this.instance_1 = new lib.unlockAnim_00001();
	this.instance_1.setTransform(-142,-131);

	this.instance_2 = new lib.unlockAnim_00002();
	this.instance_2.setTransform(-142,-131);

	this.instance_3 = new lib.unlockAnim_00003();
	this.instance_3.setTransform(-142,-131);

	this.instance_4 = new lib.unlockAnim_00004();
	this.instance_4.setTransform(-142,-131);

	this.instance_5 = new lib.unlockAnim_00005();
	this.instance_5.setTransform(-142,-131);

	this.instance_6 = new lib.unlockAnim_00006();
	this.instance_6.setTransform(-142,-131);

	this.instance_7 = new lib.unlockAnim_00007();
	this.instance_7.setTransform(-142,-131);

	this.instance_8 = new lib.unlockAnim_00008();
	this.instance_8.setTransform(-142,-131);

	this.instance_9 = new lib.unlockAnim_00009();
	this.instance_9.setTransform(-142,-131);

	this.instance_10 = new lib.unlockAnim_00010();
	this.instance_10.setTransform(-142,-131);

	this.instance_11 = new lib.unlockAnim_00011();
	this.instance_11.setTransform(-142,-131);

	this.instance_12 = new lib.unlockAnim_00012();
	this.instance_12.setTransform(-142,-131);

	this.instance_13 = new lib.unlockAnim_00013();
	this.instance_13.setTransform(-142,-131);

	this.instance_14 = new lib.unlockAnim_00014();
	this.instance_14.setTransform(-142,-131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(1));

	// miniGoldKey
	this.instance_15 = new lib.miniGoldKey();
	this.instance_15.setTransform(0.1,-1.7);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:1.05,scaleY:1.05,rotation:-15,alpha:1},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0},2).wait(1));

	// TRANS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AjWEIIAAoPIGtAAIAAIPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-27.8,43,54.4);


(lib.goldenKey_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// goldKey.png
	this.instance = new lib.miniGoldKey();
	this.instance.setTransform(18.2,21.7,1,1,0,0,0,18.1,23.4);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// TRANS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AjWEIIAAoPIGtAAIAAIPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-27.8,43,54.4);


(lib.goldenKey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// goldenKey_on
	this.goldenKey_on = new lib.goldenKey_on();

	this.timeline.addTween(cjs.Tween.get(this.goldenKey_on).wait(1));

	// goldenKey_off
	this.goldenKey_off = new lib.goldenKey_off();

	this.timeline.addTween(cjs.Tween.get(this.goldenKey_off).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-27.8,43,54.4);


(lib.goldenGem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sparkles
	this.instance = new lib.revealSparkles("synched",0);
	this.instance.setTransform(105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},29).wait(1));

	// gem
	this.instance_1 = new lib.gold_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(21));

	// reveal
	this.instance_2 = new lib.reveal();
	this.instance_2.setTransform(102,91.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({alpha:1},10).wait(11));

	// redReveal
	this.instance_3 = new lib.goldReveal_1();
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-25.8,250,250);


(lib.emeraldWordCountMeter_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// menuCelloff
	this.instance = new lib.menuCelloff();
	this.instance.setTransform(105,23.5,1,1,0,0,0,105,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// crystalCellColour.png
	this.instance_1 = new lib.emeraldCellColour();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// menuCellBackground.png
	this.instance_2 = new lib.menuCellBackground();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.emeraldWordCountMeter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// emeraldWordCountMeter_on
	this.instance = new lib.emeraldWordCountMeter_on();
	this.instance.setTransform(91,23.5,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// emeraldWordCountMeter_off
	this.emeraldWordCountMeter_off = new lib.emeraldWordCountMeter_off();
	this.emeraldWordCountMeter_off.setTransform(91,23.5,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get(this.emeraldWordCountMeter_off).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.emeraldTransAnimPort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1Pix
	this.instance = new lib._1Pix();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// logo
	this.rubyLogo = new lib.emeraldLogo();
	this.rubyLogo.setTransform(31.4,468.9,0.436,0.438);

	this.timeline.addTween(cjs.Tween.get(this.rubyLogo).to({scaleX:1,scaleY:1,x:92,y:270},14,cjs.Ease.get(1)).wait(22));

	// lightPingAnim
	this.instance_1 = new lib.lightPingAnim("synched",0);
	this.instance_1.setTransform(399.1,257.6,0.615,0.615);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(33));

	// crystal
	this.instance_2 = new lib.emeraldGem();
	this.instance_2.setTransform(457.2,334.2,0.72,0.72,0,0,0,86.6,97.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({regX:86.5,scaleX:0.82,scaleY:0.82,x:457.1,alpha:1},11).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,543.7);


(lib.emeraldTransAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1Pix
	this.instance = new lib._1Pix();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// logo
	this.rubyLogo = new lib.emeraldLogo();
	this.rubyLogo.setTransform(174.3,246.2,0.45,0.45,0,0,0,251.5,61.5);

	this.timeline.addTween(cjs.Tween.get(this.rubyLogo).to({regX:251.4,scaleX:1,scaleY:1,x:484.6,y:181.5},14,cjs.Ease.get(-1)).wait(22));

	// lightPingAnim
	this.instance_1 = new lib.lightPingAnim("synched",0);
	this.instance_1.setTransform(628.1,122.6,0.615,0.615);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(33));

	// crystal
	this.instance_2 = new lib.emeraldGem();
	this.instance_2.setTransform(680.2,201.2,0.72,0.72,0,0,0,86.6,97.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({regX:86.5,scaleX:0.82,scaleY:0.82,x:680.1,alpha:1},11).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.3,295.5);


(lib.emeraldPromptGemLandscape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.greenSweep_00000();

	this.instance_1 = new lib.greenSweep_00002();

	this.instance_2 = new lib.greenSweep_00004();

	this.instance_3 = new lib.greenSweep_00006();

	this.instance_4 = new lib.greenSweep_00008();

	this.instance_5 = new lib.greenSweep_00010();

	this.instance_6 = new lib.greenSweep_00012();

	this.instance_7 = new lib.greenSweep_00014();

	this.instance_8 = new lib.greenSweep_00016();

	this.instance_9 = new lib.greenSweep_00018();

	this.instance_10 = new lib.greenSweep_00020();

	this.instance_11 = new lib.greenSweep_00022();

	this.instance_12 = new lib.greenSweep_00024();

	this.instance_13 = new lib.greenSweep_00026();

	this.instance_14 = new lib.greenSweep_00028();

	this.instance_15 = new lib.greenSweep_00029();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},1).wait(1));

	// gem
	this.instance_16 = new lib.emeraldGem();

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.emeraldPromptGem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sweep
	this.instance = new lib.greenSweep_00000();

	this.instance_1 = new lib.greenSweep_00002();

	this.instance_2 = new lib.greenSweep_00004();

	this.instance_3 = new lib.greenSweep_00006();

	this.instance_4 = new lib.greenSweep_00008();

	this.instance_5 = new lib.greenSweep_00010();

	this.instance_6 = new lib.greenSweep_00012();

	this.instance_7 = new lib.greenSweep_00014();

	this.instance_8 = new lib.greenSweep_00016();

	this.instance_9 = new lib.greenSweep_00018();

	this.instance_10 = new lib.greenSweep_00020();

	this.instance_11 = new lib.greenSweep_00022();

	this.instance_12 = new lib.greenSweep_00024();

	this.instance_13 = new lib.greenSweep_00026();

	this.instance_14 = new lib.greenSweep_00028();

	this.instance_15 = new lib.greenSweep_00029();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},1).wait(1));

	// gem
	this.instance_16 = new lib.emeraldGem();

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.emeraldPrompt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// emeraldGem
	this.instance = new lib.emeraldPromptGem("single",0);
	this.instance.setTransform(56.5,48.6,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4},13,cjs.Ease.get(-1)).to({regY:99.7,scaleX:0.48,scaleY:0.48,rotation:1,y:48.8},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:48.6,mode:"single",startPosition:0},0).wait(35));

	// emeraldGem
	this.instance_1 = new lib.emeraldPromptGem("single",0);
	this.instance_1.setTransform(166.2,48.6,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({mode:"independent"},0).to({regX:104.9,regY:99.3,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-1)).to({regX:104.6,regY:99.7,scaleX:0.48,scaleY:0.48,rotation:1,x:166,y:48.8},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:48.6,mode:"single",startPosition:0},0).wait(33));

	// emeraldGem
	this.instance_2 = new lib.emeraldPromptGem("single",0);
	this.instance_2.setTransform(275.9,48.6,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({mode:"independent"},0).to({regX:104.9,regY:99.6,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:48.8},13,cjs.Ease.get(-1)).to({regX:104.7,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,x:275.7},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:48.6,mode:"single",startPosition:0},0).wait(31));

	// emeraldGem
	this.instance_3 = new lib.emeraldPromptGem("single",0);
	this.instance_3.setTransform(275.9,138.7,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({mode:"independent"},0).to({regX:104.9,regY:99.5,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:138.9},13,cjs.Ease.get(-1)).to({regX:104.8,regY:99.3,scaleX:0.48,scaleY:0.48,rotation:1,x:275.7,y:138.8},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:138.7,mode:"single",startPosition:0},0).wait(29));

	// emeraldGem
	this.instance_4 = new lib.emeraldPromptGem("single",0);
	this.instance_4.setTransform(166.2,138.7,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-1)).to({regX:104.6,regY:99.4,scaleX:0.48,scaleY:0.48,rotation:1,x:166,y:138.8},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:138.7,mode:"single",startPosition:0},0).wait(27));

	// emeraldGem
	this.instance_5 = new lib.emeraldPromptGem("single",0);
	this.instance_5.setTransform(56.5,138.7,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({mode:"independent"},0).to({regX:104.9,regY:99.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4},13,cjs.Ease.get(-1)).to({regX:105,regY:99.4,scaleX:0.48,scaleY:0.48,rotation:1,y:138.8},15,cjs.Ease.get(-1)).wait(1).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:138.7,mode:"single",startPosition:0},0).wait(25));

	// emeraldGem
	this.instance_6 = new lib.emeraldPromptGem("single",0);
	this.instance_6.setTransform(56.5,228.8,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({mode:"independent"},0).to({regY:99.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4,y:228.9},13,cjs.Ease.get(-1)).to({regX:104.9,regY:99.7,scaleX:0.48,scaleY:0.48,rotation:1,y:229},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:228.8,mode:"single",startPosition:0},0).wait(23));

	// emeraldGem
	this.instance_7 = new lib.emeraldPromptGem("single",0);
	this.instance_7.setTransform(166.2,228.8,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({mode:"independent"},0).to({regY:99.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-1)).to({regX:104.6,regY:99.7,scaleX:0.48,scaleY:0.48,rotation:1,x:166,y:229},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:228.8,mode:"single",startPosition:0},0).wait(21));

	// emeraldGem
	this.instance_8 = new lib.emeraldPromptGem("single",0);
	this.instance_8.setTransform(275.9,228.8,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:228.9},13,cjs.Ease.get(-1)).to({regX:104.7,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,x:275.7,y:229},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:228.8,mode:"single",startPosition:0},0).wait(19));

	// emeraldGem
	this.instance_9 = new lib.emeraldPromptGem("single",0);
	this.instance_9.setTransform(275.9,318.9,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({mode:"independent"},0).to({regX:104.9,regY:99.6,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:319.1},13,cjs.Ease.get(-1)).to({regX:104.8,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,x:275.7},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:318.9,mode:"single",startPosition:0},0).wait(17));

	// emeraldGem
	this.instance_10 = new lib.emeraldPromptGem("single",0);
	this.instance_10.setTransform(166.2,318.9,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21).to({mode:"independent"},0).to({regX:104.9,regY:99.3,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-1)).to({regX:104.6,regY:99.7,scaleX:0.48,scaleY:0.48,rotation:1,x:166,y:319.1},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:318.9,mode:"single",startPosition:0},0).wait(15));

	// emeraldGem
	this.instance_11 = new lib.emeraldPromptGem("single",0);
	this.instance_11.setTransform(56.5,318.9,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4},13,cjs.Ease.get(-1)).to({regX:105,regY:99.7,scaleX:0.48,scaleY:0.48,rotation:1,y:319.1},15,cjs.Ease.get(-1)).wait(1).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:318.9,mode:"single",startPosition:0},0).wait(13));

	// emeraldGem
	this.instance_12 = new lib.emeraldPromptGem("single",0);
	this.instance_12.setTransform(56.5,410.5,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25).to({mode:"independent"},0).to({regX:104.9,regY:99.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4},13,cjs.Ease.get(-1)).to({regX:105,regY:99.7,scaleX:0.48,scaleY:0.48,rotation:1,y:410.7},15,cjs.Ease.get(-1)).wait(1).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:410.5,mode:"single",startPosition:0},0).wait(11));

	// emeraldGem
	this.instance_13 = new lib.emeraldPromptGem("single",0);
	this.instance_13.setTransform(166.2,410.5,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(27).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-1)).to({regX:104.6,regY:99.7,scaleX:0.48,scaleY:0.48,rotation:1,x:166,y:410.7},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:410.5,mode:"single",startPosition:0},0).wait(9));

	// emeraldGem
	this.instance_14 = new lib.emeraldPromptGem("single",0);
	this.instance_14.setTransform(275.9,410.5,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({mode:"independent"},0).to({regX:104.9,regY:99.5,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:410.7},13,cjs.Ease.get(-1)).to({regX:104.8,scaleX:0.48,scaleY:0.48,rotation:1,x:275.7},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:410.5,mode:"single",startPosition:0},0).wait(7));

	// emeraldGem
	this.instance_15 = new lib.emeraldPromptGem("single",0);
	this.instance_15.setTransform(275.9,508,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(31).to({mode:"independent"},0).to({regX:104.9,regY:99.6,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:508.2},13,cjs.Ease.get(-1)).to({regX:104.8,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,x:275.7},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:508,mode:"single",startPosition:0},0).wait(5));

	// emeraldGem
	this.instance_16 = new lib.emeraldPromptGem("single",0);
	this.instance_16.setTransform(166.2,508,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(33).to({mode:"independent"},0).to({regX:104.9,regY:99.3,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-1)).to({regX:104.6,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,x:166,y:508.2},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:508,mode:"single",startPosition:0},0).wait(3));

	// emeraldGem
	this.instance_17 = new lib.emeraldPromptGem("single",0);
	this.instance_17.setTransform(56.5,508,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(35).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4},13,cjs.Ease.get(-1)).to({regX:105,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,y:508.2},15,cjs.Ease.get(-1)).wait(1).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:508,mode:"single",startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,0,318.5,554.5);


(lib.emeraldKey_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_16 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// unlock frames
	this.instance = new lib.unlockAnim_00000();
	this.instance.setTransform(-142,-131);

	this.instance_1 = new lib.unlockAnim_00001();
	this.instance_1.setTransform(-142,-131);

	this.instance_2 = new lib.unlockAnim_00002();
	this.instance_2.setTransform(-142,-131);

	this.instance_3 = new lib.unlockAnim_00003();
	this.instance_3.setTransform(-142,-131);

	this.instance_4 = new lib.unlockAnim_00004();
	this.instance_4.setTransform(-142,-131);

	this.instance_5 = new lib.unlockAnim_00005();
	this.instance_5.setTransform(-142,-131);

	this.instance_6 = new lib.unlockAnim_00006();
	this.instance_6.setTransform(-142,-131);

	this.instance_7 = new lib.unlockAnim_00007();
	this.instance_7.setTransform(-142,-131);

	this.instance_8 = new lib.unlockAnim_00008();
	this.instance_8.setTransform(-142,-131);

	this.instance_9 = new lib.unlockAnim_00009();
	this.instance_9.setTransform(-142,-131);

	this.instance_10 = new lib.unlockAnim_00010();
	this.instance_10.setTransform(-142,-131);

	this.instance_11 = new lib.unlockAnim_00011();
	this.instance_11.setTransform(-142,-131);

	this.instance_12 = new lib.unlockAnim_00012();
	this.instance_12.setTransform(-142,-131);

	this.instance_13 = new lib.unlockAnim_00013();
	this.instance_13.setTransform(-142,-131);

	this.instance_14 = new lib.unlockAnim_00014();
	this.instance_14.setTransform(-142,-131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(1));

	// miniEmeraldKey
	this.instance_15 = new lib.miniEmeraldKey();
	this.instance_15.setTransform(0.1,-1.7);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:1.05,scaleY:1.05,rotation:-15,alpha:1},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0},2).wait(1));

	// TRANS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AjWEIIAAoPIGtAAIAAIPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-28.1,43,54.7);


(lib.emeraldKey_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// miniEmeraldKey
	this.instance = new lib.miniEmeraldKey();
	this.instance.setTransform(18.2,21.7,1,1,0,0,0,18.1,23.4);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// TRANS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AjWEIIAAoPIGtAAIAAIPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-28.1,43,54.7);


(lib.emeraldKey_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// emeraldKey_on
	this.emeraldKey_on = new lib.emeraldKey_on();
	this.emeraldKey_on.setTransform(0,0.9);

	this.timeline.addTween(cjs.Tween.get(this.emeraldKey_on).wait(1));

	// emeraldKey_off
	this.emeraldKey_off = new lib.emeraldKey_off();
	this.emeraldKey_off.setTransform(0,0.9);

	this.timeline.addTween(cjs.Tween.get(this.emeraldKey_off).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-27.3,43,54.7);


(lib.emeraldGem_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sparkles
	this.instance_1 = new lib.revealSparkles("synched",0);
	this.instance_1.setTransform(105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},29).wait(1));

	// gem
	this.instance_2 = new lib.emeraldGem();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},9).wait(21));

	// reveal
	this.instance_3 = new lib.reveal();
	this.instance_3.setTransform(102,91.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({alpha:1},10).wait(11));

	// redReveal
	this.instance_4 = new lib.greenReveal_1();
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-25.8,250,250);


(lib.crystalWordCountMeter_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// menuCelloff
	this.instance = new lib.menuCelloff();
	this.instance.setTransform(105,23.5,1,1,0,0,0,105,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// crystalCellColour.png
	this.instance_1 = new lib.crystalCellColour();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// menuCellBackground.png
	this.instance_2 = new lib.menuCellBackground();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.crystalWordCountMeter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// crystalWordCountMeter_on
	this.crystalWordCountMeter_on = new lib.crystalWordCountMeter_on();
	this.crystalWordCountMeter_on.setTransform(91,23.5,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get(this.crystalWordCountMeter_on).wait(1));

	// crystalWordCountMeter_off
	this.crystalWordCountMeter_off = new lib.crystalWordCountMeter_off();
	this.crystalWordCountMeter_off.setTransform(91,23.5,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get(this.crystalWordCountMeter_off).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.crystalTransAnimPort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1Pix
	this.instance = new lib._1Pix();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// logo
	this.instance_1 = new lib.crystalCavernLogo_1();
	this.instance_1.setTransform(315.2,300.2,0.476,0.47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:65.5,y:270},14,cjs.Ease.get(1)).wait(21));

	// lightPingAnim
	this.instance_2 = new lib.lightPingAnim("synched",0);
	this.instance_2.setTransform(397.1,270.6,0.615,0.615);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(32));

	// crystal
	this.instance_3 = new lib.crystal_1();
	this.instance_3.setTransform(460.1,344.3,0.72,0.72,0,0,0,86.6,97.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regX:86.5,scaleX:0.82,scaleY:0.82,x:460,y:344.2,alpha:1},11).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,538.5,375.8);


(lib.crystalTransAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1Pix
	this.instance = new lib._1Pix();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// logo
	this.instance_1 = new lib.crystalCavernLogo_1();
	this.instance_1.setTransform(672.7,68.7,0.45,0.444);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:245.5,y:120},14,cjs.Ease.get(-1)).wait(21));

	// lightPingAnim
	this.instance_2 = new lib.lightPingAnim("synched",0);
	this.instance_2.setTransform(274.1,205.6,0.615,0.615);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(32));

	// crystal
	this.instance_3 = new lib.crystal_1();
	this.instance_3.setTransform(337.1,279.3,0.72,0.72,0,0,0,86.6,97.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regX:86.5,scaleX:0.82,scaleY:0.82,x:337,y:279.2,alpha:1},11).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,883.7,140.2);


(lib.crystalPromptGemLandscape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.crystalSweep_00000();
	this.instance.setTransform(14,3);

	this.instance_1 = new lib.crystalSweep_00002();
	this.instance_1.setTransform(14,3);

	this.instance_2 = new lib.crystalSweep_00004();
	this.instance_2.setTransform(14,3);

	this.instance_3 = new lib.crystalSweep_00006();
	this.instance_3.setTransform(14,3);

	this.instance_4 = new lib.crystalSweep_00008();
	this.instance_4.setTransform(14,3);

	this.instance_5 = new lib.crystalSweep_00010();
	this.instance_5.setTransform(14,3);

	this.instance_6 = new lib.crystalSweep_00012();
	this.instance_6.setTransform(14,3);

	this.instance_7 = new lib.crystalSweep_00014();
	this.instance_7.setTransform(14,3);

	this.instance_8 = new lib.crystalSweep_00016();
	this.instance_8.setTransform(14,3);

	this.instance_9 = new lib.crystalSweep_00018();
	this.instance_9.setTransform(14,3);

	this.instance_10 = new lib.crystalSweep_00020();
	this.instance_10.setTransform(14,3);

	this.instance_11 = new lib.crystalSweep_00022();
	this.instance_11.setTransform(14,3);

	this.instance_12 = new lib.crystalSweep_00024();
	this.instance_12.setTransform(14,3);

	this.instance_13 = new lib.crystalSweep_00026();
	this.instance_13.setTransform(14,3);

	this.instance_14 = new lib.crystalSweep_00028();
	this.instance_14.setTransform(14,3);

	this.instance_15 = new lib.crystalSweep_00029();
	this.instance_15.setTransform(14,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},1).wait(1));

	// gem
	this.instance_16 = new lib.crystal_1();
	this.instance_16.setTransform(14,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,3,172,189);


(lib.crystalPromptGem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.crystalSweep_00000();
	this.instance.setTransform(14,3);

	this.instance_1 = new lib.crystalSweep_00002();
	this.instance_1.setTransform(14,3);

	this.instance_2 = new lib.crystalSweep_00004();
	this.instance_2.setTransform(14,3);

	this.instance_3 = new lib.crystalSweep_00006();
	this.instance_3.setTransform(14,3);

	this.instance_4 = new lib.crystalSweep_00008();
	this.instance_4.setTransform(14,3);

	this.instance_5 = new lib.crystalSweep_00010();
	this.instance_5.setTransform(14,3);

	this.instance_6 = new lib.crystalSweep_00012();
	this.instance_6.setTransform(14,3);

	this.instance_7 = new lib.crystalSweep_00014();
	this.instance_7.setTransform(14,3);

	this.instance_8 = new lib.crystalSweep_00016();
	this.instance_8.setTransform(14,3);

	this.instance_9 = new lib.crystalSweep_00018();
	this.instance_9.setTransform(14,3);

	this.instance_10 = new lib.crystalSweep_00020();
	this.instance_10.setTransform(14,3);

	this.instance_11 = new lib.crystalSweep_00022();
	this.instance_11.setTransform(14,3);

	this.instance_12 = new lib.crystalSweep_00024();
	this.instance_12.setTransform(14,3);

	this.instance_13 = new lib.crystalSweep_00026();
	this.instance_13.setTransform(14,3);

	this.instance_14 = new lib.crystalSweep_00028();
	this.instance_14.setTransform(14,3);

	this.instance_15 = new lib.crystalSweep_00029();
	this.instance_15.setTransform(14,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},1).wait(1));

	// gem
	this.instance_16 = new lib.crystal_1();
	this.instance_16.setTransform(14,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,3,172,189);


(lib.crystalPrompt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// crystalPromptGem
	this.instance = new lib.crystalPromptGem("single",0);
	this.instance.setTransform(56.5,48.6,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4},13,cjs.Ease.get(-1)).to({regX:104.5,regY:99.3,scaleX:0.48,scaleY:0.48,rotation:1,x:56.3,y:48.7},14,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:48.6,mode:"single",startPosition:0},0).wait(34));

	// crystalPromptGem
	this.instance_1 = new lib.crystalPromptGem("single",0);
	this.instance_1.setTransform(166.2,48.6,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({mode:"independent"},0).to({regX:104.9,regY:99.3,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-1)).to({regX:104.5,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,x:166,y:48.7},14,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:48.6,mode:"single",startPosition:0},0).wait(32));

	// crystalPromptGem
	this.instance_2 = new lib.crystalPromptGem("single",0);
	this.instance_2.setTransform(275.9,48.6,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({mode:"independent"},0).to({regX:104.9,regY:99.6,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:48.8},13,cjs.Ease.get(-1)).to({regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:48.6,mode:"single",startPosition:0},0).wait(31));

	// crystalPromptGem
	this.instance_3 = new lib.crystalPromptGem("single",0);
	this.instance_3.setTransform(275.9,138.7,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({mode:"independent"},0).to({regX:104.9,regY:99.5,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:138.9},13,cjs.Ease.get(-1)).to({scaleX:0.48,scaleY:0.48,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:138.7,mode:"single",startPosition:0},0).wait(29));

	// crystalPromptGem
	this.instance_4 = new lib.crystalPromptGem("single",0);
	this.instance_4.setTransform(166.2,138.7,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-1)).to({regX:104.8,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,y:138.9},14,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:138.7,mode:"single",startPosition:0},0).wait(27));

	// crystalPromptGem
	this.instance_5 = new lib.crystalPromptGem("single",0);
	this.instance_5.setTransform(56.5,138.7,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({mode:"independent"},0).to({regX:104.9,regY:99.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4},13,cjs.Ease.get(-1)).to({regX:104.5,regY:99.3,scaleX:0.48,scaleY:0.48,rotation:1,x:56.3,y:138.8},14,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:138.7,mode:"single",startPosition:0},0).wait(25));

	// crystalPromptGem
	this.instance_6 = new lib.crystalPromptGem("single",0);
	this.instance_6.setTransform(56.5,228.8,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({mode:"independent"},0).to({regY:99.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4,y:228.9},13,cjs.Ease.get(-1)).to({regX:104.9,regY:99.3,scaleX:0.48,scaleY:0.48,rotation:1,y:229},14,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:228.8,mode:"single",startPosition:0},0).wait(23));

	// crystalPromptGem
	this.instance_7 = new lib.crystalPromptGem("single",0);
	this.instance_7.setTransform(166.2,228.8,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({mode:"independent"},0).to({regY:99.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-1)).to({regX:104.6,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,x:166,y:229},14,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:228.8,mode:"single",startPosition:0},0).wait(21));

	// crystalPromptGem
	this.instance_8 = new lib.crystalPromptGem("single",0);
	this.instance_8.setTransform(275.9,228.8,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:228.9},13,cjs.Ease.get(-1)).to({regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,y:229},14,cjs.Ease.get(-1)).wait(1).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:228.8,mode:"single",startPosition:0},0).wait(19));

	// crystalPromptGem
	this.instance_9 = new lib.crystalPromptGem("single",0);
	this.instance_9.setTransform(275.9,318.9,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({mode:"independent"},0).to({regX:104.9,regY:99.6,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:319.1},13,cjs.Ease.get(-1)).to({regY:99.4,scaleX:0.48,scaleY:0.48,rotation:1,y:319},14,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:318.9,mode:"single",startPosition:0},0).wait(17));

	// crystalPromptGem
	this.instance_10 = new lib.crystalPromptGem("single",0);
	this.instance_10.setTransform(166.2,318.9,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({mode:"independent"},0).to({regX:104.9,regY:99.3,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-1)).to({regX:104.5,regY:99.4,scaleX:0.48,scaleY:0.48,rotation:1,x:166},14,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,mode:"single",startPosition:0},0).wait(15));

	// crystalPromptGem
	this.instance_11 = new lib.crystalPromptGem("single",0);
	this.instance_11.setTransform(56.5,318.9,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(22).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4},13,cjs.Ease.get(-1)).to({regX:104.5,regY:99,scaleX:0.48,scaleY:0.48,rotation:1,x:56.3,y:318.8},14,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:318.9,mode:"single",startPosition:0},0).wait(13));

	// crystalPromptGem
	this.instance_12 = new lib.crystalPromptGem("single",0);
	this.instance_12.setTransform(56.5,410.5,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({mode:"independent"},0).to({regX:104.9,regY:99.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4},13,cjs.Ease.get(-1)).to({regX:104.5,regY:99.3,scaleX:0.48,scaleY:0.48,rotation:1,x:56.3,y:410.6},14,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:410.5,mode:"single",startPosition:0},0).wait(11));

	// crystalPromptGem
	this.instance_13 = new lib.crystalPromptGem("single",0);
	this.instance_13.setTransform(166.2,410.5,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(26).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-1)).to({regX:104.5,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,x:166,y:410.6},14,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:410.5,mode:"single",startPosition:0},0).wait(9));

	// crystalPromptGem
	this.instance_14 = new lib.crystalPromptGem("single",0);
	this.instance_14.setTransform(275.9,410.5,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(28).to({mode:"independent"},0).to({regX:104.9,regY:99.5,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:410.7},13,cjs.Ease.get(-1)).to({scaleX:0.48,scaleY:0.48,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:410.5,mode:"single",startPosition:0},0).wait(7));

	// crystalPromptGem
	this.instance_15 = new lib.crystalPromptGem("single",0);
	this.instance_15.setTransform(275.9,508,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(30).to({mode:"independent"},0).to({regY:99.5,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:508.2},13,cjs.Ease.get(-1)).to({scaleX:0.48,scaleY:0.48,rotation:1,y:508.1},14,cjs.Ease.get(-1)).wait(1).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:508,mode:"single",startPosition:0},0).wait(5));

	// crystalPromptGem
	this.instance_16 = new lib.crystalPromptGem("single",0);
	this.instance_16.setTransform(166.2,508,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(32).to({mode:"independent"},0).to({regX:104.9,regY:99.3,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-1)).to({regX:104.8,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,y:508.1},14,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:508,mode:"single",startPosition:0},0).wait(3));

	// crystalPromptGem
	this.instance_17 = new lib.crystalPromptGem("single",0);
	this.instance_17.setTransform(56.5,508,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(34).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4},13,cjs.Ease.get(-1)).to({regX:104.8,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,y:508.2},14,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:508,mode:"single",startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.8,1.4,303.8,552.1);


(lib.crystalKey_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_16 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// unlock frames
	this.instance = new lib.unlockAnim_00000();
	this.instance.setTransform(-142,-131);

	this.instance_1 = new lib.unlockAnim_00001();
	this.instance_1.setTransform(-142,-131);

	this.instance_2 = new lib.unlockAnim_00002();
	this.instance_2.setTransform(-142,-131);

	this.instance_3 = new lib.unlockAnim_00003();
	this.instance_3.setTransform(-142,-131);

	this.instance_4 = new lib.unlockAnim_00004();
	this.instance_4.setTransform(-142,-131);

	this.instance_5 = new lib.unlockAnim_00005();
	this.instance_5.setTransform(-142,-131);

	this.instance_6 = new lib.unlockAnim_00006();
	this.instance_6.setTransform(-142,-131);

	this.instance_7 = new lib.unlockAnim_00007();
	this.instance_7.setTransform(-142,-131);

	this.instance_8 = new lib.unlockAnim_00008();
	this.instance_8.setTransform(-142,-131);

	this.instance_9 = new lib.unlockAnim_00009();
	this.instance_9.setTransform(-142,-131);

	this.instance_10 = new lib.unlockAnim_00010();
	this.instance_10.setTransform(-142,-131);

	this.instance_11 = new lib.unlockAnim_00011();
	this.instance_11.setTransform(-142,-131);

	this.instance_12 = new lib.unlockAnim_00012();
	this.instance_12.setTransform(-142,-131);

	this.instance_13 = new lib.unlockAnim_00013();
	this.instance_13.setTransform(-142,-131);

	this.instance_14 = new lib.unlockAnim_00014();
	this.instance_14.setTransform(-142,-131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(1));

	// miniCrystalKey
	this.instance_15 = new lib.miniCrystalKey();
	this.instance_15.setTransform(0.1,-1.7);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:1.05,scaleY:1.05,rotation:-15,alpha:1},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0},2).wait(1));

	// TRANS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AjWEIIAAoPIGtAAIAAIPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-27.8,43,54.4);


(lib.crystalKey_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// crystalKey.png
	this.instance = new lib.miniCrystalKey();
	this.instance.setTransform(18.2,21.7,1,1,0,0,0,18.1,23.4);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// TRANS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AjWEIIAAoPIGtAAIAAIPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-27.8,43,54.4);


(lib.crystalKey_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// crystalKey_on
	this.crystalKey_on = new lib.crystalKey_on();

	this.timeline.addTween(cjs.Tween.get(this.crystalKey_on).wait(1));

	// crystalKey_off
	this.crystalKey_off = new lib.crystalKey_off();

	this.timeline.addTween(cjs.Tween.get(this.crystalKey_off).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-27.8,43,54.4);


(lib.crystalGem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sparkles
	this.instance = new lib.revealSparkles("synched",0);
	this.instance.setTransform(105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},29).wait(1));

	// gem
	this.instance_1 = new lib.crystal_1();
	this.instance_1.setTransform(14,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(21));

	// reveal
	this.instance_2 = new lib.reveal();
	this.instance_2.setTransform(102,91.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({alpha:1},10).wait(11));

	// redReveal
	this.instance_3 = new lib.crystalReveal_1();
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-25.8,250,250);


(lib.crosswordBoard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.tile_11_11 = new lib.tile();
	this.tile_11_11.setTransform(368,368.3,1,1,0,0,0,17,17);

	this.tile_11_10 = new lib.tile();
	this.tile_11_10.setTransform(332.9,368.3,1,1,0,0,0,17,17);

	this.tile_11_09 = new lib.tile();
	this.tile_11_09.setTransform(297.8,368.3,1,1,0,0,0,17,17);

	this.tile_11_08 = new lib.tile();
	this.tile_11_08.setTransform(262.7,368.3,1,1,0,0,0,17,17);

	this.tile_11_01 = new lib.tile();
	this.tile_11_01.setTransform(17,368.3,1,1,0,0,0,17,17);

	this.tile_11_02 = new lib.tile();
	this.tile_11_02.setTransform(52.1,368.3,1,1,0,0,0,17,17);

	this.tile_11_03 = new lib.tile();
	this.tile_11_03.setTransform(87.2,368.3,1,1,0,0,0,17,17);

	this.tile_11_04 = new lib.tile();
	this.tile_11_04.setTransform(122.3,368.3,1,1,0,0,0,17,17);

	this.tile_11_05 = new lib.tile();
	this.tile_11_05.setTransform(157.4,368.3,1,1,0,0,0,17,17);

	this.tile_11_06 = new lib.tile();
	this.tile_11_06.setTransform(192.5,368.3,1,1,0,0,0,17,17);

	this.tile_11_07 = new lib.tile();
	this.tile_11_07.setTransform(227.6,368.3,1,1,0,0,0,17,17);

	this.tile_10_11 = new lib.tile();
	this.tile_10_11.setTransform(368,332.3,1,1,0,0,0,17,17);

	this.tile_10_10 = new lib.tile();
	this.tile_10_10.setTransform(332.9,332.3,1,1,0,0,0,17,17);

	this.tile_10_09 = new lib.tile();
	this.tile_10_09.setTransform(297.8,332.3,1,1,0,0,0,17,17);

	this.tile_10_08 = new lib.tile();
	this.tile_10_08.setTransform(262.7,332.3,1,1,0,0,0,17,17);

	this.tile_10_01 = new lib.tile();
	this.tile_10_01.setTransform(17,332.3,1,1,0,0,0,17,17);

	this.tile_10_02 = new lib.tile();
	this.tile_10_02.setTransform(52.1,332.3,1,1,0,0,0,17,17);

	this.tile_10_03 = new lib.tile();
	this.tile_10_03.setTransform(87.2,332.3,1,1,0,0,0,17,17);

	this.tile_10_04 = new lib.tile();
	this.tile_10_04.setTransform(122.3,332.3,1,1,0,0,0,17,17);

	this.tile_10_05 = new lib.tile();
	this.tile_10_05.setTransform(157.4,332.3,1,1,0,0,0,17,17);

	this.tile_10_06 = new lib.tile();
	this.tile_10_06.setTransform(192.5,332.3,1,1,0,0,0,17,17);

	this.tile_10_07 = new lib.tile();
	this.tile_10_07.setTransform(227.6,332.3,1,1,0,0,0,17,17);

	this.tile_09_11 = new lib.tile();
	this.tile_09_11.setTransform(368,297,1,1,0,0,0,17,17);

	this.tile_09_10 = new lib.tile();
	this.tile_09_10.setTransform(332.9,297,1,1,0,0,0,17,17);

	this.tile_09_09 = new lib.tile();
	this.tile_09_09.setTransform(297.8,297,1,1,0,0,0,17,17);

	this.tile_09_08 = new lib.tile();
	this.tile_09_08.setTransform(262.7,297,1,1,0,0,0,17,17);

	this.tile_09_01 = new lib.tile();
	this.tile_09_01.setTransform(17,297,1,1,0,0,0,17,17);

	this.tile_09_02 = new lib.tile();
	this.tile_09_02.setTransform(52.1,297,1,1,0,0,0,17,17);

	this.tile_09_03 = new lib.tile();
	this.tile_09_03.setTransform(87.2,297,1,1,0,0,0,17,17);

	this.tile_09_04 = new lib.tile();
	this.tile_09_04.setTransform(122.3,297,1,1,0,0,0,17,17);

	this.tile_09_05 = new lib.tile();
	this.tile_09_05.setTransform(157.4,297,1,1,0,0,0,17,17);

	this.tile_09_06 = new lib.tile();
	this.tile_09_06.setTransform(192.5,297,1,1,0,0,0,17,17);

	this.tile_09_07 = new lib.tile();
	this.tile_09_07.setTransform(227.6,297,1,1,0,0,0,17,17);

	this.tile_08_11 = new lib.tile();
	this.tile_08_11.setTransform(368,262.3,1,1,0,0,0,17,17);

	this.tile_08_10 = new lib.tile();
	this.tile_08_10.setTransform(332.9,262.3,1,1,0,0,0,17,17);

	this.tile_08_09 = new lib.tile();
	this.tile_08_09.setTransform(297.8,262.3,1,1,0,0,0,17,17);

	this.tile_08_08 = new lib.tile();
	this.tile_08_08.setTransform(262.7,262.3,1,1,0,0,0,17,17);

	this.tile_08_01 = new lib.tile();
	this.tile_08_01.setTransform(17,262.3,1,1,0,0,0,17,17);

	this.tile_08_02 = new lib.tile();
	this.tile_08_02.setTransform(52.1,262.3,1,1,0,0,0,17,17);

	this.tile_08_03 = new lib.tile();
	this.tile_08_03.setTransform(87.2,262.3,1,1,0,0,0,17,17);

	this.tile_08_04 = new lib.tile();
	this.tile_08_04.setTransform(122.3,262.3,1,1,0,0,0,17,17);

	this.tile_08_05 = new lib.tile();
	this.tile_08_05.setTransform(157.4,262.3,1,1,0,0,0,17,17);

	this.tile_08_06 = new lib.tile();
	this.tile_08_06.setTransform(192.5,262.3,1,1,0,0,0,17,17);

	this.tile_08_07 = new lib.tile();
	this.tile_08_07.setTransform(227.6,262.3,1,1,0,0,0,17,17);

	this.tile_07_11 = new lib.tile();
	this.tile_07_11.setTransform(368,227,1,1,0,0,0,17,17);

	this.tile_07_10 = new lib.tile();
	this.tile_07_10.setTransform(332.9,227,1,1,0,0,0,17,17);

	this.tile_07_09 = new lib.tile();
	this.tile_07_09.setTransform(297.8,227,1,1,0,0,0,17,17);

	this.tile_07_08 = new lib.tile();
	this.tile_07_08.setTransform(262.7,227,1,1,0,0,0,17,17);

	this.tile_07_01 = new lib.tile();
	this.tile_07_01.setTransform(17,227,1,1,0,0,0,17,17);

	this.tile_07_02 = new lib.tile();
	this.tile_07_02.setTransform(52.1,227,1,1,0,0,0,17,17);

	this.tile_07_03 = new lib.tile();
	this.tile_07_03.setTransform(87.2,227,1,1,0,0,0,17,17);

	this.tile_07_04 = new lib.tile();
	this.tile_07_04.setTransform(122.3,227,1,1,0,0,0,17,17);

	this.tile_07_05 = new lib.tile();
	this.tile_07_05.setTransform(157.4,227,1,1,0,0,0,17,17);

	this.tile_07_06 = new lib.tile();
	this.tile_07_06.setTransform(192.5,227,1,1,0,0,0,17,17);

	this.tile_07_07 = new lib.tile();
	this.tile_07_07.setTransform(227.6,227,1,1,0,0,0,17,17);

	this.tile_06_11 = new lib.tile();
	this.tile_06_11.setTransform(368,192.3,1,1,0,0,0,17,17);

	this.tile_06_10 = new lib.tile();
	this.tile_06_10.setTransform(332.9,192.3,1,1,0,0,0,17,17);

	this.tile_06_09 = new lib.tile();
	this.tile_06_09.setTransform(297.8,192.3,1,1,0,0,0,17,17);

	this.tile_06_08 = new lib.tile();
	this.tile_06_08.setTransform(262.7,192.3,1,1,0,0,0,17,17);

	this.tile_06_01 = new lib.tile();
	this.tile_06_01.setTransform(17,192.3,1,1,0,0,0,17,17);

	this.tile_06_02 = new lib.tile();
	this.tile_06_02.setTransform(52.1,192.3,1,1,0,0,0,17,17);

	this.tile_06_03 = new lib.tile();
	this.tile_06_03.setTransform(87.2,192.3,1,1,0,0,0,17,17);

	this.tile_06_04 = new lib.tile();
	this.tile_06_04.setTransform(122.3,192.3,1,1,0,0,0,17,17);

	this.tile_06_05 = new lib.tile();
	this.tile_06_05.setTransform(157.4,192.3,1,1,0,0,0,17,17);

	this.tile_06_06 = new lib.tile();
	this.tile_06_06.setTransform(192.5,192.3,1,1,0,0,0,17,17);

	this.tile_06_07 = new lib.tile();
	this.tile_06_07.setTransform(227.6,192.3,1,1,0,0,0,17,17);

	this.tile_05_11 = new lib.tile();
	this.tile_05_11.setTransform(368,157,1,1,0,0,0,17,17);

	this.tile_05_10 = new lib.tile();
	this.tile_05_10.setTransform(332.9,157,1,1,0,0,0,17,17);

	this.tile_05_09 = new lib.tile();
	this.tile_05_09.setTransform(297.8,157,1,1,0,0,0,17,17);

	this.tile_05_08 = new lib.tile();
	this.tile_05_08.setTransform(262.7,157,1,1,0,0,0,17,17);

	this.tile_05_01 = new lib.tile();
	this.tile_05_01.setTransform(17,157,1,1,0,0,0,17,17);

	this.tile_05_02 = new lib.tile();
	this.tile_05_02.setTransform(52.1,157,1,1,0,0,0,17,17);

	this.tile_05_03 = new lib.tile();
	this.tile_05_03.setTransform(87.2,157,1,1,0,0,0,17,17);

	this.tile_05_04 = new lib.tile();
	this.tile_05_04.setTransform(122.3,157,1,1,0,0,0,17,17);

	this.tile_05_05 = new lib.tile();
	this.tile_05_05.setTransform(157.4,157,1,1,0,0,0,17,17);

	this.tile_05_06 = new lib.tile();
	this.tile_05_06.setTransform(192.5,157,1,1,0,0,0,17,17);

	this.tile_05_07 = new lib.tile();
	this.tile_05_07.setTransform(227.6,157,1,1,0,0,0,17,17);

	this.tile_04_11 = new lib.tile();
	this.tile_04_11.setTransform(368,122.3,1,1,0,0,0,17,17);

	this.tile_04_10 = new lib.tile();
	this.tile_04_10.setTransform(332.9,122.3,1,1,0,0,0,17,17);

	this.tile_04_09 = new lib.tile();
	this.tile_04_09.setTransform(297.8,122.3,1,1,0,0,0,17,17);

	this.tile_04_08 = new lib.tile();
	this.tile_04_08.setTransform(262.7,122.3,1,1,0,0,0,17,17);

	this.tile_04_01 = new lib.tile();
	this.tile_04_01.setTransform(17,122.3,1,1,0,0,0,17,17);

	this.tile_04_02 = new lib.tile();
	this.tile_04_02.setTransform(52.1,122.3,1,1,0,0,0,17,17);

	this.tile_04_03 = new lib.tile();
	this.tile_04_03.setTransform(87.2,122.3,1,1,0,0,0,17,17);

	this.tile_04_04 = new lib.tile();
	this.tile_04_04.setTransform(122.3,122.3,1,1,0,0,0,17,17);

	this.tile_04_05 = new lib.tile();
	this.tile_04_05.setTransform(157.4,122.3,1,1,0,0,0,17,17);

	this.tile_04_06 = new lib.tile();
	this.tile_04_06.setTransform(192.5,122.3,1,1,0,0,0,17,17);

	this.tile_04_07 = new lib.tile();
	this.tile_04_07.setTransform(227.6,122.3,1,1,0,0,0,17,17);

	this.tile_03_11 = new lib.tile();
	this.tile_03_11.setTransform(368,87,1,1,0,0,0,17,17);

	this.tile_03_10 = new lib.tile();
	this.tile_03_10.setTransform(332.9,87,1,1,0,0,0,17,17);

	this.tile_03_09 = new lib.tile();
	this.tile_03_09.setTransform(297.8,87,1,1,0,0,0,17,17);

	this.tile_03_08 = new lib.tile();
	this.tile_03_08.setTransform(262.7,87,1,1,0,0,0,17,17);

	this.tile_03_01 = new lib.tile();
	this.tile_03_01.setTransform(17,87,1,1,0,0,0,17,17);

	this.tile_03_02 = new lib.tile();
	this.tile_03_02.setTransform(52.1,87,1,1,0,0,0,17,17);

	this.tile_03_03 = new lib.tile();
	this.tile_03_03.setTransform(87.2,87,1,1,0,0,0,17,17);

	this.tile_03_04 = new lib.tile();
	this.tile_03_04.setTransform(122.3,87,1,1,0,0,0,17,17);

	this.tile_03_05 = new lib.tile();
	this.tile_03_05.setTransform(157.4,87,1,1,0,0,0,17,17);

	this.tile_03_06 = new lib.tile();
	this.tile_03_06.setTransform(192.5,87,1,1,0,0,0,17,17);

	this.tile_03_07 = new lib.tile();
	this.tile_03_07.setTransform(227.6,87,1,1,0,0,0,17,17);

	this.tile_02_11 = new lib.tile();
	this.tile_02_11.setTransform(368,52.3,1,1,0,0,0,17,17);

	this.tile_02_10 = new lib.tile();
	this.tile_02_10.setTransform(332.9,52.3,1,1,0,0,0,17,17);

	this.tile_02_09 = new lib.tile();
	this.tile_02_09.setTransform(297.8,52.3,1,1,0,0,0,17,17);

	this.tile_02_08 = new lib.tile();
	this.tile_02_08.setTransform(262.7,52.3,1,1,0,0,0,17,17);

	this.tile_02_01 = new lib.tile();
	this.tile_02_01.setTransform(17,52.3,1,1,0,0,0,17,17);

	this.tile_02_02 = new lib.tile();
	this.tile_02_02.setTransform(52.1,52.3,1,1,0,0,0,17,17);

	this.tile_02_03 = new lib.tile();
	this.tile_02_03.setTransform(87.2,52.3,1,1,0,0,0,17,17);

	this.tile_02_04 = new lib.tile();
	this.tile_02_04.setTransform(122.3,52.3,1,1,0,0,0,17,17);

	this.tile_02_05 = new lib.tile();
	this.tile_02_05.setTransform(157.4,52.3,1,1,0,0,0,17,17);

	this.tile_02_06 = new lib.tile();
	this.tile_02_06.setTransform(192.5,52.3,1,1,0,0,0,17,17);

	this.tile_02_07 = new lib.tile();
	this.tile_02_07.setTransform(227.6,52.3,1,1,0,0,0,17,17);

	this.tile_01_11 = new lib.tile();
	this.tile_01_11.setTransform(368,17,1,1,0,0,0,17,17);

	this.tile_01_10 = new lib.tile();
	this.tile_01_10.setTransform(332.9,17,1,1,0,0,0,17,17);

	this.tile_01_09 = new lib.tile();
	this.tile_01_09.setTransform(297.8,17,1,1,0,0,0,17,17);

	this.tile_01_08 = new lib.tile();
	this.tile_01_08.setTransform(262.7,17,1,1,0,0,0,17,17);

	this.tile_01_01 = new lib.tile();

	this.tile_01_02 = new lib.tile();
	this.tile_01_02.setTransform(35.1,0);

	this.tile_01_03 = new lib.tile();
	this.tile_01_03.setTransform(87.2,17,1,1,0,0,0,17,17);

	this.tile_01_04 = new lib.tile();
	this.tile_01_04.setTransform(122.3,17,1,1,0,0,0,17,17);

	this.tile_01_05 = new lib.tile();
	this.tile_01_05.setTransform(157.4,17,1,1,0,0,0,17,17);

	this.tile_01_06 = new lib.tile();
	this.tile_01_06.setTransform(192.5,17,1,1,0,0,0,17,17);

	this.tile_01_07 = new lib.tile();
	this.tile_01_07.setTransform(227.6,17,1,1,0,0,0,17,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tile_01_07},{t:this.tile_01_06},{t:this.tile_01_05},{t:this.tile_01_04},{t:this.tile_01_03},{t:this.tile_01_02},{t:this.tile_01_01},{t:this.tile_01_08},{t:this.tile_01_09},{t:this.tile_01_10},{t:this.tile_01_11},{t:this.tile_02_07},{t:this.tile_02_06},{t:this.tile_02_05},{t:this.tile_02_04},{t:this.tile_02_03},{t:this.tile_02_02},{t:this.tile_02_01},{t:this.tile_02_08},{t:this.tile_02_09},{t:this.tile_02_10},{t:this.tile_02_11},{t:this.tile_03_07},{t:this.tile_03_06},{t:this.tile_03_05},{t:this.tile_03_04},{t:this.tile_03_03},{t:this.tile_03_02},{t:this.tile_03_01},{t:this.tile_03_08},{t:this.tile_03_09},{t:this.tile_03_10},{t:this.tile_03_11},{t:this.tile_04_07},{t:this.tile_04_06},{t:this.tile_04_05},{t:this.tile_04_04},{t:this.tile_04_03},{t:this.tile_04_02},{t:this.tile_04_01},{t:this.tile_04_08},{t:this.tile_04_09},{t:this.tile_04_10},{t:this.tile_04_11},{t:this.tile_05_07},{t:this.tile_05_06},{t:this.tile_05_05},{t:this.tile_05_04},{t:this.tile_05_03},{t:this.tile_05_02},{t:this.tile_05_01},{t:this.tile_05_08},{t:this.tile_05_09},{t:this.tile_05_10},{t:this.tile_05_11},{t:this.tile_06_07},{t:this.tile_06_06},{t:this.tile_06_05},{t:this.tile_06_04},{t:this.tile_06_03},{t:this.tile_06_02},{t:this.tile_06_01},{t:this.tile_06_08},{t:this.tile_06_09},{t:this.tile_06_10},{t:this.tile_06_11},{t:this.tile_07_07},{t:this.tile_07_06},{t:this.tile_07_05},{t:this.tile_07_04},{t:this.tile_07_03},{t:this.tile_07_02},{t:this.tile_07_01},{t:this.tile_07_08},{t:this.tile_07_09},{t:this.tile_07_10},{t:this.tile_07_11},{t:this.tile_08_07},{t:this.tile_08_06},{t:this.tile_08_05},{t:this.tile_08_04},{t:this.tile_08_03},{t:this.tile_08_02},{t:this.tile_08_01},{t:this.tile_08_08},{t:this.tile_08_09},{t:this.tile_08_10},{t:this.tile_08_11},{t:this.tile_09_07},{t:this.tile_09_06},{t:this.tile_09_05},{t:this.tile_09_04},{t:this.tile_09_03},{t:this.tile_09_02},{t:this.tile_09_01},{t:this.tile_09_08},{t:this.tile_09_09},{t:this.tile_09_10},{t:this.tile_09_11},{t:this.tile_10_07},{t:this.tile_10_06},{t:this.tile_10_05},{t:this.tile_10_04},{t:this.tile_10_03},{t:this.tile_10_02},{t:this.tile_10_01},{t:this.tile_10_08},{t:this.tile_10_09},{t:this.tile_10_10},{t:this.tile_10_11},{t:this.tile_11_07},{t:this.tile_11_06},{t:this.tile_11_05},{t:this.tile_11_04},{t:this.tile_11_03},{t:this.tile_11_02},{t:this.tile_11_01},{t:this.tile_11_08},{t:this.tile_11_09},{t:this.tile_11_10},{t:this.tile_11_11}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,385,385.7);


(lib.sapphireSelct_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// unlockAnim
	this.instance = new lib.unlockAnim("synched",0);
	this.instance.setTransform(131,74.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(17));

	// lockFront
	this.instance_1 = new lib.lockFront();
	this.instance_1.setTransform(117,83.6,1,1,0,0,0,9.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},14).wait(17));

	// lockUnlocked
	this.instance_2 = new lib.lockUnlocked_1();
	this.instance_2.setTransform(123.5,85.1,1,1,-15,0,0,16,26.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(7).to({alpha:0},8).wait(2));

	// chain
	this.instance_3 = new lib.emeraldChain_1();
	this.instance_3.setTransform(130.5,69,1,1,0,0,0,122,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({alpha:0},15).wait(2));

	// lockBack
	this.instance_4 = new lib.lockBack();
	this.instance_4.setTransform(123.5,92.1,1,1,0,0,0,16,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},14).wait(17));

	// Logo
	this.rubyLogo = new lib.sapphireLogo();
	this.rubyLogo.setTransform(139.5,27.7,0.45,0.45,0,0,0,251.5,61.5);
	this.rubyLogo.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.rubyLogo).to({scaleX:0.48,scaleY:0.48,alpha:1},14,cjs.Ease.get(1)).to({scaleX:0.45,scaleY:0.45},15).wait(2));

	// caveSparkles
	this.caveSparkles = new lib.caveSparkles();
	this.caveSparkles.setTransform(153.9,35);

	this.timeline.addTween(cjs.Tween.get(this.caveSparkles).wait(31));

	// Cave
	this.rubyInnerCave = new lib.sapphireCave();
	this.rubyInnerCave.setTransform(163.7,72.3,0.656,0.656,0,0,0,249.5,59.1);
	this.rubyInnerCave.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.rubyInnerCave).to({alpha:1},29).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-37,327.3,160.4);


(lib.rubySelect_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// unlockAnim
	this.instance = new lib.unlockAnim();
	this.instance.setTransform(175,79.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(17));

	// rubyLogo
	this.rubyLogo = new lib.rubyLogo();
	this.rubyLogo.setTransform(139.5,27.7,0.45,0.45,0,0,0,251.5,61.5);
	this.rubyLogo.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.rubyLogo).to({scaleX:0.48,scaleY:0.48,alpha:0.871},14,cjs.Ease.get(1)).to({scaleX:0.45,scaleY:0.45,alpha:1},15).wait(2));

	// caveSparkles
	this.caveSparkles = new lib.caveSparkles();
	this.caveSparkles.setTransform(142.9,31);

	this.timeline.addTween(cjs.Tween.get(this.caveSparkles).wait(31));

	// lockFront
	this.instance_1 = new lib.lockFront();
	this.instance_1.setTransform(163.4,93.4,1,1,0,0,0,9.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},14).wait(17));

	// lockUnlocked
	this.instance_2 = new lib.lockUnlocked_1();
	this.instance_2.setTransform(169.5,99.1,1,1,-15,0,0,16,26.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(7).to({alpha:0},8).wait(2));

	// chain
	this.instance_3 = new lib.goldChain_1();
	this.instance_3.setTransform(150.5,83,1,1,0,0,0,122,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({alpha:0},15).wait(2));

	// lockBack
	this.instance_4 = new lib.lockBack();
	this.instance_4.setTransform(169.9,101.9,1,1,0,0,0,16,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},14).wait(17));

	// rubyCave
	this.rubyInnerCave = new lib.rubyCave();
	this.rubyInnerCave.setTransform(163.7,72.3,0.656,0.656,0,0,0,249.5,59.1);
	this.rubyInnerCave.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.rubyInnerCave).to({alpha:1},29).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-41,327.3,165.4);


(lib.glodenSelect_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// unlockAnim
	this.instance = new lib.unlockAnim("synched",0);
	this.instance.setTransform(149,69.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(17));

	// Logo
	this.rubyLogo = new lib.goldenLogo();
	this.rubyLogo.setTransform(165.5,14.7,0.45,0.45,0,0,0,251.5,61.5);
	this.rubyLogo.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.rubyLogo).to({scaleX:0.48,scaleY:0.48,alpha:0.871},14,cjs.Ease.get(1)).to({scaleX:0.45,scaleY:0.45,alpha:1},15).wait(2));

	// caveSparkles
	this.caveSparkles = new lib.caveSparkles();
	this.caveSparkles.setTransform(142.9,31);

	this.timeline.addTween(cjs.Tween.get(this.caveSparkles).wait(31));

	// lockFront
	this.instance_1 = new lib.lockFront();
	this.instance_1.setTransform(133.4,73.4,1,1,0,0,0,9.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},14).wait(17));

	// lockUnlocked
	this.instance_2 = new lib.lockUnlocked_1();
	this.instance_2.setTransform(136.5,90.1,1,1,-15,0,0,16,26.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(7).to({alpha:0},8).wait(2));

	// chain
	this.instance_3 = new lib.goldChain_1();
	this.instance_3.setTransform(138.5,65,1,1,0,0,0,122,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({alpha:0},15).wait(2));

	// lockBack
	this.instance_4 = new lib.lockBack();
	this.instance_4.setTransform(139.9,81.9,1,1,0,0,0,16,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},14).wait(17));

	// Cave
	this.rubyInnerCave = new lib.goldCave();
	this.rubyInnerCave.setTransform(136.7,20.3,0.588,0.588,0,0,180,249.5,59.1);
	this.rubyInnerCave.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.rubyInnerCave).to({alpha:1},29).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-41,294.7,185.3);


(lib.emeraldSelect_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// unlockAnim
	this.instance = new lib.unlockAnim("synched",0);
	this.instance.setTransform(159,88.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(17));

	// lockFront
	this.instance_1 = new lib.lockFront();
	this.instance_1.setTransform(148,104.5,1,1,0,0,0,9.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},14).wait(17));

	// lockUnlocked
	this.instance_2 = new lib.lockUnlocked_1();
	this.instance_2.setTransform(154.5,106,1,1,-15,0,0,16,26.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(7).to({alpha:0},8).wait(2));

	// chain
	this.instance_3 = new lib.emeraldChain_1();
	this.instance_3.setTransform(161.5,90,1,1,0,0,0,122,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({alpha:0},15).wait(2));

	// lockBack
	this.instance_4 = new lib.lockBack();
	this.instance_4.setTransform(154.5,113,1,1,0,0,0,16,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},14).wait(17));

	// rubyLogo
	this.rubyLogo = new lib.emeraldLogo();
	this.rubyLogo.setTransform(139.5,27.7,0.45,0.45,0,0,0,251.5,61.5);
	this.rubyLogo.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.rubyLogo).to({scaleX:0.48,scaleY:0.48,alpha:0.871},14,cjs.Ease.get(1)).to({scaleX:0.45,scaleY:0.45,alpha:1},15,cjs.Ease.get(-1)).wait(2));

	// caveSparkles
	this.caveSparkles = new lib.caveSparkles();
	this.caveSparkles.setTransform(136.9,37);

	this.timeline.addTween(cjs.Tween.get(this.caveSparkles).wait(31));

	// rubyCave
	this.rubyInnerCave = new lib.emeraldCave();
	this.rubyInnerCave.setTransform(163.7,72.3,0.656,0.656,0,0,0,249.5,59.1);
	this.rubyInnerCave.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.rubyInnerCave).to({alpha:1},29).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-35,326,176.1);


(lib.crystalSelect_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// unlockAnim
	this.instance = new lib.unlockAnim("synched",0);
	this.instance.setTransform(137,72.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(17));

	// Logo
	this.rubyLogo = new lib.crystalLogo();
	this.rubyLogo.setTransform(119.5,17.7,0.45,0.45,0,0,0,251.5,61.5);
	this.rubyLogo.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.rubyLogo).to({scaleX:0.48,scaleY:0.48,alpha:0.871},14,cjs.Ease.get(1)).to({scaleX:0.45,scaleY:0.45,alpha:1},15).wait(2));

	// caveSparkles
	this.caveSparkles = new lib.caveSparkles();
	this.caveSparkles.setTransform(110.9,25);

	this.timeline.addTween(cjs.Tween.get(this.caveSparkles).wait(31));

	// lockFront
	this.instance_1 = new lib.lockFront();
	this.instance_1.setTransform(120,73.8,1,1,0,0,0,9.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},14).wait(17));

	// lockUnlocked
	this.instance_2 = new lib.lockUnlocked_1();
	this.instance_2.setTransform(126.5,75.3,1,1,-15,0,0,16,26.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(7).to({alpha:0},8).wait(2));

	// chain
	this.instance_3 = new lib.crystalChain_1();
	this.instance_3.setTransform(116,60.5,1,1,0,0,0,110.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({alpha:0},15).wait(2));

	// lockBack
	this.instance_4 = new lib.lockBack();
	this.instance_4.setTransform(126.5,82.3,1,1,0,0,0,16,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},14).wait(17));

	// Cave
	this.rubyInnerCave = new lib.crystalCave();
	this.rubyInnerCave.setTransform(131.7,13.3,0.551,0.551,0,0,0,249.7,59.4);
	this.rubyInnerCave.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.rubyInnerCave).to({alpha:1},29).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-47,274,164.7);


(lib.amethystSelect_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// unlockAnim
	this.instance = new lib.unlockAnim("synched",0);
	this.instance.setTransform(208,86.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(17));

	// lockFront
	this.instance_1 = new lib.lockFront();
	this.instance_1.setTransform(195.1,94.8,1,1,0,0,0,9.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},14).wait(17));

	// lockUnlocked
	this.instance_2 = new lib.lockUnlocked_1();
	this.instance_2.setTransform(201.6,96.3,1,1,-15,0,0,16,26.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(7).to({alpha:0},8).wait(2));

	// chain
	this.instance_3 = new lib.amethstChain();
	this.instance_3.setTransform(196.5,77,1,1,0,0,0,122,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({alpha:0},15).wait(2));

	// lockBack
	this.instance_4 = new lib.lockBack();
	this.instance_4.setTransform(201.6,103.3,1,1,0,0,0,16,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},14).wait(17));

	// Logo
	this.rubyLogo = new lib.amathystLogo();
	this.rubyLogo.setTransform(190.5,27.7,0.45,0.45,0,0,0,251.5,61.5);
	this.rubyLogo.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.rubyLogo).to({scaleX:0.48,scaleY:0.48,alpha:0.871},14,cjs.Ease.get(1)).to({scaleX:0.45,scaleY:0.45,alpha:1},15).wait(2));

	// caveSparkles
	this.caveSparkles = new lib.caveSparkles();
	this.caveSparkles.setTransform(172.9,38,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.caveSparkles).wait(31));

	// Cave
	this.rubyInnerCave = new lib.amethystCave();
	this.rubyInnerCave.setTransform(178.7,37.4,0.656,0.656,0,0,0,249.5,59.1);
	this.rubyInnerCave.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.rubyInnerCave).to({alpha:1},29).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,-34,328,165);


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


(lib.amethystPromtGemLandscape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.pinkSweep_00000();

	this.instance_1 = new lib.pinkSweep_00002();

	this.instance_2 = new lib.pinkSweep_00004();

	this.instance_3 = new lib.pinkSweep_00006();

	this.instance_4 = new lib.pinkSweep_00008();

	this.instance_5 = new lib.pinkSweep_00010();

	this.instance_6 = new lib.pinkSweep_00012();

	this.instance_7 = new lib.pinkSweep_00014();

	this.instance_8 = new lib.pinkSweep_00016();

	this.instance_9 = new lib.pinkSweep_00018();

	this.instance_10 = new lib.pinkSweep_00020();

	this.instance_11 = new lib.pinkSweep_00022();

	this.instance_12 = new lib.pinkSweep_00024();

	this.instance_13 = new lib.pinkSweep_00026();

	this.instance_14 = new lib.pinkSweep_00028();

	this.instance_15 = new lib.pinkSweep_00029();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},1).wait(1));

	// gem
	this.instance_16 = new lib.pink_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.amethystPromptGem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.pinkSweep_00000();

	this.instance_1 = new lib.pinkSweep_00002();

	this.instance_2 = new lib.pinkSweep_00004();

	this.instance_3 = new lib.pinkSweep_00006();

	this.instance_4 = new lib.pinkSweep_00008();

	this.instance_5 = new lib.pinkSweep_00010();

	this.instance_6 = new lib.pinkSweep_00012();

	this.instance_7 = new lib.pinkSweep_00014();

	this.instance_8 = new lib.pinkSweep_00016();

	this.instance_9 = new lib.pinkSweep_00018();

	this.instance_10 = new lib.pinkSweep_00020();

	this.instance_11 = new lib.pinkSweep_00022();

	this.instance_12 = new lib.pinkSweep_00024();

	this.instance_13 = new lib.pinkSweep_00026();

	this.instance_14 = new lib.pinkSweep_00028();

	this.instance_15 = new lib.pinkSweep_00029();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},1).wait(1));

	// gem
	this.instance_16 = new lib.pink_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,194);


(lib.amethystPrompt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// amethystPromptGem
	this.instance = new lib.amethystPromptGem("single",0);
	this.instance.setTransform(56.4,48.6,0.491,0.491,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1,x:56.5},11,cjs.Ease.get(-1)).to({scaleX:0.49,scaleY:0.49,rotation:1},15,cjs.Ease.get(-0.99)).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:0,x:56.4,mode:"single",startPosition:0},0).wait(34));

	// amethystGem
	this.instance_1 = new lib.amethystPromptGem("single",0);
	this.instance_1.setTransform(166.1,48.6,0.491,0.491,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},11).to({scaleX:0.49,scaleY:0.49,rotation:1},15,cjs.Ease.get(-0.99)).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(33));

	// amethystGem
	this.instance_2 = new lib.amethystPromptGem("single",0);
	this.instance_2.setTransform(275.8,48.6,0.491,0.491,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({mode:"independent"},0).to({regY:99.4,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.9,y:48.7},12,cjs.Ease.get(-1)).to({regY:99.3,scaleX:0.49,scaleY:0.49,rotation:1,y:48.6},15,cjs.Ease.get(-0.99)).wait(1).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.8,mode:"single",startPosition:0},0).wait(31));

	// amethystGem
	this.instance_3 = new lib.amethystPromptGem("single",0);
	this.instance_3.setTransform(275.8,138.7,0.491,0.491,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({mode:"independent"},0).to({regY:99.3,scaleX:0.53,scaleY:0.53,rotation:-1,y:138.6},12,cjs.Ease.get(-1)).to({scaleX:0.49,scaleY:0.49,rotation:1},15,cjs.Ease.get(-0.99)).wait(1).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,y:138.7,mode:"single",startPosition:0},0).wait(29));

	// amethystGem
	this.instance_4 = new lib.amethystPromptGem("single",0);
	this.instance_4.setTransform(166.1,138.7,0.491,0.491,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1,y:138.8},12,cjs.Ease.get(-1)).to({scaleX:0.49,scaleY:0.49,rotation:1},15,cjs.Ease.get(-0.99)).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:0,y:138.7,mode:"single",startPosition:0},0).wait(27));

	// amethystGem
	this.instance_5 = new lib.amethystPromptGem("single",0);
	this.instance_5.setTransform(56.4,138.7,0.491,0.491,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1,x:56.5},12,cjs.Ease.get(-1)).to({scaleX:0.49,scaleY:0.49,rotation:1,y:138.6},15,cjs.Ease.get(-0.99)).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:0,x:56.4,y:138.7,mode:"single",startPosition:0},0).wait(25));

	// amethystGem
	this.instance_6 = new lib.amethystPromptGem("single",0);
	this.instance_6.setTransform(56.4,228.8,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({mode:"independent"},0).to({regY:99.2,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.5},12,cjs.Ease.get(-1)).to({scaleX:0.49,scaleY:0.49,rotation:1},15,cjs.Ease.get(-0.99)).wait(1).to({regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,x:56.4,mode:"single",startPosition:0},0).wait(23));

	// amethystGem
	this.instance_7 = new lib.amethystPromptGem("single",0);
	this.instance_7.setTransform(166.1,228.8,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({mode:"independent"},0).to({regY:99.4,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.4,y:228.9},12,cjs.Ease.get(-1)).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:1,y:228.8},15,cjs.Ease.get(-0.99)).wait(1).to({regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,x:166.1,mode:"single",startPosition:0},0).wait(21));

	// amethystGem
	this.instance_8 = new lib.amethystPromptGem("single",0);
	this.instance_8.setTransform(275.8,228.8,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({mode:"independent"},0).to({regY:99.5,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.9},12,cjs.Ease.get(-1)).to({regY:99.3,scaleX:0.49,scaleY:0.49,rotation:1,y:228.7},15,cjs.Ease.get(-0.99)).wait(1).to({mode:"single",startPosition:0},0).wait(19));

	// amethystGem
	this.instance_9 = new lib.amethystPromptGem("single",0);
	this.instance_9.setTransform(275.8,318.9,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({mode:"independent"},0).to({regY:99.4,scaleX:0.53,scaleY:0.53,rotation:-1},12,cjs.Ease.get(-1)).to({regY:99.3,scaleX:0.49,scaleY:0.49,rotation:1,y:318.8},15,cjs.Ease.get(-0.99)).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:0,y:318.9,mode:"single",startPosition:0},0).wait(17));

	// amethystGem
	this.instance_10 = new lib.amethystPromptGem("single",0);
	this.instance_10.setTransform(166.1,318.9,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({mode:"independent"},0).to({regY:99.2,scaleX:0.53,scaleY:0.53,rotation:-1,y:319},12,cjs.Ease.get(-1)).to({scaleX:0.49,scaleY:0.49,rotation:1,x:166.2},15,cjs.Ease.get(-0.99)).wait(1).to({regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,x:166.1,y:318.9,mode:"single",startPosition:0},0).wait(15));

	// amethystGem
	this.instance_11 = new lib.amethystPromptGem("single",0);
	this.instance_11.setTransform(56.4,318.9,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21).to({mode:"independent"},0).to({regY:99.2,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.5,y:318.8},12,cjs.Ease.get(-1)).to({scaleX:0.49,scaleY:0.49,rotation:1},15,cjs.Ease.get(-0.99)).wait(1).to({regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,x:56.4,y:318.9,mode:"single",startPosition:0},0).wait(13));

	// amethystGem
	this.instance_12 = new lib.amethystPromptGem("single",0);
	this.instance_12.setTransform(56.4,410.5,0.491,0.491,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(23).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1,x:56.5},12,cjs.Ease.get(-1)).to({regY:99.1,scaleX:0.49,scaleY:0.49,rotation:1},15,cjs.Ease.get(-0.99)).wait(1).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.4,mode:"single",startPosition:0},0).wait(11));

	// amethystGem
	this.instance_13 = new lib.amethystPromptGem("single",0);
	this.instance_13.setTransform(166.1,410.5,0.491,0.491,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(25).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},12,cjs.Ease.get(-1)).to({regY:99.1,scaleX:0.49,scaleY:0.49,rotation:1},15,cjs.Ease.get(-0.99)).wait(1).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(9));

	// amethystGem
	this.instance_14 = new lib.amethystPromptGem("single",0);
	this.instance_14.setTransform(275.8,410.5,0.491,0.491,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(27).to({mode:"independent"},0).to({regY:99.4,scaleX:0.53,scaleY:0.53,rotation:-1},12,cjs.Ease.get(-1)).to({regY:99.3,scaleX:0.49,scaleY:0.49,rotation:1},15,cjs.Ease.get(-0.99)).wait(1).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,mode:"single",startPosition:0},0).wait(7));

	// amethystGem
	this.instance_15 = new lib.amethystPromptGem("single",0);
	this.instance_15.setTransform(275.8,508.1,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(29).to({regY:99.2,y:508,mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1,x:275.5,y:508.1},12,cjs.Ease.get(-1)).to({scaleX:0.49,scaleY:0.49,rotation:1},15,cjs.Ease.get(-0.99)).wait(1).to({regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,x:275.8,mode:"single",startPosition:0},0).wait(5));

	// amethystGem
	this.instance_16 = new lib.amethystPromptGem("single",0);
	this.instance_16.setTransform(166.1,508.1,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(31).to({regY:99.2,y:508,mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},12,cjs.Ease.get(-1)).to({scaleX:0.49,scaleY:0.49,rotation:1,x:166},15,cjs.Ease.get(-0.99)).wait(1).to({regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,x:166.1,y:508.1,mode:"single",startPosition:0},0).wait(3));

	// amethystGem
	this.instance_17 = new lib.amethystPromptGem("single",0);
	this.instance_17.setTransform(56.4,508.1,0.491,0.491,0,0,0,105,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(33).to({regY:99.2,y:508,mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1,x:56.5},12,cjs.Ease.get(-1)).to({scaleX:0.49,scaleY:0.49,rotation:1},15,cjs.Ease.get(-0.99)).wait(1).to({regY:99.3,scaleX:0.49,scaleY:0.49,rotation:0,x:56.4,y:508.1,mode:"single",startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.9,-0.1,318.6,554.7);


(lib.amethystLogoAnimPort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(217,130.8,0.54,0.54);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.75,scaleY:0.75,alpha:1},28).to({scaleX:0.71,scaleY:0.71},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.glittery195_00000();
	this.instance_1.setTransform(225,-16.5,1,1,44.9);

	this.instance_2 = new lib.glittery195_00002();
	this.instance_2.setTransform(225,-16.5,1,1,44.9);

	this.instance_3 = new lib.glittery195_00004();
	this.instance_3.setTransform(225,-16.5,1,1,44.9);

	this.instance_4 = new lib.glittery195_00006();
	this.instance_4.setTransform(225,-16.5,1,1,44.9);

	this.instance_5 = new lib.glittery195_00008();
	this.instance_5.setTransform(225,-16.5,1,1,44.9);

	this.instance_6 = new lib.glittery195_00010();
	this.instance_6.setTransform(225,-16.5,1,1,44.9);

	this.instance_7 = new lib.glittery195_00012();
	this.instance_7.setTransform(225,-16.5,1,1,44.9);

	this.instance_8 = new lib.glittery195_00014();
	this.instance_8.setTransform(225,-16.5,1,1,44.9);

	this.instance_9 = new lib.glittery195_00016();
	this.instance_9.setTransform(225,-16.5,1,1,44.9);

	this.instance_10 = new lib.glittery195_00018();
	this.instance_10.setTransform(225,-16.5,1,1,44.9);

	this.instance_11 = new lib.glittery195_00020();
	this.instance_11.setTransform(225,-16.5,1,1,44.9);

	this.instance_12 = new lib.glittery195_00022();
	this.instance_12.setTransform(225,-16.5,1,1,44.9);

	this.instance_13 = new lib.glittery195_00024();
	this.instance_13.setTransform(225,-16.5,1,1,44.9);

	this.instance_14 = new lib.glittery195_00026();
	this.instance_14.setTransform(225,-16.5,1,1,44.9);

	this.instance_15 = new lib.glittery195_00028();
	this.instance_15.setTransform(225,-16.5,1,1,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[]},1).wait(1));

	// Layer 2
	this.instance_16 = new lib.amethystCave();
	this.instance_16.setTransform(312.2,977.6,1.025,1.025,10,0,0,250,101);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({alpha:1},14).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.9,-16.5,540.7,1140.5);


(lib.amethystLogoAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.instance = new lib.amethystLogo();
	this.instance.setTransform(217,89.5,0.8,0.8,0,0,0,217,89.5);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(217,89.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},28).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02,alpha:1},28).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,mode:"synched",startPosition:0},1).wait(1));

	// Layer 3
	this.instance_2 = new lib.glittery195_00000();
	this.instance_2.setTransform(180.8,-72.4,1,1,44.9);

	this.instance_3 = new lib.glittery195_00002();
	this.instance_3.setTransform(180.8,-72.4,1,1,44.9);

	this.instance_4 = new lib.glittery195_00004();
	this.instance_4.setTransform(180.8,-72.4,1,1,44.9);

	this.instance_5 = new lib.glittery195_00006();
	this.instance_5.setTransform(180.8,-72.4,1,1,44.9);

	this.instance_6 = new lib.glittery195_00008();
	this.instance_6.setTransform(180.8,-72.4,1,1,44.9);

	this.instance_7 = new lib.glittery195_00010();
	this.instance_7.setTransform(180.8,-72.4,1,1,44.9);

	this.instance_8 = new lib.glittery195_00012();
	this.instance_8.setTransform(180.8,-72.4,1,1,44.9);

	this.instance_9 = new lib.glittery195_00014();
	this.instance_9.setTransform(180.8,-72.4,1,1,44.9);

	this.instance_10 = new lib.glittery195_00016();
	this.instance_10.setTransform(180.8,-72.4,1,1,44.9);

	this.instance_11 = new lib.glittery195_00018();
	this.instance_11.setTransform(180.8,-72.4,1,1,44.9);

	this.instance_12 = new lib.glittery195_00020();
	this.instance_12.setTransform(180.8,-72.4,1,1,44.9);

	this.instance_13 = new lib.glittery195_00022();
	this.instance_13.setTransform(180.8,-72.4,1,1,44.9);

	this.instance_14 = new lib.glittery195_00024();
	this.instance_14.setTransform(180.8,-72.4,1,1,44.9);

	this.instance_15 = new lib.glittery195_00026();
	this.instance_15.setTransform(180.8,-72.4,1,1,44.9);

	this.instance_16 = new lib.glittery195_00028();
	this.instance_16.setTransform(180.8,-72.4,1,1,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[]},1).wait(1));

	// Layer 2
	this.instance_17 = new lib.amethystCave();
	this.instance_17.setTransform(1019,1178.4,1.741,1.741,0,0,0,250,101);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:1},14).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43,-72.4,1411.3,1426.7);


(lib.amethystKey_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_16 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// unlock frames
	this.instance = new lib.unlockAnim_00000();
	this.instance.setTransform(-142,-131);

	this.instance_1 = new lib.unlockAnim_00001();
	this.instance_1.setTransform(-142,-131);

	this.instance_2 = new lib.unlockAnim_00002();
	this.instance_2.setTransform(-142,-131);

	this.instance_3 = new lib.unlockAnim_00003();
	this.instance_3.setTransform(-142,-131);

	this.instance_4 = new lib.unlockAnim_00004();
	this.instance_4.setTransform(-142,-131);

	this.instance_5 = new lib.unlockAnim_00005();
	this.instance_5.setTransform(-142,-131);

	this.instance_6 = new lib.unlockAnim_00006();
	this.instance_6.setTransform(-142,-131);

	this.instance_7 = new lib.unlockAnim_00007();
	this.instance_7.setTransform(-142,-131);

	this.instance_8 = new lib.unlockAnim_00008();
	this.instance_8.setTransform(-142,-131);

	this.instance_9 = new lib.unlockAnim_00009();
	this.instance_9.setTransform(-142,-131);

	this.instance_10 = new lib.unlockAnim_00010();
	this.instance_10.setTransform(-142,-131);

	this.instance_11 = new lib.unlockAnim_00011();
	this.instance_11.setTransform(-142,-131);

	this.instance_12 = new lib.unlockAnim_00012();
	this.instance_12.setTransform(-142,-131);

	this.instance_13 = new lib.unlockAnim_00013();
	this.instance_13.setTransform(-142,-131);

	this.instance_14 = new lib.unlockAnim_00014();
	this.instance_14.setTransform(-142,-131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(1));

	// miniAmethystKey
	this.instance_15 = new lib.miniAmethystKey();
	this.instance_15.setTransform(0.1,-1.7);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:1.05,scaleY:1.05,rotation:-15,alpha:1},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0},2).wait(1));

	// TRANS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AjWEIIAAoPIGtAAIAAIPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-27.8,43,54.4);


(lib.amethystKey_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// amethystKey.png
	this.instance = new lib.miniAmethystKey();
	this.instance.setTransform(18.2,21.7,1,1,0,0,0,18.1,23.4);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// TRANS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AjWEIIAAoPIGtAAIAAIPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-27.8,43,54.4);


(lib.amethystKey_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// amethystKey_on
	this.amethystKey_on = new lib.amethystKey_on();

	this.timeline.addTween(cjs.Tween.get(this.amethystKey_on).wait(1));

	// amethystKey_off
	this.amethystKey_off = new lib.amethystKey_off();

	this.timeline.addTween(cjs.Tween.get(this.amethystKey_off).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-27.8,43,54.4);


(lib.amethystGem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sparkles
	this.instance = new lib.revealSparkles("synched",0);
	this.instance.setTransform(105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},29).wait(1));

	// gem
	this.instance_1 = new lib.pink_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(21));

	// reveal
	this.instance_2 = new lib.reveal();
	this.instance_2.setTransform(102,91.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({alpha:1},10).wait(11));

	// redReveal
	this.instance_3 = new lib.pinkReveal_1();
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-25.8,250,250);


(lib.amathystWordCountMeter_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// menuCelloff
	this.instance = new lib.menuCelloff();
	this.instance.setTransform(105,23.5,1,1,0,0,0,105,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sapphireCellColour.png
	this.instance_1 = new lib.amythstCellColour();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// menuCellBackground.png
	this.instance_2 = new lib.menuCellBackground();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.amathystWordCountMeter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// amathystWordCountMeter_on
	this.amathystWordCountMeter_on = new lib.amathystWordCountMeter_on();
	this.amathystWordCountMeter_on.setTransform(91,23.5,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get(this.amathystWordCountMeter_on).wait(1));

	// amathystWordCountMeter_off
	this.amathystWordCountMeter_off = new lib.amathystWordCountMeter_off();
	this.amathystWordCountMeter_off.setTransform(91,23.5,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get(this.amathystWordCountMeter_off).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.amathystTransAnimPort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1Pix
	this.instance = new lib._1Pix();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// logo
	this.instance_1 = new lib.amethystLogo();
	this.instance_1.setTransform(341.6,668.2,0.43,0.436);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:83,y:270},14,cjs.Ease.get(1)).wait(22));

	// lightPingAnim
	this.instance_2 = new lib.lightPingAnim("synched",0);
	this.instance_2.setTransform(346.1,198.7,0.615,0.615);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(33));

	// crystal
	this.instance_3 = new lib.pink_1();
	this.instance_3.setTransform(408.1,269.2,0.72,0.72,0,0,0,86.6,97.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regX:86.5,scaleX:0.82,scaleY:0.82,x:408,alpha:1},11).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,528.4,746.2);


(lib.amathystTransAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1Pix
	this.instance = new lib._1Pix();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// logo
	this.instance_1 = new lib.amethystLogo();
	this.instance_1.setTransform(548.8,376.3,0.447,0.436);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:263,y:120},14,cjs.Ease.get(-1)).wait(22));

	// lightPingAnim
	this.instance_2 = new lib.lightPingAnim("synched",0);
	this.instance_2.setTransform(346.1,198.7,0.615,0.615);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(33));

	// crystal
	this.instance_3 = new lib.pink_1();
	this.instance_3.setTransform(408.1,269.2,0.72,0.72,0,0,0,86.6,97.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regX:86.5,scaleX:0.82,scaleY:0.82,x:408,alpha:1},11).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,742.6,454.3);


(lib.cavernKeyPickerSapphire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sapphirePickerKey
	this.instance = new lib.sapphirePickerKey();
	this.instance.setTransform(0,0,0.5,0.5,60);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05,rotation:675,y:-0.1,alpha:1},28,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:0},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.7,-26.1,55.4,52.2);


(lib.cavernKeyPickerGolden = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// goldPickerKey
	this.instance = new lib.goldPickerKey();
	this.instance.setTransform(0.1,0,0.499,0.499,60,0,0,35.1,43.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05,rotation:675,x:0,y:0.1,alpha:1},28,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.6,-26.1,55.3,52.2);


(lib.cavernKeyPickerEmerald = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// emeraldPickerKey
	this.instance = new lib.emeraldPickerKey();
	this.instance.setTransform(0,0,0.5,0.5,60,0,0,35.2,43.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:35.3,scaleX:1.05,scaleY:1.05,rotation:675,y:-0.1,alpha:1},28,cjs.Ease.get(1)).to({regX:35.1,scaleX:1,scaleY:1,y:0.1},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-26.2,55.9,52.7);


(lib.cavernKeyPickerCrystal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// crystalPickerKey
	this.instance = new lib.crystalPickerKey();
	this.instance.setTransform(0.1,0.1,0.5,0.5,60,0,0,35.3,43.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05,rotation:675,x:0,y:0,alpha:1},28,cjs.Ease.get(1)).wait(1).to({regX:35.1,regY:43.6,scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.6,-26.2,55.4,52.3);


(lib.cavernKeyPickerAmathyst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// goldPickerKey
	this.instance = new lib.amethystPickerKey();
	this.instance.setTransform(0,-0.1,0.499,0.499,60,0,0,35.1,43.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:675,y:0.1,alpha:1},28,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.6,-26.1,55.3,52.2);


(lib.cavernKeyOnPicker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cavernKeyPickerCrystal
	this.cavernKeyPickerCrystal = new lib.cavernKeyPickerCrystal();
	this.cavernKeyPickerCrystal.setTransform(0,14.5);

	this.timeline.addTween(cjs.Tween.get(this.cavernKeyPickerCrystal).wait(1));

	// cavernKeyPickerGolden
	this.cavernKeyPickerGolden = new lib.cavernKeyPickerGolden();
	this.cavernKeyPickerGolden.setTransform(0,14.4);

	this.timeline.addTween(cjs.Tween.get(this.cavernKeyPickerGolden).wait(1));

	// cavernKeyPickerEmerald
	this.cavernKeyPickerEmerald = new lib.cavernKeyPickerEmerald();
	this.cavernKeyPickerEmerald.setTransform(-0.2,14);

	this.timeline.addTween(cjs.Tween.get(this.cavernKeyPickerEmerald).wait(1));

	// cavernKeyPickerSapphire
	this.cavernKeyPickerSapphire = new lib.cavernKeyPickerSapphire();
	this.cavernKeyPickerSapphire.setTransform(1.2,14.5);

	this.timeline.addTween(cjs.Tween.get(this.cavernKeyPickerSapphire).wait(1));

	// cavernKeyPickerAmathyst
	this.cavernKeyPickerAmathyst = new lib.cavernKeyPickerAmathyst();
	this.cavernKeyPickerAmathyst.setTransform(0,14.5);

	this.timeline.addTween(cjs.Tween.get(this.cavernKeyPickerAmathyst).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,-12.2,57.1,52.7);


(lib.swooshColours = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rubySwoosh
	this.rubyColour = new lib.rubySwoosh();
	this.rubyColour.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 100, -22))];
	this.rubyColour.cache(-2,-2,964,461);

	this.timeline.addTween(cjs.Tween.get(this.rubyColour).wait(1));

	// sapphireColour
	this.sapphireColour = new lib.sapphireSwoosh();
	this.sapphireColour.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 100, 180))];
	this.sapphireColour.cache(-2,-2,964,461);

	this.timeline.addTween(cjs.Tween.get(this.sapphireColour).wait(1));

	// emeraldColour
	this.emeraldColour = new lib.sapphireSwoosh();
	this.emeraldColour.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 100, 100))];
	this.emeraldColour.cache(-2,-2,964,461);

	this.timeline.addTween(cjs.Tween.get(this.emeraldColour).wait(1));

	// crystalSwoosh
	this.crystalColour = new lib.crystalSwoosh();
	this.crystalColour.setTransform(480,258,1,1,0,0,0,480,258);

	this.timeline.addTween(cjs.Tween.get(this.crystalColour).wait(1));

	// goldenSwoosh
	this.goldenColour = new lib.swoosh_1();
	this.goldenColour.setTransform(480,228.5,1,1,0,0,0,480,228.5);
	this.goldenColour.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(10, 0, 100, 13))];
	this.goldenColour.cache(-2,-2,964,461);

	this.timeline.addTween(cjs.Tween.get(this.goldenColour).wait(1));

	// amethystSwoosh
	this.amethystColour = new lib.swoosh_1();
	this.amethystColour.setTransform(480,228.5,1,1,0,0,0,480,228.5);
	this.amethystColour.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 100, -65))];
	this.amethystColour.cache(-2,-2,964,461);

	this.timeline.addTween(cjs.Tween.get(this.amethystColour).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,964,520);


(lib.sapphireNew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sapphirePromptGemLandscape
	this.instance = new lib.sapphirePromptGemLandscape("single",0);
	this.instance.setTransform(52.1,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(35));

	// sapphirePromptGemLandscape
	this.instance_1 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_1.setTransform(153.1,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:101.1,scaleX:0.51,scaleY:0.51,rotation:1,y:50.1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,y:50,mode:"single",startPosition:0},0).wait(33));

	// sapphirePromptGemLandscape
	this.instance_2 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_2.setTransform(246.1,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(31));

	// sapphirePromptGemLandscape
	this.instance_3 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_3.setTransform(345.1,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({mode:"independent"},0).to({regX:100.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:101.1,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(29));

	// sapphirePromptGemLandscape
	this.instance_4 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_4.setTransform(439.1,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({scaleX:0.51,scaleY:0.51,rotation:1,y:50.1},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,y:50,mode:"single",startPosition:0},0).wait(27));

	// sapphirePromptGemLandscape
	this.instance_5 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_5.setTransform(539.1,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1,y:50.1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,y:50,mode:"single",startPosition:0},0).wait(25));

	// sapphirePromptGemLandscape
	this.instance_6 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_6.setTransform(539.1,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.8,scaleX:0.51,scaleY:0.51,rotation:1,y:142.1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,y:142,mode:"single",startPosition:0},0).wait(23));

	// sapphirePromptGemLandscape
	this.instance_7 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_7.setTransform(439.1,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1,y:142.1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,y:142,mode:"single",startPosition:0},0).wait(21));

	// sapphirePromptGemLandscape
	this.instance_8 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_8.setTransform(345.1,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({mode:"independent"},0).to({regY:97.2,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.8,regY:97,scaleX:0.51,scaleY:0.51,rotation:1,x:345},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,x:345.1,mode:"single",startPosition:0},0).wait(19));

	// sapphirePromptGemLandscape
	this.instance_9 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_9.setTransform(246.1,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.9,regY:97.3,scaleX:0.51,scaleY:0.51,rotation:1,y:142.2},14,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.52,scaleY:0.52,rotation:0,y:142,mode:"single",startPosition:0},0).wait(17));

	// sapphirePromptGemLandscape
	this.instance_10 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_10.setTransform(153.1,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21).to({mode:"independent"},0).to({regX:101.2,regY:97.2,scaleX:0.53,scaleY:0.53,rotation:-1,x:153.2},13,cjs.Ease.get(-1)).to({regX:101,regY:97,scaleX:0.51,scaleY:0.51,rotation:1,x:153.1,y:142.1},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,y:142,mode:"single",startPosition:0},0).wait(15));

	// sapphirePromptGemLandscape
	this.instance_11 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_11.setTransform(52.1,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({mode:"independent"},0).to({regX:101.3,scaleX:0.53,scaleY:0.53,rotation:-1,x:52.2},13,cjs.Ease.get(-1)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1,x:52.1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(13));

	// sapphirePromptGemLandscape
	this.instance_12 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_12.setTransform(52.1,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25).to({mode:"independent"},0).to({regX:101.3,scaleX:0.53,scaleY:0.53,rotation:-1,x:52.2},13,cjs.Ease.get(-1)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1,x:52.1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(11));

	// sapphirePromptGemLandscape
	this.instance_13 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_13.setTransform(153.1,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(27).to({mode:"independent"},0).to({regX:101.2,regY:97.2,scaleX:0.53,scaleY:0.53,rotation:-1,x:153.2},13,cjs.Ease.get(-1)).to({regX:101,regY:97,scaleX:0.51,scaleY:0.51,rotation:1,x:153.1,y:242.1},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,y:242,mode:"single",startPosition:0},0).wait(9));

	// sapphirePromptGemLandscape
	this.instance_14 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_14.setTransform(246.1,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.9,regY:97.3,scaleX:0.51,scaleY:0.51,rotation:1,y:242.2},14,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.52,scaleY:0.52,rotation:0,y:242,mode:"single",startPosition:0},0).wait(7));

	// sapphirePromptGemLandscape
	this.instance_15 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_15.setTransform(345.1,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(31).to({mode:"independent"},0).to({regY:97.2,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.8,regY:97,scaleX:0.51,scaleY:0.51,rotation:1,x:345},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,x:345.1,mode:"single",startPosition:0},0).wait(5));

	// sapphirePromptGemLandscape
	this.instance_16 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_16.setTransform(439.1,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(33).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1,y:242.1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,y:242,mode:"single",startPosition:0},0).wait(3));

	// sapphirePromptGemLandscape
	this.instance_17 = new lib.sapphirePromptGemLandscape("single",0);
	this.instance_17.setTransform(539.1,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(35).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.8,scaleX:0.51,scaleY:0.51,rotation:1,y:242.1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,y:242,mode:"single",startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,591.1,292);


(lib.rubyNew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rubyPromptGemLandscape
	this.instance = new lib.rubyPromptGemLandscape("single",0);
	this.instance.setTransform(52.1,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(35));

	// rubyPromptGemLandscape
	this.instance_1 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_1.setTransform(153.1,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(33));

	// rubyPromptGemLandscape
	this.instance_2 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_2.setTransform(246.1,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(31));

	// rubyPromptGemLandscape
	this.instance_3 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_3.setTransform(345.1,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({mode:"independent"},0).to({regX:100.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:101,regY:97.2,scaleX:0.51,scaleY:0.51,rotation:1,y:50.1},14,cjs.Ease.get(-1)).wait(1).to({regY:97,scaleX:0.52,scaleY:0.52,rotation:0,y:50,mode:"single",startPosition:0},0).wait(29));

	// rubyPromptGemLandscape
	this.instance_4 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_4.setTransform(439.1,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(27));

	// rubyPromptGemLandscape
	this.instance_5 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_5.setTransform(539.1,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({mode:"independent"},0).to({regX:100.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(25));

	// rubyPromptGemLandscape
	this.instance_6 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_6.setTransform(539.1,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.8,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(23));

	// rubyPromptGemLandscape
	this.instance_7 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_7.setTransform(439.1,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(21));

	// rubyPromptGemLandscape
	this.instance_8 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_8.setTransform(345.1,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({mode:"independent"},0).to({regY:97.2,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1,y:142.1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.52,scaleY:0.52,rotation:0,y:142,mode:"single",startPosition:0},0).wait(19));

	// rubyPromptGemLandscape
	this.instance_9 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_9.setTransform(246.1,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(17));

	// rubyPromptGemLandscape
	this.instance_10 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_10.setTransform(153.1,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21).to({mode:"independent"},0).to({regX:101.1,regY:97.2,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.9,regY:97,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(15));

	// rubyPromptGemLandscape
	this.instance_11 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_11.setTransform(52.1,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(13));

	// rubyPromptGemLandscape
	this.instance_12 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_12.setTransform(52.1,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(11));

	// rubyPromptGemLandscape
	this.instance_13 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_13.setTransform(153.1,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(27).to({mode:"independent"},0).to({regX:101.1,regY:97.2,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.9,regY:97,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(9));

	// rubyPromptGemLandscape
	this.instance_14 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_14.setTransform(246.1,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(7));

	// rubyPromptGemLandscape
	this.instance_15 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_15.setTransform(345.1,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(31).to({mode:"independent"},0).to({regY:97.2,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1,y:242.1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.52,scaleY:0.52,rotation:0,y:242,mode:"single",startPosition:0},0).wait(5));

	// rubyPromptGemLandscape
	this.instance_16 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_16.setTransform(439.1,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(33).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(3));

	// rubyPromptGemLandscape
	this.instance_17 = new lib.rubyPromptGemLandscape("single",0);
	this.instance_17.setTransform(539.1,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(35).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.8,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,591.1,292);


(lib.pinknew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// amethystPromtGemLandscape
	this.instance = new lib.amethystPromtGemLandscape("single",0);
	this.instance.setTransform(52,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1,x:53.7,y:51.6},12,cjs.Ease.get(-1)).to({scaleX:0.51,scaleY:0.51,rotation:1,x:51.6,y:49.5},15,cjs.Ease.get(-1)).wait(1).to({regX:52.5,regY:49.5,scaleX:0.52,scaleY:0.52,rotation:0,x:27.1,y:25.5,mode:"single",startPosition:0},0).wait(35));

	// amethystPromtGemLandscape
	this.instance_1 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_1.setTransform(153,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({mode:"independent"},0).to({regX:101.3,scaleX:0.53,scaleY:0.53,rotation:-1,x:154.9,y:51.6},12,cjs.Ease.get(-1)).to({regX:101,regY:97.2,scaleX:0.51,scaleY:0.51,rotation:1,x:152.6,y:49.6},15,cjs.Ease.get(-1)).wait(1).to({regX:52.5,regY:49.5,scaleX:0.52,scaleY:0.52,rotation:0,x:128.1,y:25.5,mode:"single",startPosition:0},0).wait(33));

	// amethystPromtGemLandscape
	this.instance_2 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_2.setTransform(246,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({mode:"independent"},0).to({regX:101.2,scaleX:0.53,scaleY:0.53,rotation:-1,x:247.9,y:51.6},12,cjs.Ease.get(-1)).to({regX:100.8,scaleX:0.51,scaleY:0.51,rotation:1,x:245.5,y:49.5},15,cjs.Ease.get(-1)).wait(1).to({regX:52.5,regY:49.5,scaleX:0.52,scaleY:0.52,rotation:0,x:221.1,y:25.5,mode:"single",startPosition:0},0).wait(31));

	// amethystPromtGemLandscape
	this.instance_3 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_3.setTransform(345,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:346.8,y:51.6},12,cjs.Ease.get(-1)).to({regX:101,scaleX:0.51,scaleY:0.51,rotation:1,x:344.5,y:49.6},15,cjs.Ease.get(-1)).wait(1).to({regX:52.5,regY:49.5,scaleX:0.52,scaleY:0.52,rotation:0,x:320.1,y:25.5,mode:"single",startPosition:0},0).wait(29));

	// amethystPromtGemLandscape
	this.instance_4 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_4.setTransform(439,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({mode:"independent"},0).to({regX:101.2,scaleX:0.53,scaleY:0.53,rotation:-1,x:440.8,y:51.6},12,cjs.Ease.get(-1)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1,x:439,y:50},15,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(27));

	// amethystPromtGemLandscape
	this.instance_5 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_5.setTransform(539,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({mode:"independent"},0).to({regX:101.2,scaleX:0.53,scaleY:0.53,rotation:-1,x:540.8,y:51.6},12,cjs.Ease.get(-1)).to({regX:100.8,scaleX:0.51,scaleY:0.51,rotation:1,x:539,y:50},15,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(25));

	// amethystPromtGemLandscape
	this.instance_6 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_6.setTransform(539,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:540.8,y:143.6},12,cjs.Ease.get(-1)).to({regX:100.7,scaleX:0.51,scaleY:0.51,rotation:1,x:539,y:142},15,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(13));

	// amethystPromtGemLandscape
	this.instance_7 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_7.setTransform(439,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:440.8,y:143.6},12,cjs.Ease.get(-1)).to({regX:100.8,scaleX:0.51,scaleY:0.51,rotation:1,x:439,y:142},15,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(15));

	// amethystPromtGemLandscape
	this.instance_8 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_8.setTransform(345,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({mode:"independent"},0).to({regX:100.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:346.6,y:143.6},12,cjs.Ease.get(-1)).to({regX:100.7,scaleX:0.51,scaleY:0.51,rotation:1,x:344.9,y:142},15,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,x:345,mode:"single",startPosition:0},0).wait(17));

	// amethystPromtGemLandscape
	this.instance_9 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_9.setTransform(246,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({mode:"independent"},0).to({regX:101.1,regY:97.2,scaleX:0.53,scaleY:0.53,rotation:-1,x:247.8,y:143.6},12,cjs.Ease.get(-1)).to({regX:100.8,regY:97.3,scaleX:0.51,scaleY:0.51,rotation:1,x:246,y:142.1},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.52,scaleY:0.52,rotation:0,y:142,mode:"single",startPosition:0},0).wait(19));

	// amethystPromtGemLandscape
	this.instance_10 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_10.setTransform(153,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:154.8,y:143.6},12,cjs.Ease.get(-1)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1,x:153,y:142},15,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(21));

	// amethystPromtGemLandscape
	this.instance_11 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_11.setTransform(52,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({mode:"independent"},0).to({regY:96.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:53.7,y:143.5},12,cjs.Ease.get(-1)).to({regX:100.9,regY:97,scaleX:0.51,scaleY:0.51,rotation:1,x:52,y:142},15,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(23));

	// amethystPromtGemLandscape
	this.instance_12 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_12.setTransform(539,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(35).to({mode:"independent"},0).to({regX:101.2,scaleX:0.53,scaleY:0.53,rotation:-1,x:540.8,y:243.6},12,cjs.Ease.get(-1)).to({regX:100.7,scaleX:0.51,scaleY:0.51,rotation:1,x:539,y:242},15,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(1));

	// amethystPromtGemLandscape
	this.instance_13 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_13.setTransform(439,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(33).to({mode:"independent"},0).to({regX:101.2,scaleX:0.53,scaleY:0.53,rotation:-1,x:440.8,y:243.6},12,cjs.Ease.get(-1)).to({regX:100.8,scaleX:0.51,scaleY:0.51,rotation:1,x:439,y:242},15,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(3));

	// amethystPromtGemLandscape
	this.instance_14 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_14.setTransform(345,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(31).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:346.8,y:243.6},12,cjs.Ease.get(-1)).to({regX:100.7,scaleX:0.51,scaleY:0.51,rotation:1,x:344.9,y:242},15,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,x:345,mode:"single",startPosition:0},0).wait(5));

	// amethystPromtGemLandscape
	this.instance_15 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_15.setTransform(246,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(29).to({mode:"independent"},0).to({regX:101.2,scaleX:0.53,scaleY:0.53,rotation:-1,x:247.9,y:243.6},12,cjs.Ease.get(-1)).to({regX:100.8,regY:97.3,scaleX:0.51,scaleY:0.51,rotation:1,x:246,y:242.1},15,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.52,scaleY:0.52,rotation:0,y:242,mode:"single",startPosition:0},0).wait(7));

	// amethystPromtGemLandscape
	this.instance_16 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_16.setTransform(153,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(27).to({mode:"independent"},0).to({regX:101.3,scaleX:0.53,scaleY:0.53,rotation:-1,x:154.9,y:243.6},12,cjs.Ease.get(-1)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1,x:153,y:242},15,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(9));

	// amethystPromtGemLandscape
	this.instance_17 = new lib.amethystPromtGemLandscape("single",0);
	this.instance_17.setTransform(52,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(25).to({mode:"independent"},0).to({regX:101.1,regY:96.8,scaleX:0.53,scaleY:0.53,rotation:-1,x:53.8,y:243.5},12,cjs.Ease.get(-1)).to({regX:100.9,regY:97,scaleX:0.51,scaleY:0.51,rotation:1,x:52,y:242},15,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,591.1,291.9);


(lib.goldNew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// goldenGem
	this.instance = new lib.goldenPromptGemLandscape("single",0);
	this.instance.setTransform(52,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(34));

	// goldenGem
	this.instance_1 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_1.setTransform(153,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({mode:"independent"},0).to({regX:100.9,scaleX:0.53,scaleY:0.53,rotation:-1,y:49.9},13,cjs.Ease.get(-1)).to({regX:101,scaleX:0.51,scaleY:0.51,rotation:1,y:50},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(33));

	// goldenGem
	this.instance_2 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_2.setTransform(246,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(31));

	// goldenGem
	this.instance_3 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_3.setTransform(345,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1,y:49.9},13,cjs.Ease.get(-1)).to({scaleX:0.51,scaleY:0.51,rotation:1,y:50},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(29));

	// goldenGem
	this.instance_4 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_4.setTransform(439,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({mode:"independent"},0).to({regX:101.1,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(27));

	// goldenGem
	this.instance_5 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_5.setTransform(539,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.8,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(25));

	// goldenGem
	this.instance_6 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_6.setTransform(539,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({mode:"independent"},0).to({regY:96.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.7,regY:97,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(23));

	// goldenGem
	this.instance_7 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_7.setTransform(439,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({mode:"independent"},0).to({regX:101.1,regY:96.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.8,regY:97,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(21));

	// goldenGem
	this.instance_8 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_8.setTransform(345,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.7,scaleX:0.51,scaleY:0.51,rotation:1,x:344.9},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,x:345,mode:"single",startPosition:0},0).wait(19));

	// goldenGem
	this.instance_9 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_9.setTransform(246,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({mode:"independent"},0).to({regY:96.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.8,regY:97.3,scaleX:0.51,scaleY:0.51,rotation:1,y:142.1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.52,scaleY:0.52,rotation:0,y:142,mode:"single",startPosition:0},0).wait(17));

	// goldenGem
	this.instance_10 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_10.setTransform(153,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({mode:"independent"},0).to({regX:100.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(15));

	// goldenGem
	this.instance_11 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_11.setTransform(52,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(22).to({mode:"independent"},0).to({regY:96.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.9,regY:97,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(13));

	// goldenGem
	this.instance_12 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_12.setTransform(52,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({mode:"independent"},0).to({regY:96.8,scaleX:0.53,scaleY:0.53,rotation:-1,y:241.9},13,cjs.Ease.get(-1)).to({regX:100.9,regY:97,scaleX:0.51,scaleY:0.51,rotation:1,y:242},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(11));

	// goldenGem
	this.instance_13 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_13.setTransform(153,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(26).to({mode:"independent"},0).to({regX:100.9,scaleX:0.53,scaleY:0.53,rotation:-1,y:241.9},13,cjs.Ease.get(-1)).to({scaleX:0.51,scaleY:0.51,rotation:1,y:242},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(9));

	// goldenGem
	this.instance_14 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_14.setTransform(246,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(28).to({mode:"independent"},0).to({regY:96.8,scaleX:0.53,scaleY:0.53,rotation:-1,y:241.9},13,cjs.Ease.get(-1)).to({regX:100.8,regY:97.3,scaleX:0.51,scaleY:0.51,rotation:1,y:242.1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.52,scaleY:0.52,rotation:0,y:242,mode:"single",startPosition:0},0).wait(7));

	// goldenGem
	this.instance_15 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_15.setTransform(345,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(30).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1,y:241.9},13,cjs.Ease.get(-1)).to({regX:100.7,scaleX:0.51,scaleY:0.51,rotation:1,x:344.9,y:242},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,x:345,mode:"single",startPosition:0},0).wait(5));

	// goldenGem
	this.instance_16 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_16.setTransform(439,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(32).to({mode:"independent"},0).to({regX:101.1,regY:96.8,scaleX:0.53,scaleY:0.53,rotation:-1,y:241.9},13,cjs.Ease.get(-1)).to({regX:100.8,regY:97,scaleX:0.51,scaleY:0.51,rotation:1,y:242},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(3));

	// goldenGem
	this.instance_17 = new lib.goldenPromptGemLandscape("single",0);
	this.instance_17.setTransform(539,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(34).to({mode:"independent"},0).to({regY:96.8,scaleX:0.53,scaleY:0.53,rotation:-1,y:241.9},13,cjs.Ease.get(-1)).to({regX:100.7,regY:97,scaleX:0.51,scaleY:0.51,rotation:1,y:242},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,591.1,291.9);


(lib.emeraldNew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// emeraldGem
	this.instance = new lib.emeraldPromptGemLandscape("single",0);
	this.instance.setTransform(52,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(35));

	// emeraldGem
	this.instance_1 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_1.setTransform(153,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({mode:"independent"},0).to({regX:100.9,regY:96.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:101,regY:97,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(33));

	// emeraldGem
	this.instance_2 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_2.setTransform(246,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({mode:"independent"},0).to({regX:100.9,regY:96.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regY:97,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(31));

	// emeraldGem
	this.instance_3 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_3.setTransform(345,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({mode:"independent"},0).to({regY:96.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regY:97,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(29));

	// emeraldGem
	this.instance_4 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_4.setTransform(439,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(27));

	// emeraldGem
	this.instance_5 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_5.setTransform(539,50,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({mode:"independent"},0).to({regX:100.9,regY:96.8,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.8,regY:97,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(25));

	// emeraldGem
	this.instance_6 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_6.setTransform(52,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({mode:"independent"},0).to({regX:100.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(23));

	// emeraldGem
	this.instance_7 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_7.setTransform(153,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({mode:"independent"},0).to({regX:100.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(21));

	// emeraldGem
	this.instance_8 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_8.setTransform(246,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.8,regY:97.3,scaleX:0.51,scaleY:0.51,rotation:1,y:142.1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.52,scaleY:0.52,rotation:0,y:142,mode:"single",startPosition:0},0).wait(19));

	// emeraldGem
	this.instance_9 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_9.setTransform(345,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({mode:"independent"},0).to({regY:96.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.7,regY:97,scaleX:0.51,scaleY:0.51,rotation:1,x:344.9},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,x:345,mode:"single",startPosition:0},0).wait(17));

	// emeraldGem
	this.instance_10 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_10.setTransform(439,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1,y:141.9},13,cjs.Ease.get(-0.99)).to({regX:100.8,scaleX:0.51,scaleY:0.51,rotation:1,y:142},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(15));

	// emeraldGem
	this.instance_11 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_11.setTransform(539,142,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({mode:"independent"},0).to({regY:96.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.7,regY:97,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(13));

	// emeraldGem
	this.instance_12 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_12.setTransform(52,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.9,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(11));

	// emeraldGem
	this.instance_13 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_13.setTransform(153,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(27).to({mode:"independent"},0).to({regX:100.9,regY:96.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regY:97,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(9));

	// emeraldGem
	this.instance_14 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_14.setTransform(246,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({mode:"independent"},0).to({regX:100.9,regY:96.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.8,regY:97.3,scaleX:0.51,scaleY:0.51,rotation:1,y:242.1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,regY:97,scaleX:0.52,scaleY:0.52,rotation:0,y:242,mode:"single",startPosition:0},0).wait(7));

	// emeraldGem
	this.instance_15 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_15.setTransform(345,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(31).to({mode:"independent"},0).to({regY:96.9,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.7,regY:97,scaleX:0.51,scaleY:0.51,rotation:1,x:344.9},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,x:345,mode:"single",startPosition:0},0).wait(5));

	// emeraldGem
	this.instance_16 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_16.setTransform(439,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(33).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.8,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(3));

	// emeraldGem
	this.instance_17 = new lib.emeraldPromptGemLandscape("single",0);
	this.instance_17.setTransform(539,242,0.515,0.515,0,0,0,101,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(35).to({mode:"independent"},0).to({regX:100.9,regY:96.8,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-0.99)).to({regX:100.7,regY:97,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:101,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,591.1,291.9);


(lib.crystalNew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// crystalGem
	this.instance = new lib.crystalPromptGemLandscape("single",0);
	this.instance.setTransform(50.6,49.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.1,regY:97.8,scaleX:0.51,scaleY:0.51,rotation:1,y:49.4},14,cjs.Ease.get(-1)).wait(1).to({regX:100,regY:97.5,scaleX:0.52,scaleY:0.52,rotation:0,y:49.3,mode:"single",startPosition:0},0).wait(35));

	// crystalGem
	this.instance_1 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_1.setTransform(151.6,49.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.1,regY:97.6,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:100,regY:97.5,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(33));

	// crystalGem
	this.instance_2 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_2.setTransform(244.6,49.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({mode:"independent"},0).to({regY:97.4,scaleX:0.53,scaleY:0.53,rotation:-1,y:49.2},13,cjs.Ease.get(-1)).to({regX:100.1,regY:97.7,scaleX:0.51,scaleY:0.51,rotation:1,y:49.4},14,cjs.Ease.get(-1)).wait(1).to({regX:100,regY:97.5,scaleX:0.52,scaleY:0.52,rotation:0,y:49.3,mode:"single",startPosition:0},0).wait(31));

	// crystalGem
	this.instance_3 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_3.setTransform(343.6,49.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({mode:"independent"},0).to({regY:97.4,scaleX:0.53,scaleY:0.53,rotation:-1,y:49.2},13,cjs.Ease.get(-1)).to({regX:100.1,regY:97.6,scaleX:0.51,scaleY:0.51,rotation:1,y:49.3},14,cjs.Ease.get(-1)).wait(1).to({regX:100,regY:97.5,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(29));

	// crystalGem
	this.instance_4 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_4.setTransform(437.6,49.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({mode:"independent"},0).to({regY:97.4,scaleX:0.53,scaleY:0.53,rotation:-1,y:49.2},13,cjs.Ease.get(-1)).to({regX:100.1,regY:97.6,scaleX:0.51,scaleY:0.51,rotation:1,y:49.3},14,cjs.Ease.get(-1)).wait(1).to({regX:100,regY:97.5,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(27));

	// crystalGem
	this.instance_5 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_5.setTransform(537.6,49.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regY:97.6,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regY:97.5,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(25));

	// crystalGem
	this.instance_6 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_6.setTransform(537.6,141.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({mode:"independent"},0).to({regY:97.4,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regY:97.5,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(23));

	// crystalGem
	this.instance_7 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_7.setTransform(437.6,141.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({mode:"independent"},0).to({regY:97.3,scaleX:0.53,scaleY:0.53,rotation:-1,y:141.2},13,cjs.Ease.get(-1)).to({regX:100.1,regY:97.5,scaleX:0.51,scaleY:0.51,rotation:1,y:141.3},14,cjs.Ease.get(-1)).wait(1).to({regX:100,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(21));

	// crystalGem
	this.instance_8 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_8.setTransform(343.6,141.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({mode:"independent"},0).to({regY:97.3,scaleX:0.53,scaleY:0.53,rotation:-1,y:141.2},13,cjs.Ease.get(-1)).to({regX:100.1,regY:97.5,scaleX:0.51,scaleY:0.51,rotation:1,y:141.3},14,cjs.Ease.get(-1)).wait(1).to({regX:100,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(19));

	// crystalGem
	this.instance_9 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_9.setTransform(244.6,141.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({mode:"independent"},0).to({regY:97.4,scaleX:0.53,scaleY:0.53,rotation:-1,y:141.2},13,cjs.Ease.get(-1)).to({regX:100.1,regY:97.6,scaleX:0.51,scaleY:0.51,rotation:1,y:141.4},14,cjs.Ease.get(-1)).wait(1).to({regX:100,regY:97.5,scaleX:0.52,scaleY:0.52,rotation:0,y:141.3,mode:"single",startPosition:0},0).wait(17));

	// crystalGem
	this.instance_10 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_10.setTransform(151.6,141.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21).to({mode:"independent"},0).to({regY:97.4,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.1,regY:97.5,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:100,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(15));

	// crystalGem
	this.instance_11 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_11.setTransform(50.6,141.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({mode:"independent"},0).to({regY:97.4,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.1,regY:97.7,scaleX:0.51,scaleY:0.51,rotation:1,y:141.4},14,cjs.Ease.get(-1)).wait(1).to({regX:100,regY:97.5,scaleX:0.52,scaleY:0.52,rotation:0,y:141.3,mode:"single",startPosition:0},0).wait(13));

	// crystalGem
	this.instance_12 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_12.setTransform(50.6,241.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25).to({mode:"independent"},0).to({regX:99.8,scaleX:0.53,scaleY:0.53,rotation:-1,x:50.5},13,cjs.Ease.get(-1)).to({regX:100.1,regY:97.7,scaleX:0.51,scaleY:0.51,rotation:1,x:50.6,y:241.4},14,cjs.Ease.get(-1)).wait(1).to({regX:100,regY:97.5,scaleX:0.52,scaleY:0.52,rotation:0,y:241.3,mode:"single",startPosition:0},0).wait(11));

	// crystalGem
	this.instance_13 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_13.setTransform(151.6,241.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(27).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.1,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:100,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(9));

	// crystalGem
	this.instance_14 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_14.setTransform(244.6,241.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({mode:"independent"},0).to({regY:97.6,scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.1,scaleX:0.51,scaleY:0.51,rotation:1,y:241.4},14,cjs.Ease.get(-1)).wait(1).to({regX:100,regY:97.5,scaleX:0.52,scaleY:0.52,rotation:0,y:241.3,mode:"single",startPosition:0},0).wait(7));

	// crystalGem
	this.instance_15 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_15.setTransform(343.6,241.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(31).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.1,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:100,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(5));

	// crystalGem
	this.instance_16 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_16.setTransform(437.6,241.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(33).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({regX:100.1,scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({regX:100,scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(3));

	// crystalGem
	this.instance_17 = new lib.crystalPromptGemLandscape("single",0);
	this.instance_17.setTransform(537.6,241.3,0.515,0.515,0,0,0,100,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(35).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1},13,cjs.Ease.get(-1)).to({scaleX:0.51,scaleY:0.51,rotation:1},14,cjs.Ease.get(-1)).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:0,mode:"single",startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.3,0.6,575.6,289.3);


(lib.cavernLogosLandscape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1Pix
	this.instance = new lib._1Pix();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sapphireLogoAnim
	this.sapphireLogoAnim = new lib.sapphireLogoAnim();
	this.sapphireLogoAnim.setTransform(12.5,56.9,0.742,0.742);

	this.timeline.addTween(cjs.Tween.get(this.sapphireLogoAnim).wait(1));

	// rubyLogAnim
	this.rubyLogoAnim = new lib.rubyLogAnim();
	this.rubyLogoAnim.setTransform(149.5,95,0.726,0.726,0,0,0,190.2,40.3);

	this.timeline.addTween(cjs.Tween.get(this.rubyLogoAnim).wait(1));

	// goldenlogoAnim
	this.goldenLogoAnim = new lib.goldenlogoAnim();
	this.goldenLogoAnim.setTransform(60,44,0.468,0.468);

	this.timeline.addTween(cjs.Tween.get(this.goldenLogoAnim).wait(1));

	// emeraldLogoAnim
	this.emeraldLogoAnim = new lib.emeraldLogoAnim();
	this.emeraldLogoAnim.setTransform(141.5,91.1,0.45,0.45,0,0,0,188.1,77.3);

	this.timeline.addTween(cjs.Tween.get(this.emeraldLogoAnim).wait(1));

	// crystalLogoAnim
	this.crystalLogoAnim = new lib.crystalLogoAnim();
	this.crystalLogoAnim.setTransform(143.1,90.3,0.513,0.513,0,0,0,187.8,64.5);

	this.timeline.addTween(cjs.Tween.get(this.crystalLogoAnim).wait(1));

	// amethystLogoAnim
	this.amethystLogoAnim = new lib.amethystLogoAnim();
	this.amethystLogoAnim.setTransform(53.6,53.3,0.414,0.414);

	this.timeline.addTween(cjs.Tween.get(this.amethystLogoAnim).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-14,803.6,657.8);


(lib.transtionAnimPort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rubyAnim
	this.rubyTransAnim = new lib.rubyTransAnimPort();
	this.rubyTransAnim.setTransform(305.5,467,1,1,0,0,0,305.5,467);

	this.timeline.addTween(cjs.Tween.get(this.rubyTransAnim).wait(1));

	// emeraldAnim
	this.emeraldTransAnim = new lib.emeraldTransAnimPort();
	this.emeraldTransAnim.setTransform(305.5,467,1,1,0,0,0,305.5,467);

	this.timeline.addTween(cjs.Tween.get(this.emeraldTransAnim).wait(1));

	// sapphireAnim
	this.sapphireTransAnim = new lib.sapphireTransAnimPort();

	this.timeline.addTween(cjs.Tween.get(this.sapphireTransAnim).wait(1));

	// crystalAnim
	this.crystalTransAnim = new lib.crystalTransAnimPort();
	this.crystalTransAnim.setTransform(305.5,467,1,1,0,0,0,305.5,467);

	this.timeline.addTween(cjs.Tween.get(this.crystalTransAnim).wait(1));

	// goldenAnim
	this.goldenTransAnim = new lib.goldenTransAnimPort();
	this.goldenTransAnim.setTransform(305.5,467,1,1,0,0,0,305.5,467);

	this.timeline.addTween(cjs.Tween.get(this.goldenTransAnim).wait(1));

	// amathystAnim 
	this.amathystTransAnim = new lib.amathystTransAnimPort();

	this.timeline.addTween(cjs.Tween.get(this.amathystTransAnim).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,538.5,746.2);


(lib.transtionAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rubyAnim
	this.rubyTransAnim = new lib.rubyTransAnim();
	this.rubyTransAnim.setTransform(305.5,467,1,1,0,0,0,305.5,467);

	this.timeline.addTween(cjs.Tween.get(this.rubyTransAnim).wait(1));

	// emeraldAnim
	this.emeraldTransAnim = new lib.emeraldTransAnim();

	this.timeline.addTween(cjs.Tween.get(this.emeraldTransAnim).wait(1));

	// sapphireAnim
	this.sapphireTransAnim = new lib.sapphireTransAnim();

	this.timeline.addTween(cjs.Tween.get(this.sapphireTransAnim).wait(1));

	// crystalAnim
	this.crystalTransAnim = new lib.crystalTransAnim();
	this.crystalTransAnim.setTransform(305.5,467,1,1,0,0,0,305.5,467);

	this.timeline.addTween(cjs.Tween.get(this.crystalTransAnim).wait(1));

	// goldenAnim
	this.goldenTransAnim = new lib.goldenTransAnim();
	this.goldenTransAnim.setTransform(305.5,467,1,1,0,0,0,305.5,467);

	this.timeline.addTween(cjs.Tween.get(this.goldenTransAnim).wait(1));

	// amathystAnim 
	this.amathystTransAnim = new lib.amathystTransAnim();

	this.timeline.addTween(cjs.Tween.get(this.amathystTransAnim).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,883.7,454.3);


(lib.RR_help_port = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plaqueCloseBtn
	this.plaqueCloseBtn = new lib.plaqueCloseBtn();
	this.plaqueCloseBtn.setTransform(561,170.3,1,1,0,0,0,23.5,23.5);
	this.plaqueCloseBtn.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	new cjs.ButtonHelper(this.plaqueCloseBtn, 0, 1, 2, false, new lib.plaqueCloseBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.plaqueCloseBtn).wait(1));

	// labelAutoMark03
	this.labelAutoMark03 = new cjs.Text(" ", "18px 'Arial'", "#FFFFFF");
	this.labelAutoMark03.name = "labelAutoMark03";
	this.labelAutoMark03.textAlign = "center";
	this.labelAutoMark03.lineHeight = 22;
	this.labelAutoMark03.lineWidth = 71;
	this.labelAutoMark03.setTransform(427.6,485.4);

	this.timeline.addTween(cjs.Tween.get(this.labelAutoMark03).wait(1));

	// radioBtn
	this.radioBtn = new lib.radioBtn();
	this.radioBtn.setTransform(429.6,560.5,1,1,0,0,0,29,29);

	this.timeline.addTween(cjs.Tween.get(this.radioBtn).wait(1));

	// labelAutoMark02
	this.labelAutoMark02 = new cjs.Text(" ", "18px 'Arial'", "#FFFFFF");
	this.labelAutoMark02.name = "labelAutoMark02";
	this.labelAutoMark02.textAlign = "center";
	this.labelAutoMark02.lineHeight = 22;
	this.labelAutoMark02.lineWidth = 71;
	this.labelAutoMark02.setTransform(292,485.4);

	this.timeline.addTween(cjs.Tween.get(this.labelAutoMark02).wait(1));

	// radioBtn
	this.radioBtn_1 = new lib.radioBtn();
	this.radioBtn_1.setTransform(294,560.5,1,1,0,0,0,29,29);

	this.timeline.addTween(cjs.Tween.get(this.radioBtn_1).wait(1));

	// labelAutoMark01
	this.labelAutoMark01 = new cjs.Text(" ", "18px 'Arial'", "#FFFFFF");
	this.labelAutoMark01.name = "labelAutoMark01";
	this.labelAutoMark01.textAlign = "center";
	this.labelAutoMark01.lineHeight = 22;
	this.labelAutoMark01.lineWidth = 71;
	this.labelAutoMark01.setTransform(163.5,485.4);

	this.timeline.addTween(cjs.Tween.get(this.labelAutoMark01).wait(1));

	// radioBtn
	this.radioBtn_2 = new lib.radioBtn();
	this.radioBtn_2.setTransform(165.5,562.5,1,1,0,0,0,29,29);

	this.timeline.addTween(cjs.Tween.get(this.radioBtn_2).wait(1));

	// titleSettings
	this.titleSettings = new cjs.Text(" ", "bold 22px 'Arial'", "#FFFFFF");
	this.titleSettings.name = "titleSettings";
	this.titleSettings.textAlign = "center";
	this.titleSettings.lineHeight = 27;
	this.titleSettings.lineWidth = 496;
	this.titleSettings.setTransform(288.5,397.8);

	this.timeline.addTween(cjs.Tween.get(this.titleSettings).wait(1));

	// bodySettings
	this.bodySettings = new cjs.Text(" ", "20px 'Arial'", "#FFFFFF");
	this.bodySettings.name = "bodySettings";
	this.bodySettings.textAlign = "center";
	this.bodySettings.lineHeight = 22;
	this.bodySettings.lineWidth = 496;
	this.bodySettings.setTransform(295.5,437,1,1.003);

	this.timeline.addTween(cjs.Tween.get(this.bodySettings).wait(1));

	// title
	this.title = new cjs.Text(" ", "bold 22px 'Arial'", "#F7BC82");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 27;
	this.title.lineWidth = 496;
	this.title.setTransform(295.5,178.8);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// body
	this.body = new cjs.Text(" ", "20px 'Arial'", "#F7BC82");
	this.body.name = "body";
	this.body.textAlign = "center";
	this.body.lineHeight = 22;
	this.body.lineWidth = 496;
	this.body.setTransform(295.5,218.6);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1));

	// seperator
	this.instance = new lib.seperator();
	this.instance.setTransform(297.5,387,1,1,0,0,0,160.5,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 14
	this.instance_1 = new lib.glossyPlaqueBg();
	this.instance_1.setTransform(21.5,161.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// darkener
	this.instance_2 = new lib.darkener();
	this.instance_2.setTransform(298.4,478.6,1,1,-90,0,0,481.4,298.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,960);


(lib.RR_help_land = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plaqueCloseBtn
	this.plaqueCloseBtn = new lib.plaqueCloseBtn();
	this.plaqueCloseBtn.setTransform(738,77.3,1,1,0,0,0,23.5,23.5);
	this.plaqueCloseBtn.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	new cjs.ButtonHelper(this.plaqueCloseBtn, 0, 1, 2, false, new lib.plaqueCloseBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.plaqueCloseBtn).wait(1));

	// labelAutoMark03
	this.labelAutoMark03 = new cjs.Text(" ", "18px 'Arial'", "#FFFFFF");
	this.labelAutoMark03.name = "labelAutoMark03";
	this.labelAutoMark03.textAlign = "center";
	this.labelAutoMark03.lineHeight = 22;
	this.labelAutoMark03.lineWidth = 71;
	this.labelAutoMark03.setTransform(604.6,392.4);

	this.timeline.addTween(cjs.Tween.get(this.labelAutoMark03).wait(1));

	// radioBtn
	this.radioBtn = new lib.radioBtn();
	this.radioBtn.setTransform(606.6,467.5,1,1,0,0,0,29,29);

	this.timeline.addTween(cjs.Tween.get(this.radioBtn).wait(1));

	// labelAutoMark02
	this.labelAutoMark02 = new cjs.Text(" ", "18px 'Arial'", "#FFFFFF");
	this.labelAutoMark02.name = "labelAutoMark02";
	this.labelAutoMark02.textAlign = "center";
	this.labelAutoMark02.lineHeight = 22;
	this.labelAutoMark02.lineWidth = 71;
	this.labelAutoMark02.setTransform(469,392.4);

	this.timeline.addTween(cjs.Tween.get(this.labelAutoMark02).wait(1));

	// radioBtn
	this.radioBtn_1 = new lib.radioBtn();
	this.radioBtn_1.setTransform(471,467.5,1,1,0,0,0,29,29);

	this.timeline.addTween(cjs.Tween.get(this.radioBtn_1).wait(1));

	// labelAutoMark01
	this.labelAutoMark01 = new cjs.Text(" ", "18px 'Arial'", "#FFFFFF");
	this.labelAutoMark01.name = "labelAutoMark01";
	this.labelAutoMark01.textAlign = "center";
	this.labelAutoMark01.lineHeight = 22;
	this.labelAutoMark01.lineWidth = 71;
	this.labelAutoMark01.setTransform(340.5,392.4);

	this.timeline.addTween(cjs.Tween.get(this.labelAutoMark01).wait(1));

	// radioBtn
	this.radioBtn_2 = new lib.radioBtn();
	this.radioBtn_2.setTransform(342.5,469.5,1,1,0,0,0,29,29);

	this.timeline.addTween(cjs.Tween.get(this.radioBtn_2).wait(1));

	// titleSettings
	this.titleSettings = new cjs.Text(" ", "bold 22px 'Arial'", "#FFFFFF");
	this.titleSettings.name = "titleSettings";
	this.titleSettings.textAlign = "center";
	this.titleSettings.lineHeight = 27;
	this.titleSettings.lineWidth = 496;
	this.titleSettings.setTransform(469,304.8);

	this.timeline.addTween(cjs.Tween.get(this.titleSettings).wait(1));

	// bodySettings
	this.bodySettings = new cjs.Text(" ", "20px 'Arial'", "#FFFFFF");
	this.bodySettings.name = "bodySettings";
	this.bodySettings.textAlign = "center";
	this.bodySettings.lineHeight = 22;
	this.bodySettings.lineWidth = 496;
	this.bodySettings.setTransform(472.5,344,1,1.003);

	this.timeline.addTween(cjs.Tween.get(this.bodySettings).wait(1));

	// title
	this.title = new cjs.Text(" ", "bold 22px 'Arial'", "#F7BC82");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 27;
	this.title.lineWidth = 496;
	this.title.setTransform(469,85.8);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// body
	this.body = new cjs.Text(" ", "20px 'Arial'", "#F7BC82");
	this.body.name = "body";
	this.body.textAlign = "center";
	this.body.lineHeight = 22;
	this.body.lineWidth = 496;
	this.body.setTransform(469,125.6);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1));

	// seperator
	this.instance = new lib.seperator();
	this.instance.setTransform(471,294,1,1,0,0,0,160.5,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// glossyPlaqueBg.png
	this.instance_1 = new lib.glossyPlaqueBg();
	this.instance_1.setTransform(198.5,68.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// darkener
	this.instance_2 = new lib.darkener();
	this.instance_2.setTransform(481.4,298.4,1,1,0,0,0,481.4,298.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,600);


(lib.pickGems = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sparkles
	this.lightPingAnim = new lib.lightPingAnim();
	this.lightPingAnim.setTransform(-7.2,-9,0.615,0.615);

	this.timeline.addTween(cjs.Tween.get(this.lightPingAnim).wait(1));

	// key
	this.cavernKeyOnPicker = new lib.cavernKeyOnPicker();
	this.cavernKeyOnPicker.setTransform(53.9,67.6);

	this.timeline.addTween(cjs.Tween.get(this.cavernKeyOnPicker).wait(1));

	// amethystGem
	this.amethystGem = new lib.amethystGem();
	this.amethystGem.setTransform(27.1,25.6,0.515,0.515,0,0,0,52.5,49.5);

	this.timeline.addTween(cjs.Tween.get(this.amethystGem).wait(1));

	// sapphireGem
	this.sapphireGem = new lib.sapphireGem();
	this.sapphireGem.setTransform(25.8,24.2,0.515,0.515,0,0,0,50,47);

	this.timeline.addTween(cjs.Tween.get(this.sapphireGem).wait(1));

	// rubyGem
	this.rubyGem = new lib.rubyGem();
	this.rubyGem.setTransform(0,0,0.515,0.515);

	this.timeline.addTween(cjs.Tween.get(this.rubyGem).wait(1));

	// goldenGem
	this.goldenGem = new lib.goldenGem();
	this.goldenGem.setTransform(26.6,25.1,0.515,0.515,0,0,0,51.5,48.6);

	this.timeline.addTween(cjs.Tween.get(this.goldenGem).wait(1));

	// emeraldGem
	this.emeraldGem = new lib.emeraldGem_1();
	this.emeraldGem.setTransform(26.1,25.4,0.515,0.515,0,0,0,50.5,49.1);

	this.timeline.addTween(cjs.Tween.get(this.emeraldGem).wait(1));

	// crystalGem
	this.crystalGem = new lib.crystalGem();
	this.crystalGem.setTransform(28.1,27.4,0.515,0.515,0,0,0,54.5,53);

	this.timeline.addTween(cjs.Tween.get(this.crystalGem).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-13.3,128.8,128.9);


(lib.pickArea_port = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pickGems
	this.pickGem18 = new lib.pickGems();
	this.pickGem18.setTransform(540.5,244,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem18, 0, 1, 1);

	this.pickGem17 = new lib.pickGems();
	this.pickGem17.setTransform(440.5,244,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem17, 0, 1, 1);

	this.pickGem16 = new lib.pickGems();
	this.pickGem16.setTransform(346.5,244,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem16, 0, 1, 1);

	this.pickGem15 = new lib.pickGems();
	this.pickGem15.setTransform(247.5,244,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem15, 0, 1, 1);

	this.pickGem14 = new lib.pickGems();
	this.pickGem14.setTransform(154.5,244,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem14, 0, 1, 1);

	this.pickGem13 = new lib.pickGems();
	this.pickGem13.setTransform(53.5,244,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem13, 0, 1, 1);

	this.pickGem12 = new lib.pickGems();
	this.pickGem12.setTransform(540.5,144,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem12, 0, 1, 1);

	this.pickGem11 = new lib.pickGems();
	this.pickGem11.setTransform(440.5,144,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem11, 0, 1, 1);

	this.pickGem10 = new lib.pickGems();
	this.pickGem10.setTransform(346.5,144,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem10, 0, 1, 1);

	this.pickGem09 = new lib.pickGems();
	this.pickGem09.setTransform(247.5,144,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem09, 0, 1, 1);

	this.pickGem08 = new lib.pickGems();
	this.pickGem08.setTransform(154.5,144,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem08, 0, 1, 1);

	this.pickGem07 = new lib.pickGems();
	this.pickGem07.setTransform(53.5,144,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem07, 0, 1, 1);

	this.pickGem06 = new lib.pickGems();
	this.pickGem06.setTransform(540.5,52,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem06, 0, 1, 1);

	this.pickGem05 = new lib.pickGems();
	this.pickGem05.setTransform(440.5,52,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem05, 0, 1, 1);

	this.pickGem04 = new lib.pickGems();
	this.pickGem04.setTransform(346.5,52,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem04, 0, 1, 1);

	this.pickGem03 = new lib.pickGems();
	this.pickGem03.setTransform(247.5,52,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem03, 0, 1, 1);

	this.pickGem02 = new lib.pickGems();
	this.pickGem02.setTransform(154.5,52,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem02, 0, 1, 1);

	this.pickGem01 = new lib.pickGems();
	this.pickGem01.setTransform(53.5,52,1,1,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem01, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pickGem01},{t:this.pickGem02},{t:this.pickGem03},{t:this.pickGem04},{t:this.pickGem05},{t:this.pickGem06},{t:this.pickGem07},{t:this.pickGem08},{t:this.pickGem09},{t:this.pickGem10},{t:this.pickGem11},{t:this.pickGem12},{t:this.pickGem13},{t:this.pickGem14},{t:this.pickGem15},{t:this.pickGem16},{t:this.pickGem17},{t:this.pickGem18}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,-14.3,615.8,320.9);


(lib.pickArea_land = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pickGem01
	this.pickGem03 = new lib.pickGems();
	this.pickGem03.setTransform(276.2,50.4,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem03, 0, 1, 1);

	this.pickGem06 = new lib.pickGems();
	this.pickGem06.setTransform(276.2,140.5,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem06, 0, 1, 1);

	this.pickGem09 = new lib.pickGems();
	this.pickGem09.setTransform(276.2,230.6,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem09, 0, 1, 1);

	this.pickGem12 = new lib.pickGems();
	this.pickGem12.setTransform(276.2,320.7,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem12, 0, 1, 1);

	this.pickGem15 = new lib.pickGems();
	this.pickGem15.setTransform(276.2,412.3,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem15, 0, 1, 1);

	this.pickGem18 = new lib.pickGems();
	this.pickGem18.setTransform(276.2,509.8,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem18, 0, 1, 1);

	this.pickGem02 = new lib.pickGems();
	this.pickGem02.setTransform(166.5,50.4,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem02, 0, 1, 1);

	this.pickGem05 = new lib.pickGems();
	this.pickGem05.setTransform(166.5,140.5,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem05, 0, 1, 1);

	this.pickGem08 = new lib.pickGems();
	this.pickGem08.setTransform(166.5,230.6,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem08, 0, 1, 1);

	this.pickGem11 = new lib.pickGems();
	this.pickGem11.setTransform(166.5,320.7,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem11, 0, 1, 1);

	this.pickGem14 = new lib.pickGems();
	this.pickGem14.setTransform(166.5,412.3,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem14, 0, 1, 1);

	this.pickGem17 = new lib.pickGems();
	this.pickGem17.setTransform(166.5,509.8,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem17, 0, 1, 1);

	this.pickGem01 = new lib.pickGems();
	this.pickGem01.setTransform(4.9,-0.1,0.952,0.952);
	new cjs.ButtonHelper(this.pickGem01, 0, 1, 1);

	this.pickGem04 = new lib.pickGems();
	this.pickGem04.setTransform(56.8,140.5,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem04, 0, 1, 1);

	this.pickGem07 = new lib.pickGems();
	this.pickGem07.setTransform(56.8,230.6,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem07, 0, 1, 1);

	this.pickGem10 = new lib.pickGems();
	this.pickGem10.setTransform(56.8,320.7,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem10, 0, 1, 1);

	this.pickGem13 = new lib.pickGems();
	this.pickGem13.setTransform(56.8,412.3,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem13, 0, 1, 1);

	this.pickGem16 = new lib.pickGems();
	this.pickGem16.setTransform(56.8,509.8,0.952,0.952,0,0,0,54.5,53);
	new cjs.ButtonHelper(this.pickGem16, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pickGem16},{t:this.pickGem13},{t:this.pickGem10},{t:this.pickGem07},{t:this.pickGem04},{t:this.pickGem01},{t:this.pickGem17},{t:this.pickGem14},{t:this.pickGem11},{t:this.pickGem08},{t:this.pickGem05},{t:this.pickGem02},{t:this.pickGem18},{t:this.pickGem15},{t:this.pickGem12},{t:this.pickGem09},{t:this.pickGem06},{t:this.pickGem03}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-12.8,342.1,582.2);


(lib.goldWordCountMeter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// goldenWordCountMeter_on
	this.goldenWordCountMeter_on = new lib.goldenWordCountMeter_on();
	this.goldenWordCountMeter_on.setTransform(91,23.5,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get(this.goldenWordCountMeter_on).wait(1));

	// goldenWordCountMeter_off
	this.goldenWordCountMeter_off = new lib.goldenWordCountMeter_off();
	this.goldenWordCountMeter_off.setTransform(91,23.5,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get(this.goldenWordCountMeter_off).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,47);


(lib.goldPrompt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// goldenGem
	this.instance = new lib.goldenPromptGem("single",0);
	this.instance.setTransform(56.5,48.6,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4},13,cjs.Ease.get(-0.99)).to({regY:99.7,scaleX:0.48,scaleY:0.48,rotation:1,y:48.8},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:48.6,mode:"single",startPosition:0},0).wait(35));

	// goldenGem
	this.instance_1 = new lib.goldenPromptGem("single",0);
	this.instance_1.setTransform(166.2,48.6,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({mode:"independent"},0).to({regX:104.9,regY:99.3,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-0.99)).to({regX:104.6,regY:99.7,scaleX:0.48,scaleY:0.48,rotation:1,x:166,y:48.8},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:48.6,mode:"single",startPosition:0},0).wait(33));

	// goldenGem
	this.instance_2 = new lib.goldenPromptGem("single",0);
	this.instance_2.setTransform(275.9,48.6,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({mode:"independent"},0).to({regY:99.6,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:48.8},13,cjs.Ease.get(-0.99)).to({regX:104.7,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,x:275.7},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:48.6,mode:"single",startPosition:0},0).wait(31));

	// goldenGem
	this.instance_3 = new lib.goldenPromptGem("single",0);
	this.instance_3.setTransform(275.9,138.7,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({mode:"independent"},0).to({regX:104.9,regY:99.5,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:138.9},13,cjs.Ease.get(-0.99)).to({regX:104.8,regY:99.3,scaleX:0.48,scaleY:0.48,rotation:1,x:275.7,y:138.8},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:138.7,mode:"single",startPosition:0},0).wait(29));

	// goldenGem
	this.instance_4 = new lib.goldenPromptGem("single",0);
	this.instance_4.setTransform(166.2,138.7,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-0.99)).to({regX:104.6,regY:99.4,scaleX:0.48,scaleY:0.48,rotation:1,x:166,y:138.8},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:138.7,mode:"single",startPosition:0},0).wait(27));

	// goldenGem
	this.instance_5 = new lib.goldenPromptGem("single",0);
	this.instance_5.setTransform(56.5,138.7,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({mode:"independent"},0).to({regX:104.9,regY:99.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4},13,cjs.Ease.get(-0.99)).to({regX:105,regY:99.4,scaleX:0.48,scaleY:0.48,rotation:1,y:138.8},15,cjs.Ease.get(-1)).wait(1).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:138.7,mode:"single",startPosition:0},0).wait(25));

	// goldenGem
	this.instance_6 = new lib.goldenPromptGem("single",0);
	this.instance_6.setTransform(56.5,228.8,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({mode:"independent"},0).to({regY:99.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4,y:228.9},13,cjs.Ease.get(-0.99)).to({regX:104.9,regY:99.7,scaleX:0.48,scaleY:0.48,rotation:1,y:229},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:228.8,mode:"single",startPosition:0},0).wait(23));

	// goldenGem
	this.instance_7 = new lib.goldenPromptGem("single",0);
	this.instance_7.setTransform(166.2,228.8,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({mode:"independent"},0).to({regY:99.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-0.99)).to({regX:104.6,regY:99.7,scaleX:0.48,scaleY:0.48,rotation:1,x:166,y:229},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:228.8,mode:"single",startPosition:0},0).wait(21));

	// goldenGem
	this.instance_8 = new lib.goldenPromptGem("single",0);
	this.instance_8.setTransform(275.9,228.8,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({mode:"independent"},0).to({scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:228.9},13,cjs.Ease.get(-0.99)).to({regX:104.7,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,x:275.7,y:229},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:228.8,mode:"single",startPosition:0},0).wait(19));

	// goldenGem
	this.instance_9 = new lib.goldenPromptGem("single",0);
	this.instance_9.setTransform(275.9,318.9,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({mode:"independent"},0).to({regX:104.9,regY:99.6,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:319.1},13,cjs.Ease.get(-0.99)).to({regX:104.8,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,x:275.7},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:318.9,mode:"single",startPosition:0},0).wait(17));

	// goldenGem
	this.instance_10 = new lib.goldenPromptGem("single",0);
	this.instance_10.setTransform(166.2,318.9,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21).to({mode:"independent"},0).to({regX:104.9,regY:99.3,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-0.99)).to({regX:104.6,regY:99.7,scaleX:0.48,scaleY:0.48,rotation:1,x:166,y:319.1},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:318.9,mode:"single",startPosition:0},0).wait(15));

	// goldenGem
	this.instance_11 = new lib.goldenPromptGem("single",0);
	this.instance_11.setTransform(56.5,318.9,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4},13,cjs.Ease.get(-0.99)).to({regX:105,regY:99.7,scaleX:0.48,scaleY:0.48,rotation:1,y:319.1},15,cjs.Ease.get(-1)).wait(1).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:318.9,mode:"single",startPosition:0},0).wait(13));

	// goldenGem
	this.instance_12 = new lib.goldenPromptGem("single",0);
	this.instance_12.setTransform(56.5,410.5,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25).to({mode:"independent"},0).to({regX:104.9,regY:99.1,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4},13,cjs.Ease.get(-0.99)).to({regX:105,regY:99.7,scaleX:0.48,scaleY:0.48,rotation:1,y:410.7},15,cjs.Ease.get(-1)).wait(1).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:410.5,mode:"single",startPosition:0},0).wait(11));

	// goldenGem
	this.instance_13 = new lib.goldenPromptGem("single",0);
	this.instance_13.setTransform(166.2,410.5,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(27).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-0.99)).to({regX:104.6,regY:99.7,scaleX:0.48,scaleY:0.48,rotation:1,x:166,y:410.7},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:410.5,mode:"single",startPosition:0},0).wait(9));

	// goldenGem
	this.instance_14 = new lib.goldenPromptGem("single",0);
	this.instance_14.setTransform(275.9,410.5,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({mode:"independent"},0).to({regX:104.9,regY:99.5,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:410.7},13,cjs.Ease.get(-0.99)).to({regX:104.8,scaleX:0.48,scaleY:0.48,rotation:1,x:275.7},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:410.5,mode:"single",startPosition:0},0).wait(7));

	// goldenGem
	this.instance_15 = new lib.goldenPromptGem("single",0);
	this.instance_15.setTransform(275.9,508,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(31).to({mode:"independent"},0).to({regX:104.9,regY:99.6,scaleX:0.53,scaleY:0.53,rotation:-1,x:275.8,y:508.2},13,cjs.Ease.get(-0.99)).to({regX:104.8,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,x:275.7},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:275.9,y:508,mode:"single",startPosition:0},0).wait(5));

	// goldenGem
	this.instance_16 = new lib.goldenPromptGem("single",0);
	this.instance_16.setTransform(166.2,508,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(33).to({mode:"independent"},0).to({regX:104.9,regY:99.3,scaleX:0.53,scaleY:0.53,rotation:-1,x:166.1},13,cjs.Ease.get(-0.99)).to({regX:104.6,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,x:166,y:508.2},15,cjs.Ease.get(-1)).wait(1).to({regX:105,regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:166.2,y:508,mode:"single",startPosition:0},0).wait(3));

	// goldenGem
	this.instance_17 = new lib.goldenPromptGem("single",0);
	this.instance_17.setTransform(56.5,508,0.49,0.49,0,0,0,105,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(35).to({mode:"independent"},0).to({regX:104.9,scaleX:0.53,scaleY:0.53,rotation:-1,x:56.4},13,cjs.Ease.get(-0.99)).to({regX:105,regY:99.5,scaleX:0.48,scaleY:0.48,rotation:1,y:508.2},15,cjs.Ease.get(-1)).wait(1).to({regY:99.2,scaleX:0.49,scaleY:0.49,rotation:0,x:56.5,y:508,mode:"single",startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,0,319.5,554.5);


(lib.cavernLogoPort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rubyLogo
	this.rubyLogoAnim = new lib.rubyLogAnimPort();
	this.rubyLogoAnim.setTransform(3,65);

	this.timeline.addTween(cjs.Tween.get(this.rubyLogoAnim).wait(1));

	// sapphireLogoAnim
	this.sapphireLogoAnim = new lib.sapphireLogoAnimPort();
	this.sapphireLogoAnim.setTransform(8,55);

	this.timeline.addTween(cjs.Tween.get(this.sapphireLogoAnim).wait(1));

	// goldenLogo
	this.goldenLogoAnim = new lib.goldenlogoAnimPort();
	this.goldenLogoAnim.setTransform(188.6,90.8,1,1,0,0,0,165.6,85);

	this.timeline.addTween(cjs.Tween.get(this.goldenLogoAnim).wait(1));

	// emeraldLogo
	this.emeraldLogoAnim = new lib.emeraldLogoAnimPort();
	this.emeraldLogoAnim.setTransform(2,25);

	this.timeline.addTween(cjs.Tween.get(this.emeraldLogoAnim).wait(1));

	// crystalLogo
	this.crystalLogoAnim = new lib.crystalLogoAnimPort();
	this.crystalLogoAnim.setTransform(0,35);

	this.timeline.addTween(cjs.Tween.get(this.crystalLogoAnim).wait(1));

	// amethystLogo
	this.amethystLogoAnim = new lib.amethystLogoAnimPort();
	this.amethystLogoAnim.setTransform(1,15,0.872,0.872);

	this.timeline.addTween(cjs.Tween.get(this.amethystLogoAnim).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.1,-15.8,547,1026.6);


(lib.cavernKeysPortrait = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.label = new cjs.Text(" ", "bold 15px 'Arial'", "#F9B018");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 19;
	this.label.lineWidth = 169;
	this.label.setTransform(103,0);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// rubyKey
	this.rubyKey = new lib.redKey();
	this.rubyKey.setTransform(35.1,41.1,0.764,0.764);

	this.timeline.addTween(cjs.Tween.get(this.rubyKey).wait(1));

	// emeraldKey
	this.emeraldKey = new lib.emeraldKey_1();
	this.emeraldKey.setTransform(64.7,41.7,0.764,0.764);

	this.timeline.addTween(cjs.Tween.get(this.emeraldKey).wait(1));

	// sapphireKey
	this.sapphireKey = new lib.sapphireKey_1();
	this.sapphireKey.setTransform(94.4,42.2,0.764,0.764);

	this.timeline.addTween(cjs.Tween.get(this.sapphireKey).wait(1));

	// amethystKey
	this.amethystKey = new lib.amethystKey_1();
	this.amethystKey.setTransform(124,42.2,0.764,0.764);

	this.timeline.addTween(cjs.Tween.get(this.amethystKey).wait(1));

	// goldenKey
	this.goldenKey = new lib.goldenKey();
	this.goldenKey.setTransform(153.7,42.2,0.764,0.764);

	this.timeline.addTween(cjs.Tween.get(this.goldenKey).wait(1));

	// crystalKey
	this.crystalKey = new lib.crystalKey_1();
	this.crystalKey.setTransform(183.3,42.2,0.764,0.764);

	this.timeline.addTween(cjs.Tween.get(this.crystalKey).wait(1));

	// keyHolder
	this.instance = new lib.keyHolder_1();
	this.instance.setTransform(105,19.9,0.882,0.882,0,0,0,119,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,62.6);


(lib.cavernKeys = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.label = new cjs.Text(" ", "bold 15px 'Arial'", "#FFE379");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 19;
	this.label.lineWidth = 194;
	this.label.setTransform(117,0);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// rubyKey
	this.rubyKey = new lib.redKey();
	this.rubyKey.setTransform(40.3,46.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.rubyKey).wait(1));

	// emeraldKey
	this.emeraldKey = new lib.emeraldKey_1();
	this.emeraldKey.setTransform(73.6,46.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.emeraldKey).wait(1));

	// sapphireKey
	this.sapphireKey = new lib.sapphireKey_1();
	this.sapphireKey.setTransform(107,47.2,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.sapphireKey).wait(1));

	// amethystKey
	this.amethystKey = new lib.amethystKey_1();
	this.amethystKey.setTransform(140.3,47.2,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.amethystKey).wait(1));

	// goldenKey
	this.goldenKey = new lib.goldenKey();
	this.goldenKey.setTransform(173.7,47.2,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.goldenKey).wait(1));

	// crystalKey
	this.crystalKey = new lib.crystalKey_1();
	this.crystalKey.setTransform(207,47.2,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.crystalKey).wait(1));

	// keyHolder
	this.instance = new lib.keyHolder_1();
	this.instance.setTransform(119,22.5,1,1,0,0,0,119,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.keyHolderPlaque();
	this.instance_1.setTransform(24.5,-7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.1,238,75.8);


(lib.wordCountMeter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.value = new cjs.Text(" ", "bold 23px 'Arial'", "#FFFFFF");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 28;
	this.value.lineWidth = 141;
	this.value.setTransform(128.1,10.4);

	this.numberOfWords = new cjs.Text(" ", "bold 28px 'Arial'");
	this.numberOfWords.name = "numberOfWords";
	this.numberOfWords.textAlign = "center";
	this.numberOfWords.lineHeight = 33;
	this.numberOfWords.lineWidth = 43;
	this.numberOfWords.setTransform(27.5,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.numberOfWords},{t:this.value}]}).wait(1));

	// winHighLight
	this.winHighLight = new lib.numberLightAnim();
	this.winHighLight.setTransform(30,24,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.winHighLight).wait(1));

	// saphire
	this.sapphireWordCountMeter = new lib.saphireWordCountMeter();
	this.sapphireWordCountMeter.setTransform(91,23.5,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get(this.sapphireWordCountMeter).wait(1));

	// ruby
	this.rubyWordCountMeter = new lib.rubyWordCountMeter();
	this.rubyWordCountMeter.setTransform(91,23.5,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get(this.rubyWordCountMeter).wait(1));

	// golden
	this.goldenWordCountMeter = new lib.goldWordCountMeter();
	this.goldenWordCountMeter.setTransform(91,23.5,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get(this.goldenWordCountMeter).wait(1));

	// emerald
	this.emeraldWordCountMeter = new lib.emeraldWordCountMeter();
	this.emeraldWordCountMeter.setTransform(91,23.5,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get(this.emeraldWordCountMeter).wait(1));

	// crystal
	this.crystalWordCountMeter = new lib.crystalWordCountMeter();
	this.crystalWordCountMeter.setTransform(91,23.5,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get(this.crystalWordCountMeter).wait(1));

	// amathyst
	this.amathystWordCountMeter = new lib.amathystWordCountMeter();
	this.amathystWordCountMeter.setTransform(91,23.5,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get(this.amathystWordCountMeter).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-12.6,216.8,73.2);


(lib.wordCount = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.label = new cjs.Text(" ", "bold 18px 'Arial'");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 22;
	this.label.lineWidth = 199;
	this.label.setTransform(103,3.1);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// wordcountBg
	this.instance = new lib.wordCountBg_1();
	this.instance.setTransform(105,14,1,1,0,0,0,105,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wordCountMeters
	this.wordCountMeter01 = new lib.wordCountMeter();
	this.wordCountMeter01.setTransform(91,379.9,1,1,0,0,0,91,23.5);

	this.wordCountMeter02 = new lib.wordCountMeter();
	this.wordCountMeter02.setTransform(91,333,1,1,0,0,0,91,23.5);

	this.wordCountMeter03 = new lib.wordCountMeter();
	this.wordCountMeter03.setTransform(91,286.1,1,1,0,0,0,91,23.5);

	this.wordCountMeter04 = new lib.wordCountMeter();
	this.wordCountMeter04.setTransform(91,239.2,1,1,0,0,0,91,23.5);

	this.wordCountMeter05 = new lib.wordCountMeter();
	this.wordCountMeter05.setTransform(91,192.3,1,1,0,0,0,91,23.5);

	this.wordCountMeter06 = new lib.wordCountMeter();
	this.wordCountMeter06.setTransform(91,145.4,1,1,0,0,0,91,23.5);

	this.wordCountMeter07 = new lib.wordCountMeter();
	this.wordCountMeter07.setTransform(91,98.5,1,1,0,0,0,91,23.5);

	this.wordCountMeter08 = new lib.wordCountMeter();
	this.wordCountMeter08.setTransform(91,51.6,1,1,0,0,0,91,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wordCountMeter08},{t:this.wordCountMeter07},{t:this.wordCountMeter06},{t:this.wordCountMeter05},{t:this.wordCountMeter04},{t:this.wordCountMeter03},{t:this.wordCountMeter02},{t:this.wordCountMeter01}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,0,216.8,417);


(lib.gameArea_port = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cavernKeys
	this.cavernKeys = new lib.cavernKeysPortrait();
	this.cavernKeys.setTransform(385.1,125);

	this.timeline.addTween(cjs.Tween.get(this.cavernKeys).wait(1));

	// pinknew
	this.amethystPrompt = new lib.pinknew();
	this.amethystPrompt.setTransform(306,738,1,1,0,0,0,300.4,150.5);

	this.timeline.addTween(cjs.Tween.get(this.amethystPrompt).wait(1));

	// sapphireNew
	this.sapphirePrompt = new lib.sapphireNew();
	this.sapphirePrompt.setTransform(306,737.9,1,1,0,0,0,300.5,150.5);

	this.timeline.addTween(cjs.Tween.get(this.sapphirePrompt).wait(1));

	// rubyNew
	this.rubyPrompt = new lib.rubyNew();
	this.rubyPrompt.setTransform(306,737.9,1,1,0,0,0,300.5,150.5);

	this.timeline.addTween(cjs.Tween.get(this.rubyPrompt).wait(1));

	// goldNew
	this.goldPrompt = new lib.goldNew();
	this.goldPrompt.setTransform(306,738,1,1,0,0,0,300.4,150.5);

	this.timeline.addTween(cjs.Tween.get(this.goldPrompt).wait(1));

	// emeraldNew
	this.emeraldPrompt = new lib.emeraldNew();
	this.emeraldPrompt.setTransform(306,738,1,1,0,0,0,300.4,150.5);

	this.timeline.addTween(cjs.Tween.get(this.emeraldPrompt).wait(1));

	// crystalNew
	this.crystalPrompt = new lib.crystalNew();
	this.crystalPrompt.setTransform(306.5,738.4,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.crystalPrompt).wait(1));

	// pickArea
	this.pickArea = new lib.pickArea_port();
	this.pickArea.setTransform(6.5,588.4);

	this.timeline.addTween(cjs.Tween.get(this.pickArea).wait(1));

	// crosswordBoard
	this.crosswordBoard = new lib.crosswordBoard();
	this.crosswordBoard.setTransform(199.9,386.3,0.98,0.98,0,0,0,195.5,196.8);

	this.timeline.addTween(cjs.Tween.get(this.crosswordBoard).wait(1));

	// wordCountMeters
	this.wordCountMeters = new lib.wordCount();
	this.wordCountMeters.setTransform(477,378.1,0.95,0.95,0,0,0,91,198.5);

	this.timeline.addTween(cjs.Tween.get(this.wordCountMeters).wait(1));

	// cavernLogo
	this.cavernLogos = new lib.cavernLogoPort();
	this.cavernLogos.setTransform(8,7.5);

	this.timeline.addTween(cjs.Tween.get(this.cavernLogos).wait(1));

	// caveColours
	this.caveColours = new lib.swooshColours();
	this.caveColours.setTransform(307,363.1,1,1,0,0,0,480,258);

	this.timeline.addTween(cjs.Tween.get(this.caveColours).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173,-8.3,964,1026.6);


(lib.gameArea_land = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cavernKeys
	this.cavernKeys = new lib.cavernKeys();
	this.cavernKeys.setTransform(361,69.5);

	this.timeline.addTween(cjs.Tween.get(this.cavernKeys).wait(1));

	// rubyPrompt
	this.rubyPrompt = new lib.rubyPrompt();
	this.rubyPrompt.setTransform(688.4,96.1,0.782,0.782);

	this.timeline.addTween(cjs.Tween.get(this.rubyPrompt).wait(1));

	// amethystPrompt
	this.amethystPrompt = new lib.amethystPrompt();
	this.amethystPrompt.setTransform(688.4,96.1,0.782,0.782);

	this.timeline.addTween(cjs.Tween.get(this.amethystPrompt).wait(1));

	// sapphirePrompt
	this.sapphirePrompt = new lib.sapphirelPrompt();
	this.sapphirePrompt.setTransform(688.4,96.1,0.782,0.782);

	this.timeline.addTween(cjs.Tween.get(this.sapphirePrompt).wait(1));

	// crystalPrompt
	this.crystalPrompt = new lib.crystalPrompt();
	this.crystalPrompt.setTransform(688.4,96.1,0.782,0.782);

	this.timeline.addTween(cjs.Tween.get(this.crystalPrompt).wait(1));

	// goldPrompt
	this.goldPrompt = new lib.goldPrompt();
	this.goldPrompt.setTransform(688.4,96.1,0.782,0.782);

	this.timeline.addTween(cjs.Tween.get(this.goldPrompt).wait(1));

	// emeraldPrompt
	this.emeraldPrompt = new lib.emeraldPrompt();
	this.emeraldPrompt.setTransform(688.4,96.1,0.782,0.782);

	this.timeline.addTween(cjs.Tween.get(this.emeraldPrompt).wait(1));

	// pickArea
	this.pickArea = new lib.pickArea_land();
	this.pickArea.setTransform(688.4,96.1,0.782,0.782);

	this.timeline.addTween(cjs.Tween.get(this.pickArea).wait(1));

	// wordBoard
	this.crosswordBoard = new lib.crosswordBoard();
	this.crosswordBoard.setTransform(480,339,1,1,0,0,0,195.5,196.8);

	this.timeline.addTween(cjs.Tween.get(this.crosswordBoard).wait(1));

	// wordCountMeters
	this.wordCountMeters = new lib.wordCount();
	this.wordCountMeters.setTransform(37.9,124.7);

	this.timeline.addTween(cjs.Tween.get(this.wordCountMeters).wait(1));

	// cavernLogosLandscape
	this.cavernLogos = new lib.cavernLogosLandscape();

	this.timeline.addTween(cjs.Tween.get(this.cavernLogos).wait(1));

	// caveColours
	this.caveColours = new lib.swooshColours();
	this.caveColours.setTransform(480,258,1,1,0,0,0,480,258);

	this.timeline.addTween(cjs.Tween.get(this.caveColours).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-14,964,657.8);


(lib.cavernSelect_port = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cavernKeys
	this.cavernKeys = new lib.cavernKeys();
	this.cavernKeys.setTransform(181,87.5);

	this.timeline.addTween(cjs.Tween.get(this.cavernKeys).wait(1));

	// selectMessageOut
	this.selectMessageOut = new lib.selectMessageOut();
	this.selectMessageOut.setTransform(138,-252.4);

	this.timeline.addTween(cjs.Tween.get(this.selectMessageOut).wait(1));

	// selectMessageIn
	this.selectMessageIn = new lib.selectMessageIn();
	this.selectMessageIn.setTransform(254,6.1,1,1,0,0,0,116,259.5);

	this.timeline.addTween(cjs.Tween.get(this.selectMessageIn).wait(1));

	// buttons
	this.rubySelectBtn = new lib.rubySelect_btn();
	this.rubySelectBtn.setTransform(155.1,402.8,0.965,0.964,0,0,0,146.9,102.4);

	this.crystalSelectBtn = new lib.crystalSelect_btn();
	this.crystalSelectBtn.setTransform(463.3,418.4,1.053,1.053,0,0,0,147,102.5);

	this.amethystSelectBtn = new lib.amethystSelect_btn();
	this.amethystSelectBtn.setTransform(408.1,766.5,0.954,0.954,0,0,0,147,102.5);

	this.sapphireSelectBtn = new lib.sapphireSelct_btn();
	this.sapphireSelectBtn.setTransform(148,757,0.956,0.955,0,0,0,147,102.5);

	this.goldenSelectBtn = new lib.glodenSelect_btn();
	this.goldenSelectBtn.setTransform(450.6,589.8,1.068,1.068,0,0,0,147,102.5);

	this.emeraldSelectBtn = new lib.emeraldSelect_btn();
	this.emeraldSelectBtn.setTransform(148.5,568,0.966,0.965,0,0,0,147.1,102.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.emeraldSelectBtn},{t:this.goldenSelectBtn},{t:this.sapphireSelectBtn},{t:this.amethystSelectBtn},{t:this.crystalSelectBtn},{t:this.rubySelectBtn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-619.4,600,1579.4);


(lib.cavernSelect_land = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cavernKeys
	this.cavernKeys = new lib.cavernKeys();
	this.cavernKeys.setTransform(349.1,85.5,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.cavernKeys).wait(1));

	// selectMessageOut
	this.selectMessageOut = new lib.selectMessageOut();
	this.selectMessageOut.setTransform(434,16.1,1,1,0,0,0,116,259.5);

	this.timeline.addTween(cjs.Tween.get(this.selectMessageOut).wait(1));

	// selectMessageIn
	this.selectMessageIn = new lib.selectMessageIn();
	this.selectMessageIn.setTransform(434,16.1,1,1,0,0,0,116,259.5);

	this.timeline.addTween(cjs.Tween.get(this.selectMessageIn).wait(1));

	// rubySelectBtn
	this.rubySelectBtn = new lib.rubySelect_btn();
	this.rubySelectBtn.setTransform(157.6,174.7,1,1,0,0,0,147,102.5);

	this.timeline.addTween(cjs.Tween.get(this.rubySelectBtn).wait(1));

	// crystalSelectBtn
	this.crystalSelectBtn = new lib.crystalSelect_btn();
	this.crystalSelectBtn.setTransform(813.5,181,1,1,0,0,0,147,102.5);

	this.timeline.addTween(cjs.Tween.get(this.crystalSelectBtn).wait(1));

	// amethystSelectBtn
	this.amethystSelectBtn = new lib.amethystSelect_btn();
	this.amethystSelectBtn.setTransform(617.6,477.9,1,1,0,0,0,147,102.5);

	this.timeline.addTween(cjs.Tween.get(this.amethystSelectBtn).wait(1));

	// sapphireSelectBtn
	this.sapphireSelectBtn = new lib.sapphireSelct_btn();
	this.sapphireSelectBtn.setTransform(293.6,481,1,1,0,0,0,147,102.5);

	this.timeline.addTween(cjs.Tween.get(this.sapphireSelectBtn).wait(1));

	// goldenSelectBtn
	this.goldenSelectBtn = new lib.glodenSelect_btn();
	this.goldenSelectBtn.setTransform(788.8,326.9,1,1,0,0,0,147,102.5);

	this.timeline.addTween(cjs.Tween.get(this.goldenSelectBtn).wait(1));

	// emeraldSelectBtn
	this.emeraldSelectBtn = new lib.emeraldSelect_btn();
	this.emeraldSelectBtn.setTransform(181.8,321.3,1,1,0,0,0,147,102.5);

	this.timeline.addTween(cjs.Tween.get(this.emeraldSelectBtn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-609.4,960,1209.4);


(lib.revealingRiches_portrait = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// howToPlay
	this.howToPlay = new lib.RR_help_port();
	this.howToPlay.setTransform(300,406.5,1,1,0,0,0,300,406.5);

	this.timeline.addTween(cjs.Tween.get(this.howToPlay).wait(1));

	// winPlaque
	this.winPlaque = new lib.winPlaquePortrait();

	this.timeline.addTween(cjs.Tween.get(this.winPlaque).wait(1));

	// transition
	this.transition = new lib.transtionAnimPort();

	this.timeline.addTween(cjs.Tween.get(this.transition).wait(1));

	// cavernSelect
	this.cavernSelect = new lib.cavernSelect_port();
	this.cavernSelect.setTransform(480,300,1,1,0,0,0,480,300);

	this.timeline.addTween(cjs.Tween.get(this.cavernSelect).wait(1));

	// game
	this.gameArea = new lib.gameArea_port();

	this.timeline.addTween(cjs.Tween.get(this.gameArea).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173,-619.4,964,1637.7);


(lib.revealingRiches_landscape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// howToPlay
	this.howToPlay = new lib.RR_help_land();
	this.howToPlay.setTransform(300,406.5,1,1,0,0,0,300,406.5);

	this.timeline.addTween(cjs.Tween.get(this.howToPlay).wait(1));

	// winPlaque
	this.winPlaque = new lib.winPlaque();

	this.timeline.addTween(cjs.Tween.get(this.winPlaque).wait(1));

	// transition
	this.transition = new lib.transtionAnim();

	this.timeline.addTween(cjs.Tween.get(this.transition).wait(1));

	// cavernSelect
	this.cavernSelect = new lib.cavernSelect_land();
	this.cavernSelect.setTransform(480,300,1,1,0,0,0,480,300);

	this.timeline.addTween(cjs.Tween.get(this.cavernSelect).wait(1));

	// gameArea
	this.gameArea = new lib.gameArea_land();

	this.timeline.addTween(cjs.Tween.get(this.gameArea).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-609.4,964,1253.2);


// stage content:
(lib.revealingRichesGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(307,-319.4,1137,1637.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
