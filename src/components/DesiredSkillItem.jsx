import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const DesiredSkillItem = ({
  skill,
  register,
  errors,
  addDesired,
  onAddDesired,
}) => {
  const location = useLocation();

  const skillSelected = (e) => {
    const chosenSkill = e.target.id;
    e.target.checked && location.pathname == "/add_student"
      ? addDesired(chosenSkill)
      : onAddDesired(chosenSkill);
  };

  return (
    <li>
      <input
        type="checkbox"
        id={skill.name}
        name={skill.skill}
        ref={register}
        onChange={(e) => skillSelected(e)}
      />
      <label htmlFor={skill.skill} className="skills_label">
        {skill.name}
      </label>
    </li>
  );
};

export default DesiredSkillItem;
