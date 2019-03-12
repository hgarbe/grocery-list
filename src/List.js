import React from "react";
import Thing from "./Thing";

const List = ({ items, name, handleClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {/* id: 1, name: "Learn Rails", complete: true */}
      { items.map( item => <Thing key={item.id} {...item} handleClick={handleClick} />) }
    </ul>
  </div>
)

export default List;
