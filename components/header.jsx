"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiCloseLargeFill, RiMenu3Line } from "react-icons/ri";

export default function Header() {
    const [isHeaderVisible, setHeaderVisible] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500); // Verifica si es móvil
        };

        // Escucha cuando se cambia el tamaño de la ventana
        window.addEventListener("resize", handleResize);

        // Llama la función para establecer el valor inicial
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        let timer;

        if (!isMobile) {
            const handleMouseMove = () => {
                setHeaderVisible(true);
                clearTimeout(timer);
                timer = setTimeout(() => {
                    setHeaderVisible(false);
                }, 3000);
            };

            window.addEventListener("mousemove", handleMouseMove);

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
                clearTimeout(timer);
            };
        } else {
            setHeaderVisible(false);
        }
    }, [isMobile]);

    return (
        <>
            {/* Si no es móvil, utiliza la visibilidad del header */}
            {!isMobile && (
                <nav className={`fixed top-0 w-full bg-secondary flex justify-center z-20 transition-transform duration-300 ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}>
                    <ul className="flex gap-4 p-3 lg:text-lg">
                        <Link href="/#s_1" className="hover:text-primary hover:font-semibold text-gray-600 transition-colors">Inicio</Link>
                        <Link href="/#s_2" className="hover:text-primary hover:font-semibold text-gray-600 transition-colors">Servicios</Link>
                        <Link href="/#s_3" className="hover:text-primary hover:font-semibold text-gray-600 transition-colors">Clientes</Link>
                        <Link href="/#s_4" className="hover:text-primary hover:font-semibold text-gray-600 transition-colors">Contacto</Link>
                    </ul>
                </nav>
            )}

            {/* Header solo visible en móvil */}
            {isMobile && (
                <header className="fixed flex justify-between items-center top-0 w-full bg-[#0000004f] z-20 px-4 py-4">
                    <Link href="/#s_1"><Image className="lg:hidden block" src={'/img/logos/wm-white.svg'} width={100} height={50} alt="Logo Principal" /></Link>

                    <button className="border-2 p-1 rounded-lg lg:hidden hover:bg-[#00000099]" onClick={toggleMenu}>
                        <RiMenu3Line className="text-2xl" />
                    </button>

                    <div className={`w-full h-full bg-[#000000f5] fixed left-0 top-0 transition-transform duration-300 ease-in-out ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="relative w-full">
                            <button className="absolute right-0 mt-7 mr-8 text-3xl" onClick={() => toggleMenu(false)}>
                                <RiCloseLargeFill />
                            </button>
                        </div>
                        <div className="w-full h-full flex justify-center flex-col gap-20 items-center z-20">
                            <ul className="text-center text-2xl cursor-pointer text-white">
                                <li className="p-3 hover:border-b-[2px]"><Link href="/#s_1" onClick={() => toggleMenu(false)}>Inicio</Link></li>
                                <li className="p-3 hover:border-b-[2px]"><Link href="/#s_2" onClick={() => toggleMenu(false)}>Servicios</Link></li>
                                <li className="p-3 hover:border-b-[2px]"><Link href="/#s_3" onClick={() => toggleMenu(false)}>Clientes</Link></li>
                                <li className="p-3 hover:border-b-[2px] mb-6"><Link href="/#s_4" onClick={() => toggleMenu(false)}>Contacto</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
            )}
        </>
    );
}
