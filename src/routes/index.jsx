import {Routes,Route} from "react-router";
import ShowUser from "../layouts/user/index.jsx";
import ShowUserHome from "../layouts/user/index.jsx";

function RoutesIndex(){
    return(
        <Routes>
            <Route>
                <Route path={"/home"} element={<ShowUserHome/>}></Route>
            </Route>
        </Routes>
    )
}
export default RoutesIndex;