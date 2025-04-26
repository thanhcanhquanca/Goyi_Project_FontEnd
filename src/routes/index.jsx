import {Routes,Route} from "react-router";
import ShowUser from "../layouts/index.jsx";

function RoutesIndex(){
    return(
        <Routes>
            <Route>
                <Route path={"/login"} element={<ShowUser/>}></Route>
            </Route>
        </Routes>
    )
}
export default RoutesIndex;