"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow px-6 md:px-28 py-6">
            <div className="flex justify-between items-center">
                <Image src="/app-logo.svg" alt="CSK Logo" width={200} height={160} />

                <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                <nav className={`md:flex font-semibold space-x-4 ${menuOpen ? "block" : "hidden"}`}>
                    <Link href="#about" className="block py-2 px-4 text-gray-700 hover:text-yellow-500">
                        Unlisted Shares
                    </Link>
                    <Link href="#about" className="block py-2 px-4 text-gray-700 hover:text-yellow-500">
                        About Share
                    </Link>
                    <Link href="#contact" className="block py-2 px-4 text-gray-700 hover:text-yellow-500">
                        Contact Us
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
