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

goog.provide('Blockly.Arduino.bloom');
goog.require('Blockly.Arduino');

Blockly.Arduino['bloom_setup'] = function(block) {
	var bloom_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('bloom_instance'), Blockly.Variables.NAME_TYPE);
	var serial_option = block.getFieldValue('serial_option');
	var serial_n = block.getFieldValue('serial_n');
	var ss_instance = Blockly.Arduino.valueToCode(block, 'ss_instance', Blockly.Arduino.ORDER_ATOMIC);
	var bloom_comm;
	if(serial_option == 'SoftwareSerial'){
		bloom_comm = ss_instance;
	}else if(serial_option == 'HardwareSerial'){
		bloom_comm = serial_n;
	}

	var code = bloom_instance+'...;\n';
	Blockly.Arduino.addInclude('bloom', '#include <Bloom.h>');
	Blockly.Arduino.addDeclaration(bloom_instance, 'Bloom ' + bloom_instance + '('+bloom_comm+');');
};

Blockly.Arduino['bloom_setmasterpin'] = function(block) {
	var bloom_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('bloom_instance'), Blockly.Variables.NAME_TYPE);
	var master_pin = Blockly.Arduino.valueToCode(block, 'master_pin', Blockly.Arduino.ORDER_ATOMIC);

	var code = bloom_instance+'.setPIN('+master_pin+');\n';

	Blockly.Arduino.addInclude('bloom', '#include <Bloom.h>');
	Blockly.Arduino.addDeclaration(bloom_instance, 'Bloom ' + bloom_instance + ';');

	return code;
};

Blockly.Arduino['bloom_readconfig'] = function(block) {
	var bloom_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('bloom_instance'), Blockly.Variables.NAME_TYPE);

	var code = bloom_instance+'.readConfig();\n';

	Blockly.Arduino.addInclude('bloom', '#include <Bloom.h>');
	Blockly.Arduino.addDeclaration(bloom_instance, 'Bloom ' + bloom_instance + ';');

	return code;
};


Blockly.Arduino['bloom_setrole'] = function(block) {
	var bloom_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('bloom_instance'), Blockly.Variables.NAME_TYPE);
	var bloom_role = Blockly.Arduino.valueToCode(block, 'bloom_role', Blockly.Arduino.ORDER_ATOMIC);

	Blockly.Arduino.addInclude('bloom', '#include <Bloom.h>');
	Blockly.Arduino.addDeclaration(bloom_instance, 'Bloom ' + bloom_instance + ';');

	if (bloom_role>0 && bloom_role <=2){
		var code = bloom_instance+'.setRole('+bloom_role+');\n';
		return code;
	}else{
		console.log("Warning: Only 0-2 values accepted");
		return '';
	}
	
};

Blockly.Arduino['bloom_connect'] = function(block) {
	var bloom_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('bloom_instance'), Blockly.Variables.NAME_TYPE);
	var bloom_pos = Blockly.Arduino.valueToCode(block, 'bloom_pos', Blockly.Arduino.ORDER_ATOMIC);

	var code = bloom_instance+'.connect('+bloom_instance+'._dev['+bloom_pos+'].addr);\n';

	Blockly.Arduino.addInclude('bloom', '#include <Bloom.h>');
	Blockly.Arduino.addDeclaration(bloom_instance, 'Bloom ' + bloom_instance + ';');

	return code;
};

Blockly.Arduino['bloom_addrconnect'] = function(block) {
	var bloom_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('bloom_instance'), Blockly.Variables.NAME_TYPE);
	var bloom_addr = Blockly.Arduino.valueToCode(block, 'bloom_addr', Blockly.Arduino.ORDER_ATOMIC);

	//Detect regular expression
	var code = bloom_instance+'.connect('+bloom_addr+');\n';

	Blockly.Arduino.addInclude('bloom', '#include <Bloom.h>');
	Blockly.Arduino.addDeclaration(bloom_instance, 'Bloom ' + bloom_instance + ';');

	return code;
};

Blockly.Arduino['bloom_disconnect'] = function(block) {
	var bloom_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('bloom_instance'), Blockly.Variables.NAME_TYPE);

	var code = bloom_instance+'.disconnect();\n';

	Blockly.Arduino.addInclude('bloom', '#include <Bloom.h>');
	Blockly.Arduino.addDeclaration(bloom_instance, 'Bloom ' + bloom_instance + ';');

	return code;
};

