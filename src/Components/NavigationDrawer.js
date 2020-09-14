import React from 'react';
import userImg from '../img/User.svg';
import { Link } from 'react-router-dom';

class NavigationDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkMode: false,
            isOpen: false,
        };
    }

    // // Handle Menu

    openMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    };

    // // Handle Dark mode

    toggleDarkMode = () => {
        this.setState({
            isDarkMode: !this.state.isDarkMode,
        })
        setTimeout(this.handleDarkMode, 100)
        
    }

    handleDarkMode = () => {
        if (this.state.isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    render () {
        return (
            <aside className="navigation-drawer-wrapper">
                <div className={this.state.isOpen ? "navigation-drawer nav-open" : "navigation-drawer"} id="navigation-drawer">
                    <div className="user">
                        <img src={userImg} alt="user" />
                        <h2>User</h2>
                        <p>
                            Nocturno: <span id="modo-nocturno">{this.state.isDarkMode ? "SI" : "NO"}</span>
                        </p>
                        <input
                            type="checkbox"
                            id="switch"
                            name="theme"
                            onChange={this.toggleDarkMode}
                        />
                        <label className="label" htmlFor="switch">Toggle</label>
                    </div>
                    <Link className="salir" to={"/"}>Cerrar sesión</Link>
                    <div id="menu" className="menu" onClick={this.openMenu}>
                        Menú
                    </div>
                </div>
            </aside>
    );
    }

    
}

export default NavigationDrawer;