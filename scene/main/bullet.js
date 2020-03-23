class Bullet {
    constructor(game, type) {
        this.game = game
        this.type = type
        var name = 'bullet' + type
        var guaImage = game.imageByName(name)
        this.image = guaImage.image
        this.w = guaImage.w
        this.h = guaImage.h
        this.speed = 10
        this.scene = game.scene
        this.alive = true
    }
    aInb(x, x1, x2) {
        return x >= x1 && x <= x2
    }
    update() {
        this.move()
        if (this.type == 1) {
            for (e  of this.scene.enemys) {
                if (this.collide(e)) {
                    this.alive = false
                    e.hit()
                }
            }
            for (var i = 0; i < this.scene.elements.length; i++) {
                var element = this.scene.elements[i]
                // 子弹碰撞
                if (element instanceof Bullet && element !== this && element.type == 2) {
                    if (this.collide(element)) {
                        this.alive = false
                        element.alive = false
                        var x = this.x + this.w / 2
                        var y = this.y + this.h / 3
                        var self = this
                        var ps = GuaParticalSystem.new(this.game, x, y, 300, 30, 3, function() {
                            self.game.scene.removeElement(element)
                            self.game.scene.removeElement(self)
                        })
                        this.game.scene.addElement(ps)
                        this.game.scene.hitBullet()
                    }
                }
            }
        } else {
            if (this.collide(this.scene.player)) {
                this.alive = false
                this.scene.player.hit()
            }
        }

    }
    collide(b) {
        // log('block', o.alive, b)
        return this.alive && (rectIntersects(this, b) || rectIntersects(b, this))
    }
    draw() {
        this.alive && this.game.drawImage(this)
    }
    move() {
        // 玩家发射的子弹
        if (this.type == 1) {
            this.y -= this.speed
        } else {
            this.y += this.speed
        }

    }
    destroy() {

    }
    static new(game, type) {
        var i = new this(game, type)
        return i
    }
}
