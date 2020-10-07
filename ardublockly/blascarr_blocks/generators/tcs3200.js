/*
__________ .__                                                   
\______   \|  |  _____     ______  ____  _____   _______ _______ 
 |    |  _/|  |  \__  \   /  ___/_/ ___\ \__  \  \_  __ \\_  __ \
 |    |   \|  |__ / __ \_ \___ \ \  \___  / __ \_ |  | \/ |  | \/
 |______  /|____/(____  //____  > \___  >(____  / |__|    |__|   
        \/            \/      \/      \/      \/                 

Blascarr invests time and resources providing this open source code like some other libraries, please
respect the job and support open-source software.

Written by Adrian for Blascarr
*/

'use strict';

goog.require('Blockly.Arduino');

Blockly.Arduino['tcs3200_basicsetup'] = function(block) {
  var cs_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('cs_instance'), Blockly.Variables.NAME_TYPE);
  var S2_PIN = Blockly.Arduino.valueToCode(block, 'S2', Blockly.Arduino.ORDER_ATOMIC);
  var S3_PIN = Blockly.Arduino.valueToCode(block, 'S3', Blockly.Arduino.ORDER_ATOMIC);
  var OUT_PIN = Blockly.Arduino.valueToCode(block, 'OUT', Blockly.Arduino.ORDER_ATOMIC);
  	
  	// TODO: Assemble JavaScript into code variable.
  	Blockly.Arduino.addDeclaration(cs_instance, 'TCS3200 ' + cs_instance + '('+S2_PIN+','+S3_PIN+','+OUT_PIN+');');
	Blockly.Arduino.addInclude('cs', '#include <TCS3200.h>');
  var setupCode = '\t'+cs_instance + '.begin();'+'\n\t'+
	cs_instance + '.nSamples(40);'+'\n\t'+
	cs_instance + '.setRefreshTime(200);'+'\n\t'+
	cs_instance + '.setFrequency(TCS3200_FREQ_HI);';
	Blockly.Arduino.addSetup(cs_instance, setupCode, true);
};

Blockly.Arduino['tcs3200_setup'] = function(block) {
	var cs_instance = block.getFieldValue('cs_instance');
	var S2_PIN = Blockly.Arduino.valueToCode(
		block, 'S2', Blockly.Arduino.ORDER_ATOMIC);
	var S3_PIN = Blockly.Arduino.valueToCode(
		block, 'S3', Blockly.Arduino.ORDER_ATOMIC);
	var OUT_PIN = Blockly.Arduino.valueToCode(
		block, 'OUT', Blockly.Arduino.ORDER_ATOMIC);
	var LED_PIN = Blockly.Arduino.valueToCode(
		block, 'LED', Blockly.Arduino.ORDER_ATOMIC);

	Blockly.Arduino.addDeclaration(cs_instance, 'TCS3200 ' + cs_instance + '('+S2_PIN+','+S3_PIN+','+OUT_PIN+','+LED_PIN+');');
	Blockly.Arduino.addInclude('cs', '#include <TCS3200.h>');

	var setupCode = '\t'+cs_instance + '.begin();'+'\n\t'+
		cs_instance + '.nSamples(40);'+'\n\t'+
		cs_instance + '.setRefreshTime(200);'+'\n\t'+
		cs_instance + '.setFrequency(TCS3200_FREQ_HI);';
	Blockly.Arduino.addSetup(cs_instance, setupCode, true);
};

Blockly.Arduino['tcs3200_setupall'] = function(block) {
	var cs_instance = block.getFieldValue('cs_instance');
	var S0_PIN = Blockly.Arduino.valueToCode(
		block, 'S0', Blockly.Arduino.ORDER_ATOMIC);
	var S1_PIN = Blockly.Arduino.valueToCode(
		block, 'S1', Blockly.Arduino.ORDER_ATOMIC);
	var S2_PIN = Blockly.Arduino.valueToCode(
		block, 'S2', Blockly.Arduino.ORDER_ATOMIC);
	var S3_PIN = Blockly.Arduino.valueToCode(
		block, 'S3', Blockly.Arduino.ORDER_ATOMIC);
	var OUT_PIN = Blockly.Arduino.valueToCode(
		block, 'OUT', Blockly.Arduino.ORDER_ATOMIC);
	var LED_PIN = Blockly.Arduino.valueToCode(
		block, 'LED', Blockly.Arduino.ORDER_ATOMIC);

	Blockly.Arduino.addDeclaration(cs_instance, 'TCS3200 ' + cs_instance + '('+S2_PIN+','+S3_PIN+','+OUT_PIN+','+S0_PIN+','+S1_PIN+','+LED_PIN+');');
	Blockly.Arduino.addInclude('cs', '#include <TCS3200.h>');

	var setupCode = '\t'+cs_instance + '.begin();'+'\n\t'+
		cs_instance + '.nSamples(40);'+'\n\t'+
		cs_instance + '.setRefreshTime(200);'+'\n\t'+
		cs_instance + '.setFrequency(TCS3200_FREQ_HI);';
  	Blockly.Arduino.addSetup(cs_instance, setupCode, true);
};

