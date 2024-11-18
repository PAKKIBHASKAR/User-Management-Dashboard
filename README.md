# User Management Dashboard

## Description

This is a simple web application that allows users to view, add, edit, and delete user details. It uses a mock backend API (JSONPlaceholder) for demonstration purposes.

The application is built using **HTML**, **CSS**, and **JavaScript** for the frontend and interacts with the **JSONPlaceholder API** to perform CRUD operations on user data.

## Features

- View a list of users with details such as **ID**, **First Name**, **Last Name**, **Email**, and **Department**.
- Add new users to the list.
- Edit the details of existing users.
- Delete users from the list.
- Interactive user interface with **Add**, **Edit**, and **Delete** buttons.
- Responsive design to ensure the app works well on all devices.

## Technologies Used

- **HTML** for creating the structure of the web pages.
- **CSS** for styling the page and making it responsive.
- **JavaScript** for handling the frontend logic and API requests.
- **JSONPlaceholder** for simulating the backend API.

  ## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

Follow these steps to run the project locally:

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name

2. Install Dependencies:
   npm install
   
3. Start the development server:
    npm start
   
4. Open your browser and navigate to:
   http://localhost:3000

   

## Challenges Faced
State Management: Ensuring that the form fields were properly managed and reset after adding a new user.
API Interaction: Handling asynchronous API requests and managing the mock responses from JSONPlaceholder.
CSS Styling: Aligning the buttons and ensuring a responsive and clean UI layout.

## Improvements for the Future
Pagination: Implementing pagination or infinite scrolling for better user experience when dealing with a large number of users.
Validation: Adding client-side validation to improve data integrity before submitting the form.
Enhanced UI: Further refining the UI with more advanced styling and possibly incorporating a UI framework like Bootstrap or Material-UI.
