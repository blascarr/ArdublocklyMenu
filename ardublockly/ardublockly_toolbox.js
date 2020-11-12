/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

Ardublockly.TOOLBOX_XML =
'<xml>' +
'  <sep></sep>' +
'  <category id="catInputOutput" name="Input/Output">' +
'    <block type="set_digital_output">'+
'      <value name="pin">' +
'        <shadow type="math_number">' +
'          <field name="NUM">10</field>' +
'        </shadow>' +
'      </value>'+
'      <value name="value">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="read_digital_input">'+
'      <value name="pin">' +
'        <shadow type="math_number">' +
'          <field name="NUM">10</field>' +
'        </shadow>' +
'      </value>'+
'	 </block>' +
'    <block type="set_analog_output">'+
'      <value name="pin">' +
'        <shadow type="math_number">' +
'          <field name="NUM">10</field>' +
'        </shadow>' +
'      </value>'+
'      <value name="value">' +
'        <shadow type="math_number">' +
'          <field name="NUM">100</field>' +
'        </shadow>' +
'      </value>'+
'	 </block>' +
'    <block type="read_analog_input">'+
'      <value name="pin">' +
'        <shadow type="math_number">' +
'          <field name="NUM">10</field>' +
'        </shadow>' +
'      </value>'+
'	 </block>' +
/*
'    <block type="io_digitalwrite">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_digitalread"></block>' +
*/
/*
'    <block type="io_builtin_led">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
*/
/*
'    <block type="io_analogwrite"></block>' +
'    <block type="io_analogread"></block>' +

'    <block type="io_pulsein">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'    </block>' +
*/
'    <block type="io_highlow"></block>' +
'    <block type="io_pulsetimeout">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'      <value name="TIMEOUT">' +
'        <shadow type="math_number">' +
'          <field name="NUM">100</field>' +
'        </shadow>' +
'      </value>'+
'    </block>' +
'    <block type="attach_interrupt"></block>' +
'    <block type="attach_interruptpin"></block>' +
'    <block type="routine_setup"></block>' +
'    <block type="attach_routine"></block>' +
'    <block type="en_interrupt"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catVariables" name="Variables">' +
'    <block type="variables_get"></block>' +
'    <block type="variables_set"></block>' +
'    <block type="variables_set">' +
'      <value name="VALUE">' +
'        <block type="variables_set_type"></block>' +
'      </value>' +
'    </block>' +
'    <block type="variables_set_type"></block>' +
'    <block type="volatile_block"></block>' +
'    <block type="time_delay">' +
'      <value name="DELAY_TIME_MILI">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_millis"></block>' +
'    <block type="set_interval">' +
'      <value name="time">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="set_timeevent">'+
'      <value name="time">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
'    <block type="set_event">'+
'      <value name="input">' +
'		<block type="read_digital_input" >'+
'			<value name="pin">'+
'              <block type="math_number">'+
'                <field name="NUM">10</field>'+
'              </block>'+
'			</value>' +
'	 	</block>' +
'      </value>' +
'      <value name="var">' +
'			<block type="variables_get" >'+
'                <field name="VAR">item</field>'+
'			</block>' +
'      </value>' +
'	 </block>' +
'    <block type="time_delaymicros">' +
'      <value name="DELAY_TIME_MICRO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_micros"></block>' +
'    <block type="break"></block>' +
'    <block type="return"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catFunctions" name="Functions" custom="PROCEDURE"></category>' +
'  <category id="catMVC" name="MVC">' +
'  <category id="catMVCIO" name="LCD Encoder">' +
'	<block type="liquidcrystal">'+
'      <value name="RS">' +
'        <block type="math_number">' +
'          <field name="NUM">2</field>' +
'        </block>' +
'      </value>' +
'      <value name="EN">' +
'        <block type="math_number">' +
'          <field name="NUM">3</field>' +
'        </block>' +
'      </value>' +
'      <value name="PIN4">' +
'        <block type="math_number">' +
'          <field name="NUM">4</field>' +
'        </block>' +
'      </value>' +
'      <value name="PIN5">' +
'        <block type="math_number">' +
'          <field name="NUM">5</field>' +
'        </block>' +
'      </value>' +
'      <value name="PIN6">' +
'        <block type="math_number">' +
'          <field name="NUM">6</field>' +
'        </block>' +
'      </value>' +
'      <value name="PIN7">' +
'        <block type="math_number">' +
'          <field name="NUM">7</field>' +
'        </block>' +
'      </value>' +
'      <value name="ROWS">' +
'        <block type="math_number">' +
'          <field name="NUM">20</field>' +
'        </block>' +
'      </value>' +
'      <value name="COLS">' +
'        <block type="math_number">' +
'          <field name="NUM">4</field>' +
'        </block>' +
'      </value>' +
'	</block>' +
'	<block type="encoder">'+
'      <value name="PINA">' +
'        <block type="math_number">' +
'          <field name="NUM">8</field>' +
'        </block>' +
'      </value>' +
'      <value name="PINB">' +
'        <block type="math_number">' +
'          <field name="NUM">9</field>' +
'        </block>' +
'      </value>' +
'      <value name="PRESS">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'	</block>' +
'	<block type="progressbar_instance">'+
'      <value name="row">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="column">' +
'        <block type="math_number">' +
'          <field name="NUM">20</field>' +
'        </block>' +
'      </value>' +
'	</block>' +
'	<block type="progressbar_setminmax">'+
'      <value name="Value">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'	</block>' +
'	<block type="progressbar_drawvalue">'+
'      <value name="Value">' +
'        <block type="math_number">' +
'          <field name="NUM">35</field>' +
'        </block>' +
'      </value>' +
'	</block>' +
'	<block type="keyboard">'+
'      <value name="f1">' +
'        <block type="math_number">' +
'          <field name="NUM">9</field>' +
'        </block>' +
'      </value>' +
'      <value name="f2">' +
'        <block type="math_number">' +
'          <field name="NUM">2</field>' +
'        </block>' +
'      </value>' +
'      <value name="f3">' +
'        <block type="math_number">' +
'          <field name="NUM">3</field>' +
'        </block>' +
'      </value>' +
'      <value name="f4">' +
'        <block type="math_number">' +
'          <field name="NUM">4</field>' +
'        </block>' +
'      </value>' +
'      <value name="c1">' +
'        <block type="math_number">' +
'          <field name="NUM">5</field>' +
'        </block>' +
'      </value>' +
'      <value name="c2">' +
'        <block type="math_number">' +
'          <field name="NUM">6</field>' +
'        </block>' +
'      </value>' +
'      <value name="c3">' +
'        <block type="math_number">' +
'          <field name="NUM">7</field>' +
'        </block>' +
'      </value>' +
'      <value name="c4">' +
'        <block type="math_number">' +
'          <field name="NUM">8</field>' +
'        </block>' +
'      </value>' +
'	</block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catArduinoMenu" name="ArduinoMenu">' +
'    <block type="menu">'+
'      <value name="TITLE">' +
'        	<block type="text">'+
'				<field name="TEXT">Main_Menu</field>'+
'			</block>' +
'      </value>' +
'      <value name="menu_action">' +
'        <block type="donothing"></block>' +
'      </value>' +
'		<statement name="values">'+
'			<block type="op">'+
'        <field name="event">noEvent</field>'+
'        <value name="OP">'+
'          <block type="text">'+
'            <field name="TEXT">Option 1</field>'+
'          </block>'+
'        </value>'+
'        <value name="menu_action">'+
'          <block type="donothing"></block>'+
'        </value>'+
'        <next>'+
'        <block type="exit">'+
'            <value name="EXIT">'+
'              <block type="text">'+
'                <field name="TEXT">&lt;Back</field>'+
'          </block>'+
'            </value>'+
'          </block>'+
'        </next>'+
'      </block>'+
'      </statement>'+
'	</block>' +
'    <block type="nav_poll"></block>' +
'    <block type="ardumenu_defnoreturn"></block>' +
'    <block type="op">'+
'      <value name="OP">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="menu_action">' +
'        <block type="donothing"></block>' +
'      </value>' +
'	</block>' +
'    <block type="value">'+
'      <value name="value">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="pos">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="menu_action">' +
'        <block type="donothing"></block>' +
'      </value>' +
'	</block>' +
'	<block type="exit">'+
'      <value name="EXIT">' +
'        <block type="text"></block>' +
'      </value>' +
'	</block>' +
'    <block type="field">'+
'			<value name="selector">'+
'				<block type="variables_get">'+
'					<field name="VAR">item</field>'+
'				</block>'+
'			</value>'+
'      <value name="FIELD">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="MIN">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="MAX">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'      <value name="Interval">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="menu_action">' +
'        <block type="donothing"></block>' +
'      </value>' +
'	</block>' +
'		<block type="select">'+
'			<value name="selector">'+
'				<block type="variables_get">'+
'					<field name="VAR">item</field>'+
'				</block>'+
'			</value>'+
'      <value name="TITLE">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="menu_action">' +
'        <block type="donothing"></block>' +
'      </value>' +
'		<statement name="values">'+
'      		<block type="value">'+
'        		<field name="event">noEvent</field>'+
'        		<value name="value">'+
'          			<block type="text">'+
'            			<field name="TEXT">First Value</field>'+
'          			</block>'+
'        		</value>'+
'        		<value name="pos">'+
'          			<block type="math_number">'+
'            			<field name="NUM">1</field>'+
'          			</block>'+
'          		</value>'+
'        		<value name="menu_action">'+
'          			<block type="donothing"></block>'+
'        		</value>'+
'        		<next>'+
'          		<block type="value">'+
'            		<field name="event">noEvent</field>'+
'            		<value name="value">'+
'              			<block type="text">'+
'                			<field name="TEXT">Second Value</field>'+
'              			</block>'+
'           		</value>'+
'            		<value name="pos">'+
'              			<block type="math_number">'+
'                			<field name="NUM">2</field>'+
'              			</block>'+
'            		</value>'+
'            		<value name="menu_action">'+
'              			<block type="donothing"></block>'+
'            		</value>'+
'          		</block>'+
'        	</next>'+
'      	</block>'+
'	</statement>'+
'	</block>' +
'    <block type="toggle">'+
'			<value name="toggle">'+
'				<block type="variables_get">'+
'					<field name="VAR">item</field>'+
'				</block>'+
'			</value>'+
'      <value name="TITLE">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="menu_action">' +
'        <block type="donothing"></block>' +
'      </value>' +
'		<statement name="values">'+
'      		<block type="value">'+
'        		<field name="event">noEvent</field>'+
'        		<value name="value">'+
'          			<block type="text">'+
'            			<field name="TEXT">First Value</field>'+
'          			</block>'+
'        		</value>'+
'        		<value name="pos">'+
'          			<block type="math_number">'+
'            			<field name="NUM">1</field>'+
'          			</block>'+
'          		</value>'+
'        		<value name="menu_action">'+
'          			<block type="donothing"></block>'+
'        		</value>'+
'        		<next>'+
'          		<block type="value">'+
'            		<field name="event">noEvent</field>'+
'            		<value name="value">'+
'              			<block type="text">'+
'                			<field name="TEXT">Second Value</field>'+
'              			</block>'+
'           		</value>'+
'            		<value name="pos">'+
'              			<block type="math_number">'+
'                			<field name="NUM">2</field>'+
'              			</block>'+
'            		</value>'+
'            		<value name="menu_action">'+
'              			<block type="donothing"></block>'+
'            		</value>'+
'          		</block>'+
'        	</next>'+
'      	</block>'+
'	</statement>'+
'	</block>' +
'    <block type="choose">'+
'			<value name="choose">'+
'				<block type="variables_get">'+
'					<field name="VAR">item</field>'+
'				</block>'+
'			</value>'+
'      <value name="TITLE">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="menu_action">' +
'        <block type="donothing"></block>' +
'      </value>' +
'		<statement name="values">'+
'      		<block type="value">'+
'        		<field name="event">noEvent</field>'+
'        		<value name="value">'+
'          			<block type="text">'+
'            			<field name="TEXT">First Value</field>'+
'          			</block>'+
'        		</value>'+
'        		<value name="pos">'+
'          			<block type="math_number">'+
'            			<field name="NUM">1</field>'+
'          			</block>'+
'          		</value>'+
'        		<value name="menu_action">'+
'          			<block type="donothing"></block>'+
'        		</value>'+
'        		<next>'+
'          		<block type="value">'+
'            		<field name="event">noEvent</field>'+
'            		<value name="value">'+
'              			<block type="text">'+
'                			<field name="TEXT">Second Value</field>'+
'              			</block>'+
'           		</value>'+
'            		<value name="pos">'+
'              			<block type="math_number">'+
'                			<field name="NUM">2</field>'+
'              			</block>'+
'            		</value>'+
'            		<value name="menu_action">'+
'              			<block type="donothing"></block>'+
'            		</value>'+
'          		</block>'+
'        	</next>'+
'      	</block>'+
'		</statement>'+
'		</block>' +
'    	<block type="submenu">'+
'		</block>' +
'    	<block type="donothing"></block>' +
' 	</category>' +
'  <sep></sep>' +
' </category>' +
'  <sep></sep>' +
'  <category id="catComms" name="Comms">' +
'    <block type="serial_setup"></block>' +
'    <block type="serial_print">'+
'      <value name="CONTENT">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="ss_setup">'+
'      <value name="RX">' +
'        <block type="math_number">' +
'          <field name="NUM">2</field>' +
'        </block>' +
'      </value>' +
'      <value name="TX">' +
'        <block type="math_number">' +
'          <field name="NUM">3</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
'    <block type="ss_available"></block>' +
'    <block type="readsoftwareserial"></block>' +
'    <block type="ss_print">'+
'      <value name="CONTENT">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="serial_available"></block>' +
'    <block type="readserial"></block>' +
'    <block type="read_untilsoftwareserial"></block>'+
'    <block type="softwareserial_settimeout">'+
'      <value name="timeout">' +
'        <block type="math_number">' +
'          <field name="NUM">200</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
'    <block type="readuntilsoftwareserial">'+
'      <value name="TEXT">' +
'        <block type="text">n</block>' +
'      </value>' +
'	 </block>' +
'    <block type="peekserial"></block>' +
'    <block type="peeksoftwareserial"></block>' +
/*'    <block type="text_prompt_ext">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +*/
//'    <block type="spi_setup"></block>' +
//'    <block type="spi_transfer"></block>' +
//'    <block type="spi_transfer_return"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMotors" name="Motors">' +
'    <block type="servo_attach">' +
'      <value name="servoPIN">' +
'        <block type="math_number">' +
'          <field name="NUM">5</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="servo_detach">' +' </block>' +
'    <block type="servo_move">' +
'      <value name="angle">' +
'        <block type="math_number">' +
'          <field name="NUM">90</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
/*'    <block type="servo_write">' +
'      <value name="SERVO_ANGLE">' +
'        <block type="math_number">' +
'          <field name="NUM">90</field>' +
'        </block>' +
'      </value>' +
'    </block>' +*/
'    <block type="servo_read"></block>' +
'    <block type="stepper_config">' +
'      <field name="STEPPER_NUMBER_OF_PINS">2</field>' +
'      <field name="STEPPER_PIN1">1</field>' +
'      <field name="STEPPER_PIN2">2</field>' +
'      <value name="STEPPER_STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'      <value name="STEPPER_SPEED">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="stepper_step">' +
'      <value name="STEPPER_STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <sep></sep>' +
'  <category id="catLogic" name="Logic">' +
'    <block type="controls_if"></block>' +
'    <block type="logic_compare"></block>' +
'    <block type="logic_operation"></block>' +
'    <block type="logic_negate"></block>' +
'    <block type="logic_boolean"></block>' +
'    <block type="logic_null"></block>' +
'    <block type="logic_ternary"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catLoops" name="Loops">' +
'    <block type="controls_repeat_ext">' +
'      <value name="TIMES">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_whileUntil"></block>' +
'    <block type="controls_for">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="BY">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_flow_statements"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMath" name="Math">' +
'    <block type="math_number"></block>' +
'    <block type="math_arithmetic"></block>' +
'    <block type="math_single"></block>' +
'    <block type="math_trig"></block>' +
'    <block type="math_atan2">'+
'      <value name="cat_op">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="cat_ady">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
'    <block type="math_constant"></block>' +
'    <block type="math_number_property"></block>' +
'    <block type="math_change">' +
'      <value name="DELTA">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_round"></block>' +
'    <block type="math_modulo"></block>' +
'    <block type="math_constrain">' +
'      <value name="LOW">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="HIGH">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_int">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_float"></block>' +
'    <block type="base_map">'+
'      <value name="BMIN">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="BMAX">' +
'        <block type="math_number">' +
'          <field name="NUM">1024</field>' +
'        </block>' +
'      </value>' +
'      <value name="DMIN">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="DMAX">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catText" name="Text">' +
'    <block type="text"></block>' +
'    <block type="char_type"></block>' +
'    <block type="text_join"></block>' +
'    <block type="text_append">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="text_length"></block>' +
'    <block type="text_isEmpty"></block>' +
'    <block type="string_contains">'+
'      <value name="substring">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="string_to"></block>' +
'    <block type="string_tochararray"></block>' +
'    <block type="string_indexof">'+
'      <value name="substr">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="string_substring">'+
'      <value name="from">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="to">' +
'        <block type="math_number">' +
'          <field name="NUM">4</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
'    <block type="string_replace">'+
'      <value name="substr">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="replace">' +
'        <block type="text"></block>' +
'      </value>' +

