# Task Tracker CLI

The **Task Tracker CLI** is a command-line application to manage tasks effectively. You can add, update, delete, and track the status of tasks, as well as list tasks by their status.

Challenge from [Roadmap.sh](https://roadmap.sh/projects/task-tracker)

---

## Features

1. **Add a Task**: Create a new task with a unique ID, description, and default status (`todo`).
2. **Update a Task**: Modify the description of an existing task.
3. **Delete a Task**: Remove a task permanently.
4. **Track Task Status**: Change a task's status to `in-progress` or `done`.
5. **List Tasks**:
   - View all tasks.
   - Filter tasks by their status (`done`, `todo`, `in-progress`).

---

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone the repository or download the source code.
3. Navigate to the project directory:
   ```bash
   cd task-tracker-cli
   ```
4. Run the CLI using:
   ```bash
   node app.js
   ```

## Usage

1. Adding a New Task:
   ```bash
   node app.js add "Buy groceries"
   ```
2. Updating an Existing Task:
   ```bash
   node app.js update <task_id> "New task description"
   ```
   Example:
   ```bash
   node app.js update 1 "Buy groceries and cook dinner"
   ```
