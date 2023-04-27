export const Filter = ({ onFilter, filter }) => {
  return (
    <label>
      Filter contacts by name
      <input onChange={onFilter} value={filter} name="filter" type="text" />
    </label>
  );
};
