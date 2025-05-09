input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    basic.pause(1000)
    basic.showString("Hey stop that you clown")
    music.playMelody("G A B B B A G F ", 120)
})
