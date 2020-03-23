class GuaParticalSystem {
    constructor(game, x, y, number, duration, type, callback) {
        this.game = game
        this.numberOfPartical = number
        this.particals = []
        this.x = x
        this.y = y
        this.duration = duration
        this.type = type
        this.callback = callback
    }
    setup() {
    }
    static new(game, x, y, number, duration, type, callback) {
        var i = new this(game, x, y, number, duration, type, callback)
        return i
    }
    update() {
        this.duration--
        // 添加小火花
        if (this.particals.length < this.numberOfPartical) {
            var partical = Partical.new(this.game, this.type)
            var vx = randomInRange(1, 3) * randomSign()
            var vy = randomInRange(1, 3) * randomSign()
            partical.init(this.x, this.y, vx, vy)
            this.particals.push(partical)
        }
        // 更新小火花
        for (var i = 0; i < this.particals.length; i++) {
            var p = this.particals[i]
            p.update()
        }
        // 删除范围外的小火花
        var particals = []
        for (var i = 0; i < this.particals.length; i++) {
            var p = this.particals[i]
            if (p.life > 0) {
                particals.push(p)
            }
        }
        this.particals = particals
    }
    draw() {
        if (this.duration == 0) {
            this.game.scene.removeElement(this)
            this.callback && this.callback()
            return
        }
        for (var i = 0; i < this.particals.length; i++) {
            var p = this.particals[i]
            p.draw()
        }
    }
}
