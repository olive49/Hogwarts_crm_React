import React, { useState } from "react";
import { useForm } from "react-hook-form";

const PredefinedSkills = (props) => {
  const { skill } = props;
  console.log(skill);

  const { register, watch } = useForm();
  const predefinedSkill = watch(skill.skill);

  return (
    <li>
      <input
        type="checkbox"
        id={skill.skill}
        name={skill.skill}
        ref={register}
      />
      <label htmlFor={skill.skill} className="skills_label">
        {skill.name}
      </label>
      {predefinedSkill && (
        <span>
          <label htmlFor={skill.rating}>Rating</label>
          <select id={skill.rating} name={skill.rating} ref={register}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </span>
      )}
    </li>
  );
};

export default PredefinedSkills;
