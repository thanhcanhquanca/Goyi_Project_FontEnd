import { Routes, Route } from "react-router";
import ShowUserLayout from "../layouts/user/UserLayout.jsx";
import ContentIndex from "../components/user/ContentIndex.jsx";

function RoutesConfig() {
    const UserContentOutlet = () => (
        <section style={{ padding: "4px" }}>
            <ContentIndex />
        </section>
    );

    return (
        <Routes>
            <Route path="/home" element={<ShowUserLayout />}>
                <Route index element={<UserContentOutlet />} />
            </Route>
        </Routes>
    );
}

export default RoutesConfig;
