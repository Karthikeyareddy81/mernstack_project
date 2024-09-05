import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const UpdateEmployee = ()=>{
    const navigate = useNavigate();
    const {e_id,e_name,e_sal,e_image} = useParams();
    const [employee,setEmployee] = useState({"e_id":parseInt(e_id) || '',
                                                "e_name":e_name || '',
                                                "e_sal":parseInt(e_sal) || '',
                                                "e_image":e_image || ''});
    const submit_data = async (event)=>{
        event.preventDefault();
        const {data} = await axios.put("http://localhost:8800/update",employee);
        const {msg} = data;
        if(msg == "record updated successfully !!!"){
            navigate("/");
        }else{
            navigate("/update");
        }
    }
    const func_one = (event)=>{
        setEmployee({...employee, [event.target.name]: event.target.value});
    }
    return(
        <>
            <form onSubmit={submit_data}>
                <input type="text" name="e_id" value={employee.e_id} onChange={func_one} readOnly></input>
                <br></br><br></br>
                <input type="text" name="e_name" value={employee.e_name} onChange={func_one}></input>
                <br></br><br></br>
                <input type="number" name="e_sal" value={employee.e_sal} onChange={func_one}></input>
                <br></br><br></br>
                <input type="text" name="e_image" value={employee.e_image} onChange={func_one}></input>
                <br></br><br></br>
                <input type="submit" value={"Update"}></input>
            </form>
        </>
    )
}
export default UpdateEmployee;

// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const UpdateEmployee = () => {
//   const navigate = useNavigate();
//   const { e_id, e_name, e_sal, e_image } = useParams();
//   const [employee, setEmployee] = useState({
//     e_id: parseInt(e_id) || '',
//     e_name: e_name || '',
//     e_sal: parseInt(e_sal) || '',
//     e_image: e_image || ''
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     let newErrors = {};
    
//     if (!employee.e_name) {
//       newErrors.e_name = "Name is required.";
//     }
    
//     if (!employee.e_sal || employee.e_sal <= 0) {
//       newErrors.e_sal = "Salary must be a positive number.";
//     }

//     // Basic URL validation (optional, depending on your needs)
//     if (employee.e_image && !isValidURL(employee.e_image)) {
//       newErrors.e_image = "Invalid URL format.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const isValidURL = (string) => {
//     // Simple URL validation regex
//     const res = string.match(
//       /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([/\w \.-])\/?$/
//     );
//     return res !== null;
//   };

//   const submit_data = async (event) => {
//     event.preventDefault();

//     if (!validate()) {
//       return; // If validation fails, do not proceed
//     }

//     try {
//       const { data } = await axios.put("http://localhost:8080/update", employee);
//       const { msg } = data;
//       if (msg === "record updated successfully !!!") {
//         navigate("/");
//       } else {
//         navigate("/update");
//       }
//     } catch (error) {
//       console.error("Failed to update employee:", error);
//       // Handle error (e.g., show a message to the user)
//     }
//   };

//   const func_one = (event) => {
//     setEmployee({ ...employee, [event.target.name]: event.target.value });
//   };

//   return (
//     <>
//       <form onSubmit={submit_data}>
//         <input
//           type="number"
//           name="e_id"
//           value={employee.e_id}
//           onChange={func_one}
//           readOnly
//         />
//         <br />
//         <br />

//         <input
//           type="text"
//           name="e_name"
//           value={employee.e_name}
//           onChange={func_one}
//         />
//         {errors.e_name && <div style={{ color: "red" }}>{errors.e_name}</div>}
//         <br />
//         <br />

//         <input
//           type="number"
//           name="e_sal"
//           value={employee.e_sal}
//           onChange={func_one}
//         />
//         {errors.e_sal && <div style={{ color: "red" }}>{errors.e_sal}</div>}
//         <br />
//         <br />

//         <input
//           type="text"
//           name="e_image"
//           value={employee.e_image}
//           onChange={func_one}
//         />
//         {errors.e_image && <div style={{ color: "red" }}>{errors.e_image}</div>}
//         <br />
//         <br />

//         <input type="submit" value={"Update"} />
//       </form>
//     </>
//   );
// };

// export default UpdateEmployee;