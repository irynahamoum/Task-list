import { useState, useEffect } from 'react';
import css from './App.module.css';
import Form from '../Form/Form';
import TaskList from '../TaskList/TaskList';
import Filter from '../Filter/Filter';
import initialTasks from '../tasks.json';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(window.localStorage.getItem('saved-tasks'));
    return savedTasks !== null ? savedTasks : initialTasks;
  });

  const [filter, setFilter] = useState('');
  const addTask = (newTask) => {
    setTasks((previousTasks) => {
      return [...previousTasks, newTask];
    });
  };
  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (taskId) => {
    setTasks((previousTasks) => {
      return previousTasks.filter((task) => task.id !== taskId);
    });
  };
  const displayedTasks = tasks.filter((task) => task.text.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className={css.container}>
      <h1 className={css.title}>YOUR TASKS</h1>
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList onDelete={deleteTask} tasks={displayedTasks} />
    </div>
  );
};

export default App;