//Calibration Sensor Readings

Blockly.Arduino['tcs3200_colorchange'] = function(block) {
  var cs_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('cs_instance'), Blockly.Variables.NAME_TYPE);
  var code = cs_instance+'.onChangeColor()';
  Blockly.Arduino.addDeclaration(cs_instance, 'TCS3200 ' + cs_instance + ';');
  Blockly.Arduino.addInclude('cs', '#include <TCS3200.h>');

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['tcs3200_read'] = function(block) {
	var cs_instance = block.getFieldValue('cs_instance');
	var dropdown_rgb_raw = block.getFieldValue('RGB_RAW');
	var cs_code = cs_instance + '.read( '+dropdown_rgb_raw+' );\n';
	Blockly.Arduino.addDeclaration(cs_instance, 'TCS3200 ' + cs_instance + ';');
  	Blockly.Arduino.addInclude('cs', '#include <TCS3200.h>');
	
	return cs_code;
};

Blockly.Arduino['tcs3200_readcolor'] = function(block) {
	var cs_instance = block.getFieldValue('cs_instance');
	var cs_code = cs_instance + '._ct[ '+cs_instance+'.checkColor( &'+cs_instance+'._rgb) ].name';
	Blockly.Arduino.addDeclaration(cs_instance, 'TCS3200 ' + cs_instance + ';');
  	Blockly.Arduino.addInclude('cs', '#include <TCS3200.h>');

	return [cs_code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['tcs3200_readint'] = function(block) {
	var cs_instance = block.getFieldValue('cs_instance');
	var cs_code = cs_instance + '.checkColor( &'+cs_instance+'._rgb )';
	Blockly.Arduino.addDeclaration(cs_instance, 'TCS3200 ' + cs_instance + ';');
	Blockly.Arduino.addInclude('cs', '#include <TCS3200.h>');
	return [cs_code, Blockly.Arduino.ORDER_ATOMIC];
};

//Calibration Sensor Codes

Blockly.Arduino['tcs3200_calibration'] = function(block) {
	var cs_instance = block.getFieldValue('cs_instance');
	var eeprom_cal = Blockly.Arduino.valueToCode(block, 'EEPROM_CAL', Blockly.Arduino.ORDER_ATOMIC);

	var cs_code = cs_instance + '.calibration('+eeprom_cal+');\n';
	Blockly.Arduino.addDeclaration(cs_instance, 'TCS3200 ' + cs_instance + ';');
  	Blockly.Arduino.addInclude('cs', '#include <TCS3200.h>');
	//Blockly.Arduino.addSetup(cs_instance, cs_code, true);
	return cs_code;
};

Blockly.Arduino['tcs3200_loadcalibration'] = function(block) {
	var cs_instance = block.getFieldValue('cs_instance');
	var cs_EEPROM = Blockly.Arduino.valueToCode(
		block, 'eeprom_calibration', Blockly.Arduino.ORDER_ATOMIC);
	var cs_code = cs_instance + '.loadCal('+cs_EEPROM+');\n';
	Blockly.Arduino.addDeclaration(cs_instance, 'TCS3200 ' + cs_instance + ';');
  	Blockly.Arduino.addInclude('cs', '#include <TCS3200.h>');
	return cs_code;
};

Blockly.Arduino['tcs3200_readcalibration'] = function(block) {
	var cs_instance = block.getFieldValue('cs_instance');
	var cs_code = cs_instance + '.readCT();\n';
	Blockly.Arduino.addDeclaration(cs_instance, 'TCS3200 ' + cs_instance + ';');
  	Blockly.Arduino.addInclude('cs', '#include <TCS3200.h>');
	return cs_code;
};

