# Local Storage Implementation with User Preferences

## Project Overview
This project demonstrates a web application with:
- **User Authentication:** Basic login and logout functionality.
- **User Preferences for Light/Dark Mode:** Toggle and save the theme preference.
- **Filtering Results:** Save the selected filter option to apply it automatically on the next visit.

## Key Features
1. **Login/Logout Functionality**
   - Allows users to log in and out, storing their username in `localStorage`.
2. **Light/Dark Mode**
   - Toggle Light/Dark Mode, with preference saved in `localStorage`.
3. **Filter Persistence**
   - Saves the selected filter option on the `product.html` page, which is reapplied on future visits.

## Design
The application is designed for responsiveness and ease of use. Each page has a consistent color scheme and typography for a cohesive look.

## Usage
1. **Login:** Enter a username in the form and click "Login." The username will be displayed, and login status is preserved.
2. **Toggle Theme:** Use the "Toggle Light/Dark Mode" button to switch themes. The selected theme persists across sessions.
3. **Filtering Products:** On the `product.html` page, select a filter option to view specific categories. The selected filter will be saved for future visits.
