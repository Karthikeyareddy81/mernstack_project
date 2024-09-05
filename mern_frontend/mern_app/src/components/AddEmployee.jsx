import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const AddEmployee = ()=>{
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const navigate = useNavigate();
    const save = async ()=>{
        const {data} = await axios.post("http://localhost:8800/insert",{"e_id":parseInt(ref1.current.value),
                                                "e_name":ref2.current.value,
                                                "e_sal":parseInt(ref3.current.value),
                                                "e_image":ref4.current.value});
        const {msg} = data;
        if(msg == "record saved successfully !!!"){
            navigate("/");
        }else{
            navigate("/add");
        }
    }
    return(
        <>
            <fieldset>
                <legend>Employee</legend>
                <input type="number" ref={ref1} placeholder="enter employee id"></input>
                <br></br><br></br>
                <input type="text" ref={ref2} placeholder="enter employee name"></input>
                <br></br><br></br>
                <input type="number" ref={ref3} placeholder="enter employee salary"></input>
                <br></br><br></br>
                <input type="text" ref={ref4} placeholder="enter employee image"></input>
                <br></br><br></br>
                <button onClick={save}>Save</button>
            </fieldset>
        </>
    )
}
export default AddEmployee;