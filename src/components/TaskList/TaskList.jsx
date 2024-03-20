import css from './TaskList.module.css';
import Task from '../Task/Task';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <>
      <ul className={css.list}>
        {tasks.map((task) => (
          <li className={css.item} key={task.id}>
            <Task data={task} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
