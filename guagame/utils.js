var e = sel => document.querySelector(sel)

var log = console.log.bind(console)

var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var rectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}
var randomInRange = function(start, end) {
    var r = Math.random()
    r = (r * end) % (end + 1)
    if (r < start) {
        r += start
    }
    return Math.floor(r)
}
var randomSign = function() {
    var r = Math.random() * 100
    r = Math.floor(r)
    if (r % 2 == 0) {
        return -1
    }
    return 1
}
