import PropTypes from "prop-types";

export const Filter = ({ onFilter, filter }) => {
  return (
    <label>
      Filter contacts by name
      <input onChange={onFilter} value={filter} name="filter" type="text" />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
