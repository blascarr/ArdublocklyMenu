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

Blockly.Arduino['tftcanvas_setup'] = function(block) {
	var dropdown_tft_model = block.getFieldValue('TFT_model');
	var colour_backg_color = block.getFieldValue('backg_color');
	var include = '';
	var init = '';
  
	if (dropdown_tft_model == "_ILI9341_"){
		init='tft.init();'
	}else if(dropdown_tft_model == "_SPFD5408_"){
    Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
		init+='uint16_t TFTID = tft.readID();\ntft.init(TFTID,\"'+colour_backg_color+'\");'
	}else if(dropdown_tft_model == "_ST7735H_"){
		Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
		init+='tft.init(2,\"'+colour_backg_color+'\");'
	}
	include += '#define '+dropdown_tft_model;

  Blockly.Arduino.addInclude('TFT', include);
  Blockly.Arduino.addInclude('TFTCanvas', '#include <TFTCanvas.h>');
	Blockly.Arduino.addDeclaration('TFTCanvas', 'TFTCanvas tft = TFTCanvas();');
	Blockly.Arduino.addSetup('TFTCanvas', init);

};

Blockly.Arduino['tftcanvas_grid'] = function(block) {
  var value_cols = Blockly.Arduino.valueToCode(block, 'cols', Blockly.Arduino.ORDER_ATOMIC);
  var value_rows = Blockly.Arduino.valueToCode(block, 'rows', Blockly.Arduino.ORDER_ATOMIC);
  var checkbox_name = block.getFieldValue('fill') == 'TRUE';
  var code = 'tft.canvas('+value_cols+','+value_rows+','+checkbox_name+');\n';

  Blockly.Arduino.addInclude('TFT', '#define _ILI9341_',false);
  Blockly.Arduino.addInclude('TFTCanvas', '#include <TFTCanvas.h>', false);
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>',false);
  Blockly.Arduino.addDeclaration('TFTCanvas', 'TFTCanvas tft = TFTCanvas();', false);

  return code;
};

Blockly.Arduino['tftcanvas_clean'] = function(block) {
  var code = 'tft.clean();\n';

  Blockly.Arduino.addInclude('TFT', '#define _ILI9341_',false);
  Blockly.Arduino.addInclude('TFTCanvas', '#include <TFTCanvas.h>', false);
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>',false);
  Blockly.Arduino.addDeclaration('TFTCanvas', 'TFTCanvas tft = TFTCanvas();', false);

  return code;
};

Blockly.Arduino['tftcanvas_drawline'] = function(block) {
  var value_x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
  var value_x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
  var value_y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
  var colour = '\"'+block.getFieldValue('colour')+'\"';
  var checkbox_fill = block.getFieldValue('fill') == 'TRUE';
  
  var code = 'tft.drawLine('+value_x0+','+value_y0+','+value_x1+','+value_y1+','+colour+');\n';

  Blockly.Arduino.addInclude('TFT', '#define _ILI9341_',false);
  Blockly.Arduino.addInclude('TFTCanvas', '#include <TFTCanvas.h>', false);
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>',false);
  Blockly.Arduino.addDeclaration('TFTCanvas', 'TFTCanvas tft = TFTCanvas();', false);

  return code;
};

Blockly.Arduino['tftcanvas_drawrect'] = function(block) {
  var value_x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
  var w = Blockly.Arduino.valueToCode(block, 'Width', Blockly.Arduino.ORDER_ATOMIC);
  var h = Blockly.Arduino.valueToCode(block, 'Height', Blockly.Arduino.ORDER_ATOMIC);
  var colour = '\"'+block.getFieldValue('colour')+'\"';
  var checkbox_fill = block.getFieldValue('fill') == 'TRUE';
  var fill = '';
    if (checkbox_fill){
  	fill = 'drawRect';
  }else{
  	fill = 'fillRect';
  }
  var code = 'tft.'+fill+'('+value_x0+', '+value_x1+', '+w+', '+h+', '+colour+');\n';

  Blockly.Arduino.addInclude('TFT', '#define _ILI9341_',false);
  Blockly.Arduino.addInclude('TFTCanvas', '#include <TFTCanvas.h>', false);
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>',false);
  Blockly.Arduino.addDeclaration('TFTCanvas', 'TFTCanvas tft = TFTCanvas();', false);

  return code;
};

