# Setup Instructions:
    # Clone the repository: git clone <repository-url>
    - Navigate to the project directory: cd <project-directory>
    - Install dependencies: npm install
    - Run the application: npm start
    - Open the application in your browser at http://localhost:3000

# Functionality Tests:

  ## 1. Add a Task:
      - Enter a task description in the input field and click "Add Task".
      - Verify the task appears in the list.

  ## 2. Mark a Task as Complete:
      -  Click the checkbox next to a task.
      -  Verify the task text is struck through, indicating completion.
  ## 3. Delete a Task:
      - Use the dropdown to sort tasks by "All", "Completed", or "Not Completed".
      - Verify tasks are filtered correctly.

# Validation Tests:

  ## Empty Task Validation:
      - Try adding a task with an empty input field.
      - Verify the task is not added.

# Local Storage Tests:

  ## Persistence:
      - Add some tasks and refresh the page.
      - Verify the tasks are still present, indicating they were saved to local storage.

    
