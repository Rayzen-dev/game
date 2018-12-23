export function getHeightCanvas() {
    return vars['TILES_HEIGHT'] * vars['SCREEN_HEIGHT'];
}

export function getWidthCanvas() {
    return vars['TILES_WIDTH'] * vars['SCREEN_WIDTH'];
}

export function getVars(key) {
	return vars[key];
}

const vars = {
	'TILES_WIDTH': 16,	//	Width of one tile
	'TILES_HEIGHT': 16,	//	Height of one tile
	'SCREEN_WIDTH': 17,	//	Number of x axe blocks in the canvas
	'SCREEN_HEIGHT': 14	//	Number of y axe block in the canvas
};
