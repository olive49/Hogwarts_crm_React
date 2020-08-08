import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import PredefinedSkillItem from "./PredefinedSkillItem.jsx";
import DesiredSkillItem from "./DesiredSkillItem.jsx";
import FirstName from "./FirstName.jsx";
import LastName from "./LastName.jsx";
import Email from "./Email.jsx";

const AddStudent = (props) => {
  const { predefinedSkills, desiredSkills, onAddStudent } = props;

  const { register, handleSubmit, errors, reset, watch } = useForm();

  const onSubmit = (data) => {
    onAddStudent(data);
    const fullName = data.firstName + " " + data.lastName;
    alert(`${fullName} successfully added!`);
    reset({ defaultValues });
  };
  const defaultValues = {
    select: "",
    input: "",
  };

  return (
    <div className="add_student">
      <form className="add_student_form" onSubmit={handleSubmit(onSubmit)}>
        <FirstName register={register} errors={errors} />
        <LastName register={register} errors={errors} />
        <Email register={register} errors={errors} />
        <div className="all_skills">
          <div className="predefined_skills">
            <h3>Predefined Skills</h3>
            <ul className="predefined_skills_ul">
              {predefinedSkills.map((skill) => (
                <PredefinedSkillItem
                  key={`${skill.skill}`}
                  skill={skill}
                  register={register}
                  watch={watch}
                  errors={errors}
                />
              ))}
            </ul>
          </div>
          <div className="desired_skills">
            <h3>Desired Skills</h3>
            <ul className="desired_skills_ul">
              {desiredSkills.map((skill) => (
                <DesiredSkillItem
                  key={`${skill.skill}`}
                  skill={skill}
                  register={register}
                  errors={errors}
                />
              ))}
            </ul>
          </div>
        </div>
        <button className="add_student_button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
