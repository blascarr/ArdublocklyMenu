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

goog.provide('Blockly.Blocks.mvc');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/*
-------------------------------------------------------------------
-------------------------- MFRC522 BLOCKS -------------------------
-------------------------------------------------------------------
*/

Blockly.Blocks['define_uid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("UID")
        .appendField(
            new Blockly.FieldInstance("UID",
                                      "card",
                                      true, false, false),
            "uid_instance");
    this.appendValueInput("byte_1")
        .setCheck(["byte", "Text"])
        .appendField("byte[0]");
    this.appendValueInput("byte_2")
        .setCheck(["byte", "Text"])
        .appendField("byte[1]");
    this.appendValueInput("byte_3")
        .setCheck(["byte", "Text"])
        .appendField("byte[2]");
    this.appendValueInput("byte_4")
        .setCheck(["byte", "Text"])
        .appendField("byte[3]");
    this.setInputsInline(true);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/miguelbalboa/rfid");
  }
};

Blockly.Blocks['mfrc522_instance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MFRC522")
        .appendField(
            new Blockly.FieldInstance("MFRC522",
                                      "reader",
                                      true, false, false),
            "mfrc522_instance");
    this.appendValueInput("ss_pin")
        .setCheck("Number")
        .appendField("SS_PIN");
    this.appendValueInput("rst_pin")
        .setCheck("Number")
        .appendField("RST_PIN");
    this.setInputsInline(true);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/miguelbalboa/rfid");
  }
};

Blockly.Blocks['mfrc522_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MFRC522")
        .appendField(
            new Blockly.FieldInstance("MFRC522",
                                      "reader",
                                      true, false, false),
            "mfrc522_instance")
        .appendField("Init");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/miguelbalboa/rfid");
  }
};

Blockly.Blocks['mfrc522_get_uid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MFRC522")
        .appendField(
            new Blockly.FieldInstance("MFRC522",
                                      "reader",
                                      true, false, false),
            "mfrc522_instance")
        .appendField("get UID");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/miguelbalboa/rfid");
  }
};

Blockly.Blocks['mfrc522_compare_uid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MFRC522")
        .appendField(
            new Blockly.FieldInstance("MFRC522",
                                      "reader",
                                      false, false, false),
            "mfrc522_instance")
        .appendField("UID compare with")
        .appendField(
            new Blockly.FieldInstance("UID",
                                      "card",
                                      false, false, false),
            "uid_instance");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/miguelbalboa/rfid");
  }
};

Blockly.Blocks['mfrc522_iscard'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MFRC522")
        .appendField(
            new Blockly.FieldInstance("MFRC522",
                                      "reader",
                                      false, false, false),
            "mfrc522_instance")
        .appendField("Detect")
        .appendField(new Blockly.FieldDropdown([["is New Card","PICC_IsNewCardPresent()"], ["read_Card","PICC_ReadCardSerial()"]]), "is_card");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/miguelbalboa/rfid");
  }
};

Blockly.Blocks['mfrc522_halt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MFRC522")
        .appendField(
            new Blockly.FieldInstance("MFRC522",
                                      "reader",
                                      false, false, false),
            "mfrc522_instance")
        .appendField("Halt");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/miguelbalboa/rfid");
  }
};

Blockly.Blocks['mfrc522_dump'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Print")
        .appendField(
            new Blockly.FieldInstance("MFRC522",
                                      "reader",
                                      false, false, false),
            "mfrc522_instance")
        .appendField("Info");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/miguelbalboa/rfid");
  }
};