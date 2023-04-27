export const Contact = ({ contact, deleteContact }) => {
  const { name, number, id } = contact;

  const onBtnClick = (e) => {
    deleteContact(e.target.id);
  };

  return (
    <li>
      <span>{name}</span>
      <span> - {number}</span>
      <button type="button" id={id} onClick={onBtnClick}>
        Delete
      </button>
    </li>
  );
};
