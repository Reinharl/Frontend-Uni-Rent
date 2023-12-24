/* eslint-disable react/prop-types */

import Select from "../Utils/Select.jsx";
import Checkbox from "../Utils/Checkbox.jsx";

function Sidebar({
                     setCity,
                     setHeating,
                     setAnimals,
                     setWifi,
                     setElevator,
                     setWashing_machine,
                     setDishwasher,
                     setRoom_study,
                     setGarden,
                     setAlarm,
                     setAir_conditioning,
                     setFurniture,
                     setEnsuite_bathroom,
                     setSoundproof_windows,
                     setBills_included,
                     setBike_storage
                 }) {
    return (
        <aside
            className={"w-full sm:w-fit mt-16 py-4 px-2 sm:px-6 lg:px-8 bg-light dark:bg-dark/95 text-dark dark:text-light border-b sm:border-b-0 sm:border-r border-dark/20 dark:border-light/20"}>
            <ul className={"space-y-8"}>
                <Select
                    id={"city"}
                    labelContent={"Città: "}
                    initValue={""}
                    fromUrl={"http://localhost:8080/api/apartments/search/cities"}
                    set={setCity}
                />
                <li className={"space-y-2"}>
                    <h1 className={"font-bold"}>
                        Altri servizi
                    </h1>
                    <Checkbox
                        id={"heating"}
                        labelContent={"Riscaldamento"}
                        set={setHeating}
                    />
                    <Checkbox
                        id={"pet"}
                        labelContent={"Animali"}
                        set={setAnimals}
                    />
                    <Checkbox
                        id={"wifi"}
                        labelContent={"Wifi"}
                        set={setWifi}
                    />
                    <Checkbox
                        id={"elevator"}
                        labelContent={"Ascensore"}
                        set={setElevator}
                    />
                    <Checkbox
                        id={"washing-machine"}
                        labelContent={"Lavatrice"}
                        set={setWashing_machine}
                    />
                    <Checkbox
                        id={"dishwasher"}
                        labelContent={"Lavastoviglie"}
                        set={setDishwasher}
                    />
                    <Checkbox
                        id={"study-room"}
                        labelContent={"Stanza Studio"}
                        set={setRoom_study}
                    />
                    <Checkbox
                        id={"garden"}
                        labelContent={"Cortile"}
                        set={setGarden}
                    />
                    <Checkbox
                        id={"alarm"}
                        labelContent={"Sistema sicurezza"}
                        set={setAlarm}
                    />
                    <Checkbox
                        id={"air-conditioning"}
                        labelContent={"Aria condizionata"}
                        set={setAir_conditioning}
                    />
                    <Checkbox
                        id={"forniture"}
                        labelContent={"Stanza arredata"}
                        set={setFurniture}
                    />
                    <Checkbox
                        id={"ensuite-bathroom"}
                        labelContent={"Bagno in camera"}
                        set={setEnsuite_bathroom}
                    />
                    <Checkbox
                        id={"soundproof-windows"}
                        labelContent={"Infissi insonorizzati"}
                        set={setSoundproof_windows}
                    />
                    <Checkbox
                        id={"bills-included"}
                        labelContent={"Bollette incluse"}
                        set={setBills_included}
                    />
                    <Checkbox
                        id={"bike-storage"}
                        labelContent={"Posto Bici"}
                        set={setBike_storage}
                    />
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;