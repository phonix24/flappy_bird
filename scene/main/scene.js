class Scene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    addElement(element) {
        this.elements.push(element)
    }
    removeElement(element) {
        var elements = []
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            if (e != element) {
                elements.push(e)
            }
        }
        this.elements = elements
    }
    update() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.update && e.update()
        }
    }
    draw() {
        for (var i = 0; i < this.elements.length; i++) {
            var element = this.elements[i]
            element.draw && element.draw()
        }
    }
    static new(game) {
        var i = new this(game)
        return i
    }
}
