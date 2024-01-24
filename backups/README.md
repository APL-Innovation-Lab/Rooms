
# Introduction to the Backups Directory

## Overview

The `backups` directory is an essential part of the Drupal development workflow. It contains various database snapshots that represent different states or milestones of the development process. These snapshots can be used to quickly set up your environment to a specific state, aiding in development, testing, and debugging.

## Starting with the `hi_how_are_you` Backup

- **Initial Backup:** The `hi_how_are_you` folder within the `backups` directory contains an initial backup of the database. This backup is a snapshot of a barebones Drupal installation and is a great starting point for new development environments.
- **Using the Backup:** To use this backup, locate the `db.sql.gz` file in the `hi_how_are_you` folder. Then, import the database into your Drupal site's database using DDEV. The command for this is as follows:
  ```bash
  ddev import-db --src=~/[project_folder]/backups/hi_how_are_you/db.sql.gz
  ```

## Additional Backup and Restore Points

- **Future Snapshots:** As the project progresses, additional backups will be added to the `backups` directory. These will represent different stages of development and can be used similarly to the `hi_how_are_you` backup.
- **Backup Naming:** Each backup will have its own folder with a descriptive name, allowing you to choose the appropriate snapshot for your needs.

## Scripts Directory

- **Automation Scripts:** For ease of use, the `/scripts` directory contains shell scripts for automating the backup and restore process. For example, the `hi_how_are_you.sh` script in the `/scripts` directory provides an automated way to import the `hi_how_are_you` backup.
- **Using Scripts:** To use a script, navigate to the scripts directory and run:
  ```bash
  sh hi_how_are_you.sh
  ```

---

**Note:** It is essential to keep the backups directory organized and up-to-date to ensure a smooth workflow. Regularly adding new snapshots as the project evolves will provide a comprehensive range of restore points.