import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { List } from "@material-ui/core";

const PredefinedSkillItem = ({
  skill,
  register,
  watch,
  addPredefined,
  mockStudent,
  skillList,
  errors,
}) => {
  const location = useLocation();

  const predefinedSkill = watch(skill.skill);

  const [checked, setChecked] = useState(false);

  const skillLevelSelected = (e) => {
    const chosenSkill = e.target.id;
    const chosenSkillLevel = e.target.value;
    addPredefined(chosenSkill, chosenSkillLevel);
  };

  useEffect(() => {
    console.log("mock", mockStudent);
    console.log(skill);
    if (location.pathname !== "/add_student") {
      const getSkill = (item) => {
        return item.skillName === skill.name;
      };

      if (mockStudent.existing_magic_skills.some(getSkill)) {
        setChecked(true);
      }
    }
    //   debugger;
    //   console.log(skillList.includes(mockStudent.existing_magic_skills.))
    //   mockStudent.existing_magic_skills.forEach((eSkill) => {
    //     skillList.forEach((skillItem) => {
    //       if (eSkill.skillName === skillItem.name) {
    //         console.log(eSkill.skillName);
    // setChecked(true);
    //       } else {
    //         setChecked(false);
    //       }
    //     });
    //   });
    // }
  });

  const skillSelected = () => {
    setChecked(!checked);
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
        onClick={() => skillSelected()}
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
            defaultChecked={skill.rating}
            defaultValue={skill.rating}
            onChange={(e) => skillSelected(e)}
          >
            {optionsMap}
          </select>
        </span>
      )}
    </li>
  );
};

export default PredefinedSkillItem;
