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

goog.provide('Blockly.Blocks.clumsee');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['clumsee_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clumsee ")
    this.appendValueInput("wheel_L")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Left Wheel");
    this.appendValueInput("wheel_R")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Right Wheel");
    this.setColour(90);
    this.setInputsInline(true);
    this.setTooltip('Clumsee Library Include');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['clumsee_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clumsee Move")
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["backward","backward"], ["left","left"], ["right","right"], ["leftD","leftD"], ["rightD","rightD"]]), "clumsee_move");
    this.appendValueInput("clumsee_vel")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" Vel:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('Clumsee Movements mapped between 0 - 100');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['clumsee_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('Clumsee Stop');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['clumsee_setwheels'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Wheels")
    this.appendValueInput("wheel_L")
        .setCheck("Number");
    this.appendValueInput("wheel_R")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('Clumsee Set Wheels');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['clumsee_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Angle")
        .appendField(new Blockly.FieldAngle(90), "angle");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('Clumsee angle definition');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['clumsee_dangle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Angle")
    this.appendValueInput("angle")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('Advanced Clumsee angle definition');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['clumsee_imuoffset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("IMU offset")
    this.appendValueInput("offset")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Offset Angle From North ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('Set an offset from North');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['define_clumsee_action'] = {
  init: function() {
    this.appendStatementInput("color_comb")
        .setCheck(null)
        .appendField("Front Color Sensor")
        .appendField(new Blockly.FieldColour("#ffffff"), "front_CS")
        .appendField("Back Color Sensor")
        .appendField(new Blockly.FieldColour("#000000"), "back_CS");
    this.setInputsInline(true);
    this.setColour(90);
    this.setTooltip('Defines the action on Clumsee for cases on color sensors ');
    this.setHelpUrl('https://github.com/blascarr/Blockly');
  }
};

/*
Blockly.Blocks['clumsee_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clumsee ")
        .appendField(
            new Blockly.FieldInstance("CLUMSEE",
                                      "clumsee",
                                      true, true, false),
            "clumsee_instance");
    this.appendValueInput("wheel_L")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Left Wheel");
    this.appendValueInput("wheel_R")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Right Wheel");
    this.setColour(90);
    this.setInputsInline(true);
    this.setTooltip('Clumsee Library Include');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['clumsee_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clumsee Move")
        .appendField(
            new Blockly.FieldInstance("CLUMSEE",
                                      "clumsee",
                                      false, true, false),
            "clumsee_instance")
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["backward","backward"], ["left","left"], ["right","right"], ["leftD","leftD"], ["rightD","rightD"]]), "clumsee_move");
    this.appendValueInput("clumsee_vel")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" Vel:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('Clumsee Movements mapped between 0 - 100');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['clumsee_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop")
        .appendField(
            new Blockly.FieldInstance("CLUMSEE",
                                      "clumsee",
                                      false, true, false),
            "clumsee_instance");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('Clumsee Stop');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['clumsee_setwheels'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Wheels")
        .appendField(
            new Blockly.FieldInstance("CLUMSEE",
                                      "clumsee",
                                      false, true, false),
            "clumsee_instance");
    this.appendValueInput("wheel_L")
        .setCheck("Number");
    this.appendValueInput("wheel_R")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('Clumsee Set Wheels');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['clumsee_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Angle")
        .appendField(
            new Blockly.FieldInstance("CLUMSEE",
                                      "clumsee",
                                      false, true, false),
            "clumsee_instance")
        .appendField(new Blockly.FieldAngle(90), "angle");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('Clumsee angle definition');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['clumsee_dangle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Angle")
        .appendField(
            new Blockly.FieldInstance("CLUMSEE",
                                      "clumsee",
                                      false, true, false),
            "clumsee_instance");
    this.appendValueInput("angle")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('Advanced Clumsee angle definition');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['clumsee_imuoffset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("IMU offset")
        .appendField(
            new Blockly.FieldInstance("CLUMSEE",
                                      "clumsee",
                                      false, true, false),
            "clumsee_instance");
    this.appendValueInput("offset")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Offset Angle From North ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('Set an offset from North');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};
*/