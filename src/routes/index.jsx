import {Routes,Route} from "react-router";
import ShowUser from "../layouts/index.jsx";
import ShowUserHome from "../layouts/index.jsx";

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