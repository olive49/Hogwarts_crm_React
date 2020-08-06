import React, { useState } from "react";

const DesiredSkillItem = (props) => {
  const { skill, register } = props;

  return (
    <li>
      <input type="checkbox" id={skill.name} name={skill.name} ref={register} />
      <label htmlFor={skill.skill} className="skills_label">
        {skill.name}
      </label>
    </li>
  );
};

export default DesiredSkillItem;
