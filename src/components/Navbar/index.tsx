import Link from "next/link";
import Image from "next/image";
import HeaderImage from '../../assets/images/headerLogo.png';

export default function Navbar() {
    return (
        <div className="p-0 px-6 relative flex items-center justify-between bg-white shadow-lg">
            <div>
                <Link href={'#'} className="max-4 px-6 py-3 inline-block">
                    <Image className="inline-block" height={30} quality={100} alt="Abdul Rehman - Software Engineer" src={HeaderImage} />
                </Link>
                <ul className="mx-4 border-l-2 px-6 inline-block">
                    <Link className="mx-3 opacity-75 text-sm border-b-2 border-transparent duration-500 hover:border-red-300 hover:opacity-100" href="#">
                        Home
                    </Link>
                    <Link className="mx-3 opacity-75 text-sm border-b-2 border-transparent duration-500 hover:border-red-300 hover:opacity-100" href="#">
                        About Me
                    </Link>
                    
                </ul>
            </div>
            <div>
                Contact
            </div>
        </div>
    );
}