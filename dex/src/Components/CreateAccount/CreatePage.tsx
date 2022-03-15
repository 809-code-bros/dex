import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CreatePage.scss";

interface IUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  username?: string;
  password?: string;
}

export const CreatePage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const formUpdate = (value: IUser) => {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  };

  const onSubmit = async (e: any) => {
    e.prevenDefault();

    const newPerson = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
    });

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
    });
    navigate("/");
  };

  return (
    <div className="create-window d-flex">
      <h1>Share your art with the World</h1>
      
      <form onSubmit={onSubmit} className='forms'>
        <div>
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            value={form.firstName}
            onChange={(e) => formUpdate({ firstName: e.target.value })}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            value={form.lastName}
            onChange={(e) => formUpdate({ lastName: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"   
            id="email"
            value={form.email}
            onChange={(e) => formUpdate({ email: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            id="username"
            value={form.username}
            onChange={(e) => formUpdate({ username: e.target.value })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={form.password}
            onChange={(e) => formUpdate({ password: e.target.value })}
          />
        </div>
         <button type="submit" className='py-2 px-5 mt-2'>Create Account</button>

      </form>
    </div>
  );
};

export default CreatePage;
