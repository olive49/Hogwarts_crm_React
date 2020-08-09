import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const PredefinedSkillItem = ({
  skill,
  register,
  watch,
  addPredefined,
  mockStudent,
  errors,
}) => {
  const location = useLocation();

  const predefinedSkill = watch(skill.skill);

  const skillLevelSelected = (e) => {
    const chosenSkill = e.target.id;
    const chosenSkillLevel = e.target.value;
    addPredefined(chosenSkill, chosenSkillLevel);
  };

  const options = ["Level", 1, 2, 3, 4, 5];
  const optionsMap = options.map((option) => (
    <option value={option}>{option}</option>
  ));

  return (
    <li>
      <input
        type="checkbox"
        id={skill.name}
        name={skill.skill}
        ref={register}
      />
      <label htmlFor={skill.name} className="skills_label">
        {skill.name}
      </label>
      {location.pathname == "/add_student" ? (
        predefinedSkill && (
          <span>
            <label htmlFor={skill.rating}></label>
            <select
              id={skill.name}
              name={skill.rating}
              onChange={(e) => skillLevelSelected(e)}
            >
              {optionsMap}
            </select>
          </span>
        )
      ) : (
        <span>
          <label htmlFor={skill.rating}></label>
          <select id={skill.name} name={skill.rating} ref={register}>
            {optionsMap}
          </select>
        </span>
      )}
    </li>
  );
};

export default PredefinedSkillItem;
