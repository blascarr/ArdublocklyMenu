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
--------------------------- MVC BLOCKS ----------------------------
-------------------------------------------------------------------
*/

/** Common HSV hue for all blocks in this category. */
var ardumvc_HUE = 75;
var lcd_HUE = 330;

Blockly.Blocks['liquidcrystal'] = {
  init: function() {
    this.appendValueInput("RS")
        .setCheck("Number")
        .appendField("LCD:")
        .appendField("RS");
    this.appendValueInput("EN")
        .setCheck("Number")
        .appendField("EN");
    this.appendValueInput("PIN4")
        .setCheck("Number")
        .appendField("PIN4");
    this.appendValueInput("PIN5")
        .setCheck("Number")
        .appendField("PIN5");
    this.appendValueInput("PIN6")
        .setCheck("Number")
        .appendField("PIN6");
    this.appendValueInput("PIN7")
        .setCheck("Number")
        .appendField("PIN7");
    this.appendValueInput("ROWS")
        .setCheck("Number")
        .appendField("ROWS");
    this.appendValueInput("COLS")
        .setCheck("Number")
        .appendField("COLS");
    this.setInputsInline(true);
    this.setColour(lcd_HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  callType_: 'initnav'
};

Blockly.Blocks['encoder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Encoder :");
    this.appendValueInput("PINA")
        .setCheck("Number")
        .appendField("PINA");
    this.appendValueInput("PINB")
        .setCheck("Number")
        .appendField("PINB");
    this.appendValueInput("PRESS")
        .setCheck("Number")
        .appendField("PRESS");
    this.setInputsInline(true);
    this.setColour(75);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.initnav={
	init:function(){
		console.log("init NAV");
	}
};

/*Blockly.Blocks['encoder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Encoder :")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.analogPins), 'PINA')
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.analogPins), 'PINB')
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.analogPins), 'PRESS');
    this.setInputsInline(true);
    this.setColour(ardumvc_HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
*/
Blockly.Blocks['keyboard'] = {
  init: function() {
    this.appendValueInput("f1")
        .setCheck("Number")
        .appendField("Keyboard :")
        .appendField("F1");
    this.appendValueInput("f2")
        .setCheck("Number")
        .appendField("F2");
    this.appendValueInput("f3")
        .setCheck("Number")
        .appendField("F3");
    this.appendValueInput("f4")
        .setCheck("Number")
        .appendField("F4");
    this.appendValueInput("c1")
        .setCheck("Number")
        .appendField("C1");
    this.appendValueInput("c2")
        .setCheck("Number")
        .appendField("C2");
    this.appendValueInput("c3")
        .setCheck("Number")
        .appendField("C3");
    this.appendValueInput("c4")
        .setCheck("Number")
        .appendField("C4");
    this.setInputsInline(true);
    this.setColour(ardumvc_HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['progressbar_instance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance("ProgressBar",
                                      "bar_instance",
                                      true, false, false),
            "bar_instance")
        .appendField("in row");
    this.appendValueInput("row")
        .setCheck("Number");
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField("with");
    this.appendDummyInput()
        .appendField("columns");
    this.setInputsInline(true);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['progressbar_setminmax'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance("ProgressBar",
                                      "bar_instance",
                                      true, false, false),
            "bar_instance")
        .appendField("set")
        .appendField(new Blockly.FieldDropdown([ ["setMaxValue","setMaxValue"],["setMinValue","setMinValue"] ]), "minmax");
    this.appendValueInput("Value")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/wloche/LcdProgressBar/blob/master/src/LcdProgressBar.h");
  }
};

Blockly.Blocks['progressbar_drawvalue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance("ProgressBar",
                                      "bar_instance",
                                      true, false, false),
            "bar_instance")
        .appendField("draw");
    this.appendValueInput("Value")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/wloche/LcdProgressBar/blob/master/src/LcdProgressBar.h");
  }
};