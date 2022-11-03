import "../CssBaselines.css";
// import "../CssBaselinesScss.scss";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default Layout;
