import './Header.css'
import logo from '../assets/pp.jpg'

function Header(){
    return (
        <header className="header">
            <img src={logo}alt="Company Logo" className="logo" />
                <nav className='right-section'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <w3m-button/>
                </nav>
        </header>
    );

}

export default Header