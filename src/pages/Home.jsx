import Footer from "../components/NavbarAndFooter/Footer.jsx";
import Navbar from "../components/NavbarAndFooter/Navbar.jsx";
import Jumbotron from "../components/Home/Jumbotron.jsx";
import About from "../components/Home/About.jsx";
import Service from "../components/Home/Service.jsx";
import {useEffect} from "react";
import AOS from "aos";
import Team from "../components/Home/Team.jsx";

function Home() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Navbar isWrapActive={true}/>
            <main>
                <Jumbotron/>
                <About/>
                <Service/>
                <Team/>
            </main>
            <Footer isWrapActive={true}/>
        </>
    );
}

export default Home;