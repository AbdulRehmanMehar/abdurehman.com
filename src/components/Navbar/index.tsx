import Link from "next/link";
import Image from "next/image";
import HeaderImage from '../../assets/images/headerLogo.png';

export default function Navbar() {
    return (
        <div className="p-0 px-6 flex items-center justify-between bg-white shadow-lg">
            <div>
                <Link href={'#'}>
                    <Image className="inline-block" height={70} quality={100} alt="Abdul Rehman - Software Engineer" src={HeaderImage} />
                </Link>
            </div>
            <div className="text-left">
                <Link href="#">Home</Link>
                <Link href="#">Home</Link>
            </div>
            <div>
                Contact
            </div>
        </div>
    );
}