Blockly.Arduino['bloom_insertbl'] = function(block) {
	var bloom_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('bloom_instance'), Blockly.Variables.NAME_TYPE);
	var bloom_addr = Blockly.Arduino.valueToCode(block, 'bloom_addr', Blockly.Arduino.ORDER_ATOMIC);
	var bloom_turn = Blockly.Arduino.valueToCode(block, 'bloom_turn', Blockly.Arduino.ORDER_ATOMIC);

	var code = bloom_instance+'.insertBL('+bloom_addr+','+bloom_turn+');\n';

	Blockly.Arduino.addInclude('bloom', '#include <Bloom.h>');
	Blockly.Arduino.addDeclaration(bloom_instance, 'Bloom ' + bloom_instance + ';');

	return code;
};

Blockly.Arduino['bloom_sendmsg'] = function(block) {
	var bloom_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('bloom_instance'), Blockly.Variables.NAME_TYPE);
	var bloom_pos = Blockly.Arduino.valueToCode(block, 'bloom_pos', Blockly.Arduino.ORDER_ATOMIC);
	var bloom_msg = Blockly.Arduino.valueToCode(block, 'bloom_msg', Blockly.Arduino.ORDER_ATOMIC);

	var code = bloom_instance+'.sendMSG('+bloom_msg+','+bloom_pos+');\n';

	Blockly.Arduino.addInclude('bloom', '#include <Bloom.h>');
	Blockly.Arduino.addDeclaration(bloom_instance, 'Bloom ' + bloom_instance + ';');

	return code;
};

Blockly.Arduino['bloom_sendmsg2addr'] = function(block) {
	var bloom_msg = Blockly.Arduino.valueToCode(block, 'bloom_msg', Blockly.Arduino.ORDER_ATOMIC);
	var bloom_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('bloom_instance'), Blockly.Variables.NAME_TYPE);
	var bloom_addr = Blockly.Arduino.valueToCode(block, 'bloom_addr', Blockly.Arduino.ORDER_ATOMIC);

	var code = bloom_instance+'.sendMSG('+bloom_msg+','+bloom_addr+');\n';

	Blockly.Arduino.addInclude('bloom', '#include <Bloom.h>');
	Blockly.Arduino.addDeclaration(bloom_instance, 'Bloom ' + bloom_instance + ';');

  return code;
};

Blockly.Arduino['bloom_setmode'] = function(block) {
	var bloom_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('bloom_instance'), Blockly.Variables.NAME_TYPE);
	var bloom_mode = Blockly.Arduino.valueToCode(block, 'bloom_mode', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.addInclude('bloom', '#include <Bloom.h>');
	Blockly.Arduino.addDeclaration(bloom_instance, 'Bloom ' + bloom_instance + ';');

	if (bloom_mode>0 && bloom_mode <=2){
		var code = bloom_instance+'.setMode('+bloom_mode+');\n';
		return code;
	}else{
		console.log("Warning: Only 0-2 values accepted");
		return '';
	}
};

Blockly.Arduino['bloom_status_event'] = function(block) {
	var bloom_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('bloom_instance'), Blockly.Variables.NAME_TYPE);
	var dropdown_evt = block.getFieldValue('evt');
	var action = Blockly.Arduino.statementToCode(block, 'action');
	var code = '...;\n';

	Blockly.Arduino.addInclude('bloom', '#include <Bloom.h>');
	Blockly.Arduino.addDeclaration(bloom_instance, 'Bloom ' + bloom_instance + ';');

	//return code;
};

Blockly.Arduino['bloom_connect_event'] = function(block) {
	var bloom_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('bloom_instance'), Blockly.Variables.NAME_TYPE);
	var dropdown_evt = block.getFieldValue('evt');
	var action = Blockly.Arduino.statementToCode(block, 'action');
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = '...;\n';

	Blockly.Arduino.addInclude('bloom', '#include <Bloom.h>');
	Blockly.Arduino.addDeclaration(bloom_instance, 'Bloom ' + bloom_instance + ';');

	//return code;
};


/*
Blockly.Arduino['bloom_setname'] = function(block) {
  var bloom_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('bloom_instance'), Blockly.Variables.NAME_TYPE);
  var bloom_name = Blockly.Arduino.valueToCode(block, 'bloom_name', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = bloom_instance+'...;\n';
  return code;
};*/