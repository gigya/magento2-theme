#Gigya Test Theme For Magento 2
##Example theme for implementing Gigya modules layout overrides, hooks etc. 
###Inherits from Magento Blank theme

###To apply a theme:
To apply a theme:

- In Admin, go to Stores > Configuration > Design.
- In the Store View drop-down field, select the store view where you want to apply the theme.
- On the Design Theme tab, select your newly created theme in the Design Theme drop-down.
- Click Save Config.
- If caching is enabled, clear the cache.
- To see your changes applied, reload the store front pages.

Resource: http://devdocs.magento.com/guides/v2.0/frontend-dev-guide/themes/theme-apply.html#theme-apply-apply

###Uninstall theme:
Run: php bin/magento theme:uninstall [--backup-code] [-c|--clear-static-content] {theme path} 
