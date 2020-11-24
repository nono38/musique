input.onButtonPressed(Button.A, function () {
    while (coucou) {
        music.playMelody("G F G A - F E D ", 250)
    }
    coucou = game.createSprite(2, 2)
})
input.onButtonPressed(Button.B, function () {
    coucou = 0
})
let coucou = 0
coucou = 1
basic.showString("noah")
