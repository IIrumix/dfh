input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    images.createImage(`
        # # . . .
        . # . . .
        . # # . .
        . . . # .
        . . . . .
        `).showImage(0)
})
