import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ViewEmployees = ()=>{
    const [employees,setEmployees] = useState([]);
    const fetch = async ()=>{
        const res = await axios.get("http://localhost:8800/employees");
        const {data} = res;
        setEmployees(data);
    }
    useEffect(()=>{
        fetch();
    },[employees]);
    const delete_func = async (e_id)=>{
        const res = await axios.delete("http://localhost:8800/delete",{"data":{"e_id":e_id}});
    }
    const navigate = useNavigate();
    const add = () => {
        navigate("/add");
    };
    const edit = (e_id,e_name,e_sal,e_image)=>{
        const encodedImageUrl = encodeURIComponent(e_image);
        navigate(`/update/${e_id}/${e_name}/${e_sal}/${encodedImageUrl}`);
    };
    return(
        <>
            <button onClick={add} style={{marginLeft:350,marginBottom:5}}>Add Employees</button>  
            <table border={1}
                    align="center"
                    cellSpacing={10}
                    cellPadding={10}>
                <thead>
                    <tr>
                        <th>e_id</th>
                        <th>e_name</th>
                        <th>e_sal</th>
                        <th>e_image</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((element,index)=>{
                            return(<tr>
                                <td>{element.e_id}</td>
                                <td>{element.e_name}</td>
                                <td>{element.e_sal}</td>
                                <td>
                                    <img src={element.e_image} width={50} alt="error"></img>
                                </td>
                                <td>
                                    <i className="fa fa-edit"
                                        onClick={()=>edit(element.e_id,element.e_name,element.e_sal,element.e_image)}></i>
                                </td>
                                <td>
                                    <i className="fa fa-trash" onClick={()=>delete_func(element.e_id)}></i>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    )
}
export default ViewEmployees;