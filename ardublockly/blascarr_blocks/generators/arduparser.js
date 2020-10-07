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

goog.provide('Blockly.Arduino.arduparser');
goog.require('Blockly.Arduino');

Blockly.Arduino['arduparser_setup'] = function(block) {
    var parser_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('parser_instance'), Blockly.Variables.NAME_TYPE);
    var value_start_cmd = Blockly.Arduino.valueToCode(block, 'START_CMD', Blockly.Arduino.ORDER_ATOMIC);
    var value_delimiter_cmd = Blockly.Arduino.valueToCode(block, 'DELIMITER_CMD', Blockly.Arduino.ORDER_ATOMIC);
    var value_end_cmd = Blockly.Arduino.valueToCode(block, 'END_CMD', Blockly.Arduino.ORDER_ATOMIC);

	Blockly.Arduino.addInclude('parser', '#include <ArduParser.h>');
	Blockly.Arduino.addDeclaration(parser_instance, 'arduParser ' + parser_instance + '('+value_start_cmd+','+value_delimiter_cmd+','+value_end_cmd+');');
};

Blockly.Arduino['arduparser_parser'] = function(block) {
  var parser_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('parser_instance'), Blockly.Variables.NAME_TYPE);
  var parser_string = Blockly.Arduino.valueToCode(block, 'parser_string', Blockly.Arduino.ORDER_ATOMIC);

  var code = parser_instance+'.parser ('+parser_string+');\n';
  Blockly.Arduino.addVariable(parser_string,'String '+parser_string+';',true);

  Blockly.Arduino.addInclude('parser', '#include <ArduParser.h>');
  Blockly.Arduino.addDeclaration(parser_instance, 'arduParser ' + parser_instance + ';');

  return code;
};

Blockly.Arduino['arduparser_getnum'] = function(block) {
  var parser_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('parser_instance'), Blockly.Variables.NAME_TYPE);
  var parser_option = block.getFieldValue('parser_number');
  var parser_getnum = Blockly.Arduino.valueToCode(block, 'index', Blockly.Arduino.ORDER_ATOMIC);
  var code = parser_instance+'.'+parser_option+'('+parser_getnum+')';

  Blockly.Arduino.addInclude('parser', '#include <ArduParser.h>');
  Blockly.Arduino.addDeclaration(parser_instance, 'arduParser ' + parser_instance + ';');

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['arduparser_entry'] = function(block) {
  var parser_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('parser_instance'), Blockly.Variables.NAME_TYPE);
  var code = parser_instance+'.entry';

  Blockly.Arduino.addInclude('parser', '#include <ArduParser.h>');
  Blockly.Arduino.addDeclaration(parser_instance, 'arduParser ' + parser_instance + ';');

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['arduparser_setentry']= function(block) {
	var parser_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('parser_instance'), Blockly.Variables.NAME_TYPE);
	var parser_entry = Blockly.Arduino.valueToCode(block, 'parser_entry', Blockly.Arduino.ORDER_ATOMIC);
	var code = parser_instance+'.entry = '+parser_entry+';\n';

  Blockly.Arduino.addInclude('parser', '#include <ArduParser.h>');
  Blockly.Arduino.addDeclaration(parser_instance, 'arduParser ' + parser_instance + ';');

  return code;
};


Blockly.Arduino['arduparser_dataarray'] = function(block) {
  var parser_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('parser_instance'), Blockly.Variables.NAME_TYPE);
  var value_index = Blockly.Arduino.valueToCode(block, 'index', Blockly.Arduino.ORDER_ATOMIC);
  var code = parser_instance+'.data['+value_index+']';

  Blockly.Arduino.addInclude('parser', '#include <ArduParser.h>');
  Blockly.Arduino.addDeclaration(parser_instance, 'arduParser ' + parser_instance + ';');

  return [code, Blockly.Arduino.ORDER_NONE];
};