import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreatePage.scss";

interface IUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  username?: string;
  password?: string;
  profile?: string;

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

  const formUpdate = (value: Partial<IUser>) => {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  };

  const addToList = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/register", {
        form: form,
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create-window d-flex">
      <h1>Share your art with the World</h1>

      <form className="forms" onSubmit={addToList}>
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
        <button className="py-2 px-5 mt-2">Create Account</button>
      </form>
    </div>
  );
};

export default CreatePage;
