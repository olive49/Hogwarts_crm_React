import React, { useState, useEffect } from "react";
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

  const [checked, setChecked] = useState(false);
  const [level, setLevel] = useState("level");

  const skillLevelSelected = (e) => {
    const chosenSkill = e.target.id;
    const chosenSkillLevel = e.target.value;
    setLevel(e.target.value);
    addPredefined(chosenSkill, chosenSkillLevel);
  };

  useEffect(() => {
    if (location.pathname !== "/add_student") {
      console.log(
        mockStudent["Existing_skills"],
        "selected student existing skills"
      );
      console.log(typeof mockStudent["Existing_skills"]);
      const getSkill = (item) => {
        if (item.skillName === skill.name) {
          console.log(item.skillName, item.skillLevel);
          setLevel(item.skillLevel);
          return item.skillLevel;
        }
      };
      if (mockStudent["Existing_skills"].some(getSkill)) {
        setChecked(true);
      }
    }
  }, []);

  const skillSelected = () => {
    setChecked(!checked);
    setLevel("level");
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
        checked={checked}
        onChange={() => {
          skillSelected();
        }}
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
              ref={register}
              defaultValue={level}
              onChange={(e) => skillLevelSelected(e)}
            >
              {optionsMap}
            </select>
          </span>
        )
      ) : level == "level" ? (
        predefinedSkill && (
          <span>
            <label htmlFor={skill.rating}></label>
            <select
              id={skill.name}
              name={skill.rating}
              ref={register}
              value={level}
              onChange={(e) => skillLevelSelected(e)}
            >
              {optionsMap}
            </select>
          </span>
        )
      ) : (
        <span>
          <label htmlFor={skill.rating}></label>
          <select
            id={skill.name}
            name={skill.rating}
            ref={register}
            value={level}
            onChange={(e) => skillLevelSelected(e)}
          >
            {optionsMap}
          </select>
        </span>
      )}
    </li>
  );
};

export default PredefinedSkillItem;
