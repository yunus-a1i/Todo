import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const API_URL = 'http://localhost:3001/tasks';

export default function App() {
  const [tasks, setTasks] = useState([]);

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
      <h1 className="text-3xl font-bold text-center mb-6">React Todo List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}