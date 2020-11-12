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

goog.require('Blockly.Blocks');

Blockly.Arduino['op'] = function(block) {
  var value_op = Blockly.Arduino.valueToCode(block, 'OP', Blockly.Arduino.ORDER_ATOMIC);
  var value_menu_action = Blockly.Arduino.valueToCode(block, 'menu_action', Blockly.Arduino.ORDER_ATOMIC);
  value_menu_action = value_menu_action.replaceAll('(','').replaceAll(')','');

  var dropdown_event = block.getFieldValue('event');

  var code = '\t,OP ('+ value_op + ','+value_menu_action+','+dropdown_event+')\n';
  return code;
};

Blockly.Arduino['value'] = function(block) {
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  var value_pos = Blockly.Arduino.valueToCode(block, 'pos', Blockly.Arduino.ORDER_ATOMIC);
  var value_menu_action = Blockly.Arduino.valueToCode(block, 'menu_action', Blockly.Arduino.ORDER_ATOMIC);
  value_menu_action = value_menu_action.replaceAll('(','').replaceAll(')','');

  var dropdown_event = block.getFieldValue('event');
  var code = '\t,VALUE ('+ value_value + ','+value_pos+','+value_menu_action+','+dropdown_event+')\n';
  return code;
};

Blockly.Arduino['exit'] = function(block) {
  var value_exit = Blockly.Arduino.valueToCode(block, 'EXIT', Blockly.Arduino.ORDER_ATOMIC);
  var code = '\t,EXIT ('+ value_exit + ')\n';
  return code;
};

Blockly.Arduino['field'] = function(block) {
  var value_selector = Blockly.Arduino.valueToCode(block, 'selector', Blockly.Arduino.ORDER_ATOMIC);
  var value_field = Blockly.Arduino.valueToCode(block, 'FIELD', Blockly.Arduino.ORDER_ATOMIC);
  var value_min = Blockly.Arduino.valueToCode(block, 'MIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_max = Blockly.Arduino.valueToCode(block, 'MAX', Blockly.Arduino.ORDER_ATOMIC);
  var value_interval = Blockly.Arduino.valueToCode(block, 'Interval', Blockly.Arduino.ORDER_ATOMIC);
  var value_menu_action = Blockly.Arduino.valueToCode(block, 'menu_action', Blockly.Arduino.ORDER_ATOMIC);
  value_menu_action = value_menu_action.replaceAll('(','').replaceAll(')','');
  var dropdown_style = block.getFieldValue('style');
  var dropdown_event = block.getFieldValue('event');

  var code = '\t,FIELD ('+ value_selector + ','+value_field+',"%",'+value_min+','+value_max+','+value_interval+',1,'+value_menu_action+','+dropdown_event+','+dropdown_style+')\n';
  return code;
};

Blockly.Arduino['submenu'] = function(block) {
  var value_submenu = Blockly.Arduino.variableDB_.getName(block.getFieldValue('submenu_instance'), Blockly.Variables.NAME_TYPE);
  var code = '\t,SUBMENU('+value_submenu+')\n';
  return code;
};

Blockly.Arduino['select'] = function(block) {
  var value_selector = Blockly.Arduino.valueToCode(block, 'selector', Blockly.Arduino.ORDER_ATOMIC);
  var menu_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('submenu_instance'), Blockly.Variables.NAME_TYPE);
  var value_title = Blockly.Arduino.valueToCode(block, 'TITLE', Blockly.Arduino.ORDER_ATOMIC);
  var value_menu_action = Blockly.Arduino.valueToCode(block, 'menu_action', Blockly.Arduino.ORDER_ATOMIC);
  value_menu_action = value_menu_action.replaceAll('(','').replaceAll(')','');
  var dropdown_style = block.getFieldValue('style');
  var dropdown_event = block.getFieldValue('event');
  var statements_values = Blockly.Arduino.statementToCode(block, 'values');
  var code = 'SELECT ('+ value_selector + ','+menu_instance+','+value_title+','+value_menu_action+','+dropdown_event+','+dropdown_style+'\n'+statements_values+' )';
  Blockly.Arduino.addDeclaration(menu_instance, code+';');

  //return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['toggle'] = function(block) {
  var value_toggle = Blockly.Arduino.valueToCode(block, 'toggle', Blockly.Arduino.ORDER_ATOMIC);
  var menu_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('submenu_instance'), Blockly.Variables.NAME_TYPE);
  var value_title = Blockly.Arduino.valueToCode(block, 'TITLE', Blockly.Arduino.ORDER_ATOMIC);
  var value_menu_action = Blockly.Arduino.valueToCode(block, 'menu_action', Blockly.Arduino.ORDER_ATOMIC);
  value_menu_action = value_menu_action.replaceAll('(','').replaceAll(')','');
  var dropdown_style = block.getFieldValue('style');
  var dropdown_event = block.getFieldValue('event');
  var statements_values = Blockly.Arduino.statementToCode(block, 'values');

  var code = 'TOGGLE ('+ value_toggle + ','+menu_instance+','+value_title+','+value_menu_action+','+dropdown_event+','+dropdown_style+'\n'+statements_values+' )';
  Blockly.Arduino.addDeclaration(menu_instance, code+';');
  //return code;
};

