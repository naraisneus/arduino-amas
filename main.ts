forever(function on_forever() {
    let LDR = 3
    // LDR=pins.A0
    console.log("LDR: " + LDR)
    if (2 < LDR && LDR <= 5) {
        serial.writeValue("x", LDR)
    } else {
        // pins.D0 = LDR
        console.log("res")
    }
    
})
