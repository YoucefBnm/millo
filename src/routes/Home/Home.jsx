import { Outlet } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Home = () => {
    return (
        <>
            <Header />
            <Categories />
            <Footer />
            <Outlet />
        </>
    )
}

export default Home