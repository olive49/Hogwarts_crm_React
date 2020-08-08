import React from "react";
import { useLocation } from "react-router-dom";

const PredefinedSkillItem = (props) => {
  const { skill, register, watch, mockStudent, errors } = props;
  const location = useLocation();

  const predefinedSkill = watch(skill.skill);

  return (
    <li>
      <input
        type="checkbox"
        id={skill.skill}
        name={skill.skill}
        ref={register}
        defaultChecked={
          location.pathname == "/edit_student"
            ? mockStudent.predefinedSkills.skillName
            : ""
        }
      />
      {/* {errors.skill.skill && errors.skill.type === "required" && (
        <span className="error_message">This field is required</span>
      )} */}
      <label htmlFor={skill.skill} className="skills_label">
        {skill.name}
      </label>
      {location.pathname == "/add_student" ? (
        predefinedSkill && (
          <span>
            <label htmlFor={skill.rating}></label>
            <select
              id={skill.name}
              name="predefinedSkillRating"
              ref={register({ required: true })}
            >
              <option>Level</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
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
            def={mockStudent.predefinedSkills.skillLevel}
          >
            <option>Level</option>
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

export default PredefinedSkillItem;
