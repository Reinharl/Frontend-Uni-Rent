import {Link} from "react-router-dom";
import {HiArrowRight} from "react-icons/hi";

function Jumbotron() {
    return (
        <section
            className={"bg-center bg-no-repeat bg-[url('')] bg-gray-700 bg-blend-multiply h-screen flex items-center"}>
            <div className={"px-2 sm:px-6 lg:px-8 mx-auto max-w-screen-xl text-center py-24 lg:py-56"}>
                <h1 className={"mb-4 text-4xl font-extrabold tracking-tight leading-none text-light md:text-5xl lg:text-6xl"}>
                    Annunci
                </h1>
                <p className={"mb-8 text-lg font-normal text-light/70 lg:text-xl sm:px-16 lg:px-48"}>
                    Trova il tuo alloggio ideale durante gli anni universitari.
                </p>
                <div className={"flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"}>
                    <Link to={"/apartments"}
                          className={"inline-flex justify-center items-center space-x-1 py-3 px-5 text-base font-medium text-center text-light rounded-lg bg-primary hover:bg-primary/70 focus:ring-4 focus:ring-primary/50 dark:focus:ring-primary/50 duration-200 ease-out"}>
                        <p>Annunci</p>
                        <HiArrowRight className={"w-4 h-4"} aria-hidden={"true"}></HiArrowRight>
                    </Link>
                    <a href={"#about"}
                       className={"inline-flex justify-center hover:text-dark items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-light rounded-lg border border-light hover:bg-light focus:ring-4 focus:ring-light/40 duration-200 ease-out"}>
                        Scopri di più
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Jumbotron;