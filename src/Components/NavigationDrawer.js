import React from 'react';
import userImg from '../img/User.svg';

function NavigationDrawer () {

    // // Handle Menu

    const openMenu = () => {
        document
            .getElementById('navigation-drawer')
            .classList.toggle('nav-open');
    };

    // // Handle Dark mode

    function toggleDarkMode() {
        if (document.querySelector('input[name=theme]').checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('modo-nocturno').innerHTML = 'SI';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            document.getElementById('modo-nocturno').innerHTML = 'NO';
        }
    }

    return (
            <aside className="navigation-drawer-wrapper">
                <div className="navigation-drawer" id="navigation-drawer">
                    <div className="user">
                        <img src={userImg} alt="user" />
                        <h2>User</h2>
                        <p>
                            Nocturno: <span id="modo-nocturno">NO</span>
                        </p>
                        <input
                            type="checkbox"
                            id="switch"
                            name="theme"
                            onChange={toggleDarkMode}
                        />
                        <label className="label" htmlFor="switch">Toggle</label>
                    </div>
                    <button className="salir">Cerrar sesión</button>
                    <div id="menu" className="menu" onClick={openMenu}>
                        Menú
                    </div>
                </div>
            </aside>
    );
}

export default NavigationDrawer;