# To-Do Application
This React To-Do List application enables users to efficiently manage their tasks with features for adding, removing, and marking tasks as complete. The app ensures task input validation, dynamically displays tasks, and offers optional sorting and filtering. Additionally, tasks are saved in localStorage to maintain persistence across sessions. The project is ideal for learning and demonstrating core React concepts and localStorage integration.

# Demo
https://react-to-do-app-theta-five.vercel.app/

# Setup Instructions

### 1.Clone the repository: 

    git clone https://github.com/AyushJoshi22/React-ToDo-app.git
    
### 2.Navigate to the project directory: 

    cd React-ToDo-app
    
### 3.Install dependencies: 

    npm install
### 4.Run the application: 
        
    npm start
    
### Open the application in your browser at http://localhost:3000

# Functionality Tests:
### 1. Add a Task:
* Enter a task description in the input field and click "Add Task".
* Verify the task appears in the list.
### 2. Mark a Task as Complete:
* Click the checkbox next to a task.  
* Verify the task text is struck through, indicating completion.
### 3. Delete a Task:
* Click on remove button
* Verify tasks is removes.
### 4. Search the Task:
* Search something in the search bar.  
* Verify the task containing your serach will appear only.
### 4. Filter the Task:
* Use the dropdown to sort tasks by "All", "Completed", or "Not Completed".
* Verify tasks are filtered correctly.

# Validation Tests:
### Empty Task Validation:
* Try adding a task with an empty input field.
* Verify the task is not added.

# Local Storage Tests:
### Persistence:
* Add some tasks and refresh the page.
* Verify the tasks are still present, indicating they were saved to local storage.
