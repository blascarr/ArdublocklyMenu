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

Blockly.Blocks['esplora_slider'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("read Slider");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip('Read Slider from Arduino Esplora');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/EsploraReadSlider');
  }
};

Blockly.Blocks['esplora_lightsensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("read LightSensor");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip('Read Light Sensor from Arduino Esplora');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/EsploraReadLightSensor');
  }
};

Blockly.Blocks['esplora_temperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("read Temperature")
        .appendField(new Blockly.FieldDropdown([["Degrees","DEGREES_C"], ["Fahrenheit","DEGREES_F"]]), "scale");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip('Read Temperature Sensor from Arduino Esplora');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/EsploraReadTemperature');
  }
};

Blockly.Blocks['esplora_microphone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("read Microphone");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip('Read Microphone from Arduino Esplora');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/EsploraReadMicrophone');
  }
};

Blockly.Blocks['esplora_joystick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("read Joystick in")
        .appendField(new Blockly.FieldDropdown([["X Direction","X_AXIS"], ["Y Direction","Y_AXIS"]]), "dir")
        .appendField("with offset control")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "offset");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip('Read Joystick from Arduino Esplora');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/EsploraReadSlider');
  }
};

Blockly.Blocks['esplora_accelerometer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("read Accelerometer in")
        .appendField(new Blockly.FieldDropdown([["X Axis","X_AXIS"], ["Y Axis","Y_AXIS"], ["Z Axis","Z_AXIS"]]), "dir")
        .appendField("with gravity calibration")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "offset");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip('Read Accelerometer from Arduino Esplora');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/EsploraReadAccelerometer');
  }
};

Blockly.Blocks['esplora_tone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tone");
    this.appendValueInput("freq")
        .setCheck("Number")
        .appendField("with Frequency (Hz)");
    this.appendValueInput("duration")
        .setCheck("Number")
        .appendField("Duration");
    this.appendDummyInput()
        .appendField("ON/OFF")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "OFF");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('Tone function for Arduino Esplora');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/EsploraTone');
  }
};

Blockly.Blocks['esplora_rgb'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RGB LED");
    this.appendValueInput("R")
        .setCheck("Number")
        .appendField("R:");
    this.appendValueInput("G")
        .setCheck("Number")
        .appendField("G:");
    this.appendValueInput("B")
        .setCheck("Number")
        .appendField("B:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('RGB LED from Arduino Esplora');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/EsploraWriteRGB');
  }
};

Blockly.Blocks['esplora_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("read Button")
        .appendField(new Blockly.FieldDropdown([["UP","SWITCH_UP"], ["LEFT","SWITCH_LEFT"], ["RIGHT","SWITCH_RIGHT"], ["DOWN","SWITCH_DOWN"], ["JOYSTICK","SWITCH_JOYSTICK"]]), "button");
    this.setInputsInline(true);
    this.setOutput(true, Blockly.Types.BOOLEAN.output);
    this.setColour(180);
    this.setTooltip('Read Button from Arduino Esplora, including Joystick Button');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/EsploraReadButton');
  }
};

Blockly.Blocks['esplora_bt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Bluetooth Controller with Esplora")
        .appendField(new Blockly.FieldDropdown([["9600","9600"], ["19200","19200"], ["38400","38400"], ["57600","57600"], ["74800","74800"], ["115200","115200"], ["230400","230400"]]), "bps");
    this.setInputsInline(true);
    this.setColour(180);
    this.setTooltip('Bluetooth Controller with SoftwareSerial');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};