'	 </block>' +
'    <block type="string_remove">'+
'      <value name="substr">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="count">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
'    <block type="string_trim">'+
'      <value name="str_input">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
//'    <!--block type="text_trim"></block Need to update block -->' +
//'    <!--block type="text_print"></block Part of the serial comms -->' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catControl" name="Car Control">' +
'    <block type="smartcar_definepins">'+
'      <value name="M11">' +
'        <block type="math_number">' +
'          <field name="NUM">5</field>' +
'        </block>' +
'      </value>' +
'      <value name="M12">' +
'        <block type="math_number">' +
'          <field name="NUM">6</field>' +
'        </block>' +
'      </value>' +
'      <value name="M21">' +
'        <block type="math_number">' +
'          <field name="NUM">9</field>' +
'        </block>' +
'      </value>' +
'      <value name="M22">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'	</block>' +
'    <block type="smartcar_ultrasound">'+
'      <value name="echo">' +
'        <block type="math_number">' +
'          <field name="NUM">7</field>' +
'        </block>' +
'      </value>' +
'      <value name="trigger">' +
'        <block type="math_number">' +
'          <field name="NUM">8</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
'    <block type="smartcar_l298n">'+
'      <value name="M11">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="M12">' +
'        <block type="math_number">' +
'          <field name="NUM">255</field>' +
'        </block>' +
'      </value>' +
'      <value name="M21">' +
'        <block type="math_number">' +
'          <field name="NUM">255</field>' +
'        </block>' +
'      </value>' +
'      <value name="M22">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'	</block>' +
'    <block type="io_tone">' +
'      <field name="TONEPIN">0</field>' +
'      <value name="FREQUENCY">' +
'        <shadow type="math_number">' +
'          <field name="NUM">220</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="io_notone"></block>' +
'	</category>'+

