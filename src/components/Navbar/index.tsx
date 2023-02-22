import Link from "next/link";
import Image from "next/image";
import HeaderImage from "../../assets/images/headerLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="p-0 px-6 z-50 fixed w-full flex items-center justify-between bg-white shadow-lg">
      <div>
        <Link href={"#"} className="px-6 py-3 sm:px-0 inline-block">
          <Image
            className="inline-block"
            height={30}
            quality={100}
            alt="Abdul Rehman - Software Engineer"
            src={HeaderImage}
          />
        </Link>
        <ul className="mx-4 border-l-2 px-6 inline-block sm:hidden">
          <li className="inline-block">
            <Link
              className="mx-3 opacity-75 text-sm border-b-2 border-transparent duration-500 hover:border-red-300 hover:opacity-100"
              href="#"
            >
              Home
            </Link>
          </li>
          <li className="inline-block">
            <Link
              className="mx-3 opacity-75 text-sm border-b-2 border-transparent duration-500 hover:border-red-300 hover:opacity-100"
              href="#"
            >
              About Me
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link
          className="hidden sm:inline-block"
          href={"#"}
          onClick={(event) => event.preventDefault()}
        >
          <FontAwesomeIcon icon={faBars} />
        </Link>
      </div>
    </div>
  );
}
