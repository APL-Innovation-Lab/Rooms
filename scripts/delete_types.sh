#!/bin/bash

# Predefined list of content types
content_types=(
    "accordion"
    "activity"
    "activity_page"
    "ahc_donation"
    "ahc_page"
    "ahc_protests"
    "alert"
    "apltv_recommendation_slide"
    "apltv_scheduled_sequence"
    "apl_item"
    "apl_item_import"
    "apl_site_content"
    "archives_index"
    "article"
    "atxyz"
    "bookstore_page"
    "champion_image"
    "database"
    "event"
    "exhibit"
    "fullscreen_image"
    "gift_shop_page"
    "group"
    "hero_banner_image"
    "hero_image"
    "highlighted_images"
    "how_to"
    "image_rotator"
    "job_portal_assistance_request"
    "job_portal_page"
    "keyword_match"
    "library_info"
    "oakwood"
    "open_hours"
    "page"
    "page_"
    "panel"
    "passports_page"
    "passport_reservation"
    "personal_picks"
    "playlist"
    "public_computer_page"
    "qr"
    "reference_stats"
    "reflection"
    "room_reservation"
    "sales_events_page"
    "screen"
    "slide"
    "slr"
    "slr_alert"
    "special_dates"
    "staff_recommend"
    "suggest_a_title"
    "tour"
    "url_for_display"
    "virtual_library_alert"
    "virtual_library_page"
    "volunteer"
    "volunteer_opportunity"
    "zine"
)

# List of node types to keep for rooms
keep_types=("alert" "article" "page" "page_" "panel" "special_dates")

# Function to display main menu
main_menu() {
    echo "Select an option:"
    echo "1) Prepare for Rooms"
    echo "2) Show all node types"
    echo "3) Exit"
    read choice
    case $choice in
        1) prepare_for_rooms ;;
        2) show_menu ;;
        3) exit_script ;;
        *) echo "Invalid option, please choose again."
           main_menu ;;
    esac
}

# Function to prepare for Rooms
prepare_for_rooms() {
    echo "Preparing for Rooms..."
    for type in "${content_types[@]}"; do
        if [[ ! " ${keep_types[@]} " =~ " ${type} " ]]; then
            echo "Deleting content type: $type"
            # Actual deletion command for nodes of this type
            ddev drush entity:delete node --bundle=$type
            # Check if deletion was successful and delete content type configuration
            if [ $? -eq 0 ]; then
                ddev drush config:delete "node.type.$type"
                echo "Deleted content type: $type successfully."
            else
                echo "Failed to delete content type: $type. Content might still exist."
            fi
        fi
    done
}

# Function to display menu
show_menu() {
    echo "Content Types:"
    for index in ${!content_types[@]}; do
        echo "$((index+1))) ${content_types[index]}"
    done
}

# Function to exit script
exit_script() {
    echo "Exiting..."
    exit 0
}

# Start DDEV
#ddev start

# Show main menu
main_menu

# Backup the database
#echo "Backing up the database..."
#ddev drush sql:dump --result-file="../backups/post_cleanup_$(date +%Y%m%d_%H%M%S).sql"

# Stop DDEV
#ddev stop

echo "Cleanup process completed."
