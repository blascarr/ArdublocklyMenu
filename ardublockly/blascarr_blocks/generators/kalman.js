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


Blockly.Arduino['kalman_filter'] = function(block) {
  var text_kalman_instance = block.getFieldValue('kalman_instance');
  var value_e_mean = Blockly.Arduino.valueToCode(block, 'e_mean', Blockly.Arduino.ORDER_ATOMIC);
  var value_e_est = Blockly.Arduino.valueToCode(block, 'e_est', Blockly.Arduino.ORDER_ATOMIC);
  var value_q = Blockly.Arduino.valueToCode(block, 'q', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.addInclude('Kalman', '#include <SimpleKalmanFilter.h>');

  var code = 'SimpleKalmanFilter '+text_kalman_instance+'('+value_e_mean+','+value_e_est+','+value_q+')';
  Blockly.Arduino.addDeclaration( text_kalman_instance, code+';');

  //var code = '...;\n';
  //return code;
};

Blockly.Arduino['update_kalman'] = function(block) {
  var text_kalman_instance = block.getFieldValue('kalman_instance');
  var value_estimate = Blockly.Arduino.valueToCode(block, 'estimate', Blockly.Arduino.ORDER_ATOMIC);

  var code = text_kalman_instance+'.updateEstimate('+value_estimate+');';

  return [code, Blockly.Arduino.ORDER_NONE];
};