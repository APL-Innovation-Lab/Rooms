# add repository source
ddev composer config repositories.drupal composer https://packages.drupal.org/8

# require Webform 6, Webform REST, Webform Views, Asset Injector, Views Data Export, Field Permissions modules
ddev composer require 'drupal/webform:^6'
ddev composer require 'drupal/webform_rest:^4'
ddev composer require 'drupal/webform_views:^5'
ddev composer require 'drupal/asset_injector'
ddev composer require 'drupal/views_data_export'
ddev composer require 'drupal/field_permissions'

# enable the modules and dependencies
ddev drush en webform_views -y
ddev drush en webform_rest -y
ddev drush en asset_injector -y
ddev drush en views_data_export -y
ddev drush en field_permissions -y
ddev drush en content_translation -y
ddev drush en layout_builder -y

# export the current config
ddev drush cex

echo "-----"
echo "next: copy the 'scripts/config/*.yml' files into the /sites/default/files/sync folder"
echo " ...then do"
echo "ddev drush cim"
echo "----"
