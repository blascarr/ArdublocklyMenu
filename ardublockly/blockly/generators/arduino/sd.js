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

Blockly.Arduino['sd_setup'] = function(block) {
  var dropdown_sd_pin = block.getFieldValue('SD_PIN');
  var code = 'SD.begin('+dropdown_sd_pin+');\n';

  Blockly.Arduino.addInclude('SD', '#include <SD.h>\n');
  Blockly.Arduino.addSetup('SD',code);

  //return code;
};

Blockly.Arduino['sd_open'] = function(block) {
  var dropdown_read_write = block.getFieldValue('read_write');
  var value_dir = Blockly.Arduino.valueToCode(block, 'DIR', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['sd_exists'] = function(block) {
  var value_dir = Blockly.Arduino.valueToCode(block, 'DIR', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['sd_actions'] = function(block) {
  var dropdown_sd_action = block.getFieldValue('sd_action');
  var value_dir = Blockly.Arduino.valueToCode(block, 'DIR', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['file_info'] = function(block) {
  var dropdown_info = block.getFieldValue('info');
  // TODO: Assemble Arduino into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['file_read'] = function(block) {
  var dropdown_read_data = block.getFieldValue('read_data');
  // TODO: Assemble Arduino into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['file_readbuffer'] = function(block) {
  var value_buffer = Blockly.Arduino.valueToCode(block, 'buffer', Blockly.Arduino.ORDER_ATOMIC);
  var value_length = Blockly.Arduino.valueToCode(block, 'length', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['file_write'] = function(block) {
  var dropdown_write_mode = block.getFieldValue('write_mode');
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Arduino['file_seek'] = function(block) {
  var dropdown_action = block.getFieldValue('action');
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['file_close'] = function(block) {
  var dropdown_close_mode = block.getFieldValue('close_mode');
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Arduino['file_readbmp'] = function(block) {
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};