import { useRef } from "react";
function AddNewMeetupForm(prop) {
  const titleInputRef = useRef();
  const AddressInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionnputRef = useRef();

  function SumbitHandler(e) {
    const meetupdata = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      description: descriptionnputRef.current.value,
      address: AddressInputRef.current.value,
    };
    prop.OnAddNewMeetup(meetupdata);
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={SumbitHandler}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            required
            className="form-control"
            id="title"
            ref={titleInputRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="url"
            required
            className="form-control"
            id="image"
            ref={imageInputRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">address:</label>
          <input
            type="text"
            required
            className="form-control"
            id="address"
            ref={AddressInputRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">description:</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionnputRef}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-default">
          Add Meetup
        </button>
      </form>
    </div>
  );
}
export default AddNewMeetupForm;
