Game.bakeryName = "Full Auto Cookies";
Game.bakeryNameRefresh();
Game.bakeryNameL.innerHTML = "Full Auto Cookies";

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
	if(Game.ascendMeterLevel >= 1) {
		Game.Ascend(true);
		setTimeout(function() {
			Game.Reincarnate(true);
		}, 5000);
	}
}, 10000);