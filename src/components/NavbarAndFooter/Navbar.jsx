/* eslint-disable react/prop-types */

import {Disclosure} from '@headlessui/react'
import Logo from "../../assets/logo.svg";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {HiMoon, HiSun} from "react-icons/hi";
import {HiBars3, HiXMark} from "react-icons/hi2";

function Navbar({currentPage, isWrapActive}) {

    const [navigation, setNavigation] = useState([
        {name: "Matchmaking", href: "/matchmaking", isCurrent: false},
        {name: "Annunci", href: "/apartments", isCurrent: false},
        {name: "Accedi", href: "/login", isCurrent: false}
    ]);

    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = window.localStorage.getItem('darkMode');
        return savedTheme !== null
            ? JSON.parse(savedTheme)
            : window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        setNavigation(navigation.map((nav) => ({
            ...nav,
            isCurrent: nav.name === currentPage
        })));
    }, [currentPage]);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        window.localStorage.setItem('darkMode', JSON.stringify(darkMode));

    }, [darkMode]);

    function toggleTheme() {
        setDarkMode(!darkMode);
    }


    return (
        <Disclosure as="header" className={"fixed z-10 h-16 w-full bg-light dark:bg-dark"}>
            {({open}) => (
                <nav
                    className={isWrapActive ? "max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8" : "mx-auto px-2 sm:px-6 lg:px-8"}>
                    <div className={"relative py-4 flex justify-between items-center"}>
                        <Link to={"/"} className={"flex items-center space-x-2 cursor-pointer"}>
                            <img src={Logo} className={"h-8"} alt={"UniRent Logo"}/>
                            <span
                                className={"self-center text-2xl font-semibold whitespace-nowrap text-dark dark:text-light"}>
                                    UniRent
                            </span>
                        </Link>
                        <div className={"absolute right-0 flex items-center sm:hidden"}>
                            <Disclosure.Button as="button" type={"button"}
                                               className={"relative md:hidden inline-flex justify-center items-center w-10 h-10 p-2 rounded-lg text-sm text-dark/50 dark:text-light/50 hover:bg-dark/10 hover:dark:bg-light/10 focus:ring-2 focus:ring-dark/50 dark:focus:ring-light/50 duration-200 ease-out"}>
                                    <span className={"sr-only"}>
                                        Apri menu principale
                                    </span>
                                {open ? (
                                    <HiXMark className={"h-6 w-6"} aria-hidden="true"/>
                                ) : (
                                    <HiBars3 className={"h-6 w-6"} aria-hidden="true"/>
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className={"hidden sm:block"}>
                            <div className={"flex items-center space-x-6"}>
                                <ul className="font-medium flex space-x-8">
                                    {navigation.map((item, index) => (
                                        <li className={"cursor-pointer"} key={index}>
                                            <Link to={item.href}
                                                  className={
                                                      item.isCurrent
                                                          ? "text-primary"
                                                          : "text-dark dark:text-light hover:text-primary duration-200 ease-out"}
                                                  aria-current={item.isCurrent ? "page" : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className={"bg-dark dark:bg-light h-8 w-0.5"}></div>
                                <button type={"button"} onClick={toggleTheme}
                                        className={"dark:text-light p-1 hover:bg-dark/15 dark:hover:bg-light/15 rounded-full"}>
                                    {darkMode && <HiSun className={"h-6 w-6"}/>}
                                    {!darkMode && <HiMoon className={"h-6 w-6"}/>}
                                </button>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className={"sm:hidden bg-light dark:bg-dark -mx-2 px-2"}>
                        <div className={"pb-3 pt-2"}>
                            <ul className={"space-y-1"}>
                                {navigation.map((item, index) => (
                                    <li className={"cursor-pointer"} key={index}>
                                        <Link to={item.href}
                                              className={
                                                  item.isCurrent
                                                      ? "block px-3 py-2 text-light font-medium bg-primary rounded-md"
                                                      : "block px-3 py-2 text-dark font-medium dark:text-light hover:bg-dark/15 dark:hover:bg-light/15 rounded-md duration-200 ease-out"}
                                              aria-current={item.isCurrent ? "page" : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <hr className={"w-full border-dark/20 dark:border-light/20 my-1"}/>
                            <button type={"button"} onClick={toggleTheme}
                                    className={"dark:text-light ml-2 p-1 hover:bg-dark/15 dark:hover:bg-light/15 rounded-full"}>
                                {darkMode && <HiSun className={"h-6 w-6"}/>}
                                {!darkMode && <HiMoon className={"h-6 w-6"}/>}
                            </button>
                        </div>
                    </Disclosure.Panel>
                </nav>
            )}
        </Disclosure>
    );
}

export default Navbar;