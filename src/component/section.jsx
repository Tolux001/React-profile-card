import React from "react";
import Button from "./button.jsx";
import "../index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "blue",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "yellow",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "skyeBlue",
  },
  {
    skill: "React",
    level: "beginner",
    color: "lightBlue",
  },
  {
    skill: "Git && Github",
    level: "intermediate",
    color: "red",
  },
  {
    skill: "jQuery",
    level: "beginner",
    color: "rgb(34, 192, 139)",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "tomato",
  },
];

export default function Section() {
  const writtenSkills = skills;

  return (
    <div className="container">
      <h1 className="name">Toluwalase Peter</h1>
      <p className="note">
        Front-End web developer and tech enthusiast on twitter. When not coding
        or learning a course, I like to play board games, to cook (and eat), or
        to just enjoy the Nigerian sun at the beach.
      </p>
      <div className="buttonContainer">
        {writtenSkills.map((item) => (
          <Button
            contentName={item.color}
            description={item.skill}
            level={item.level}
            key={item.skill}
          />
        ))}
        {/* <Button contentName="btn blue" description="HTML+CSS🦾" />
        <Button contentName="btn yellow" description="JavaScript👍" />
        <Button contentName="btn skyeBlue" description="Web Design🦾" />
        <Button contentName="btn lightBlue" description="React👤" />
        <Button contentName="btn red" description="Git && Github👍" />
        <Button contentName="btn tomato" description="Svelte👤" /> */}
      </div>
    </div>
  );
}
