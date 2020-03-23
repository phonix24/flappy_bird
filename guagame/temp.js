
var Scene = function(game) {
    var s = {
        game: game,
        elements: [],
    }
    s.addElement = function(element) {
        this.elements.push(element)
    }

    s.update = function() {
        // background.y += 1
    }

    return s
}
