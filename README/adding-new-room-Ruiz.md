Here is the documentation for adding a new reservable room to the Ruiz branch in the Meeting Rooms feature:

1. Add the new room to the Rooms taxonomy:
   - Navigate to `/admin/structure/taxonomy/manage/rooms/overview`
   - Click on "Add term"
   - Enter the following details for the new room:
     - Name: "Ruiz Branch #3" 
     - Capacity: 10
     - Select "Ruiz Branch" for the Location
   - Save the new term
   - Note the generated taxonomy term ID for the new room (in this case, it is 5315)

2. Update the Javascript to include the new room as an option when Ruiz is selected as the location:
   - Locate the Javascript file that drives the Meeting Rooms feature
   - Find the `get_room` function in the code
   - Locate the `switch` statement that checks the `location2` variable
   - Find the `case` for the Ruiz branch (it should be `case "205"`)
   - Update the `rooms_array`, `rooms_names`, and `rooms_capac` arrays to include the new room:

     ```js
     case "205":
       rooms_array = [793, 795, 794, 5315];
       rooms_names = ['Ruiz Branch #1', 'Ruiz Branch #2', 'Ruiz Branch #1 & #2', 'Ruiz Branch #3'];
       rooms_capac = [39, 39, 78, 10];
       break;
     ```

   - Save the changes to the Javascript file

3. Test the changes:
   - Clear the cache on your Drupal site to ensure the updated Javascript is loaded
   - Navigate to the Meeting Rooms reservation form
   - Select "Ruiz Branch" as the location
   - Verify that "Ruiz Branch #3" appears as an option in the "Available rooms and times" section

That's it! The new "Ruiz Branch #3" room should now be available for reservations when users select the Ruiz Branch as the location.

Note: Make sure to also update any other relevant parts of the code that may depend on the specific room IDs, such as the `check_dates` function, to ensure the new room is properly handled in availability checks and reservations.