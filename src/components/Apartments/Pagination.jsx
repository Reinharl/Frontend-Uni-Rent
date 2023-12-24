/* eslint-disable react/prop-types */

import {Typography} from "@material-tailwind/react";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

function Pagination({active, setActive, maxPage}) {

    const next = () => {
        if (active < maxPage) {
            setActive(active + 1);
        }
    };

    const prev = () => {
        if (active > 1) {
            setActive(active - 1);
        }
    };

    return (
        <nav className={"flex justify-center items-center gap-8"}>
            <button onClick={prev} disabled={active === 1}
                    className={`ring-2 rounded-full p-1.5 ${active === 1 ? 'ring-slate-500 text-slate-500' : 'ring-black dark:ring-light'}`}
            >
                <FaArrowAltCircleLeft strokeWidth={2} className="h-6 w-6"/>
            </button>
            <Typography color="gray" className="font-normal">
                Page <strong className="text-sky-600">{active}</strong> of{" "}
                <strong className="text-sky-600">{maxPage}</strong>
            </Typography>
            <button onClick={next} disabled={active === maxPage}
                    className={`ring-2 rounded-full p-1.5 ${active === maxPage ? 'ring-slate-500 text-slate-500' : 'ring-black dark:ring-light'}`}
            >
                <FaArrowAltCircleRight strokeWidth={2} className="h-6 w-6"/>
            </button>
        </nav>
    );
}

export default Pagination;