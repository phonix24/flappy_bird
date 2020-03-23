class MainScene extends Scene {
    constructor(game) {
        super(game)
        this.numberOfEnemy = 5
        this.setup()
    }
    setup() {
        var game = this.game
        var background = game.imageByName('background')
        this.bg = background
        var player = Player.new(game)
        this.player = player
        this.addElement(this.bg)
        this.addElement(background)
        this.addElement(player)
        this.addEnemy()
        var score = Score.new(game)
        this.score = score
        this.addElement(score)
        game.registerAction('a', function() {
            player.moveLeft()
        })
        game.registerAction('d', function() {
            player.moveRight()
        })
        game.registerAction('w', function() {
            player.moveTop()
        })
        game.registerAction('s', function() {
            player.moveDown()
        })
    }
    update() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.update && e.update()
        }
    }
    draw() {
        this.game.drawImage(this.bg)
        super.draw()
    }
    addEnemy() {
        var enemys = []
        for (var i = 0; i < this.numberOfEnemy; i++) {
            var type = i % 3
            var e = Enemy.new(this.game, type)
            enemys.push(e)
            this.addElement(e)
        }
        this.enemys = enemys
    }
    removeEnemy(enemy) {
        this.removeElement(enemy)
        var enemys = []
        for (var i = 0; i < this.enemys.length; i++) {
            var e = this.enemys[i]
            if (e != enemy) {
                enemys.push(e)
            }
        }
        this.enemys = enemys
        if (this.enemys.length == 0) {
            this.addEnemy()
        }
    }
    // 击中敌机
    hitEnemy() {
        this.score.add(10)
    }
    // 击中子弹
    hitBullet() {
        this.score.add(100)
    }
}
