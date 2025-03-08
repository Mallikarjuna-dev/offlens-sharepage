import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
    <header className="bg-white shadow px-28 py-8">
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <Image src="/app-logo.svg" alt="CSK Logo" width={260} height={220} />
            </div>
            <nav className='font-semibold'>
                <Link href="#about" className="text-gray-700 hover:text-yellow-500 mx-2">
                    Unlisted Shares
                </Link>
                <Link href="#about" className="text-gray-700 hover:text-yellow-500 mx-2">
                    About Share
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-yellow-500 mx-2">
                    Contact Us
                </Link>
            </nav>
        </div>
    </header>
);

export default Header;
