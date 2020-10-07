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

Blockly.Blocks['point2d_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Point2D")
        .appendField(
		    new Blockly.FieldInstance("POINT2D",
		                              "P2D",
		                              true, true, false),
		    "point2D_instance");
    this.appendValueInput("pX")
        .setCheck("Number")
        .appendField("X:");
    this.appendValueInput("pY")
        .setCheck("Number")
        .appendField("Y:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("Point2D ");
 this.setHelpUrl("https://github.com/blascarr/Robo2Duino");
  }
};

Blockly.Blocks['point2dcolor_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Point2D")
        .appendField(
		    new Blockly.FieldInstance("POINT2D",
		                              "P2D",
		                              true, true, false),
		    "point2D_instance");
    this.appendValueInput("pX")
        .setCheck("Number")
        .appendField("X:");
    this.appendValueInput("pY")
        .setCheck("Number")
        .appendField("Y:");
    this.appendDummyInput()
        .appendField("Color:")
        .appendField(new Blockly.FieldColour("#ffff00"), "color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("Point2D ");
 this.setHelpUrl("https://github.com/blascarr/Robo2Duino");
  }
};

Blockly.Blocks['pose2d_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pose2D")
        .appendField(
		    new Blockly.FieldInstance("POSE2D",
		                              "pose",
		                              true, true, false),
		    "pose2D_instance");
    this.appendValueInput("pX")
        .setCheck("Number")
        .appendField("X:");
    this.appendValueInput("pY")
        .setCheck("Number")
        .appendField("Y:");
    this.appendValueInput("angle")
        .setCheck("Number")
        .appendField("angle");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("Pose2D");
 this.setHelpUrl("https://github.com/blascarr/Robo2Duino");
  }
};

Blockly.Blocks['pose2d_inv'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pose2D")
        .appendField(
		    new Blockly.FieldInstance("POSE2D",
		                              "pose",
		                              false, true, false),
		    "pose2D_instance")
        .appendField("Inverse")
        .appendField(new Blockly.FieldDropdown([["X+","1"], ["X-","-1"]]), "mX")
        .appendField(new Blockly.FieldDropdown([["Y+","1"], ["Y-","-1"]]), "mY");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("Pose2D Inverse Axis");
 this.setHelpUrl("https://github.com/blascarr/Robo2Duino");
  }
};

Blockly.Blocks['point2d_inv'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Point2D")
        .appendField(
		    new Blockly.FieldInstance("POINT2D",
		                              "P2D",
		                              false, true, false),
		    "point2D_instance")
        .appendField("Axis Dir")
        .appendField(new Blockly.FieldDropdown([["X+","1"], ["X-","-1"]]), "mX")
        .appendField(new Blockly.FieldDropdown([["Y+","1"], ["Y-","-1"]]), "mY");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("Point2D Inverse Axis");
 this.setHelpUrl("https://github.com/blascarr/Robo2Duino");
  }
};

Blockly.Blocks['point2d_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Point2D")
        .appendField(
		    new Blockly.FieldInstance("POINT2D",
		                              "P2D",
		                              false, true, false),
		    "point2D_instance")
        .appendField("move")
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["backward","back"], ["left","left"], ["right","right"]]), "movement");
    this.appendValueInput("steps")
        .setCheck("Number")
        .appendField("Steps:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("Point2D Move");
 this.setHelpUrl("https://github.com/blascarr/Robo2Duino");
  }
};

Blockly.Blocks['point2d_4move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Point2D")
        .appendField(
		    new Blockly.FieldInstance("POINT2D",
		                              "P2D",
		                              false, true, false),
		    "point2D_instance")
        .appendField("move");
    this.appendValueInput("dX")
        .setCheck("Number")
        .appendField("Steps X:");
    this.appendValueInput("dY")
        .setCheck("Number")
        .appendField("Steps Y:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("Point2D Move in X Y");
 this.setHelpUrl("https://github.com/blascarr/Robo2Duino");
  }
};

Blockly.Blocks['distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Distance");
    this.appendValueInput("pi")
        .setCheck(["POINT2D", "POSE2D"])
        .appendField("From:");
    this.appendValueInput("pf")
        .setCheck(["POINT2D", "POSE2D"])
        .appendField("To:");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(150);
 this.setTooltip("Calculate Distance with point2D or Pose 2D");
 this.setHelpUrl("https://github.com/blascarr/Robo2Duino");
  }
};

Blockly.Blocks['point2d'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(
		    new Blockly.FieldInstance("POINT2D",
		                              "P2D",
		                              false, true, false),
		    "point2D_instance");
    this.setOutput(true, "POINT2D");
    this.setColour(150);
 this.setTooltip("Point2D Instance");
 this.setHelpUrl("https://github.com/blascarr/Robo2Duino");
  }
};

Blockly.Blocks['pose2d'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(
		    new Blockly.FieldInstance("POSE2D",
		                              "pose",
		                              false, true, false),
		    "pose2D_instance");
    this.setOutput(true, "POSE2D");
    this.setColour(150);
 this.setTooltip("Pose2D Instance");
 this.setHelpUrl("https://github.com/blascarr/Robo2Duino");
  }
};