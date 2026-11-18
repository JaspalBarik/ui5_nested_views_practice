sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {

    "use strict";

    return Controller.extend(
        "nestedviews.controller.EmployeePanel",
        {

            onShowDetails: function () {

                MessageToast.show(
                    "Employee details displayed successfully!"
                );

            }

        }
    );

});