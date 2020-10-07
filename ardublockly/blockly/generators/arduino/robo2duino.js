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

Blockly.Arduino['point2d_setup'] = function(block) {
  var variable_point2d_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('point2D_instance'), Blockly.Variables.NAME_TYPE);
  var value_px = Blockly.Arduino.valueToCode(block, 'pX', Blockly.Arduino.ORDER_ATOMIC);
  var value_py = Blockly.Arduino.valueToCode(block, 'pY', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Arduino['point2dcolor_setup'] = function(block) {
  var variable_point2d_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('point2D_instance'), Blockly.Variables.NAME_TYPE);
  var value_px = Blockly.Arduino.valueToCode(block, 'pX', Blockly.Arduino.ORDER_ATOMIC);
  var value_py = Blockly.Arduino.valueToCode(block, 'pY', Blockly.Arduino.ORDER_ATOMIC);
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Arduino['pose2d_setup'] = function(block) {
  var variable_pose2d_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('pose2D_instance'), Blockly.Variables.NAME_TYPE);
  var value_px = Blockly.Arduino.valueToCode(block, 'pX', Blockly.Arduino.ORDER_ATOMIC);
  var value_py = Blockly.Arduino.valueToCode(block, 'pY', Blockly.Arduino.ORDER_ATOMIC);
  var value_angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Arduino['pose2d_inv'] = function(block) {
  var variable_pose2d_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('pose2D_instance'), Blockly.Variables.NAME_TYPE);
  var dropdown_mx = block.getFieldValue('mX');
  var dropdown_my = block.getFieldValue('mY');
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Arduino['point2d_inv'] = function(block) {
  var variable_point2d_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('point2D_instance'), Blockly.Variables.NAME_TYPE);
  var dropdown_mx = block.getFieldValue('mX');
  var dropdown_my = block.getFieldValue('mY');
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Arduino['point2d_move'] = function(block) {
  var variable_point2d_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('point2D_instance'), Blockly.Variables.NAME_TYPE);
  var dropdown_movement = block.getFieldValue('movement');
  var value_steps = Blockly.Arduino.valueToCode(block, 'steps', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Arduino['point2d_4move'] = function(block) {
  var variable_point2d_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('point2D_instance'), Blockly.Variables.NAME_TYPE);
  var value_dx = Blockly.Arduino.valueToCode(block, 'dX', Blockly.Arduino.ORDER_ATOMIC);
  var value_dy = Blockly.Arduino.valueToCode(block, 'dY', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Arduino['distance'] = function(block) {
  var value_pi = Blockly.Arduino.valueToCode(block, 'pi', Blockly.Arduino.ORDER_ATOMIC);
  var value_pf = Blockly.Arduino.valueToCode(block, 'pf', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['point2d'] = function(block) {
  var variable_point2d_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('point2D_instance'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Arduino into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['pose2d'] = function(block) {
  var variable_pose2d_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('pose2D_instance'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Arduino into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};