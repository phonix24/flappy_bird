class SceneEditor extends GuaScene {
    constructor(game) {
        super(game)
        this.blocks = []
        this.enableDrag = false
        this.dragBlock = null
        this.init()
    }
    init() {
        var game = this.game
        var self = this
        game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            var b = Block(game, [x, y])
            if (game.scene != self) {
                return
            }
            if (self.hasPoint(x, y)) {
                self.enableDrag = true
            } else {
                self.blocks.push(b)
            }
        })
        game.canvas.addEventListener('mousemove', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // log(x, y, 'move')
            if (self.enableDrag) {
                log(x, y, 'drag')
                self.dragBlock.x = x
                self.dragBlock.y = y
            }
        })
        game.canvas.addEventListener('mouseup', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            log(x, y, 'up')
            self.enableDrag = false
        })
        game.registerAction('s', function() {
            var blocks = []
            for (var i = 0; i < self.blocks.length; i++) {
                var block = self.blocks[i]
                var p = [block.x, block.y]
                blocks.push(p)
            }
            levels.push(blocks)
            var scene = Scene(game)
            self.game.replaceScene(scene)
            window.blocks = self.blocks
        })
        this.initEditor()
    }
    hasPoint(x, y) {
        var blocks = this.blocks
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.hasPoint(x, y)) {
                this.dragBlock = block
                return true
            }
        }
        return false
    }
    initEditor() {
        var body = document.querySelector('body')
        var save = document.querySelector('#id-div-save')
        var self = this
        save.addEventListener('click', function(event) {
            var blocks = []
            for (var i = 0; i < self.blocks.length; i++) {
                var block = self.blocks[i]
                var p = [block.x, block.y]
                blocks.push(p)
            }
            levels.push(blocks)
            var scene = SceneTitle.new(self.game)
            self.game.replaceScene(scene)
        })
    }
    draw() {
        this.game.context.strokeText('关卡编辑器', 20, 20)
        // draw labels
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i]
            this.game.drawImage(block)
        }
    }
}
