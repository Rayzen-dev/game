import SpriteSheet from "./SpriteSheet.js";
import {loadImage} from "./loader.js";

export function loadMarioSprite() {
    return loadImage('/assets/characters.gif')
        .then(image => {
            const sprites = new SpriteSheet(image);
            sprites.define('idle', 276, 44, 16, 16);
            return sprites;
        });
}