radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (signal < -90) {
        basic.showIcon(IconNames.Square)
    } else {
        if (signal < -80) {
            basic.showIcon(IconNames.Diamond)
        } else {
            basic.showIcon(IconNames.SmallDiamond)
        }
    }
})
let signal = 0
radio.setGroup(1)
basic.forever(function () {
	
})
