
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './header.scss'

const Header =() =>{
    const [menuActive, setMenuActive] = useState(false);
    const [clazze, setClazze] = useState('')

    const onChangeMenu = () => {
        setMenuActive(!menuActive)
        if(menuActive){
            setClazze(' active')
        } else{
            setClazze('')
        }
    }


    return (
        <header className="header">
            <div className="container">
                <Link to={'/'} className='header__logo'>EliteInvoice</Link>
                <nav className={"header__nav " + clazze}>
                    <ul className="list">
                        <li className="item">
                            <Link to={'/'} className="link">Invoices</Link>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Estimates</a>
                        </li>
                        <li className="item">
                            <Link to={'/clients'} className="link">Clients</Link>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Items</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Repots</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Settings</a>
                        </li>
                    </ul>
                    <div className="header__account">
                        <a href='#' className="account__logIn">Log In</a>
                        <a href='#' className="account__signUp">Sign Up</a>
                    </div>
                </nav>
                <div className={"header__menu " + clazze} onClick={onChangeMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;