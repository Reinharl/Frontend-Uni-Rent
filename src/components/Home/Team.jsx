import FrancescoImg from "../../assets/f.depinto.svg";
import LeonardoImg from "../../assets/l.vaira.svg";
import {Link} from "react-router-dom";
import {FaGithub, FaLinkedin} from "react-icons/fa";

function Team() {
    return (
        <section className={"bg-light dark:bg-dark/95 text-dark dark:text-light"}>
            <div
                className={"max-w-screen-xl mx-auto py-32 px-2 sm:px-6 lg:px-8"}>
                <div className={"flex flex-col space-y-16"}>
                    <div className={"space-y-2 text-center"}>
                        <h3 className={"text-3xl font-bold tracking-wide"}>
                            Il nostro team
                        </h3>
                        <p className={"text-clip font-medium"}>
                            Il team è composto da persone entusiaste di offrire un servizio di qualità.
                        </p>
                    </div>
                    <div className={"grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-8"}>
                        <div
                            className={"block p-6 bg-dark dark:bg-light rounded-lg shadow-xl shadow-dark/50 text-center"}>
                            <img
                                className={"bg-primary w-24 h-24 rounded-full mx-auto mb-6 ring-8 ring-primary"}
                                src={FrancescoImg} alt={"Foto di Francesco"}/>
                            <h5 className={"mb-2 text-2xl font-bold tracking-tight text-light dark:text-dark"}>
                                Francesco de Pinto
                            </h5>
                            <p className={"font-medium text-light/50 dark:text-dark/75"}>
                                Classe 2000 studente di ingegneria informatica e dell&apos;automazione presso il
                                Politecnico di Bari.
                            </p>
                            <div className={"flex flex-row mt-2 justify-center space-x-4"}>
                                <Link to={"https://www.linkedin.com/in/francesco-de-pinto/"} target={"_blank"}>
                                    <FaLinkedin className={"w-4 h-4 fill-white dark:fill-black"}/>
                                </Link>
                                <Link to={"https://github.com/Reinharl"} target={"_blank"}>
                                    <FaGithub className={"w-4 h-4 fill-white dark:fill-black"}/>
                                </Link>
                            </div>
                        </div>
                        <div
                            className={"block p-6 bg-dark dark:bg-light rounded-lg shadow-xl shadow-dark/50 text-center"}>
                            <img
                                className={"bg-primary w-24 h-24 rounded-full mx-auto mb-6 ring-8 ring-primary"}
                                src={LeonardoImg} alt={"Foto di Leonardo"}/>
                            <h5 className={"mb-2 text-2xl font-bold tracking-tight text-light dark:text-dark"}>
                                Leonardo Pio Vaira
                            </h5>
                            <p className={"font-medium text-light/50 dark:text-dark/75"}>
                                Anno 2003 appassionato di tecnologie innovative e studente di ing. informatica
                            </p>
                            <div className={"flex flex-row mt-2 justify-center space-x-4"}>
                                <Link to={"https://www.linkedin.com/in/leonardo-pio-vaira-bab099263/"} target={"_blank"}>
                                    <FaLinkedin className={"w-4 h-4 fill-white dark:fill-black"}/>
                                </Link>
                                <Link to={"https://github.com/vairaleo03"} target={"_blank"}>
                                    <FaGithub className={"w-4 h-4 fill-white dark:fill-black"}/>
                                </Link>
                            </div>
                        </div>
                        <div
                            className={"block p-6 bg-dark dark:bg-light rounded-lg shadow-xl shadow-dark/50 text-center"}>
                            <img
                                className={"bg-primary w-24 h-24 rounded-full mx-auto mb-6 ring-8 ring-primary"}
                                src={FrancescoImg} alt={""}/>
                            <h5 className={"mb-2 text-2xl font-bold tracking-tight text-light dark:text-dark"}>
                                Francesco de Pinto
                            </h5>
                            <p className={"font-medium text-light/50 dark:text-dark/75"}>
                                Classe 2000 studente di ingegneria informatica e dell&apos;automazione presso il
                                Politecnico di Bari.
                            </p>
                            <div className={"flex flex-row mt-2 justify-center space-x-4"}>
                                <Link to={"https://www.linkedin.com/in/francesco-de-pinto/"} target={"_blank"}>
                                    <FaLinkedin className={"w-4 h-4 fill-white dark:fill-black"}/>
                                </Link>
                                <Link to={"https://github.com/Reinharl"} target={"_blank"}>
                                    <FaGithub className={"w-4 h-4 fill-white dark:fill-black"}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;