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
goog.require('Blockly.Types');

/*
-------------------------------------------------------------------
-----------------------ARDUMENU BLOCKS ----------------------------
-------------------------------------------------------------------
*/

/** Common HSV hue for all blocks in this category. */
var ardumenu_HUE = 235;
var menu_HUE = 150;
var option_HUE = 195;

Blockly.Blocks['op'] = {
  init: function() {
    this.appendValueInput("OP")
        .setCheck("Text")
        .appendField("OP");
    this.appendValueInput("menu_action")
        .setCheck("menu")
        .appendField("action");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["noEvent","noEvent"], ["anyEvent","anyEvent"], ["enterEvent","enterEvent"], ["updateEvent","updateEvent"], ["exitEvent","exitEvent"], ["focusEvent","focusEvent"], ["blurEvent","blurEvent"]]), "event");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["FIELD", "SELECT", "TOGGLE", "CHOOSE", "OP", "SUBMENU", "EXIT"]);
    this.setNextStatement(true, ["FIELD", "SELECT", "TOGGLE", "CHOOSE", "OP", "SUBMENU", "EXIT"]);
    this.setColour( option_HUE );
 this.setTooltip("");
 this.setHelpUrl("https://github.com/neu-rah/ArduinoMenu/wiki/Menu-definition");
  }
};

Blockly.Blocks['value'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck("Text")
        .appendField("VALUE");
    this.appendValueInput("pos")
        .setCheck("Number")
        .appendField("pos");
    this.appendValueInput("menu_action")
        .setCheck("menu")
        .appendField("action");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["noEvent","noEvent"], ["anyEvent","anyEvent"], ["enterEvent","enterEvent"], ["updateEvent","updateEvent"], ["exitEvent","exitEvent"], ["focusEvent","focusEvent"], ["blurEvent","blurEvent"]]), "event");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["FIELD", "SELECT", "TOGGLE", "CHOOSE", "OP", "SUBMENU", "EXIT"]);
    this.setNextStatement(true, ["FIELD", "SELECT", "TOGGLE", "CHOOSE", "OP", "SUBMENU", "EXIT"]);
    this.setColour( option_HUE );
 this.setTooltip("");
 this.setHelpUrl("https://github.com/neu-rah/ArduinoMenu/wiki/Menu-definition");
  }
};

Blockly.Blocks['field'] = {
  init: function() {
    this.appendValueInput("selector")
        .setCheck("Number")
        .appendField("FIELD");
    this.appendValueInput("FIELD")
        .setCheck("Text")
        .appendField("variable");
    this.appendValueInput("MIN")
        .setCheck("Number")
        .appendField("MIN:");
    this.appendValueInput("MAX")
        .setCheck("Number")
        .appendField("MAX:");
    this.appendValueInput("Interval")
        .setCheck("Number")
        .appendField("INC:");
    this.appendValueInput("menu_action")
        .setCheck("menu")
        .appendField("ACTION");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["noStyle","noStyle "], ["wrapStyle","wrapStyle"]]), "style");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["noEvent","noEvent"], ["anyEvent","anyEvent"], ["enterEvent","enterEvent"], ["updateEvent","updateEvent"], ["exitEvent","exitEvent"], ["focusEvent","focusEvent"], ["blurEvent","blurEvent"]]), "event");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["FIELD", "SELECT", "TOGGLE", "CHOOSE", "OP", "SUBMENU", "EXIT"]);
    this.setNextStatement(true, ["FIELD", "SELECT", "TOGGLE", "CHOOSE", "OP", "SUBMENU", "EXIT"]);
    this.setColour( option_HUE );
 this.setTooltip("");
 this.setHelpUrl("https://github.com/neu-rah/ArduinoMenu/wiki/Menu-definition");
  }
};


Blockly.Blocks['select'] = {
  init: function() {
    this.appendValueInput("selector")
        .setCheck("Number")
        .appendField("SELECT");
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance("SUBMENU",
                                      "Submenu",
                                      true, false, false),
            "submenu_instance");
    this.appendValueInput("TITLE")
        .setCheck("Text")
        .appendField("TITLE");
    this.appendValueInput("menu_action")
        .setCheck("menu")
        .appendField("EVENT");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["noStyle","noStyle "], ["wrapStyle","wrapStyle"]]), "style");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["noEvent","noEvent"], ["anyEvent","anyEvent"], ["enterEvent","enterEvent"], ["updateEvent","updateEvent"], ["exitEvent","exitEvent"], ["focusEvent","focusEvent"], ["blurEvent","blurEvent"]]), "event");
    this.appendStatementInput("values");
        //.setCheck("value");
    this.setInputsInline(true);
    this.setColour( menu_HUE );
 this.setTooltip("");
 this.setHelpUrl("https://github.com/neu-rah/ArduinoMenu/wiki/Menu-definition");
  }
};

