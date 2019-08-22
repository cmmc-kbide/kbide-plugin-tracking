Blockly.Blocks['ky_033_tracking_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-033 TRACKING");
    this.appendValueInput("KY_033_TRACKING_PIN")
        .setCheck("Number")
        .appendField("PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};