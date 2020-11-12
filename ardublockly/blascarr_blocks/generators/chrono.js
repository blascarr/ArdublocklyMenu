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

Blockly.Arduino['chrono_instance'] = function(block) {
  var text_chrono_instance = block.getFieldValue('chrono_instance');
  var dropdown_resolution = block.getFieldValue('resolution');
  // TODO: Assemble Arduino into code variable.

  Blockly.Arduino.addInclude('Chrono', '#include <Chrono.h>');

  var code = 'Chrono '+text_chrono_instance;
  if(dropdown_resolution != ''){
  	code = code + '('+dropdown_resolution+')';
  }
  
  Blockly.Arduino.addDeclaration( text_chrono_instance, code+';');
  //var code = '...;\n';
  //return code;
};


Blockly.Arduino['chrono_opt'] = function(block) {
  var text_chrono_instance = block.getFieldValue('chrono_instance');
  var dropdown_action = block.getFieldValue('action');

  Blockly.Arduino.addInclude('Chrono', '#include <Chrono.h>');

  Blockly.Arduino.addDeclaration( text_chrono_instance, 'Chrono '+text_chrono_instance+';');

  var code = text_chrono_instance+'.'+dropdown_action+'();\n';
  return code;
};

Blockly.Arduino['chrono_add'] = function(block) {
  var text_chrono_instance = block.getFieldValue('chrono_instance');
  var value_extra_time = Blockly.Arduino.valueToCode(block, 'extra_time', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.addInclude('Chrono', '#include <Chrono.h>');

  Blockly.Arduino.addDeclaration( text_chrono_instance, 'Chrono '+text_chrono_instance+';');

  var code =  text_chrono_instance+'.add('+value_extra_time+');\n';
  return code;
};

Blockly.Arduino['chrono_elapsed'] = function(block) {
  var text_chrono_instance = block.getFieldValue('chrono_instance');
  
  Blockly.Arduino.addInclude('Chrono', '#include <Chrono.h>');

  Blockly.Arduino.addDeclaration( text_chrono_instance, 'Chrono '+text_chrono_instance+';');

  var code = text_chrono_instance+'.elapsed()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['chrono_run'] = function(block) {
  var text_chrono_instance = block.getFieldValue('chrono_instance');

  Blockly.Arduino.addInclude('Chrono', '#include <Chrono.h>');

  Blockly.Arduino.addDeclaration( text_chrono_instance, 'Chrono '+text_chrono_instance+';');

  var code = text_chrono_instance+'.isRunning()';

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['chrono_haspassed'] = function(block) {
  var text_chrono_instance = block.getFieldValue('chrono_instance');
  var value_time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.addInclude('Chrono', '#include <Chrono.h>');

  Blockly.Arduino.addDeclaration( text_chrono_instance, 'Chrono '+text_chrono_instance+';');

  var code = text_chrono_instance+'.hasPassed('+value_time+')';
  
  return [code, Blockly.Arduino.ORDER_NONE];
};