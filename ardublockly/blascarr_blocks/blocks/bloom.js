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

goog.provide('Blockly.Blocks.bloom');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['bloom_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("")
        .appendField(
            new Blockly.FieldInstance("BLOOM",
                                      "bloom",
                                      true, true, false),
            "bloom_instance")
        .appendField(new Blockly.FieldDropdown([["SoftwareSerial","SoftwareSerial"], ["HardwareSerial","HardwareSerial"]]), "serial_option")
        .appendField(new Blockly.FieldDropdown([["Serial","Serial"], ["Serial1","Serial1"], ["Serial2","Serial2"], ["Serial3","Serial3"]]), "serial_n");
    this.appendValueInput("ss_instance")
        .setCheck("SoftwareSerial");
    this.setInputsInline(true);
    this.setColour(300);
    this.setTooltip('Bloom Object ');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['bloom_readconfig'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read BT config ")
        .appendField(
            new Blockly.FieldInstance("BLOOM",
                                      "bloom",
                                      false, true, false),
            "bloom_instance");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('Bluetooth configuration serial reading');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['bloom_setmasterpin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Bloom ")
        .appendField(
            new Blockly.FieldInstance("BLOOM",
                                      "bloom",
                                      false, true, false),
            "bloom_instance")
        .appendField("Master PIN");
    this.appendValueInput("master_pin")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('Set Master PIN for Bluetooth Control');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['bloom_setrole'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Role")
        .appendField(
            new Blockly.FieldInstance("BLOOM",
                                      "bloom",
                                      false, true, false),
            "bloom_instance");
    this.appendValueInput("bloom_role")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('Bluetooth Set Role Master or Slave');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['bloom_setname'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Name")
        .appendField(
            new Blockly.FieldInstance("BLOOM",
                                      "bloom",
                                      false, true, false),
            "bloom_instance");
    this.appendValueInput("bloom_name")
        .setCheck("Text");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('Bluetooth Set Name');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['bloom_setmode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Mode")
        .appendField(
            new Blockly.FieldInstance("BLOOM",
                                      "bloom",
                                      false, true, false),
            "bloom_instance");
    this.appendValueInput("bloom_mode")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('Bluetooth Set Mode');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['bloom_connect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Connect")
        .appendField(
            new Blockly.FieldInstance("BLOOM",
                                      "bloom",
                                      false, true, false),
            "bloom_instance");
    this.appendValueInput("bloom_pos")
        .setCheck("Number")
        .appendField("to Bloom [");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('Bluetooth connect to position number on initialized addresses table');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['bloom_addrconnect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Connect")
        .appendField(
            new Blockly.FieldInstance("BLOOM",
                                      "bloom",
                                      false, true, false),
            "bloom_instance");
    this.appendValueInput("bloom_addr")
        .setCheck("Text")
        .appendField("to Bloom ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['bloom_disconnect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Disconnect Bloom")
        .appendField(
            new Blockly.FieldInstance("BLOOM",
                                      "bloom",
                                      false, true, false),
            "bloom_instance");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('Bluetooth disconnect');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['bloom_insertbl'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Insert Bluetooth on List")
        .appendField(
            new Blockly.FieldInstance("BLOOM",
                                      "bloom",
                                      false, true, false),
            "bloom_instance");
    this.appendValueInput("bloom_addr")
        .setCheck("Text")
        .appendField("address:");
    this.appendValueInput("bloom_turn")
        .setCheck("Number")
        .appendField("on turn: ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('Insert Bluetooth address on list and specified order turn by turn');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['bloom_sendmsg2addr'] = {
  init: function() {
    this.appendValueInput("bloom_msg")
        .setCheck("Text")
        .appendField("Send Message:");
    this.appendDummyInput()
        .appendField("from:")
        .appendField(
            new Blockly.FieldInstance("BLOOM",
                                      "bloom",
                                      false, true, false),
            "bloom_instance");
    this.appendValueInput("bloom_addr")
        .setCheck("Text")
        .appendField("To Bloom:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['bloom_sendmsg'] = {
  init: function() {
    this.appendValueInput("bloom_msg")
        .setCheck("Text")
        .appendField("Send Message: ");
    this.appendDummyInput()
        .appendField("from")
        .appendField(
            new Blockly.FieldInstance("BLOOM",
                                      "bloom",
                                      false, true, false),
            "bloom_instance");
    this.appendValueInput("bloom_pos")
        .setCheck("Number")
        .appendField("to Bloom [");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('Send a message from Bluetooth to a specified position on Bluetooth table');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['bloom_setcmode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Bloom Set Mode")
        .appendField(
            new Blockly.FieldInstance("BLOOM",
                                      "bloom",
                                      false, true, false),
            "bloom_instance");
    this.appendValueInput("bloom_mode")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('Bluetooth Set CMode');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['bloom_status_event'] = {
  init: function() {
    this.appendStatementInput("action")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Fire event when")
        .appendField(
            new Blockly.FieldInstance("BLOOM",
                                      "bloom",
                                      false, true, false),
            "bloom_instance")
        .appendField("´s status")
        .appendField(new Blockly.FieldDropdown([["change","change"], ["is connected","connect"], ["is disconnected","disconnect"]]), "evt");
    this.setColour(300);
    this.setTooltip('Fire an event depending on status of the robot');
    this.setHelpUrl('https://github.com/blascarr/Blockly');
  }
};

Blockly.Blocks['bloom_connect_event'] = {
  init: function() {
    this.appendStatementInput("action")
        .setCheck(null)
        .appendField("Event fired when")
        .appendField(
            new Blockly.FieldInstance("BLOOM",
                                      "bloom",
                                      false, true, false),
            "bloom_instance")
        .appendField("is")
        .appendField(new Blockly.FieldDropdown([["Connected","connect"], ["Disconnected","disconnect"]]), "evt");
    this.appendValueInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("with ");
    this.setInputsInline(false);
    this.setColour(300);
    this.setTooltip('Event fired when Bluetooth connect or disconnect with other device');
    this.setHelpUrl('https://github.com/blascarr/Blockly');
  }
};