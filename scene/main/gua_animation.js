class GuaAnimation {
    constructor(game) {
        this.game = game
        // this.frames = []
        this.animations = {
            idle: [],
            run: [],
            fly: [],
        }
        for (var i = 1; i < 9; i++) {
            var name = `bird0_${i}`
            // var name = `Walk${i}`
            var t = game.textureByName(name)
            this.animations['fly'].push(t)
        }
        // for (var i = 1; i < 10; i++) {
        //     // var name = `bird0_${i}`
        //     var name = `Idle${i}`
        //     var t = game.textureByName(name)
        //     this.animations['idle'].push(t)
        // }
        this.animationName = 'fly'
        this.image = this.frame()[0]
        this.frameIndex = 0
        this.frameCount = 3
        this.w = this.image.width
        this.h = this.image.height
        this.flipX = false
        this.gy = 10
        this.vy = 0
        this.rotation = 0
        this.alive = true
    }
    frame() {
        return this.animations[this.animationName]
    }
    static new(game) {
        return new this(game)
    }
    update() {
        // 更新受力
        this.y += this.vy
        this.vy += this.gy * 0.2
        var h = 415
        if (this.y > h) {
            this.y = h
        }
        if (this.y < 0) {
            this.y = 0
        }
        // 更新角度
        if (this.rotation < 45) {
            this.rotation += 45
        }
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frame().length
            this.image = this.frame()[this.frameIndex]
        }
    }
    draw() {
        var context = this.game.context
        context.save()

        var w2 = this.w / 2
        var h2 = this.h / 2
        context.translate(this.x + w2, this.y + h2)
        if (this.flipX) {
            context.scale(-1, 1)
        }
        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2, -h2)
        context.drawImage(this.image, 0, 0)

        context.restore()
    }
    jump() {
        this.rotation = -45
        this.vy = -10
    }
    move(x, keyStatus) {
        this.flipX = x < 0
        this.x += x
        // var animations = {
        //     down: 'run',
        //     up: 'idle',
        // }
        // var animationName = animations[keyStatus]
        // this.changeAnimation(animationName)
        // this.changeAnimation('run')
    }
    changeAnimation(name) {
        this.animationName = name
    }
    jumpOnePipe(pipe) {
        for (var i = 0; i < pipe.pipes.length; i += 2) {
            var p = pipe.pipes[i]
            if (p.alive && this.x > p.x + p.w) {
                p.alive = false
                return true
            }
        }
        return false
    }
    isDead(pipe) {
        // log('block', o.alive, b)
        if (this.y >= 415) {
            return true
        }
        for (var p of pipe.pipes) {
            if (this.collide(p)) {
                this.alive = false
                return true
            }
        }
        return false
    }
    collide(b) {
        return this.alive && (rectIntersects(this, b) || rectIntersects(b, this))
    }
}