Blockly.Arduino['tftcanvas_drawcircle'] = function(block) {
  var x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
  var y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
  var radius = Blockly.Arduino.valueToCode(block, 'Radius', Blockly.Arduino.ORDER_ATOMIC);
  var colour = '\"'+block.getFieldValue('colour')+'\"';
  var checkbox_fill = block.getFieldValue('fill') == 'TRUE';
  var fill = '';
  if (checkbox_fill){
  	fill = 'drawCircle';
  }else{
  	fill = 'fillCircle';
  }
  var code = 'tft.'+fill+'('+x0+','+y0+', '+radius+' ,'+colour+');\n';

  Blockly.Arduino.addInclude('TFT', '#define _ILI9341_',false);
  Blockly.Arduino.addInclude('TFTCanvas', '#include <TFTCanvas.h>', false);
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>',false);
  Blockly.Arduino.addDeclaration('TFTCanvas', 'TFTCanvas tft = TFTCanvas();', false);

  return code;
};

Blockly.Arduino['tftcanvas_drawtriangle'] = function(block) {
  var x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
  var y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
  var x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
  var y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
  var x2 = Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_ATOMIC);
  var y2 = Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_ATOMIC);
  var colour = '\"'+block.getFieldValue('colour')+'\"';
  var checkbox_fill = block.getFieldValue('fill') == 'TRUE';
  var fill = '';
  if (checkbox_fill){
  	fill = 'drawTriangle';
  }else{
  	fill = 'fillTriangle';
  }
  var code = 'tft.'+fill+'('+x0+','+y0+', '+x1+','+y1+','+x2+','+y2+','+colour+');\n';

  Blockly.Arduino.addInclude('TFT', '#define _ILI9341_',false);
  Blockly.Arduino.addInclude('TFTCanvas', '#include <TFTCanvas.h>', false);
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>',false);
  Blockly.Arduino.addDeclaration('TFTCanvas', 'TFTCanvas tft = TFTCanvas();', false);

  return code;
};

Blockly.Arduino['tftcanvas_getinfo'] = function(block) {
  var info = block.getFieldValue('WH');
  var getinfo = '';
  if (info == 'width'){
  	getinfo = 'width()';
  }else if (info == 'height'){
  	getinfo = 'height()';
  }
  var code = 'tft.'+getinfo;

  Blockly.Arduino.addInclude('TFT', '#define _ILI9341_',false);
  Blockly.Arduino.addInclude('TFTCanvas', '#include <TFTCanvas.h>', false);
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>',false);
  Blockly.Arduino.addDeclaration('TFTCanvas', 'TFTCanvas tft = TFTCanvas();', false);

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['tftcanvas_setcolor'] = function(block) {
  var colour = '\"'+block.getFieldValue('colour')+'\"';
  var code = 'tft.fillScreen('+colour+');\n';

  Blockly.Arduino.addInclude('TFT', '#define _ILI9341_',false);
  Blockly.Arduino.addInclude('TFTCanvas', '#include <TFTCanvas.h>', false);
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>',false);
  Blockly.Arduino.addDeclaration('TFTCanvas', 'TFTCanvas tft = TFTCanvas();', false);

  return code;
};

Blockly.Arduino['tftcanvas_rotation'] = function(block) {
  var rotation = block.getFieldValue('rotation');
  var code = 'tft.setRotation('+rotation+');\n';

  Blockly.Arduino.addInclude('TFT', '#define _ILI9341_',false);
  Blockly.Arduino.addInclude('TFTCanvas', '#include <TFTCanvas.h>', false);
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>',false);
  Blockly.Arduino.addDeclaration('TFTCanvas', 'TFTCanvas tft = TFTCanvas();', false);

  return code;
};

Blockly.Arduino['tftcanvas_print'] = function(block) {
  var checkbox_newline = block.getFieldValue('newline') == 'TRUE';
  var value_canvas_print = Blockly.Arduino.valueToCode(block, 'Canvas print', Blockly.Arduino.ORDER_ATOMIC);
  var print='';
  if (checkbox_newline){
  	print = 'print';
  }else{
  	print = 'println';
  }
  var code = 'tft.'+print+'('+value_canvas_print+');\n';

  Blockly.Arduino.addInclude('TFT', '#define _ILI9341_',false);
  Blockly.Arduino.addInclude('TFTCanvas', '#include <TFTCanvas.h>', false);
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>',false);
  Blockly.Arduino.addDeclaration('TFTCanvas', 'TFTCanvas tft = TFTCanvas();', false);

  return code;
};

Blockly.Arduino['tftcanvas_setcursor'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'tft.setCursor('+value_x+', '+value_y+');\n';

  Blockly.Arduino.addInclude('TFT', '#define _ILI9341_',false);
  Blockly.Arduino.addInclude('TFTCanvas', '#include <TFTCanvas.h>', false);
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>',false);
  Blockly.Arduino.addDeclaration('TFTCanvas', 'TFTCanvas tft = TFTCanvas();', false);

  return code;
};