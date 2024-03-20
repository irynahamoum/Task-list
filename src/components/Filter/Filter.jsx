import css from './Filter.module.css';
const Filter = ({ value, onFilter }) => {
  const handleChange = (event) => {
    onFilter(event.target.value);
  };
  return (
    <div className={css.filterContainer}>
      <p className={css.label}>Search by word:</p>
      <input
        className={css.filterInput}
        placeholder="Enter words for search..."
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
