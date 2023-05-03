import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export const Contact = ({ contact, deleteContact }) => {
  const { name, number, id } = contact;

  const onBtnClick = (e) => {
    deleteContact(e.target.id);
  };

  return (
    <li>
      <span>{name}</span>
      <span> - {number}</span>
      {/* <button type="button" id={id} onClick={onBtnClick}>
        Delete
      </button> */}
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={onBtnClick}
        id={id}
      >
        Delete
      </Button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
