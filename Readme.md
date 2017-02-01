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

- In Magento Admin, go to Stores > Configuration > Design.
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
