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
goog.provide('Blockly.Arduino.mvc');
goog.require('Blockly.Arduino');
goog.require('Blockly.Blocks');

Blockly.Arduino['define_uid'] = function(block) {
	var text_card_uid = block.getFieldValue('uid_instance');
  var value_byte_1 = Blockly.Arduino.valueToCode(block, 'byte_1', Blockly.Arduino.ORDER_ATOMIC);
  var value_byte_2 = Blockly.Arduino.valueToCode(block, 'byte_2', Blockly.Arduino.ORDER_ATOMIC);
  var value_byte_3 = Blockly.Arduino.valueToCode(block, 'byte_3', Blockly.Arduino.ORDER_ATOMIC);
  var value_byte_4 = Blockly.Arduino.valueToCode(block, 'byte_4', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'byte '+text_card_uid+'[] = { '+value_byte_1.replaceAll('\"', '')+','+value_byte_2.replaceAll('\"', '')+', '+value_byte_3.replaceAll('\"', '')+', '+value_byte_4.replaceAll('\"', '')+' };\n';
  Blockly.Arduino.addDeclaration( text_card_uid, code+';');
  return code;
};

Blockly.Arduino['mfrc522_instance'] = function(block) {
  var text_mrfc522_instance = block.getFieldValue('mfrc522_instance');
  var value_ss_pin = Blockly.Arduino.valueToCode(block, 'ss_pin', Blockly.Arduino.ORDER_ATOMIC);
  var value_rst_pin = Blockly.Arduino.valueToCode(block, 'rst_pin', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  Blockly.Arduino.addInclude('MFRC522', '#include <MFRC522.h>');

  var code = 'MFRC522 '+text_mrfc522_instance+'('+value_ss_pin+','+value_rst_pin+')';
  Blockly.Arduino.addDeclaration( text_mrfc522_instance, code+';');
  //var init = 
  //return code;
};

Blockly.Arduino['mfrc522_init'] = function(block) {
  var text_mfrc522_instance = block.getFieldValue('mfrc522_instance');
  
  var code = text_mfrc522_instance+'.PCD_Init();\n';
  return code;
};

Blockly.Arduino['mfrc522_get_uid'] = function(block) {
  var text_mfrc522_instance = block.getFieldValue('mfrc522_instance');

  var code = text_mfrc522_instance+'.uid.uidByte';
  
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['mfrc522_compare_uid'] = function(block) {
  var text_mfrc522_instance = block.getFieldValue('mfrc522_instance');
  var text_uid_instance = block.getFieldValue('uid_instance');

  var code = '( (  memcmp ( '+text_mfrc522_instance+'.uid.uidByte, '+text_uid_instance+', sizeof(4*sizeof(byte)) ) == 0 ) ? true : false )';

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['mfrc522_iscard'] = function(block) {
  var text_mfrc522_instance = block.getFieldValue('mfrc522_instance');
  var dropdown_is_card = block.getFieldValue('is_card');

  var code = text_mfrc522_instance+'.'+dropdown_is_card;

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['mfrc522_halt'] = function(block) {
  var text_mfrc522_instance = block.getFieldValue('mfrc522_instance');
  var code = text_mfrc522_instance+'.PICC_HaltA();\n';
  return code;
};

Blockly.Arduino['mfrc522_dump'] = function(block) {
  var text_mfrc522_instance = block.getFieldValue('mfrc522_instance');
  var code = text_mfrc522_instance+'.PICC_DumpToSerial(&('+text_mfrc522_instance+'.uid));\n';
  return code;
};