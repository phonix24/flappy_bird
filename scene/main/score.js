class Score {
    constructor(game) {
        this.game = game
        this.setup()
    }
    setup() {
        this.score = 0
    }
    add(score) {
        this.score += score
    }
    draw() {
        var text = '得分：' + this.score
        this.game.context.fillText(text, 20, 20)
    }
    static new(game) {
        var i = new this(game)
        return i
    }
}
