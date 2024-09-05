import { useState } from "react";
const DemoComponent = ()=>{
    const [obj,setObj] = useState({"uname":"","upwd":""});
    const login = ()=>{
        console.log(obj);
    }
    const func_one = (event)=>{
        setObj({...obj, [event.target.name] : event.target.value});
    }
    return(
        <>
            <input type="text" name="uname" value={obj.uname} onChange={func_one}></input>
            <br></br><br></br>
            <input type="password" name="upwd" value={obj.upwd} onChange={func_one}></input>
            <br></br><br></br>
            <button onClick={login}>Login</button>
        </>
    )
}
export default DemoComponent;