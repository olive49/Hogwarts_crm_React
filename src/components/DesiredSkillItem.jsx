import React, { useState } from "react";

const DesiredSkillItem = ({ skill, register, errors, addDesired }) => {
  const skillSelected = (e) => {
    const chosenSkill = e.target.id;
    e.target.checked && addDesired(chosenSkill);
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
