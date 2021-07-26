import React from "react";



const Technologie = (props) => {
  return (
    <div>
      <i className={props.tech}></i>
      <h1>{props.title}</h1>
      <p>{props.para}</p>
    </div>
  );
};

export default Technologie;
