/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Servo library blocks.
 *     The Arduino Servo library docs: http://arduino.cc/en/reference/servo
 *
 * TODO: If angle selector added to blocks edit code here.
 */
'use strict';

goog.provide('Blockly.Arduino.servo');

goog.require('Blockly.Arduino');


/**
 * Code generator to set an angle (Y) value to a servo pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.write(Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['servo_write'] = function(block) {
  var pinKey = block.getFieldValue('SERVO_PIN');
  var servoAngle = Blockly.Arduino.valueToCode(
      block, 'SERVO_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '90';
  var servoName = 'myServo' + pinKey;

  Blockly.Arduino.reservePin(
      block, pinKey, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');

  Blockly.Arduino.addInclude('servo', '#include <Servo.h>');
  Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');

  var setupCode = servoName + '.attach(' + pinKey + ');';
  Blockly.Arduino.addSetup('servo_' + pinKey, setupCode, true);

  var code = servoName + '.write(' + servoAngle + ');\n';
  return code;
};

/**
 * Code generator to read an angle value from a servo pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.read();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['servo_read'] = function(block) {
  var pinKey = block.getFieldValue('SERVO_PIN');
  var servoName = 'myServo' + pinKey;

  Blockly.Arduino.reservePin(
      block, pinKey, Blockly.Arduino.PinTypes.SERVO, 'Servo Read');

  Blockly.Arduino.addInclude('servo', '#include <Servo.h>');
  Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');

  var setupCode = servoName + '.attach(' + pinKey + ');';
  Blockly.Arduino.addSetup('servo_' + pinKey, setupCode, true);

  var code = servoName + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['servo_attach'] = function(block) {
  var servo_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('servo_instance'), Blockly.Variables.NAME_TYPE);
  var servopin = Blockly.Arduino.valueToCode(block, 'servoPIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addInclude('servo', '#include <Servo.h>');
  Blockly.Arduino.addDeclaration(servo_instance, 'Servo ' + servo_instance +';');

  var code = servo_instance+'.attach('+servopin+');\n';
  return code;
};


Blockly.Arduino['servo_detach'] = function(block) {
  var servo_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('servo_instance'), Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.addInclude('servo', '#include <Servo.h>');
  Blockly.Arduino.addDeclaration(servo_instance, 'Servo ' + servo_instance +';');
  var code = servo_instance+'.detach();\n';
  return code;
};

Blockly.Arduino['servo_move'] = function(block) {
  var servo_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('servo_instance'), Blockly.Variables.NAME_TYPE);
  var value_angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addInclude('servo', '#include <Servo.h>',false);
  Blockly.Arduino.addDeclaration(servo_instance, 'Servo ' + servo_instance +';',false);
  var code = servo_instance+'.write('+value_angle+');\n';
  return code;
};