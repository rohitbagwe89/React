function Model(prop) {
  return (
    <div className="modal">
      <p>Are you sure</p>
      <button className="btn btn--all" onClick={prop.OnClick}>
        Cancel
      </button>
      <button className="btn" onClick={prop.OnClick}>
        Confirm
      </button>
    </div>
  );
}
export default Model;
