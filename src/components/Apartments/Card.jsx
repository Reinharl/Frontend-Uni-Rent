/* eslint-disable react/prop-types */

import {useEffect, useState} from "react";
import ImgPlaceholder from "../../assets/img.placeholder.jpg";
import DangerAlert from "../Utils/DangerAlert.jsx";
import {Carousel} from 'flowbite-react';
import {carouselTheme} from "../../lib/carouselTheme.js";
import {Link} from "react-router-dom";

function Card({apartment}) {

    const [apartmentImages, setApartmentImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            const baseUrl = "http://localhost:8080/api/apartment-images";

            const url = `${baseUrl}/search/findByApartmentId?id=${apartment.id}`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const responseJson = await response.json();

            const responseData = responseJson._embedded["apartment-images"];

            setApartmentImages(responseData);

            setIsLoading(false);
        }

        fetchImages().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, []);

    let image;

    if (isLoading) {
        image = (
            <img src={ImgPlaceholder} alt={"Segnaposto per l'immagine"}
                 className={"h-full w-full rounded-xl object-cover animate-pulse aspect-square"}
            />
        );
    } else if (httpError) {
        image = (
            <div
                className={"flex justify-center items-center aspect-square bg-red-200 dark:bg-light/20 rounded-xl"}>
                <DangerAlert message={httpError}/>
            </div>
        );
    } else if (apartmentImages[1]?.image) {
        image = (
            <div className="h-full w-full rounded-xl object-cover aspect-square overflow-hidden">
                <Carousel slide={false} theme={carouselTheme}>
                    {apartmentImages.map((apartmentImage, index) => (
                        <Link key={apartmentImage.id} to={`/apartments/${apartment.id}`}>
                            <img src={apartmentImage.image} alt={`Immagine appartamento ${index}`}
                                 className={"h-full w-full object-cover aspect-square"}/>
                        </Link>
                    ))}
                </Carousel>
            </div>
        );
    } else if (apartmentImages[0]?.image) {
        image = (
            <Link to={`/apartments/${apartment.id}`}>
                <img src={apartmentImages[0].image} alt={`Immagine appartamento 1`}
                     className={"h-full w-full rounded-xl object-cover aspect-square"}/>
            </Link>
        );
    } else {
        image = (
            <Link to={`/apartments/${apartment.id}`}>
                <div className={"flex justify-center items-center aspect-square bg-primary rounded-xl"}>
                    <span className={"font-bold text-white text-2xl"}>
                        Nessun immagine
                    </span>
                </div>
            </Link>
        );
    }

    return (
        <div className={"flex flex-col space-y-2 group"}>
            {image}
            <Link to={`/apartments/${apartment.id}`}>
                <h1 className={"font-bold"}>
                    {apartment.city}
                </h1>
                <p>
                    {apartment.rooms === 1 ? `${apartment.rooms} stanza disponibile` : `${apartment.rooms} stanze disponibili`}
                </p>
                <p className={"font-bold"}>
                    {apartment.monthlyPrice} € <span className={"font-normal"}>al mese</span>
                </p>
            </Link>
        </div>
    );
}

export default Card;