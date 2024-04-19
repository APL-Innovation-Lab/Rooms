## Meeting Rooms Reservation Script README

### File Information

- **Filename**: `meeting_rooms_reservation.js`
- **Function**: Handles the client-side logic for the Austin Public Library's meeting room reservation system.

### Overview

This script is designed to enhance the user experience in booking meeting rooms at the Austin Public Library by automating several tasks:

- **Page Reload on Back Navigation**: Automatically reloads the form when navigated back to ensure it's reset.
- **Meeting Room Details Display**: Displays the selected meeting room name and reservation timings for easy confirmation.
- **Date and Time Validation**: Checks the availability of meeting rooms to prevent double booking and ensures the selected dates do not fall on closed days.
- **Form Submission Control**: Manages the conditions under which the form can be submitted based on admin or internal user status.

### Functionality

- **Initialization**: Binds initialization of the script to the document ready event.
- **Utility Functions**:
  - Retrieves the meeting room name, start date, and times from the form.
  - Validates the meeting room availability against existing reservations.
  - Checks for user compliance with booking limits (e.g., three reservations within 90 days).
- **UI Enhancements**:
  - Hides illegal options dynamically.
  - Displays pre-selected information about reservations when editing.
  - Provides real-time feedback on form validation before submission.

### Planned Feature Enhancements

#### Cloning Feature for Internal Use

- **Current State**: The cloning feature, which allows easy duplication of existing reservations, is currently available only to administrators.
- **Proposed Change**: Extend this feature to internal users at the library who administer or assist with the meeting rooms.
- **Rationale**: Empowering internal users with cloning capabilities will streamline the process of managing and setting up repeated events, thereby reducing administrative overhead and improving usability.

### Implementation Notes

- The script uses jQuery for DOM manipulations and event handling.
- `dayjs` library is utilized for date manipulations, crucial for validating reservation dates and times.
- Asynchronous requests fetch room availability and booking constraints from server-side APIs formatted as JSON.

### Additional Information

For any further modifications or feature integration, refer to this document to understand existing functionalities and workflow. Consider privacy and security implications when handling user input and server responses.
