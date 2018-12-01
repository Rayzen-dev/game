import * as utils from './utils.js';

export default class SpriteSheet {

    constructor(image, width = utils.getVars('TILES_WIDTH'), height = utils.getVars('TILES_HEIGHT')) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
    }

    /**
     *
     * @param name
     * @param x
     * @param y
     * @param width
     * @param height
     */
    define(name, x, y, width, height) {
        const buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        buffer
            .getContext('2d')
            .drawImage(
                this.image,
                x,
                y,
                width,
                height,
                0,
                0,
                width,
                height
            );

        this.tiles.set(name, buffer);
    }

    /**
     *
     * @param name
     * @param x
     * @param y
     */
    defineTile(name, x, y) {
        this.define(name, x * this.width, y * this.height, this.width, this.height);
    }

    /**
     *
     * @param name
     * @param context
     * @param x
     * @param y
     */
    draw(name, context, x, y) {
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x, y);
    }

    /**
     *
     * @param name
     * @param context
     * @param x
     * @param y
     */
	drawTile(name, context, x, y) {
		this.draw(name, context, x * this.width, y * this.height);
	}

}
