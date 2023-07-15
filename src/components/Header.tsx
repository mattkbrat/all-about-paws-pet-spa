import React, {useEffect, useState} from "preact/compat";

import '../styles/header.css'

const Header = ({GOOGLE_DIRECTION_URL}: {GOOGLE_DIRECTION_URL: string}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const [route, setRoute] = useState('/');

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        setRoute(window.location.pathname);
        console.log(route);
    }, [route]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        window.addEventListener("scroll", () => {
            setScrolled(window.scrollY > 50);
        });

        return () => {
            window.removeEventListener("scroll", () => {
                setScrolled(window.scrollY > 50);
            });
        }

    }, []);

    useEffect(() => {
        const nav = document.getElementById('main_nav');
        if (scrolled) {
            if (!nav || nav.classList.contains('nav_scrolled')) return;
            nav.classList.add('nav_scrolled');
        } else {
            if (!nav || !nav.classList.contains('nav_scrolled')) return;
            nav.classList.remove('nav_scrolled');
        }
    }, [scrolled]);

    const Nav = () => {
        return (
            <ul class={'flex space-y-2 flex-col sm:flex-row text-right self-center w-min md:w-full'}>
                <li id="home" class={`w-full sm:w-auto nav_link ${route === '/' ? 'active' : ''} `}>
                    <a href="/" class="nav_link">Home</a>
                </li>

                <li id="packages" class={` w-full sm:w-auto nav_link ${route === '/packages' ? 'active' : ''} `}>
                    <a href="/packages" class="nav_link">Packages</a>
                </li>
                <li id="faq" class={`w-full sm:w-auto nav_link ${route === '/faq' ? 'active' : ''} `}>
                    <a href="/faq" class="nav_link">FAQ</a>
                </li>
                <li id="about" class={`w-full sm:w-auto nav_link ${route === '/about' ? 'active' : ''} `}>
                    <a href="/about" class="nav_link">About</a>
                </li>
            </ul>
        )
    }


    return (
        <div class="flex flex-row sticky top-0">

            <nav id="main_nav" class={'w-full'}>
                <a href="/" class="flex w-full">
                    <img
                        src="/assets/images/aap_favicon.png"
                        alt="Logo"
                        class={'w-12 h-12 logo'}
                    />
                    <div class={'w-full'}>

                        <h1 class={'w-full'}>
                            All About Paws Pet Spa, LLC.
                        </h1>
                        <p class='w-full text-sm font-light'>
                            Fort Morgan Grooming
                        </p>
                    </div>
                </a>

                <div
                    style={{
                        background: menuOpen ? 'rgba(0,0,0,0.6)' : 'transparent',
                    }}
                    id={'nav-mobile'} class="text-white absolute right-0 top-0 mr-4 mt-4 sm:hidden flex flex-col text-right bg-gray-light">

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        class={'flex w-full flex-row justify-end items-center text-right'}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-menu-2"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke={
                                menuOpen ? 'white' : 'black'
                            }
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <line x1="4" y1="6" x2="20" y2="6"/>
                            <line x1="4" y1="12" x2="20" y2="12"/>
                            <line x1="4" y1="18" x2="20" y2="18"/>
                        </svg>
                    </button>
                    {
                        menuOpen && <Nav/>
                    }
                </div>

                <div class={'hidden sm:flex sm:w-full text-center items-end content-center'}>
                    <Nav/>

                </div>

                <a
                    class="hidden sm:flex text-center items-center content-center nav_link text-sm"
                    href={GOOGLE_DIRECTION_URL}
                    target="_blank"
                    referrerpolicy={'no-referrer'}
                >
                    Get Directions
                </a>

            </nav>



        </div>
    )
}

export default Header;