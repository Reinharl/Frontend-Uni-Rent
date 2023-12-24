/* eslint-disable react/prop-types */

import {useEffect, useState} from "react";
import Card from "./Card.jsx";
import LoadingStatus from "../Utils/LoadingStatus.jsx";
import DangerAlert from "../Utils/DangerAlert.jsx";
import Pagination from "./Pagination.jsx";

function Grid({city, heating, animals, wifi, elevator, kitchen, washing_machine, dishwasher, room_study, garden, alarm, air_conditioning, furniture, ensuite_bathroom, soundproof_windows, bills_included, bike_storage}) {

    const [apartments, setApartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const [baseUrl, setBaseUrl] = useState("http://localhost:8080/api/apartments/search/findApartmentFilters?available=true");
    const [activePage, setActivePage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);

    const fetchApartments = async (url) => {

        // set loading status to true while fetching data
        setIsLoading(true);

        // request data from server
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        // convert response to JSON
        const responseJson = await response.json();

        // extract apartments data and total pages from the response
        const responseData = responseJson._embedded.apartments;
        const responsePages = responseJson.page.totalPages;

        // update state with fetched data
        setApartments(responseData);
        setMaxPage(responsePages);

        // set loading status to false
        setIsLoading(false);
    }

    // fetch apartments data when baseUrl or activePage changes
    useEffect(() => {
        fetchApartments(`${baseUrl}&page=${activePage - 1}&size=15`).catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, [baseUrl, activePage]);

    // update baseUrl when filters changes
    useEffect(() => {
        setActivePage(1);
        setBaseUrl(`http://localhost:8080/api/apartments/search/findApartmentFilters?city=${city}&heating=${heating}&animals=${animals}&available=true&wifi=${wifi}&elevator=${elevator}&kitchen=${kitchen}&washingMachine=${washing_machine}&dishwasher=${dishwasher}&roomStudy=${room_study}&garden=${garden}&alarm=${alarm}&airConditioning=${air_conditioning}&furniture=${furniture}&ensuiteBathroom=${ensuite_bathroom}&soundproofWindows=${soundproof_windows}&billsIncluded=${bills_included}&bikeStorage=${bike_storage}`)
    }, [city, heating, animals, wifi, elevator, kitchen, washing_machine, dishwasher, room_study, garden, alarm, air_conditioning, furniture, ensuite_bathroom, soundproof_windows, bills_included, bike_storage]);

    let content;

    if (isLoading) {
        content = <LoadingStatus/>;
    } else if (httpError) {
        content = <DangerAlert message={httpError}/>;
    } else {
        content =
            <div className={"grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4 mb-[100px]"}>
                {apartments.map(apartment => (
                    <Card key={apartment.id} apartment={apartment}/>
                ))}
            </div>
    }

    return (
        <section className={"relative flex-grow w-full sm:mt-16 p-4 bg-light dark:bg-dark/95 text-dark dark:text-light"}>
            {content}
            <div className={"absolute bottom-8 left-1/2 -translate-x-1/2 mt-16"}>
                <Pagination
                    active={activePage}
                    setActive={setActivePage}
                    maxPage={maxPage}
                />
            </div>
        </section>
    );
}

export default Grid;