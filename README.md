# Ardublockly Menu

Ardublockly Menu is a new version of [Ardublockly](https://github.com/carlosperate/ardublockly) by [Carlos Pereira](https://github.com/carlosperate) adapted for Arduino projects based on Control Interface with LCD Menus.

With this tool, we can create an interface [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) ( Model View Controller ) and defining our custom Options to control different elements connected with Arduino.

## Libraries needed
* [ArduinoMenu Library](https://github.com/neu-rah/ArduinoMenu) - Menu Structure
* [LiquidCrystal](https://github.com/arduino-libraries/LiquidCrystal) - LCD Screen
* [LcdProgressBar](https://github.com/wloche/LcdProgressBar) - Loading Animation for LCD
* [Chrono](https://github.com/SofaPirate/Chrono) - Chronometer and Clock Integration

### Extension libraries
* [DFPlayer](https://github.com/DFRobot/DFRobotDFPlayerMini) - MP3 DFPlayer for music player
* [SofwareSerial](https://github.com/PaulStoffregen/SoftwareSerial) - Useful for Serial communication by Software Pins
* [NFC Reader](https://github.com/elechouse/PN532) - NFC Card Reader with PN532 Module
* [RFID Reader](https://github.com/miguelbalboa/rfid) - RFID Card Reader with MFRC522
* [IMU_MPU9250](https://github.com/blascarr/IMU_MPU9250) - Accelerometer, Gyroscope, Magnetometer (Inertial Measurement Unit)
* [Madgwick Filter](https://github.com/arduino-libraries/MadgwickAHRS) - Filter for Accelerometer, Gyroscope signals
* [TCS3200](https://github.com/blascarr/TCS3200-ColorSensor) - Color sensor TCS3200 for Arduino
* [PID Control](https://github.com/br3ttb/Arduino-PID-Library/blob/master/PID_v1.h) - Sensor signal control based on Proportional - Integral - Derivative Controller
* [Kalman Filter](https://github.com/denyssene/SimpleKalmanFilter) - Filter for signal noise stabilization
* [SD Library](https://www.arduino.cc/en/Reference/SD) - For read/write access with SD card integration
* [Interruption Attach](https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/) - Interrupts for hardware control

## Electronics

In order to achieve a controller interface easily, it´s recommended to reuse an LCD Controller of 3D Printers. ( a.k.a. Reprap discount smart controller)
This module integrates LCD Screen, Encoder and SD Card Reader.


![Ardublockly Menu desktop program screenshot][lcd_smart_controller]

Pinout by default can be connected in this way.
![Pinout LCD EXP][lcd_EXP_Pinout]


## Menu Definition

For Menu projects you will need to add this blocks in order to instantiate LCD screen , Encoder in the pins connected and define a Menu Model and create the navigation model.

![Ardublockly Menu desktop program screenshot][ardumenu]

The next step is configure different events for actions when we press the encoder button. First, we need to add our Event function and what actions will execute.

![Create an Event Function][event_function]

![Digital Output Event][output_event]

And Finally, we can replace doNothing method with our event declared that will appear in our list functions.
![Ardublockly Menu desktop program screenshot][using_events]

In the events we can add different actions to execute motor movements, play music, execute readings and update sensors or different actions programmed. 

Important: Don´t use loops in events; otherwise lcd update screen output will be blocked.

## ¿What is Ardublockly?
Ardublockly is a visual programming editor for Arduino. It is based on Google's [Blockly][1], which has been forked to generate [Arduino][15] code.

With Ardublockly, students can drag and visualize at the same time how the code is constructing the sketch.
In addition, blocks are useful to save time with syntax errors in c++ code language, so we can implement faster programs for our Arduino projects. 

The `ArdublocklyServer` Python package initialises a local server to be able to compile and load the Arduino code using the [Arduino IDE][2].

![Ardublockly desktop program screenshot][desktop_screeshot]



## Credit
This project has been inspired by [Ardublockly][16].

Blockly original source is Copyright of Google Inc. [https://developers.google.com/blockly/][1]. A list of changes to the Blockly fork can be found in the [Blockly subdirectory README][17] file.


## License

Unless stated otherwise, the source code of this projects is
licensed under the Apache License, Version 2.0 (the "License");
you may not use any of the licensed files within this project
except in compliance with the License.

The full document can be found in the [LICENSE][9] file.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


[1]: https://developers.google.com/blockly/
[2]: http://www.arduino.cc/en/main/software/
[4]: https://github.com/carlosperate/ardublockly/releases/
[9]: https://github.com/carlosperate/ardublockly/blob/master/LICENSE
[15]: http://www.arduino.cc
[16]: https://github.com/BlocklyDuino/BlocklyDuino
[17]: blockly/README.md

[desktop_screeshot]: http://carlosperate.github.io/ardublockly/images/screenshot_desktop_1.png
[ardumenu]: /ardublockly/images/ArdublocklyMenu_index.png
[lcd_smart_controller]: /ardublockly/images/lcd-smart-controller-display-adapter.jpg
[lcd_EXP_Pinout]: /ardublockly/images/LCD_EXPConnectorPinout.jpg
[event_function]: /ardublockly/images/EventFunction.png
[output_event]: /ardublockly/images/output_event.png
[using_events]: /ardublockly/images/using_output_event.png