Blockly.Blocks['toggle'] = {
  init: function() {
    this.appendValueInput("toggle")
        .setCheck("Boolean")
        .appendField("TOGGLE");
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance("SUBMENU",
                                      "Submenu",
                                      true, false, false),
            "submenu_instance");
    this.appendValueInput("TITLE")
        .setCheck("Text")
        .appendField("TITLE");
    this.appendValueInput("menu_action")
        .setCheck("menu_action")
        .appendField("Event");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["noStyle","noStyle "], ["wrapStyle","wrapStyle"]]), "style");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["noEvent","noEvent"], ["anyEvent","anyEvent"], ["enterEvent","enterEvent"], ["updateEvent","updateEvent"], ["exitEvent","exitEvent"], ["focusEvent","focusEvent"], ["blurEvent","blurEvent"]]), "event");
    this.appendStatementInput("values");
        //.setCheck("VALUE");
    this.setInputsInline(true);
    this.setColour( menu_HUE );
 this.setTooltip("");
 this.setHelpUrl("https://github.com/neu-rah/ArduinoMenu/wiki/Menu-definition");
  }
};

Blockly.Blocks['choose'] = {
  init: function() {
    this.appendValueInput("choose")
        .setCheck("Number")
        .appendField("CHOOSE");
    this.appendValueInput("TITLE")
        .setCheck("Text")
        .appendField("TITLE");
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance("SUBMENU",
                                      "Submenu",
                                      true, false, false),
            "submenu_instance");
    this.appendValueInput("menu_action")
        .setCheck("menu_action")
        .appendField("Event");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["noEvent","noEvent"], ["anyEvent","anyEvent"], ["enterEvent","enterEvent"], ["updateEvent","updateEvent"], ["exitEvent","exitEvent"], ["focusEvent","focusEvent"], ["blurEvent","blurEvent"]]), "event");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["noStyle","noStyle "], ["wrapStyle","wrapStyle"]]), "style");
    this.appendStatementInput("values");
        //.setCheck("VALUE");
    this.setInputsInline(true);
    this.setColour( menu_HUE );
 this.setTooltip("");
 this.setHelpUrl("https://github.com/neu-rah/ArduinoMenu/wiki/Menu-definition");
  }
};

Blockly.Blocks['submenu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SUBMENU")
        .appendField(
            new Blockly.FieldInstance("SUBMENU",
                                      "Submenu",
                                      true, false, false),
            "submenu_instance");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["FIELD", "SELECT", "TOGGLE", "CHOOSE", "OP", "SUBMENU", "EXIT"]);
    this.setNextStatement(true, ["FIELD", "SELECT", "TOGGLE", "CHOOSE", "OP", "SUBMENU", "EXIT"]);
    this.setColour( option_HUE );
 this.setTooltip("");
 this.setHelpUrl("https://github.com/neu-rah/ArduinoMenu/wiki/Menu-definition");
  }
};

Blockly.Blocks['menu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MENU")
        .appendField(
            new Blockly.FieldInstance("SUBMENU",
                                      "mainMenu",
                                      true, false, false),
            "submenu_instance");
    this.appendValueInput("TITLE")
        .setCheck("Text")
        .appendField("TITLE");
    this.appendValueInput("menu_action")
        .setCheck("menu_action")
        .appendField("Event");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["noEvent","noEvent"], ["anyEvent","anyEvent"], ["enterEvent","enterEvent"], ["updateEvent","updateEvent"], ["exitEvent","exitEvent"], ["focusEvent","focusEvent"], ["blurEvent","blurEvent"]]), "event");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["noStyle","noStyle "], ["wrapStyle","wrapStyle"]]), "style");
    this.appendStatementInput("values")
        .setCheck(["VALUE", "OP", "FIELD", "SELECT", "CHOOSE", "TOGGLE", "SUBMENU", "EXIT"]);
    this.setInputsInline(true);
    this.setColour( menu_HUE );
 this.setTooltip("");
 this.setHelpUrl("https://github.com/neu-rah/ArduinoMenu/wiki/Menu-definition");
  }
};

