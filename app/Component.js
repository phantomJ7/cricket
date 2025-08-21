sap.ui.define([
  "sap/ui/core/UIComponent"
], function (UIComponent) {
  "use strict";

  return UIComponent.extend("demo.walkthrough.Component", {
    metadata: {
      interfaces: ["sap.ui.core.IAsyncContentCreation"],
      rootView: {
        viewName: "demo.walkthrough.view.App",
        type: "JS"
      }
    }
  });
});
