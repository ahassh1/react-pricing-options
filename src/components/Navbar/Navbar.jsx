import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <div>
      <nav className="flex py-4 bg-pink-400 justify-between px-10 ">
        <span className="flex" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="md:hidden"></X>
          ) : (
            <Menu className="md:hidden"></Menu>
          )}

          <ul
            className={`md:hidden absolute duration-1000 text-black
                    ${open ? "top-10" : "-top-40"}
                    bg-amber-200`}
          >
            {links}
          </ul>

          <h3 className="ml-4">My Navbar</h3>
        </span>
        <ul className="md:flex hidden">{links}</ul>
        <button>Sing In Now</button>
      </nav>
    </div>

    // <div>

    //     <nav>
    //         <ul className='flex justify-around py-3 bg-amber-300'>
    //             {
    //                 navigationData.map(route=> <li><a href={route.path}></a>{route.name}</li>)
    //             }
    //         </ul>
    //     </nav>

    //     <nav>
    //         <ul className='flex justify-around py-2
    //          bg-purple-300 text-[16px] text-white'>
    //             <li><a href="/">Home</a></li>
    //             <li><a href="/about">About</a></li>
    //             <li><a href="/gallry">Gallry</a></li>
    //             <li><a href="/blog">Blog</a></li>
    //             </ul>
    //     </nav>
    // </div>
  );
};

export default Navbar;
