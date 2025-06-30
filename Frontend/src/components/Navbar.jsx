import logo from "../assets/logo.png";
import {Link} from "react-router-dom";

const navLinks = [
    {
        title: "Home",
        link: '/'
    },
    {
        title: "All Cars",
        link: '/cars'
    },
    {
        title: "All Bookings",
        link: '/bookings'
    }
]

const Navbar = () => {
  return (
    <nav className="flex justify-between px-[5vw] border-b-4 border-blue-400 bg-gray-200">
        <Link to='/'>
            <img className="h-[15vh] hover:scale-110" src={logo} alt="logo" />
        </Link>

        <div className="w-[35vw] items-center justify-between flex">
            <ul className="flex w-[20vw] justify-between">
                {
                    navLinks.map( (l, index) => {
                        return <li className="hover:scale-120"> <Link key={index} to={l.link}> {l.title} </Link> </li>
                    } )
                }
            </ul>
            <button className="h-[7vh] hover:scale-110 cursor-pointer rounded-md w-[10vw] bg-blue-600 text-white font-semibold">Login/Register</button>
        </div>
    </nav>
  )
}

export default Navbar;