Blockly.Blocks['donothing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("doNothing");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour( ardumenu_HUE );
 this.setTooltip("");
 this.setHelpUrl("https://github.com/neu-rah/ArduinoMenu/wiki/Menu-definition");
  }
};

Blockly.Blocks['nav_poll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Menu Update")
        .appendField(
            new Blockly.FieldInstance("SUBMENU",
                                      "mainMenu",
                                      false, false, false),
            "submenu_instance");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ardumenu_HUE);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/neu-rah/ArduinoMenu/wiki");
  }
};

Blockly.Blocks['exit'] = {
  init: function() {
    this.appendValueInput("EXIT")
        .setCheck("Text")
        .appendField( "EXIT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["FIELD", "SELECT", "TOGGLE", "CHOOSE", "OP", "SUBMENU", "EXIT"]);
    this.setNextStatement(true, ["FIELD", "SELECT", "TOGGLE", "CHOOSE", "OP", "SUBMENU", "EXIT"]);
    this.setColour( option_HUE );
 this.setTooltip("");
 this.setHelpUrl("https://github.com/neu-rah/ArduinoMenu/wiki/Menu-definition");
  }
};

/*
-------------------------------------------------------------------
-----------------------ARDUMENU FUNCTIONS ----------------------------
-------------------------------------------------------------------
*/

Blockly.Blocks['ardumenu_defnoreturn'] = {
  /**
   * Block for defining a procedure with no return value.
   * @this Blockly.Block
   */
  init: function() {
    var nameField = new Blockly.FieldTextInput(
        "menu_action",
        Blockly.Procedures.rename);
        nameField.setSpellcheck(false);
    this.appendDummyInput()
        .appendField("Menu Function")
        .appendField(nameField, 'NAME')
        .appendField('', 'PARAMS');

    /*this.setMutator(new Blockly.Mutator(['ardumenu_mutatorarg']));
    if (Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT) {
      this.setCommentText(Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT);
    }*/
    this.setColour(ardumenu_HUE);
    //this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
    //this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);
     this.arguments_ = [];
    //Funcion que añade el contenedor de la funcion
    this.setStatements_(true);
    this.statementConnection_ = null;
  },
  /**
   * Initialization of the block has completed, clean up anything that may be
   * inconsistent as a result of the XML loading.
   * @this Blockly.Block
   */
  validate: function () {
    var name = Blockly.Procedures.findLegalName(
        this.getFieldValue('NAME'), this);
    this.setFieldValue(name, 'NAME');
  },
  /**
   * Add or remove the statement block from this function definition.
   * @param {boolean} hasStatements True if a statement block is needed.
   * @this Blockly.Block
   */
  setStatements_: function(hasStatements) {
    if (this.hasStatements_ === hasStatements) {
      return;
    }
    if (hasStatements) {
      this.appendStatementInput('STACK')
          .appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO);
      if (this.getInput('RETURN')) {
        this.moveInputBefore('STACK', 'RETURN');
      }
    } else {
      this.removeInput('STACK', true);
    }
    this.hasStatements_ = hasStatements;
  },

  /**
   * Create XML to represent the argument inputs.
   * @param {=boolean} opt_paramIds If true include the IDs of the parameter
   *     quarks.  Used by Blockly.Procedures.mutateCallers for reconnection.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function(opt_paramIds) {
    var container = document.createElement('mutation');
    if (opt_paramIds) {
      container.setAttribute('name', this.getFieldValue('NAME'));
    }

    // Save whether the statement input is visible.
    if (!this.hasStatements_) {
      container.setAttribute('statements', 'false');
    }
    return container;
  },
  /**
   * Parse XML to restore the argument inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {

    Blockly.Procedures.mutateCallers(this);

    // Show or hide the statement input.
    this.setStatements_(xmlElement.getAttribute('statements') !== 'false');
  },
  /**
   * Dispose of any callers.
   * @this Blockly.Block
   */
  dispose: function() {
    var name = this.getFieldValue('NAME');
    Blockly.Procedures.disposeCallers(name, this.workspace);
    // Call parent's destructor.
    this.constructor.prototype.dispose.apply(this, arguments);
  },
  /**
   * Return the signature of this procedure definition.
   * @return {!Array} Tuple containing three elements:
   *     - the name of the defined procedure,
   *     - a list of all its arguments,
   *     - that it DOES NOT have a return value.
   * @this Blockly.Block
   */
  getProcedureDef: function() {
    return [this.getFieldValue('NAME'), this.arguments_, true];
  },

  /**
   * Add custom menu options to this block's context menu.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    // Add option to create caller.
    var option = {enabled: true};
    var name = this.getFieldValue('NAME');
    option.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace('%1', name);
    var xmlMutation = goog.dom.createDom('mutation');
    xmlMutation.setAttribute('name', name);
    
    var xmlBlock = goog.dom.createDom('block', null, xmlMutation);
    xmlBlock.setAttribute('type', this.callType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  },
  callType_: 'ardumenu_callreturn',
  /** @return {!string} This block does not define type, so 'undefined' */
  getVarType: function(varName) {
    return Blockly.Types.UNDEF;
  },
    getReturnType: function() {
    var returnType = Blockly.Types.NULL;
    var returnBlock = this.getInputTargetBlock('RETURN');
    if (returnBlock) {
      // First check if the block itself has a type already
      if (returnBlock.getBlockType) {
        returnType = returnBlock.getBlockType();
      } else {
        returnType = Blockly.Types.getChildBlockType(returnBlock);
      }
    }
    return returnType;
  }
};


