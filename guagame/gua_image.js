class GuaImage {
    constructor(image) {
        this.image = image
        this.x = 0
        this.y = 0
        this.w = image.width
        this.h = image.height
        this.game = null
        this.flipY = false
        this.rotation = 0
    }
    static new(game, name) {
        var image = game.textureByName(name)
        var i = new this(image)
        i.game = game
        return i
    }
    draw() {
        this.game.drawImage(this)
    }
}
