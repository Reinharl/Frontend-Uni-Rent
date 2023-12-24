/* eslint-disable react/prop-types */

import Logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";

function Footer({isWrapActive}) {

    return (
        <footer className={"flex-shrink-0 w-full bg-light dark:bg-dark"}>
            <div className={isWrapActive ? "w-full max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 py-4 md:py-8" : "w-full mx-auto px-2 sm:px-6 lg:px-8 py-4 md:py-8"}>
                <div className={"sm:flex sm:items-center sm:justify-between"}>
                    <Link to={"/"} className={"flex items-center mb-4 sm:mb-0 space-x-2"}>
                        <img src={Logo} className={"h-8"} alt="UniRent Logo"/>
                        <span className={"self-center text-2xl font-semibold whitespace-nowrap dark:text-light"}>
                            UniRent
                        </span>
                    </Link>
                    <ul className={"flex flex-wrap items-center text-sm font-medium text-dark/50 dark:text-light/50 sm:mb-0"}>
                        <li>
                            <Link to={"/matchmaking"} className={"hover:underline me-4 md:me-6"}>
                                Matchmaking
                            </Link>
                            <Link to={"/apartments"} className={"hover:underline me-4 md:me-6"}>
                                Annunci
                            </Link>
                        </li>
                        <li>
                            <Link to={"/login"} className={"hover:underline"}>
                                Accedi
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className={"my-6 lg:my-8 sm:mx-auto border-dark/20 dark:border-light/20"}/>
                <span className={"block text-sm text-dark/50 dark:text-light/50 sm:text-center"}>
                    © 2023 <Link to={"/"} className={"hover:underline"}>UniRent™</Link>. Tutti i diritti riservati.
                </span>
            </div>
        </footer>
    );
}

export default Footer;