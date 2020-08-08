import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import FirstName from "./FirstName.jsx";
import LastName from "./LastName.jsx";
import Email from "./Email.jsx";
import PredefinedSkillItem from "./PredefinedSkillItem.jsx";
import DesiredSkillItem from "./DesiredSkillItem.jsx";
import StudentContext from "../StudentContext.js";

const EditStudent = (props) => {
  const { predefinedSkills, desiredSkills, mockStudent } = props;

  const { currentStudent } = useContext(StudentContext);

  const { register, handleSubmit, errors, reset, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="add_student">
        <form className="add_student_form" onSubmit={handleSubmit(onSubmit)}>
          <FirstName
            register={register}
            errors={errors}
            mockStudent={mockStudent}
          />
          <LastName
            register={register}
            errors={errors}
            mockStudent={mockStudent}
          />
          <Email
            register={register}
            errors={errors}
            mockStudent={mockStudent}
          />
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
                    mockStudent={mockStudent}
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
                    mockStudent={mockStudent}
                  />
                ))}
              </ul>
            </div>
          </div>
          <button className="add_student_button" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
