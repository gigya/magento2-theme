/**
 * Override Magento customer check email availability action, for step 1 - email verification in checkout page.
 * If the customer email exists, open gigya login popup.
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 * Override onpage checkout page email availability test.
 * If email exists in Magento show the Gigya login screen
 */
define(
    [
        'mage/storage',
        'Magento_Checkout/js/model/url-builder'
    ],
    function (storage, urlBuilder) {
        'use strict';

        return function (deferred, email) {
            return storage.post(
                urlBuilder.createUrl('/customers/isEmailAvailable', {}),
                JSON.stringify({
                    customerEmail: email
                }),
                false
            ).done(
                function (isEmailAvailable) {
                    if (isEmailAvailable) {
                        deferred.resolve();
                    } else {
                        console.log("Gigya theme checkout override");
                        jQuery("#gigya-login-popup").modal("openModal");
                        // deferred.reject();
                    }
                }
            ).fail(
                function () {
                    deferred.reject();
                }
            );
        };
    }
);

