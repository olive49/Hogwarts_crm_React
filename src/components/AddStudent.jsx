import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PredefinedSkills from "./PredefinedSkills.jsx";
import DesiredSkills from "./DesiredSkills.jsx";

const AddStudent = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const { register, handleSubmit, errors, reset, watch } = useForm();

  const predefinedSkills = [
    {
      skill: "predefined_potionMaking",
      name: "Potion Making",
      rating: "predefined_potionMaking_rating",
    },
    {
      skill: "predefined_spells",
      name: "Spells",
      rating: "predefined_spells_rating",
    },
    {
      skill: "predefined_quidditch",
      name: "Quidditch",
      rating: "predefined_quidditch_rating",
    },
    {
      skill: "predefined_apparate",
      name: "Apparate",
      rating: "predefined_apparate_rating",
    },
    {
      skill: "predefined_metamorphmagi",
      name: "Metamorphmagi",
      rating: "predefined_metamorphmagi_rating",
    },
    {
      skill: "desired_parseltongue",
      name: "Parseltongue",
      rating: "predefined_parseltongue_rating",
    },
  ];

  const desiredSkills = [
    {
      skill: "desired_potionMaking",
      name: "Potion Making",
    },
    {
      skill: "desired_spells",
      name: "Spells",
    },
    {
      skill: "desired_quidditch",
      name: "Quidditch",
    },
    {
      skill: "desired_apparate",
      name: "Apparate",
    },
    {
      skill: "desired_metamorphmagi",
      name: "Metamorphmagi",
    },
    {
      skill: "desired_parseltongue",
      name: "Parseltongue",
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="add_student">
      <form className="add_student_form" onSubmit={handleSubmit(onSubmit)}>
        <span className="add_student_span">First Name</span>
        <input
          type="text"
          name="firstName"
          className="add_student_input"
          ref={register({ required: true })}
        />
        {errors.firstName && errors.firstName.type === "required" && (
          <span className="error_message">This field is required</span>
        )}
        <span className="add_student_span">Last Name</span>
        <input
          type="text"
          name="lastName"
          className="add_student_input"
          ref={register({ required: true })}
        />
        {errors.lastName && errors.lastName.type === "required" && (
          <span className="error_message">This field is required</span>
        )}
        <span className="add_student_span">Email</span>
        <input
          type="email"
          name="email"
          className="add_student_input"
          ref={register({ required: true })}
        />
        {errors.email && errors.email.type === "required" && (
          <span className="error_message">This field is required</span>
        )}
        <div className="all_skills">
          <div className="predefined_skills">
            <h3>Predefined Skills</h3>
            <ul className="predefined_skills_ul">
              {predefinedSkills.map((skill) => (
                <PredefinedSkills key={`${skill.skill}`} skill={skill} />
              ))}
            </ul>
          </div>
          <div className="desired_skills">
            <h3>Desired Skills</h3>
            <ul className="desired_skills_ul">
              {desiredSkills.map((skill) => (
                <DesiredSkills key={`${skill.skill}`} skill={skill} />
              ))}
            </ul>
          </div>
        </div>
        <button
          className="add_student_button"
          type="submit"
          // disabled={loggedIn === false}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
