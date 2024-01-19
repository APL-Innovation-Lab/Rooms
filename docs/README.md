
# Rooms Reservation System Setup

## Overview
This README outlines the setup process for a development environment of the Meeting Rooms and Shared Learning Rooms reservation system on a Drupal website. We will replicate the functionality of our production site, focusing on the Webform module and custom JavaScript for room availability and amenity filtering.

## Initial Setup

### 1. Drupal Installation Using DDEV Script
- **Step 1:** Execute the `drupal95.sh` script from our repository.
  - This script uses DDEV to set up Drupal.
  - Ensure DDEV is installed and configured on your system.
  - Run `./scripts/drupal95.sh rooms-project` from the root of your repository. (You can change the project name from 'rooms-project' to something else, if you prefer.)

### 2. Module Installation with DDEV Composer
- **Step 2:** Use DDEV Composer to install required modules.
  - Execute `ddev composer require 'drupal/webform'`.
  - Execute `ddev composer require 'drupal/asset_injector'`.
  - These commands will install the Webform module and Asset Injector module. (If you used the project name 'rooms-project' you'll need to change to that directory and then issue the ddev commands above.)

## Webform Configuration for Reservations

### 3. Importing Configuration from Production
- **Step 3:** Export the configuration from the production site.
  - Use `drush cex` on the production site to export configurations. (In our case, we've already exported the config from production, and we're providing the config files in this repo.)
- **Step 4:** Import the configuration into your development site.
  - Start with a baseline configuration export using `ddev drush cex`.
  - Then, import the production configuration using `ddev drush cim`.

### 4. Custom JavaScript Integration
- **Step 5:** Modify and integrate custom JavaScript for filtering.
  - Use the Asset Injector module to add the `slr_js.js` file to the development site.
  - This file contains the logic for timeslot and amenity-based filtering.

## Testing and Verification

### 5. Functionality Testing
- **Step 6:** Test the reservation system thoroughly.
  - Ensure the Webforms for both room types work correctly.
  - Verify that the JavaScript filters rooms based on amenities as expected.

## Long-Term Goals and Considerations

- **Step 7:** Document issues and potential improvements.
  - Note any limitations or enhancements for the Webform and JavaScript functionalities, keeping in mind the future separation of backend and frontend systems.

## Conclusion
This setup is designed for developing and testing improvements to our reservation system, focusing on user experience and preparing for future architectural changes.
