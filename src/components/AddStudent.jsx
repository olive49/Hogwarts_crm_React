import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import PredefinedSkillItem from "./PredefinedSkillItem.jsx";
import DesiredSkillItem from "./DesiredSkillItem.jsx";
import FirstName from "./FirstName.jsx";
import LastName from "./LastName.jsx";
import Email from "./Email.jsx";
import axios from "axios";

const AddStudent = ({ predefinedSkills, desiredSkills, onAddStudent }) => {
  const { register, handleSubmit, errors, reset, watch } = useForm();
  const [predefined, setPredefined] = useState([]);
  const [desired, setDesired] = useState([]);

  const addPredefinedSkills = (skill, level) => {
    setPredefined((predefined) =>
      predefined.concat({ skill: skill, level: level })
    );
  };

  const addDesiredSkills = (skill) => {
    setDesired((desired) => desired.concat(skill));
  };

  const onSubmit = (data) => {
    onAddStudent(data);
    console.log(data);
    console.log(predefined);
    console.log(desired);
    reset({ defaultValues });
    axios
      .post("/students/add", {
        student_id: 12345678,
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        existing_magic_skills: predefined,
        desired_magic_skills: desired,
      })
      .then((response) => {
        console.log(response).then(setPredefined()).then(setDesired());
      })
      .catch((error) => {
        console.log(error);
      });
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
                  key={`${skill.skill}_${skill.name}`}
                  skill={skill}
                  register={register}
                  watch={watch}
                  errors={errors}
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
                  key={`${skill.skill}_${skill.name}}`}
                  skill={skill}
                  register={register}
                  errors={errors}
                  addDesired={(skill) => addDesiredSkills(skill)}
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
