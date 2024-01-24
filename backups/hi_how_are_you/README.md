
# Drupal Database Backup and Restore Using DDEV

## Creating a Database Backup

To create a database backup using DDEV, follow these steps:

1. **Navigate to Your Project Directory:**
   - Ensure you are in the root directory of your Drupal project where the DDEV configuration is located.

2. **Create a Database Snapshot:**
   - Run the following command to create a snapshot of your database:
     ```bash
     ddev export-db --file=db.sql.gz
     ```
   - This command will create a compressed database backup `db.sql.gz` in the current directory.

## Importing a Database Backup

To import a database backup, use the following steps:

1. **Ensure the Backup File is in Place:**
   - Confirm that the backup file `db.sql.gz` is located in the `backups/hi_how_are_you` directory.

2. **Import the Database:**
   - Run the following command from the root of your Drupal project:
     ```bash
     ddev import-db --file=~/[project_name]/backups/hi_how_are_you/db.sql.gz
     ```
   - This command will import the database from the specified backup file into your Drupal site's database.

## About the Backup in `hi_how_are_you` Folder

The `hi_how_are_you` folder contains an initial backup of the database for development instances of the website. This backup represents a barebones installation and can be used to quickly set up a development environment with a predefined state.

---

**Note:** Replace `db.sql.gz` with the appropriate file name if you have multiple backups or if the backup file is named differently.
