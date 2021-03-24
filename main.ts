let current_temperature = 0
basic.forever(function () {
    current_temperature = input.temperature()
    basic.showNumber(current_temperature)
    basic.pause(100)
    basic.clearScreen()
})
