import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const API_URL = 'https://todo-backend-4ull.onrender.com/tasks';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(setTasks)
      .catch(console.error);
  }, []);

  const addTask = (task) => {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    })
      .then(res => res.json())
      .then(newTask => setTasks(prev => [...prev, newTask]))
      .catch(console.error);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center my-2 border-b border-gray-200 drop-shadow-md pb-2">
      <h1 className="text-3xl font-bold">📝Todo List</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 h-10 rounded-md font-semibold"
        >
           Add Task
        </button>
      </div>


      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ❌
            </button>
            <TaskForm onAdd={(task) => { addTask(task); setIsFormOpen(false); }} />
          </div>
        </div>
      )}

      <TaskList tasks={tasks} />
    </div>
  );
}
