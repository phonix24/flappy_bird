class Enemy {
    constructor(game, type) {
        this.game = game
        this.type = type
        var guaImage = game.imageByName('enemy' + type)
        this.image = guaImage.image
        this.w = guaImage.w
        this.h = guaImage.h
        this.x = randomInRange(0, 400 - this.w)
        this.y = -randomInRange(0, this.h * 2)
        this.speed = randomInRange(1, 10)
        this.alive = true
        this.cooldown = 0
    }
    aInb(x, x1, x2) {
        return x >= x1 && x <= x2
    }
    move() {
        this.y += this.speed
        if (this.y > 600) {
            this.x = randomInRange(0, 400 - this.w)
            this.y = 0
            this.alive = true
        }
        if (this.collide(this.game.scene.player)) {
            this.alive = false
            this.game.scene.player.hit()
        }
    }
    collide(b) {
        // log('block', o.alive, b)
        return this.alive && (rectIntersects(this, b) || rectIntersects(b, this))
    }
    fire() {
        if (this.cooldown == 0) {
            this.cooldown = 100
            var bullet = Bullet.new(this.game, 2)
            bullet.x = this.x + this.w / 2
            bullet.y = this.y + this.h
            this.game.scene.addElement(bullet)
        } else {
            this.cooldown--
        }
    }
    update() {
        this.move()
        if (this.y - this.h > 0) {
            this.fire()
        }
    }
    draw() {
        this.alive && this.game.drawImage(this)
    }
    hit() {
        this.alive = false
        var x = this.x + this.w / 2
        var y = this.y + this.h / 3
        var self = this
        // 敌机被击中
        var ps = GuaParticalSystem.new(this.game, x, y, 200, 30, 2, function() {
            self.game.scene.removeEnemy(self)
        })
        this.game.scene.addElement(ps)
        this.game.scene.hitEnemy()
    }
    remove() {
        this.game.scene.removeEnemy(this)
    }
    static new(game, type) {
        var i = new this(game, type)
        return i
    }
}
