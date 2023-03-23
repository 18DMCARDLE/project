radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.LogoDown, function () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 100)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
basic.forever(function () {
	
})
