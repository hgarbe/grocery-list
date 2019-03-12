import React from "react";

const Thing = ({ id, name, complete, handleClick }) => (
  <li
    style={ complete ? { ...styles.complete } : { ...styles.thing } }
    onClick={() => handleClick(id)}
  >
    { name }
  </li>
)

const styles = {
  thing: { cursor: "pointer", },
  complete: { color: "red", textDecoration: "line-through", },
}

export default Thing;