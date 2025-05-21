sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend(
    "sls.jbd.subbd.sljbdttcsubbduem.controller.Worklist1",
    {
      onInit: function () {},
      onPressLink: function (oEvent) {
        var nextview = sap.ui.core.UIComponent.getRouterFor(this);
        nextview.navTo("object", {
          objectId: "0",
        });
      },
    }
  );
});
