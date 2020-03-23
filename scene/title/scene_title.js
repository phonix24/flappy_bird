class SceneTitle extends Scene {
    constructor(game) {
        super(game)
        var bg = GuaImage.new(game, 'bg')
        this.addElement(bg)

        // 加入水管
        this.pipe = Pipes.new(game)
        this.addElement(this.pipe)
        // 循环移动的地面
        this.grounds = []
        for (var i = 0; i < 30; i++) {
            var g = GuaImage.new(game, 'ground')
            g.x = i * 19
            g.y = 450
            this.addElement(g)
            this.grounds.push(g)
        }
        var b = GuaAnimation.new(game)
        b.x = 132
        b.y = 230
        this.b = b
        this.skipCount = 4
        this.started = false
        this.score = 0
        this.addElement(b)
        this.setupInputs()
    }
    update() {
        if (!this.started) {
            return
        }
        super.update()
        this.skipCount--
        var offset = -5
        if (this.skipCount == 0) {
            this.skipCount = 4
            offset = 15
        }
        for (var i = 0; i < this.grounds.length; i++) {
            var g = this.grounds[i]
            g.x += offset
        }
        if (this.b.isDead(this.pipe)) {
            this.saveBestScore()
            var s = SceneEnd.new(this.game)
            s.score = this.score
            this.game.replaceScene(s)
        }
        if (this.b.jumpOnePipe(this.pipe)) {
            this.score++
        }
    }
    draw() {
        // draw labels
        super.draw()
        this.game.context.font = '20px Georgia'
        this.game.context.fillText(this.score, 144, 200)
        if (!this.started) {
            this.game.context.fillText('按 j 跳跃并开始游戏', 50, 290)
        }
    }
    setupInputs() {
        var b = this.b
        var self = this
        this.game.registerAction('a', function(keyStatus) {
            b.move(-2, keyStatus)
        })
        this.game.registerAction('d', function(keyStatus) {
            b.move(2, keyStatus)
        })
        this.game.registerAction('j', function(keyStatus) {
            if (!self.started) {
                self.started = true
            }
            b.jump()
        })
    }
    saveBestScore() {
        var key = 'bestScore'
        var s = localStorage.getItem(key) || '0'
        s = parseInt(s)
        if (this.score > s) {
            s = this.score
        }
        localStorage.setItem(key, s)
    }
}
