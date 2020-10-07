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

Blockly.Arduino['clumsee_setup'] = function(block) {
	var clumsee_WL = Blockly.Arduino.valueToCode(
		block, 'wheel_L', Blockly.Arduino.ORDER_ATOMIC);
	var clumsee_WR = Blockly.Arduino.valueToCode(
		block, 'wheel_R', Blockly.Arduino.ORDER_ATOMIC);

	Blockly.Arduino.addInclude('clumsee', '#include <Clumsee.h>\n');
	Blockly.Arduino.addDeclaration('clumsee', 'Clumsee Clum;');
	Blockly.Arduino.addSetup('clumsee', 'Clum.init();', true);
	Blockly.Arduino.addSetup('clumsee', 'Clum.setWheels('+clumsee_WL+','+clumsee_WR+');', true);
};

Blockly.Arduino['clumsee_move'] = function(block) {
	var clumsee_movement= block.getFieldValue('clumsee_move');
	var clumsee_V= Blockly.Arduino.valueToCode(
		block, 'clumsee_vel', Blockly.Arduino.ORDER_ATOMIC);

	Blockly.Arduino.addInclude('clumsee', '#include <Clumsee.h>\n', false);
	Blockly.Arduino.addDeclaration('clumsee', 'Clumsee Clum;', false);

	var clumsee_code = 'Clum.'+clumsee_movement+'('+clumsee_V+');\n';
	return clumsee_code;
};


Blockly.Arduino['clumsee_stop'] = function(block) {
	var clumsee_code = 'Clum.stop();\n';
	return clumsee_code;
};

Blockly.Arduino['clumsee_setwheels'] = function(block) {
	var clumsee_WL = Blockly.Arduino.valueToCode(
		block, 'wheel_L', Blockly.Arduino.ORDER_ATOMIC);
	var clumsee_WR = Blockly.Arduino.valueToCode(
		block, 'wheel_R', Blockly.Arduino.ORDER_ATOMIC);

	var clumsee_code = 'Clum.setWheels('+clumsee_WL+','+clumsee_WR+');\n';

	Blockly.Arduino.addInclude('clumsee', '#include <Clumsee.h>\n', false);
	Blockly.Arduino.addDeclaration('clumsee', 'Clumsee Clum;', false);
	
	return clumsee_code;
};

Blockly.Arduino['clumsee_angle'] = function(block) {
	var clumsee_angle = block.getFieldValue('angle');

	var clumsee_code = 'Clum.setAngle('+clumsee_angle+');\n';

	Blockly.Arduino.addInclude('clumsee', '#include <Clumsee.h>\n', false);
	Blockly.Arduino.addDeclaration('clumsee', 'Clumsee Clum;', false);
	
	return clumsee_code;
};

Blockly.Arduino['clumsee_dangle'] = function(block) {
	var clumsee_angle = Blockly.Arduino.valueToCode(
		block, 'angle', Blockly.Arduino.ORDER_ATOMIC);

	var clumsee_code = 'Clum.setAngle('+clumsee_angle+');\n';

	Blockly.Arduino.addInclude('clumsee', '#include <Clumsee.h>\n', false);
	Blockly.Arduino.addDeclaration('clumsee', 'Clumsee Clum;', false);
	
	return clumsee_code;
};

Blockly.Arduino['clumsee_imuoffset'] = function(block) {
	var clumsee_offset = Blockly.Arduino.valueToCode(
		block, 'offset', Blockly.Arduino.ORDER_ATOMIC);

	var clumsee_code = 'Clum.imu_offset('+clumsee_offset+');\n';

	Blockly.Arduino.addInclude('clumsee', '#include <Clumsee.h>\n', false);
	Blockly.Arduino.addDeclaration('clumsee', 'Clumsee Clum;', false);
	
	return clumsee_code;
};

