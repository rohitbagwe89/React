import cssClasses from "./Card.module.css";
function Card(prop) {
  return <div className={cssClasses.backgound}>{prop.children}</div>;
}
export default Card;
