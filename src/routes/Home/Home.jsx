import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Home = () => {
    return (
        <>
            <Header />
            <Footer />
            <Outlet />
        </>
    )
}

export default Home