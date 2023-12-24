import {useState} from "react";
import {BsStars} from "react-icons/bs";

function MatchmakingForm() {
    const [text, setText] = useState("");
    const [textAreaRows, setTextAreaRows] = useState(1);

    const maxRows = 4;

    const handleChange = (e) => {
        const textareaLineHeight = 24;
        const previousRows = e.target.rows;
        e.target.rows = 1;

        const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);

        if (currentRows === previousRows) {
            e.target.rows = currentRows;
        }

        if (currentRows >= maxRows) {
            e.target.rows = maxRows;
            e.target.scrollTop = e.target.scrollHeight;
        }

        setText(e.target.value);
        setTextAreaRows(currentRows < maxRows ? currentRows : maxRows);
    };

    return (
        <form className={"flex justify-center items-center w-full py-4 px-2 sm:px-6 lg:px-8 bg-light dark:bg-dark/95"}>
            <div className={"flex flex-col space-y-2"}>
                <h1 className={"font-bold text-xl text-dark dark:text-light"}>Cerca il tuo Coinquilino!</h1>
                <p className={"text-dark dark:text-light pb-4 text-justify"}>Scrivi una breve descrizione dei tuoi
                    interessi e di quelli che il tuo prossimo coinquilino deve
                    assolutamente avere!
                </p>
                <div className={"relative"}>
                    <div className={"absolute left-0 top-0 flex items-center h-full"}>
                        <BsStars className={"h-6 w-10 text-light dark:text-dark"}/>
                    </div>
                    <button
                        className={"absolute right-0 top-0 flex items-center h-10 bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-primary/90 text-white px-4 rounded-r-md"}
                        disabled={text === ""}>
                        <div className={text === "" ? "cursor-not-allowed" : ""}>Invia</div>
                    </button>
                    <textarea
                        className={"resize-none overflow-auto rounded-md py-2 pl-10 pr-20 outline-none bg-dark dark:bg-light text-light dark:text-dark focus:ring-4 focus:ring-primary w-full"}
                        value={text}
                        onChange={handleChange} rows={textAreaRows} placeholder={"Scrivi qui..."}
                    />
                </div>
            </div>
        </form>
    );
}

export default MatchmakingForm;