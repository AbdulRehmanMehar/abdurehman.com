import "@/styles/globals.css";
import Image from "next/image";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import NavLink from "@/components/NavLink";
import { Poppins } from "@next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import HeaderImage from "@/assets/images/headerLogo.png";

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
      />
      <main className={`compact min-h-full transform-gpu ${popins.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
