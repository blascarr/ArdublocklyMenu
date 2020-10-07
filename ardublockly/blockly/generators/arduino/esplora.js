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

Blockly.Arduino['esplora_slider'] = function(block) {
	Blockly.Arduino.addInclude('esplora', '#include <Esplora.h>');
  var code = 'Esplora.readSlider()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['esplora_lightsensor'] = function(block) {
	Blockly.Arduino.addInclude('esplora', '#include <Esplora.h>');
  var code = 'Esplora.readLightSensor()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['esplora_temperature'] = function(block) {
	Blockly.Arduino.addInclude('esplora', '#include <Esplora.h>');
  var dropdown_scale = block.getFieldValue('scale');
  var code = 'Esplora.readTemperature('+dropdown_scale+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['esplora_microphone'] = function(block) {
	Blockly.Arduino.addInclude('esplora', '#include <Esplora.h>');
  var code = 'Esplora.readMicrophone()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['esplora_joystick'] = function(block) {
	Blockly.Arduino.addInclude('esplora', '#include <Esplora.h>');
  var dropdown_dir = block.getFieldValue('dir');
  var checkbox_offset = block.getFieldValue('offset') == 'TRUE';

  var axis;
  	if(dropdown_dir == 'X_AXIS'){
		axis = 'X';
	}else if (dropdown_dir == 'Y_AXIS'){
		axis = 'Y';
	}else{
		axis = 'X';
	}
	var code;
  if (checkbox_offset){
  	code='Esplora.readJoystick'+axis+'()';
  }else{

  	Blockly.Arduino.addDeclaration('esplora', 'int '+dropdown_dir+'_threshold=40 ;');
  	code = '(Esplora.readJoystick'+axis+'() > '+dropdown_dir+'_threshold || Esplora.readJoystick'+axis+'() < -'+dropdown_dir+'_threshold ) ? Esplora.readJoystick'+axis+'():0';

  }
	
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['esplora_accelerometer'] = function(block) {
	Blockly.Arduino.addInclude('esplora', '#include <Esplora.h>');
  var dropdown_dir = block.getFieldValue('dir');
  var checkbox_offset = block.getFieldValue('offset') == 'TRUE';
  var code = 'Esplora.readAccelerometer('+dropdown_dir+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['esplora_tone'] = function(block) {
	Blockly.Arduino.addInclude('esplora', '#include <Esplora.h>');
  var value_freq = Blockly.Arduino.valueToCode(block, 'freq', Blockly.Arduino.ORDER_ATOMIC);
  var value_duration = Blockly.Arduino.valueToCode(block, 'duration', Blockly.Arduino.ORDER_ATOMIC);
  var checkbox_off = block.getFieldValue('OFF') == 'TRUE';
  if (checkbox_off){
  	var code = 'Esplora.tone('+value_freq+', '+value_duration+') ;\n';
  }else{
  	var code = 'Esplora.noTone() ;\n';
  }
  
  return code;
};

Blockly.Arduino['esplora_rgb'] = function(block) {
	Blockly.Arduino.addInclude('esplora', '#include <Esplora.h>');
  var value_r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
  var value_g = Blockly.Arduino.valueToCode(block, 'G', Blockly.Arduino.ORDER_ATOMIC);
  var value_b = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Esplora.writeRGB('+value_r+', '+value_g+', '+value_b+') ;\n';
  return code;
};

Blockly.Arduino['esplora_button'] = function(block) {
  Blockly.Arduino.addInclude('esplora', '#include <Esplora.h>');
  var dropdown_button = block.getFieldValue('button');
  var code = 'Esplora.readButton('+dropdown_button+')';
  if(dropdown_button == 'SWITCH_JOYSTICK'){
    code = 'Esplora.readJoystickSwitch()';
  }
  
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['esplora_bt'] = function(block) {
	Blockly.Arduino.addInclude('esplora', '#include <Esplora.h>');
  	var bps = block.getFieldValue('bps');
  	Blockly.Arduino.addInclude('esplora', '#include <Esplora.h>');
  	Blockly.Arduino.addInclude('esplora', '#include <SoftwareSerial.h>');
	Blockly.Arduino.addDeclaration('esplora', 'SoftwareSerial BT( 11, 3);');
	Blockly.Arduino.addSetup('esplora', 'BT.begin('+bps+');');

};