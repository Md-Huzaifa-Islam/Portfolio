import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const links = (
    <>
      <li>
        <Link href={"#home"}>Home</Link>
      </li>
      <li>
        <Link href={"#about"}>About Me</Link>
      </li>
      <li>
        <Link href={"#skills"}>Skills</Link>
      </li>
      <li>
        <Link href={"#education"}>Education</Link>
      </li>
      <li>
        <Link href={"#projects"}>Projects</Link>
      </li>
      <li>
        <Link href={"#contact"}>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="bg-mainTheme-0 navbar sticky top-0 z-50 bg-opacity-50 px-5 py-3 md:container md:mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Image src={"/icon.png"} width={30} height={20} alt="logo"></Image>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link
          target="_blank"
          href={
            "https://docs.google.com/document/d/1Iqb59QkhLh6iaYoGPNEUeADYKo1pPLcGryaupCzZGh0/edit?tab=t.0"
          }
          className="bg-btnColor-0 hover:bg-huzaifa-0 hover:text-mainTheme-0 btn text-base font-medium text-white"
        >
          Download Resume
        </Link>
      </div>
    </div>
  );
}
