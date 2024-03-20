import css from './Task.module.css';
import { Button, Flex } from 'antd';

const Task = ({ data, onDelete }) => {
  const handleClick = () => {
    onDelete(data.id);
  };
  return (
    <div className={css.taskBox}>
      <p className={css.taskText}>{data.text}</p>
      <Flex wrap="wrap" gap="small">
        <Button type="primary" danger onClick={handleClick}>
          Delete
        </Button>
      </Flex>
    </div>
  );
};

export default Task;
