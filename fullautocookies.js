Game.bakeryName = "Full Auto Cookies";
Game.bakeryNameRefresh();
Game.bakeryNameL.innerHTML = "Full Auto Cookies";

var legacyThresh = 1;

setInterval(function() {
	Game.ClickCookie();
}, 10);

setInterval(function() {
	for(var i=0;i<Game.ObjectsById.length;i++) {
		Game.ObjectsById[i].buy();
	}
}, 100);

setInterval(function() {
	var upgrades = Object.values(Game.UpgradesById);
	
	var i=0;
	
	while(upgrades[i].buy(true) == 0) {
		i++;
		while(upgrades[i].tier == 0) {
			i++;
			
			if(i >= upgrades.length) {
				break;
			}
		}
		if(i >= upgrades.length) {
			break;
		}
	}
}, 100);

setInterval(function() {
	while(Game.shimmers.length > 0) {
		Game.shimmers[0].pop();
	}
}, 100);

setInterval(function() {
	if(Game.ascendMeterLevel >= legacyThresh) {
		legacyThresh = legacyThresh * 10;
		Game.Ascend(true);
		setTimeout(function() {
			Game.Reincarnate(true);
		}, 5000);
	}
}, 10000);
