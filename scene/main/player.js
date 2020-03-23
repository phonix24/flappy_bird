class Player {
    constructor(game) {
        this.game = game
        var guaImage = game.imageByName('player')
        this.image = guaImage.image
        this.w = guaImage.w
        this.h = guaImage.h
        this.x = 100
        this.y = 300
        this.speed = 15
        this.cooldown = 0
        var self = this
        this.game.registerAction('k', function() {
            self.fire()
        })
    }
    move(x) {
        if (x < 0) {
            x = 0
        }
        if (x > 400 - this.w) {
            x = 400 - this.w
        }
        this.x = x
    }
    moveLeft() {
        this.move(this.x - this.speed)
    }
    moveRight() {
        this.move(this.x + this.speed)
    }
    moveTop() {
        var y = this.y - this.speed
        if (y < 0) {
            y = 0
        }
        if (y > 600 - this.h) {
            y = 600 - this.h
        }
        this.y = y
    }
    moveDown() {
        var y = this.y + this.speed
        if (y < 0) {
            y = 0
        }
        if (y > 600 - this.h) {
            y = 600 - this.h
        }
        this.y = y
    }
    aInb(x, x1, x2) {
        return x >= x1 && x <= x2
    }
    draw() {
        this.game.drawImage(this)
    }
    fire() {
        if (this.cooldown == 0) {
            this.cooldown = 3
            var bullet = Bullet.new(this.game, 1)
            bullet.x = this.x + this.w / 2
            bullet.y = this.y - bullet.h
            this.game.scene.addElement(bullet)
        } else {
            this.cooldown--
        }
    }
    collide(ball) {
        // if (ball.y + ball.h > o.y) {
        //     if (ball.x > o.x && ball.x < o.x + o.w) {
        //         log('相撞')
        //         return true
        //     }
        // }
        // return false
        var a = o
        var b = ball
        if (this.aInb(a.x, b.x, b.x + b.w) || this.aInb(b.x, a.x, a.x + a.w)) {
            if (this.aInb(a.y, b.y, b.y + b.h) || this.aInb(b.y, a.y, a.y + a.h)) {
                return true
            }
        }
        return false
    }
    hit() {
        var x = this.x + this.w / 2
        var y = this.y + this.h / 3
        var self = this
        // 玩家被击中
        var ps = GuaParticalSystem.new(this.game, x, y, 300, 30, 1, function() {
            var scene = SceneEnd.new(self.game)
            this.game.replaceScene(scene)
        })
        this.game.scene.addElement(ps)
    }
    static new(game) {
        var i = new this(game)
        return i
    }
}
