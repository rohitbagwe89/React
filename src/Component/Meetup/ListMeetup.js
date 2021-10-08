import MeetupItem from "./Meetup";
import CssClasses from "./MeetupItem.module.css";
import Card from "../UI/Card";
function ListMeetup(props) {
  return (
    <div>
      <ul className={CssClasses.ul}>
        <Card>
          {props.meetups.map((x) => {
            return (
              <MeetupItem
                key={x.id}
                id={x.id}
                title={x.title}
                image={x.image}
                address={x.address}
                description={x.description}
              />
            );
          })}
        </Card>
      </ul>
    </div>
  );
}
export default ListMeetup;
