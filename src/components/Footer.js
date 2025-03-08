import Image from "next/image";
import Link from "next/link";

const Footer = () => (
    <footer className="bg-white text-white px-28 py-8">
        <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
                <Image src="/app-logo.svg" alt="CSK Logo" width={240} height={200} />
            </div>
            <nav className='font-semibold'>
                <Link href="#about" className="text-gray-500 hover:text-yellow-500 mx-2">
                    Terms & Conditions
                </Link>
                <Link href="#about" className="text-gray-500 hover:text-yellow-500 mx-2">
                    Privacy Policy
                </Link>
            </nav>
        </div>
        <hr className="h-px border-0 bg-gray-300" />
        <div className="text-center text-gray-700 text-md my-8">
            <p>&copy; {new Date().getFullYear()} Chennai Super Kings Unlisted Shares. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;
