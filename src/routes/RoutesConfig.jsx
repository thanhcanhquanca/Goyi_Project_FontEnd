import {Routes,Route} from "react-router";
import ShowUserLayout from "../layouts/user/UserLayout.jsx";


function RoutesConfig(){
    return(
        <Routes>
            <Route>
                <Route path={"/home"} element={<ShowUserLayout/>}></Route>
            </Route>
        </Routes>
    )
}
export default RoutesConfig;