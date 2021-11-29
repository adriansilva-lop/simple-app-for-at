import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./index.css";

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Simple Form</h1>
        <label>First Name</label>
        <input type="text" className="textfield" {...register("firstName")} />
        <br />
        <label>Last Name</label>
        <input type="text" className="textfield" {...register("lastName")} />
        <br />
        <label>Age</label>
        <input type="number" className="numberfield" {...register("age")} />
        <br />

        <input type="submit" className="submitButton" value="Submit" />
      </form>
    </div>
  );
}
