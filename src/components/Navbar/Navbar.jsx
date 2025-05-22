import React from 'react';
import Link from './Link';

  

const navigationData=[
  {
    "id": 1,
    "name": "Home",
    "path": "/home"
  },
  {
    "id": 2,
    "name": "About",
    "path": "/about"
  },
  {
    "id": 3,
    "name": "Services",
    "path": "/services"
  },
  {
    "id": 4,
    "name": "Blog",
    "path": "/blog"
  },
  {
    "id": 5,
    "name": "Contact",
    "path": "/contact"
  }
]

const Navbar = () => {
    return (

        <div>
                <nav className='flex py-1.5 bg-pink-400'>
            {
                navigationData.map(route=> <Link key={route.id} route={route}></Link>)
            }
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