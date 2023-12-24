import {BsPeopleFill, BsRocketTakeoffFill} from "react-icons/bs";
import {PiChatFill} from "react-icons/pi";

function Service() {

    return (
        <section className={"bg-light dark:bg-dark/95 text-dark dark:text-light"}>
            <div
                className={"max-w-screen-xl mx-auto py-32 px-2 sm:px-6 lg:px-8"}>
                <div className={"flex flex-col space-y-16"}>
                    <div className={"space-y-2 text-center"}>
                        <h3 className={"text-3xl font-bold tracking-wide"}>
                            I nostri servizi
                        </h3>
                        <p className={"text-clip font-medium"}>
                            Offriamo una gamma di servizi per aiutarti a <br/> trovare il tuo alloggio ideale per gli
                            anni
                            universitari.
                        </p>
                    </div>
                    <div className={"grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-8"}>
                        <div
                            className={"block p-6 bg-dark dark:bg-light rounded-lg shadow-xl shadow-dark/50 text-center"}>
                            <BsPeopleFill className={"mx-auto mb-2 w-16 h-16 fill-primary"}/>
                            <h5 className={"mb-2 text-2xl font-bold tracking-tight text-light dark:text-dark"}>
                                Matchmaking
                            </h5>
                            <p className={"font-medium text-light/50 dark:text-dark/75"}>
                                Trova i coinquilini ideali in base ai tuoi interessi, abitudini di studio e preferenze.
                            </p>
                        </div>
                        <div
                            className={"block p-6 bg-dark dark:bg-light rounded-lg shadow-xl shadow-dark/50 text-center"}>
                            <BsRocketTakeoffFill className={"mx-auto mb-2 w-16 h-16 fill-primary"}/>
                            <h5 className={"mb-2 text-2xl font-bold tracking-tight text-light dark:text-dark"}>
                                Ricerca Avanzata
                            </h5>
                            <p className={"font-medium text-light/50 dark:text-dark/75"}>
                                Sfrutta il massimo potenziale dell&apos;intelligenza artificiale per trovare il tuo
                                alloggio ideale.
                            </p>
                        </div>
                        <div
                            className={"block p-6 bg-dark dark:bg-light rounded-lg shadow-xl shadow-dark/50 text-center"}>
                            <PiChatFill className={"mx-auto mb-2 w-16 h-16 fill-primary"}/>
                            <h5 className={"mb-2 text-2xl font-bold tracking-tight text-light dark:text-dark"}>
                                Chat Integrata
                            </h5>
                            <p className={"font-medium text-light/50 dark:text-dark/75"}>
                                Comunica direttamente con l&apos;affittuario o con il cliente direttamente da UniRent.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;