'  <sep></sep>' +
'  <category id="catColor" name="TCS3200">' +
'    <block type="tcs3200_basicsetup">' +
'		<value name="S2">' +
'			<block type="math_number">' +
'				<field name="NUM">8</field>' +
'			</block>' +
'		</value>' +
'		<value name="S3">' +
'			<block type="math_number">' +
'				<field name="NUM">9</field>' +
'			</block>' +
'		</value>' +
'		<value name="OUT">' +
'			<block type="math_number">' +
'				<field name="NUM">10</field>' +
'			</block>' +
'		</value>' +
'	 </block>' +
'    <block type="tcs3200_setupall">'+
'		<value name="S2">' +
'			<block type="math_number">' +
'				<field name="NUM">8</field>' +
'			</block>' +
'		</value>' +
'		<value name="S3">' +
'			<block type="math_number">' +
'				<field name="NUM">9</field>' +
'			</block>' +
'		</value>' +
'		<value name="OUT">' +
'			<block type="math_number">' +
'				<field name="NUM">10</field>' +
'			</block>' +
'		</value>' +
'		<value name="S0">' +
'			<block type="math_number">' +
'				<field name="NUM">11</field>' +
'			</block>' +
'		</value>' +
'		<value name="S1">' +
'			<block type="math_number">' +
'				<field name="NUM">12</field>' +
'			</block>' +
'		</value>' +
'		<value name="LED">' +
'			<block type="math_number">' +
'				<field name="NUM">13</field>' +
'			</block>' +
'		</value>' +
'	 </block>' +
'    <block type="tcs3200_calibration">'+
'		<value name="EEPROM_CAL">' +
'			<block type="math_number">' +
'				<field name="NUM">0</field>' +
'			</block>' +
'		</value>' +
'	</block>' +
'    <block type="tcs3200_loadcalibration">'+
'		<value name="eeprom_calibration">' +
'			<block type="math_number">' +
'				<field name="NUM">0</field>' +
'			</block>' +
'		</value>' +
'	</block>' +
'	 <block type="tcs3200_colorchange"></block>' +
'	 <block type="tcs3200_readcalibration"></block>' +
'    <block type="tcs3200_read"></block>' +
'    <block type="tcs3200_readint"></block>' +
'    <block type="tcs3200_readcolor"></block>' +
'	</category>' +
'  <sep></sep>' +
'  <category id="catIMU" name="IMU">' +
'    <block type="madgwick_setup">'+
'		<value name="madgwick_freq">' +
'			<block type="math_number">' +
'				<field name="NUM">25</field>' +
'			</block>' +
'		</value>' +
'	 </block>' +
'    <block type="imu_setup"></block>' +
'    <block type="imu_update"></block>' +
'    <block type="imu_update_rpy"></block>' +
'    <block type="imu_orientation"></block>' +
'    <block type="imu_read_data"></block>' +
'    <block type="imu_rawdata"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catDFPlayer" name="MP3">' +
'    <block type="dfplayer_instance"></block>' +
'    <block type="dfplayer_play">'+
'		<value name="NAME">' +
'			<block type="math_number">' +
'				<field name="NUM">1</field>' +
'			</block>' +
'		</value>' +
'	 </block>' +
'    <block type="dfplayer_opt"></block>' +
'    <block type="dfplayer_volume">'+
'		<value name="volume">' +
'			<block type="math_number">' +
'				<field name="NUM">1</field>' +
'			</block>' +
'		</value>' +
'	 </block>' +
'    <block type="dfplayer_available"></block>' +
'    <block type="dfplayer_checkstatus"></block>' +
'    <block type="dfplayer_exist"></block>' +
'    <block type="dfplayer_filenumber"></block>' +
'    <block type="dfplayer_filecounts"></block>' +
'    <block type="dfplayer_playmp3folder">'+
'		<value name="song">' +
'			<block type="math_number">' +
'				<field name="NUM">1</field>' +
'			</block>' +
'		</value>' +
'		<value name="folder">' +
'			<block type="math_number">' +
'				<field name="NUM">1</field>' +
'			</block>' +
'		</value>' +
'	 </block>' +
'    <block type="dfplayer_filecountsinfolder">'+
'		<value name="folder">' +
'			<block type="math_number">' +
'				<field name="NUM">1</field>' +
'			</block>' +
'		</value>' +
'	 </block>' +
'	</category>' +
'  <sep></sep>' +
'  <category id="catMemory" name="Memory">' +
'  <category id="catSD" name="SD">' +
'    <block type="sd_setup"></block>' +
'    <block type="sd_open">'+
'      <value name="DIR">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="sd_exists">'+
'      <value name="DIR">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="sd_actions">'+
'      <value name="DIR">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="file_instance"></block>' +
'    <block type="file_info"></block>' +
'    <block type="file_read"></block>' +
'    <block type="file_write">'+
'      <value name="data">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="file_seek">'+
'      <value name="data">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
' 	 </block>' +
'    <block type="file_close">'+
'	 </block>' +
'    <block type="file_readbmp">'+
'      <value name="data">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="file_readbuffer">'+
'      <value name="length">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
'  </category>' +
'  <category id="catEEPROM" name="EEPROM">' +
'  </category>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catSignalControl" name="Signal Control">' +
'  <category id="catPID" name="PID">' +
'    <block type="pid_setup"></block>' +
'    <block type="pid_compute"></block>' +
'    <block type="pid_settuning"></block>' +
'    <block type="pid_gettuning"></block>' +
'    <block type="pid_setlimits"></block>' +
'    <block type="pid_settime"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catKalman" name="Kalman">' +
'    <block type="kalman_filter">'+
'      <value name="e_mean">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'      <value name="e_est">' +
'        <block type="math_number">' +
'          <field name="NUM">50</field>' +
'        </block>' +
'      </value>' +
'      <value name="q">' +
'        <block type="math_number">' +
'          <field name="NUM">0.1</field>' +
'        </block>' +
'      </value>' +
'	</block>' +
'    <block type="update_kalman">'+
'	</block>' +
'  </category>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catChrono" name="Time">' +
'    <block type="chrono_instance">'+
'	</block>' +
'    <block type="chrono_opt">'+
'	</block>' +
'    <block type="chrono_add">'+
'      <value name="extra_time">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'	</block>' +
'    <block type="chrono_elapsed">'+
'	</block>' +
'    <block type="chrono_haspassed">'+
'      <value name="time">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'	</block>' +
'    <block type="chrono_run">'+
'	</block>' +

