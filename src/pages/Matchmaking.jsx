import Navbar from "../components/NavbarAndFooter/Navbar.jsx";
import Footer from "../components/NavbarAndFooter/Footer.jsx";
import MatchmakingForm from "../components/Matchmaking/MatchmakingForm.jsx";

function Matchmaking() {
    return (
        <div className={"flex flex-col min-h-screen"}>
            <Navbar currentPage={"Matchmaking"} isWrapActive={true}/>
            <main className={"flex flex-grow mt-16"}>
                <MatchmakingForm/>
            </main>
            <Footer isWrapActive={true}/>
        </div>
    );
}

export default Matchmaking;