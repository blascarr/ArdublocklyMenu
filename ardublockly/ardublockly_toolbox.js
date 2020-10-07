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
'  <category id="catParser" name="Parser">' +
'    <block type="arduparser_setup">'+
'      <value name="START_CMD">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="DELIMITER_CMD">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="END_CMD">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="arduparser_parser"></block>' +
'    <block type="arduparser_dataarray">'+
'		<value name="index">' +
'			<block type="math_number">' +
'				<field name="NUM">0</field>' +
'			</block>' +
'		</value>' +
'	 </block>' +
'    <block type="arduparser_getnum">'+
'		<value name="index">' +
'			<block type="math_number">' +
'				<field name="NUM">0</field>' +
'			</block>' +
'		</value>' +
'	 </block>' +
'    <block type="arduparser_entry"></block>' +
'    <block type="arduparser_setentry">'+
'		<value name="parser_entry">' +
'			<block type="io_highlow">' +

'			</block>' +
'		</value>' +
'	 </block>' +
'  </category>' +
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
'  <sep></sep>' +
'  <category id="catPID" name="PID">' +
'    <block type="pid_setup"></block>' +
'    <block type="pid_compute"></block>' +
'    <block type="pid_settuning"></block>' +
'    <block type="pid_gettuning"></block>' +
'    <block type="pid_setlimits"></block>' +
'    <block type="pid_settime"></block>' +
'  </category>' +
'  <sep></sep>' +
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
'  <sep></sep>' +
'</xml>';
