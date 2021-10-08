import Model from "./Model";
import Backdrop from "./Backdrop";
import { useState } from "react";
function Todo(props) {
  const [IspOpen, SetIsopen] = new useState(false);
  function ClickToggel() {
    console.log("Cliecked");
    SetIsopen(!IspOpen);
  }
  return (
    <div>
      <h2> {props.Text == undefined ? props.Name : props.Text}</h2>
      <div className="actions">
        <button className="btn" onClick={ClickToggel}>
          Delete
        </button>
      </div>
      {IspOpen ? <Model OnClick={ClickToggel} /> : null}
      {IspOpen ? <Backdrop OnClick={ClickToggel} /> : null}
    </div>
  );
}

export default Todo;
