// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (GPL). If you
// did not receive this file, see https://www.gnu.org/licenses/gpl-3.0.txt.
// --

"use strict";

var Core = Core || {};
Core.Customer = Core.Customer || {};

/**
 * @namespace Core.Customer.SharedSecretGenerator
 * @memberof Core.Customer
 * @author Mo-Azfar
 * @description
 *      This namespace contains the special module functions for the CustomerPreferences module.
 */
Core.Customer.SharedSecretGenerator = (function (TargetNS) {

    /**
     * @name Init
     * @memberof Core.Customer.SharedSecretGenerator
     * @function
     * @description
     *      This function initializes the module functionality.
     */
    TargetNS.Init = function () {

        var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "2", "3", "4", "5", "6", "7"];
        var i, r, tempLetter, sharedSecret;
		
        $("#UserGoogleAuthenticatorSecretKey").parent().append("<button id=\"GenerateUserGoogleAuthenticatorSecretKey\" type=\"button\" title=\"Click Update After Generate to Save\" class=\"CallForAction\"><span>" + Core.Language.Translate("Generate") + "</span></button>");
		$("#GenerateUserGoogleAuthenticatorSecretKey").on("click", function(){
            sharedSecret = "";

            for (i = 0; i < letters.length; i++) {
                r = Math.floor(Math.random() * letters.length);
                tempLetter = letters[i];
                letters[i] = letters[r];
                letters[r] = tempLetter;
            }

            for (i = 0; i < 16; i++) {
                sharedSecret += letters[i];
            }

            $("#UserGoogleAuthenticatorSecretKey").val(sharedSecret);
       });
    }

    Core.Init.RegisterNamespace(TargetNS, 'APP_MODULE');

    return TargetNS;
}(Core.Customer.SharedSecretGenerator || {}));
