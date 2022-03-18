// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router";
// import { async } from "rxjs";


// interface IUser {
//     firstName?: string;
//     lastName?: string;
//     email?: string;
//     username?: string;
//     password?: string;
//   }

// export const Edit = () => {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     username: "",
//     password: "",
//     records: [],
//   });

//   const params = useParams();

//   const navigate = useNavigate();

//   useEffect(() => { 
//     const fetchData = async ()=> {  
//           const id = params.id.toString(); 
//           const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
        
//           if(!response.ok) { 
//               const message = `An error has occurred: ${response.statusText}`;
//               window.alert(message);
            
//           };

//           const record = await response.json(); 
//           if(!record) { 
//               window.alert(`Record with id ${id} not found`);
//               navigate("/");

//           }

//           setForm(record);
//       }

//       fetchData();

//       return;

//   },[params.id, navigate]);

//   const formUpdate = (value: IUser) => {
//     return setForm((prev) => {
//       return { ...prev, ...value };
//     });
//   }

//   const onSubmit = async (e:any) => { 
//     e.preventDefault(); 
//     const editedPerson = { 
//         firstname: form.firstName,
//         lastName: form.lastName,
//         email: form.email, 
//         username: form.username,
//         passwords: form.password

//     };

//     await fetch(`http://localhost:5000/update/${params.id}`, { 
//         method:"POST",
//         body:JSON.stringify(editedPerson), 
//         headers: { 
//             'Content-type': 'application/json'
//         },
//     });

//     navigate("/");
//   }


//   return <div>Edit</div>;
// };

// export default Edit;
