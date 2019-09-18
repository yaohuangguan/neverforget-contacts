import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const Navbar = ({title,icon}) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <span><i className={icon}></i><Link to="/">
                    {title}
                </Link></span>
            </h1>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
               
            </ul>
        </div>
    )
}

Navbar.propsTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string,
}

Navbar.defaultProps = {
    title:'Manage Your Contacts',
    icon:'fas fa-id-card-alt'
}
export default Navbar
