import Link from "next/link"
const Navbar = () =>{
    return (
        <div style={{backgroundColor:"gainsboro"}}>
            <h4>Barra de navegacion </h4>
            <ul>
               <Link href="/register"> 
               <li>register</li>
               </Link>
               <Link href="/">
                <li>home</li>

               </Link>
                <Link href="/store">

                <li>store</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar 