import React from 'react';

export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks yet.</p>;
  }

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <div key={task.id} className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold">{task.name}</h3>
          <p className="text-gray-700 mt-2">{task.description}</p>
          <p className="text-gray-500 text-sm mt-1">
            Deadline: {new Date(task.deadline).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}