import AddEmployee from "./AddEmployee";
import ViewEmployees from "./ViewEmployees";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import UpdateEmployee from "./UpdateEmployee";
const Parent = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ViewEmployees></ViewEmployees>}></Route>
                    <Route path="/add" element={<AddEmployee></AddEmployee>}></Route>
                    <Route path="/update/:e_id/:e_name/:e_sal/:e_image" element={<UpdateEmployee></UpdateEmployee>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Parent;