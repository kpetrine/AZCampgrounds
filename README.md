# JavaScript Campgrounds App
This app is a simple web-based campground management tool. Here's a breakdown of its functionality:

## Key Features
### 1. Display Campgrounds:
The app fetches and displays a list of campgrounds from a local server (running on localhost:3000). It shows each campground's name, location, and an action button to delete the campground.

### 2. Add Campgrounds:
Users can add new campgrounds by entering a name and location in the form. Upon submission, the app sends a POST request to the server to create a new campground.

### 3. Delete Campgrounds:
Each campground listed has a "Delete" button. Clicking this sends a DELETE request to the server, removing the campground from the database.

### 4. Dynamic UI Updates:
The UI updates automatically to reflect any additions or deletions of campgrounds. After adding or deleting a campground, the app fetches the updated list from the server.

### User Interface
The app has a simple and clean layout using Bootstrap for styling. It includes:
- A header for the title.
- A form for adding campgrounds with input fields for the name and location.
- A table that lists the campgrounds and action buttons for deleting them.

How It Works
### 1. Initialization:
On page load, the app calls to getAllCampgrounds to fetch and display existing campgrounds.

### 2. Adding a Campground:
When the "Submit" button is clicked, the addCampground function is triggered. It collects input values, sends a POST request, and clears the input fields upon success.

### 3. Displaying Campgrounds:
The showCampgrounds function generates a table row for each campground, including a delete button.

### 4. Deleting a Campground:
The deleteCampground function sends a DELETE request when a delete button is clicked. If successful, it refreshes the campground list.

## Key Technologies Used:

### 1. HTML (HyperText Markup Language):
The structure of the web page is defined using HTML. It includes elements like forms, tables, and input fields to gather user input and display data.

### 3. CSS (Cascading Style Sheets):
CSS is used for styling the web page. Bootstrap is included via a CDN (Content Delivery Network) for responsive design and pre-defined styles, while additional custom styles enhance button appearances.

### 5. JavaScript:
JavaScript is used to handle the interactive aspects of the application:
Event Listeners: To respond to user actions (like button clicks).
Fetch API: To make asynchronous HTTP requests to the server for CRUD (Create, Read, Update, Delete) operations.

### 7. AJAX (Asynchronous JavaScript and XML):
Through the Fetch API, the app communicates with a backend server without requiring a full page refresh, allowing for a smoother user experience.

### 9. Bootstrap:
A front-end framework that provides responsive design components and styles

### 11. JSON (JavaScript Object Notation):
Data exchanged between the client and server is formatted as JSON, which is easy to read and manipulate in JavaScript.

### 13. Local Server:
The app is designed to interact with a local server running at http://localhost:3000, which handles the storage and retrieval of campground data.

## Conclusion
Overall, this app provides a straightforward way to manage a list of campgrounds, allowing users to add new campgrounds and remove existing ones while interacting with a backend server.

## Installation
To set up the project and include the `db.json` file, follow these steps:

### 1. **Clone the repository**:
   
   git clone https://github.com/kpetrine/AZCampgrounds.git

    Navigate into the cloned directory:
    cd AZCampgrounds


### 2. Install dependencies: If you haven't already, make sure you have Node.js installed, then run:
npm install

### 3. Run the project: Start the server with:
npm start



