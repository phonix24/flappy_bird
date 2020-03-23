class Partical {
    constructor(game, type) {
        this.game = game
        var name = 'particle' + type
        var guaImage = game.imageByName(name)
        this.image = guaImage.image
        this.w = guaImage.w
        this.h = guaImage.h
        this.setup()
    }
    setup() {
        this.life = 60
    }
    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }
    update() {
        this.life--
        this.x += this.vx
        this.y += this.vy
        this.vx += this.vx * 0.01
        this.vy += this.vy * 0.01
    }
    draw() {
        this.game.drawImage(this)
    }
    static new(game, type) {
        var i = new this(game, type)
        return i
    }
}
