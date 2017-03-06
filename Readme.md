#Gigya Test Theme For Magento 2
##Example theme for implementing Gigya modules layout overrides, hooks etc. 
###Inherits from Magento Luma theme

###Installation
Add the Github repository to Magento installation root composer.json repositories array
```
{
    "type": "vcs",
    "url": "https://github.com/gigya/magento2-theme.git"
}
```
run from CLI: 
```
composer require gigya/theme-tests
```

###To apply a theme:
To apply the theme:

- In Magento 2.0.x Admin, go to Stores > Configuration > Design.
- In Magento 2.1.x Admin go to Admin Panel > Content > Configuration.
- In the Store View drop-down field, select the store view where you want to apply the theme.
- On the Design Theme tab, select your newly created theme in the Design Theme drop-down.
- Click Save Config.
- If caching is enabled, clear the cache.
- To see your changes applied, reload the store front pages.

Resource: http://devdocs.magento.com/guides/v2.0/frontend-dev-guide/themes/theme-apply.html#theme-apply-apply

If the theme is installed, but it is still not available in design page, You may also need to clear static content.
```
navigate to: /pub/static
delete everything EXCEPT the .htaccess file
```

###Uninstall theme:
Run: php bin/magento theme:uninstall [--backup-code] [-c|--clear-static-content] {theme path} 

##Some fun games we play with the theme 
###Override checkout page user email test
First we add Gigya script and login blocks to the checkout page.

We do this by overriding Magento_Checkout module - checkout_index_index.xml.

Then We added an override for the checkout page "check-email-availability JS component".

When a user fills in an email that already exists in Magento User DB (and hence in Gigya as well), we popup the gigya default login popup.

###Add Gigya custom registration screen to checkout success page
Here we demonstrate how to override a page with a custom screen set template.

We add our custom template file inside Gigya_Gigya_IM/Templates. and call it gigya_checkout_succes_register.phtml
 
Then we override the checkout success page with Magento_Checkout/layout/checkout_onepage_success.xml
and add our custom registration template instead of the default after-checkout Registration button.
 