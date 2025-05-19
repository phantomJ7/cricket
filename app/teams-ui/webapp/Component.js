sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "crickettournament/teamsui/model/models"
], function (UIComponent, Device, models) {
  "use strict";

  return UIComponent.extend("crickettournament.teamsui.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

      // set the device model
      this.setModel(models.createDeviceModel(), "device");
    }
  });
});
