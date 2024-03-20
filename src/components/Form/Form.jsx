import css from './Form.module.css';
const Form = ({ onAdd }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({
      id: Date.now(),
      text: event.target.elements.taskText.value,
    });
    event.target.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={css.formContainer}>
        <input className={css.formInput} type="text" name="taskText" />
        <button className={css.addBtn} type="submit">
          Add task
        </button>
      </form>
    </>
  );
};

export default Form;
