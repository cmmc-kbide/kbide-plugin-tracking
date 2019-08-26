Blockly.Blocks["ky_033_tracking_block"] = {
    init: function() {
      this.appendDummyInput().appendField("KY-033 TRACKING");
      this.appendDummyInput()
        .appendField("PIN")
        .appendField(new Blockly.FieldTextInput("0"), "KY_033_TRACKING_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_033_TRACKING_VALUE"),
          "KY_033_TRACKING_VALUE"
        );
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };