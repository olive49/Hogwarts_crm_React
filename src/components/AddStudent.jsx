import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PredefinedSkillItem from "./PredefinedSkillItem.jsx";
import DesiredSkillItem from "./DesiredSkillItem.jsx";
import FirstName from "./FirstName.jsx";
import LastName from "./LastName.jsx";
import Email from "./Email.jsx";

const AddStudent = () => {
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
