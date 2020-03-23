var __main = function() {
    var images = {
        Idle1: 'img/walk/Idle (1).png',
        Idle2: 'img/walk/Idle (2).png',
        Idle3: 'img/walk/Idle (3).png',
        Idle4: 'img/walk/Idle (4).png',
        Idle5: 'img/walk/Idle (5).png',
        Idle6: 'img/walk/Idle (6).png',
        Idle7: 'img/walk/Idle (7).png',
        Idle8: 'img/walk/Idle (8).png',
        Idle9: 'img/walk/Idle (9).png',
        Walk1: 'img/walk/Walk (1).png',
        Walk2: 'img/walk/Walk (2).png',
        Walk3: 'img/walk/Walk (3).png',
        Walk4: 'img/walk/Walk (4).png',
        Walk5: 'img/walk/Walk (5).png',
        Walk6: 'img/walk/Walk (6).png',
        Walk7: 'img/walk/Walk (7).png',
        Walk8: 'img/walk/Walk (8).png',
        Walk9: 'img/walk/Walk (9).png',
        particle1: 'img/particle1.png',
        particle2: 'img/particle2.png',
        particle3: 'img/particle3.png',
        bird0_0: 'img/bird0_0.png',
        bird0_1: 'img/bird0_1.png',
        bird0_2: 'img/bird0_2.png',
        bird0_3: 'img/bird0_3.png',
        bird0_4: 'img/bird0_4.png',
        bird0_5: 'img/bird0_5.png',
        bird0_6: 'img/bird0_6.png',
        bird0_7: 'img/bird0_7.png',
        bird0_8: 'img/bird0_8.png',
        bg: 'img/bg_day.png',
        ground: 'img/land.png',
        pipe: 'img/pipe_up.png',
        // paddle: 'img/paddle.png',
    }
    var game = GuaGame.instance(30, images, function(g) {
        // var s = MainScene.new(g)
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

}

__main()
