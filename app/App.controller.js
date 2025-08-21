sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
  "use strict";

  return Controller.extend("demo.walkthrough.controller.App", {
    onInit: function () {
      // JSON Model (Step 6–8)
      var oData = {
        recipient: {
          name: "World"
        }
      };
      var oModel = new JSONModel(oData);
      this.getView().setModel(oModel);

      // i18n Model (Step 9)
      var i18nModel = new ResourceModel({
        bundleName: "demo.walkthrough.i18n.i18n"
      });
      this.getView().setModel(i18nModel, "i18n");
    },

    onShowHello: function () {
      // Access i18n text
      var oBundle = this.getView().getModel("i18n").getResourceBundle();
      var sRecipient = this.getView().getModel().getProperty("/recipient/name");
      var sMsg = oBundle.getText("helloMsg", [sRecipient]);
      MessageToast.show(sMsg);
    }
  });
});
