import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const PredefinedSkills = (props) => {
  const { skill } = props;

  const [skills, setSkills] = useState([{}]);

  const { register, watch } = useForm();
  const predefinedSkill = watch(skill.skill);

  const handleChange = (e) => {
    const skillName = e.target.id;
    const skillLevel = e.target.value;
    setSkills((skills) => skills + { skill: skillName, level: skillLevel });
  };

  useEffect(() => {
    console.log(skills);
    props.predefinedSkillsUpdate(skills);
  }, [skills]);

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
          <select
            id={skill.name}
            name={skill.rating}
            ref={register}
            onChange={(e) => handleChange(e)}
          >
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
