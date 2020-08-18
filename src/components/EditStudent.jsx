import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import FirstName from "./FirstName.jsx";
import LastName from "./LastName.jsx";
import Email from "./Email.jsx";
import PredefinedSkillItem from "./PredefinedSkillItem.jsx";
import DesiredSkillItem from "./DesiredSkillItem.jsx";
import StudentContext from "../StudentContext.js";

const EditStudent = ({
  predefinedSkills,
  desiredSkills,
  mockStudent,
  onEditStudent,
}) => {
  const { currentStudent } = useContext(StudentContext);
  const [predefined, setPredefined] = useState([]);
  const [desired, setDesired] = useState([]);

  const { register, handleSubmit, errors, reset, watch } = useForm();

  const addDesiredSkills = (skill) => {
    setDesired((desired) => desired.concat(skill));
  };

  const addPredefinedSkills = (skill, level) => {
    console.log(skill, level);

    setPredefined((predefined) =>
      predefined.concat({ skill: skill, level: level })
    );
  };

  const onSubmit = (data) => {
    onEditStudent(data, desired);
  };

  useEffect(() => {
    console.log(currentStudent);
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="add_student">
        <form className="add_student_form" onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginLeft: "4rem" }}>
            <FirstName
              register={register}
              errors={errors}
              mockStudent={currentStudent}
            />
            <LastName
              register={register}
              errors={errors}
              mockStudent={currentStudent}
            />
            <Email
              register={register}
              errors={errors}
              mockStudent={currentStudent}
            />
          </div>
          <div className="all_skills">
            <div className="predefined_skills">
              <h3>Predefined Skills</h3>
              <ul className="predefined_skills_ul">
                {predefinedSkills.map((skill) => (
                  <PredefinedSkillItem
                    key={`${skill.skill}`}
                    skill={skill}
                    skillList={predefinedSkills}
                    register={register}
                    watch={watch}
                    mockStudent={currentStudent}
                    addPredefined={(skill, level) =>
                      addPredefinedSkills(skill, level)
                    }
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
                    mockStudent={currentStudent}
                    onAddDesired={(skill) => addDesiredSkills(skill)}
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
