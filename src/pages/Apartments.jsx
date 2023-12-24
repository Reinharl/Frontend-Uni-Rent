import Navbar from "../components/NavbarAndFooter/Navbar.jsx";
import Footer from "../components/NavbarAndFooter/Footer.jsx";
import Sidebar from "../components/Apartments/Sidebar.jsx";
import {useState} from "react";
import Grid from "../components/Apartments/Grid.jsx";

function Apartments() {

    const [city, setCity] = useState("");
    const [heating, setHeating] = useState("");
    const [animals, setAnimals] = useState("");
    const [wifi, setWifi] = useState("");
    const [elevator, setElevator] = useState("");
    const [kitchen, setKitchen] = useState("");
    const [washing_machine, setWashing_machine] = useState("");
    const [dishwasher, setDishwasher] = useState("");
    const [room_study, setRoom_study] = useState("");
    const [garden, setGarden] = useState("");
    const [alarm, setAlarm] = useState("");
    const [air_conditioning, setAir_conditioning] = useState("");
    const [furniture, setFurniture] = useState("");
    const [ensuite_bathroom, setEnsuite_bathroom] = useState("");
    const [soundproof_windows, setSoundproof_windows] = useState("");
    const [bills_included, setBills_included] = useState("");
    const [bike_storage, setBike_storage] = useState("");

    return (
        <div className={"flex flex-col min-h-screen"}>
            <Navbar currentPage={"Annunci"} isWrapActive={false}/>
            <main className={"flex flex-col sm:flex-row flex-grow"}>
                <Sidebar
                    setCity={setCity}
                    setHeating={setHeating}
                    setAnimals={setAnimals}
                    setWifi={setWifi}
                    setElevator={setElevator}
                    setKitchen={setKitchen}
                    setWashing_machine={setWashing_machine}
                    setDishwasher={setDishwasher}
                    setRoom_study={setRoom_study}
                    setGarden={setGarden}
                    setAlarm={setAlarm}
                    setAir_conditioning={setAir_conditioning}
                    setFurniture={setFurniture}
                    setEnsuite_bathroom={setEnsuite_bathroom}
                    setSoundproof_windows={setSoundproof_windows}
                    setBills_included={setBills_included}
                    setBike_storage={setBike_storage}
                />
                <Grid
                    city={city}
                    heating={heating}
                    animals={animals}
                    wifi={wifi}
                    elevator={elevator}
                    kitchen={kitchen}
                    washing_machine={washing_machine}
                    dishwasher={dishwasher}
                    room_study={room_study}
                    garden={garden}
                    alarm={alarm}
                    air_conditioning={air_conditioning}
                    furniture={furniture}
                    ensuite_bathroom={ensuite_bathroom}
                    soundproof_windows={soundproof_windows}
                    bills_included={bills_included}
                    bike_storage={bike_storage}
                />
            </main>
            <Footer isWrapActive={false}/>
        </div>
    );
}

export default Apartments;