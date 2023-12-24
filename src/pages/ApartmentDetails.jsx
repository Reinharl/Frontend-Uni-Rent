import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import Navbar from "../components/NavbarAndFooter/Navbar.jsx";
import Footer from "../components/NavbarAndFooter/Footer.jsx";
import {Dialog} from "@headlessui/react";
import Chat from "../components/Chat/Chat.jsx";

function ApartmentDetails() {

    const {apartmentId} = useParams();
    const [apartment, setApartment] = useState(null);
    const [apartmentImages, setApartmentImages] = useState([]);
    const [owner, setOwner] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const [currentImage, setCurrentImage] = useState(null);

    const [isChatOpen, setIsChatOpen] = useState(false);


    useEffect(() => {
        fetchApartment();
        fetchApartmentImages();
        fetchOwner();
    }, []);

    const fetchApartment = async () => {

        const url = `http://localhost:8080/api/apartments/${apartmentId}`;

        setIsLoading(true);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const responseData = await response.json();

            setApartment(responseData);

        } catch (error) {
            setHttpError(error.message);
        }

        setIsLoading(false);
    };

    const fetchApartmentImages = async () => {

        const url = `http://localhost:8080/api/apartment-images/search/findByApartmentId?id=${apartmentId}`;

        setIsLoading(true);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const responseJson = await response.json();

            const responseData = responseJson._embedded["apartment-images"];

            setApartmentImages(responseData);
            setCurrentImage(responseData[0]?.image);

        } catch (error) {
            setHttpError(error.message);
        }

        setIsLoading(false);
    };

    const fetchOwner = async () => {

        const url = `http://localhost:8080/api/apartments/${apartmentId}/owner`;

        setIsLoading(true);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const responseData = await response.json();

            setOwner(responseData);

        } catch (error) {
            setHttpError(error.message);
        }

        setIsLoading(false);
    };

    if (httpError) {
        return <p>{httpError}</p>;
    }

    if (isLoading || !apartment || !owner || !apartmentImages) {
        return <p>Loading...</p>;
    }

    return (
        <div className={"flex flex-col min-h-screen bg-light dark:bg-dark/95"}>
            <Navbar isWrapActive={true}/>
            <main
                className={"flex flex-grow flex-col space-y-8 max-w-screen-xl mt-16 mx-auto py-4 px-2 sm:px-6 lg:px-8"}>
                <div className={"flex flex-col sm:flex-row gap-6 w-full"}>
                    <div className={"flex flex-col space-y-2 w-full sm:w-1/2"}>
                        {apartmentImages.length > 0
                            ? (
                                <>
                                    <img src={currentImage} alt={""}
                                         className={"h-full w-full rounded-xl object-cover aspect-square"}/>
                                    <div className={"flex space-x-2"}>
                                        {apartmentImages.map((apartmentImage) => (
                                            <img key={apartmentImage.id} src={apartmentImage.image} alt={""}
                                                 className={`w-1/5 rounded-xl object-cover aspect-square ${currentImage === apartmentImage.image ? 'ring-4 ring-primary' : ''}`}
                                                 onClick={() => setCurrentImage(apartmentImage.image)}/>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className={"flex justify-center items-center aspect-square bg-primary rounded-xl"}>
                                    <span className={"font-bold text-white text-2xl whitespace-nowrap"}>
                                        Nessun immagine
                                    </span>
                                </div>
                            )
                        }
                    </div>
                    <div className={"w-full sm:w-1/2 text-dark dark:text-light"}>
                        <h1 className={"mb-4 font-bold text-3xl tracking-wide text-clip"}>{apartment.title}</h1>
                        <h2 className={"mb-4 text-3xl"}>{apartment.monthlyPrice} € <span className={"font-normal"}>al mese</span>
                        </h2>
                        <p className={"mb-8"}>{apartment.description}</p>
                        <h3 className={"font-medium"}>Indirizzo</h3>
                        <p className={"mb-8"}>{apartment.city} - {apartment.address}, {apartment.civicNumber}</p>
                        <h3 className={"font-medium"}>Caratteristiche</h3>
                        <ul className={"ml-4 mb-8 list-disc"}>
                            <li className={"text-primary"}>
                                <p className={"text-dark dark:text-light"}>Tipo di abitazione: {apartment.type}</p>
                            </li>
                            <li className={"text-primary"}>
                                <p className={"text-dark dark:text-light"}>Dimensione: {apartment.size} metri quadri</p>
                            </li>
                            <li className={"text-primary"}>
                                <p className={"text-dark dark:text-light"}>Stanze: {apartment.rooms}</p>
                            </li>
                            <li className={"text-primary"}>
                                <p className={"text-dark dark:text-light"}>Bagni: {apartment.bathrooms}</p>
                            </li>
                        </ul>
                        <h3 className={"font-medium"}>Altri Servizi</h3>
                        <ul className={"text-sm"}>
                            {apartment.animals
                                ? (
                                    <li>Animali</li>
                                ) : ""
                            }
                            {apartment.heating
                                ? (
                                    <li>Riscaldamento</li>
                                ) : ""
                            }
                            {apartment.wifi
                                ? (
                                    <li>Wifi</li>
                                ) : ""
                            }
                            {apartment.elevator
                                ? (
                                    <li>Ascensore</li>
                                ) : ""
                            }
                            {apartment.washingMachine
                                ? (
                                    <li>Lavatrice</li>
                                ) : ""
                            }
                            {apartment.dishwasher
                                ? (
                                    <li>Lavastoviglie</li>
                                ) : ""
                            }
                            {apartment.roomStudy
                                ? (
                                    <li>Stanza Studio</li>
                                ) : ""
                            }
                            {apartment.garden
                                ? (
                                    <li>Cortile</li>
                                ) : ""
                            }
                            {apartment.alarm
                                ? (
                                    <li>Sistema sicurezza</li>
                                ) : ""
                            }
                            {apartment.airConditioning
                                ? (
                                    <li>Aria condizionata</li>
                                ) : ""
                            }
                            {apartment.furniture
                                ? (
                                    <li>Stanza arredata</li>
                                ) : ""
                            }
                            {apartment.ensuiteBathroom
                                ? (
                                    <li>Bagno in camera</li>
                                ) : ""
                            }
                            {apartment.soundproofWindows
                                ? (
                                    <li>Infissi insonorizzati</li>
                                ) : ""
                            }
                            {apartment.billsIncluded
                                ? (
                                    <li>Bollette incluse</li>
                                ) : ""
                            }
                            {apartment.bikeStorage
                                ? (
                                    <li>Posto Bici</li>
                                ) : ""
                            }
                        </ul>
                    </div>
                </div>
                <div
                    className={"flex flex-col sm:flex-row space-y-2 sm:space-y-0 justify-between bg-dark dark:bg-light rounded-xl py-4 px-6"}>
                    <div>
                        <h3 className={"font-medium text-light dark:text-dark"}>Proprietario: {owner.firstName} {owner.lastName}</h3>
                        <ul className={"ml-4 list-disc"}>
                            <li className={"text-primary"}>
                                <p className={"text-light dark:text-dark"}>Email: {owner.email}</p>
                            </li>
                            <li className={"text-primary"}>
                                <p className={"text-light dark:text-dark"}>Telefono: +39 {owner.phoneNumber}</p>
                            </li>
                        </ul>
                    </div>
                    <div className={"flex space-x-2"}>
                        <button type={"button"}
                                className={"inline-flex justify-center items-center space-x-1 py-3 px-5 text-base font-medium text-center text-light rounded-lg bg-primary hover:bg-primary/70 focus:ring-4 focus:ring-primary/50 dark:focus:ring-primary/50 duration-200 ease-out"}
                                onClick={() => setIsChatOpen(!isChatOpen)}
                        >
                            <p>Chat</p>
                        </button>
                        <button type={"button"}
                                className={"inline-flex justify-center items-center space-x-1 py-3 px-5 text-base font-medium text-center text-light rounded-lg bg-primary hover:bg-primary/70 focus:ring-4 focus:ring-primary/50 dark:focus:ring-primary/50 duration-200 ease-out"}>
                            <p>Affitta</p>
                        </button>
                    </div>
                </div>
                {isChatOpen ? (
                    <div className={"bg-dark dark:bg-light rounded-xl py-4 px-6"}>
                        <Chat/>
                    </div>
                ) : ""}
            </main>
            <Footer isWrapActive={true}/>
        </div>
    );
}

export default ApartmentDetails;