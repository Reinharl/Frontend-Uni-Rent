import {useState} from "react";
import {BsStars} from "react-icons/bs";
import Chat from "../Chat/Chat.jsx";
import LoadingStatus from "../Utils/LoadingStatus.jsx";

function MatchmakingForm() {
    const [text, setText] = useState("");
    const [textAreaRows, setTextAreaRows] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [customer, setCustomer] = useState(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
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

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        if (text !== "") {
            // fai la richiesta POST alla tua API
            fetch('http://localhost:8080/api/customers/matchmaking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: text
            })
                .then(response => response.json())
                .then(data => {
                    setCustomer(data);
                    setIsLoading(false);
                });
        }
    };

    return (
        <form onSubmit={handleSubmit}
              className={"flex flex-col justify-center items-center w-full py-4 px-2 sm:px-6 lg:px-8 bg-light dark:bg-dark/95"}>
            <div className={"flex flex-col"}>
                <h1 className={"font-bold text-xl text-dark dark:text-light"}>Cerca il tuo Coinquilino!</h1>
                <p className={"text-dark dark:text-light text-justify mb-2"}>Scrivi una breve descrizione dei tuoi
                    interessi e di quelli che il tuo prossimo coinquilino deve
                    assolutamente avere!
                </p>
                <div className={"relative mb-8"}>
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
                {isLoading ? (
                    <LoadingStatus />
                ) : customer && (
                    <div
                        className={"flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 justify-between w-full bg-dark dark:bg-light rounded-md mb-2 py-4 px-6"}>
                        <div>
                            <h3 className={"font-medium text-light dark:text-dark"}>Match: {customer.firstName} {customer.lastName}</h3>
                        </div>
                        <div className={"flex space-x-2"}>
                            <button type={"button"}
                                    className={"inline-flex justify-center items-center space-x-1 py-3 px-5 text-base font-medium text-center text-light rounded-md bg-primary hover:bg-primary/70 focus:ring-4 focus:ring-primary/50 dark:focus:ring-primary/50 duration-200 ease-out"}
                                    onClick={() => setIsChatOpen(!isChatOpen)}
                            >
                                <p>Chat</p>
                            </button>
                        </div>
                    </div>
                )}
                {isChatOpen ? (
                    <div className={"bg-dark dark:bg-light rounded-md py-4 px-6"}>
                        <Chat/>
                    </div>
                ) : ""}
            </div>
        </form>
    );
}

export default MatchmakingForm;