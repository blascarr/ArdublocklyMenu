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

Blockly.Blocks['tftcanvas_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TFT Setup")
        .appendField(new Blockly.FieldDropdown([["ILI9341","_ILI9341_"], ["SPFD5408","_SPFD5408_"], ["ST7735","_ST7735H_"]]), "TFT_model")
        .appendField(new Blockly.FieldColour("#ffff00"), "backg_color");
    this.setColour(120);
    this.setTooltip('TFT Setup Canvas for ILI9341, SPFD5408 and ST7735 TFT Screens');
    this.setHelpUrl('https://github.com/blascarr/TFTCanvas/');
  }
};

Blockly.Blocks['tftcanvas_grid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Canvas");
    this.appendValueInput("cols")
        .setCheck("Number")
        .appendField("Columns");
    this.appendValueInput("rows")
        .setCheck("Number")
        .appendField("Rows");
    this.appendDummyInput()
        .appendField("Show Grid")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "fill");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Set Canvas Grid');
    this.setHelpUrl('https://github.com/blascarr/TFTCanvas/');
  }
};

Blockly.Blocks['tftcanvas_clean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clean Canvas");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Clean TFTCanvas');
    this.setHelpUrl('https://github.com/blascarr/TFTCanvas/');
  }
};

Blockly.Blocks['tftcanvas_rotation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TFT Orientation")
        .appendField(new Blockly.FieldDropdown([["UP","0"], ["LEFT","1"], ["DOWN","2"], ["RIGHT","3"]]), "rotation");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Set rotation for Canvas');
    this.setHelpUrl('https://github.com/adafruit/Adafruit-GFX-Library');
  }
};

Blockly.Blocks['tftcanvas_drawline'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw Line");
    this.appendValueInput("X0")
        .setCheck("Number")
        .appendField("X Origen:");
    this.appendValueInput("Y0")
        .setCheck("Number")
        .appendField("Y Origen:");
    this.appendValueInput("X1")
        .setCheck("Number")
        .appendField("X Fin:");
    this.appendValueInput("Y1")
        .setCheck("Number")
        .appendField("Y Fin:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#33cc00"), "colour")
        .appendField("Fill")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "fill");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Draw a Line on canvas defining the origin and the end point');
    this.setHelpUrl('https://github.com/adafruit/Adafruit-GFX-Library');
  }
};

Blockly.Blocks['tftcanvas_drawrect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw Rectangle");
    this.appendValueInput("X0")
        .setCheck("Number")
        .appendField("X Origen:");
    this.appendValueInput("Y0")
        .setCheck("Number")
        .appendField("Y Origen:");
    this.appendValueInput("Width")
        .setCheck("Number")
        .appendField("Width:");
    this.appendValueInput("Height")
        .setCheck("Number")
        .appendField("Height:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#33cc00"), "colour")
        .appendField("Fill")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "fill");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Draw a Rectangle on canvas defining the origin coordinates, width and height');
    this.setHelpUrl('https://github.com/adafruit/Adafruit-GFX-Library');
  }
};

Blockly.Blocks['tftcanvas_drawcircle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw Circle");
    this.appendValueInput("X0")
        .setCheck("Number")
        .appendField("X Origen:");
    this.appendValueInput("Y0")
        .setCheck("Number")
        .appendField("Y Origen:");
    this.appendValueInput("Radius")
        .setCheck("Number")
        .appendField("Radius:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#33cc00"), "colour")
        .appendField("Fill")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "fill");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Draw a Circle on canvas defining the origin coordinates and the radius');
    this.setHelpUrl('https://github.com/adafruit/Adafruit-GFX-Library');
  }
};

Blockly.Blocks['tftcanvas_drawtriangle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw Triangle");
    this.appendValueInput("X0")
        .setCheck("Number")
        .appendField("X0:");
    this.appendValueInput("Y0")
        .setCheck("Number")
        .appendField("Y0:");
    this.appendValueInput("X1")
        .setCheck("Number")
        .appendField("X1:");
    this.appendValueInput("Y1")
        .setCheck("Number")
        .appendField("Y1:");
    this.appendValueInput("X2")
        .setCheck("Number")
        .appendField("X2:");
    this.appendValueInput("Y2")
        .setCheck("Number")
        .appendField("Y2:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#33cc00"), "colour")
        .appendField("Fill")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "fill");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Draw a Triangle on canvas defining three points by coordinates');
    this.setHelpUrl('https://github.com/adafruit/Adafruit-GFX-Library');
  }
};

Blockly.Blocks['tftcanvas_getinfo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Canva´s")
        .appendField(new Blockly.FieldDropdown([["Width","width"], ["Heigt","height"]]), "WH");
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip('Get Info from Canvas');
    this.setHelpUrl('https://github.com/blascarr/');
  }
};

Blockly.Blocks['tftcanvas_setcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Background Color")
        .appendField(new Blockly.FieldColour("#ffff00"), "colour");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Set Background for canvas');
    this.setHelpUrl('https://github.com/adafruit/Adafruit-GFX-Library');
  }
};

Blockly.Blocks['tftcanvas_print'] = {
  init: function() {
    this.appendValueInput("Canvas print")
        .setCheck("Text")
        .appendField("Canvas print")
        .appendField("new line")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('TFT print String');
    this.setHelpUrl('https://github.com/adafruit/Adafruit-GFX-Library');
  }
};

Blockly.Blocks['tftcanvas_setcursor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set cursor");
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Set Cursor on Canvas');
    this.setHelpUrl('https://github.com/blascarr/TFTCanvas/');
  }
};