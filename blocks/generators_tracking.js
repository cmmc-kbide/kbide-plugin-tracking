Blockly.JavaScript["ky_033_tracking_block"] = function(block) {
    var text_ky_033_tracking_pin = block.getFieldValue("KY_033_TRACKING_PIN");
    var variable_ky_033_tracking_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_033_TRACKING_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `

	#VARIABLE
	int KY_033_TRACKING_PIN=${text_ky_033_tracking_pin};
	#END

	#SETUP
	pinMode(KY_033_TRACKING_PIN,INPUT);
	#END

	${variable_ky_033_tracking_value}=digitalRead(KY_033_TRACKING_PIN);
    `;
    return code;
  };