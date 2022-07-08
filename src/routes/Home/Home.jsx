import { Outlet } from "react-router-dom";
import About from "../../components/About/About";
import Categories from "../../components/Categories/Categories";
import Cta from "../../components/Cta/Cta";
import Favorites from "../../components/Favorites/Favorites";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Home = () => {
    return (
        <>
            <Header />
            <Categories />
            <Favorites />
            <About />
            <Cta />
            <Footer />
            <Outlet />
        </>
    )
}

export default Home