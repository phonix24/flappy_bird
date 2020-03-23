class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function(){
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
        var score = Score.new(game)
        this.addElement(score)
        this.setup()
    }
    setup() {
        this.bestScore = this.getBestScore()
    }
    getBestScore() {
        var key = 'bestScore'
        var score = localStorage.getItem(key)
        log(score)
        return score
    }
    draw() {
        super.draw()
        // draw labels
        this.game.context.fillText('游戏结束', 50, 50)
        this.game.context.fillText('最高纪录：' + this.bestScore, 50, 100)
        this.game.context.fillText('本次得分：' + this.score, 50, 150)
        this.game.context.fillText('按 r 重新开始游戏', 50, 290)
        this.game.context.fillText('按 r 重新开始游戏', 50, 290)
    }
}
