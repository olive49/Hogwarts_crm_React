import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const DesiredSkillItem = ({
  skill,
  register,
  errors,
  addDesired,
  onAddDesired,
  mockStudent,
}) => {
  const location = useLocation();
  const [checked, setChecked] = useState(false);

  const skillSelected = (e) => {
    setChecked(!checked);
    const chosenSkill = e.target.id;
    if (e.target.checked && location.pathname == "/add_student") {
      addDesired(chosenSkill);
    } else if (e.target.checked && location.pathname == "/edit_student") {
      onAddDesired(chosenSkill);
    }
  };

  useEffect(() => {
    if (location.pathname !== "/add_student") {
      console.log(mockStudent.desired_magic_skills);
      const getSkill = (item) => {
        if (item === skill.name) {
          console.log(item, item.skillLevel);
          return item;
        }
      };
      if (mockStudent.desired_magic_skills.some(getSkill)) {
        setChecked(true);
      }
    }
  }, []);

  return (
    <li>
      <input
        type="checkbox"
        id={skill.name}
        name={skill.skill}
        ref={register}
        checked={checked}
        onChange={(e) => skillSelected(e)}
      />
      <label htmlFor={skill.skill} className="skills_label">
        {skill.name}
      </label>
    </li>
  );
};

export default DesiredSkillItem;
