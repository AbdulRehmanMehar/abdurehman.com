import "@/styles/globals.css";
import Image from "next/image";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import NavLink from "@/components/NavLink";
import { Poppins } from "@next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import HeaderImage from "@/assets/images/headerLogo.png";
import Button from "@/components/Button";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";

const popins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Navbar
        branding={
          <NavLink
            href={"/"}
            className="after:content-none hover:border-transparent"
          >
            <Image
              className="inline-block"
              height={30}
              quality={100}
              alt="Abdul Rehman - Software Engineer"
              src={HeaderImage}
            />
          </NavLink>
        }
        links={
          <>
            {routes.map(({ path, name }) => (
              <NavLink
                key={path}
                isActive={router.pathname === path}
                href={path}
              >
                {name}
              </NavLink>
            ))}
          </>
        }
        socialProfiles={
          <>
            <Button
              href="https://github.com/AbdulRehmanMehar"
              variant="secondary"
              target="_blank"
              size="small"
              title="GitHub"
              className="h-7 w-7 p-[5px] rounded-full flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faGithubAlt} />
            </Button>
            <Button
              href="https://www.linkedin.com/in/mehar6925"
              variant="secondary"
              target="_blank"
              size="small"
              title="LinkedIn"
              className="h-7 w-7 p-[5px] rounded-full flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Button>
          </>
        }
        callToAction={
          <>
            <Button
              variant="primary"
              size="small"
              className="flex flex-row items-center"
            >
              <CalendarDaysIcon className="h-5 w-5 mr-2 -mt-1" />
              <p className="">Book a Call</p>
            </Button>
          </>
        }
      />
      <main className={`compact min-h-full transform-gpu ${popins.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
