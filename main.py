from machine import Pin

def on_forever():
    LDR=3
    #LDR=pins.A0
    print("LDR: "+ LDR)
    if 2<LDR<=5:
        serial.write_value("x", LDR)
        #pins.D0 = LDR
    else:
        print('res')

forever(on_forever)
