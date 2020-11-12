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
--------------------------- Kalman BLOCKS -------------------------
-------------------------------------------------------------------
*/

Blockly.Blocks['kalman_filter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Kalman :")
        .appendField(
            new Blockly.FieldInstance("KALMAN",
                                      "filter",
                                      true, false, false),
            "kalman_instance");
    this.appendValueInput("e_mean")
        .setCheck("Number");
    this.appendValueInput("e_est")
        .setCheck("Number");
    this.appendValueInput("q")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/denyssene/SimpleKalmanFilter");
  }
};

Blockly.Blocks['update_kalman'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance("KALMAN",
                                      "filter",
                                      false, false, false),
            "kalman_instance")
        .appendField("Estimate From");
    this.appendValueInput("estimate")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/denyssene/SimpleKalmanFilter");
  }
};