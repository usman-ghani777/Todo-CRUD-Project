Go Live:

[![Netlify Status](https://api.netlify.com/api/v1/badges/d565e1ff-f646-4ca9-a91f-5f46c88519b0/deploy-status)](https://app.netlify.com/projects/todomockapi/deploys)

# Todo CRUD App
A lightweight and responsive Todo application built with plain HTML, CSS, and JavaScript. It allows users to add, view, edit, and delete tasks using a remote MockAPI backend for persistent data storage.

## Features

- Add new todo items
- Display all saved todos from the API
- Edit an existing task inline
- Delete individual tasks
- Responsive layout for desktop and mobile screens
- Real-time interaction with a REST API
- Clean and modern dark-themed UI

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- MockAPI for CRUD operations

## Project Structure

```text
Todo CRUD Project/
├── index.html
├── style.css
├── script.js
├── README.md
```

## Live Functionality

The app performs the following operations:

- GET: fetch all todos from the API
- POST: create a new todo item
- PUT: update an existing todo item
- DELETE: remove a todo item

## How to Run

### Option 1: Open directly in the browser

1. Download or clone the project.
2. Open `index.html` in your browser.
3. Start creating and managing todos.

### Option 2: Use a local web server (recommended)

Because some browsers may behave more consistently with a local server, you can run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## API Configuration

This project uses a MockAPI endpoint in `script.js`:

```javascript
https://6ab54e7824ee9d3caa1c5f70.mockapi.io/api/v1/todos
```

If you want to use your own API endpoint, update the fetch URLs in `script.js`.

## Usage

1. Type a todo item in the input field.
2. Click the Add button to save it.
3. Click Edit to modify a task.
4. Click Save to persist the changes.
5. Click Delete to remove a task.

## Notes

- Empty todo entries are blocked.
- The app shows alerts when an invalid or empty todo is submitted.
- The UI is intentionally simple and beginner-friendly.

## Future Improvements

- Add task completion toggle
- Add filter options (All / Active / Completed)
- Add search functionality
- Store tasks in localStorage as a fallback
- Improve form validation and error handling

## Author

This project is a simple CRUD application created for learning and practicing JavaScript DOM manipulation and API integration.

## License

This project does not currently include a license file. If you plan to share or distribute it publicly, consider adding an appropriate open-source license.
