import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const Home = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Home