'	<block type="controls_if" id="F-G?Tn5|;4C^*it4y3:R">'+
'		<value name="IF0">'+
'			<block type="chrono_haspassed" >'+
'				<field name="chrono_instance">tempo</field>'+
'				<value name="time">'+
'					<block type="variables_get" >'+
'						<field name="VAR">time_elapsed</field>'+
'					</block>'+
'				</value>'+
'			</block>'+
'		</value>'+
'		<statement name="DO0">'+
'			<block type="variables_set" >'+
'				<field name="VAR">time_elapsed</field>'+
'				<value name="VALUE">'+
'				<block type="math_arithmetic" >'+
'					<field name="OP">ADD</field>'+
'					<value name="A">'+
'						<block type="variables_get" >'+
'						<field name="VAR">time_elapsed</field>'+
'						</block>'+
'					</value>'+
'					<value name="B">'+
'						<block type="math_number" >'+
'							<field name="NUM">1000</field>'+
'						</block>'+
'					</value>'+
'				</block>'+
'				</value>'+
'			</block>'+
'		</statement>'+
'	</block>'+
'  </category>' +
'  <sep></sep>' +
'  <category id="catNFC_RFID" name="NFC/RFID">' +
'  <category id="catNFC" name="NFC">' +
'    <block type="pn532_setup"></block>' +
'    <block type="pn532_uid"></block>' +
'    <block type="pn532_present"></block>' +
'    <block type="pn532_read">'+
'      <value name="keya">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="keyb">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="pn532_write">'+
'      <value name="msg">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="keya">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="keyb">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catRFID" name="RFID">' +
'    <block type="mfrc522_instance">'+
'      <value name="ss_pin">' +
'        <block type="math_number">' +
'          <field name="NUM">9</field>' +
'        </block>' +
'      </value>' +
'      <value name="rst_pin">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'	</block>' +
'    <block type="define_uid">'+
'    <field name="uid_instance">card</field>'+
'		<value name="byte_1">'+
'			<block type="text" >'+
'				<field name="TEXT">0x32</field>'+
'			</block>'+
'		</value>'+
'		<value name="byte_2">'+
'			<block type="text" >'+
'				<field name="TEXT">0x76</field>'+
'			</block>'+
'		</value>'+
'		<value name="byte_3">'+
'			<block type="text" >'+
'				<field name="TEXT">0x15</field>'+
'			</block>'+
'		</value>'+
'		<value name="byte_4">'+
'			<block type="text" >'+
'				<field name="TEXT">0x1B</field>'+
'			</block>'+
'		</value>'+
'	</block>' +
'    <block type="mfrc522_dump">'+
'	</block>' +
'	<block type="controls_if" >'+
'		<value name="IF0">'+
'		<block type="mfrc522_iscard" >'+
'			<field name="mfrc522_instance">reader</field>'+
'		</block>'+
'		</value>'+
'	</block>'+

