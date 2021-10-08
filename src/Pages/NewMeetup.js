import AddNewMeetupForm from "../Component/NewMeetup/AddNewMeetupForm";
import { useHistory } from "react-router-dom";
function NewMeetup() {
  const history = useHistory();
  function OnAddNewMeetupHandler(data) {
    console.log(data);
    fetch("https://testreactjsapi-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.push("/ss");
    });
  }
  return (
    <AddNewMeetupForm OnAddNewMeetup={OnAddNewMeetupHandler}></AddNewMeetupForm>
  );
}
export default NewMeetup;
