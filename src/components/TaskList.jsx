import React from 'react';
import { Calendar, ClipboardList } from 'lucide-react';

export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <p className="text-gray-500 text-center">📭 No tasks yet.</p>;
  }

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <div key={task.id} className="bg-white shadow rounded-lg p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <ClipboardList className="text-blue-600 w-5 h-5 " />
            <h3 className="text-lg font-semibold capitalize">{task.name}</h3>
          </div>
          <p className="text-gray-700">{task.description}</p>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <Calendar className="text-red-500 w-4 h-4" />
            <span>Deadline: {new Date(task.deadline).toDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
