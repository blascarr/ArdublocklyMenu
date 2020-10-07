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

goog.provide('Blockly.Blocks.arduparser');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['arduparser_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ArduParser")
        .appendField(
            new Blockly.FieldInstance("PARSER",
                                      "DataParser",
                                      true, true, false),
            "parser_instance");
    this.appendValueInput("START_CMD")
        .setCheck("Text")
        .appendField("Start");
    this.appendValueInput("DELIMITER_CMD")
        .setCheck("Text")
        .appendField("Delimiter");
    this.appendValueInput("END_CMD")
        .setCheck("Text")
        .appendField("End");
    this.setInputsInline(true);
    this.setColour(15);
 this.setTooltip("Arduparser Definition Object");
 this.setHelpUrl("https://github.com/blascarr");
  }
};

Blockly.Blocks['arduparser_parser'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Parser String: ")
        .appendField(
            new Blockly.FieldInstance("PARSER",
                                      "DataParser",
                                      false, true, false),
            "parser_instance");
    this.appendValueInput("parser_string")
        .setCheck("String")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('parser String with specified format by ArduParser ');
    this.setHelpUrl('https://github.com/blascarr/Blockly');
  }
};

Blockly.Blocks['arduparser_getnum'] = {
  init: function() {
    this.appendValueInput("index")
        .setCheck("Number")
        .appendField(
            new Blockly.FieldInstance("PARSER",
                                      "DataParser",
                                      false, true, false),
            "parser_instance")
        .appendField(new Blockly.FieldDropdown([["integer","getInt"], ["float","getFloat"]]), "parser_number")
        .appendField("[");
    this.appendDummyInput()
        .appendField("]");
    this.setOutput(true, "Number");
    this.setColour(15);
    this.setTooltip('Get numeric value of parser String');
    this.setHelpUrl('https://github.com/blascarr/Blockly');
  }
};

Blockly.Blocks['arduparser_entry'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Parser Entry")
        .appendField(
            new Blockly.FieldInstance("PARSER",
                                      "DataParser",
                                      false, true, false),
            "parser_instance");
    this.setOutput(true, "Boolean");
    this.setColour(15);
    this.setTooltip('Read Parser status for reading interruption');
    this.setHelpUrl('https://github.com/blascarr/Blockly');
  }
};

Blockly.Blocks['arduparser_setentry'] = {
  init: function() {
    this.appendValueInput("parser_entry")
        .setCheck("Boolean")
        .appendField("Parser Entry")
        .appendField(
            new Blockly.FieldInstance("PARSER",
                                      "DataParser",
                                      false, true, false),
            "parser_instance");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('Parser status for reading interruption');
    this.setHelpUrl('https://github.com/blascarr/Blockly');
  }
};

Blockly.Blocks['arduparser_dataarray'] = {
  init: function() {
    this.appendValueInput("index")
        .setCheck("Number")
        .appendField("Array String")
        .appendField(
            new Blockly.FieldInstance("PARSER",
                                      "DataParser",
                                      false, true, false),
            "parser_instance")
        .appendField("[");
    this.appendDummyInput()
        .appendField("]");
    this.setOutput(true, "Text");
    this.setColour(15);
    this.setTooltip('Returns data parsed on String with format defined');
    this.setHelpUrl('https://github.com/blascarr/Blockly');
  }
};