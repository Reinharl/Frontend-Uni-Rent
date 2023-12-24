/* eslint-disable react/prop-types */

import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Matchmaking from "./pages/Matchmaking.jsx";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./lib/firebase.js";
import ProtectedRoute from "./components/Utils/ProtectedRoute.jsx";
import Apartments from "./pages/Apartments.jsx";
import ApartmentDetails from "./pages/ApartmentDetails.jsx";

function App() {

    const [user, setUser] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsFetching(false);
                return;
            }

            setUser(null);
            setIsFetching(false);
        });

        return () => unsubscribe();
    }, []);

    if (isFetching) {
        return <h2>Loading ...</h2>;
    }

    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/apartments"} element={<Apartments/>}/>
            <Route path={"/apartments/:apartmentId"} element={<ApartmentDetails/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/matchmaking"} element={<ProtectedRoute user={user}><Matchmaking/></ProtectedRoute>}/>
        </Routes>
    );
}

export default App;
