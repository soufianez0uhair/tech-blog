import {Link} from 'react-router-dom'
import {GrMenu} from 'react-icons/gr'

export default function Header() {
   function navbarToggle() {
       document.querySelector('.navbar').classList.toggle('show');
   }
   return (
       <header>
           <h1>Tech<span>blog</span></h1>
           <GrMenu className="icon--menu" onClick={navbarToggle} />
           <ul className="navbar">
               <li>
                   <Link to="/tech-blog">Home</Link>
               </li>
               <li>
                   <Link to="/tech-blog/addblog">Add Blog</Link>
               </li>
               <li>
                   <Link to="/tech-blog/about">About</Link>
               </li>
           </ul>
       </header>
   )
}