/* eslint-disable react/prop-types */

import {useState} from "react";

function Checkbox({id, labelContent, set}) {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);

        if (event.target.checked) {
            set(true);
        } else {
            set("");
        }
    }

    return (
        <div className={"flex items-center me-4 space-x-2"}>
            <input id={id} type={"checkbox"} value={""} checked={isChecked} onChange={handleCheckboxChange}
                   className={"w-4 h-4 rounded-full accent-primary"}/>
            <label htmlFor={id}
                   className={"text-sm font-bold"}>{labelContent}</label>
        </div>
    );
}

export default Checkbox;