import Logo from "../../assets/logo.svg";
import "aos/dist/aos.css";

function About() {

    return (
        <section id={"about"} className={"bg-light dark:bg-dark/95 text-dark dark:text-light"}>
            <div className={"max-w-screen-xl mx-auto py-32 px-2 sm:px-6 lg:px-8"}>
                <div
                    className={"flex flex-col md:flex-row items-start md:items-center space-y-16 md:space-y-0 md:space-x-16 xl:space-x-72"}
                    data-aos="fade-right">
                    <img src={Logo} alt={"UniRent Logo"} className={"h-56"}/>
                    <div className={"space-y-4"}>
                        <h3 className={"text-3xl font-bold text-clip tracking-wide"}>
                            Il miglior servizio di affitti<br/> per studenti universitari in Italia
                        </h3>
                        <p className={"text-clip font-medium"}>
                            Siamo UniRent, un servizio che fornisce affitti in maniera semplice e al minor prezzo sul
                            mercato. Siamo impegnati a offrirti il miglior servizio nella scelta del tuo alloggio ideale
                            durante gli anni universitari.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;