import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt2, HiLockClosed } from "react-icons/hi";


const Navbar = () => {

  const[open, setOpen]=useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/blog', name: 'Blog' },
      ];
      

    return (
        <nav className="text-black bg-yellow-300 p-6">
        <div className="md:hidden text-3xl" onClick={ () => setOpen(!open)}> 
          {
            open === true ? <HiLockClosed></HiLockClosed> 
            : <HiOutlineMenuAlt2></HiOutlineMenuAlt2>
          }
           </div>
   <ul className={`md:flex absolute md:static duration-1000
   ${open ? 'top-16' : '-top-60'}
    bg-yellow-200 px-6 `}>
   {
     routes.map(route => <Link key={route.id} route={route}></Link>)
     }
   </ul>
        </nav>
    );
};

export default Navbar;