Blockly.Blocks.ardumenu_callnoreturn={
	init:function(){
		this.appendDummyInput("TOPROW").appendField(this.id,"NAME");
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);
		this.setColour( ardumenu_HUE );
		//this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL);
		
		this.quarkConnections_={};
		this.quarkIds_=null
	},
	getProcedureCall:function(){
		return this.getFieldValue("NAME")
	},
	renameProcedure:function(a,b){
		Blockly.Names.equals(a,this.getProcedureCall())&&(this.setFieldValue(b,"NAME"),this.setTooltip((this.outputConnection?Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP:Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1",b)))
	},
	setProcedureParameters_:function(a,b){
		//var c,d=Blockly.Procedures.getDefinition(this.getProcedureCall(),this.workspace),e=d&&d.mutator&&d.mutator.isVisible();
   // e||(this.quarkConnections_={},this.quarkIds_=null);
    
	},
	
	domToMutation:function(a){
		var b=a.getAttribute("name");
		this.renameProcedure(this.getProcedureCall(),b);
		for(var b=[],c=[],d=0,e;e=a.childNodes[d];d++)"arg"==e.nodeName.toLowerCase()&&(b.push(e.getAttribute("name")),c.push(e.getAttribute("paramId")));this.setProcedureParameters_(b,c)
	},
	
	customContextMenu:function(a){
		var b={enabled:!0};
		b.text=Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
		var c=this.getProcedureCall(),d=this.workspace;
		/*b.callback=function(){
			var a=Blockly.Procedures.getDefinition(c,d);
			a&&a.select()
		};*/
		a.push(b)
	}
};

Blockly.Blocks.ardumenu_callreturn={
	init:function(){
		this.appendDummyInput("TOPROW").appendField("","NAME");
		this.setOutput(true, "menu");
		this.setColour(ardumenu_HUE);
		//this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL);
		
		this.quarkConnections_={};
		this.getBlockType();
		this.quarkIds_=null
	},
	getProcedureCall:Blockly.Blocks.ardumenu_callnoreturn.getProcedureCall,
	renameProcedure:Blockly.Blocks.ardumenu_callnoreturn.renameProcedure,
	setProcedureParameters_:Blockly.Blocks.ardumenu_callnoreturn.setProcedureParameters_,
	//updateShape_:Blockly.Blocks.ardumenu_callnoreturn.updateShape_,
	mutationToDom:Blockly.Blocks.ardumenu_callnoreturn.mutationToDom,
	domToMutation:Blockly.Blocks.ardumenu_callnoreturn.domToMutation,
	//renameVar:Blockly.Blocks.ardumenu_callnoreturn.renameVar,
	customContextMenu:Blockly.Blocks.ardumenu_callnoreturn.customContextMenu,
	getBlockType:function(){
		//return Blockly.Procedures.getDefinition(this.getProcedureCall(),this.workspace).getReturnType();
	}
};