/* eslint-disable react/prop-types */

import {useEffect, useState} from "react";

function Select({id, labelContent, initValue, fromUrl, set}) {

    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        fetch(fromUrl)
            .then(response => response.json())
            .then(data => setOptions(data));
    }, []);

    const handleChange = (event) => {
        setSelected(event.target.value);
        set(event.target.value);
    }

    return (
        <li className={"flex flex-col space-y-2"}>
            <label htmlFor={id}
                   className={"font-bold"}>
                {labelContent}
            </label>
            <select id={id} value={selected} onChange={handleChange}
                    className={"w-full sm:w-48 py-2 px-4 rounded-full bg-dark dark:bg-light text-light dark:text-dark focus:ring-4 focus:ring-primary"}
            >
                <option value="">{initValue}</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </li>
    );
}

export default Select;