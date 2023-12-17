import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex gap-8 py-2 justify-center text-2xl font-bold font-sans">
      <nav>
        <ul>
         <Link href="female">Female</Link>
         <Link className="ml-14" href="male">Male</Link>
         <Link className="ml-14" href="kids">Kids</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