Blockly.Arduino['define_clumsee_action'] = function(block) {
  var colour_front_cs = block.getFieldValue('front_CS');
  var colour_back_cs = block.getFieldValue('back_CS');
  var statements_name = Blockly.Arduino.statementToCode(block, 'color_comb');

  Blockly.Arduino.addInclude('clumsee', '#include <Clumsee.h>\n', false);
	Blockly.Arduino.addDeclaration('clumsee', 'Clumsee Clum;', false);
	
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  //return code;
};
/*
Blockly.Arduino['clumsee_setup'] = function(block) {
	var clumsee_instance = block.getFieldValue('clumsee_instance');
	var clumsee_WL = Blockly.Arduino.valueToCode(
		block, 'wheel_L', Blockly.Arduino.ORDER_ATOMIC);
	var clumsee_WR = Blockly.Arduino.valueToCode(
		block, 'wheel_R', Blockly.Arduino.ORDER_ATOMIC);

	Blockly.Arduino.addInclude('clumsee', '#include <Clumsee.h>\n');
	Blockly.Arduino.addDeclaration('clumsee', 'Clumsee '+clumsee_instance+';');
	Blockly.Arduino.addSetup('clumsee', clumsee_instance+'.init();', true);
	Blockly.Arduino.addSetup('clumsee', clumsee_instance+'.setWheels('+clumsee_WL+','+clumsee_WR+');', true);
};

Blockly.Arduino['clumsee_move'] = function(block) {
	var clumsee_instance = block.getFieldValue('clumsee_instance');
	var clumsee_movement= block.getFieldValue('clumsee_move');
	var clumsee_V= Blockly.Arduino.valueToCode(
		block, 'clumsee_vel', Blockly.Arduino.ORDER_ATOMIC);

	var clumsee_code = clumsee_instance+'.'+clumsee_movement+'('+clumsee_V+');\n';
	return clumsee_code;
};


Blockly.Arduino['clumsee_stop'] = function(block) {
	var clumsee_instance = block.getFieldValue('clumsee_instance');
	var clumsee_code = clumsee_instance+'.stop();\n';
	return clumsee_code;
};

Blockly.Arduino['clumsee_setwheels'] = function(block) {
	var clumsee_instance = block.getFieldValue('clumsee_instance');
	var clumsee_WL = Blockly.Arduino.valueToCode(
		block, 'wheel_L', Blockly.Arduino.ORDER_ATOMIC);
	var clumsee_WR = Blockly.Arduino.valueToCode(
		block, 'wheel_R', Blockly.Arduino.ORDER_ATOMIC);

	var clumsee_code = clumsee_instance+'.setWheels('+clumsee_WL+','+clumsee_WR+');\n';
	return clumsee_code;
};

Blockly.Arduino['clumsee_angle'] = function(block) {
	var clumsee_instance = block.getFieldValue('clumsee_instance');
	var clumsee_angle = block.getFieldValue('angle');

	var clumsee_code = clumsee_instance+'.setAngle('+clumsee_angle+');\n';
	return clumsee_code;
};

Blockly.Arduino['clumsee_dangle'] = function(block) {
	var clumsee_instance = block.getFieldValue('clumsee_instance');
	var clumsee_angle = Blockly.Arduino.valueToCode(
		block, 'angle', Blockly.Arduino.ORDER_ATOMIC);

	var clumsee_code = clumsee_instance+'.setAngle('+clumsee_angle+');\n';
	return clumsee_code;
};

Blockly.Arduino['clumsee_imuoffset'] = function(block) {
	var clumsee_instance = block.getFieldValue('clumsee_instance');
	var clumsee_offset = Blockly.Arduino.valueToCode(
		block, 'offset', Blockly.Arduino.ORDER_ATOMIC);

	var clumsee_code = clumsee_instance+'.imu_offset('+clumsee_offset+');\n';
	return clumsee_code;
};

Blockly.Arduino['define_clumsee_action'] = function(block) {
  var colour_front_cs = block.getFieldValue('front_CS');
  var colour_back_cs = block.getFieldValue('back_CS');
  var statements_name = Blockly.Arduino.statementToCode(block, 'color_comb');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  //return code;
};
*/