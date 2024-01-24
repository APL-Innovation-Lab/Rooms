#!/bin/bash
GIT_ROOT="$(dirname "$(dirname "$0")")"
cd "$GIT_ROOT" 

# In case it isn't already, start colima
colima start

# Script to set up a Drupal project with DDEV
# Usage: ./drupal95.sh [project-name]

# Find the Git project root directory
PROJECT_ROOT=$(git rev-parse --show-toplevel)

# Extract the name of the project directory to use as the default project name
DEFAULT_PROJECT_NAME=$(basename "$PROJECT_ROOT")

# Check if a project name is provided as a parameter
PROJECT_NAME=${1:-"$DEFAULT_PROJECT_NAME"}

# Define Drupal version and project directory
DRUPAL_VERSION="9.5"
PROJECT_DIR="$HOME/$PROJECT_NAME"

echo "Setting up project: $PROJECT_NAME from $PROJECT_ROOT_DIR in directory: $PROJECT_DIR"


# Check if the provided project name is different from the default
if [ "$PROJECT_NAME" != "$DEFAULT_PROJECT_NAME" ]; then
    # Define the new directory path
    NEW_DIR_PATH="$PROJECT_DIR"

    # Create the new directory
    mkdir -p "$NEW_DIR_PATH"

fi
# Navigate to the project directory
cd "$PROJECT_DIR" || {
    echo "Failed to navigate to project directory. Exiting."
    exit 1
}

# Create the .ddev directory
mkdir -p .ddev && cd .ddev || {
    echo "Failed to create or navigate to .ddev directory. Exiting."
    exit 1
}

# Create a DDEV config.yaml file with the specified configurations
echo "Creating DDEV configuration..."
cat <<EOT > config.yaml
name: $PROJECT_NAME
type: drupal9
php_version: "8.0"
webserver_type: apache-fpm
database:
  type: mysql
  version: "8.0"
EOT

# Navigate back to the project directory
cd "$PROJECT_DIR"

# Check if config.yaml was created
if [[ ! -f .ddev/config.yaml ]]; then
    echo "Failed to create .ddev/config.yaml. Exiting."
    exit 1
fi

# Start the DDEV environment
echo "Starting DDEV..."
ddev start

# Initialize composer.json with basic project settings
ddev composer init --description "APL Innovation Lab baseline project" --type "project" --stability stable --license "GPL-2.0-or-later" --no-interaction

# Allow necessary plugins
ddev composer config allow-plugins.composer/installers true
ddev composer config allow-plugins.drupal/core-composer-scaffold true

# Update composer configurations
ddev composer update

# Create a Drupal project with the specified version. Drupal will be installed in the 'html' directory as per installer-paths configuration
echo "Creating Drupal project..."
ddev composer require -W "drupal/core-recommended:^$DRUPAL_VERSION"

# Add Drupal core and necessary packages
ddev composer require drupal/core-composer-scaffold:^9
ddev composer require composer/installers:^1.9 -n

# Require Drush using Composer
ddev composer require "drush/drush:^11"


# Install Drupal via Drush with predefined database credentials. Assumes Drupal is in the 'html' directory.
echo "Installing Drupal..."
ddev drush site:install standard \
  --db-url=mysql://db:db@db:3306/db \
  --site-name="$PROJECT_NAME" \
  --account-name=admin \
  --account-pass=111 -y


# add repository source for contrib modules
ddev composer config repositories.drupal composer https://packages.drupal.org/8

ddev composer require drupal/migrate_plus
ddev composer require drupal/migrate_file
# Define paths

# Get the absolute path of the custom modules directory
CUSTOM_MODULES_PATH="$(cd "${PROJECT_ROOT}/scripts/modules/custom" && pwd)"

REPO_MODULES_PATH="$(cd "${PROJECT_ROOT}/scripts/modules/custom" && pwd)"
DRUPAL_MODULES_PATH="$PROJECT_DIR/modules" 

mkdir -p $DRUPAL_MODULES_PATH/custom

# Copy custom modules
cp -r $REPO_MODULES_PATH/* $DRUPAL_MODULES_PATH/custom/

#ddev drush en hi_how_are_you
#ddev drush hhay-cn


# require Webform 6, Webform REST, Webform Views, Asset Injector, Views Data Export, Field Permissions modules
ddev composer require 'drupal/webform:^6'
ddev composer require 'drupal/webform_rest:^4'
ddev composer require 'drupal/webform_views:^5'
ddev composer require 'drupal/asset_injector'
ddev composer require 'drupal/views_data_export'
ddev composer require 'drupal/field_permissions'

# enable the modules and dependencies
#ddev drush en webform_views -y
#ddev drush en webform_rest -y
#ddev drush en asset_injector -y
#ddev drush en views_data_export -y
#ddev drush en field_permissions -y
#ddev drush en content_translation -y
#ddev drush en layout_builder -y

#ddev drush en migrate_locations -y
#ddev drush migrate:import apl_dev_locations

#ddev drush en migrate_rooms -y
#ddev drush migrate:import apl_dev_rooms


CONFIG_FILES_PATH="$(cd "${PROJECT_ROOT}/scripts/config" && pwd)"
SYNC_DIR="$PROJECT_DIR/sites/default/files/sync/" 

#cp -r $CONFIG_FILES_PATH/* $SYNC_DIR
#ddev drush cim -y

THEMES_PATH="$(cd "${PROJECT_ROOT}/scripts/themes" && pwd)"
NEW_THEMES_DIR="$PROJECT_DIR/themes/" 

cp -r $THEMES_PATH/* $NEW_THEMES_DIR


ddev import-db --file=$PROJECT_ROOT/backups/hi_how_are_you/db.sql.gz


# export the current config
ddev drush cex -y
ddev launch

# Provide information about accessing the site
ddev describe

# Display a success message
echo "--~~~~~~~~~~~~~~~----------~~~~~~~~~~~~~~~~~~~~~~~---"
echo "True love will find you in the end. --Daniel Johnston"
echo "---~~~~~~~~~~~-------~~~~~~~~~~~~~~~~----~~~~~~~~~~~-"
