'use client';

import React from 'react';
import CodePlayground from '@/components/CodePlayground';

export default function ExamplesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Interactive Examples</h1>
      
      <CodePlayground
        title="Simple Counter"
        description="A basic React counter component using hooks"
        code={`function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="p-4">
      <p className="mb-4">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
}`}
      />

      <CodePlayground
        title="Todo List"
        description="A simple todo list with add and remove functionality"
        code={`function TodoList() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <form onSubmit={addTodo} className="mb-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-3 py-2 border rounded"
          placeholder="Add a todo"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add
        </button>
      </form>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <span>{todo}</span>
            <button
              onClick={() => removeTodo(index)}
              className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
      />
    </div>
  );
} 