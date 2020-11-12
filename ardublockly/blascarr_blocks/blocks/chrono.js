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
--------------------------- Chrono BLOCKS -------------------------
-------------------------------------------------------------------
*/

Blockly.Blocks['chrono_instance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Chrono")
        .appendField(
            new Blockly.FieldInstance("CHRONO",
                                      "tempo",
                                      true, false, false),
            "chrono_instance")
        .appendField("Resolution")
        .appendField(new Blockly.FieldDropdown([["ms",""], ["s","Chrono::SECONDS"], ["uS","Chrono::MICROS"]]), "resolution");
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/SofaPirate/Chrono");
  }
};

Blockly.Blocks['chrono_opt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Chrono")
        .appendField(
            new Blockly.FieldInstance("CHRONO",
                                      "tempo",
                                      false, false, false),
            "chrono_instance")
        .appendField(new Blockly.FieldDropdown([["start","start"], ["restart","restart"], ["resume","resume"], ["stop","stop"]]), "action");
    this.setColour(165);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/SofaPirate/Chrono");
  }
};

Blockly.Blocks['chrono_add'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Chrono")
        .appendField(
            new Blockly.FieldInstance("CHRONO",
                                      "tempo",
                                      false, false, false),
            "chrono_instance")
        .appendField(" add time");
    this.appendValueInput("extra_time")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/SofaPirate/Chrono");
  }
};

Blockly.Blocks['chrono_elapsed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Chrono")
        .appendField(
            new Blockly.FieldInstance("CHRONO",
                                      "tempo",
                                      false, false, false),
            "chrono_instance")
        .appendField("elapsed");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/SofaPirate/Chrono");
  }
};

Blockly.Blocks['chrono_run'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Chrono")
        .appendField(
            new Blockly.FieldInstance("CHRONO",
                                      "tempo",
                                      false, false, false),
            "chrono_instance")
        .appendField("is Running");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/SofaPirate/Chrono");
  }
};

Blockly.Blocks['chrono_haspassed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Chrono")
        .appendField(
            new Blockly.FieldInstance("CHRONO",
                                      "tempo",
                                      false, false, false),
            "chrono_instance")
        .appendField("has passed");
    this.appendValueInput("time")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/SofaPirate/Chrono");
  }
};