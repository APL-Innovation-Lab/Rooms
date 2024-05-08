
# Rooms - Austin Public Library Room Reservations

Welcome to the "Rooms" project, a development version of the room reservation system used by the Austin Public Library for booking Shared Learning Rooms. This repository, a collaborative effort between the Austin Public Library and Open Austin, is a fork of [APL-Innovation-Lab/APL-CMS](https://github.com/APL-Innovation-Lab/APL-CMS).

## Overview

The "Rooms" project is an integral part of a broader initiative by the Austin Public Library Innovation Lab, aiming to extend and enhance our production environment at [library.austintexas.gov](https://library.austintexas.gov). This initiative is the first step in a series of projects that build upon each other, with a focus on sustainable and scalable development.

## Open Austin's Recommendations

In alignment with Open Austin's recommendations, we are adopting a strategic approach in developing this project:

- **Splitting Frontend and Backend:** As an intermediate step, we will separate the frontend and backend components of the CMS. This approach will create a more robust and scalable foundation for the "Rooms" project and future initiatives.
- **Building Solid Foundations:** This separation will enable us to establish robust code documentation, including explanations and how-to guides for both technical and non-technical audiences.
- **Ease of Implementation:** The separation is intended to simplify the process for staff to tackle and implement future updates and enhancements.
- **Accessibility and Openness:** Ensuring the project meets accessibility criteria and remains open for contributions from community members, with minimal oversight required from staff.

## Key Components

- **Webform Module:** Foundation for the reservation form.
- **Permissions and Roles:** Access management.
- **Taxonomies:** Rooms and Library Locations.
- **Webform Configuration and Fields:** Customization of the form.
- **Pages and Views:** User interfaces.
- **Webform Validation:** Data validation enhancements.
- **CSS and JavaScript:** Styling and interactivity.
- **Webform Emails:** Notification system.
- **Data Export:** Data management tools.

## Collaboration and Contribution

We welcome contributions from those experienced in this type of thing and those eager to learn. We're looking for mentors, contributors, and innovative ideas to enhance this project.

## Contact and Join Us

- **GitHub:** Contribute via Pull Requests or Issues.
- **Email:** Reach out at bryce.benton@austintexas.gov.

Join this initiative by the Austin Public Library Innovation Lab and Open Austin!


# Shared Learning Rooms Reservation System Documentation

The Shared Learning Rooms (SLR) reservation system is an online platform provided by the Austin Public Library, allowing patrons to book rooms for various durations ranging from 15 minutes to 2 hours. This system is accessible through a Drupal webform, designed to streamline the process of finding and reserving available rooms based on user-selected criteria.

## Accessing the Reservation Form

The reservation form can be found at [https://library.austintexas.gov/slr/request](https://library.austintexas.gov/slr/request). Users can navigate to this URL directly or through the library's website navigation.

## Filling Out the Request Form

Upon accessing the form, users are prompted to fill out their details and preferences for the reservation. This includes personal information and specific requirements for the room, such as the date and duration of the booking.

## Selecting Date and Time

Users specify their preferred date and the duration they wish to reserve a room for. Upon submission of these details, the system dynamically presents a list of available rooms along with their available times. This list is generated through a backend JSON call that fetches the latest room availability data.

## Checking Room Availability

The SLR system employs a backend process that checks the availability of rooms based on the user's selected date and time duration. If a desired time slot is not available, users have the option to select a new date or adjust their time preferences to find an available room.

## Finalizing the Booking

Once a user selects an available time slot, the system performs a final check to ensure that the slot is still available. This step is crucial to prevent double bookings. If the selected time slot is available, the booking is confirmed, and the user is notified accordingly.

## Troubleshooting and Tips

- **Room Not Available**: If the preferred room or time slot is not available, consider adjusting the date or duration of the booking.
- **Form Submission Issues**: Ensure all required fields are filled out correctly. If problems persist, try accessing the form using a different browser or device.

## Recommended Enhancements

To further enhance the reliability of the SLR reservation system, implementing server-side validation for availability checks is recommended. This can be achieved through Drupal modules such as Webform Validation ([https://www.drupal.org/project/webform_validation](https://www.drupal.org/project/webform_validation)) or possibly Clientside Validation ([https://www.drupal.org/project/clientside_validation](https://www.drupal.org/project/clientside_validation)) for a more comprehensive approach. While Clientside Validation primarily focuses on client-side checks, it can be configured to support server-side validations as well, ensuring a robust validation mechanism that minimizes the chances of overbooking.

