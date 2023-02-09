basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20 && maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(500)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) > 20) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
        basic.pause(500)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 150)
        basic.pause(500)
    }
})
