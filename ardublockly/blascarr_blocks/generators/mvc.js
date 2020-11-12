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
goog.provide('Blockly.Arduino.mvc');
goog.require('Blockly.Arduino');
goog.require('Blockly.Blocks');

Blockly.Arduino['liquidcrystal'] = function(block) {
  var value_rs = Blockly.Arduino.valueToCode(block, 'RS', Blockly.Arduino.ORDER_ATOMIC);
  //var value_rw = Blockly.Arduino.valueToCode(block, 'RW', Blockly.Arduino.ORDER_ATOMIC);
  var value_en = Blockly.Arduino.valueToCode(block, 'EN', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin4 = Blockly.Arduino.valueToCode(block, 'PIN4', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin5 = Blockly.Arduino.valueToCode(block, 'PIN5', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin6 = Blockly.Arduino.valueToCode(block, 'PIN6', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin7 = Blockly.Arduino.valueToCode(block, 'PIN7', Blockly.Arduino.ORDER_ATOMIC);
  var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
  var value_cols = Blockly.Arduino.valueToCode(block, 'COLS', Blockly.Arduino.ORDER_ATOMIC);

  var lcd_instance = "lcd_MVC";
  var output_instance = "output_MVC";
  var navroot_instance = "navroot_MVC";
  var nav_poll = "nav_poll";

  Blockly.Arduino.addInclude('Menu', '#include <menu.h>');
  Blockly.Arduino.addInclude('LiquidCrystal', '#include <menuIO/liquidCrystalOut.h>');
  Blockly.Arduino.addInclude('namespace_Menu','using namespace Menu;');
  Blockly.Arduino.addInclude('MAX_DEPTH','#define MAX_DEPTH 2');

  var code = 'LiquidCrystal lcd('+value_rs+','+value_en+','+value_pin4+','+value_pin5+','+value_pin6+','+value_pin7+')';
  Blockly.Arduino.addDeclaration( lcd_instance, code+';');

  var menu_output = 'MENU_OUTPUTS(out, MAX_DEPTH\n'+
  '\t,LIQUIDCRYSTAL_OUT(lcd,{0,0,'+value_rows+','+value_cols+'})\n'+
  '\t,NONE\n'+
  ')';

  Blockly.Arduino.addDeclaration( output_instance, menu_output+';\n');

  var setupCode = 'lcd.begin('+value_rows+','+value_cols+');';
  Blockly.Arduino.addSetup(lcd_instance, setupCode, true);

  //Dependiente de las instancias de menu y entrada
  //var navroot_instance = "navroot_MVC";
  //var nav_poll = "nav_poll";

  //var navroot = 'NAVROOT(nav,mainMenu,MAX_DEPTH,in,out)';
  //Blockly.Arduino.addDeclaration( navroot_instance, navroot+';');

  //Blockly.Arduino.addLoopTrap(nav_poll, 'nav.poll();');
  //return code;
};

Blockly.Arduino['encoder'] = function(block) {

  var value_pina = Blockly.Arduino.valueToCode(block, 'PINA', Blockly.Arduino.ORDER_ATOMIC);
  var value_pinb = Blockly.Arduino.valueToCode(block, 'PINB', Blockly.Arduino.ORDER_ATOMIC);
  var value_press = Blockly.Arduino.valueToCode(block, 'PRESS', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.addInclude('Menu', '#include <menu.h>');
  Blockly.Arduino.addInclude('Encoder', '#include <menuIO/encoderIn.h>');
  Blockly.Arduino.addInclude('EncoderKeyIn', '#include <menuIO/keyIn.h>');
  Blockly.Arduino.addInclude('ChainStream', '#include <menuIO/chainStream.h>');
  Blockly.Arduino.addInclude('namespace_Menu','using namespace Menu;');

  var encoder_instance = "encoder_MVC";

  var code = 'encoderIn<'+value_pina+','+value_pinb+'> encoder;\n'+
    'encoderInStream<'+value_pina+','+value_pinb+'> encStream(encoder,4);\n'+
    'keyMap encBtn_map[]={{-'+value_press+',defaultNavCodes[enterCmd].ch}};\n'+
    'keyIn<1> encButton(encBtn_map);\n'+
    'menuIn* inputsList[]={&encStream,&encButton};\n'+
    'chainStream<2> in(inputsList)';
  Blockly.Arduino.addDeclaration( encoder_instance, code+';\n');
  var setupCode = 'encoder.begin();';

  Blockly.Arduino.addSetup(encoder_instance, setupCode, true);

  //Dependiente de las instancias de menu y entrada
  //var navroot_instance = "navroot_MVC";
  //var nav_poll = "nav_poll";

  //var navroot = 'NAVROOT(nav,mainMenu,MAX_DEPTH,in,out)';
  //Blockly.Arduino.addDeclaration( navroot_instance, navroot+';');

  //Blockly.Arduino.addLoopTrap(nav_poll, 'nav.poll();');
};

Blockly.Arduino['keyboard'] = function(block) {
  var value_f1 = Blockly.Arduino.valueToCode(block, 'f1', Blockly.Arduino.ORDER_ATOMIC);
  var value_f2 = Blockly.Arduino.valueToCode(block, 'f2', Blockly.Arduino.ORDER_ATOMIC);
  var value_f3 = Blockly.Arduino.valueToCode(block, 'f3', Blockly.Arduino.ORDER_ATOMIC);
  var value_f4 = Blockly.Arduino.valueToCode(block, 'f4', Blockly.Arduino.ORDER_ATOMIC);
  var value_c1 = Blockly.Arduino.valueToCode(block, 'c1', Blockly.Arduino.ORDER_ATOMIC);
  var value_c2 = Blockly.Arduino.valueToCode(block, 'c2', Blockly.Arduino.ORDER_ATOMIC);
  var value_c3 = Blockly.Arduino.valueToCode(block, 'c3', Blockly.Arduino.ORDER_ATOMIC);
  var value_c4 = Blockly.Arduino.valueToCode(block, 'c4', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  //return code;
};

Blockly.Arduino['progressbar_instance'] = function(block) {
  var text_bar_instance = block.getFieldValue('bar_instance');
  var value_row = Blockly.Arduino.valueToCode(block, 'row', Blockly.Arduino.ORDER_ATOMIC);
  var value_column = Blockly.Arduino.valueToCode(block, 'column', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addInclude('LcdProgressBar', '#include <LcdProgressBar.h>');

  var progressbar_instance = "LcdProgressBar";
  var code = 'LcdProgressBar '+text_bar_instance+'(&lcd, '+value_row+', '+value_column+')';
  Blockly.Arduino.addDeclaration( progressbar_instance, code+';');
  //return code;
};

Blockly.Arduino['progressbar_setminmax'] = function(block) {
  var text_bar_instance = block.getFieldValue('bar_instance');
  var dropdown_minmax = block.getFieldValue('minmax');
  var value_value = Blockly.Arduino.valueToCode(block, 'Value', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addInclude('LcdProgressBar', '#include <LcdProgressBar.h>');

  var code = text_bar_instance+'.'+dropdown_minmax+'('+value_value+');\n';
  return code;
};

Blockly.Arduino['progressbar_drawvalue'] = function(block) {
  var text_bar_instance = block.getFieldValue('bar_instance');
  var value_value = Blockly.Arduino.valueToCode(block, 'Value', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addInclude('LcdProgressBar', '#include <LcdProgressBar.h>');

  var code = text_bar_instance+'.draw( '+value_value+' );\n';
  return code;
};