import React from "react";

export default function Activity(props) {
  return (
    <div key={props.key}>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <span>{props.date}</span>
    </div>
  );
}