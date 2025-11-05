sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller, MessageBox, MessageToast) {
    'use strict';

    return {
        /**
         * Generated event handler.
         *
         * @param oContext the context of the page on which the event was fired. `undefined` for list report page.
         * @param aSelectedContexts the selected contexts of the table rows.
         */
        onExpirePress: function(oContext, aSelectedContexts) {
            var oSelectedObject = aSelectedContexts[0].getObject();
            var sExpirationDate = oSelectedObject.Expirationdate;
            
            // Convert date to JS Date object
            var expiry = new Date(sExpirationDate);
            var today = new Date();

            // Normalize time (avoid timezone issues)
            expiry.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);

            // Calculate day difference
            var diffInMs = expiry - today;
            var diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

            var sMessage = "";

            if (diffInDays > 0) {
                sMessage = `Expires in ${diffInDays} day${diffInDays > 1 ? "s" : ""}.`;
            } else if (diffInDays === 0) {
                sMessage = "Expires today!";
            } else {
                sMessage = `Expired ${Math.abs(diffInDays)} day${Math.abs(diffInDays) > 1 ? "s" : ""} ago.`;
            }

            // Show popup
            MessageBox.information(sMessage);
        }        
    };
});
