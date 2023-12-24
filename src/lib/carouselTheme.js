export const carouselTheme = {
    "root": {
        "base": "relative h-full w-full",
        "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
        "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
    },
    "indicators": {
        "active": {
            "off": "hidden group-hover:block bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
            "on": "hidden group-hover:block bg-primary"
        },
        "base": "h-3 w-3 rounded-full",
        "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    "item": {
        "base": "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
        "wrapper": {
            "off": "w-full flex-shrink-0 transform cursor-default snap-center",
            "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
        }
    },
    "control": {
        "base": "hidden group-hover:inline-flex h-8 w-8 items-center justify-center rounded-full bg-dark/50 group-hover:bg-white/50 group-focus:outline-none dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 sm:h-10 sm:w-10",
        "icon": "h-5 w-5 text-dark dark:text-light sm:h-6 sm:w-6"
    },
    "scrollContainer": {
        "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
        "snap": "snap-x"
    }
};