Blockly.Arduino['choose'] = function(block) {
  var value_choose = Blockly.Arduino.valueToCode(block, 'choose', Blockly.Arduino.ORDER_ATOMIC);
  var menu_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('submenu_instance'), Blockly.Variables.NAME_TYPE);
  var value_title = Blockly.Arduino.valueToCode(block, 'TITLE', Blockly.Arduino.ORDER_ATOMIC);
  var value_menu_action = Blockly.Arduino.valueToCode(block, 'menu_action', Blockly.Arduino.ORDER_ATOMIC);
  value_menu_action = value_menu_action.replaceAll('(','').replaceAll(')','');
  var dropdown_event = block.getFieldValue('event');
  var dropdown_style = block.getFieldValue('style');
  var statements_values = Blockly.Arduino.statementToCode(block, 'values');
  
  var code = 'CHOOSE ('+ value_choose + ','+menu_instance+','+value_title+','+value_menu_action+','+dropdown_event+','+dropdown_style+'\n'+statements_values+' )';
  Blockly.Arduino.addDeclaration(menu_instance, code+';');
  //return code;
};

Blockly.Arduino['menu'] = function(block) {
  
  var submenu_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('submenu_instance'), Blockly.Variables.NAME_TYPE);
  var value_title = Blockly.Arduino.valueToCode(block, 'TITLE', Blockly.Arduino.ORDER_ATOMIC);
  var menu_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('submenu_instance'), Blockly.Variables.NAME_TYPE);
  var value_menu_action = Blockly.Arduino.valueToCode(block, 'menu_action', Blockly.Arduino.ORDER_ATOMIC);
  value_menu_action = value_menu_action.replaceAll('(','').replaceAll(')','');
  var dropdown_event = block.getFieldValue('event');
  var dropdown_style = block.getFieldValue('style');
  var statements_values = Blockly.Arduino.statementToCode(block, 'values');
  
  var code = 'MENU ('+ submenu_instance + ','+value_title+','+value_menu_action+','+dropdown_event+','+dropdown_style+'\n'+statements_values+' )';
  Blockly.Arduino.addDeclaration(menu_instance, code+';\n');
  //return code;
};

Blockly.Arduino['donothing'] = function(block) {
  var code = 'doNothing';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['nav_poll'] = function(block) {
  var navroot_instance = "navroot_MVC";
  var menu_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('submenu_instance'), Blockly.Variables.NAME_TYPE);
  var navroot = 'NAVROOT(nav,mainMenu,MAX_DEPTH,in,out)';
  Blockly.Arduino.addDeclaration( navroot_instance, navroot+';');

  var code = 'nav.poll();';
  return code;
};

/*
-------------------------------------------------------------------
-----------------------ARDUMENU FUNCTIONS ----------------------------
-------------------------------------------------------------------
*/

Blockly.Arduino['ardumenu_defnoreturn'] = function(block) {
  var funcName = Blockly.Arduino.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.Arduino.statementToCode(block, 'STACK');
  if (Blockly.Arduino.STATEMENT_PREFIX) {
    branch = Blockly.Arduino.prefixLines(
        Blockly.Arduino.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.Arduino.INDENT) + branch;
  }
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + block.id + '\'') + branch;
  }
  var returnValue = Blockly.Arduino.valueToCode(block, 'RETURN',
      Blockly.Arduino.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + ';\n';
  }

  // Get arguments with type
  /*var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] =
        Blockly.Arduino.getArduinoType_(block.getArgType(block.arguments_[x])) +
        ' ' +
        Blockly.Arduino.variableDB_.getName(block.arguments_[x],
            Blockly.Variables.NAME_TYPE);
  }*/

  // Get return type
  var returnType = Blockly.Types.NULL;
  if (block.getReturnType) {
    returnType = block.getReturnType();
  }
  returnType = Blockly.Arduino.getArduinoType_(returnType);

  // Construct code
  var code = 'result ' + ' ' + funcName + '( eventMask e,navNode& nav,prompt& item ) {\n' +
      branch + returnValue + '}';
  code = Blockly.Arduino.scrub_(block, code);
  Blockly.Arduino.userFunctions_[funcName] = code;
  return null;
};

Blockly.Arduino['ardumenu_callnoreturn'] = function(block) {
  var funcName = Blockly.Arduino.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  /*var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.Arduino.valueToCode(block, 'ARG' + x,
        Blockly.Arduino.ORDER_NONE) || 'null';
  }*/
  var code = funcName + '( eventMask e,navNode& nav,prompt& item );\n';
  return code;
};
