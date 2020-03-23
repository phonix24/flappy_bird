class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    draw() {

    }
    update() {

    }
    addElement(element) {
        this.elements.push(element)
    }
}
