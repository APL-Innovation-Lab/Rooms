#### Overview
The `migrate_rooms` module is tailored for migrating room data into the Drupal site. It efficiently manages room data through Drupal taxonomies.

#### Requirements
- Drupal environment set up with `ddev`.
- Drush installed and configured.

#### Installation
1. To enable the `migrate_rooms` module, run the following command in your Drupal root directory:
   ```
   ddev drush en migrate_rooms
   ```

#### Usage
- **Check Migration Status:**  
  To view the current status of the migration, use:
  ```
  ddev drush migrate:status
  ```

- **Import Data:**  
  To import room data, execute:
  ```
  ddev drush migrate:import apl_dev_rooms
  ```

- **Rollback:**  
  If you need to rollback the last import, use:
  ```
  ddev drush migrate:rollback apl_dev_rooms
  ```
