
function NavBar() {

    return (
    <header className='sticky top-0'> 
        <nav className='flex justify-end px-10 items-center py-6 '>
                <ul className='flex items-center gap-10 '> 
                    <a href="/#home"> <li>Home</li> </a>
                    <a href="/#about"> <li>About Me</li> </a>
                    <a  href="/#projects"> <li>Projects</li> </a>
                    <a  href="/#contact"> <li>Contact</li> </a>
                </ul>
        </nav>
    </header>

    )
}

export default NavBar
