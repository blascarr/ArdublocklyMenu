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

## ¿What is Ardublockly?
Ardublockly is a visual programming editor for Arduino. It is based on Google's [Blockly][1], which has been forked to generate [Arduino][15] code.

With Ardublockly, students can drag and visualize at the same time how the code is constructing the sketch.
In addition, blocks are useful to save time with syntax errors in c++ code language, so we can implement faster programs for our Arduino projects. 

The `ArdublocklyServer` Python package initialises a local server to be able to compile and load the Arduino code using the [Arduino IDE][2].

![Ardublockly desktop program screenshot][desktop_screeshot]


## Menu Definition

A demo of the latest release of Ardublockly main interface can be found in the following two links (to load the code into an Arduino it requires the full Ardublockly application to be downloaded and run on your computer):



## Credit
This project has been inspired by [BlocklyDuino][16].

Blockly original source is Copyright of Google Inc. [https://developers.google.com/blockly/][1]. A list of changes to the Blockly fork can be found in the [Blockly subdirectory README][17] file.


## License
Copyright (c) 2016 carlosperate https://github.com/carlosperate/

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
[3]: TODO.md
[4]: https://github.com/carlosperate/ardublockly/releases/
[5]: https://github.com/carlosperate/ardublockly/wiki/Installing-Ardublockly
[6]: https://github.com/carlosperate/ardublockly/wiki/Configure-Ardublockly
[7]: https://github.com/carlosperate/ardublockly/wiki
[8]: https://github.com/carlosperate/ardublockly/compare/blockly-original...master
[9]: https://github.com/carlosperate/ardublockly/blob/master/LICENSE
[10]: http://ardublockly.embeddedlog.com/demo/index.html
[11]: http://ardublockly.embeddedlog.com/demo/classic/index.html
[12]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=linux/
[13]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=windows/
[14]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=mac/
[15]: http://www.arduino.cc
[16]: https://github.com/BlocklyDuino/BlocklyDuino
[17]: blockly/README.md

[desktop_screeshot]: http://carlosperate.github.io/ardublockly/images/screenshot_desktop_1.png
[web_screenshot_responsive]: http://carlosperate.github.io/ardublockly/images/screenshot_material_all_small.jpg
[web_screenshot_classic]: http://carlosperate.github.io/ardublockly/images/screenshot_1.png
