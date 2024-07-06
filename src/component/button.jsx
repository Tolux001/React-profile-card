import React from "react";
import "../index.css";

export default function Button({ contentName, description, level }) {
  return (
    <>
      <button style={{ backgroundColor: contentName }}>
        {description} {level == "advanced" && "🦾"}
        {level == "intermediate" && "👍"}
        {level == "beginner" && "👤"}
      </button>
    </>
  );
}
