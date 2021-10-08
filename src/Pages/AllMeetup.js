import ListMeetup from "../Component/Meetup/ListMeetup";
import { useState } from "react";
import { useEffect } from "react";
var DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];
function AllMeetup() {
  const [DataState, setdatastate] = useState(DUMMY_DATA);
  useEffect(() => {
    fetch("https://testreactjsapi-default-rtdb.firebaseio.com/meetups.json")
      .then((x) => {
        return x.json();
      })
      .then((x) => {
        var meetupsdata = [];
        for (var key in x) {
          meetupsdata.push(x[key]);
        }
        setdatastate(meetupsdata);
        console.log(meetupsdata);
      });
  }, []);
  return (
    <div>
      <ListMeetup meetups={DataState}></ListMeetup>
    </div>
  );
}
export default AllMeetup;
