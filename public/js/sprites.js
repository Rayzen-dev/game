import {loadImage} from "./loader.js";
import SpriteSheet from "./SpriteSheet.js";

export function loadBackgroundSprites() {
    return loadImage('/assets/tiles.png')
        .then(image => {
            const sprites = new SpriteSheet(image);
            sprites.defineTile('sky', 3, 21);
            sprites.defineTile('ground', 0, 0);

            return sprites;
        });
}

export function loadMarioSprites() {
    return loadImage('/assets/characters.gif')
        .then(image => {
            const sprites = new SpriteSheet(image);
            sprites.define('idle', 276, 44, 16, 16);

            return sprites;
        })
}