'	<block type="controls_if" >'+
'		<value name="IF0">'+
'		<block type="mfrc522_compare_uid" >'+
'			<field name="mfrc522_instance">reader</field>'+
'			<field name="uid_instance">card</field>'+
'		</block>'+
'		</value>'+
'	</block>'+

'  </category>' +
'  </category>' +
'  <sep></sep>' +
/*
'  <category id="catEsplora" name="Esplora">' +
'    <block type="esplora_bt"></block>' +
'    <block type="esplora_rgb">'+
'		<value name="R">' +
'			<block type="math_number">' +
'				<field name="NUM">0</field>' +
'			</block>' +
'		</value>' +
'		<value name="G">' +
'			<block type="math_number">' +
'				<field name="NUM">0</field>' +
'			</block>' +
'		</value>' +
'		<value name="B">' +
'			<block type="math_number">' +
'				<field name="NUM">0</field>' +
'			</block>' +
'		</value>' +
'	 </block>' +
'    <block type="esplora_button"></block>' +
'    <block type="esplora_joystick"></block>' +
'    <block type="esplora_slider"></block>' +
'    <block type="esplora_tone">'+
'		<value name="freq">' +
'			<block type="math_number">' +
'				<field name="NUM">1000</field>' +
'			</block>' +
'		</value>' +
'		<value name="duration">' +
'			<block type="math_number">' +
'				<field name="NUM">1000</field>' +
'			</block>' +
'		</value>' +
'	 </block>' +
'    <block type="esplora_lightsensor"></block>' +
'    <block type="esplora_temperature"></block>' +
'    <block type="esplora_microphone"></block>' +
'    <block type="esplora_accelerometer"></block>' +
'  </category>' +
*/
'  <sep></sep>' +
'</xml>';
