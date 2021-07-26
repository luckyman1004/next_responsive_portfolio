import React from "react";
import Image from "next/image";

const Year = (props) => {
  return (
    <div>
      <span>{props.title}</span>
      <Image src="/year.svg" width={150} height={4}></Image>

     
      <p>{props.para}</p>
    </div>
  );
};

export default Year;
