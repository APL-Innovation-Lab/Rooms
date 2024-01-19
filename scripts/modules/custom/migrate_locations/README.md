#### Overview
The `migrate_locations` module is for migration of Library Location data into the Drupal site as taxonomy terms of the Library Location vocabulary.

#### Requirements
- Drupal environment set up with `ddev`.
- Drush installed and configured.

#### Installation
1. To enable the `migrate_locations` module, run the following command in your Drupal root directory:
   ```
   ddev drush en migrate_locations
   ```

#### Usage
- **Check Migration Status:**  
  To view the current status of the migration, use:
  ```
  ddev drush migrate:status
  ```

- **Import Data:**  
  To import location data, execute:
  ```
  ddev drush migrate:import apl_dev_locations
  ```

- **Rollback:**  
  If you need to rollback the last import, use:
  ```
  ddev drush migrate:rollback apl_dev_locations
  ```
