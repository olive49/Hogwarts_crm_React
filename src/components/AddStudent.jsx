import React from "react";
import { useForm } from "react-hook-form";

const AddStudent = () => {
  const { register, handleSubmit, errors, reset, watch } = useForm();
  const predefinedPotionMaking = watch("predefined_potionMaking");
  const predefinedSpells = watch("predefined_spells");
  const predefinedQuidditch = watch("predefined_quidditch");
  const predefinedApparate = watch("predefined_apparate");
  const predefinedMetamorphmagi = watch("predefined_metamorphmagi");
  const predefinedParseltongue = watch("predefined_parseltongue");
  const desiredPotionMaking = watch("desired_potionMaking");
  const desiredSpells = watch("desired_spells");
  const desiredQuidditch = watch("desired_quidditch");
  const desiredApparate = watch("desired_apparate");
  const desiredMetamorphmagi = watch("desired_metamorphmagi");
  const desiredParseltongue = watch("desired_parseltongue");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="add_student">
      <form className="add_student_form" onSubmit={handleSubmit(onSubmit)}>
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
        <div className="all_skills">
          <div className="predefined_skills">
            <h3>Predefined Skills</h3>
            <div>
              <input
                type="checkbox"
                id="predefined_potionMaking"
                name="predefined_potionMaking"
                ref={register}
              />
              <label htmlFor="potionMaking" className="skills_label">
                Potion Making
              </label>
              {predefinedPotionMaking && (
                <span>
                  <label htmlFor="predefined_potionMaking_rating">Rating</label>
                  <select
                    id="predefined_potionMaking_rating"
                    name="predefined_potionMaking_rating"
                    ref={register}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </span>
              )}
            </div>
            <div>
              <input
                type="checkbox"
                id="predefined_spells"
                name="predefined_spells"
                ref={register}
                className="predefined_skills_input"
              />
              <label htmlFor="spells" className="skills_label">
                Spells
              </label>
              {predefinedSpells && (
                <span>
                  <label
                    htmlFor="predefined_spells_rating"
                    className="skills_label"
                  >
                    Rating
                  </label>
                  <select
                    id="predefined_spells_rating"
                    name="predefined_spells_rating"
                    ref={register}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </span>
              )}
            </div>
            <div>
              <input
                type="checkbox"
                id="predefined_quidditch"
                name="predefined_quidditch"
                ref={register}
                className="predefined_skills_input"
              />
              <label htmlFor="quidditch" className="skills_label">
                Quidditch{" "}
              </label>
              {predefinedQuidditch && (
                <span>
                  <label htmlFor="predefined_quidditch_rating">Rating</label>
                  <select
                    id="predefined_quidditch_rating"
                    name="predefined_quidditch_rating"
                    ref={register}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </span>
              )}
            </div>
            <div>
              <input
                type="checkbox"
                id="predefined_apparate"
                name="predefined_apparate"
                ref={register}
                className="predefined_skills_input"
              />
              <label htmlFor="apparate" className="skills_label">
                Apparate
              </label>
              {predefinedApparate && (
                <span>
                  <label htmlFor="predefined_apparate_rating">Rating</label>
                  <select
                    id="predefined_apparate_rating"
                    name="predefined_apparate_rating"
                    ref={register}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </span>
              )}
            </div>
            <div>
              <input
                type="checkbox"
                id="predefined_metamorphmagi"
                name="predefined_metamorphmagi"
                ref={register}
                className="predefined_skills_input"
              />
              <label htmlFor="metamorphmagi" className="skills_label">
                Metamorphmagi
              </label>
              {predefinedMetamorphmagi && (
                <span>
                  <label htmlFor="predefined_metamorphmagi_rating">
                    Rating
                  </label>
                  <select
                    id="predefined_metamorphmagi_rating"
                    name="predefined_metamorphmagi_rating"
                    ref={register}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </span>
              )}
            </div>
            <div>
              <input
                type="checkbox"
                id="predefined_parseltongue"
                name="predefined_parseltongue"
                ref={register}
              />
              <label htmlFor="parseltongue" className="skills_label">
                Parseltongue
              </label>
              {predefinedParseltongue && (
                <span>
                  <label htmlFor="predefined_parseltongue_rating">Rating</label>
                  <select
                    id="predefined_parseltongue_rating"
                    name="predefined_parseltongue_rating"
                    ref={register}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </span>
              )}
            </div>
          </div>
          <div className="desired_skills">
            <h3>Desired Skills</h3>
            <div>
              <input
                type="checkbox"
                id="desired_potionMaking"
                name="desired_potionMaking"
                ref={register}
              />
              <label htmlFor="potionMaking" className="skills_label">
                Potion Making
              </label>
              {desiredPotionMaking && (
                <span>
                  <label htmlFor="desired_potionMaking_rating">Rating</label>
                  <select
                    id="desired_potionMaking_rating"
                    name="desired_potionMaking_rating"
                    ref={register}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </span>
              )}
            </div>
            <div>
              <input
                type="checkbox"
                id="desired_spells"
                name="desired_spells"
                ref={register}
              />
              <label htmlFor="spells" className="skills_label">
                Spells
              </label>
              {desiredSpells && (
                <span>
                  <label htmlFor="desired_spells_rating">Rating</label>
                  <select
                    id="desired_spells_rating"
                    name="desired_spells_rating"
                    ref={register}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </span>
              )}
            </div>
            <div>
              <input
                type="checkbox"
                id="desired_quidditch"
                name="desired_quidditch"
                ref={register}
              />
              <label htmlFor="quidditch" className="skills_label">
                Quidditch
              </label>
              {desiredQuidditch && (
                <span>
                  <label htmlFor="desired_quidditch_rating">Rating</label>
                  <select
                    id="desired_quidditch_rating"
                    name="desired_quidditch_rating"
                    ref={register}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </span>
              )}
            </div>
            <div>
              <input
                type="checkbox"
                id="desired_apparate"
                name="desired_apparate"
                ref={register}
              />
              <label htmlFor="apparate" className="skills_label">
                Apparate
              </label>
              {desiredApparate && (
                <span>
                  <label htmlFor="desired_apparate_rating">Rating</label>
                  <select
                    id="desired_apparate_rating"
                    name="desired_apparate_rating"
                    ref={register}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </span>
              )}
            </div>
            <div>
              <input
                type="checkbox"
                id="desired_metamorphmagi"
                name="desired_metamorphmagi"
                ref={register}
              />
              <label htmlFor="metamorphmagi" className="skills_label">
                Metamorphmagi
              </label>
              {desiredMetamorphmagi && (
                <span>
                  <label htmlFor="desired_metamorphmagi_rating">Rating</label>
                  <select
                    id="desired_metamorphmagi_rating"
                    name="desired_metamorphmagi_rating"
                    ref={register}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </span>
              )}
            </div>
            <div>
              <input
                type="checkbox"
                id="desired_parseltongue"
                name="desired_parseltongue"
                ref={register}
              />
              <label htmlFor="parseltongue" className="skills_label">
                Parseltongue
              </label>
              {desiredParseltongue && (
                <span>
                  <label htmlFor="desired_parseltongue_rating">Rating</label>
                  <select
                    id="desired_parseltongue_rating"
                    name="desired_parseltongue_rating"
                    ref={register}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </span>
              )}
            </div>
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
