import React, { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
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
      return;
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

// const CreatePage = () => {

//   const[firstName, setfirstName] = useState('')

//  const [lastName, setlastName] = useState('')

//  const [email, setEmail] = useState('')

//  const [username, setuserName] = useState('')

//  const [password, setPassword] = useState('')

//   return (
//     <div className='create-window d-flex'>

//             <h1>Share your art with the World</h1>
//             <form className='forms'>
//                 <input
//                 type="text"
//                 placeholder='First Name'
//                 name="first name"
//                 value= {firstName}
//                 onChange={(e) => setfirstName(e.target.value)}

//                 />

//                 <input
//                 type="text"
//                 placeholder='Last Name'
//                 name="last name"
//                 value= {lastName}
//                 onChange={(e) => setlastName(e.target.value)}

//                 />

//                 <input
//                 type="text"
//                 placeholder='Email'
//                 name="email"
//                 value= {email}
//                 onChange={(e) => setEmail(e.target.value)}

//                 />

//                 <input
//                 type="text"
//                 placeholder='Username'
//                 name="username"
//                 value= {username}
//                 onChange={(e) => setuserName(e.target.value)}

//                  />

//                 <input
//                  type="password"
//                  placeholder='Password'
//                  name="password"
//                  value= {password}
//                  onChange={(e) => setPassword(e.target.value)}

//                  />

//                 <button type="submit" className='py-2 px-5 mt-4'>Create Account</button>

//             </form>

//     </div>
//   )
// }

// export default CreatePage
