import { Routes, Route } from "react-router";
import ShowUserLayout from "../layouts/user/UserLayout.jsx";
import ContentIndex from "../components/user/ContentHomeOutlet.jsx";

function RoutesConfig() {
    const UserContentHomeOutlet = () => (
        <section style={{ padding: "4px" }}>
            <ContentIndex />
        </section>
    );

    const UserContentProfileOutlet = () => (
        <section style={{ padding: "4px" }}>
            <ContentIndex />
        </section>
    );

    return (
        <Routes>
            <Route path="/home" element={<ShowUserLayout />}>
                <Route index element={<UserContentHomeOutlet />} />
                <Route index element={<UserContentProfileOutlet />} />
            </Route>
        </Routes>
    );
}

export default RoutesConfig;
