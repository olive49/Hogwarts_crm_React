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
    console.log(skill, level);

    setPredefined((predefined) =>
      predefined.concat({ skill: skill, level: level })
    );
  };

  const addDesiredSkills = (skill) => {
    setDesired((desired) => desired.concat(skill));
  };

  const onSubmit = (data) => {
    onAddStudent(data);
    axios
      .post("/students/add", {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        existing_magic_skills: predefined,
        desired_magic_skills: desired,
      })
      .then((response) => {
        alert(response.data);
        setPredefined([]);
        setDesired([]);
        reset({ defaultValues });
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
    <div
      style={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="add_student"
        style={{
          margin: "1rem;",
        }}
      >
        <form className="add_student_form" onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FirstName register={register} errors={errors} />
            <LastName register={register} errors={errors} />
            <Email register={register} errors={errors} />
          </div>
          <div className="all_skills" style={{ marginLeft: "2rem" }}>
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
          <div
            style={{
              textAlign: "center",
            }}
          >
            <button className="add_student_button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
