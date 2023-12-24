/* eslint-disable react/prop-types */

import {FcGoogle} from "react-icons/fc";
import {FaApple} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../lib/firebase.js";

function SignIn({onSwitch}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn() {
        if (!email || !password)
            return;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    return (
        <form className={"p-6 rounded-xl bg-dark dark:bg-light"}>
            <legend className={"text-2xl font-bold tracking-wide"}>Accedi</legend>
            <div className={"flex items-center mt-4 space-x-4"}>
                <button type={"button"}
                        className={"flex space-x-2 border rounded-xl py-2 px-6 hover:bg-light/80 dark:hover:bg-dark/25 focus:ring-4 focus:ring-light/80 dark:focus:ring-dark/25"}>
                    <FcGoogle className={"h-6 w-6"}/>
                    <span>Accedi con Google</span>
                </button>
                <button type={"button"}
                        className={"flex space-x-2 border rounded-xl py-2 px-6 hover:bg-light/80 dark:hover:bg-dark/25 focus:ring-4 focus:ring-light/80 dark:focus:ring-dark/25"}>
                    <FaApple className={"h-6 w-6"}/>
                    <span>Accedi con Apple</span>
                </button>
            </div>
            <div className={"border relative my-6"}>
                    <span
                        className={"absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-[8px] bg-dark dark:bg-light px-4"}>
                        oppure
                    </span>
            </div>
            <fieldset>
                <ul className={"flex flex-col space-y-4"}>
                    <li className={"flex flex-col space-y-2"}>
                        <label htmlFor={"email"} className={"font-semibold"}>Email</label>
                        <input type={"email"} id={"email"} onChange={handleEmailChange}
                               className={"rounded-md bg-light dark:bg-dark/95 text-dark dark:text-white px-4 py-2 border-none outline-none focus:ring focus:ring-primary duration-200 ease-out"}
                               placeholder={"Inserisci la tua email"}/>
                    </li>
                    <li className={"flex flex-col space-y-2"}>
                        <label htmlFor={"password"} className={"font-semibold"}>Password</label>
                        <input type={"password"} id={"password"} onChange={handlePasswordChange}
                               className={"rounded-md bg-light dark:bg-dark/95 text-dark dark:text-white px-4 py-2 border-none outline-none focus:ring focus:ring-primary duration-200 ease-out"}
                               placeholder={"Inserisci la tua password"}/>
                    </li>
                </ul>
            </fieldset>
            <div className={"flex justify-between items-center mt-4"}>
                <div className={"flex space-x-2"}>
                    <input type={"checkbox"} id={"remember"}/>
                    <label htmlFor={"remember"}>Ricordami</label>
                </div>
                <Link to={""} className={"text-primary hover:underline"}>Password dimenticata?</Link>
            </div>
            <button type={"button"} onClick={handleSignIn}
                    className={"w-full block mt-4 mb-2 py-2 px-4 font-medium text-light rounded-lg bg-primary hover:bg-primary/70 focus:ring-4 focus:ring-primary/50 dark:focus:ring-primary/50 duration-200 ease-out"}>
                Accedi al tuo account
            </button>
            <span>Non sei ancora registrato? </span>
            <button type={"button"} onClick={onSwitch}
                    className={"text-primary hover:underline"}>Registrati qui
            </button>
        </form>
    );
}

export default SignIn;