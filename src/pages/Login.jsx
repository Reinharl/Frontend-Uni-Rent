import Navbar from "../components/NavbarAndFooter/Navbar.jsx";
import SignUp from "../components/Login/SignUp.jsx";
import SignIn from "../components/Login/SignIn.jsx";
import {useState} from "react";
import Sidebar from "../components/Apartments/Sidebar.jsx";
import Grid from "../components/Apartments/Grid.jsx";
import Footer from "../components/NavbarAndFooter/Footer.jsx";

function Login() {
    const [showSignUp, setShowSignUp] = useState(false);

    const handleClick = () => {
        setShowSignUp(!showSignUp);
    }

    return (
        <div className={"flex flex-col min-h-screen"}>
            <Navbar currentPage={"Accedi"} isWrapActive={true}/>
            <main
                className={"flex justify-center items-center flex-grow mt-16 bg-light dark:bg-dark/95 text-light dark:text-dark p-4"}>
                {showSignUp ? <SignUp onSwitch={handleClick}/> : <SignIn onSwitch={handleClick}/>}
            </main>
            <Footer isWrapActive={true}/>
        </div>
    );
}

export default Login;