# add repository source
ddev composer config repositories.drupal composer https://packages.drupal.org/8

# require Webform 6, Webform REST, Webform Views modules
ddev composer require 'drupal/webform:^6'
ddev composer require 'drupal/webform_rest:^4'
ddev composer require 'drupal/webform_views:^5'

# enable the modules and dependencies
ddev drush en webform_views -y
ddev drush en webform_rest -y
