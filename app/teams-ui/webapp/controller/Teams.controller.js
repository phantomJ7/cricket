sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ], function(Controller, JSONModel) {
    "use strict";
  
    return Controller.extend("teamsui.controller.Teams", {
      onInit: function () {
        // Optional: attach your model here or from manifest.json
        // Example (if you want to test with dummy data):
        /*
        var oData = {
          Teams: [
            { Team_ID: "T1", TeamName: "Warriors", Captain: "Virat" },
            { Team_ID: "T2", TeamName: "Titans", Captain: "Rohit" }
          ]
        };
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
        */
      }
    });
  });
  